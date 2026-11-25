import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WhatsAppBrandIcon } from '../components/BrandIcons'
import { Reveal, SectionHeading } from '../components/MotionSection'
import { CONTACT_LINES, SIGNATURE_SHOWCASE, assetUrl, buildWhatsAppUrl } from '../data/restaurant'

export function SignaturePage() {
  return (
    <>
      {/* Editorial Hero */}
      <section className="relative flex min-h-[58vh] items-end overflow-hidden bg-[#171717] pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={assetUrl('images/dum-mutton-biryani.webp')}
            alt="Traditional copper handi filled with signature biryani"
            className="h-full w-full object-cover opacity-60"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(16,16,16,0.94) 0%, rgba(90,14,25,0.58) 60%, rgba(23,23,23,0.4) 100%), linear-gradient(180deg, rgba(16,16,16,0.6) 0%, rgba(23,23,23,0.96) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Signature & Special Dishes"
            title="Culinary Craft"
            accentWord="From the Handi"
            description="An editorial showcase dedicated to MSK Sahul Bhai Biryani’s Signature Biryani heritage, aromatic spice work, and upcoming owner-confirmed special creations."
          />
        </div>
      </section>

      {/* Editorial Feature Blocks */}
      <section className="border-t border-[#D4AF37]/15 bg-[#171717] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-5 sm:px-8 lg:px-10">
          {SIGNATURE_SHOWCASE.map((item, idx) => {
            const isEven = idx % 2 === 1
            return (
              <Reveal key={item.number}>
                <article className="grid grid-cols-1 items-center gap-10 border border-[#D4AF37]/20 bg-[#121212] p-6 sm:p-10 lg:grid-cols-12">
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden border border-[#D4AF37]/25">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        loading="lazy"
                        className="h-[320px] w-full object-cover sm:h-[420px]"
                      />
                      <span className="absolute top-4 left-4 border border-[#D4AF37]/40 bg-[#171717]/85 px-3 py-1 font-serif text-sm text-[#D4AF37]">
                        {item.number}
                      </span>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : ''}`}>
                    <span className="text-[11px] font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
                      {item.eyebrow}
                    </span>
                    <h2 className="mt-3 font-serif text-4xl leading-tight font-normal text-[#F5F0E8] sm:text-5xl">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-[#CFC6B8]">
                      {item.description}
                    </p>
                    <p className="mt-6 inline-block border border-[#D4AF37]/30 bg-[#5A0E19]/45 px-3.5 py-2 text-[11px] tracking-[0.08em] text-[#E3DBCF]">
                      {item.confirmationNote}
                    </p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* Bottom Editorial Band */}
        <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="border border-[#D4AF37]/30 bg-gradient-to-r from-[#5A0E19] via-[#38070f] to-[#171717] p-8 sm:p-12">
              <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <span className="text-[11px] font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
                    Visit or Enquire
                  </span>
                  <h3 className="mt-2 font-serif text-3xl text-[#F5F0E8] sm:text-4xl">
                    Ask About Today’s Signature &amp; Special Offerings
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#E3DBCF]">
                    Visit MSK Sahul Bhai Biryani in person or connect via WhatsApp to confirm daily
                    signature availability before coming by.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3.5">
                  <a
                    href={buildWhatsAppUrl(
                      CONTACT_LINES[0].rawDigits,
                      'Hello MSK Sahul Bhai Biryani, what Signature or Special dishes are available today?'
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#D4AF37] px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#171717] uppercase transition-colors hover:bg-[#E8CF7D]"
                  >
                    <WhatsAppBrandIcon className="h-4 w-4" />
                    <span>Enquire on WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <Link
                    to="/menu"
                    className="inline-flex items-center gap-2 border border-[#F5F0E8]/45 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#F5F0E8] uppercase transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    <span>Explore Full Menu</span>
                    <ArrowRight className="h-4 w-4" />
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

