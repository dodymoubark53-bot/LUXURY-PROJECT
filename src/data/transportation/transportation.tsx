import { transportationTranslations } from './transportation.translations';

export interface DetailedTransportItem {
  id: string;
  name: string;
  category: 'bus' | 'coaster' | 'private';
  seats: number;
  doors: number;
  rating: number;
  reviews: number;
  transmission: string;
  pricePerDay: number;
  image: string;
  features: string[];
  description: string;
  translations?: typeof transportationTranslations[string];
}

export const detailedTransportationData: DetailedTransportItem[] = [
  {
    id: 'tr-bus-1',
    name: 'Luxury Tour Bus Golden',
    category: 'bus',
    seats: 50,
    doors: 2,
    rating: 5.0,
    reviews: 140,
    transmission: 'Auto',
    pricePerDay: 450,
    image: '/imgs/transportation/bus1.jpeg',
    features: ['AC', 'WiFi', 'Professional Driver', 'Restroom', 'Leather Seats', 'Luggage Compartment'],
    description: 'Premier 50-seater VIP tour bus equipped with modern entertainment, reclining leather seats, and on-board restroom for long distance travel.',
    translations: transportationTranslations['tr-bus-1']
  },
  {
    id: 'tr-bus-2',
    name: 'Luxury Tour Bus Classic',
    category: 'bus',
    seats: 45,
    doors: 2,
    rating: 4.9,
    reviews: 98,
    transmission: 'Auto',
    pricePerDay: 400,
    image: '/imgs/transportation/bus2.jpeg',
    features: ['AC', 'WiFi', 'Professional Driver', 'Restroom', 'Audio System', 'Reclining Seats'],
    description: 'Comfortable long-haul coach bus ideal for large tour groups traveling between Cairo, Luxor, Aswan, and Hurghada.'
  },
  {
    id: 'tr-bus-3',
    name: 'Premium Mercedes Tour Bus',
    category: 'bus',
    seats: 50,
    doors: 2,
    rating: 5.0,
    reviews: 215,
    transmission: 'Auto',
    pricePerDay: 500,
    image: '/imgs/transportation/bus3.jpeg',
    features: ['AC', 'WiFi', 'Professional Driver', 'Restroom', 'Leather Seats', 'USB Chargers'],
    description: 'State-of-the-art Mercedes-Benz luxury coach with individual USB charging ports, climate control, and supreme comfort.'
  },
  {
    id: 'tr-bus-4',
    name: 'VIP Tour Coach',
    category: 'bus',
    seats: 48,
    doors: 2,
    rating: 4.8,
    reviews: 112,
    transmission: 'Auto',
    pricePerDay: 420,
    image: '/imgs/transportation/bus4.jpeg',
    features: ['AC', 'WiFi', 'Professional Driver', 'Restroom', 'Premium Audio', 'Reclining Seats'],
    description: 'Spacious tourist coach offering smooth air-ride suspension and experienced multi-lingual drivers.'
  },
  {
    id: 'tr-bus-5',
    name: 'Grand Travel Bus',
    category: 'bus',
    seats: 50,
    doors: 2,
    rating: 4.9,
    reviews: 85,
    transmission: 'Auto',
    pricePerDay: 430,
    image: '/imgs/transportation/bus5.jpeg',
    features: ['AC', 'WiFi', 'Professional Driver', 'Restroom', 'LED TV', 'USB Chargers'],
    description: 'Grand touring bus built for luxury multi-day journeys with full multimedia setup and high-speed Wi-Fi.'
  },
  {
    id: 'tr-bus-6',
    name: 'Elite Coach Bus',
    category: 'bus',
    seats: 45,
    doors: 2,
    rating: 4.8,
    reviews: 76,
    transmission: 'Auto',
    pricePerDay: 390,
    image: '/imgs/transportation/bus6.jpeg',
    features: ['AC', 'WiFi', 'Professional Driver', 'Audio System', 'Luggage Compartment'],
    description: 'Reliable 45-seat coach perfect for corporate retreats and large family excursions.'
  },
  {
    id: 'tr-bus-7',
    name: 'Royal Travel Bus',
    category: 'bus',
    seats: 48,
    doors: 2,
    rating: 4.9,
    reviews: 130,
    transmission: 'Auto',
    pricePerDay: 460,
    image: '/imgs/transportation/bus7.jpeg',
    features: ['AC', 'WiFi', 'Professional Driver', 'Restroom', 'Leather Seats', 'Mini Fridge'],
    description: 'Royal executive bus featuring panoramic windows, mini fridge, and refreshment counter.'
  },
  {
    id: 'tr-coaster-1',
    name: 'Toyota Coaster Executive',
    category: 'coaster',
    seats: 26,
    doors: 2,
    rating: 4.8,
    reviews: 92,
    transmission: 'Auto',
    pricePerDay: 250,
    image: '/imgs/transportation/costar.jpeg',
    features: ['AC', 'WiFi', 'Professional Driver', 'Audio System', 'Spacious Legroom'],
    description: 'Mid-sized 26-seater bus perfect for medium groups, airport transfers, and day excursions.',
    translations: transportationTranslations['tr-coaster-1']
  },
  {
    id: 'tr-coaster-2',
    name: 'Toyota Coaster VIP',
    category: 'coaster',
    seats: 22,
    doors: 2,
    rating: 4.9,
    reviews: 104,
    transmission: 'Auto',
    pricePerDay: 280,
    image: '/imgs/transportation/costar1.jpeg',
    features: ['AC', 'WiFi', 'Professional Driver', 'Leather Seats', 'USB Chargers', 'Premium Audio'],
    description: 'Customized VIP Coaster with plush captain seats and extra legroom for discerning travelers.'
  },
  {
    id: 'tr-private-1',
    name: 'Luxury Private Sedan & SUV',
    category: 'private',
    seats: 4,
    doors: 4,
    rating: 5.0,
    reviews: 320,
    transmission: 'Auto',
    pricePerDay: 150,
    image: '/imgs/transportation/privte.jpeg',
    features: ['AC', 'GPS', 'Airbag', 'WiFi', 'Professional Driver', 'Leather Seats', 'Mineral Water'],
    description: 'Private air-conditioned luxury vehicle with private chauffeur for airport pickups, city tours, and custom itineraries.',
    translations: transportationTranslations['tr-private-1']
  }
];

export default detailedTransportationData;
