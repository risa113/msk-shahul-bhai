# Google Search Console, GA4 & Google Business Profile Setup Guide

**Business:** MSK Shahul Bhai Biryani (MSK Catering Service)  
**Primary Area:** Melapalayam, Tirunelveli, Tamil Nadu 627005, India  
**Current Live URL:** `https://risa113.github.io/msk-shahul-bhai/`

> Notice: No verification tokens, Analytics Measurement IDs, or fake credentials have been committed to the codebase. Follow the steps below to attach your verified Google accounts cleanly.

---

## 1. How to Verify the Website in Google Search Console

1. Sign in to [Google Search Console](https://search.google.com/search-console) using the official business Google account.
2. Add a property:
   - **If staying on GitHub Pages (`risa113.github.io/msk-shahul-bhai/`)**: choose **URL prefix** and enter exact URL `https://risa113.github.io/msk-shahul-bhai/`.
   - **If moving to a custom domain later** (recommended for brand authority): choose **Domain** property verification via DNS `TXT` record.
3. For **HTML tag** verification on GitHub Pages:
   - Copy the verification token value from `<meta name="google-site-verification" content="YOUR_TOKEN" />`.
   - Build and deploy with the environment variable set:
     - PowerShell: `$env:VITE_GSC_VERIFICATION="YOUR_TOKEN"; npm run build`
     - Or set `VITE_GSC_VERIFICATION` inside `.env.production` / CI secrets (never commit private API keys).
   - [seoConfig.ts](../src/seo/seoConfig.ts) automatically injects `<meta name="google-site-verification">` into every prerendered page when `VITE_GSC_VERIFICATION` is set.
4. Click **Verify** in Google Search Console after deploying.

---

## 2. How to Submit the Sitemap

1. Confirm these live files return HTTP `200 OK`:
   - `https://risa113.github.io/msk-shahul-bhai/robots.txt`
   - `https://risa113.github.io/msk-shahul-bhai/sitemap.xml`
2. In Search Console, open **Indexing -> Sitemaps**.
3. Submit `sitemap.xml` (resulting in `https://risa113.github.io/msk-shahul-bhai/sitemap.xml`).
4. Confirm Google reads all **7 canonical URLs** (`/`, `/menu/`, `/menu/mandi/`, `/signature/`, `/catering/`, `/wedding-catering/`, `/about/`).
5. **If upgrading to a custom domain**, rebuild with `VITE_SITE_URL="https://yourdomain.com"` and `base: '/'` in `vite.config.ts` before resubmitting the updated sitemap.

---

## 3. How to Monitor Indexing

- Check **Indexing -> Pages** weekly after launch to ensure canonical pages appear under **Indexed** rather than **Crawled - currently not indexed** or **Page with redirect**.
- Use **URL Inspection** on key pages (`/`, `/menu/`, `/menu/mandi/`, `/catering/`, `/wedding-catering/`, `/about/`) and click **View Tested Page -> Screenshot & HTML** to confirm Googlebot sees prerendered headings, menu categories, NAP details, and JSON-LD without JavaScript issues.
- Ensure legacy redirect URLs (`/contact/`, `/visit/`, `/special-dishes/`) and `404.html` remain excluded cleanly (`noindex, follow`) so only the 7 canonical URLs compete for indexing.

---

## 4. How to Monitor Search Queries

- Open **Performance -> Search results**.
- Filter **Country** to `India` and review queries combining dish + locality intent:
  - Restaurant & biryani queries around **Tirunelveli** and **Melapalayam**
  - Evening **Mandi** queries (`chicken mandi`, `alfaham mandi`, `arabian mandi`)
  - Function & bulk queries (`wedding catering tirunelveli`, `bulk biryani orders`, `marriage catering melapalayam`)
- Track **Impressions**, **Clicks**, **CTR**, and **Average Position** per landing page URL (`Pages` tab) to check whether `/menu/`, `/menu/mandi/`, `/catering/`, `/wedding-catering/`, and `/about/` attract matching search intent.

---

## 5. How to Monitor Performance & Core Web Vitals

- Review **Experience -> Core Web Vitals** (Mobile and Desktop) in Search Console once sufficient real-user Chrome UX data accumulates.
- Run [PageSpeed Insights](https://pagespeed.web.dev/) periodically against `/`, `/menu/`, and `/catering/` to monitor **LCP**, **INP**, and **CLS** as new menu photos or content are added.

---

## 6. How to Identify SEO Errors

- Check **Indexing -> Pages** reasons for any unexpected `4xx`/`5xx`, server redirects, or alternate-canonical flags.
- Check **Enhancements / Rich results** reports for JSON-LD parsing errors on `Restaurant`, `Menu`, `BreadcrumbList`, and `FoodService`.
- Re-run [URL Inspection] after adding confirmed street address or opening hours to verify valid structured data parsing.

---

## 7. Google Analytics 4 (GA4) Activation

1. Create a GA4 web data stream and copy the Measurement ID (format `G-XXXXXXXXXX`).
2. Set `VITE_GA4_MEASUREMENT_ID="G-XXXXXXXXXX"` at build time (`npm run build`).
3. [seoConfig.ts](../src/seo/seoConfig.ts) omits GA4 tags by default when unset, preventing broken console script calls until your live Measurement ID is configured.
4. Track high-value user actions in GA4:
   - `tel:+917867813000` / `tel:+917867814000` clicks
   - WhatsApp enquiry outbound clicks (`wa.me/917867813000` / `wa.me/917867814000`)
   - Google Maps directions clicks (`maps.app.goo.gl/CzxZ4NVBfi62fv8U7`)

---

## 8. Google Business Profile (GBP) Maintenance Checklist

Your website reinforces Google Business Profile trust signals through consistent NAP details, local schema, and Google Maps links, while ongoing GBP management helps local visibility:

1. **Exact Business Name**: Keep strictly as `MSK Shahul Bhai Biryani` (avoid adding extra city/keyword modifiers to the profile title, which violates Google guidelines).
2. **Primary & Secondary Categories**:
   - Primary category: *Biryani restaurant* (or *Indian restaurant*)
   - Secondary categories (verify exact availability in GBP dashboard): *Caterer*, *Mandi restaurant* / *Arabian restaurant*, *Restaurant*
3. **Confirmed Address & Pin**: Once exact street door number/road name is finalized, match it word-for-word between Google Business Profile, the website [restaurant.ts](../src/data/restaurant.ts), and Schema.org `PostalAddress`. Pin marker should match your verified entrance (`https://maps.app.goo.gl/CzxZ4NVBfi62fv8U7`).
4. **Phone & Website Link**:
   - Phone: `+91 78678 13000`, secondary `+91 78678 14000`
   - Website: live site URL (using UTM parameters if desired, e.g., `?utm_source=gbp&utm_medium=organic` while canonical remains clean)
5. **Opening Hours**: Enter real dine-in hours once confirmed by management, and keep holiday hours updated during festivals/Ramadan.
6. **Menu & Photos**: Add real, authentic photos of dishes and interior (matching actual offerings cleanly) and note that Mandi Specials are served from **6:30 PM onwards**.
7. **Genuine Guest Reviews**: Encourage satisfied walk-in diners and catering families to leave honest reviews on Google Maps; reply promptly and professionally without offering incentives or fabricating reviews.

