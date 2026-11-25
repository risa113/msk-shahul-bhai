export interface ContactLine {
  id: 'line-1' | 'line-2'
  display: string
  rawDigits: string
  telHref: string
  note: string
}

export interface MenuVariety {
  id: string
  category: MenuCategory
  name: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  whatsappPrompt: string
}

export interface EditorialHighlight {
  number: string
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
  confirmationNote: string
}

export interface CateringCategory {
  id: string
  title: string
  subtitle: string
  description: string
  whatsappMessage: string
}

export interface GalleryPhoto {
  id: string
  title: string
  caption: string
  image: string
  alt: string
}

export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export const BRAND = {
  name: 'MSK Sahul Bhai Biryani',
  cateringBrand: 'MSK Catering Service',
  heroHeadline: 'A Taste Worth Gathering For.',
  heroSupporting:
    'Discover authentic slow-cooked aroma, balanced whole spices, and generous hospitality prepared to bring every table together.',
  logoPath: assetUrl('images/msk-logo.webp'),
  logoFallbackPath: assetUrl('images/msk-logo.png'),
  email: 'mskshahulbhaibiriyani@gmail.com',
  instagramUrl: 'https://www.instagram.com/msk_shahul_bhai_biryani',
  instagramHandle: '@msk_shahul_bhai_biryani',
  mapsUrl: 'https://maps.app.goo.gl/CzxZ4NVBfi62fv8U7',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=8.7007638,77.7174566&z=16&output=embed',
  mapsCoordinates: {
    dms: `8°42'02.8"N 77°43'02.8"E`,
  },
  areaSummary: 'Melapalayam, Tirunelveli, Tamil Nadu 627005',
  addressStatus:
    'Exact street address to be confirmed by MSK Sahul Bhai Biryani — pinned directly via Google Maps.',
  openingHoursStatus:
    'Opening hours to be confirmed — please call or message on WhatsApp before visiting.',
  orderingNotice:
    'MSK Sahul Bhai Biryani does not currently offer online ordering or delivery. Customers visit the restaurant in person and order directly.',
} as const

export const CONTACT_LINES: ContactLine[] = [
  {
    id: 'line-1',
    display: '+91 78678 13000',
    rawDigits: '917867813000',
    telHref: 'tel:+917867813000',
    note: 'General & Catering Enquiries (line designation to be confirmed by client)',
  },
  {
    id: 'line-2',
    display: '+91 78678 14000',
    rawDigits: '917867814000',
    telHref: 'tel:+917867814000',
    note: 'Direct & Catering Line (line designation to be confirmed by client)',
  },
]

