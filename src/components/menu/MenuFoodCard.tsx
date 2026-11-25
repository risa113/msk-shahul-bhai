import { motion, useReducedMotion } from 'framer-motion'
import type { MenuDish } from '../../data/menuData'
import { AvailabilityBadge } from './AvailabilityBadge'

interface MenuFoodCardProps {
  dish: MenuDish
  index: number
}

export function MenuFoodCard({ dish, index }: MenuFoodCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.42,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index * 0.04, 0.24),
      }}
      className={`group flex flex-col overflow-hidden border transition-all duration-300 ${
        dish.isEveningSpecial
          ? 'border-[#D4AF37]/35 bg-gradient-to-b from-[#231517] to-[#131212] hover:border-[#D4AF37]/75'
          : 'border-[#D4AF37]/20 bg-gradient-to-b from-[#1c1a19] to-[#121212] hover:border-[#D4AF37]/55'
      } hover:shadow-[0_20px_48px_-20px_rgba(0,0,0,0.85)]`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#101010]">
        <img
          src={dish.image}
          alt={dish.imageAlt}
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <AvailabilityBadge
            label={dish.availability}
            isEveningSpecial={dish.isEveningSpecial}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase">
            {dish.categoryTitle}
          </p>
          <h3 className="mt-1.5 font-serif text-2xl leading-snug font-normal text-[#F5F0E8] transition-colors group-hover:text-[#E8CF7D]">
            {dish.name}
          </h3>
        </div>
      </div>
    </motion.article>
  )
}
