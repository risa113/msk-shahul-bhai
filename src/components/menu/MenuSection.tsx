import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, MoonStar, UtensilsCrossed } from 'lucide-react'
import { MENU_DATA, type MenuCategoryId } from '../../data/menuData'
import { BRAND, CONTACT_LINES, buildWhatsAppUrl } from '../../data/restaurant'
import { WhatsAppBrandIcon } from '../BrandIcons'
import { AvailabilityBadge } from './AvailabilityBadge'
import { MenuCategoryNavigation } from './MenuCategoryNavigation'
import { MenuGrid } from './MenuGrid'

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId | 'all'>('all')
  const catalogueTopRef = useRef<HTMLDivElement>(null)

  const visibleCategories =
    activeCategory === 'all'
      ? MENU_DATA
      : MENU_DATA.filter((category) => category.id === activeCategory)

  function handleSelectCategory(categoryId: MenuCategoryId | 'all') {
    setActiveCategory(categoryId)
    if (catalogueTopRef.current) {
      const top = catalogueTopRef.current.getBoundingClientRect().top + window.scrollY - 96
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div ref={catalogueTopRef}>
      <MenuCategoryNavigation
        categories={MENU_DATA}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      <section
        id="menu-catalogue"
        aria-live="polite"
        className="bg-[#171717] py-14 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 border border-[#D4AF37]/25 bg-[#121212] p-5 sm:flex-row sm:items-center">
            <div className="flex items-start gap-3 text-xs leading-relaxed text-[#CFC6B8] sm:text-sm">
              <UtensilsCrossed
                className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]"
                aria-hidden="true"
              />
              <span>{BRAND.orderingNotice}</span>
            </div>
            <span className="shrink-0 border border-[#D4AF37]/30 bg-[#5A0E19]/80 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#D4AF37] uppercase">
              Direct Dining Only
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="space-y-16 sm:space-y-20"
            >
              {visibleCategories.map((category) => (
                <section
                  key={category.id}
                  id={`category-${category.id}`}
                  aria-labelledby={`heading-${category.id}`}
                  className={
                    category.isEveningSpecial
                      ? 'relative border border-[#D4AF37]/40 bg-gradient-to-b from-[#320910]/65 via-[#1b1213] to-[#141313] p-6 sm:p-9'
                      : 'border-t border-[#D4AF37]/15 pt-10 first:border-t-0 first:pt-0'
                  }
                >
                  <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2.5 text-[10px] font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
                        {category.isEveningSpecial && (
                          <MoonStar className="h-3.5 w-3.5 text-[#D4AF37]" aria-hidden="true" />
                        )}
                        <span>
                          {category.isEveningSpecial
                            ? 'Evening Speciality · Available from 6:30 PM'
                            : 'Restaurant Menu Category'}
                        </span>
                      </div>
                      <h2
                        id={`heading-${category.id}`}
                        className="font-serif text-3xl font-normal text-[#F5F0E8] sm:text-4xl lg:text-5xl"
                      >
                        {category.title}
                      </h2>
                    </div>

                    <AvailabilityBadge
                      label={
                        category.isEveningSpecial
                          ? `Available from 6:30 PM (${category.availabilityHours})`
                          : `Availability: ${category.availabilityHours}`
                      }
                      isEveningSpecial={category.isEveningSpecial}
                      size="md"
                    />
                  </div>

                  <MenuGrid items={category.items} />
                </section>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-16 flex flex-col items-start justify-between gap-5 border border-[#D4AF37]/25 bg-[#5A0E19]/70 p-7 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-serif text-2xl text-[#F5F0E8] sm:text-3xl">
                Planning a Visit or Function Order?
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#E3DBCF] sm:text-sm">
                Visit MSK Sahul Bhai Biryani in person to order directly, or connect on WhatsApp
                for catering and bulk biryani enquiries.
              </p>
            </div>
            <a
              href={buildWhatsAppUrl(
                CONTACT_LINES[0].rawDigits,
                'Hello MSK Sahul Bhai Biryani, I would like to enquire about your menu.'
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2.5 bg-[#D4AF37] px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#171717] uppercase transition-colors hover:bg-[#E8CF7D]"
            >
              <WhatsAppBrandIcon className="h-4 w-4" />
              <span>Enquire on WhatsApp</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
