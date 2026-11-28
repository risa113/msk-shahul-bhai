import { ArrowUpRight } from 'lucide-react'
import {
  BRAND,
  BRAND_IMAGES,
  CONTACT_LINES,
  assetUrl,
  buildWhatsAppUrl,
} from '../data/restaurant'
import { InstagramBrandIcon, WhatsAppBrandIcon } from './BrandIcons'
import { Reveal, SectionHeading } from './MotionSection'

const INSTAGRAM_HIGHLIGHTS = [
  {
    id: 'ig-founder',
    title: 'Shahul Bhai · Since 2016',
    image: assetUrl(BRAND_IMAGES.founderPortrait.path),
    width: BRAND_IMAGES.founderPortrait.width,
    height: BRAND_IMAGES.founderPortrait.height,
    alt: 'Shahul Bhai banner showcase for MSK Shahul Bhai Biryani on Instagram',
    objectPosition: 'object-[26%_top]',
  },
  {
    id: 'ig-biryani',
    title: 'Handi Dum Biryani',
    image: assetUrl(BRAND_IMAGES.heroBiryani.path),
    width: BRAND_IMAGES.heroBiryani.width,
    height: BRAND_IMAGES.heroBiryani.height,
    alt: 'Steaming authentic biryani prepared fresh at MSK Shahul Bhai Biryani',
    objectPosition: 'object-center',
  },
  {
    id: 'ig-mandi',
    title: 'Evening Mandi · 6:30 PM',
    image: assetUrl(BRAND_IMAGES.alfahamMandi.path),
    width: BRAND_IMAGES.alfahamMandi.width,
    height: BRAND_IMAGES.alfahamMandi.height,
    alt: 'Arabian Alfaham Mandi served daily from 6:30 PM onwards in Melapalayam',
    objectPosition: 'object-center',
  },
  {
    id: 'ig-spices',
    title: 'Whole Spice Craft',
    image: assetUrl(BRAND_IMAGES.spiceCraft.path),
    width: BRAND_IMAGES.spiceCraft.width,
    height: BRAND_IMAGES.spiceCraft.height,
    alt: 'Traditional whole biryani spices and saffron preparation in Tirunelveli',
    objectPosition: 'object-center',
  },
  {
    id: 'ig-catering',
    title: 'Wedding Catering Vessels',
    image: assetUrl(BRAND_IMAGES.weddingCatering.path),
    width: BRAND_IMAGES.weddingCatering.width,
    height: BRAND_IMAGES.weddingCatering.height,
    alt: 'Copper biryani handis prepared by MSK Catering Service in Tirunelveli',
    objectPosition: 'object-center',
  },
  {
    id: 'ig-platter',
    title: 'Celebration Platters',
    image: assetUrl(BRAND_IMAGES.feastPlatter.path),
    width: BRAND_IMAGES.feastPlatter.width,
    height: BRAND_IMAGES.feastPlatter.height,
    alt: 'Celebration feast platter with starters, salna, and biryani',
    objectPosition: 'object-center',
  },
] as const

export function InstagramShowcaseSection() {
  return (
    <section
      aria-labelledby="instagram-showcase-heading"
      className="border-t border-gold/30 bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal variant="mask-reveal">
            <SectionHeading
              eyebrow="On Instagram · Kitchen & Celebrations"
              title="Follow Our Kitchen"
              accentWord="On Instagram"
              description={`Stay connected with ${BRAND.instagramHandle} for freshly prepared biryani batches, evening Mandi moments from 6:30 PM onwards, and celebration catering across Melapalayam and Tirunelveli.`}
            />
          </Reveal>

          <Reveal variant="cta-scale" delay={0.08} className="shrink-0">
            <div className="msk-card-hover flex flex-col items-start gap-4 rounded-2xl border border-gold/50 bg-cream-soft p-4 shadow-xs sm:flex-row sm:items-center sm:p-5">
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cream p-1 ring-2 ring-brand-primary">
                  <img
                    src={BRAND.logoPath}
                    alt={`${BRAND.name} Instagram profile emblem`}
                    loading="lazy"
                    decoding="async"
                    width={BRAND_IMAGES.logoWebp.width}
                    height={BRAND_IMAGES.logoWebp.height}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <p id="instagram-showcase-heading" className="font-serif text-lg font-bold text-ink">
                    {BRAND.instagramHandle}
                  </p>
                  <p className="text-[11px] font-medium text-muted">
                    {BRAND.locality}, {BRAND.city} · Est. {BRAND.establishedYear}
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="msk-btn group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 py-2.5 text-xs font-semibold tracking-[0.12em] text-white uppercase hover:bg-brand-secondary sm:w-auto"
                >
                  <InstagramBrandIcon className="h-4 w-4 text-gold-soft" />
                  <span>Follow Page</span>
                  <ArrowUpRight className="msk-arrow-diag h-3.5 w-3.5 text-gold-soft" />
                </a>
                <a
                  href={buildWhatsAppUrl(
                    CONTACT_LINES[0].rawDigits,
                    'Hello MSK Shahul Bhai Biryani, I saw your Instagram showcase and would like to enquire.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="msk-btn inline-flex w-full items-center justify-center gap-2 rounded-lg border border-brand-primary/25 bg-white px-4 py-2.5 text-xs font-semibold tracking-[0.12em] text-brand-primary uppercase hover:border-brand-primary sm:w-auto"
                >
                  <WhatsAppBrandIcon className="h-4 w-4 text-brand-primary" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {INSTAGRAM_HIGHLIGHTS.map((item, idx) => (
            <Reveal
              key={item.id}
              variant="card-stagger"
              delay={(idx % 3) * 0.06}
              className="h-full"
            >
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${item.title} on Instagram (${BRAND.instagramHandle})`}
                className="msk-card-hover group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-brand-primary/15 bg-cream shadow-xs sm:aspect-square"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width={item.width}
                  height={item.height}
                  className={`msk-img-zoom h-full w-full object-cover ${item.objectPosition}`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/15 to-transparent transition-opacity duration-300 lg:opacity-80 lg:group-hover:opacity-100" />
                <span
                  className="absolute top-2.5 right-2.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-gold/50 bg-brand-deep/80 text-gold-soft backdrop-blur-xs"
                  aria-hidden="true"
                >
                  <InstagramBrandIcon className="h-3.5 w-3.5" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                  <p className="text-[11px] leading-snug font-semibold tracking-wide text-white">
                    {item.title}
                  </p>
                  <p className="mt-0.5 inline-flex items-center gap-1 text-[10px] font-medium tracking-[0.1em] text-gold-soft uppercase">
                    <span>Instagram</span>
                    <ArrowUpRight className="msk-arrow-diag h-3 w-3" />
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
