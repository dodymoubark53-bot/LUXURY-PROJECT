// TypeScript Type Definitions for Dunas Travel Data Structures

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string;
}

export interface HotelSelection {
  city: string;
  nights: number | string;
  name: string;
  category?: string;
}

export interface TripItem {
  id: string;
  slug: string;
  title: string;
  language?: string;
  market?: string;
  type?: string;
  duration: string;
  destination: string;
  overview?: string;
  description?: string;
  departures?: string;
  price: number;
  rating: number;
  reviewCount?: number;
  images: string[];
  highlights?: string[];
  included?: string[];
  excluded?: string[];
  itinerary?: ItineraryDay[];
  hotels?: string | Record<string, string[]>;
  popular?: boolean;
  views?: number;
  inquiries?: number;
}

export interface PackageItem {
  id: string;
  slug: string;
  title: string;
  destination: string;
  countries?: string[];
  type?: string;
  duration: string;
  price: number;
  popular?: boolean;
  rating: number;
  image: string;
  images?: string[];
  description: string;
  overview?: string;
  highlights?: string[];
  included?: string[];
  excluded?: string[];
  itinerary?: ItineraryDay[];
  selectedHotels?: HotelSelection[];
  hotels?: string;
}

export interface TransportItem {
  id: string;
  name: string;
  category: 'bus' | 'coaster' | 'private' | 'luxury' | 'van';
  seats: number;
  doors?: number;
  rating: number;
  reviews?: number;
  transmission?: string;
  pricePerDay: number;
  image: string;
  features: string[];
  description?: string;
}

export interface HotelItem {
  id: string;
  name: string;
  destination: string;
  city: string;
  stars: number;
  rating: number;
  pricePerNight: number;
  image: string;
  images?: string[];
  amenities: string[];
  description: string;
  address?: string;
  roomTypes?: string[];
}

export interface ReviewItem {
  id: string;
  tripId: string;
  tripTitle: string;
  author: string;
  country: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}
