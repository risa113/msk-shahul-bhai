import { ArrowUpRight, Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { InstagramBrandIcon, WhatsAppBrandIcon } from '../components/BrandIcons'
import { Reveal, SectionHeading } from '../components/MotionSection'
import { SeoHead } from '../components/SeoHead'
import {
  ABOUT_STORY,
  BRAND,
  BRAND_IMAGES,
  CONTACT_LINES,
  RESTAURANT_GALLERY,
  assetUrl,
  buildWhatsAppUrl,
} from '../data/restaurant'
import { getRouteSeo } from '../seo/seoConfig'

export function AboutVisitPage() {
  const breadcrumbs = getRouteSeo('about').breadcrumbs

  return (
    <>
      <SeoHead routeKey="about" />

      {/* Page Hero */}
      <section className="relative flex min-h-[54vh] items-end overflow-hidden bg-brand-deep pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={assetUrl(BRAND_IMAGES.restaurantAmbience.path)}
            alt="Warm welcoming dining ambience at MSK Shahul Bhai Biryani in Melapalayam, Tirunelveli"
            width={BRAND_IMAGES.restaurantAmbience.width}
            height={BRAND_IMAGES.restaurantAmbience.height}
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
            eyebrow={`About MSK Shahul Bhai Biryani · Since ${BRAND.establishedYear}`}
            title={ABOUT_STORY.title}
            accentWord={ABOUT_STORY.accentWord}
            description={ABOUT_STORY.closingStatement}
          />
        </div>
      </section>

      {/* About Us Section */}
      <section id="story" className="border-t border-gold/30 bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <Reveal className="space-y-6 lg:sticky lg:top-28 lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-gold/55 bg-white p-2 shadow-[0_18px_45px_-20px_rgba(38,60,48,0.18)]">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={assetUrl(BRAND_IMAGES.founderPortrait.path)}
                    alt="Shahul Bhai, founder of MSK Shahul Bhai Biryani in Tirunelveli"
                    loading="lazy"
                    decoding="async"
                    width={BRAND_IMAGES.founderPortrait.width}
                    height={BRAND_IMAGES.founderPortrait.height}
                    className="aspect-[16/9] w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-gold/55 bg-white p-8 text-center shadow-[0_18px_45px_-20px_rgba(38,60,48,0.18)]">
                <span className="inline-block rounded-full border border-gold/55 bg-cream px-3.5 py-1 text-[10px] font-semibold tracking-[0.22em] text-brand-primary uppercase">
                  Serving Since {BRAND.establishedYear}
                </span>
                <div className="my-6 flex justify-center">
                  <div className="flex h-56 w-56 items-center justify-center rounded-full bg-cream/70 p-4 ring-1 ring-gold/60">
                    <img
                      src={BRAND.logoPath}
                      alt="Official MSK Catering Service crest logo"
                      loading="lazy"
                      decoding="async"
                      width={BRAND_IMAGES.logoWebp.width}
                      height={BRAND_IMAGES.logoWebp.height}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
                <h2 className="font-serif text-3xl text-ink">{BRAND.name}</h2>
                <p className="mt-1 text-xs font-medium tracking-[0.18em] text-brand-secondary uppercase">
                  {BRAND.cateringBrand}
                </p>
              </div>

              <div className="rounded-3xl border border-gold/50 bg-gradient-to-br from-brand-primary to-brand-deep p-7 text-center text-white shadow-md">
                <p className="text-[10px] font-semibold tracking-[0.26em] text-gold-soft uppercase">
                  Our Promise
                </p>
                <p className="mt-2.5 font-serif text-2xl leading-snug font-medium text-white italic">
                  “{BRAND.heritageTagline}”
                </p>
                <div className="mx-auto mt-4 h-px w-14 bg-gold/70" />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <SectionHeading
                eyebrow={ABOUT_STORY.eyebrow}
                title={ABOUT_STORY.title}
                accentWord={ABOUT_STORY.accentWord}
              />

              <div className="mt-6 space-y-5 rounded-3xl border border-brand-primary/14 bg-white p-6 shadow-xs sm:p-8">
                {ABOUT_STORY.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={`leading-relaxed ${
                      idx === 0
                        ? 'text-base font-medium text-ink sm:text-[1.0625rem]'
                        : 'text-sm text-muted sm:text-[0.95rem]'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="border-t border-gold/40 pt-5">
                  <p className="font-serif text-xl font-semibold text-brand-primary sm:text-2xl">
                    {ABOUT_STORY.closingStatement}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {ABOUT_STORY.pillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-gold/40 bg-cream-soft p-5 shadow-xs"
                  >
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-primary uppercase">
                      {pillar.label}
                    </span>
                    <h3 className="mt-1.5 font-serif text-xl font-medium text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{pillar.detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-brand-primary/14 bg-white p-5 shadow-xs">
                  <h3 className="font-serif text-2xl font-medium text-ink">
                    Visit &amp; Order Directly
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {BRAND.orderingNotice}
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-primary/14 bg-white p-5 shadow-xs">
                  <h3 className="font-serif text-2xl font-medium text-ink">
                    Follow Our Journey
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    Stay connected with our official Instagram account for kitchen highlights,
                    updates, and announcements.
                  </p>
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-brand-primary uppercase hover:text-brand-deep"
                  >
                    <InstagramBrandIcon className="h-3.5 w-3.5 text-gold" />
                    <span>{BRAND.instagramHandle}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Restaurant Gallery */}
      <section className="border-t border-gold/30 bg-cream-soft py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Restaurant Gallery"
              title="Inside the"
              accentWord="MSK Experience"
              description="Warm hospitality, whole spice craft, and freshly served biryani made to be shared at the table in Melapalayam, Tirunelveli."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RESTAURANT_GALLERY.map((photo) => (
              <figure key={photo.id} className="luxury-panel overflow-hidden">
                <div className="h-64 overflow-hidden bg-cream">
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
                  <h3 className="font-serif text-xl font-medium text-ink">{photo.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {photo.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us, Maps, Contact & Hours */}
      <section id="visit" className="border-t border-gold/30 bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Visit Us & Contact"
              title="Location, Hours &"
              accentWord="Direct Lines"
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Map & Hours */}
            <Reveal className="lg:col-span-6">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-brand-primary/14 bg-white p-6 shadow-sm sm:p-8">
                <div>
                  <h3 className="font-serif text-3xl text-ink">{BRAND.areaSummary}</h3>

                  <div className="mt-6 space-y-4 text-xs leading-relaxed text-muted sm:text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary"
                        aria-hidden="true"
                      />
                      <div>
                        <span className="block text-[10px] font-semibold tracking-[0.18em] text-brand-primary uppercase">
                          Pinned Coordinates ({BRAND.mapsCoordinates.dms})
                        </span>
                        <p className="mt-1">{BRAND.addressStatus}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary"
                        aria-hidden="true"
                      />
                      <div>
                        <span className="block text-[10px] font-semibold tracking-[0.18em] text-brand-primary uppercase">
                          Opening Hours (Placeholder Until Confirmed)
                        </span>
                        <p className="mt-1">{BRAND.openingHoursStatus}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-gold/40">
                    <iframe
                      title="MSK Shahul Bhai Biryani Google Maps Pin in Melapalayam, Tirunelveli"
                      src={BRAND.mapsEmbedUrl}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-64 w-full border-0"
                    />
                  </div>
                </div>

                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-sm transition-colors hover:bg-brand-secondary"
                >
                  <Navigation className="h-4 w-4 text-gold-soft" />
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="h-4 w-4 text-gold-soft" />
                </a>
              </div>
            </Reveal>

            {/* Phone Numbers, WhatsApp & Social */}
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-gold/50 bg-gradient-to-br from-brand-primary to-brand-deep p-6 text-white shadow-md sm:p-8">
                <div>
                  <h3 className="font-serif text-3xl text-white">Call or WhatsApp Us</h3>
                  <p className="mt-2 text-xs leading-relaxed text-cream/90">
                    Click either number below to call directly or open a WhatsApp conversation using
                    India’s international `+91` format.
                  </p>

                  <div className="mt-6 space-y-4">
                    {CONTACT_LINES.map((line, idx) => (
                      <div
                        key={line.id}
                        className="rounded-2xl border border-gold/35 bg-white p-5 text-ink shadow-xs"
                      >
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-secondary uppercase">
                          Phone Line 0{idx + 1}
                        </span>
                        <p className="mt-1 font-serif text-3xl text-ink">{line.display}</p>
                        <p className="mt-1 text-[11px] text-muted">{line.note}</p>

                        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          <a
                            href={line.telHref}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 py-2.5 text-xs font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-brand-secondary"
                          >
                            <Phone className="h-3.5 w-3.5 text-gold-soft" />
                            <span>Call Now</span>
                          </a>

                          <a
                            href={buildWhatsAppUrl(
                              line.rawDigits,
                              'Hello MSK Shahul Bhai Biryani, I would like to get in touch.'
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gold/60 bg-cream px-4 py-2.5 text-xs font-semibold tracking-[0.12em] text-brand-deep uppercase transition-colors hover:bg-cream-soft"
                          >
                            <WhatsAppBrandIcon className="h-3.5 w-3.5 text-brand-primary" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 border-t border-gold/25 pt-5 sm:grid-cols-2">
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-gold/35 bg-brand-deep/65 px-4 py-3 text-xs text-white transition-colors hover:border-gold hover:text-gold-soft"
                  >
                    <span className="inline-flex items-center gap-2">
                      <InstagramBrandIcon className="h-4 w-4 text-gold" />
                      <span>{BRAND.instagramHandle}</span>
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center justify-between rounded-xl border border-gold/35 bg-brand-deep/65 px-4 py-3 text-xs text-white transition-colors hover:border-gold hover:text-gold-soft"
                  >
                    <span className="inline-flex items-center gap-2 truncate">
                      <Mail className="h-4 w-4 shrink-0 text-gold" />
                      <span className="truncate">{BRAND.email}</span>
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
