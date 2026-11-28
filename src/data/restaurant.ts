export interface ContactLine {
  id: 'line-1' | 'line-2'
  display: string
  rawDigits: string
  telHref: string
  note: string
}

export interface EditorialHighlight {
  number: string
  eyebrow: string
  title: string
  description: string
  image: string
  imageWidth: number
  imageHeight: number
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
  width: number
  height: number
  alt: string
}

export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export const BRAND_IMAGES = {
  founderPortrait: {
    path: 'images/msk-shahul-bhai-biryani-founder.webp',
    width: 1024,
    height: 576,
  },
  logoWebp: {
    path: 'images/msk-shahul-bhai-biryani-logo.webp',
    width: 420,
    height: 520,
  },
  logoPng: {
    path: 'images/msk-shahul-bhai-biryani-logo.png',
    width: 256,
    height: 317,
  },
  heroBiryani: {
    path: 'images/msk-shahul-bhai-biryani-tirunelveli-hero.webp',
    width: 1376,
    height: 768,
  },
  dumMuttonBiryani: {
    path: 'images/msk-shahul-bhai-dum-mutton-biryani-tirunelveli.webp',
    width: 768,
    height: 907,
  },
  restaurantAmbience: {
    path: 'images/msk-shahul-bhai-restaurant-melapalayam-ambience.webp',
    width: 1300,
    height: 726,
  },
  weddingCatering: {
    path: 'images/msk-shahul-bhai-wedding-catering-tirunelveli.webp',
    width: 1376,
    height: 768,
  },
  marriageCatering: {
    path: 'images/msk-shahul-bhai-marriage-catering-melapalayam.webp',
    width: 1264,
    height: 848,
  },
  feastPlatter: {
    path: 'images/msk-shahul-bhai-feast-platter-tirunelveli.webp',
    width: 1100,
    height: 821,
  },
  spiceCraft: {
    path: 'images/msk-shahul-bhai-whole-spice-biryani-craft.webp',
    width: 1100,
    height: 738,
  },
  mainCourse: {
    path: 'images/msk-shahul-bhai-biryani-salna-gravy-tirunelveli.webp',
    width: 1100,
    height: 821,
  },
  chickenBiryani: {
    path: 'images/menu/msk-shahul-bhai-chicken-biryani-tirunelveli.webp',
    width: 768,
    height: 783,
  },
  alfahamMandi: {
    path: 'images/menu/msk-shahul-bhai-alfaham-mandi-tirunelveli.webp',
    width: 1100,
    height: 821,
  },
} as const

export const BRAND = {
  name: 'MSK Shahul Bhai Biryani',
  shortName: 'MSK Shahul Bhai',
  cateringBrand: 'MSK Catering Service',
  establishedYear: '2016',
  heritageTagline: 'A Decade of Flavour. A Tradition of Trust.',
  heroHeadline: 'MSK Shahul Bhai Biryani – A Taste Worth Gathering For',
  heroSupporting:
    'Since 2016, serving food lovers in Melapalayam and Tirunelveli with slow-cooked authentic biryani, evening Arabian-style Mandi from 6:30 PM onwards, speciality gravies, grilled dishes, and celebration catering.',
  logoPath: assetUrl(BRAND_IMAGES.logoWebp.path),
  logoFallbackPath: assetUrl(BRAND_IMAGES.logoPng.path),
  email: 'mskshahulbhaibiriyani@gmail.com',
  instagramUrl: 'https://www.instagram.com/msk_shahul_bhai_biryani',
  instagramHandle: '@msk_shahul_bhai_biryani',
  mapsUrl: 'https://maps.app.goo.gl/CzxZ4NVBfi62fv8U7',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=8.7007638,77.7174566&z=16&output=embed',
  mapsCoordinates: {
    dms: `8°42'02.8"N 77°43'02.8"E`,
  },
  locality: 'Melapalayam',
  city: 'Tirunelveli',
  state: 'Tamil Nadu',
  postalCode: '627005',
  country: 'India',
  areaSummary: 'Melapalayam, Tirunelveli, Tamil Nadu 627005, India',
  addressStatus:
    'Exact street address to be confirmed by MSK Shahul Bhai Biryani — pinned directly via Google Maps.',
  openingHoursStatus:
    'Opening hours to be confirmed — please call or message on WhatsApp before visiting. Mandi Specials are served from 6:30 PM onwards.',
  orderingNotice:
    'MSK Shahul Bhai Biryani does not currently offer online ordering or delivery. Guests visit the restaurant in person and order directly.',
} as const

