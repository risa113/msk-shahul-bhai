import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin, Phone, UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { WhatsAppBrandIcon } from '../components/BrandIcons'
import { SectionHeading } from '../components/MotionSection'
import { SeoHead } from '../components/SeoHead'
import {
  BRAND,
  BRAND_IMAGES,
  CATERING_GALLERY,
  CONTACT_LINES,
  assetUrl,
  buildWhatsAppUrl,
} from '../data/restaurant'
import { getRouteSeo } from '../seo/seoConfig'

const WEDDING_HIGHLIGHTS = [
  {
    title: 'Wedding & Nikah Feasts',
    description:
      'Authentic mutton and chicken biryani alongside roasted accompaniments and traditional salna prepared for memorable marriage receptions across Tirunelveli.',
  },
  {
    title: 'Marriage & Engagement Functions',
    description:
      'Consistent whole-spice aroma and thoughtful preparation for pre-wedding dinners, family functions, and celebratory gatherings in Melapalayam and surrounding areas.',
  },
  {
    title: 'Bulk Biryani Orders',
    description:
      'Bulk biryani vessels prepared fresh to order for home celebrations, community gatherings, and special events — discussed directly with our catering team.',
  },
] as const

const ENQUIRY_STEPS = [
  {
    step: '01',
    title: 'Share Your Occasion & Date',
    detail:
      'Let our team know whether you are planning a wedding, marriage function, family gathering, or bulk biryani order along with your venue area in Tirunelveli.',
  },
  {
    step: '02',
    title: 'Discuss Menu Varieties Directly',
    detail:
      'Choose dishes directly with our team across our confirmed Biryani Collection, Mandi varieties, Ghee & Coconut Rice, Agni & Masala Gravies, Malabar Chukka, and starters.',
  },
  {
    step: '03',
    title: 'Personal Coordination via Phone or WhatsApp',
    detail:
      'Every catering arrangement is confirmed personally by MSK Catering Service on +91 78678 13000 or +91 78678 14000 without automated middlemen.',
  },
] as const

export function WeddingCateringPage() {
  const breadcrumbs = getRouteSeo('wedding-catering').breadcrumbs

  return (
    <>
      <SeoHead routeKey="wedding-catering" />

      {/* Hero */}
      <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-brand-deep pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={assetUrl(BRAND_IMAGES.marriageCatering.path)}
            alt="Steaming copper biryani vessels arranged by MSK Catering Service for wedding catering in Tirunelveli"
            width={BRAND_IMAGES.marriageCatering.width}
            height={BRAND_IMAGES.marriageCatering.height}
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
            eyebrow={`${BRAND.cateringBrand} · Tirunelveli & Melapalayam`}
            title="Wedding Catering &"
            accentWord="Bulk Biryani Orders"
            description="Since 2016, MSK Sahul Bhai Biryani extends the warmth and authentic flavour of our kitchen to weddings, marriage functions, family gatherings, and bulk food orders."
          />

          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href={buildWhatsAppUrl(
                CONTACT_LINES[0].rawDigits,
                'Hello MSK Sahul Bhai Biryani, I would like to enquire about Wedding Catering / Bulk Biryani Orders.'
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-gold/60 bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-md transition-colors hover:bg-brand-secondary"
            >
              <WhatsAppBrandIcon className="h-4 w-4 text-gold-soft" />
              <span>Enquire on WhatsApp</span>
              <ArrowUpRight className="h-4 w-4 text-gold-soft" />
            </a>
            <Link
              to="/catering/#catering-enquiry-form"
              className="inline-flex items-center gap-2 rounded-lg border border-gold/50 bg-white/95 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-brand-deep uppercase shadow-md transition-colors hover:bg-cream"
            >
              <span>Open Catering Enquiry Form</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Wedding & Bulk Focus */}
      <section className="border-t border-gold/30 bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Celebration Hospitality"
            title="Crafted for Marriage Functions"
            accentWord="Across Tirunelveli"
            description="Whether hosting an intimate home function in Melapalayam or coordinating a multi-family wedding celebration in Tirunelveli, our kitchen prepares traditional dishes rooted in consistent flavour."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {WEDDING_HIGHLIGHTS.map((item) => (
              <div key={item.title} className="luxury-panel flex flex-col justify-between p-6">
                <div>
                  <CheckCircle2 className="h-5 w-5 text-brand-primary" aria-hidden="true" />
                  <h2 className="mt-3 font-serif text-2xl font-medium text-ink">{item.title}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Enquiry Workflow */}
          <div className="mt-16 rounded-3xl border border-gold/50 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex flex-col justify-between gap-4 border-b border-gold/30 pb-6 sm:flex-row sm:items-end">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-brand-primary uppercase">
                  <UtensilsCrossed className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                  <span>Direct Team Coordination</span>
                </span>
                <h2 className="mt-2 font-serif text-3xl font-normal text-ink sm:text-4xl">
                  How Catering &amp; Bulk Orders Work
                </h2>
              </div>
              <Link
                to="/menu/"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-brand-primary uppercase hover:text-brand-deep"
              >
                <span>Browse Confirmed Menu Items</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {ENQUIRY_STEPS.map((step) => (
                <div key={step.step} className="rounded-2xl border border-brand-primary/14 bg-cream-soft p-5">
                  <span className="font-serif text-2xl font-medium text-gold">{step.step}</span>
                  <h3 className="mt-2 font-serif text-xl font-medium text-ink">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Event Photos */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {CATERING_GALLERY.map((photo) => (
              <figure key={photo.id} className="luxury-panel overflow-hidden">
                <div className="relative h-64 overflow-hidden bg-cream">
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    width={photo.width}
                    height={photo.height}
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="p-5">
                  <h3 className="font-serif text-2xl font-medium text-ink">{photo.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">{photo.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Bottom Direct Contact Banner */}
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl border border-gold/50 bg-brand-deep p-7 text-cream shadow-md sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-gold-soft uppercase">
                {BRAND.areaSummary}
              </p>
              <h2 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                Connect Directly With {BRAND.cateringBrand}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-cream/85">
                Speak directly with our team by phone or WhatsApp to plan your marriage function,
                wedding feast, or bulk biryani requirement in Tirunelveli.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {CONTACT_LINES.map((line) => (
                <a
                  key={line.id}
                  href={line.telHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-gold/60 bg-white px-5 py-3 text-xs font-semibold tracking-[0.12em] text-brand-deep uppercase transition-colors hover:bg-cream"
                >
                  <Phone className="h-3.5 w-3.5 text-brand-primary" />
                  <span>{line.display}</span>
                </a>
              ))}
              <Link
                to="/about/"
                className="inline-flex items-center gap-2 rounded-lg border border-gold/50 bg-brand-primary px-5 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-brand-secondary"
              >
                <MapPin className="h-3.5 w-3.5 text-gold-soft" />
                <span>Location &amp; Maps</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

