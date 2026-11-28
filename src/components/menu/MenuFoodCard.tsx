import type { MenuDish } from '../../data/menuData'
import { Reveal } from '../MotionSection'
import { AvailabilityBadge } from './AvailabilityBadge'

interface MenuFoodCardProps {
  dish: MenuDish
  index?: number
}

export function MenuFoodCard({ dish, index = 0 }: MenuFoodCardProps) {
  return (
    <Reveal
      variant="card-stagger"
      delay={Math.min(index % 4, 3) * 0.065}
      className="h-full"
    >
      <article
        className={`msk-card-hover group flex h-full flex-col overflow-hidden rounded-2xl border bg-white ${
          dish.isEveningSpecial
            ? 'border-gold/60 shadow-[0_14px_34px_-16px_rgba(63,9,19,0.2)] hover:border-brand-primary/70'
            : 'border-brand-primary/14 shadow-[0_10px_28px_-16px_rgba(63,9,19,0.14)] hover:border-gold/80'
        }`}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
          <img
            src={dish.image}
            alt={dish.imageAlt}
            loading="lazy"
            decoding="async"
            width={dish.imageWidth}
            height={dish.imageHeight}
            className="msk-img-zoom h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/30 via-transparent to-transparent" />
          <div className="absolute top-3 left-3">
            <AvailabilityBadge
              label={dish.availability}
              isEveningSpecial={dish.isEveningSpecial}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] text-brand-secondary uppercase">
              {dish.categoryTitle}
            </p>
            <h3 className="mt-1.5 font-serif text-xl leading-snug font-bold text-ink transition-colors duration-200 group-hover:text-brand-primary sm:text-2xl">
              {dish.name}
            </h3>
          </div>
          <div className="mt-4 h-px w-10 bg-gold/60 transition-[width] duration-300 group-hover:w-16" />
        </div>
      </article>
    </Reveal>
  )
}
