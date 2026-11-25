import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const ssrDir = path.join(rootDir, 'dist-ssr')
const publicDir = path.join(rootDir, 'public')

const templatePath = path.join(distDir, 'index.html')
const template = fs.readFileSync(templatePath, 'utf-8')

const entryModuleUrl = pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
const {
  renderRoute,
  INDEXABLE_SITEMAP_ROUTES,
  LEGACY_REDIRECT_ROUTES,
  toAbsoluteSiteUrl,
} = await import(entryModuleUrl)

function applyTemplate(baseTemplate, headTags, appHtml) {
  return baseTemplate
    .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, headTags)
    .replace('<!--app-html-->', appHtml)
}

function writeRouteHtml(routePath, html) {
  const cleanRel = routePath.replace(/^\/+/, '').replace(/\/+$/, '')
  const outFile = cleanRel
    ? path.join(distDir, cleanRel, 'index.html')
    : path.join(distDir, 'index.html')
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, html, 'utf-8')
}

// 1. Prerender all indexable canonical routes
for (const route of INDEXABLE_SITEMAP_ROUTES) {
  const { appHtml, headTags } = renderRoute(route.path, route.key)
  const finalHtml = applyTemplate(template, headTags, appHtml)
  writeRouteHtml(route.path, finalHtml)
  console.log(`Prerendered ${route.path} (${route.key})`)
}

// 2. Render 404 SPA fallback with noindex metadata
{
  const { appHtml, headTags } = renderRoute('/404-fallback', 'not-found')
  const notFoundHtml = applyTemplate(template, headTags, appHtml)
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf-8')
  console.log('Generated dist/404.html (noindex)')
}

// 3. Render static HTML redirect stubs for legacy routes so bookmarks/backlinks don't 404 or duplicate
for (const redirect of LEGACY_REDIRECT_ROUTES) {
  const [targetPath, targetHash] = redirect.toPath.split('#')
  const targetUrl =
    toAbsoluteSiteUrl(targetPath) + (targetHash ? `#${targetHash}` : '')
  const redirectHtml = `<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="UTF-8" />
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href="${targetUrl}" />
    <meta http-equiv="refresh" content="0; url=${targetUrl}" />
    <title>Redirecting | MSK Shahul Bhai Biryani</title>
    <script>window.location.replace(${JSON.stringify(targetUrl)});</script>
  </head>
  <body>
    <p>Redirecting to <a href="${targetUrl}">${targetUrl}</a>.</p>
  </body>
</html>
`
  writeRouteHtml(redirect.fromPath, redirectHtml)
  console.log(`Generated legacy redirect ${redirect.fromPath} -> ${redirect.toPath}`)
}

// 4. Generate sitemap.xml (canonical HTTP 200 indexable routes only)
const today = new Date().toISOString().slice(0, 10)
const sitemapEntries = INDEXABLE_SITEMAP_ROUTES.map(
  (route) => `  <url>
    <loc>${toAbsoluteSiteUrl(route.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
).join('\n')

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8')
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8')
console.log(`Generated sitemap.xml with ${INDEXABLE_SITEMAP_ROUTES.length} canonical URLs`)

// 5. Generate robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${toAbsoluteSiteUrl('/sitemap.xml')}
`
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8')
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf-8')
console.log('Generated robots.txt')

// 6. GitHub Pages .nojekyll and temporary SSR cleanup
fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf-8')
fs.rmSync(ssrDir, { recursive: true, force: true })
console.log('Cleaned up dist-ssr and wrote dist/.nojekyll')

