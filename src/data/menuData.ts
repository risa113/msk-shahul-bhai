import { assetUrl } from './restaurant'

export type MenuCategoryId =
  | 'mandi'
  | 'biryani'
  | 'rice'
  | 'mutton-gravy'
  | 'chicken-gravy'
  | 'malabar-chukka'
  | 'fried-grilled'

export interface MenuDish {
  id: string
  name: string
  categoryId: MenuCategoryId
  categoryTitle: string
  availability: string
  isEveningSpecial?: boolean
  image: string
  imageWidth: number
  imageHeight: number
  imageAlt: string
}

export interface MenuCategoryGroup {
  id: MenuCategoryId
  navLabel: string
  title: string
  description: string
  availabilityLabel: string
  availabilityHours: string
  isEveningSpecial?: boolean
  items: MenuDish[]
}

export const MENU_DATA: MenuCategoryGroup[] = [
  {
    id: 'mandi',
    navLabel: 'Mandi',
    title: 'Mandi Specials',
    description:
      'Freshly prepared Arabian-style Mandi specials served from 6:30 PM onwards, pairing tender spiced chicken or seared fish with aromatic long-grain mandi rice.',
    availabilityLabel: 'Available from 6:30 PM',
    availabilityHours: '6:30 PM onwards',
    isEveningSpecial: true,
    items: [
      {
        id: 'chicken-mandi',
        name: 'Chicken Mandi',
        categoryId: 'mandi',
        categoryTitle: 'Mandi Specials',
        availability: 'Available from 6:30 PM',
        isEveningSpecial: true,
        image: assetUrl('images/menu/msk-shahul-bhai-chicken-mandi-melapalayam.webp'),
        imageWidth: 1100,
        imageHeight: 821,
        imageAlt: 'Chicken Mandi served with aromatic mandi rice and smoky chutney',
      },
      {
        id: 'alfaham-mandi',
        name: 'Alfaham Mandi',
        categoryId: 'mandi',
        categoryTitle: 'Mandi Specials',
        availability: 'Available from 6:30 PM',
        isEveningSpecial: true,
        image: assetUrl('images/menu/msk-shahul-bhai-alfaham-mandi-tirunelveli.webp'),
        imageWidth: 1100,
        imageHeight: 821,
        imageAlt: 'Alfaham Mandi with charcoal-grilled chicken over spiced mandi rice',
      },
      {
        id: 'fish-mandi',
        name: 'Fish Mandi',
        categoryId: 'mandi',
        categoryTitle: 'Mandi Specials',
        availability: 'Available from 6:30 PM',
        isEveningSpecial: true,
        image: assetUrl('images/menu/msk-shahul-bhai-fish-mandi-tirunelveli.webp'),
        imageWidth: 1100,
        imageHeight: 821,
        imageAlt: 'Fish Mandi featuring seared spiced fish over aromatic rice',
      },
      {
        id: 'golden-mandi',
        name: 'Golden Mandi',
        categoryId: 'mandi',
        categoryTitle: 'Mandi Specials',
        availability: 'Available from 6:30 PM',
        isEveningSpecial: true,
        image: assetUrl('images/menu/msk-shahul-bhai-golden-mandi-melapalayam.webp'),
        imageWidth: 960,
        imageHeight: 960,
        imageAlt: 'Golden Mandi topped with roasted chicken and saffron-tinted mandi rice',
      },
      {
        id: 'masala-peri-peri-mandi',
        name: 'Masala Peri Peri Mandi',
        categoryId: 'mandi',
        categoryTitle: 'Mandi Specials',
        availability: 'Available from 6:30 PM',
        isEveningSpecial: true,
        image: assetUrl('images/menu/msk-shahul-bhai-masala-peri-peri-mandi.webp'),
        imageWidth: 644,
        imageHeight: 616,
        imageAlt: 'Masala Peri Peri Mandi with spiced grilled chicken over fragrant rice',
      },
    ],
  },
  {
    id: 'biryani',
    navLabel: 'Biryani',
    title: 'Biryani Collection',
    description:
      'Eight signature biryani varieties cooked fresh from morning to night with aromatic rice, slow-layered spices, tender meat, seafood, or egg, served with traditional accompaniments.',
    availabilityLabel: 'Morning to Night',
    availabilityHours: 'Morning to Night',
    items: [
      {
        id: 'mutton-biryani',
        name: 'Mutton Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-mutton-biryani-tirunelveli.webp'),
        imageWidth: 1100,
        imageHeight: 821,
        imageAlt: 'Mutton Biryani served hot with onion raita and traditional salna',
      },
      {
        id: 'chicken-biryani',
        name: 'Chicken Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-chicken-biryani-tirunelveli.webp'),
        imageWidth: 768,
        imageHeight: 783,
        imageAlt: 'Chicken Biryani garnished with whole spices and fresh coriander',
      },
      {
        id: 'fish-biryani',
        name: 'Fish Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-fish-biryani-melapalayam.webp'),
        imageWidth: 960,
        imageHeight: 777,
        imageAlt: 'Fish Biryani prepared with spiced fish fillets and fragrant rice',
      },
      {
        id: 'prawn-biryani',
        name: 'Prawn Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-prawn-biryani-tirunelveli.webp'),
        imageWidth: 700,
        imageHeight: 700,
        imageAlt: 'Prawn Biryani cooked with spiced prawns and seasoned rice',
      },
      {
        id: 'hyderabadi-biryani',
        name: 'Hyderabadi Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-hyderabadi-biryani.webp'),
        imageWidth: 960,
        imageHeight: 638,
        imageAlt: 'Hyderabadi Biryani layered with saffron basmati rice, fried onions, and herbs',
      },
      {
        id: 'egg-biryani',
        name: 'Egg Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-egg-biryani-melapalayam.webp'),
        imageWidth: 960,
        imageHeight: 677,
        imageAlt: 'Egg Biryani topped with spiced boiled eggs and aromatic biryani rice',
      },
      {
        id: 'white-biryani',
        name: 'White Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-white-biryani-tirunelveli.webp'),
        imageWidth: 960,
        imageHeight: 574,
        imageAlt: 'White Biryani crafted with delicately spiced fragrant white grains',
      },
      {
        id: 'thokku-biryani',
        name: 'Thokku Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-thokku-biryani-melapalayam.webp'),
        imageWidth: 621,
        imageHeight: 960,
        imageAlt: 'Thokku Biryani served with deeply spiced onion-tomato thokku',
      },
    ],
  },
  {
    id: 'rice',
    navLabel: 'Rice',
    title: 'Rice Varieties',
    description:
      'Fragrant classic rice preparations available morning to night, ideal for pairing alongside our Mutton Agni, Chicken Masala, and Malabar Chukka dishes.',
    availabilityLabel: 'Morning to Night',
    availabilityHours: 'Morning to Night',
    items: [
      {
        id: 'ghee-rice',
        name: 'Ghee Rice',
        categoryId: 'rice',
        categoryTitle: 'Rice Varieties',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-ghee-rice-tirunelveli.webp'),
        imageWidth: 960,
        imageHeight: 808,
        imageAlt: 'Ghee Rice garnished with roasted cashews, raisins, and crispy onions',
      },
      {
        id: 'coconut-rice',
        name: 'Coconut Rice',
        categoryId: 'rice',
        categoryTitle: 'Rice Varieties',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-coconut-rice.webp'),
        imageWidth: 960,
        imageHeight: 723,
        imageAlt: 'Coconut Rice tempered with fresh curry leaves and grated coconut',
      },
      {
        id: 'white-rice',
        name: 'White Rice',
        categoryId: 'rice',
        categoryTitle: 'Rice Varieties',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-white-rice.webp'),
        imageWidth: 960,
        imageHeight: 848,
        imageAlt: 'Steaming fluffy White Rice served warm for pairing with gravies',
      },
    ],
  },
  {
    id: 'mutton-gravy',
    navLabel: 'Mutton Gravy',
    title: 'Mutton Gravy Specials',
    description:
      'Slow-simmered mutton gravies blending roasted spices and tender meat — from bold, peppery Mutton Agni Gravy to comforting Mutton Masala Gravy.',
    availabilityLabel: 'Morning to Night',
    availabilityHours: 'Morning to Night',
    items: [
      {
        id: 'mutton-agni-gravy',
        name: 'Mutton Agni Gravy',
        categoryId: 'mutton-gravy',
        categoryTitle: 'Mutton Gravy Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-mutton-agni-gravy.webp'),
        imageWidth: 700,
        imageHeight: 700,
        imageAlt: 'Mutton Agni Gravy slow-cooked in bold dark roasted spices',
      },
      {
        id: 'mutton-masala-gravy',
        name: 'Mutton Masala Gravy',
        categoryId: 'mutton-gravy',
        categoryTitle: 'Mutton Gravy Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-mutton-masala-gravy.webp'),
        imageWidth: 960,
        imageHeight: 758,
        imageAlt: 'Mutton Masala Gravy simmered with traditional whole spice aromatics',
      },
    ],
  },
  {
    id: 'chicken-gravy',
    navLabel: 'Chicken Gravy',
    title: 'Chicken Gravy Specials',
    description:
      'House-simmered chicken gravies crafted to accompany rice and biryani throughout the day, featuring fiery Chicken Agni Gravy and classic Chicken Masala Gravy.',
    availabilityLabel: 'Morning to Night',
    availabilityHours: 'Morning to Night',
    items: [
      {
        id: 'chicken-agni-gravy',
        name: 'Chicken Agni Gravy',
        categoryId: 'chicken-gravy',
        categoryTitle: 'Chicken Gravy Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-chicken-agni-gravy.webp'),
        imageWidth: 700,
        imageHeight: 700,
        imageAlt: 'Chicken Agni Gravy cooked in rich, spiced red masala',
      },
      {
        id: 'chicken-masala-gravy',
        name: 'Chicken Masala Gravy',
        categoryId: 'chicken-gravy',
        categoryTitle: 'Chicken Gravy Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-chicken-masala-gravy.webp'),
        imageWidth: 960,
        imageHeight: 697,
        imageAlt: 'Chicken Masala Gravy finished with fresh coriander leaves',
      },
    ],
  },
  {
    id: 'malabar-chukka',
    navLabel: 'Malabar Chukka',
    title: 'Malabar Chukka Specials',
    description:
      'Dry-roasted South Indian Chukka tossed with freshly crushed black pepper, shallots, and aromatic curry leaves for bold spice lovers.',
    availabilityLabel: 'Morning to Night',
    availabilityHours: 'Morning to Night',
    items: [
      {
        id: 'malabar-chicken-chukka',
        name: 'Malabar Chicken Chukka – Spicy',
        categoryId: 'malabar-chukka',
        categoryTitle: 'Malabar Chukka Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-malabar-chicken-chukka.webp'),
        imageWidth: 843,
        imageHeight: 691,
        imageAlt: 'Malabar Chicken Chukka – Spicy pan-roasted with crushed pepper and curry leaves',
      },
      {
        id: 'malabar-mutton-chukka',
        name: 'Malabar Mutton Chukka – Spicy',
        categoryId: 'malabar-chukka',
        categoryTitle: 'Malabar Chukka Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-malabar-mutton-chukka.webp'),
        imageWidth: 960,
        imageHeight: 638,
        imageAlt: 'Malabar Mutton Chukka – Spicy slow-roasted with shallots and black pepper',
      },
    ],
  },
  {
    id: 'fried-grilled',
    navLabel: 'Fried & Grilled',
    title: 'Fried & Grilled Specials',
    description:
      'Crisp fried favourites and smoky flame-grilled chicken varieties — including Chicken 65, Golden 65, Green 65, Tandoori Chicken, Alfaham Chicken, and Agara Red Spicy Chicken.',
    availabilityLabel: 'Morning to Night',
    availabilityHours: 'Morning to Night',
    items: [
      {
        id: 'chicken-65',
        name: 'Chicken 65',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-chicken-65-tirunelveli.webp'),
        imageWidth: 1100,
        imageHeight: 821,
        imageAlt: 'Chicken 65 garnished with fried curry leaves and fresh lime wedges',
      },
      {
        id: 'golden-65',
        name: 'Golden 65',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-golden-65.webp'),
        imageWidth: 950,
        imageHeight: 597,
        imageAlt: 'Golden 65 crisp golden-fried boneless chicken bites',
      },
      {
        id: 'green-65',
        name: 'Green 65',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-green-65.webp'),
        imageWidth: 960,
        imageHeight: 864,
        imageAlt: 'Green 65 chicken marinated with fresh mint, coriander, and green chillies',
      },
      {
        id: 'grilled-chicken',
        name: 'Grilled Chicken',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-grilled-chicken-melapalayam.webp'),
        imageWidth: 1024,
        imageHeight: 1024,
        imageAlt: 'Grilled Chicken flame-roasted with herb marinade and charred lemon',
      },
      {
        id: 'tandoori-chicken',
        name: 'Tandoori Chicken',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-tandoori-chicken-tirunelveli.webp'),
        imageWidth: 700,
        imageHeight: 700,
        imageAlt: 'Tandoori Chicken roasted chicken quarters served with sliced onion rings',
      },
      {
        id: 'alfaham-chicken',
        name: 'Alfaham Chicken',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-alfaham-chicken-melapalayam.webp'),
        imageWidth: 700,
        imageHeight: 700,
        imageAlt: 'Alfaham Chicken charcoal-grilled Arabian spiced chicken',
      },
      {
        id: 'agara-red-spicy-chicken',
        name: 'Agara Red Spicy Chicken',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/msk-shahul-bhai-agara-red-spicy-chicken.webp'),
        imageWidth: 960,
        imageHeight: 718,
        imageAlt: 'Agara Red Spicy Chicken coated in deep red spicy masala',
      },
    ],
  },
]
