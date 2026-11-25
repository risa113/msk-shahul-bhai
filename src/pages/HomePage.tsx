import { ArrowDown, ArrowRight, ArrowUpRight, MapPin, Phone, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { InstagramBrandIcon, WhatsAppBrandIcon } from '../components/BrandIcons'
import { Reveal, SectionHeading } from '../components/MotionSection'
import { BRAND, CONTACT_LINES, MENU_VARIETIES, assetUrl, buildWhatsAppUrl } from '../data/restaurant'

export function HomePage() {
  const shouldReduceMotion = useReducedMotion()
  const featuredVarieties = MENU_VARIETIES.slice(0, 4)

  return (
    <>
      {/* Full-Screen Cinematic Hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#171717] pt-28 pb-8 sm:pt-32 sm:pb-10">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={assetUrl('images/hero-biryani.webp')}
            alt="Steaming authentic biryani served in a traditional hammered copper handi"
            className="h-full w-full object-cover object-center opacity-70"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(18,18,18,0.94) 0%, rgba(23,23,23,0.8) 46%, rgba(90,14,25,0.42) 100%), linear-gradient(180deg, rgba(16,16,16,0.68) 0%, transparent 32%, rgba(23,23,23,0.95) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto my-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 border border-[#D4AF37]/35 bg-[#171717]/80 px-4 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.26em] text-[#D4AF37] uppercase">
                {BRAND.name}
              </span>
            </div>

            <h1 className="font-serif text-5xl leading-[0.98] font-normal tracking-tight text-[#F5F0E8] sm:text-7xl lg:text-[5.25rem]">
              A Taste Worth <br className="hidden sm:block" />
              <em className="font-normal text-[#D4AF37] italic">Gathering For.</em>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#E3DBCF] sm:text-lg">
              {BRAND.heroSupporting}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                to="/menu"
                className="inline-flex min-h-[50px] items-center justify-center gap-3 bg-[#D4AF37] px-6 py-3 text-xs font-semibold tracking-[0.14em] text-[#171717] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8CF7D]"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/catering"
                className="inline-flex min-h-[50px] items-center justify-center gap-2.5 border border-[#D4AF37]/50 bg-[#5A0E19]/90 px-6 py-3 text-xs font-semibold tracking-[0.14em] text-[#F5F0E8] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:bg-[#6d1421]"
              >
                <span>Catering Enquiry</span>
              </Link>

              <Link
                to="/about"
                className="inline-flex min-h-[50px] items-center justify-center gap-2.5 border border-[#F5F0E8]/45 bg-[#171717]/75 px-6 py-3 text-xs font-semibold tracking-[0.14em] text-[#F5F0E8] uppercase backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <MapPin className="h-4 w-4 text-[#D4AF37]" />
                <span>Visit Us</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto mt-12 flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-[#D4AF37]/20 px-5 pt-5 text-[11px] tracking-[0.2em] text-[#CFC6B8] uppercase sm:px-8 lg:px-10">
          <span className="hidden sm:inline">{BRAND.areaSummary}</span>
          <a
            href="#brand-intro"
            className="mx-auto inline-flex items-center gap-2.5 text-[#D4AF37] transition-colors hover:text-[#F5F0E8] sm:mx-0"
          >
            <span>Scroll to discover</span>
            <ArrowDown className="animate-scroll-cue h-4 w-4" />
          </a>
          <span className="hidden md:inline">Dine-In Restaurant &amp; Catering</span>
        </div>
      </section>

      {/* Brand Introduction */}
      <section id="brand-intro" className="border-t border-[#D4AF37]/15 bg-[#171717] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <SectionHeading
                eyebrow="Welcome to MSK"
                title="Hospitality Built Around"
                accentWord="Authentic Flavour"
                description="At MSK Sahul Bhai Biryani, every serving is shaped by fragrant spices, slow-cooked craft, and the warmth of a shared meal. Customers visit us in person to enjoy freshly prepared biryani ordered directly at the restaurant."
              />

              <div className="mt-8 flex flex-wrap items-center gap-5 border-l-2 border-[#D4AF37] pl-5">
                <img
                  src={BRAND.logoPath}
                  alt="Official MSK Catering Service crest logo"
                  loading="lazy"
                  className="h-20 w-auto object-contain"
                />
                <div>
                  <p className="font-serif text-xl text-[#F5F0E8]">{BRAND.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#CFC6B8]">
                    {BRAND.orderingNotice}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2.5 border-b border-[#D4AF37]/60 pb-1.5 text-xs font-semibold tracking-[0.16em] text-[#D4AF37] uppercase transition-colors hover:border-[#F5F0E8] hover:text-[#F5F0E8]"
                >
                  <span>Read About Us &amp; Visit Info</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="relative overflow-hidden border border-[#D4AF37]/25 bg-[#101010]">
                <img
                  src={assetUrl('images/restaurant-ambience.webp')}
                  alt="Warm candlelit luxury dining room at MSK Sahul Bhai Biryani"
                  loading="lazy"
                  className="h-[340px] w-full object-cover sm:h-[430px]"
                />
                <div className="border-t border-[#D4AF37]/20 bg-[#141312] px-6 py-4 text-xs tracking-[0.14em] text-[#CFC6B8] uppercase">
                  Direct Restaurant Dining · Warm Hospitality
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="border-t border-[#D4AF37]/15 bg-[#121212] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Our Menu"
                title="Confirmed Food"
                accentWord="Varieties"
                description="Browse a preview of our confirmed kitchen categories. View the full catalog to filter across all selections."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2.5 bg-[#D4AF37] px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#171717] uppercase transition-colors hover:bg-[#E8CF7D]"
              >
                <span>View Full Menu</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredVarieties.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.06}>
                <Link to="/menu" className="luxury-panel group block h-full overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
                      {item.subtitle}
                    </span>
                    <h3 className="mt-1.5 font-serif text-2xl font-normal text-[#F5F0E8]">
                      {item.name}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-[#CFC6B8]">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dish Showcase */}
      <section className="border-t border-[#D4AF37]/15 bg-gradient-to-b from-[#171717] via-[#2b0b10]/55 to-[#171717] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <div className="relative overflow-hidden border border-[#D4AF37]/30">
                <img
                  src={assetUrl('images/dum-mutton-biryani.webp')}
                  alt="Signature biryani served in a hammered copper handi"
                  loading="lazy"
                  className="h-[360px] w-full object-cover sm:h-[460px]"
                />
                <span className="absolute top-5 left-5 border border-[#D4AF37]/50 bg-[#171717]/85 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase backdrop-blur-sm">
                  Signature Category
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <SectionHeading
                eyebrow="Signature & Special Dishes"
                title="Slow-Cooked Craft"
                accentWord="In Every Handi"
                description="Explore the culinary philosophy behind our Signature Biryani category, whole-spice tempering, and upcoming Special & Super creations."
              />

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signature"
                  className="inline-flex items-center gap-2.5 border border-[#D4AF37] bg-[#5A0E19] px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#F5F0E8] uppercase transition-colors hover:bg-[#6d1421]"
                >
                  <span>Explore Signature Page</span>
                  <ArrowRight className="h-4 w-4 text-[#D4AF37]" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Catering Promotion */}
      <section className="border-t border-[#D4AF37]/15 bg-[#5A0E19] py-20 text-[#F5F0E8] sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <div className="mb-4 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.26em] text-[#D4AF37] uppercase">
                <span className="h-px w-7 bg-[#D4AF37]/80" />
                <span>Catering &amp; Event Management</span>
              </div>
              <h2 className="font-serif text-4xl leading-[1.06] font-normal text-[#F5F0E8] sm:text-5xl">
                We Make Every Celebration{' '}
                <em className="font-normal text-[#D4AF37] italic">Memorable.</em>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#E9DFD3] sm:text-base">
                From marriage functions and wedding catering to intimate family gatherings and bulk
                biryani orders, connect directly with our catering team to plan your occasion.
              </p>
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
                <Link
                  to="/catering"
                  className="inline-flex items-center gap-2.5 border border-[#F5F0E8]/45 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#F5F0E8] uppercase transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  <span>Catering &amp; Gallery</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="overflow-hidden border border-[#D4AF37]/35">
                <img
                  src={assetUrl('images/catering-feast.webp')}
                  alt="Copper handis of saffron biryani arranged for a celebratory banquet"
                  loading="lazy"
                  className="h-[320px] w-full object-cover sm:h-[400px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Restaurant Location Preview */}
      <section className="border-t border-[#D4AF37]/15 bg-[#171717] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <SectionHeading
                eyebrow="Visit Us"
                title="Find MSK Sahul Bhai"
                accentWord="In Person"
                description={BRAND.addressStatus}
              />

              <div className="mt-7 space-y-3 text-sm text-[#CFC6B8]">
                <p>
                  <strong className="font-medium text-[#F5F0E8]">Area:</strong> {BRAND.areaSummary}
                </p>
                <p>
                  <strong className="font-medium text-[#F5F0E8]">Hours:</strong>{' '}
                  {BRAND.openingHoursStatus}
                </p>
                <div className="flex flex-wrap gap-5 pt-2">
                  {CONTACT_LINES.map((line) => (
                    <a
                      key={line.id}
                      href={line.telHref}
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-[#D4AF37] uppercase hover:text-[#F5F0E8]"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>{line.display}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <a
                  href={BRAND.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D4AF37] px-5 py-3 text-xs font-semibold tracking-[0.14em] text-[#171717] uppercase transition-colors hover:bg-[#E8CF7D]"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 border border-[#D4AF37]/40 px-5 py-3 text-xs font-semibold tracking-[0.14em] text-[#F5F0E8] uppercase transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  <span>Contact &amp; Gallery</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-[#D4AF37]/25 bg-[#1d1a19] px-5 py-3 text-xs font-semibold tracking-[0.14em] text-[#D4AF37] uppercase transition-colors hover:border-[#D4AF37]"
                >
                  <InstagramBrandIcon className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="overflow-hidden border border-[#D4AF37]/25 bg-[#101010]">
                <iframe
                  title="MSK Sahul Bhai Biryani Location Map"
                  src={BRAND.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-80 w-full border-0 grayscale-[20%] contrast-[1.06]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

