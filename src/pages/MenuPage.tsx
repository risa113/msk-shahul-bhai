import { Breadcrumbs } from '../components/Breadcrumbs'
import { MenuSection } from '../components/menu/MenuSection'
import { SectionHeading } from '../components/MotionSection'
import { SeoHead } from '../components/SeoHead'
import { BRAND_IMAGES, assetUrl } from '../data/restaurant'
import { getRouteSeo } from '../seo/seoConfig'

export function MenuPage() {
  const breadcrumbs = getRouteSeo('menu').breadcrumbs

  return (
    <>
      <SeoHead routeKey="menu" />

      {/* Page Hero */}
      <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-brand-deep pt-36 pb-14 sm:pt-44 sm:pb-16">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={assetUrl(BRAND_IMAGES.chickenBiryani.path)}
            alt="Aromatic Chicken Biryani topped with whole spices at MSK Shahul Bhai Biryani in Tirunelveli"
            width={BRAND_IMAGES.chickenBiryani.width}
            height={BRAND_IMAGES.chickenBiryani.height}
            fetchPriority="high"
            className="msk-hero-media h-full w-full object-cover"
          />
          <div className="hero-scrim-green absolute inset-0" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="msk-hero-stagger">
            <Breadcrumbs items={breadcrumbs} variant="dark" />
          </div>
          <SectionHeading
            as="h1"
            variant="dark"
            animateMode="hero"
            eyebrow="Our Menu · Melapalayam, Tirunelveli"
            title="Biryani, Mandi &"
            accentWord="Special Dishes"
            description="Explore our full menu in Tirunelveli across Arabian Mandi Specials from 6:30 PM, eight Biryani varieties, fragrant Rice, Agni & Masala Gravies, Malabar Chukka, and Fried & Grilled selections."
          />
        </div>
      </section>

      <MenuSection />
    </>
  )
}