export const ABOUT_STORY = {
  eyebrow: 'Since 2016 · Melapalayam, Tirunelveli',
  title: 'A Decade of Taste,',
  accentWord: 'Tradition & Trust',
  closingStatement: 'MSK Shahul Bhai Biryani – A Decade of Flavour. A Tradition of Trust.',
  shortSummary:
    'Since 2016, MSK Shahul Bhai Biryani has grown through dedication, consistency, and customer trust — bringing families and friends together across Tirunelveli around signature biryanis, evening Arabian-style Mandi, speciality gravies, grilled dishes, and event catering.',
  paragraphs: [
    'Since 2016, MSK Shahul Bhai Biryani has been serving food lovers with a passion for flavour, quality and memorable dining experiences. What began as a journey driven by a love for authentic biryani and delicious food has grown into a name built on dedication, consistency and the trust of our customers. For nearly a decade, we have believed that great food is more than just a meal – it is a way of bringing people together, creating happiness and making every occasion memorable.',
    'At MSK Shahul Bhai Biryani, we take pride in preparing dishes that bring together rich spices, authentic flavours and the joy of sharing good food. From our signature biryanis and Arabian-style Mandi to our speciality gravies, grilled dishes and flavourful rice varieties, every offering is inspired by our commitment to taste and customer satisfaction. We strive to make every meal an experience worth remembering, whether you are visiting with friends, enjoying a family gathering or celebrating a special occasion.',
    'Over the years, the appreciation and support of our customers have been an important part of our journey. Their trust inspires us to continue improving, serving with care and maintaining the passion that has been with us since the beginning. We also extend our food experience beyond the restaurant through bulk orders and catering services for weddings, celebrations, gatherings and special events.',
    'As we move forward, our vision remains simple – to serve delicious food, welcome every customer with warmth and continue building a legacy of flavour, quality and trust.',
  ],
  pillars: [
    {
      label: 'Since 2016',
      title: 'Nearly a Decade of Trust',
      detail: 'A name built on dedication, consistency, and customer appreciation since 2016.',
    },
    {
      label: 'Authentic Kitchen',
      title: 'Flavour & Variety',
      detail:
        'Signature biryanis, Arabian-style Mandi, speciality gravies, grilled dishes, and rice varieties.',
    },
    {
      label: 'For Every Occasion',
      title: 'Dining & Celebration Catering',
      detail:
        'Warm restaurant hospitality plus bulk biryani orders and catering for weddings and special events.',
    },
  ],
} as const

export const CONTACT_LINES: ContactLine[] = [
  {
    id: 'line-1',
    display: '+91 78678 13000',
    rawDigits: '917867813000',
    telHref: 'tel:+917867813000',
    note: 'General Dining & Catering Enquiries',
  },
  {
    id: 'line-2',
    display: '+91 78678 14000',
    rawDigits: '917867814000',
    telHref: 'tel:+917867814000',
    note: 'Direct Restaurant & Bulk Order Line',
  },
]

