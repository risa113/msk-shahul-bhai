import { useEffect } from 'react'
import { getRouteSeo, type RouteSeoKey } from '../seo/seoConfig'

function upsertMeta(selectorAttr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${selectorAttr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(selectorAttr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(data: Record<string, unknown>) {
  let el = document.head.querySelector(
    'script[type="application/ld+json"]'
  ) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function SeoHead({ routeKey }: { routeKey: RouteSeoKey }) {
  useEffect(() => {
    const seo = getRouteSeo(routeKey)
    document.title = seo.title
    upsertMeta('name', 'description', seo.description)
    upsertMeta('name', 'robots', seo.robots)
    upsertCanonical(seo.canonicalUrl)

    upsertMeta('property', 'og:url', seo.canonicalUrl)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:image', seo.ogImage)
    upsertMeta('property', 'og:image:alt', seo.ogImageAlt)

    upsertMeta('name', 'twitter:title', seo.title)
    upsertMeta('name', 'twitter:description', seo.description)
    upsertMeta('name', 'twitter:image', seo.ogImage)

    upsertJsonLd(seo.structuredData)
  }, [routeKey])

  return null
}

