import type { MenuDish } from '../../data/menuData'
import { MenuFoodCard } from './MenuFoodCard'

interface MenuGridProps {
  items: MenuDish[]
}

export function MenuGrid({ items }: MenuGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((dish, index) => (
        <MenuFoodCard key={dish.id} dish={dish} index={index} />
      ))}
    </div>
  )
}
