import { MENU_DATA } from '../data/menuData'
import { ABOUT_STORY, BRAND, BRAND_IMAGES, CONTACT_LINES } from '../data/restaurant'
import {
  getAnalyticsConfig,
  toAbsoluteAssetUrl,
  toAbsoluteSiteUrl,
} from './siteConfig'

export type RouteSeoKey =
  | 'home'
  | 'menu'
  | 'mandi'
  | 'signature'
  | 'catering'
  | 'wedding-catering'
  | 'about'
  | 'not-found'

export interface BreadcrumbItem {
  name: string
  path: string
}

export interface RouteSeoMeta {
  key: RouteSeoKey
  path: string
  title: string
  description: string
  canonicalUrl: string
  robots: string
  ogImage: string
  ogImageAlt: string
  preloadImage?: {
    href: string
    type?: string
  }
  breadcrumbs: BreadcrumbItem[]
  structuredData: Record<string, unknown>
}

export interface SitemapRouteEntry {
  key: Exclude<RouteSeoKey, 'not-found'>
  path: string
  changefreq: 'weekly' | 'monthly'
  priority: string
}

export const INDEXABLE_SITEMAP_ROUTES: SitemapRouteEntry[] = [
  { key: 'home', path: '/', changefreq: 'weekly', priority: '1.0' },
  { key: 'menu', path: '/menu/', changefreq: 'weekly', priority: '0.9' },
  { key: 'mandi', path: '/menu/mandi/', changefreq: 'weekly', priority: '0.85' },
  { key: 'signature', path: '/signature/', changefreq: 'monthly', priority: '0.8' },
  { key: 'catering', path: '/catering/', changefreq: 'weekly', priority: '0.9' },
  {
    key: 'wedding-catering',
    path: '/wedding-catering/',
    changefreq: 'monthly',
    priority: '0.85',
  },
  { key: 'about', path: '/about/', changefreq: 'monthly', priority: '0.85' },
]

export const LEGACY_REDIRECT_ROUTES = [
  { fromPath: '/contact/', toPath: '/about/#visit' },
  { fromPath: '/visit/', toPath: '/about/#visit' },
  { fromPath: '/special-dishes/', toPath: '/signature/' },
] as const

const RESTAURANT_ID = `${toAbsoluteSiteUrl('/')}#restaurant`
const WEBSITE_ID = `${toAbsoluteSiteUrl('/')}#website`

function buildRestaurantNode() {
  return {
    '@type': 'Restaurant',
    '@id': RESTAURANT_ID,
    name: BRAND.name,
    alternateName: BRAND.cateringBrand,
    url: toAbsoluteSiteUrl('/'),
    logo: {
      '@type': 'ImageObject',
      url: toAbsoluteAssetUrl(BRAND_IMAGES.logoPng.path),
      width: BRAND_IMAGES.logoPng.width,
      height: BRAND_IMAGES.logoPng.height,
    },
    image: [
      toAbsoluteAssetUrl(BRAND_IMAGES.heroBiryani.path),
      toAbsoluteAssetUrl(BRAND_IMAGES.restaurantAmbience.path),
      toAbsoluteAssetUrl(BRAND_IMAGES.weddingCatering.path),
    ],
    description: ABOUT_STORY.shortSummary,
    foundingDate: BRAND.establishedYear,
    telephone: CONTACT_LINES.map((line) => `+${line.rawDigits}`),
    email: BRAND.email,
    servesCuisine: ['Indian', 'Biryani', 'Arabian Mandi', 'South Indian'],
    hasMenu: `${toAbsoluteSiteUrl('/menu/')}#menu`,
    hasMap: BRAND.mapsUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: `${BRAND.locality}, ${BRAND.city}`,
      addressRegion: BRAND.state,
      postalCode: BRAND.postalCode,
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Tirunelveli' },
      { '@type': 'Place', name: 'Melapalayam, Tirunelveli' },
    ],
    sameAs: [
      BRAND.instagramUrl,
      `https://wa.me/${CONTACT_LINES[0].rawDigits}`,
    ],
  }
}

function buildWebSiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: toAbsoluteSiteUrl('/'),
    name: BRAND.name,
    inLanguage: 'en-IN',
    publisher: { '@id': RESTAURANT_ID },
  }
}

