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
  imageAlt: string
}

export interface MenuCategoryGroup {
  id: MenuCategoryId
  navLabel: string
  title: string
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
        image: assetUrl('images/menu/chicken-mandi.webp'),
        imageAlt: 'Chicken Mandi served with spiced rice, toasted nuts, and chutney',
      },
      {
        id: 'alfaham-mandi',
        name: 'Alfaham Mandi',
        categoryId: 'mandi',
        categoryTitle: 'Mandi Specials',
        availability: 'Available from 6:30 PM',
        isEveningSpecial: true,
        image: assetUrl('images/menu/alfaham-mandi.webp'),
        imageAlt: 'Alfaham Mandi with charcoal-grilled chicken over aromatic mandi rice',
      },
      {
        id: 'fish-mandi',
        name: 'Fish Mandi',
        categoryId: 'mandi',
        categoryTitle: 'Mandi Specials',
        availability: 'Available from 6:30 PM',
        isEveningSpecial: true,
        image: assetUrl('images/menu/fish-mandi.webp'),
        imageAlt: 'Fish Mandi featuring seared spiced fish fillet over mandi rice',
      },
      {
        id: 'golden-mandi',
        name: 'Golden Mandi',
        categoryId: 'mandi',
        categoryTitle: 'Mandi Specials',
        availability: 'Available from 6:30 PM',
        isEveningSpecial: true,
        image: assetUrl('images/menu/golden-mandi.webp'),
        imageAlt: 'Golden Mandi topped with saffron-glazed chicken and aromatic rice',
      },
      {
        id: 'masala-peri-peri-mandi',
        name: 'Masala Peri Peri Mandi',
        categoryId: 'mandi',
        categoryTitle: 'Mandi Specials',
        availability: 'Available from 6:30 PM',
        isEveningSpecial: true,
        image: assetUrl('images/menu/masala-peri-peri-mandi.webp'),
        imageAlt: 'Masala Peri Peri Mandi with spiced grilled chicken and fragrant mandi rice',
      },
    ],
  },
  {
    id: 'biryani',
    navLabel: 'Biryani',
    title: 'Biryani Collection',
    availabilityLabel: 'Morning to Night',
    availabilityHours: 'Morning to Night',
    items: [
      {
        id: 'mutton-biryani',
        name: 'Mutton Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/mutton-biryani.webp'),
        imageAlt: 'Mutton Biryani served in a hammered vessel with raita and salna',
      },
      {
        id: 'chicken-biryani',
        name: 'Chicken Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/chicken-biryani.webp'),
        imageAlt: 'Chicken Biryani garnished with whole spices and fresh coriander',
      },
      {
        id: 'fish-biryani',
        name: 'Fish Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/fish-biryani.webp'),
        imageAlt: 'Fish Biryani prepared with spiced fish and fragrant saffron rice',
      },
      {
        id: 'prawn-biryani',
        name: 'Prawn Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/prawn-biryani.webp'),
        imageAlt: 'Prawn Biryani cooked with spiced prawns and seasoned rice',
      },
      {
        id: 'hyderabadi-biryani',
        name: 'Hyderabadi Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/hyderabadi-biryani.webp'),
        imageAlt: 'Hyderabadi Biryani layered with saffron basmati rice and herbs',
      },
      {
        id: 'egg-biryani',
        name: 'Egg Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/egg-biryani.webp'),
        imageAlt: 'Egg Biryani topped with spiced boiled eggs and aromatic rice',
      },
      {
        id: 'white-biryani',
        name: 'White Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/white-biryani.webp'),
        imageAlt: 'White Biryani prepared with fragrant light-spiced rice',
      },
      {
        id: 'thokku-biryani',
        name: 'Thokku Biryani',
        categoryId: 'biryani',
        categoryTitle: 'Biryani Collection',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/thokku-biryani.webp'),
        imageAlt: 'Thokku Biryani served with rich spiced onion-tomato thokku',
      },
    ],
  },
  {
    id: 'rice',
    navLabel: 'Rice',
    title: 'Rice Varieties',
    availabilityLabel: 'Morning to Night',
    availabilityHours: 'Morning to Night',
    items: [
      {
        id: 'ghee-rice',
        name: 'Ghee Rice',
        categoryId: 'rice',
        categoryTitle: 'Rice Varieties',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/ghee-rice.webp'),
        imageAlt: 'Ghee Rice garnished with roasted cashews, raisins, and fried onions',
      },
      {
        id: 'coconut-rice',
        name: 'Coconut Rice',
        categoryId: 'rice',
        categoryTitle: 'Rice Varieties',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/coconut-rice.webp'),
        imageAlt: 'Coconut Rice tempered with curry leaves and grated coconut',
      },
      {
        id: 'white-rice',
        name: 'White Rice',
        categoryId: 'rice',
        categoryTitle: 'Rice Varieties',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/white-rice.webp'),
        imageAlt: 'Steaming fluffy White Rice served in a traditional bowl',
      },
    ],
  },
  {
    id: 'mutton-gravy',
    navLabel: 'Mutton Gravy',
    title: 'Mutton Gravy Specials',
    availabilityLabel: 'Morning to Night',
    availabilityHours: 'Morning to Night',
    items: [
      {
        id: 'mutton-agni-gravy',
        name: 'Mutton Agni Gravy',
        categoryId: 'mutton-gravy',
        categoryTitle: 'Mutton Gravy Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/mutton-agni-gravy.webp'),
        imageAlt: 'Mutton Agni Gravy cooked in rich dark roasted spices',
      },
      {
        id: 'mutton-masala-gravy',
        name: 'Mutton Masala Gravy',
        categoryId: 'mutton-gravy',
        categoryTitle: 'Mutton Gravy Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/mutton-masala-gravy.webp'),
        imageAlt: 'Mutton Masala Gravy slow-simmered with traditional aromatics',
      },
    ],
  },
  {
    id: 'chicken-gravy',
    navLabel: 'Chicken Gravy',
    title: 'Chicken Gravy Specials',
    availabilityLabel: 'Morning to Night',
    availabilityHours: 'Morning to Night',
    items: [
      {
        id: 'chicken-agni-gravy',
        name: 'Chicken Agni Gravy',
        categoryId: 'chicken-gravy',
        categoryTitle: 'Chicken Gravy Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/chicken-agni-gravy.webp'),
        imageAlt: 'Chicken Agni Gravy simmered in fiery crimson spices',
      },
      {
        id: 'chicken-masala-gravy',
        name: 'Chicken Masala Gravy',
        categoryId: 'chicken-gravy',
        categoryTitle: 'Chicken Gravy Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/chicken-masala-gravy.webp'),
        imageAlt: 'Chicken Masala Gravy garnished with fresh coriander',
      },
    ],
  },
  {
    id: 'malabar-chukka',
    navLabel: 'Malabar Chukka',
    title: 'Malabar Chukka Specials',
    availabilityLabel: 'Morning to Night',
    availabilityHours: 'Morning to Night',
    items: [
      {
        id: 'malabar-chicken-chukka',
        name: 'Malabar Chicken Chukka – Spicy',
        categoryId: 'malabar-chukka',
        categoryTitle: 'Malabar Chukka Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/malabar-chicken-chukka.webp'),
        imageAlt: 'Malabar Chicken Chukka – Spicy tossed with crushed pepper and curry leaves',
      },
      {
        id: 'malabar-mutton-chukka',
        name: 'Malabar Mutton Chukka – Spicy',
        categoryId: 'malabar-chukka',
        categoryTitle: 'Malabar Chukka Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/malabar-mutton-chukka.webp'),
        imageAlt: 'Malabar Mutton Chukka – Spicy roasted with black pepper and shallots',
      },
    ],
  },
  {
    id: 'fried-grilled',
    navLabel: 'Fried & Grilled',
    title: 'Fried & Grilled Specials',
    availabilityLabel: 'Morning to Night',
    availabilityHours: 'Morning to Night',
    items: [
      {
        id: 'chicken-65',
        name: 'Chicken 65',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/chicken-65.webp'),
        imageAlt: 'Chicken 65 garnished with crispy curry leaves and charred lime',
      },
      {
        id: 'golden-65',
        name: 'Golden 65',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/golden-65.webp'),
        imageAlt: 'Golden 65 crisp golden-fried spiced chicken bites',
      },
      {
        id: 'green-65',
        name: 'Green 65',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/green-65.webp'),
        imageAlt: 'Green 65 herb-marinated fried chicken with mint and coriander',
      },
      {
        id: 'grilled-chicken',
        name: 'Grilled Chicken',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/grilled-chicken.webp'),
        imageAlt: 'Grilled Chicken flame-roasted with herbs and charred lemon',
      },
      {
        id: 'tandoori-chicken',
        name: 'Tandoori Chicken',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/tandoori-chicken.webp'),
        imageAlt: 'Tandoori Chicken smoky roasted quarters with onion rings',
      },
      {
        id: 'alfaham-chicken',
        name: 'Alfaham Chicken',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/alfaham-chicken.webp'),
        imageAlt: 'Alfaham Chicken charcoal-grilled with smoky grill marks',
      },
      {
        id: 'agara-red-spicy-chicken',
        name: 'Agara Red Spicy Chicken',
        categoryId: 'fried-grilled',
        categoryTitle: 'Fried & Grilled Specials',
        availability: 'Morning to Night',
        image: assetUrl('images/menu/agara-red-spicy-chicken.webp'),
        imageAlt: 'Agara Red Spicy Chicken coated in deep crimson spicy masala',
      },
    ],
  },
]
