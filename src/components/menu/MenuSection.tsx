import { useRef, useState } from 'react'
import { ArrowUpRight, MoonStar, UtensilsCrossed } from 'lucide-react'
import { MENU_DATA, type MenuCategoryId } from '../../data/menuData'
import { BRAND, CONTACT_LINES, buildWhatsAppUrl } from '../../data/restaurant'
import { WhatsAppBrandIcon } from '../BrandIcons'
import { Reveal } from '../MotionSection'
import { AvailabilityBadge } from './AvailabilityBadge'
import { MenuCategoryNavigation } from './MenuCategoryNavigation'
import { MenuGrid, MenuMandiSpotlightLink } from './MenuGrid'

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
        className="bg-cream py-14 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal variant="fade-up">
            <div className="mb-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-gold/40 bg-white p-5 shadow-xs sm:flex-row sm:items-center">
              <div className="flex items-start gap-3 text-xs leading-relaxed text-muted sm:text-sm">
                <UtensilsCrossed
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary"
                  aria-hidden="true"
                />
                <span>{BRAND.orderingNotice}</span>
              </div>
              <span className="shrink-0 rounded-full border border-gold/60 bg-brand-primary px-3.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-white uppercase">
                Direct Dining Only
              </span>
            </div>
          </Reveal>

          <div className="space-y-16 sm:space-y-20">
            {visibleCategories.map((category) => (
              <section
                key={`${activeCategory}-${category.id}`}
                id={`category-${category.id}`}
                aria-labelledby={`heading-${category.id}`}
                className={
                  category.isEveningSpecial
                    ? 'relative rounded-3xl border border-gold/60 bg-gradient-to-br from-brand-primary/[0.08] via-white to-cream-soft p-6 shadow-[0_20px_50px_-24px_rgba(63,9,19,0.2)] sm:p-10'
                    : 'border-t border-gold/35 pt-10 first:border-t-0 first:pt-0'
                }
              >
                <Reveal variant="editorial">
                  <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                      <div className="mb-2 inline-flex items-center gap-2.5 text-[10px] font-semibold tracking-[0.24em] text-brand-primary uppercase">
                        {category.isEveningSpecial ? (
                          <MoonStar className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                        ) : (
                          <span className="h-px w-6 bg-gold" aria-hidden="true" />
                        )}
                        <span>
                          {category.isEveningSpecial
                            ? 'Evening Speciality · Available from 6:30 PM'
                            : 'Restaurant Menu Category'}
                        </span>
                      </div>
                      <h2
                        id={`heading-${category.id}`}
                        className="font-serif text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
                      >
                        {category.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {category.description}
                      </p>
                      {category.isEveningSpecial && (
                        <div className="mt-3">
                          <MenuMandiSpotlightLink />
                        </div>
                      )}
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
                </Reveal>

                <MenuGrid items={category.items} />
              </section>
            ))}
          </div>

          <Reveal variant="cta-scale">
            <div className="mt-16 flex flex-col items-start justify-between gap-5 rounded-2xl border border-gold/50 bg-brand-deep p-7 text-cream shadow-md sm:flex-row sm:items-center sm:p-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  Planning a Visit or Function Order in Tirunelveli?
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-cream/85 sm:text-sm">
                  Visit MSK Shahul Bhai Biryani in Melapalayam to order directly, or connect on
                  WhatsApp for wedding catering and bulk biryani enquiries.
                </p>
              </div>
              <a
                href={buildWhatsAppUrl(
                  CONTACT_LINES[0].rawDigits,
                  'Hello MSK Shahul Bhai Biryani, I would like to enquire about your menu.'
                )}
                target="_blank"
                rel="noreferrer"
                className="msk-btn group inline-flex shrink-0 items-center gap-2.5 rounded-lg border border-gold/60 bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase hover:bg-brand-secondary"
              >
                <WhatsAppBrandIcon className="h-4 w-4 text-gold-soft" />
                <span>Enquire on WhatsApp</span>
                <ArrowUpRight className="msk-arrow-diag h-4 w-4 text-gold-soft" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