function buildBreadcrumbNode(id: string, items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': id,
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: toAbsoluteSiteUrl(item.path),
    })),
  }
}

function buildFullMenuNode() {
  return {
    '@type': 'Menu',
    '@id': `${toAbsoluteSiteUrl('/menu/')}#menu`,
    name: 'MSK Shahul Bhai Biryani Menu',
    inLanguage: 'en-IN',
    mainEntityOfPage: toAbsoluteSiteUrl('/menu/'),
    hasMenuSection: MENU_DATA.map((category) => ({
      '@type': 'MenuSection',
      name: category.title,
      description: `${category.description} (${category.availabilityHours})`,
      hasMenuItem: category.items.map((dish) => ({
        '@type': 'MenuItem',
        name: dish.name,
        description: `${dish.categoryTitle} — ${dish.availability}`,
        image: toAbsoluteSiteUrl(dish.image.replace(import.meta.env.BASE_URL, '')),
      })),
    })),
  }
}

function buildMandiMenuSectionNode() {
  const mandi = MENU_DATA[0]
  return {
    '@type': 'Menu',
    '@id': `${toAbsoluteSiteUrl('/menu/mandi/')}#mandi-menu`,
    name: 'Mandi Specials — Available From 6:30 PM Onwards',
    inLanguage: 'en-IN',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: mandi.title,
        description: `${mandi.description} (${mandi.availabilityHours})`,
        hasMenuItem: mandi.items.map((dish) => ({
          '@type': 'MenuItem',
          name: dish.name,
          description: `${dish.categoryTitle} — ${dish.availability}`,
          image: toAbsoluteSiteUrl(dish.image.replace(import.meta.env.BASE_URL, '')),
        })),
      },
    ],
  }
}

function buildCateringServiceNode(pageUrl: string, idSuffix: string, name: string, description: string, serviceTypes: string[]) {
  return {
    '@type': 'FoodService',
    '@id': `${pageUrl}${idSuffix}`,
    name,
    description,
    serviceType: serviceTypes,
    provider: { '@id': RESTAURANT_ID },
    areaServed: [
      { '@type': 'City', name: 'Tirunelveli' },
      { '@type': 'Place', name: 'Melapalayam, Tirunelveli' },
    ],
  }
}

