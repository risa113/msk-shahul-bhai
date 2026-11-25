import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App.tsx'
import {
  INDEXABLE_SITEMAP_ROUTES,
  LEGACY_REDIRECT_ROUTES,
  renderSeoHeadTags,
  type RouteSeoKey,
} from './seo/seoConfig.ts'
import { getBasePath, toAbsoluteSiteUrl } from './seo/siteConfig.ts'

export { INDEXABLE_SITEMAP_ROUTES, LEGACY_REDIRECT_ROUTES, toAbsoluteSiteUrl }

export function renderRoute(routePath: string, key: RouteSeoKey) {
  const base = getBasePath()
  const cleanSub = routePath.replace(/^\/+/, '')
  const fullLocation = `${base}${cleanSub}`

  const appHtml = renderToString(
    <StrictMode>
      <StaticRouter location={fullLocation} basename={base}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>
  )

  return {
    appHtml,
    headTags: renderSeoHeadTags(key),
  }
}

