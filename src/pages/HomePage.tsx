import { ArrowDown, ArrowRight, ArrowUpRight, MapPin, Phone, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { InstagramBrandIcon, WhatsAppBrandIcon } from '../components/BrandIcons'
import { AvailabilityBadge } from '../components/menu/AvailabilityBadge'
import { Reveal, SectionHeading } from '../components/MotionSection'
import { MENU_DATA } from '../data/menuData'
import { ABOUT_STORY, BRAND, CONTACT_LINES, assetUrl, buildWhatsAppUrl } from '../data/restaurant'

export function HomePage() {
  const shouldReduceMotion = useReducedMotion()
  const featuredDishes = [
    MENU_DATA[0].items[0], // Chicken Mandi (Available from 6:30 PM)
    MENU_DATA[1].items[0], // Mutton Biryani
    MENU_DATA[5].items[0], // Malabar Chicken Chukka – Spicy
    MENU_DATA[6].items[5], // Alfaham Chicken
  ]

  return (
    <>
      {/* Full-Screen Cinematic Hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-brand-deep pt-28 pb-8 sm:pt-32 sm:pb-10">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={assetUrl('images/hero-biryani.webp')}
            alt="Steaming authentic biryani served in a traditional hammered copper handi"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="hero-scrim-green absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto my-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/60 bg-brand-deep/80 px-4 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              <span className="text-[11px] font-semibold tracking-[0.26em] text-gold-soft uppercase">
                {BRAND.name}
              </span>
            </div>

            <h1 className="font-serif text-5xl leading-[0.98] font-normal tracking-tight text-white sm:text-7xl lg:text-[5.25rem]">
              A Taste Worth <br className="hidden sm:block" />
              <em className="font-normal text-gold italic">Gathering For.</em>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/95 sm:text-lg">
              {BRAND.heroSupporting}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                to="/menu"
                className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-lg border border-gold/60 bg-brand-primary px-6 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="h-4 w-4 text-gold-soft" />
              </Link>

              <Link
                to="/catering"
                className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-lg border border-gold/50 bg-brand-secondary/95 px-6 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary"
              >
                <span>Catering Enquiry</span>
              </Link>

              <Link
                to="/about"
                className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-lg border border-gold/50 bg-white/95 px-6 py-3 text-xs font-semibold tracking-[0.14em] text-brand-deep uppercase shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
              >
                <MapPin className="h-4 w-4 text-brand-primary" />
                <span>Visit Us</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto mt-12 flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-gold/30 px-5 pt-5 text-[11px] tracking-[0.2em] text-cream/90 uppercase sm:px-8 lg:px-10">
          <span className="hidden sm:inline">{BRAND.areaSummary}</span>
          <a
            href="#brand-intro"
            className="mx-auto inline-flex items-center gap-2.5 text-gold-soft transition-colors hover:text-white sm:mx-0"
          >
            <span>Scroll to discover</span>
            <ArrowDown className="animate-scroll-cue h-4 w-4" />
          </a>
          <span className="hidden md:inline">
            Serving Since {BRAND.establishedYear} · Dine-In &amp; Catering
          </span>
        </div>
      </section>

      {/* Brand Introduction */}
      <section id="brand-intro" className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <SectionHeading
                eyebrow={ABOUT_STORY.eyebrow}
                title={ABOUT_STORY.title}
                accentWord={ABOUT_STORY.accentWord}
                description={ABOUT_STORY.shortSummary}
              />

              <div className="mt-8 flex flex-wrap items-center gap-5 rounded-2xl border border-gold/45 bg-white p-5 shadow-xs">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-cream p-1.5 ring-1 ring-gold/60">
                  <img
                    src={BRAND.logoPath}
                    alt="Official MSK Catering Service crest logo"
                    loading="lazy"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-serif text-xl font-medium text-ink">{BRAND.name}</p>
                    <span className="rounded-full border border-gold/50 bg-cream px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.14em] text-brand-primary uppercase">
                      Est. {BRAND.establishedYear}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-brand-secondary">
                    {BRAND.heritageTagline}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {BRAND.orderingNotice}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2.5 border-b border-gold pb-1.5 text-xs font-semibold tracking-[0.16em] text-brand-primary uppercase transition-colors hover:border-brand-primary hover:text-brand-deep"
                >
                  <span>Read Our Story &amp; Visit Info</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-gold/40 bg-white p-2 shadow-[0_20px_50px_-24px_rgba(38,60,48,0.22)]">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={assetUrl('images/restaurant-ambience.webp')}
                    alt="Warm candlelit luxury dining room at MSK Sahul Bhai Biryani"
                    loading="lazy"
                    className="h-[340px] w-full object-cover sm:h-[420px]"
                  />
                </div>
                <div className="px-5 py-3.5 text-xs font-medium tracking-[0.14em] text-brand-primary uppercase">
                  Direct Restaurant Dining · Warm Hospitality
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="border-t border-gold/30 bg-cream-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Our Menu"
                title="Featured"
                accentWord="Selections"
                description="Explore highlights from our evening Mandi Specials (6:30 PM onwards), Biryani Collection, Malabar Chukka, and Grilled Specialties."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2.5 rounded-lg bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-sm transition-colors hover:bg-brand-secondary"
              >
                <span>View Full Menu</span>
                <ArrowRight className="h-4 w-4 text-gold-soft" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDishes.map((dish, idx) => (
              <Reveal key={dish.id} delay={idx * 0.06}>
                <Link to="/menu" className="luxury-panel group block h-full overflow-hidden">
                  <div className="relative h-56 overflow-hidden bg-cream">
                    <img
                      src={dish.image}
                      alt={dish.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/30 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <AvailabilityBadge
                        label={dish.availability}
                        isEveningSpecial={dish.isEveningSpecial}
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-secondary uppercase">
                      {dish.categoryTitle}
                    </span>
                    <h3 className="mt-1.5 font-serif text-2xl font-medium text-ink transition-colors group-hover:text-brand-primary">
                      {dish.name}
                    </h3>
                    <div className="mt-4 h-px w-10 bg-gold/60 transition-all duration-300 group-hover:w-16" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dish Showcase */}
      <section className="border-t border-gold/30 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-gold/45 bg-cream p-2 shadow-sm">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={assetUrl('images/dum-mutton-biryani.webp')}
                    alt="Signature biryani served in a hammered copper handi"
                    loading="lazy"
                    className="h-[360px] w-full object-cover sm:h-[450px]"
                  />
                  <span className="absolute top-4 left-4 rounded-full border border-gold/70 bg-brand-primary px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white uppercase shadow-sm">
                    Signature Category
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <SectionHeading
                eyebrow="Signature & Special Dishes"
                title="Slow-Cooked Craft"
                accentWord="In Every Handi"
                description="Discover our evening Mandi Specials served from 6:30 PM onwards alongside our classic Biryani Collection and aromatic spice-roasted Malabar Chukka heritage."
              />

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signature"
                  className="inline-flex items-center gap-2.5 rounded-lg border border-gold/50 bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-sm transition-colors hover:bg-brand-secondary"
                >
                  <span>Explore Signature Page</span>
                  <ArrowRight className="h-4 w-4 text-gold-soft" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Catering Promotion */}
      <section className="border-t border-gold/40 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-deep py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <div className="mb-4 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.26em] text-gold-soft uppercase">
                <span className="h-px w-7 bg-gold" />
                <span>Catering &amp; Event Management</span>
              </div>
              <h2 className="font-serif text-4xl leading-[1.06] font-normal text-white sm:text-5xl">
                We Make Every Celebration{' '}
                <em className="font-normal text-gold italic">Memorable.</em>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream/90 sm:text-base">
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
                  className="inline-flex items-center gap-2.5 rounded-lg border border-gold/70 bg-white px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-brand-deep uppercase shadow-md transition-colors hover:bg-cream"
                >
                  <WhatsAppBrandIcon className="h-4 w-4 text-brand-primary" />
                  <span>Enquire for Catering</span>
                  <ArrowUpRight className="h-4 w-4 text-brand-primary" />
                </a>
                <Link
                  to="/catering"
                  className="inline-flex items-center gap-2.5 rounded-lg border border-gold/60 bg-brand-deep/65 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-brand-deep"
                >
                  <span>Catering &amp; Gallery</span>
                  <ArrowRight className="h-4 w-4 text-gold-soft" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-gold/50 bg-brand-deep/40 p-2 shadow-xl">
                <img
                  src={assetUrl('images/catering-feast.webp')}
                  alt="Copper handis of saffron biryani arranged for a celebratory banquet"
                  loading="lazy"
                  className="h-[320px] w-full rounded-2xl object-cover sm:h-[400px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Restaurant Location Preview */}
      <section className="border-t border-gold/30 bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <SectionHeading
                eyebrow="Visit Us"
                title="Find MSK Sahul Bhai"
                accentWord="In Person"
                description={BRAND.addressStatus}
              />

              <div className="mt-7 space-y-3 rounded-2xl border border-brand-primary/14 bg-white p-5 text-sm text-muted shadow-xs">
                <p>
                  <strong className="font-semibold text-ink">Area:</strong> {BRAND.areaSummary}
                </p>
                <p>
                  <strong className="font-semibold text-ink">Hours:</strong>{' '}
                  {BRAND.openingHoursStatus}
                </p>
                <div className="flex flex-wrap gap-5 pt-2">
                  {CONTACT_LINES.map((line) => (
                    <a
                      key={line.id}
                      href={line.telHref}
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-brand-primary uppercase hover:text-brand-deep"
                    >
                      <Phone className="h-3.5 w-3.5 text-gold" />
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
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-5 py-3 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-sm transition-colors hover:bg-brand-secondary"
                >
                  <MapPin className="h-4 w-4 text-gold-soft" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="h-4 w-4 text-gold-soft" />
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-lg border border-brand-primary/30 bg-white px-5 py-3 text-xs font-semibold tracking-[0.14em] text-ink uppercase transition-colors hover:border-brand-primary hover:text-brand-primary"
                >
                  <span>Contact &amp; Gallery</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gold/50 bg-white px-5 py-3 text-xs font-semibold tracking-[0.14em] text-brand-primary uppercase transition-colors hover:border-brand-primary"
                >
                  <InstagramBrandIcon className="h-4 w-4 text-gold" />
                  <span>Instagram</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-gold/45 bg-white p-2 shadow-sm">
                <iframe
                  title="MSK Sahul Bhai Biryani Location Map"
                  src={BRAND.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-80 w-full rounded-2xl border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
