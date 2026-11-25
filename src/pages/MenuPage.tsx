import { useState } from 'react'
import { ArrowUpRight, UtensilsCrossed } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal, SectionHeading } from '../components/MotionSection'
import { WhatsAppBrandIcon } from '../components/BrandIcons'
import {
  BRAND,
  CONTACT_LINES,
  MENU_CATEGORIES,
  MENU_VARIETIES,
  type MenuCategory,
  assetUrl,
  buildWhatsAppUrl,
} from '../data/restaurant'

export function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'All'>('All')

  const filteredVarieties =
    selectedCategory === 'All'
      ? MENU_VARIETIES
      : MENU_VARIETIES.filter((item) => item.category === selectedCategory)

  return (
    <>
      {/* Page Hero */}
      <section className="relative flex min-h-[54vh] items-end overflow-hidden bg-[#171717] pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={assetUrl('images/chicken-biryani.webp')}
            alt="Aromatic chicken biryani topped with whole spices and fresh herbs"
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
            eyebrow="Our Menu"
            title="Confirmed Food"
            accentWord="Varieties"
            description="Explore the food categories confirmed by MSK Sahul Bhai Biryani. Prices are omitted and individual handwritten dish names are confirmed directly at the restaurant."
          />
        </div>
      </section>

      {/* Menu Catalog & Filters */}
      <section className="border-t border-[#D4AF37]/15 bg-[#171717] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 border border-[#D4AF37]/25 bg-[#1d1a19] p-5 sm:flex-row sm:items-center">
              <div className="flex items-start gap-3 text-xs leading-relaxed text-[#CFC6B8] sm:text-sm">
                <UtensilsCrossed
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]"
                  aria-hidden="true"
                />
                <span>{BRAND.orderingNotice}</span>
              </div>
              <span className="shrink-0 border border-[#D4AF37]/30 bg-[#5A0E19]/75 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#D4AF37] uppercase">
                No Online Ordering
              </span>
            </div>
          </Reveal>

          <div
            className="mt-10 flex flex-wrap gap-2.5 border-b border-[#D4AF37]/15 pb-6"
            role="tablist"
            aria-label="Filter menu varieties by category"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'All'}
              onClick={() => setSelectedCategory('All')}
              className={`cursor-pointer border px-4 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase transition-all ${
                selectedCategory === 'All'
                  ? 'border-[#D4AF37] bg-[#D4AF37] text-[#171717]'
                  : 'border-[#D4AF37]/25 bg-[#1d1a19] text-[#F5F0E8] hover:border-[#D4AF37]/60'
              }`}
            >
              All Varieties
            </button>

            {MENU_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer border px-4 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase transition-all ${
                    isSelected
                      ? 'border-[#D4AF37] bg-[#D4AF37] text-[#171717]'
                      : 'border-[#D4AF37]/25 bg-[#1d1a19] text-[#F5F0E8] hover:border-[#D4AF37]/60'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          <motion.div
            layout
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            aria-live="polite"
          >
            <AnimatePresence mode="popLayout">
              {filteredVarieties.map((item) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="luxury-panel group flex flex-col overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden bg-[#101010]">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent" />
                    <span className="absolute bottom-3.5 left-4 border border-[#D4AF37]/35 bg-[#171717]/85 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#D4AF37] uppercase backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <span className="text-[10px] font-semibold tracking-[0.2em] text-[#988F82] uppercase">
                        {item.subtitle}
                      </span>
                      <h2 className="mt-1.5 font-serif text-3xl font-normal text-[#F5F0E8]">
                        {item.name}
                      </h2>
                      <p className="mt-3 text-xs leading-relaxed text-[#CFC6B8]">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[#D4AF37]/15 pt-4">
                      <a
                        href={buildWhatsAppUrl(CONTACT_LINES[0].rawDigits, item.whatsappPrompt)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-between text-xs font-semibold tracking-[0.12em] text-[#D4AF37] uppercase transition-colors hover:text-[#F5F0E8]"
                      >
                        <span className="inline-flex items-center gap-2">
                          <WhatsAppBrandIcon className="h-3.5 w-3.5" />
                          <span>Check Daily Availability</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-col items-start justify-between gap-5 border border-[#D4AF37]/25 bg-[#5A0E19]/65 p-7 sm:flex-row sm:items-center">
              <div>
                <p className="font-serif text-2xl text-[#F5F0E8]">
                  Additional dishes will appear here once confirmed.
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#E3DBCF]">
                  Unconfirmed handwritten menu names are excluded to keep this catalog accurate.
                  Call or WhatsApp MSK directly for today’s full kitchen selection.
                </p>
              </div>
              <a
                href={buildWhatsAppUrl(
                  CONTACT_LINES[0].rawDigits,
                  'Hello MSK Sahul Bhai Biryani, please share today’s full restaurant menu.'
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2.5 bg-[#D4AF37] px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#171717] uppercase transition-colors hover:bg-[#E8CF7D]"
              >
                <WhatsAppBrandIcon className="h-4 w-4" />
                <span>Ask on WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

