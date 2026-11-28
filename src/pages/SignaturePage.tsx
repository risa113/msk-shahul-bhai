import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { WhatsAppBrandIcon } from '../components/BrandIcons'
import { Reveal, SectionHeading } from '../components/MotionSection'
import { SeoHead } from '../components/SeoHead'
import { BRAND_IMAGES, CONTACT_LINES, SIGNATURE_SHOWCASE, assetUrl, buildWhatsAppUrl } from '../data/restaurant'
import { getRouteSeo } from '../seo/seoConfig'

export function SignaturePage() {
  const breadcrumbs = getRouteSeo('signature').breadcrumbs

  return (
    <>
      <SeoHead routeKey="signature" />

      {/* Editorial Hero */}
      <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-brand-deep pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={assetUrl(BRAND_IMAGES.dumMuttonBiryani.path)}
            alt="Traditional copper handi filled with signature biryani at MSK Shahul Bhai Biryani Tirunelveli"
            width={BRAND_IMAGES.dumMuttonBiryani.width}
            height={BRAND_IMAGES.dumMuttonBiryani.height}
            fetchPriority="high"
            className="msk-hero-media h-full w-full object-cover"
          />
          <div className="hero-scrim-burgundy absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="msk-hero-stagger">
            <Breadcrumbs items={breadcrumbs} variant="dark" />
          </div>
          <SectionHeading
            as="h1"
            variant="dark"
            animateMode="hero"
            eyebrow="Signature & Special Dishes"
            title="Culinary Craft"
            accentWord="From the Handi"
            description="An editorial showcase dedicated to MSK Shahul Bhai Biryani’s evening Mandi Specials (6:30 PM onwards), Biryani Collection, and Malabar spice heritage in Melapalayam, Tirunelveli."
          />
        </div>
      </section>

      {/* Editorial Feature Blocks */}
      <section className="border-t border-gold/30 bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-5 sm:px-8 lg:px-10">
          {SIGNATURE_SHOWCASE.map((item, idx) => {
            const isEven = idx % 2 === 1
            return (
              <article
                key={item.number}
                className="msk-card-hover group grid grid-cols-1 items-center gap-10 rounded-3xl border border-brand-primary/14 bg-white p-6 shadow-[0_14px_40px_-20px_rgba(63,9,19,0.18)] sm:p-10 lg:grid-cols-12"
              >
                <Reveal
                  variant="image-curtain"
                  className={`lg:col-span-7 ${isEven ? 'lg:order-2' : ''}`}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-gold/40">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      decoding="async"
                      width={item.imageWidth}
                      height={item.imageHeight}
                      className="msk-img-zoom h-[320px] w-full object-cover sm:h-[420px]"
                    />
                    <span className="absolute top-4 left-4 rounded-full border border-gold/70 bg-brand-primary px-3.5 py-1 font-serif text-sm text-white shadow-sm">
                      {item.number}
                    </span>
                  </div>
                </Reveal>

                <Reveal
                  variant="editorial"
                  delay={0.08}
                  className={`lg:col-span-5 ${isEven ? 'lg:order-1' : ''}`}
                >
                  <span className="text-[11px] font-semibold tracking-[0.24em] text-brand-primary uppercase">
                    {item.eyebrow}
                  </span>
                  <h2 className="mt-3 font-serif text-3xl leading-tight font-bold text-ink sm:text-5xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <p className="mt-6 inline-block rounded-full border border-gold/60 bg-cream px-4 py-2 text-[11px] font-semibold tracking-[0.08em] text-brand-primary">
                    {item.confirmationNote}
                  </p>
                </Reveal>
              </article>
            )
          })}
        </div>

        {/* Bottom Editorial Band */}
        <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="cta-scale">
            <div className="rounded-3xl border border-gold/50 bg-gradient-to-r from-brand-primary via-brand-primary to-brand-deep p-8 text-white shadow-lg sm:p-12">
              <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <span className="text-[11px] font-semibold tracking-[0.24em] text-gold-soft uppercase">
                    Visit or Enquire
                  </span>
                  <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
                    Ask About Today’s Signature Biryani &amp; Evening Mandi
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-cream/90">
                    Visit MSK Shahul Bhai Biryani in Melapalayam, Tirunelveli, explore the full
                    menu, or connect via WhatsApp before coming by.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3.5">
                  <a
                    href={buildWhatsAppUrl(
                      CONTACT_LINES[0].rawDigits,
                      'Hello MSK Shahul Bhai Biryani, what Signature dishes and Mandi Specials are available today?'
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="msk-btn group inline-flex items-center gap-2.5 rounded-lg border border-gold/70 bg-white px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-brand-deep uppercase shadow-sm hover:bg-cream"
                  >
                    <WhatsAppBrandIcon className="h-4 w-4 text-brand-primary" />
                    <span>Enquire on WhatsApp</span>
                    <ArrowUpRight className="msk-arrow-diag h-4 w-4 text-brand-primary" />
                  </a>

                  <Link
                    to="/menu/"
                    className="msk-btn group inline-flex items-center gap-2 rounded-lg border border-gold/60 bg-brand-deep/75 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase hover:bg-brand-deep"
                  >
                    <span>Explore Full Menu</span>
                    <ArrowRight className="msk-arrow-right h-4 w-4 text-gold-soft" />
                  </Link>

                  <Link
                    to="/menu/mandi/"
                    className="msk-btn inline-flex items-center gap-2 rounded-lg border border-gold/45 bg-transparent px-5 py-3.5 text-xs font-semibold tracking-[0.14em] text-gold-soft uppercase hover:border-gold hover:text-white"
                  >
                    <span>Mandi Specials (6:30 PM)</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
