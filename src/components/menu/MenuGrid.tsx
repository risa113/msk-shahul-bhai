import { Link } from 'react-router-dom'
import type { MenuDish } from '../../data/menuData'
import { MenuFoodCard } from './MenuFoodCard'

interface MenuGridProps {
  items: MenuDish[]
}

export function MenuGrid({ items }: MenuGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((dish, idx) => (
        <MenuFoodCard key={dish.id} dish={dish} index={idx} />
      ))}
    </div>
  )
}

export function MenuMandiSpotlightLink() {
  return (
    <Link
      to="/menu/mandi/"
      className="group inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] text-brand-primary uppercase underline decoration-gold/80 underline-offset-4 transition-colors hover:text-brand-deep"
    >
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
        View Evening Mandi Guide →
      </span>
    </Link>
  )
}