const ROUTE_SEO_CONFIG: Record<RouteSeoKey, Omit<RouteSeoMeta, 'canonicalUrl' | 'ogImage' | 'preloadImage' | 'structuredData'> & {
  ogImagePath: string
  preloadHero?: boolean
}> = {
  home: {
    key: 'home',
    path: '/',
    title: 'MSK Shahul Bhai Biryani | Biryani & Mandi in Tirunelveli',
    description:
      'Discover MSK Shahul Bhai Biryani in Melapalayam, Tirunelveli. Explore biryani, evening Mandi from 6:30 PM, speciality dishes and catering services.',
    robots: 'index, follow, max-image-preview:large',
    ogImagePath: BRAND_IMAGES.heroBiryani.path,
    ogImageAlt: 'Steaming copper handi of signature biryani at MSK Shahul Bhai Biryani in Tirunelveli',
    preloadHero: true,
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  menu: {
    key: 'menu',
    path: '/menu/',
    title: 'Menu | Biryani, Mandi & Special Dishes | MSK Shahul Bhai',
    description:
      'Explore the MSK Shahul Bhai Biryani menu in Melapalayam, Tirunelveli: evening Mandi from 6:30 PM, 8 biryanis, rice varieties, gravies, Malabar Chukka & grills.',
    robots: 'index, follow, max-image-preview:large',
    ogImagePath: BRAND_IMAGES.chickenBiryani.path,
    ogImageAlt: 'Chicken Biryani garnished with whole spices at MSK Shahul Bhai Biryani Tirunelveli',
    preloadHero: true,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Our Menu', path: '/menu/' },
    ],
  },
  mandi: {
    key: 'mandi',
    path: '/menu/mandi/',
    title: 'Mandi Specials in Tirunelveli (6:30 PM) | MSK Shahul Bhai',
    description:
      'Enjoy freshly prepared Arabian Mandi in Melapalayam, Tirunelveli from 6:30 PM onwards: Chicken Mandi, Alfaham Mandi, Fish Mandi, Golden Mandi & Peri Peri.',
    robots: 'index, follow, max-image-preview:large',
    ogImagePath: BRAND_IMAGES.alfahamMandi.path,
    ogImageAlt: 'Alfaham Mandi served over spiced rice in Melapalayam, Tirunelveli',
    preloadHero: true,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Our Menu', path: '/menu/' },
      { name: 'Mandi Specials', path: '/menu/mandi/' },
    ],
  },
  signature: {
    key: 'signature',
    path: '/signature/',
    title: 'Signature Dishes & Craft | MSK Shahul Bhai Biryani',
    description:
      'Explore MSK Shahul Bhai Biryani’s evening Mandi Specials from 6:30 PM, Biryani Collection, and Malabar Chukka spice heritage in Melapalayam, Tirunelveli.',
    robots: 'index, follow, max-image-preview:large',
    ogImagePath: BRAND_IMAGES.dumMuttonBiryani.path,
    ogImageAlt: 'Traditional copper handi filled with signature biryani',
    preloadHero: true,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Signature Dishes', path: '/signature/' },
    ],
  },
  catering: {
    key: 'catering',
    path: '/catering/',
    title: 'Catering Services in Tirunelveli | MSK Shahul Bhai Biryani',
    description:
      'MSK Catering Service provides wedding catering, marriage functions, family event feasts, and bulk biryani orders across Melapalayam and Tirunelveli.',
    robots: 'index, follow, max-image-preview:large',
    ogImagePath: BRAND_IMAGES.weddingCatering.path,
    ogImageAlt: 'Grand wedding catering biryani feast by MSK Shahul Bhai Biryani Tirunelveli',
    preloadHero: true,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Catering', path: '/catering/' },
    ],
  },
  'wedding-catering': {
    key: 'wedding-catering',
    path: '/wedding-catering/',
    title: 'Wedding Catering & Bulk Orders Tirunelveli | MSK Catering',
    description:
      'Plan wedding catering, marriage function meals, and bulk biryani orders in Melapalayam and Tirunelveli directly with MSK Shahul Bhai Biryani.',
    robots: 'index, follow, max-image-preview:large',
    ogImagePath: BRAND_IMAGES.marriageCatering.path,
    ogImageAlt: 'Steaming copper biryani vessels prepared for marriage catering in Tirunelveli',
    preloadHero: true,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Catering', path: '/catering/' },
      { name: 'Wedding Catering & Bulk Orders', path: '/wedding-catering/' },
    ],
  },
  about: {
    key: 'about',
    path: '/about/',
    title: 'About & Visit MSK Shahul Bhai Biryani | Since 2016',
    description:
      'Founded in 2016 in Melapalayam, Tirunelveli. Read our story, view restaurant photos, get Google Maps directions, or call MSK Shahul Bhai Biryani directly.',
    robots: 'index, follow, max-image-preview:large',
    ogImagePath: BRAND_IMAGES.restaurantAmbience.path,
    ogImageAlt: 'Dining ambience at MSK Shahul Bhai Biryani in Melapalayam, Tirunelveli',
    preloadHero: true,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About & Visit Us', path: '/about/' },
    ],
  },
  'not-found': {
    key: 'not-found',
    path: '/404.html',
    title: 'Page Not Found | MSK Shahul Bhai Biryani',
    description:
      'Return to MSK Shahul Bhai Biryani to explore our biryani and Mandi menu, catering services, and Melapalayam, Tirunelveli location.',
    robots: 'noindex, follow',
    ogImagePath: BRAND_IMAGES.heroBiryani.path,
    ogImageAlt: 'MSK Shahul Bhai Biryani',
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
}

