# Technical & Local SEO Implementation Report — MSK Shahul Bhai Biryani

**Site Name:** MSK Shahul Bhai Biryani (MSK Catering Service)  
**Primary Service Area:** Melapalayam, Tirunelveli, Tamil Nadu 627005, India  
**Production URL:** `https://risa113.github.io/msk-shahul-bhai/`  
**Completion Date:** 2026-11-25

> Accuracy Notice: No search rankings, Google Search Console verification, backlinks, or unverified third-party metrics are claimed in this report. Every file change, bundle metric, and HTTP verification result below reflects checks executed directly in this project.

---

## 1. Initial Audit Findings (Before Changes)

Inspecting the pre-existing React 19 + Vite SPA uncovered the following concrete technical and local SEO issues:

1. **Client-Side Rendering (CSR) & Sub-Route HTTP 404s on GitHub Pages**:
   - `src/main.tsx` mounted `<App />` via `createRoot` onto an empty `<div id="root"></div>`, leaving initial HTML empty to crawlers without JavaScript rendering.
   - Sub-routes (`/menu`, `/signature`, `/catering`, `/about`) had no generated directory HTML files and relied on `dist/404.html`, returning HTTP `404` status codes to direct requests.
2. **Missing Technical SEO Files**: Neither `robots.txt` nor `sitemap.xml` existed in `public/` or `dist/`.
3. **Single Static Metadata Template**: `index.html` contained a single site-wide `<title>`, `<meta name="description">`, and static JSON-LD without `<link rel="canonical">`, route-level metadata updates, or `noindex` directives on 404/legacy paths.
4. **Menu SEO & Crawlability Gaps**: Confirmed categories in [menuData.ts](../src/data/menuData.ts) lacked category descriptions, and dedicated high-intent topics (evening **Mandi Specials from 6:30 PM** and **Wedding Catering & Bulk Orders**) had no dedicated landing pages.
5. **Image Optimization & Naming Issues**:
   - `public/images/msk-logo.png` weighed `1,018,627 B` (`1.02 MB`), and three duplicate menu/editorial images existed.
   - Multiple `<img />` tags lacked explicit intrinsic `width`/`height` attributes, and image filenames were generic (`hero-biryani.webp`, `chicken-biryani.webp`).
6. **JavaScript & LCP Render Overhead**:
   - `framer-motion` was bundled site-wide, and `Reveal` (`MotionSection.tsx`) / `HomePage.tsx` initialized hero/content sections with `opacity: 0`.
   - Google Fonts stylesheet loaded synchronously in `index.html`, and React Router used route-level `React.lazy` Suspense fallbacks that conflict with full static hydration.

---

## 2. Implemented Fixes & Architecture Upgrades

### A. Static Prerendering (SSG) & Hydration
- Replaced CSR-only rendering with build-time static HTML prerendering via [entry-server.tsx](../src/entry-server.tsx) (`StaticRouter` + `renderToString`) and [prerender.mjs](../scripts/prerender.mjs), paired with [main.tsx](../src/main.tsx) using `hydrateRoot` when prerendered DOM is present (falling back cleanly to `createRoot` during Vite dev).
- Eliminated `dist/menu`, `dist/catering`, etc. falling back to HTTP `404`: the build now outputs full HTML directory files (`index.html`, `menu/index.html`, `menu/mandi/index.html`, `signature/index.html`, `catering/index.html`, `wedding-catering/index.html`, `about/index.html`).
- Legacy alias routes (`/contact/`, `/visit/`, `/special-dishes/`) emit static `noindex, follow` redirect stubs pointing to their canonical destinations, and `dist/404.html` emits `<meta name="robots" content="noindex, follow" />`.

### B. Page-Level Keyword Map, Titles, Canonicals & H1s

