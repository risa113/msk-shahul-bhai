import { useState, type FormEvent } from 'react'
import { ArrowUpRight, CheckCircle2, Phone } from 'lucide-react'
import { WhatsAppBrandIcon } from '../components/BrandIcons'
import { Reveal, SectionHeading } from '../components/MotionSection'
import {
  CATERING_CATEGORIES,
  CATERING_GALLERY,
  CONTACT_LINES,
  assetUrl,
  buildWhatsAppUrl,
} from '../data/restaurant'

export function CateringPage() {
  const [occasion, setOccasion] = useState<string>(CATERING_CATEGORIES[0].title)
  const [eventDate, setEventDate] = useState('')
  const [venue, setVenue] = useState('')
  const [notes, setNotes] = useState('')
  const [selectedLine, setSelectedLine] = useState<string>(CONTACT_LINES[0].rawDigits)
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null)

  function handleEnquirySubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const lines = [
      'Hello MSK Sahul Bhai Biryani,',
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
      {/* Catering Hero */}
      <section className="relative flex min-h-[64vh] items-end overflow-hidden bg-[#171717] pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={assetUrl('images/catering-feast.webp')}
            alt="Steaming copper handis of biryani prepared for wedding and event catering"
            className="h-full w-full object-cover opacity-65"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(16,16,16,0.95) 0%, rgba(90,14,25,0.62) 55%, rgba(23,23,23,0.4) 100%), linear-gradient(180deg, rgba(16,16,16,0.55) 0%, rgba(23,23,23,0.96) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Catering & Event Management"
            title="We Make Every Celebration"
            accentWord="Memorable."
            description="Marriage functions, wedding catering, family gatherings, and bulk biryani orders prepared fresh by MSK Sahul Bhai Biryani."
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppUrl(
                CONTACT_LINES[0].rawDigits,
                'Hello MSK Sahul Bhai Biryani, I would like to enquire for catering.'
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#D4AF37] px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#171717] uppercase transition-colors hover:bg-[#E8CF7D]"
            >
              <WhatsAppBrandIcon className="h-4 w-4" />
              <span>Enquire for Catering</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="#catering-enquiry-form"
              className="inline-flex items-center gap-2 border border-[#F5F0E8]/45 bg-[#171717]/75 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#F5F0E8] uppercase backdrop-blur-sm transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <span>Prepare WhatsApp Message</span>
            </a>
          </div>
        </div>
      </section>

      {/* Catering Services Grid */}
      <section className="border-t border-[#D4AF37]/15 bg-[#171717] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Occasions We Serve"
              title="Tailored for Every"
              accentWord="Gathering"
              description="Connect directly with our team on WhatsApp or phone to discuss your function, preferred date, and menu requirements."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATERING_CATEGORIES.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.05}>
                <div className="luxury-panel group flex h-full flex-col justify-between p-6">
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
                      {item.subtitle}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-normal text-[#F5F0E8]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#CFC6B8]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#D4AF37]/15 pt-4">
                    <a
                      href={buildWhatsAppUrl(CONTACT_LINES[0].rawDigits, item.whatsappMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[#D4AF37] uppercase transition-colors hover:text-[#F5F0E8]"
                    >
                      <WhatsAppBrandIcon className="h-3.5 w-3.5" />
                      <span>Enquire for Catering</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Event Food Gallery */}
      <section className="border-t border-[#D4AF37]/15 bg-[#121212] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Event Gallery"
              title="Celebration"
              accentWord="Presentation"
              description="Crafted for memorable marriage functions, wedding receptions, and celebratory gatherings."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {CATERING_GALLERY.map((photo, idx) => (
              <Reveal key={photo.id} delay={idx * 0.08}>
                <figure className="luxury-panel overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="p-5">
                    <h3 className="font-serif text-2xl text-[#F5F0E8]">{photo.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#CFC6B8]">
                      {photo.caption}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Enquiry Builder (No fake online booking or payment) */}
      <section
        id="catering-enquiry-form"
        className="border-t border-[#D4AF37]/15 bg-gradient-to-b from-[#5A0E19]/60 to-[#171717] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                eyebrow="Direct Catering Enquiry"
                title="Plan Your Event"
                accentWord="On WhatsApp"
                description="Share your occasion details below to generate a prefilled WhatsApp message directly to MSK Sahul Bhai Biryani. All catering discussions are handled personally by our team."
              />

              <div className="mt-8 space-y-3 border border-[#D4AF37]/25 bg-[#171717]/90 p-5 text-xs text-[#CFC6B8]">
                <p className="font-semibold tracking-[0.16em] text-[#D4AF37] uppercase">
                  Call Directly
                </p>
                {CONTACT_LINES.map((line) => (
                  <a
                    key={line.id}
                    href={line.telHref}
                    className="flex items-center justify-between border-b border-[#D4AF37]/10 pb-2 text-sm text-[#F5F0E8] last:border-b-0 last:pb-0 hover:text-[#D4AF37]"
                  >
                    <span>{line.display}</span>
                    <Phone className="h-4 w-4 text-[#D4AF37]" />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <form
                onSubmit={handleEnquirySubmit}
                className="space-y-5 border border-[#D4AF37]/30 bg-[#171717] p-6 sm:p-8"
              >
                <div>
                  <label
                    htmlFor="occasion-type"
                    className="mb-1.5 block text-[11px] font-semibold tracking-[0.16em] text-[#D4AF37] uppercase"
                  >
                    Occasion / Enquiry Type
                  </label>
                  <select
                    id="occasion-type"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full border border-[#D4AF37]/30 bg-[#1f1c1b] px-4 py-3 text-sm text-[#F5F0E8] focus:border-[#D4AF37] focus:outline-none"
                  >
                    {CATERING_CATEGORIES.map((item) => (
                      <option key={item.id} value={item.title} className="bg-[#1f1c1b]">
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="event-date"
                      className="mb-1.5 block text-[11px] font-semibold tracking-[0.16em] text-[#D4AF37] uppercase"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="event-date"
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full border border-[#D4AF37]/30 bg-[#1f1c1b] px-4 py-3 text-sm text-[#F5F0E8] focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="event-venue"
                      className="mb-1.5 block text-[11px] font-semibold tracking-[0.16em] text-[#D4AF37] uppercase"
                    >
                      Venue / Area
                    </label>
                    <input
                      id="event-venue"
                      type="text"
                      value={venue}
                      onChange={(e) => setVenue(e.target.value)}
                      placeholder="Town, hall, or neighbourhood"
                      className="w-full border border-[#D4AF37]/30 bg-[#1f1c1b] px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#988F82] focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="event-notes"
                    className="mb-1.5 block text-[11px] font-semibold tracking-[0.16em] text-[#D4AF37] uppercase"
                  >
                    Occasion Notes
                  </label>
                  <textarea
                    id="event-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share your occasion details or questions for our team"
                    className="w-full border border-[#D4AF37]/30 bg-[#1f1c1b] px-4 py-3 text-sm text-[#F5F0E8] placeholder:text-[#988F82] focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <span className="mb-2 block text-[11px] font-semibold tracking-[0.16em] text-[#D4AF37] uppercase">
                    Choose WhatsApp Contact Number
                  </span>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {CONTACT_LINES.map((line, index) => (
                      <button
                        key={line.id}
                        type="button"
                        onClick={() => setSelectedLine(line.rawDigits)}
                        className={`cursor-pointer border px-4 py-3 text-left transition-all ${
                          selectedLine === line.rawDigits
                            ? 'border-[#D4AF37] bg-[#5A0E19]/75 text-[#F5F0E8]'
                            : 'border-[#D4AF37]/20 bg-[#1f1c1b] text-[#CFC6B8] hover:border-[#D4AF37]/50'
                        }`}
                      >
                        <span className="block text-sm font-semibold text-[#D4AF37]">
                          {line.display}
                        </span>
                        <span className="mt-0.5 block text-[10px] text-[#CFC6B8]">
                          Contact Line 0{index + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2.5 bg-[#D4AF37] px-6 py-4 text-xs font-semibold tracking-[0.14em] text-[#171717] uppercase transition-colors hover:bg-[#E8CF7D]"
                >
                  <WhatsAppBrandIcon className="h-4 w-4" />
                  <span>Enquire for Catering</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                {preparedUrl && (
                  <p className="flex items-start gap-2 text-xs text-[#D4AF37]" role="status">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      WhatsApp message prepared.{' '}
                      <a
                        href={preparedUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-[#F5F0E8]"
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