export function getRouteSeo(key: RouteSeoKey): RouteSeoMeta {
  const cfg = ROUTE_SEO_CONFIG[key]
  const canonicalUrl = key === 'not-found' ? toAbsoluteSiteUrl('/') : toAbsoluteSiteUrl(cfg.path)
  const ogImage = toAbsoluteAssetUrl(cfg.ogImagePath)
  const webpageId = `${canonicalUrl}#webpage`
  const breadcrumbId = `${canonicalUrl}#breadcrumb`

  const graph: Record<string, unknown>[] = [
    buildRestaurantNode(),
    buildWebSiteNode(),
    {
      '@type': key === 'about' ? 'AboutPage' : 'WebPage',
      '@id': webpageId,
      url: canonicalUrl,
      name: cfg.title,
      description: cfg.description,
      inLanguage: 'en-IN',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': RESTAURANT_ID },
      breadcrumb: { '@id': breadcrumbId },
    },
    buildBreadcrumbNode(breadcrumbId, cfg.breadcrumbs),
  ]

  if (key === 'menu') {
    graph.push(buildFullMenuNode())
  } else if (key === 'mandi') {
    graph.push(buildMandiMenuSectionNode())
  } else if (key === 'catering') {
    graph.push(
      buildCateringServiceNode(
        canonicalUrl,
        '#catering-service',
        'Catering & Event Management in Tirunelveli',
        'Catering services for weddings, marriage functions, family gatherings, events, and bulk biryani orders in Melapalayam and Tirunelveli.',
        [
          'Wedding Catering',
          'Marriage Function Catering',
          'Family Function Catering',
          'Event Catering',
          'Bulk Biryani Orders',
        ]
      )
    )
  } else if (key === 'wedding-catering') {
    graph.push(
      buildCateringServiceNode(
        canonicalUrl,
        '#wedding-catering-service',
        'Wedding Catering & Bulk Biryani Orders in Tirunelveli',
        'Dedicated wedding food catering, marriage feasts, and bulk biryani orders prepared fresh by MSK Catering Service in Melapalayam and Tirunelveli.',
        ['Wedding Catering', 'Marriage Catering', 'Bulk Biryani Orders']
      )
    )
  }

  return {
    key: cfg.key,
    path: cfg.path,
    title: cfg.title,
    description: cfg.description,
    canonicalUrl,
    robots: cfg.robots,
    ogImage,
    ogImageAlt: cfg.ogImageAlt,
    preloadImage: cfg.preloadHero
      ? {
          href: `${import.meta.env.BASE_URL}${cfg.ogImagePath}`,
          type: 'image/webp',
        }
      : undefined,
    breadcrumbs: cfg.breadcrumbs,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': graph,
    },
  }
}

function escapeHtmlAttr(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export function renderSeoHeadTags(key: RouteSeoKey): string {
  const seo = getRouteSeo(key)
  const { gscVerification, ga4MeasurementId } = getAnalyticsConfig()
  const jsonLd = JSON.stringify(seo.structuredData).replace(/</g, '\\u003c')

  const tags: string[] = [
    `<title>${escapeHtmlAttr(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtmlAttr(seo.description)}" />`,
    `<meta name="robots" content="${escapeHtmlAttr(seo.robots)}" />`,
    `<link rel="canonical" href="${escapeHtmlAttr(seo.canonicalUrl)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:site_name" content="${escapeHtmlAttr(BRAND.name)}" />`,
    `<meta property="og:url" content="${escapeHtmlAttr(seo.canonicalUrl)}" />`,
    `<meta property="og:title" content="${escapeHtmlAttr(seo.title)}" />`,
    `<meta property="og:description" content="${escapeHtmlAttr(seo.description)}" />`,
    `<meta property="og:image" content="${escapeHtmlAttr(seo.ogImage)}" />`,
    `<meta property="og:image:alt" content="${escapeHtmlAttr(seo.ogImageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtmlAttr(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtmlAttr(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtmlAttr(seo.ogImage)}" />`,
  ]

  if (seo.preloadImage) {
    tags.push(
      `<link rel="preload" as="image" href="${escapeHtmlAttr(seo.preloadImage.href)}" type="${seo.preloadImage.type || 'image/webp'}" fetchpriority="high" />`
    )
  }

  if (gscVerification) {
    tags.push(`<meta name="google-site-verification" content="${escapeHtmlAttr(gscVerification)}" />`)
  }

  if (ga4MeasurementId) {
    const safeGaId = escapeHtmlAttr(ga4MeasurementId)
    tags.push(
      `<script async src="https://www.googletagmanager.com/gtag/js?id=${safeGaId}"></script>`,
      `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${safeGaId}');</script>`
    )
  }

  tags.push(`<script type="application/ld+json">${jsonLd}</script>`)
  return tags.join('\n    ')
}

