export const DEFAULT_SITE_ORIGIN = 'https://risa113.github.io'

export function normalizeSiteOrigin(): string {
  const envOrigin = import.meta.env.VITE_SITE_URL?.trim()
  const raw = envOrigin && envOrigin.length > 0 ? envOrigin : DEFAULT_SITE_ORIGIN
  return raw.replace(/\/+$/, '')
}

export function getBasePath(): string {
  const base = import.meta.env.BASE_URL || '/'
  return base.endsWith('/') ? base : `${base}/`
}

export function toAbsoluteSiteUrl(routePath = '/'): string {
  const origin = normalizeSiteOrigin()
  const base = getBasePath()
  const cleanRoute = routePath.replace(/^\/+/, '')
  return `${origin}${base}${cleanRoute}`
}

export function toAbsoluteAssetUrl(relativeAssetPath: string): string {
  const cleanAsset = relativeAssetPath.replace(/^\/+/, '')
  return `${normalizeSiteOrigin()}${getBasePath()}${cleanAsset}`
}

export function getAnalyticsConfig() {
  return {
    gscVerification: import.meta.env.VITE_GSC_VERIFICATION?.trim() || '',
    ga4MeasurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim() || '',
  }
}

