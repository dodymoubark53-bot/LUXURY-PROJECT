import { hotelsTranslations } from './hotels.translations';

export interface DetailedHotelItem {
  id: string;
  name: string;
  destination: string;
  city: string;
  stars: number;
  rating: number;
  pricePerNight: number;
  image: string;
  images: string[];
  amenities: string[];
  description: string;
  address: string;
  roomTypes: string[];
  translations?: typeof hotelsTranslations[string];
}

export const detailedHotelsData: DetailedHotelItem[] = [
  {
    id: 'hotel-cairo-1',
    name: 'Steigenberger Hotel El Tahrir',
    destination: 'egypt',
    city: 'Cairo',
    stars: 5,
    rating: 4.8,
    pricePerNight: 180,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Pool', 'Free WiFi', 'Spa', 'Restaurant', 'Gym', 'Airport Transfer'],
    description: 'Located in the heart of Downtown Cairo, steps away from the Egyptian Museum.',
    address: 'El Tahrir Square, Downtown, Cairo, Egypt',
    roomTypes: ['Standard Room', 'Deluxe Nile View', 'Executive Suite'],
    translations: hotelsTranslations['hotel-cairo-1']
  },
  {
    id: 'hotel-luxor-1',
    name: 'Sofitel Winter Palace Luxor',
    destination: 'egypt',
    city: 'Luxor',
    stars: 5,
    rating: 4.9,
    pricePerNight: 240,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Historic Palace', 'Nile Views', 'Pool', 'Fine Dining', 'Gardens'],
    description: 'A historic Victorian palace hotel on the banks of the River Nile in Luxor.',
    address: 'Corniche El Nile Street, Luxor, Egypt',
    roomTypes: ['Classic Room Garden View', 'Nile View Luxury Room', 'Royal Suite'],
    translations: hotelsTranslations['hotel-luxor-1']
  },
  {
    id: 'hotel-aswan-1',
    name: 'Sofitel Legend Old Cataract Aswan',
    destination: 'egypt',
    city: 'Aswan',
    stars: 5,
    rating: 4.95,
    pricePerNight: 320,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Nile Panorama', 'Infinity Pool', 'SoSPA', 'Historic Heritage', 'Fine Dining'],
    description: 'A 19th-century Victorian palace rising from the Pink Granite Shelf over the Nile.',
    address: 'Abtal El Tahrir Street, Aswan, Egypt',
    roomTypes: ['Palace Premium Room', 'Prestige Nile View Suite', 'Agatha Christie Suite']
  },
  {
    id: 'hotel-hurghada-1',
    name: 'Rixos Premium Magawish Suites & Villas',
    destination: 'egypt',
    city: 'Hurghada',
    stars: 5,
    rating: 4.9,
    pricePerNight: 280,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Private Beach', 'All-Inclusive', 'Water Sports', 'Anjana Spa', 'Multiple Pools'],
    description: 'Ultra all-inclusive luxury resort along the crystal clear turquoise waters of the Red Sea.',
    address: 'Safaga Road, Hurghada, Red Sea, Egypt',
    roomTypes: ['Suite Sea View', 'Swim-up Suite', 'Executive Beachfront Villa']
  },
  {
    id: 'hotel-sharm-1',
    name: 'Four Seasons Resort Sharm El Sheikh',
    destination: 'egypt',
    city: 'Sharm El Sheikh',
    stars: 5,
    rating: 4.9,
    pricePerNight: 390,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Private Reef', 'Dive Center', 'Spa & Wellness', 'Infinity Pools', 'Private Beach'],
    description: 'Arabian-style hillside resort leading down to a private coral reef and golden shorelines.',
    address: '1 Four Seasons Boulevard, Ras Nasrani, Sharm El Sheikh, Egypt',
    roomTypes: ['Deluxe Resort Room', 'Imperial Red Sea Suite', 'Four-Bedroom Villa']
  },
  {
    id: 'hotel-istanbul-1',
    name: 'Çırağan Palace Kempinski',
    destination: 'turkey',
    city: 'Istanbul',
    stars: 5,
    rating: 4.95,
    pricePerNight: 450,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Bosphorus View', 'Infinity Pool', 'Turkish Bath', 'Helipad', 'Butler Service'],
    description: 'A 19th-century Ottoman palace offering ultimate luxury on the shores of Bosphorus.',
    address: 'Çırağan Cd. No:32, Beşiktaş, Istanbul, Turkey',
    roomTypes: ['Park View Room', 'Bosphorus Palace Suite', 'Sultan Suite']
  },
  {
    id: 'hotel-cappadocia-1',
    name: 'Museum Hotel Cappadocia',
    destination: 'turkey',
    city: 'Cappadocia',
    stars: 5,
    rating: 4.9,
    pricePerNight: 350,
    image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Cave Suites', 'Heated Pool', 'Wine Taps', 'Hot Air Balloon Views', 'Fine Dining'],
    description: 'Relais & Châteaux luxury cave hotel built into ancient ruins with breathtaking valley views.',
    address: 'Tekelli Mah. No:1, Uchisar, Cappadocia, Turkey',
    roomTypes: ['Deluxe Cave Room', 'Imperial Cave Suite', 'Sultan Cave Suite']
  },
  {
    id: 'hotel-petra-1',
    name: 'Mövenpick Resort Petra',
    destination: 'jordan',
    city: 'Petra',
    stars: 5,
    rating: 4.7,
    pricePerNight: 210,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Roof Terrace', 'Pool', 'Oriental Craftwork', 'Close to Petra Entrance'],
    description: 'Located directly at the entrance to the historic ancient city of Petra.',
    address: 'Tourism Street, Wadi Musa, Petra, Jordan',
    roomTypes: ['Superior Room', 'Junior Suite', 'Executive Suite']
  },
  {
    id: 'hotel-deadsea-1',
    name: 'Kempinski Hotel Ishtar Dead Sea',
    destination: 'jordan',
    city: 'Dead Sea',
    stars: 5,
    rating: 4.9,
    pricePerNight: 260,
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Dead Sea Private Beach', 'Infinity Pools', 'Ishtar Spa', 'Private Cabanas'],
    description: 'Luxurious sanctuary on the lowest point on Earth, featuring Babylonian architecture.',
    address: 'Sowayma, Dead Sea, Jordan',
    roomTypes: ['Ishtar Superior Room', 'Ishtar Royal Suite', 'Royal Villa']
  },
  {
    id: 'hotel-dubai-1',
    name: 'Atlantis The Royal Dubai',
    destination: 'dubai',
    city: 'Dubai',
    stars: 5,
    rating: 4.95,
    pricePerNight: 550,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Sky Pool', 'Celebrity Chef Restaurants', 'Private Beach', 'Awaken Spa', 'Aquaventure Waterpark'],
    description: 'Iconic ultra-luxury resort redefining the skyline of Palm Jumeirah.',
    address: 'Crescent Road, Palm Jumeirah, Dubai, UAE',
    roomTypes: ['Palm View Room', 'Sky Pool Villa', 'Penthouse']
  },
  {
    id: 'hotel-santorini-1',
    name: 'Canaves Oia Luxury Suites',
    destination: 'greece',
    city: 'Santorini',
    stars: 5,
    rating: 4.9,
    pricePerNight: 480,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Caldera View', 'Infinity Cave Pool', 'Private Dining', 'Spa Services'],
    description: 'Whitewashed cliffside luxury suites with endless Aegean Sea views.',
    address: 'Main Street, Oia, Santorini, Greece',
    roomTypes: ['Classic Suite', 'Honeymoon Suite with Plunge Pool', 'Executive Villa']
  },
  {
    id: 'hotel-marrakech-1',
    name: 'La Mamounia Marrakech',
    destination: 'morocco',
    city: 'Marrakech',
    stars: 5,
    rating: 4.95,
    pricePerNight: 520,
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Arab-Andalusian Gardens', 'Hammam & Spa', 'Casino', 'Fine Moroccan Dining', 'Pool'],
    description: 'Legendary palace hotel surrounding historic 18th-century royal gardens in Marrakech.',
    address: 'Avenue Bab Jdid, Marrakech, Morocco',
    roomTypes: ['Classic Room', 'Executive Park Suite', 'Private Riad']
  },
  {
    id: 'hotel-tunis-1',
    name: 'The Residence Tunis',
    destination: 'tunisia',
    city: 'Tunis',
    stars: 5,
    rating: 4.8,
    pricePerNight: 220,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    ],
    amenities: ['Thalasso & Spa', '18-Hole Golf Course', 'Private Beach', 'Mediterranean Cuisine'],
    description: 'Arab-Andalusian palace on the Mediterranean coast near Carthage and Sidi Bou Said.',
    address: 'Les Côtes de Carthage, BP 697, Gammarth, Tunis, Tunisia',
    roomTypes: ['Garden View Room', 'Sea View Suite', 'Presidential Suite']
  }
];

export default detailedHotelsData;
