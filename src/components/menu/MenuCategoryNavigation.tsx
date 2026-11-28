import type { MenuCategoryGroup, MenuCategoryId } from '../../data/menuData'

interface MenuCategoryNavigationProps {
  categories: MenuCategoryGroup[]
  activeCategory: MenuCategoryId | 'all'
  onSelectCategory: (categoryId: MenuCategoryId | 'all') => void
}

export function MenuCategoryNavigation({
  categories,
  activeCategory,
  onSelectCategory,
}: MenuCategoryNavigationProps) {
  return (
    <div className="sticky top-[72px] z-30 border-y border-gold/30 bg-white/95 shadow-xs backdrop-blur-md sm:top-[76px]">
      <nav
        aria-label="Menu Categories"
        className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-5 py-3.5 sm:px-8 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <button
          type="button"
          onClick={() => onSelectCategory('all')}
          aria-pressed={activeCategory === 'all'}
          className={`msk-btn shrink-0 cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase ${
            activeCategory === 'all'
              ? 'border-brand-primary bg-brand-primary text-white shadow-sm'
              : 'border-brand-primary/20 bg-cream text-ink hover:border-brand-primary hover:bg-white'
          }`}
        >
          All
        </button>

        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              aria-pressed={isSelected}
              className={`msk-btn inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase ${
                isSelected
                  ? 'border-brand-primary bg-brand-primary text-white shadow-sm'
                  : 'border-brand-primary/20 bg-cream text-ink hover:border-brand-primary hover:bg-white'
              }`}
            >
              <span>{cat.navLabel}</span>
              {cat.isEveningSpecial && (
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${
                    isSelected ? 'bg-gold-soft' : 'bg-gold'
                  }`}
                  aria-hidden="true"
                />
              )}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
