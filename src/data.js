// ----------------------------------------------------------------------------
// Forest Cafe — content (placeholders marked clearly for the owner to edit)
// ----------------------------------------------------------------------------

export const gallery = [
  { src: '/assets/interior-wide.jpg', alt: 'Wide interior with central tree and rattan lanterns' },
  { src: '/assets/interior-trees.jpg', alt: 'Indoor trees rising to the ceiling with woven lanterns' },
  { src: '/assets/moss-wall.jpg', alt: 'Preserved-moss feature wall with Forest Cafe signage' },
  { src: '/assets/seating-overhead.jpg', alt: 'Curved olive banquette seating from above' },
  { src: '/assets/night-lanterns.jpg', alt: 'Glowing rattan lanterns among the leaves at night' },
  { src: '/assets/facade-night.jpg', alt: 'Forest Cafe lit facade at night' },
  { src: '/assets/menu-booklet.jpg', alt: 'Forest Cafe menu booklet' },
]

export const features = [
  {
    num: '01',
    title: 'Real-Feel Forest',
    body: 'Floor-to-ceiling trees, a living moss feature wall, and woven rattan lanterns that glow warm overhead. It feels like a forest because it nearly is one.',
    icon: 'tree',
  },
  {
    num: '02',
    title: 'Slow Mornings & Long Stays',
    body: 'Free Wi-Fi, comfy olive-chartreuse seating, and good coffee made for lingering — ideal for focused work, easy dates, or unhurried catch-ups.',
    icon: 'lantern',
  },
  {
    num: '03',
    title: 'Beside the Arena',
    body: 'A short walk from the Philippine Arena, so it is the perfect place to land before a concert or wind down after the crowds head home.',
    icon: 'leaf',
  },
]

export const branches = [
  {
    tag: 'Main Branch',
    tagBg: '#1F3D2B',
    placeholder: false,
    img: '/assets/facade-night.jpg',
    name: 'Forest Cafe PH Arena',
    address: 'Ciudad de Victoria Bypass Road, Bocaue, Bulacan',
    area: 'Walking distance from the Philippine Arena',
    hours: 'Mon – Sun · 8:00 AM – 10:00 PM',
    phone: '+63 965 947 0077',
    phoneHref: 'tel:+639659470077',
    map: 'https://www.google.com/maps?q=Philippine+Arena+Bocaue+Bulacan&output=embed',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=Philippine+Arena+Bocaue+Bulacan',
  },
  {
    tag: 'Second Branch',
    tagBg: '#9a5a2a',
    placeholder: true,
    img: '/assets/interior-wide.jpg',
    name: '[ Branch 2 Name — placeholder ]',
    address: '[ Street address — placeholder ]',
    area: '[ Area / landmark — placeholder ]',
    hours: '[ Opening hours — placeholder ]',
    phone: '[ Phone — placeholder ]',
    phoneHref: '#',
    map: 'https://www.google.com/maps?q=Bulacan+Philippines&output=embed',
    directions: '#',
  },
]

export const press = [
  {
    stars: 5,
    quote:
      'Walked in and forgot I was in the city. The trees and lantern glow are unreal — coffee was great too.',
    name: 'Maria S.',
    initial: 'M',
  },
  {
    stars: 5,
    quote:
      'Perfect spot before a concert at the Arena. Comfy seats, fast Wi-Fi, and the breakfast plates are huge.',
    name: 'James R.',
    initial: 'J',
  },
  {
    stars: 5,
    quote:
      'Brought the whole family. Kids loved the sloth on the sign, we loved the calm. We stayed three hours.',
    name: 'Liza & Co.',
    initial: 'L',
  },
]

export const menuCategories = [
  {
    name: 'Breakfast',
    note: 'Served 8AM–12NN',
    items: [
      { name: 'Forest Tapsilog', price: '₱185' },
      { name: 'Longganisa Breakfast', price: '₱165' },
      { name: 'Canopy Buttermilk Pancakes', price: '₱155' },
      { name: 'Avocado Toast', price: '₱175' },
      { name: 'Garden Omelette', price: '₱160' },
    ],
  },
  {
    name: 'Coffee & Drinks',
    note: '',
    items: [
      { name: 'Forest Latte', price: '₱150' },
      { name: 'Spanish Latte', price: '₱160' },
      { name: 'Iced Caramel Macchiato', price: '₱170' },
      { name: 'Matcha Canopy', price: '₱175' },
      { name: 'Hot Chocolate', price: '₱140' },
      { name: 'Fresh Fruit Shakes', price: '₱155' },
    ],
  },
  {
    name: 'Pasta',
    note: '',
    items: [
      { name: 'Truffle Carbonara', price: '₱245' },
      { name: 'Creamy Pesto', price: '₱235' },
      { name: 'Beef Bolognese', price: '₱255' },
      { name: 'Aglio e Olio', price: '₱215' },
    ],
  },
  {
    name: 'Sandwiches & Burgers',
    note: '',
    items: [
      { name: 'Forest Clubhouse', price: '₱225' },
      { name: 'Angus Cheeseburger', price: '₱265' },
      { name: 'Grilled Chicken Sandwich', price: '₱235' },
      { name: 'Pulled Pork Sandwich', price: '₱245' },
    ],
  },
  {
    name: 'Rice Meals & Steaks',
    note: '',
    items: [
      { name: 'Crispy Pata Rice', price: '₱285' },
      { name: 'Grilled Liempo', price: '₱265' },
      { name: 'US Angus Steak', price: '₱495' },
      { name: 'Chicken Inasal', price: '₱245' },
      { name: 'Garlic Buttered Shrimp Rice', price: '₱295' },
    ],
  },
  {
    name: 'Desserts',
    note: '',
    items: [
      { name: 'Choco Lava Cake', price: '₱165' },
      { name: 'Mango Float', price: '₱145' },
      { name: 'Leche Flan', price: '₱125' },
      { name: 'Forest Berry Cheesecake', price: '₱175' },
    ],
  },
]

export const menuChips = menuCategories.map((c) => c.name)

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#branches', label: 'Branches' },
  { href: '#visit', label: 'Visit' },
]
