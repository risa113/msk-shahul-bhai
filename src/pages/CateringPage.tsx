import { useState, type FormEvent } from 'react'
import { ArrowRight, ArrowUpRight, CheckCircle2, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { WhatsAppBrandIcon } from '../components/BrandIcons'
import { Reveal, SectionHeading } from '../components/MotionSection'
import { SeoHead } from '../components/SeoHead'
import {
  BRAND_IMAGES,
  CATERING_CATEGORIES,
  CATERING_GALLERY,
  CONTACT_LINES,
  assetUrl,
  buildWhatsAppUrl,
} from '../data/restaurant'
import { getRouteSeo } from '../seo/seoConfig'

export function CateringPage() {
  const [occasion, setOccasion] = useState<string>(CATERING_CATEGORIES[0].title)
  const [eventDate, setEventDate] = useState('')
  const [venue, setVenue] = useState('')
  const [notes, setNotes] = useState('')
  const [selectedLine, setSelectedLine] = useState<string>(CONTACT_LINES[0].rawDigits)
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null)
  const breadcrumbs = getRouteSeo('catering').breadcrumbs

  function handleEnquirySubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const lines = [
      'Hello MSK Shahul Bhai Biryani,',
      'I would like to enquire for catering / bulk biryani orders:',
      '',
      `• Occasion Type: ${occasion}`,
      eventDate ? `• Preferred Date: ${eventDate}` : null,
      venue ? `• Location / Venue: ${venue}` : null,
      notes ? `• Additional Details: ${notes}` : null,
      '',
      'Please connect with me to discuss arrangements. Thank you.',
    ].filter(Boolean)

    const url = buildWhatsAppUrl(selectedLine, lines.join('\n'))
    setPreparedUrl(url)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <SeoHead routeKey="catering" />

      {/* Catering Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-brand-deep pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={assetUrl(BRAND_IMAGES.weddingCatering.path)}
            alt="Steaming copper handis of biryani prepared for wedding and event catering in Tirunelveli"
            width={BRAND_IMAGES.weddingCatering.width}
            height={BRAND_IMAGES.weddingCatering.height}
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
            eyebrow="Catering & Event Management · Tirunelveli"
            title="Catering Services for Weddings,"
            accentWord="Functions & Special Events"
            description="At MSK Shahul Bhai Biryani, we bring the flavour of our kitchen to your celebrations. From weddings and family gatherings to special functions and large events, our catering and bulk food services are designed to help make every occasion memorable."
          />

          <div className="msk-hero-actions mt-8 flex flex-wrap gap-3.5">
            <a
              href={buildWhatsAppUrl(
                CONTACT_LINES[0].rawDigits,
                'Hello MSK Shahul Bhai Biryani, I would like to enquire for catering.'
              )}
              target="_blank"
              rel="noreferrer"
              className="msk-btn group inline-flex items-center gap-2.5 rounded-lg border border-gold/60 bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-md hover:bg-brand-secondary"
            >
              <WhatsAppBrandIcon className="h-4 w-4 text-gold-soft" />
              <span>Enquire for Catering</span>
              <ArrowUpRight className="msk-arrow-diag h-4 w-4 text-gold-soft" />
            </a>

            <a
              href="#catering-enquiry-form"
              className="msk-btn inline-flex items-center gap-2 rounded-lg border border-gold/50 bg-white/95 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-brand-deep uppercase shadow-md hover:bg-cream"
            >
              <span>Prepare WhatsApp Message</span>
            </a>

            <Link
              to="/wedding-catering/"
              className="msk-btn group inline-flex items-center gap-2 rounded-lg border border-gold/55 bg-brand-deep/75 px-5 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase hover:bg-brand-deep"
            >
              <span>Wedding &amp; Bulk Orders</span>
              <ArrowRight className="msk-arrow-right h-4 w-4 text-gold-soft" />
            </Link>
          </div>
        </div>
      </section>

      {/* Catering Services Grid */}
      <section className="border-t border-gold/30 bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="mask-reveal">
            <SectionHeading
              eyebrow="Occasions We Serve in Melapalayam & Tirunelveli"
              title="Tailored for Every"
              accentWord="Gathering"
              description="Connect directly with MSK Catering Service on WhatsApp or phone to discuss your wedding, marriage function, family celebration, or bulk food order."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATERING_CATEGORIES.map((item, idx) => (
              <Reveal key={item.id} variant="card-stagger" delay={(idx % 3) * 0.07} className="h-full">
                <div className="luxury-panel group flex h-full flex-col justify-between p-6">
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.22em] text-brand-secondary uppercase">
                      {item.subtitle}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-bold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-gold/30 pt-4">
                    <a
                      href={buildWhatsAppUrl(CONTACT_LINES[0].rawDigits, item.whatsappMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-brand-primary uppercase transition-colors hover:text-brand-deep"
                    >
                      <WhatsAppBrandIcon className="h-3.5 w-3.5 text-gold" />
                      <span>Enquire for Catering</span>
                      <ArrowUpRight className="msk-arrow-diag h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="fade-up" delay={0.08}>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gold/45 bg-white p-6 shadow-xs">
              <p className="text-sm leading-relaxed text-muted">
                Planning a marriage reception or bulk biryani order? Read our dedicated{' '}
                <strong className="font-semibold text-ink">Wedding Catering &amp; Bulk Orders</strong>{' '}
                guide for how our catering team coordinates your event directly.
              </p>
              <Link
                to="/wedding-catering/"
                className="msk-btn group inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand-primary px-5 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase hover:bg-brand-secondary"
              >
                <span>Wedding Catering Guide</span>
                <ArrowRight className="msk-arrow-right h-4 w-4 text-gold-soft" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Event Food Gallery */}
      <section className="border-t border-gold/30 bg-cream-soft py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="mask-reveal">
            <SectionHeading
              eyebrow="Event Gallery"
              title="Celebration"
              accentWord="Presentation"
              description="Crafted for memorable marriage functions, wedding receptions, and celebratory gatherings."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {CATERING_GALLERY.map((photo, idx) => (
              <Reveal key={photo.id} as="figure" variant="image-curtain" delay={idx * 0.08} className="h-full">
                <div className="luxury-panel group h-full overflow-hidden">
                  <div className="relative h-64 overflow-hidden bg-cream">
                    <img
                      src={photo.image}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      width={photo.width}
                      height={photo.height}
                      className="msk-img-zoom h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="p-5">
                    <h3 className="font-serif text-2xl font-bold text-ink">{photo.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {photo.caption}
                    </p>
                  </figcaption>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Enquiry Builder */}
      <section
        id="catering-enquiry-form"
        className="border-t border-gold/35 bg-gradient-to-br from-cream via-cream to-brand-primary/[0.08] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <Reveal variant="editorial" className="lg:col-span-5">
              <SectionHeading
                eyebrow="Direct Catering Enquiry"
                title="Plan Your Event"
                accentWord="On WhatsApp"
                description="Share your occasion details below to generate a prefilled WhatsApp message directly to MSK Shahul Bhai Biryani in Melapalayam, Tirunelveli. All catering discussions are handled personally by our team."
              />

              <div className="mt-8 space-y-3 rounded-2xl border border-gold/50 bg-brand-deep p-6 text-xs text-cream shadow-md">
                <p className="font-semibold tracking-[0.16em] text-gold uppercase">
                  Call Directly
                </p>
                {CONTACT_LINES.map((line) => (
                  <a
                    key={line.id}
                    href={line.telHref}
                    className="group flex items-center justify-between border-b border-gold/20 pb-2.5 text-sm text-white transition-colors last:border-b-0 last:pb-0 hover:text-gold-soft"
                  >
                    <span>{line.display}</span>
                    <Phone className="h-4 w-4 text-gold transition-transform duration-300 group-hover:-rotate-12" />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal variant="cta-scale" delay={0.08} className="lg:col-span-7">
              <form
                onSubmit={handleEnquirySubmit}
                className="space-y-5 rounded-3xl border border-gold/45 bg-white p-6 shadow-[0_20px_50px_-24px_rgba(63,9,19,0.18)] sm:p-8"
              >
                <div>
                  <label
                    htmlFor="occasion-type"
                    className="mb-1.5 block text-[11px] font-semibold tracking-[0.16em] text-brand-primary uppercase"
                  >
                    Occasion / Enquiry Type
                  </label>
                  <select
                    id="occasion-type"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full rounded-lg border border-brand-primary/25 bg-cream-soft px-4 py-3 text-sm text-ink transition-[border-color,box-shadow] duration-200 focus:border-brand-primary focus:ring-2 focus:ring-gold/50 focus:outline-none"
                  >
                    {CATERING_CATEGORIES.map((item) => (
                      <option key={item.id} value={item.title} className="bg-white text-ink">
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="event-date"
                      className="mb-1.5 block text-[11px] font-semibold tracking-[0.16em] text-brand-primary uppercase"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="event-date"
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full rounded-lg border border-brand-primary/25 bg-cream-soft px-4 py-3 text-sm text-ink transition-[border-color,box-shadow] duration-200 focus:border-brand-primary focus:ring-2 focus:ring-gold/50 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="event-venue"
                      className="mb-1.5 block text-[11px] font-semibold tracking-[0.16em] text-brand-primary uppercase"
                    >
                      Venue / Area
                    </label>
                    <input
                      id="event-venue"
                      type="text"
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                      placeholder="Melapalayam, Tirunelveli, hall or locality"
                      className="w-full rounded-lg border border-brand-primary/25 bg-cream-soft px-4 py-3 text-sm text-ink placeholder:text-muted transition-[border-color,box-shadow] duration-200 focus:border-brand-primary focus:ring-2 focus:ring-gold/50 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="event-notes"
                    className="mb-1.5 block text-[11px] font-semibold tracking-[0.16em] text-brand-primary uppercase"
                  >
                    Occasion Notes
                  </label>
                  <textarea
                    id="event-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share your occasion details or questions for our team"
                    className="w-full rounded-lg border border-brand-primary/25 bg-cream-soft px-4 py-3 text-sm text-ink placeholder:text-muted transition-[border-color,box-shadow] duration-200 focus:border-brand-primary focus:ring-2 focus:ring-gold/50 focus:outline-none"
                  />
                </div>

                <div>
                  <span className="mb-2 block text-[11px] font-semibold tracking-[0.16em] text-brand-primary uppercase">
                    Choose WhatsApp Contact Number
                  </span>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {CONTACT_LINES.map((line, index) => (
                      <button
                        key={line.id}
                        type="button"
                        onClick={() => setSelectedLine(line.rawDigits)}
                        className={`msk-btn cursor-pointer rounded-xl border px-4 py-3 text-left ${
                          selectedLine === line.rawDigits
                            ? 'border-brand-primary bg-brand-primary text-white shadow-sm'
                            : 'border-brand-primary/20 bg-cream-soft text-ink hover:border-brand-primary/60'
                        }`}
                      >
                        <span
                          className={`block text-sm font-semibold ${
                            selectedLine === line.rawDigits ? 'text-white' : 'text-brand-primary'
                          }`}
                        >
                          {line.display}
                        </span>
                        <span
                          className={`mt-0.5 block text-[10px] ${
                            selectedLine === line.rawDigits ? 'text-cream/90' : 'text-muted'
                          }`}
                        >
                          Contact Line 0{index + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="msk-btn group inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-brand-primary px-6 py-4 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-sm hover:bg-brand-secondary"
                >
                  <WhatsAppBrandIcon className="h-4 w-4 text-gold-soft" />
                  <span>Enquire for Catering</span>
                  <ArrowUpRight className="msk-arrow-diag h-4 w-4 text-gold-soft" />
                </button>

                {preparedUrl && (
                  <p className="flex items-start gap-2 text-xs text-brand-primary" role="status">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      WhatsApp message prepared.{' '}
                      <a
                        href={preparedUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold underline hover:text-brand-deep"
                      >
                        Open WhatsApp enquiry link
                      </a>
                    </span>
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
