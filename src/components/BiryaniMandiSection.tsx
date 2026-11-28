import { useEffect, useRef, useState } from 'react'
import { ArrowRight, MoonStar, UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BRAND_IMAGES, assetUrl } from '../data/restaurant'

type AnimState = 'ssr' | 'waiting' | 'visible'

export function BiryaniMandiSection() {
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

    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      setAnimState('waiting')
      let secondRaf = 0
      const firstRaf = window.requestAnimationFrame(() => {
        secondRaf = window.requestAnimationFrame(() => setAnimState('visible'))
      })
      return () => {
        window.cancelAnimationFrame(firstRaf)
        if (secondRaf) window.cancelAnimationFrame(secondRaf)
      }
    }

    setAnimState('waiting')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimState('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -48px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-bm-state={animState}
      className="bm-section overflow-x-clip border-t border-gold/30 bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <div className="bm-eyebrow mb-4 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.26em] text-brand-primary uppercase">
            <span className="h-px w-7 bg-gold" aria-hidden="true" />
            <span>House Kitchen Specialities</span>
          </div>

          <h2 className="bm-heading font-serif text-3xl leading-[1.1] font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.15rem]">
            <span className="bm-heading-mask">
              <span className="bm-heading-line bm-line-1">Authentic Biryani &amp;</span>
            </span>{' '}
            <span className="bm-heading-mask">
              <span className="bm-heading-line bm-line-2">
                <em className="text-brand-primary italic">Evening Mandi</em>
              </span>
            </span>
          </h2>

          <p className="bm-description mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Visit MSK Shahul Bhai Biryani in person for morning-to-night biryani, gravies, and
            Malabar Chukka, or join us from 6:30 PM onwards for Arabian-style Mandi.
          </p>
        </div>

        {/* Two Feature Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Card: Biryani Collection */}
          <article className="bm-card bm-card-left luxury-panel group flex flex-col justify-between overflow-hidden bg-cream-soft sm:flex-row">
            <div className="bm-card-media relative h-56 shrink-0 overflow-hidden sm:h-auto sm:w-52">
              <div className="bm-card-img-reveal h-full w-full">
                <img
                  src={assetUrl(BRAND_IMAGES.chickenBiryani.path)}
                  alt="Chicken Biryani prepared with aromatic whole spices at MSK Shahul Bhai Biryani Tirunelveli"
                  loading="lazy"
                  decoding="async"
                  width={BRAND_IMAGES.chickenBiryani.width}
                  height={BRAND_IMAGES.chickenBiryani.height}
                  className="bm-card-img h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <span className="bm-stagger bm-stagger-1 inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] text-brand-primary uppercase">
                  <UtensilsCrossed className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                  <span>Morning to Night</span>
                </span>
                <h3 className="bm-stagger bm-stagger-2 mt-2 font-serif text-2xl font-bold text-ink sm:text-3xl">
                  Biryani Collection
                </h3>
                <p className="bm-stagger bm-stagger-3 mt-2 text-xs leading-relaxed text-muted">
                  Mutton Biryani, Chicken Biryani, Fish Biryani, Prawn Biryani, Hyderabadi Biryani,
                  Egg Biryani, White Biryani, and Thokku Biryani.
                </p>
              </div>
              <Link
                to="/menu/#category-biryani"
                className="bm-stagger bm-stagger-4 bm-cta-link mt-5 inline-flex items-center gap-2 self-start text-xs font-semibold tracking-[0.14em] text-brand-primary uppercase hover:text-brand-deep"
              >
                <span>Explore Biryani Menu</span>
                <ArrowRight className="bm-cta-arrow h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* Right Card: Arabian Mandi Specials */}
          <article className="bm-card bm-card-right luxury-panel group flex flex-col justify-between overflow-hidden border-gold/60 bg-cream-soft sm:flex-row">
            <div className="bm-card-media relative h-56 shrink-0 overflow-hidden sm:h-auto sm:w-52">
              <div className="bm-card-img-reveal h-full w-full">
                <img
                  src={assetUrl(BRAND_IMAGES.alfahamMandi.path)}
                  alt="Alfaham Mandi served fresh from 6:30 PM onwards at MSK Shahul Bhai Biryani Melapalayam"
                  loading="lazy"
                  decoding="async"
                  width={BRAND_IMAGES.alfahamMandi.width}
                  height={BRAND_IMAGES.alfahamMandi.height}
                  className="bm-card-img h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <span className="bm-stagger bm-stagger-1 inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] text-brand-primary uppercase">
                  <MoonStar className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                  <span>Evening Speciality · 6:30 PM Onwards</span>
                </span>
                <h3 className="bm-stagger bm-stagger-2 mt-2 font-serif text-2xl font-bold text-ink sm:text-3xl">
                  Arabian Mandi Specials
                </h3>
                <p className="bm-stagger bm-stagger-3 mt-2 text-xs leading-relaxed text-muted">
                  Served freshly each evening from 6:30 PM onwards: Chicken Mandi, Alfaham Mandi,
                  Fish Mandi, Golden Mandi, and Masala Peri Peri Mandi.
                </p>
              </div>
              <Link
                to="/menu/mandi/"
                className="bm-stagger bm-stagger-4 bm-cta-link mt-5 inline-flex items-center gap-2 self-start text-xs font-semibold tracking-[0.14em] text-brand-primary uppercase hover:text-brand-deep"
              >
                <span>View Evening Mandi Page</span>
                <ArrowRight className="bm-cta-arrow h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
