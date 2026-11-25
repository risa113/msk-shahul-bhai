import { MenuSection } from '../components/menu/MenuSection'
import { SectionHeading } from '../components/MotionSection'
import { assetUrl } from '../data/restaurant'

export function MenuPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-brand-deep pt-36 pb-14 sm:pt-44 sm:pb-16">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={assetUrl('images/chicken-biryani.webp')}
            alt="Aromatic chicken biryani topped with whole spices and fresh herbs"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="hero-scrim-green absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            variant="dark"
            eyebrow="Our Menu"
            title="Culinary"
            accentWord="Catalogue"
            description="Explore our full menu across Arabian Mandi Specials available from 6:30 PM, signature Biryanis, Rice Varieties, Gravies, Malabar Chukka, and Fried & Grilled dishes."
          />
        </div>
      </section>

      <MenuSection />
    </>
  )
}
