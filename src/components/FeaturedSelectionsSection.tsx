import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { MenuDish } from '../data/menuData'
import { AvailabilityBadge } from './menu/AvailabilityBadge'

type AnimState = 'ssr' | 'waiting' | 'visible'

interface FeaturedSelectionsSectionProps {
  dishes: MenuDish[]
}

export function FeaturedSelectionsSection({ dishes }: FeaturedSelectionsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [animState, setAnimState] = useState<AnimState>('ssr')

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setAnimState('visible')
      return
    }

    let firstRaf = 0
    let secondRaf = 0

    const rect = node.getBoundingClientRect()
    const initiallyVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0

    if (initiallyVisible) {
      setAnimState('waiting')
      firstRaf = window.requestAnimationFrame(() => {
        secondRaf = window.requestAnimationFrame(() => setAnimState('visible'))
      })
    } else {
      setAnimState('waiting')
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setAnimState('waiting')
          return
        }

        if (entry.intersectionRatio >= 0.12 || entry.intersectionRect.height >= 100) {
          setAnimState('visible')
        }
      },
      { threshold: [0, 0.12] }
    )

    observer.observe(node)

    return () => {
      if (firstRaf) window.cancelAnimationFrame(firstRaf)
      if (secondRaf) window.cancelAnimationFrame(secondRaf)
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      data-fs-state={animState}
      className="fs-section overflow-x-clip border-t border-gold/30 bg-cream-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="fs-eyebrow mb-4 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.26em] text-brand-primary uppercase">
              <span className="h-px w-7 bg-gold" aria-hidden="true" />
              <span>Our Menu</span>
            </div>

            <h2 className="fs-heading font-serif text-3xl leading-[1.1] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.15rem]">
              Featured{' '}
              <em className="text-brand-primary italic">Selections</em>
            </h2>

            <p className="fs-description mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Explore highlights from our evening Mandi Specials (6:30 PM onwards), Biryani
              Collection, Malabar Chukka, and Fried &amp; Grilled dishes.
            </p>
          </div>

          <div className="fs-cta-wrap">
            <Link
              to="/menu/"
              className="inline-flex items-center gap-2.5 rounded-lg bg-brand-primary px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase shadow-sm transition-colors hover:bg-brand-secondary"
            >
              <span>View Full Menu</span>
              <ArrowRight className="h-4 w-4 text-gold-soft" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish, idx) => (
            <Link
              key={dish.id}
              to="/menu/"
              style={{ '--fs-delay': `${0.16 + idx * 0.12}s` } as CSSProperties}
              className="fs-card luxury-panel group block h-full overflow-hidden"
            >
              <div className="fs-image-curtain relative h-56 overflow-hidden bg-cream">
                <div className="fs-image-reveal-scale h-full w-full">
                  <img
                    src={dish.image}
                    alt={dish.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width={dish.imageWidth}
                    height={dish.imageHeight}
                    className="fs-card-img h-full w-full object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/30 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <AvailabilityBadge
                    label={dish.availability}
                    isEveningSpecial={dish.isEveningSpecial}
                  />
                </div>
              </div>

              <div className="p-5">
                <span className="fs-category block text-[10px] font-semibold tracking-[0.2em] text-brand-secondary uppercase">
                  {dish.categoryTitle}
                </span>
                <h3 className="fs-title mt-1.5 font-serif text-2xl font-bold text-ink transition-colors group-hover:text-brand-primary">
                  {dish.name}
                </h3>
                <div className="fs-divider mt-4 h-px w-10 bg-gold/60 transition-all duration-300 group-hover:w-16" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