| Route | Title (`chars`) | Desc (`chars`) | Primary `<h1>` | Target Local Topics |
| :--- | :--- | :--- | :--- | :--- |
| `/` | `MSK Shahul Bhai Biryani \| Biryani & Mandi in Tirunelveli` (`55`) | `146` | `MSK Shahul Bhai Biryani – A Taste Worth Gathering For` | Brand name, biryani restaurant in Tirunelveli, restaurant in Melapalayam |
| `/menu/` | `Menu \| Biryani, Mandi & Special Dishes \| MSK Shahul Bhai` (`55`) | `158` | `Biryani, Mandi & Special Dishes` | Biryani varieties in Tirunelveli, gravies, Malabar Chukka, fried & grilled dishes |
| `/menu/mandi/` | `Mandi Specials in Tirunelveli (6:30 PM) \| MSK Shahul Bhai` (`56`) | `154` | `Arabian Mandi Specials in Tirunelveli` | Evening Arabian Mandi (6:30 PM onwards), Chicken/Alfaham/Fish/Golden/Peri Peri Mandi |
| `/signature/` | `Signature Dishes & Craft \| MSK Shahul Bhai Biryani` (`49`) | `152` | `Culinary Craft From the Handi` | House biryani craft, evening Mandi highlight, whole-spice Chukka |
| `/catering/` | `Catering Services in Tirunelveli \| MSK Shahul Bhai Biryani` (`57`) | `148` | `Catering Services for Weddings, Functions & Special Events` | Catering services in Tirunelveli & Melapalayam, event catering, bulk food orders |
| `/wedding-catering/` | `Wedding Catering & Bulk Orders Tirunelveli \| MSK Catering` (`57`) | `140` | `Wedding Catering & Bulk Biryani Orders` | Wedding catering & marriage catering in Tirunelveli, bulk biryani orders |
| `/about/` | `About & Visit MSK Shahul Bhai Biryani \| Since 2016` (`49`) | `153` | `A Decade of Taste, Tradition & Trust` | Brand story since 2016, Melapalayam restaurant location, NAP & Google Maps directions |

- All routes render dynamic client metadata updates via [SeoHead.tsx](../src/components/SeoHead.tsx) synchronized with [seoConfig.ts](../src/seo/seoConfig.ts) and visible `<Breadcrumbs />` ([Breadcrumbs.tsx](../src/components/Breadcrumbs.tsx)).

### C. Structured Data (`@graph` JSON-LD)
Implemented unified, conflict-free JSON-LD per route in [seoConfig.ts](../src/seo/seoConfig.ts):
- Canonical `Restaurant` (`#restaurant` with `name`, `alternateName`, `url`, `logo`, `image`, `foundingDate: "2016"`, `telephone`, `email`, `servesCuisine`, `hasMenu`, `hasMap`, `PostalAddress` for Melapalayam, Tirunelveli 627005, `areaServed`, and `sameAs`).
- `WebSite` (`#website`), `WebPage` / `AboutPage`, and route-matched `BreadcrumbList`.
- Full `Menu` schema (`#menu`) on `/menu/` covering all **7 confirmed categories** and **29 `MenuItem` entries** (zero invented pricing/ratings), `Menu` section schema on `/menu/mandi/`, and `FoodService` schemas on `/catering/` and `/wedding-catering/`.
- Zero fabricated fields: opening hours, street door number, review counts, ratings, awards, MOQs, and prices remain excluded until confirmed by management.

### D. Local SEO, NAP Consistency & Content Improvements
- Consistent **NAP** (`MSK Shahul Bhai Biryani`, `Melapalayam, Tirunelveli, Tamil Nadu 627005, India`, `+91 78678 13000`, `+91 78678 14000`, Google Maps link `https://maps.app.goo.gl/CzxZ4NVBfi62fv8U7`) across [Navbar.tsx](../src/components/Navbar.tsx), [Footer.tsx](../src/components/Footer.tsx), [HomePage.tsx](../src/pages/HomePage.tsx), [CateringPage.tsx](../src/pages/CateringPage.tsx), [WeddingCateringPage.tsx](../src/pages/WeddingCateringPage.tsx), [AboutVisitPage.tsx](../src/pages/AboutVisitPage.tsx), and JSON-LD.
- Added unique descriptive category copy across all 7 sections in [menuData.ts](../src/data/menuData.ts) and ensured all 29 confirmed dishes are immediately rendered in static HTML on `/menu/` with clear availability timings (`6:30 PM onwards` for Mandi Specials; `Morning to Night` for the remaining 6 categories).
- Preserved client policy: no prices, no online ordering/delivery, and no invented minimums.