export function buildWhatsAppUrl(rawDigits: string, message: string): string {
  const cleanDigits = rawDigits.replace(/[^\d]/g, '')
  return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(message)}`
}

export const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Our Menu', to: '/menu' },
  { label: 'Signature Dishes', to: '/signature' },
  { label: 'Catering', to: '/catering' },
  { label: 'About & Visit Us', to: '/about' },
] as const

export const MENU_CATEGORIES = [
  'Signature Biryani',
  'Chicken Biryani',
  'Mutton Biryani',
  'Starters',
  'Main Course',
  'Beverages',
  'Special Combos',
] as const

export type MenuCategory = (typeof MENU_CATEGORIES)[number]

/**
 * Confirmed food varieties strictly reflecting client-supplied categories.
 * Individual unconfirmed dish names and prices are deliberately excluded.
 */
export const MENU_VARIETIES: MenuVariety[] = [
  {
    id: 'signature-biryani',
    category: 'Signature Biryani',
    name: 'Signature Biryani',
    subtitle: 'Confirmed Category',
    description:
      'House dum preparation with fragrant saffron-kissed grains and slow-steamed whole spices. Specific daily dish names confirmed directly at the restaurant.',
    image: assetUrl('images/dum-mutton-biryani.webp'),
    imageAlt: 'Signature biryani served in a traditional hammered copper handi with rising steam',
    whatsappPrompt:
      'Hello MSK Sahul Bhai Biryani, I would like to ask about today’s Signature Biryani offerings.',
  },
  {
    id: 'chicken-biryani',
    category: 'Chicken Biryani',
    name: 'Chicken Biryani',
    subtitle: 'Confirmed Category',
    description:
      'Tender seasoned chicken cooked with aromatic rice, roasted whole spices, and fresh herbs for dine-in service.',
    image: assetUrl('images/chicken-biryani.webp'),
    imageAlt: 'Chicken biryani with roasted chicken leg, star anise, cloves, and coriander',
    whatsappPrompt:
      'Hello MSK Sahul Bhai Biryani, I would like to check Chicken Biryani availability today.',
  },
  {
    id: 'mutton-biryani',
    category: 'Mutton Biryani',
    name: 'Mutton Biryani',
    subtitle: 'Confirmed Category',
    description:
      'Slow-braised bone-in mutton folded into seasoned saffron rice and paired with cooling raita and rich salna.',
    image: assetUrl('images/mutton-biryani.webp'),
    imageAlt: 'Mutton dum biryani in a brass vessel with onion raita and traditional salna',
    whatsappPrompt:
      'Hello MSK Sahul Bhai Biryani, I would like to check Mutton Biryani availability today.',
  },
  {
    id: 'starters',
    category: 'Starters',
    name: 'Starters',
    subtitle: 'Confirmed Category',
    description:
      'Crisp, spice-tempered starters garnished with fried curry leaves and charred citrus. Individual selections confirmed directly on visit.',
    image: assetUrl('images/starters.webp'),
    imageAlt: 'Crisp spiced chicken starters with fried curry leaves and charred lime halves',
    whatsappPrompt:
      'Hello MSK Sahul Bhai Biryani, could you confirm today’s Starters selections?',
  },
  {
    id: 'main-course',
    category: 'Main Course',
    name: 'Main Course',
    subtitle: 'Confirmed Category',
    description:
      'Traditional slow-simmered gravies, salna, and spiced accompaniments prepared to pair alongside our biryani varieties.',
    image: assetUrl('images/main-course.webp'),
    imageAlt: 'Traditional Indian main course gravies and biryani salna in hammered copper bowls',
    whatsappPrompt:
      'Hello MSK Sahul Bhai Biryani, please share today’s Main Course selections.',
  },
  {
    id: 'beverages',
    category: 'Beverages',
    name: 'Beverages',
    subtitle: 'Confirmed Category',
    description:
      'Chilled traditional refreshers and citrus-mint coolers balanced to complement aromatic spiced meals.',
    image: assetUrl('images/beverages.webp'),
    imageAlt: 'Chilled saffron pistachio beverage and sparkling lime-mint cooler in glassware',
    whatsappPrompt:
      'Hello MSK Sahul Bhai Biryani, which Beverages are available today?',
  },
  {
    id: 'special-combos',
    category: 'Special Combos',
    name: 'Special Combos',
    subtitle: 'Confirmed Category',
    description:
      'Curated dining combinations bringing biryani together with crisp starters, raita, and traditional accompaniments.',
    image: assetUrl('images/special-combos.webp'),
    imageAlt: 'Curated biryani feast combo with starter, boiled egg, raita, salna, and cooler',
    whatsappPrompt:
      'Hello MSK Sahul Bhai Biryani, I would like to ask about your Special Combos.',
  },
]

export const SIGNATURE_SHOWCASE: EditorialHighlight[] = [
  {
    number: '01',
    eyebrow: 'Evening Speciality · 6:30 PM Onwards',
    title: 'Mandi Specials',
    description:
      'Slow-roasted Chicken, Alfaham, Fish, Golden, and Masala Peri Peri Mandi served over aromatic long-grain rice — freshly prepared each evening from 6:30 PM onwards.',
    image: assetUrl('images/menu/alfaham-mandi.webp'),
    imageAlt: 'Alfaham Mandi with charcoal-grilled chicken over aromatic mandi rice',
    confirmationNote: 'Available from 6:30 PM onwards',
  },
  {
    number: '02',
    eyebrow: 'Morning to Night · House Craft',
    title: 'Biryani Collection',
    description:
      'From Mutton, Chicken, Fish, and Prawn Biryani to Hyderabadi, Egg, White, and Thokku Biryani — layered with whole spices, saffron undertones, and balanced heat.',
    image: assetUrl('images/hero-biryani.webp'),
    imageAlt: 'Steaming copper handi of signature biryani on dark charcoal slate',
    confirmationNote: 'Availability: Morning to Night',
  },
  {
    number: '03',
    eyebrow: 'Aromatic Craft & Spice',
    title: 'Whole Spice & Chukka Heritage',
    description:
      'Star anise, green cardamom, cinnamon bark, cloves, and freshly cracked black pepper define our Malabar Chukka and slow-simmered Agni and Masala gravies.',
    image: assetUrl('images/spice-craft.webp'),
    imageAlt: 'Whole spices and saffron in an antique brass spoon next to a steaming copper handi',
    confirmationNote: 'Availability: Morning to Night',
  },
]

export const CATERING_CATEGORIES: CateringCategory[] = [
  {
    id: 'marriage',
    title: 'Marriage Functions',
    subtitle: 'Traditional Hospitality',
    description:
      'Authentic celebratory biryani prepared fresh to honour traditional marriage gatherings and ceremonies.',
    whatsappMessage:
      'Hello MSK Sahul Bhai Biryani, I would like to enquire about catering for a Marriage Function.',
  },
  {
    id: 'wedding',
    title: 'Wedding Catering',
    subtitle: 'Grand Celebrations',
    description:
      'Dedicated wedding catering service built around generous flavour, aroma, and warm guest hospitality.',
    whatsappMessage:
      'Hello MSK Sahul Bhai Biryani, I would like to enquire about Wedding Catering.',
  },
  {
    id: 'family',
    title: 'Family Functions',
    subtitle: 'Close Gatherings',
    description:
      'Thoughtfully prepared spreads for home milestones, family get-togethers, and special dinners.',
    whatsappMessage:
      'Hello MSK Sahul Bhai Biryani, I would like to enquire about catering for a Family Function.',
  },
  {
    id: 'celebrations',
    title: 'Celebrations',
    subtitle: 'Every Milestone',
    description:
      'Festive occasions, receptions, and memorable moments served with authentic taste.',
    whatsappMessage:
      'Hello MSK Sahul Bhai Biryani, I would like to enquire about catering for a Celebration.',
  },
  {
    id: 'event',
    title: 'Event Catering',
    subtitle: 'Tailored Service',
    description:
      'Coordinated catering arrangements discussed directly with our team to suit your occasion.',
    whatsappMessage:
      'Hello MSK Sahul Bhai Biryani, I would like to enquire about Event Catering.',
  },
  {
    id: 'bulk',
    title: 'Bulk Biryani Orders',
    subtitle: 'Direct Kitchen Enquiry',
    description:
      'Bulk biryani prepared fresh to order. Contact our team directly via WhatsApp or phone to discuss your requirements.',
    whatsappMessage:
      'Hello MSK Sahul Bhai Biryani, I would like to enquire about a Bulk Biryani Order.',
  },
]

export const CATERING_GALLERY: GalleryPhoto[] = [
  {
    id: 'cat-1',
    title: 'Celebration Banquet Spread',
    caption: 'Hammered copper handis flanked by roasted platters and brass accompaniments.',
    image: assetUrl('images/catering-feast.webp'),
    alt: 'Grand banquet table with steaming copper handis of biryani and starters',
  },
  {
    id: 'cat-2',
    title: 'Traditional Deg & Handi Service',
    caption: 'Freshly unsealed biryani vessels prepared for function service.',
    image: assetUrl('images/catering-service.webp'),
    alt: 'Steaming copper biryani deg vessels arranged for wedding event catering',
  },
  {
    id: 'cat-3',
    title: 'Curated Feast Accompaniments',
    caption: 'Biryani served alongside crisp starters, raita, and rich salna.',
    image: assetUrl('images/special-combos.webp'),
    alt: 'Biryani feast platter with crisp starters, raita, salna, and beverage',
  },
]

export const RESTAURANT_GALLERY: GalleryPhoto[] = [
  {
    id: 'rest-1',
    title: 'Warm Evening Dining Ambience',
    caption: 'A welcoming dark-luxury setting crafted for unhurried meals together.',
    image: assetUrl('images/restaurant-ambience.webp'),
    alt: 'Moody luxury restaurant dining room with brass lanterns and copper tableware',
  },
  {
    id: 'rest-2',
    title: 'From the Copper Handi',
    caption: 'Served hot at your table with aromatic steam and whole spices.',
    image: assetUrl('images/hero-biryani.webp'),
    alt: 'Steaming copper handi of authentic biryani on dark slate',
  },
  {
    id: 'rest-3',
    title: 'Whole Spice Tempering',
    caption: 'Carefully balanced aromatics, caramelized shallots, and saffron.',
    image: assetUrl('images/spice-craft.webp'),
    alt: 'Whole biryani spices and saffron next to a steaming handi',
  },
  {
    id: 'rest-4',
    title: 'Traditional Accompaniments',
    caption: 'Slow-simmered salna and gravies served in hammered copper bowls.',
    image: assetUrl('images/main-course.webp'),
    alt: 'Traditional biryani salna and gravies in hammered copper katori bowls',
  },
]
