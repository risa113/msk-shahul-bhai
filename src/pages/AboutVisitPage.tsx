import { ArrowUpRight, Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react'
import { InstagramBrandIcon, WhatsAppBrandIcon } from '../components/BrandIcons'
import { Reveal, SectionHeading } from '../components/MotionSection'
import {
  BRAND,
  CONTACT_LINES,
  RESTAURANT_GALLERY,
  assetUrl,
  buildWhatsAppUrl,
} from '../data/restaurant'

export function AboutVisitPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative flex min-h-[54vh] items-end overflow-hidden bg-[#171717] pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={assetUrl('images/restaurant-ambience.webp')}
            alt="Warm evening dining ambience at MSK Sahul Bhai Biryani"
            className="h-full w-full object-cover opacity-55"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(16,16,16,0.94) 0%, rgba(23,23,23,0.75) 55%, rgba(90,14,25,0.45) 100%), linear-gradient(180deg, rgba(16,16,16,0.6) 0%, rgba(23,23,23,0.96) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="About Us & Visit Us"
            title="Rooted in Flavour."
            accentWord="Always Welcoming."
            description="Learn about MSK Sahul Bhai Biryani, explore our restaurant atmosphere, and find direct directions and contact numbers to visit us in person."
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="border-t border-[#D4AF37]/15 bg-[#171717] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="border border-[#D4AF37]/30 bg-gradient-to-b from-[#5A0E19]/65 via-[#1b1514] to-[#121212] p-8 text-center">
                <span className="text-[10px] font-semibold tracking-[0.26em] text-[#D4AF37] uppercase">
                  Official Brand Mark
                </span>
                <div className="my-6 flex justify-center">
                  <img
                    src={BRAND.logoPath}
                    alt="Official MSK Catering Service crest logo"
                    loading="lazy"
                    className="h-56 w-auto object-contain"
                  />
                </div>
                <h2 className="font-serif text-3xl text-[#F5F0E8]">{BRAND.name}</h2>
                <p className="mt-1 text-xs tracking-[0.18em] text-[#D4AF37] uppercase">
                  {BRAND.cateringBrand}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our Story & Hospitality"
                title="Dedicated to Flavour,"
                accentWord="Warmth & Gathering"
                description="MSK Sahul Bhai Biryani brings together rich, aromatic biryani and thoughtful hospitality. Rather than automated delivery, we focus on serving guests face-to-face at the restaurant and crafting memorable catering spreads for life’s important occasions."
              />

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="border border-[#D4AF37]/20 bg-[#121212] p-5">
                  <h3 className="font-serif text-2xl text-[#F5F0E8]">Visit &amp; Order Directly</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#CFC6B8]">
                    {BRAND.orderingNotice}
                  </p>
                </div>
                <div className="border border-[#D4AF37]/20 bg-[#121212] p-5">
                  <h3 className="font-serif text-2xl text-[#F5F0E8]">Follow Our Journey</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#CFC6B8]">
                    Stay connected with our official Instagram account for kitchen highlights,
                    updates, and announcements.
                  </p>
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[#D4AF37] uppercase hover:text-[#F5F0E8]"
                  >
                    <InstagramBrandIcon className="h-3.5 w-3.5" />
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
      <section className="border-t border-[#D4AF37]/15 bg-[#121212] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Restaurant Gallery"
              title="Inside the"
              accentWord="MSK Experience"
              description="Warm brass light, whole spice craft, and freshly served biryani made to be shared at the table."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RESTAURANT_GALLERY.map((photo, idx) => (
              <Reveal key={photo.id} delay={idx * 0.06}>
                <figure className="luxury-panel overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="p-5">
                    <h3 className="font-serif text-xl text-[#F5F0E8]">{photo.title}</h3>
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

      {/* Visit Us, Maps, Contact & Hours */}
      <section id="visit" className="border-t border-[#D4AF37]/15 bg-[#171717] py-16 sm:py-24">
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
              <div className="flex h-full flex-col justify-between border border-[#D4AF37]/25 bg-[#121212] p-6 sm:p-8">
                <div>
                  <h3 className="font-serif text-3xl text-[#F5F0E8]">{BRAND.areaSummary}</h3>

                  <div className="mt-6 space-y-4 text-xs leading-relaxed text-[#CFC6B8] sm:text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]"
                        aria-hidden="true"
                      />
                      <div>
                        <span className="block text-[10px] font-semibold tracking-[0.18em] text-[#D4AF37] uppercase">
                          Pinned Coordinates ({BRAND.mapsCoordinates.dms})
                        </span>
                        <p className="mt-1">{BRAND.addressStatus}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]"
                        aria-hidden="true"
                      />
                      <div>
                        <span className="block text-[10px] font-semibold tracking-[0.18em] text-[#D4AF37] uppercase">
                          Opening Hours (Placeholder Until Confirmed)
                        </span>
                        <p className="mt-1">{BRAND.openingHoursStatus}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 overflow-hidden border border-[#D4AF37]/25">
                    <iframe
                      title="MSK Sahul Bhai Biryani Google Maps Pin"
                      src={BRAND.mapsEmbedUrl}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-64 w-full border-0 grayscale-[20%] contrast-[1.06]"
                    />
                  </div>
                </div>

                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2.5 bg-[#D4AF37] px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#171717] uppercase transition-colors hover:bg-[#E8CF7D]"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            {/* Phone Numbers, WhatsApp & Social */}
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="flex h-full flex-col justify-between border border-[#D4AF37]/25 bg-gradient-to-b from-[#5A0E19]/65 to-[#121212] p-6 sm:p-8">
                <div>
                  <h3 className="font-serif text-3xl text-[#F5F0E8]">Call or WhatsApp Us</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#E3DBCF]">
                    Click either number below to call directly or open a WhatsApp conversation using
                    India’s international `+91` format.
                  </p>

                  <div className="mt-6 space-y-4">
                    {CONTACT_LINES.map((line, idx) => (
                      <div
                        key={line.id}
                        className="border border-[#D4AF37]/25 bg-[#171717]/95 p-5"
                      >
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                          Phone Line 0{idx + 1}
                        </span>
                        <p className="mt-1 font-serif text-3xl text-[#F5F0E8]">{line.display}</p>
                        <p className="mt-1 text-[11px] text-[#988F82]">{line.note}</p>

                        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                          <a
                            href={line.telHref}
                            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] px-4 py-2.5 text-xs font-semibold tracking-[0.12em] text-[#171717] uppercase transition-colors hover:bg-[#E8CF7D]"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            <span>Call Now</span>
                          </a>

                          <a
                            href={buildWhatsAppUrl(
                              line.rawDigits,
                              'Hello MSK Sahul Bhai Biryani, I would like to get in touch.'
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/45 bg-[#5A0E19] px-4 py-2.5 text-xs font-semibold tracking-[0.12em] text-[#F5F0E8] uppercase transition-colors hover:border-[#D4AF37] hover:bg-[#6d1421]"
                          >
                            <WhatsAppBrandIcon className="h-3.5 w-3.5 text-[#D4AF37]" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 border-t border-[#D4AF37]/20 pt-5 sm:grid-cols-2">
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between border border-[#D4AF37]/25 bg-[#171717] px-4 py-3 text-xs text-[#F5F0E8] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <InstagramBrandIcon className="h-4 w-4 text-[#D4AF37]" />
                      <span>{BRAND.instagramHandle}</span>
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex items-center justify-between border border-[#D4AF37]/25 bg-[#171717] px-4 py-3 text-xs text-[#F5F0E8] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    <span className="inline-flex items-center gap-2 truncate">
                      <Mail className="h-4 w-4 shrink-0 text-[#D4AF37]" />
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

