import { PackageItem } from './types';

export const packagesData: PackageItem[] = [
  {
    id: 'pkg-multi-1',
    slug: 'egypt-jordan-grand-tour',
    title: 'Grand Egypt & Jordan Discovery',
    destination: 'Multi-Country',
    countries: ['Egypt', 'Jordan'],
    type: 'Multi-Country',
    duration: '12 Days / 11 Nights',
    price: 1890,
    popular: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80',
    description: 'Combine the timeless pyramids of Egypt with the rose-red rock city of Petra and Wadi Rum desert.',
    overview: 'An unforgettable 12-day journey spanning Egypt and Jordan. Start in Cairo exploring Giza Pyramids and Egyptian Museum, cruise the majestic Nile River from Aswan to Luxor, then fly to Amman to discover Petra, Jerash, and the surreal landscapes of Wadi Rum.',
    highlights: [
      'Giza Pyramids & Sphinx',
      '4-Night Nile River Cruise (Aswan to Luxor)',
      'Rose-Red City of Petra',
      'Wadi Rum Jeep Safari & Glamping',
      'Float in the Dead Sea'
    ],
    included: [
      'All airport transfers with private driver',
      'Domestic flight Cairo – Aswan & Luxor – Amman',
      '5-Star Deluxe Hotel Accommodations & Nile Cruise',
      'English/Spanish speaking licensed Egyptologist & Jordan guides',
      'Entrance fees to all listed monuments & national parks'
    ],
    excluded: [
      'International airfare',
      'Entry visa fees',
      'Personal expenses & tipping'
    ],
    selectedHotels: [
      { city: 'Cairo', nights: 3, name: 'Steigenberger Hotel El Tahrir' },
      { city: 'Nile Cruise', nights: 4, name: 'MS Steigenberger Royale Cruise' },
      { city: 'Amman', nights: 2, name: 'Landmark Amman Hotel' },
      { city: 'Petra', nights: 1, name: 'Mövenpick Resort Petra' },
      { city: 'Wadi Rum', nights: 1, name: 'Sun City Camp Luxury Dome' }
    ]
  },
  {
    id: 'pkg-honey-1',
    slug: 'nile-red-sea-honeymoon',
    title: 'Romantic Nile Cruise & Red Sea Luxury',
    destination: 'Egypt',
    type: 'Honeymoon',
    duration: '10 Days / 9 Nights',
    price: 1650,
    popular: true,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
    description: 'Private Nile felucca dinners, luxury 5-star cruise, and romantic beach resort stay in Hurghada.',
    overview: 'Crafted specifically for couples and honeymooners seeking romance, culture, and relaxation. Features VIP champagne welcome, romantic candlelight Nile dinner, and beachfront luxury in Hurghada.',
    highlights: [
      'Pyramids Private Sunset Tour',
      'Luxury Nile Cruise Suite with Private Balcony',
      'Private Felucca Sail at Sunset',
      'Hurghada Beachfront All-Inclusive Villa Stay'
    ],
    included: [
      'VIP luxury airport transfers',
      'Domestic flights Cairo – Luxor / Hurghada – Cairo',
      'Honeymoon room upgrades & romantic amenities',
      'All meals on Nile Cruise and Hurghada resort'
    ],
    excluded: [
      'International flights',
      'Personal spa treatments'
    ]
  },
  {
    id: 'pkg-turkey-1',
    slug: 'cappadocia-istanbul-express',
    title: 'Ottoman Heritage & Hot Air Balloons',
    destination: 'Turkey',
    type: 'Cultural',
    duration: '8 Days / 7 Nights',
    price: 1250,
    popular: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=800&q=80',
    description: 'Fly over magical fairy chimneys in Cappadocia and explore Hagia Sophia & Grand Bazaar.',
    overview: 'Immerse yourself in Turkey’s rich history and natural wonders. Discover the imperial treasures of Istanbul and experience sunrise hot air balloon rides over fairy chimneys in Cappadocia.',
    highlights: [
      'Hagia Sophia & Blue Mosque',
      'Bosphorus Sunset Yacht Cruise',
      'Cappadocia Hot Air Balloon Flight',
      'Underground City of Derinkuyu'
    ],
    included: [
      'Domestic flights Istanbul – Cappadocia roundtrip',
      'Luxury cave hotel stay in Cappadocia',
      'Guided tours with English/Spanish guide',
      'Daily breakfast & select lunches'
    ],
    excluded: [
      'Hot air balloon flight fee (optional add-on)',
      'Tipping & personal spending'
    ]
  },
  {
    id: 'mct-001',
    slug: 'estrellas-medio-oriente-19d',
    title: 'Estrellas del Medio Oriente (Egypt, Jordan & Turkey)',
    destination: 'Multi-Country',
    countries: ['Egypt', 'Jordan', 'Turkey'],
    type: 'Grand Tour',
    duration: '19 Days / 18 Nights',
    price: 2850,
    popular: true,
    rating: 4.9,
    image: 'https://theglobetrottingdetective.com/wp-content/uploads/2022/03/best-places-in-the-middle-east-traveling-the-middle-east-cappadocia-turkey.jpg',
    description: 'The ultimate 19-day Middle East grand circuit exploring the Pyramids of Giza, Nile Cruise, Petra, Dead Sea, Istanbul, and Cappadocia.',
    overview: 'Experience the magic of three iconic destinations in one seamless trip. Covers top world heritage sites across Egypt, Jordan, and Turkey with full luxury service.',
    highlights: [
      'Pyramids, Sphinx & Grand Egyptian Museum',
      'Nile River Cruise (Luxor & Aswan)',
      'Petra Treasury & Monastery Trek',
      'Wadi Rum Desert Safari',
      'Istanbul Bosphorus Cruise',
      'Cappadocia Fairy Chimneys & Cave Hotel'
    ],
    included: [
      'All internal flights between countries and cities',
      '5-Star Deluxe Hotel & Cruise Accommodations',
      'Dedicated local multi-lingual guides',
      'All airport transfers and ground transport in luxury coaches'
    ],
    excluded: [
      'International long-haul flights from/to home country',
      'Country entrance visas'
    ]
  }
];

export const packages = packagesData;

export const getPackageBySlug = (slug: string): PackageItem | undefined => {
  return packagesData.find(p => p.slug.toLowerCase() === slug.toLowerCase());
};

export const getPackageById = (id: string): PackageItem | undefined => {
  return packagesData.find(p => p.id === id);
};

export const getPackagesByDestination = (dest: string): PackageItem[] => {
  return packagesData.filter(p => p.destination.toLowerCase() === dest.toLowerCase());
};
