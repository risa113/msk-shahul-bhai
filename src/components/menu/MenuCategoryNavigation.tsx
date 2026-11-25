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
    <div className="sticky top-[68px] z-30 border-y border-[#D4AF37]/20 bg-[#171717]/95 backdrop-blur-md sm:top-[76px]">
      <nav
        aria-label="Menu Categories"
        className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-5 py-3.5 sm:px-8 lg:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <button
          type="button"
          onClick={() => onSelectCategory('all')}
          aria-pressed={activeCategory === 'all'}
          className={`shrink-0 cursor-pointer border px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-all ${
            activeCategory === 'all'
              ? 'border-[#D4AF37] bg-[#D4AF37] text-[#171717]'
              : 'border-[#D4AF37]/25 bg-[#121212] text-[#F5F0E8] hover:border-[#D4AF37]/65'
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
              className={`inline-flex shrink-0 cursor-pointer items-center gap-2 border px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-all ${
                isSelected
                  ? 'border-[#D4AF37] bg-[#D4AF37] text-[#171717]'
                  : 'border-[#D4AF37]/25 bg-[#121212] text-[#F5F0E8] hover:border-[#D4AF37]/65'
              }`}
            >
              <span>{cat.navLabel}</span>
              {cat.isEveningSpecial && (
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${
                    isSelected ? 'bg-[#5A0E19]' : 'bg-[#D4AF37]'
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
