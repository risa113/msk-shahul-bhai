import { ArrowRight, ArrowUpRight, MapPin, MoonStar, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { WhatsAppBrandIcon } from '../components/BrandIcons'
import { MenuGrid } from '../components/menu/MenuGrid'
import { SectionHeading } from '../components/MotionSection'
import { SeoHead } from '../components/SeoHead'
import { MENU_DATA } from '../data/menuData'
import { BRAND, BRAND_IMAGES, CONTACT_LINES, assetUrl, buildWhatsAppUrl } from '../data/restaurant'
import { getRouteSeo } from '../seo/seoConfig'

export function MandiSpecialsPage() {
  const mandiCategory = MENU_DATA[0]
  const biryaniLink = '/menu/#category-biryani'
  const breadcrumbs = getRouteSeo('mandi').breadcrumbs

  return (
    <>
      <SeoHead routeKey="mandi" />

      {/* Hero */}
      <section className="relative flex min-h-[54vh] items-end overflow-hidden bg-brand-deep pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={assetUrl(BRAND_IMAGES.alfahamMandi.path)}
            alt="Alfaham Mandi served fresh from 6:30 PM at MSK Shahul Bhai Biryani in Tirunelveli"
            width={BRAND_IMAGES.alfahamMandi.width}
            height={BRAND_IMAGES.alfahamMandi.height}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          <div className="hero-scrim-green absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <Breadcrumbs items={breadcrumbs} variant="dark" />
          <SectionHeading
            as="h1"
            variant="dark"
            eyebrow="Evening Speciality · Available from 6:30 PM Onwards"
            title="Arabian Mandi Specials"
            accentWord="in Tirunelveli"
            description="Enjoy slow-roasted Arabian-style Mandi prepared fresh each evening from 6:30 PM onwards at MSK Shahul Bhai Biryani in Melapalayam, Tirunelveli."
          />
        </div>
      </section>

      {/* Evening Schedule & Intro */}
      <section className="border-t border-gold/30 bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 grid grid-cols-1 gap-6 rounded-3xl border border-gold/60 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/65 bg-brand-primary px-3.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-white uppercase">
                <MoonStar className="h-3.5 w-3.5 text-gold-soft" aria-hidden="true" />
                <span>Served Daily From 6:30 PM Onwards</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-normal text-ink sm:text-4xl">
                Five Distinct Mandi Varieties Prepared Every Evening
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {mandiCategory.description} Guests visit MSK Shahul Bhai Biryani in Melapalayam in
                person to order directly at the table alongside our full restaurant menu.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <a
                href={buildWhatsAppUrl(
                  CONTACT_LINES[0].rawDigits,
                  'Hello MSK Shahul Bhai Biryani, I would like to confirm today’s evening Mandi Specials (6:30 PM onwards).'
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-5 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-brand-secondary lg:w-auto"
              >
                <WhatsAppBrandIcon className="h-4 w-4 text-gold-soft" />
                <span>Check Evening Availability</span>
                <ArrowUpRight className="h-4 w-4 text-gold-soft" />
              </a>
              <a
                href={CONTACT_LINES[0].telHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-brand-primary/25 bg-cream px-5 py-3 text-xs font-semibold tracking-[0.12em] text-brand-deep uppercase transition-colors hover:border-brand-primary lg:w-auto"
              >
                <Phone className="h-3.5 w-3.5 text-brand-primary" />
                <span>Call {CONTACT_LINES[0].display}</span>
              </a>
            </div>
          </div>

          <MenuGrid items={mandiCategory.items} />

          {/* Cross-Links & Visit Strip */}
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-gold/45 bg-cream-soft p-7 shadow-xs">
              <h2 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
                Explore Morning-to-Night Biryanis &amp; Grills
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Visiting earlier in the day or pairing starters with Mandi? View our eight
                confirmed biryani varieties, rice selections, Malabar Chukka, and grilled dishes.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/menu/"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-5 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-brand-secondary"
                >
                  <span>View Full Menu</span>
                  <ArrowRight className="h-4 w-4 text-gold-soft" />
                </Link>
                <Link
                  to={biryaniLink}
                  className="inline-flex items-center gap-2 rounded-lg border border-brand-primary/25 bg-white px-5 py-3 text-xs font-semibold tracking-[0.14em] text-ink uppercase transition-colors hover:border-brand-primary"
                >
                  <span>Biryani Collection</span>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-gold/50 bg-brand-deep p-7 text-cream shadow-md">
              <h2 className="font-serif text-2xl font-medium text-white sm:text-3xl">
                Visit {BRAND.name}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-cream/85">
                {BRAND.areaSummary}. {BRAND.orderingNotice}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gold/60 bg-white px-5 py-3 text-xs font-semibold tracking-[0.14em] text-brand-deep uppercase transition-colors hover:bg-cream"
                >
                  <MapPin className="h-4 w-4 text-brand-primary" />
                  <span>Google Maps Directions</span>
                  <ArrowUpRight className="h-4 w-4 text-brand-primary" />
                </a>
                <Link
                  to="/about/"
                  className="inline-flex items-center gap-2 rounded-lg border border-gold/50 bg-brand-primary px-5 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-brand-secondary"
                >
                  <span>Location &amp; Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

