import type { MenuDish } from '../../data/menuData'
import { AvailabilityBadge } from './AvailabilityBadge'

interface MenuFoodCardProps {
  dish: MenuDish
}

export function MenuFoodCard({ dish }: MenuFoodCardProps) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        dish.isEveningSpecial
          ? 'border-gold/60 shadow-[0_14px_34px_-16px_rgba(38,60,48,0.2)] hover:border-brand-primary/70'
          : 'border-brand-primary/14 shadow-[0_10px_28px_-16px_rgba(38,60,48,0.14)] hover:border-gold/80'
      } hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-18px_rgba(38,60,48,0.24)]`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
        <img
          src={dish.image}
          alt={dish.imageAlt}
          loading="lazy"
          decoding="async"
          width={dish.imageWidth}
          height={dish.imageHeight}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/30 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <AvailabilityBadge
            label={dish.availability}
            isEveningSpecial={dish.isEveningSpecial}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.2em] text-brand-secondary uppercase">
            {dish.categoryTitle}
          </p>
          <h3 className="mt-1.5 font-serif text-2xl leading-snug font-bold text-ink transition-colors group-hover:text-brand-primary">
            {dish.name}
          </h3>
        </div>
        <div className="mt-4 h-px w-10 bg-gold/60 transition-all duration-300 group-hover:w-16" />
      </div>
    </article>
  )
}