export function buildWhatsAppUrl(rawDigits: string, message: string): string {
  const cleanDigits = rawDigits.replace(/[^\d]/g, '')
  return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(message)}`
}

export const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Our Menu', to: '/menu/' },
  { label: 'Signature Dishes', to: '/signature/' },
  { label: 'Catering', to: '/catering/' },
  { label: 'About & Visit Us', to: '/about/' },
] as const

export const SIGNATURE_SHOWCASE: EditorialHighlight[] = [
  {
    number: '01',
    eyebrow: 'Evening Speciality · 6:30 PM Onwards',
    title: 'Mandi Specials',
    description:
      'Slow-roasted Chicken Mandi, Alfaham Mandi, Fish Mandi, Golden Mandi, and Masala Peri Peri Mandi served over fragrant long-grain rice each evening from 6:30 PM onwards.',
    image: assetUrl(BRAND_IMAGES.alfahamMandi.path),
    imageWidth: BRAND_IMAGES.alfahamMandi.width,
    imageHeight: BRAND_IMAGES.alfahamMandi.height,
    imageAlt: 'Alfaham Mandi served over aromatic rice at MSK Shahul Bhai Biryani in Tirunelveli',
    confirmationNote: 'Available from 6:30 PM onwards',
  },
  {
    number: '02',
    eyebrow: 'Morning to Night · House Craft',
    title: 'Biryani Collection',
    description:
      'From Mutton Biryani, Chicken Biryani, Fish Biryani, and Prawn Biryani to Hyderabadi Biryani, Egg Biryani, White Biryani, and Thokku Biryani prepared with aromatic whole spices.',
    image: assetUrl(BRAND_IMAGES.heroBiryani.path),
    imageWidth: BRAND_IMAGES.heroBiryani.width,
    imageHeight: BRAND_IMAGES.heroBiryani.height,
    imageAlt: 'Steaming copper handi of authentic biryani at MSK Shahul Bhai Biryani Tirunelveli',
    confirmationNote: 'Availability: Morning to Night',
  },
  {
    number: '03',
    eyebrow: 'Aromatic Craft & Spice',
    title: 'Whole Spice & Chukka Heritage',
    description:
      'Star anise, green cardamom, cinnamon bark, cloves, and freshly cracked black pepper shape our spicy Malabar Chicken and Mutton Chukka alongside Agni and Masala gravies.',
    image: assetUrl(BRAND_IMAGES.spiceCraft.path),
    imageWidth: BRAND_IMAGES.spiceCraft.width,
    imageHeight: BRAND_IMAGES.spiceCraft.height,
    imageAlt: 'Whole biryani spices and saffron in an antique spoon beside a copper handi',
    confirmationNote: 'Availability: Morning to Night',
  },
]

export const CATERING_CATEGORIES: CateringCategory[] = [
  {
    id: 'marriage',
    title: 'Marriage Functions',
    subtitle: 'Traditional Hospitality',
    description:
      'Authentic celebratory biryani and accompaniments prepared fresh for marriage functions across Melapalayam and Tirunelveli.',
    whatsappMessage:
      'Hello MSK Shahul Bhai Biryani, I would like to enquire about catering for a Marriage Function.',
  },
  {
    id: 'wedding',
    title: 'Wedding Catering',
    subtitle: 'Grand Celebrations',
    description:
      'Dedicated wedding catering by MSK Catering Service built around authentic taste, consistent aroma, and warm guest hospitality.',
    whatsappMessage:
      'Hello MSK Shahul Bhai Biryani, I would like to enquire about Wedding Catering.',
  },
  {
    id: 'family',
    title: 'Family Functions',
    subtitle: 'Close Gatherings',
    description:
      'Thoughtfully prepared meals for family milestones, home gatherings, and special celebration dinners.',
    whatsappMessage:
      'Hello MSK Shahul Bhai Biryani, I would like to enquire about catering for a Family Function.',
  },
  {
    id: 'celebrations',
    title: 'Celebrations',
    subtitle: 'Every Milestone',
    description:
      'Festive occasions, receptions, and celebratory gatherings served with authentic biryani, Mandi, and specialities.',
    whatsappMessage:
      'Hello MSK Shahul Bhai Biryani, I would like to enquire about catering for a Celebration.',
  },
  {
    id: 'event',
    title: 'Event Catering',
    subtitle: 'Tailored Service',
    description:
      'Coordinated event catering arrangements across Tirunelveli discussed directly with our team to match your occasion.',
    whatsappMessage:
      'Hello MSK Shahul Bhai Biryani, I would like to enquire about Event Catering.',
  },
  {
    id: 'bulk',
    title: 'Bulk Biryani Orders',
    subtitle: 'Direct Kitchen Enquiry',
    description:
      'Bulk biryani orders prepared fresh to discuss directly on WhatsApp or phone for events and gatherings.',
    whatsappMessage:
      'Hello MSK Shahul Bhai Biryani, I would like to enquire about a Bulk Biryani Order.',
  },
]

export const CATERING_GALLERY: GalleryPhoto[] = [
  {
    id: 'cat-1',
    title: 'Celebration Banquet Spread',
    caption: 'Hammered copper handis flanked by roasted platters and brass accompaniments.',
    image: assetUrl(BRAND_IMAGES.weddingCatering.path),
    width: BRAND_IMAGES.weddingCatering.width,
    height: BRAND_IMAGES.weddingCatering.height,
    alt: 'Grand banquet table prepared for wedding catering in Tirunelveli with steaming copper biryani handis',
  },
  {
    id: 'cat-2',
    title: 'Traditional Deg & Handi Service',
    caption: 'Freshly unsealed biryani vessels prepared for marriage and function service.',
    image: assetUrl(BRAND_IMAGES.marriageCatering.path),
    width: BRAND_IMAGES.marriageCatering.width,
    height: BRAND_IMAGES.marriageCatering.height,
    alt: 'Steaming copper biryani deg vessels arranged for marriage catering in Melapalayam',
  },
  {
    id: 'cat-3',
    title: 'Curated Feast Accompaniments',
    caption: 'Biryani served alongside crisp starters, cooling raita, and traditional salna.',
    image: assetUrl(BRAND_IMAGES.feastPlatter.path),
    width: BRAND_IMAGES.feastPlatter.width,
    height: BRAND_IMAGES.feastPlatter.height,
    alt: 'Biryani feast platter with spiced starters, raita, and salna by MSK Catering Service',
  },
]

export const RESTAURANT_GALLERY: GalleryPhoto[] = [
  {
    id: 'rest-1',
    title: 'Warm Evening Dining Ambience',
    caption: 'A warm, welcoming dining setting crafted for unhurried meals together.',
    image: assetUrl(BRAND_IMAGES.restaurantAmbience.path),
    width: BRAND_IMAGES.restaurantAmbience.width,
    height: BRAND_IMAGES.restaurantAmbience.height,
    alt: 'Warm dining ambience inside MSK Shahul Bhai Biryani in Melapalayam, Tirunelveli',
  },
  {
    id: 'rest-2',
    title: 'From the Copper Handi',
    caption: 'Served hot at the table with aromatic steam and balanced whole spices.',
    image: assetUrl(BRAND_IMAGES.heroBiryani.path),
    width: BRAND_IMAGES.heroBiryani.width,
    height: BRAND_IMAGES.heroBiryani.height,
    alt: 'Steaming copper handi of authentic biryani served at MSK Shahul Bhai Biryani',
  },
  {
    id: 'rest-3',
    title: 'Whole Spice Tempering',
    caption: 'Carefully balanced aromatics, caramelized shallots, and saffron notes.',
    image: assetUrl(BRAND_IMAGES.spiceCraft.path),
    width: BRAND_IMAGES.spiceCraft.width,
    height: BRAND_IMAGES.spiceCraft.height,
    alt: 'Whole biryani spices and saffron prepared in the MSK Shahul Bhai Biryani kitchen',
  },
  {
    id: 'rest-4',
    title: 'Traditional Accompaniments',
    caption: 'Slow-simmered salna and gravies served in hammered copper bowls.',
    image: assetUrl(BRAND_IMAGES.mainCourse.path),
    width: BRAND_IMAGES.mainCourse.width,
    height: BRAND_IMAGES.mainCourse.height,
    alt: 'Slow-simmered biryani salna and traditional gravies served in copper bowls',
  },
]