### E. Technical SEO Files
- `dist/sitemap.xml` & `public/sitemap.xml`: Lists the **7 canonical HTTP 200 URLs** using live origin config ([siteConfig.ts](../src/seo/siteConfig.ts)).
- `dist/robots.txt` & `public/robots.txt`: Allows all crawlers (`Allow: /`) and declares `Sitemap: https://risa113.github.io/msk-shahul-bhai/sitemap.xml`.

### F. Image Optimization & Core Web Vitals
- Renamed all `40` public assets cleanly using descriptive names (e.g., `msk-shahul-bhai-biryani-tirunelveli-hero.webp`, `msk-shahul-bhai-chicken-mandi-melapalayam.webp`, `msk-shahul-bhai-wedding-catering-tirunelveli.webp`), removed duplicate copies, and compressed `msk-shahul-bhai-biryani-logo.png` from `1,018,627 B` to `98,979 B` (total `public/images` footprint: `4,165.8 KB`).
- Added exact natural `width`/`height` attributes matching disk dimensions across every `<img>` in components, data files, and pages.
- Hero LCP images omit `loading="lazy"`, carry `fetchPriority="high"`, and receive `<link rel="preload" as="image" ... fetchpriority="high">` in the prerendered `<head>`; below-the-fold images use `loading="lazy"` + `decoding="async"`.
- Removed `framer-motion` (`npm uninstall framer-motion`) and `Suspense` route splitting so the unified client JS bundle dropped to **`381.97 kB` (`107.80 kB` gzip)** (`1707` modules transformed), with `index-CEceAIsj.css` at `49.34 kB` (`8.33 kB` gzip), non-blocking Google Fonts CSS, smooth anchor hash handling in [Layout.tsx](../src/components/Layout.tsx), and zero initial `opacity: 0` traps.

---

## 3. Build & Automated Verification Summary

- `npm run build` (`tsc -b && vite build && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node scripts/prerender.mjs`): Exited `0`.
- Python HTML/SEO audit across all `7` prerendered HTML files (`dist/index.html`, `dist/menu/index.html`, `dist/menu/mandi/index.html`, `dist/signature/index.html`, `dist/catering/index.html`, `dist/wedding-catering/index.html`, `dist/about/index.html`):
  - `AUDIT ERRORS: NONE`
  - Confirmed `1` H1 per page, unique `<title>` and `<meta name="description">`, `1` canonical link, valid `@graph` JSON-LD, zero missing/broken internal links or image sources, matching width/height attributes, all menu categories & dishes visible in prerendered HTML, zero `opacity: 0`, and zero prices.
- Supporting guides created:
  - [GOOGLE_SEARCH_CONSOLE_AND_GA4_SETUP.md](./GOOGLE_SEARCH_CONSOLE_AND_GA4_SETUP.md)
  - [LOCAL_CONTENT_PLAN.md](./LOCAL_CONTENT_PLAN.md)

---

## 4. Remaining Tasks Requiring Business Owner Input

1. **Exact Street Address**: Confirm door number / street / landmark in Melapalayam, Tirunelveli to replace `addressStatus` placeholder text in [restaurant.ts](../src/data/restaurant.ts) and complete `PostalAddress.streetAddress` in [seoConfig.ts](../src/seo/seoConfig.ts).
2. **Confirmed Opening Hours**: Provide daily opening and closing hours so real `OpeningHoursSpecification` schema and footer/visit hours can replace `openingHoursStatus`.
3. **Google Search Console & GA4 IDs**: Supply real `VITE_GSC_VERIFICATION` and `VITE_GA4_MEASUREMENT_ID` values (or DNS TXT verification) following [GOOGLE_SEARCH_CONSOLE_AND_GA4_SETUP.md](./GOOGLE_SEARCH_CONSOLE_AND_GA4_SETUP.md) and submit `sitemap.xml`.
4. **Custom Domain (Optional Recommended Upgrade)**: Consider pointing a branded domain (e.g., `.com` / `.in`) rather than `github.io` subdirectory hosting, updating `base: '/'` in `vite.config.ts` and `VITE_SITE_URL` before final sitemap submission.
5. **Runtime Lighthouse / DevTools Check**: Run Chrome DevTools Console + PageSpeed Insights / Lighthouse audit against the live deployed URLs (`https://risa113.github.io/msk-shahul-bhai/`) once propagated to inspect mobile Core Web Vitals field/lab scores visually.

