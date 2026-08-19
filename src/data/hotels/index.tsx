import { detailedHotelsData, DetailedHotelItem } from './hotels';
import { hotelsTranslations } from './hotels.translations';

export * from './hotels';
export * from './hotels.translations';

export const hotelsCatalog = {
  hotels: detailedHotelsData,
  translations: hotelsTranslations,
  getHotelById: (id: string): DetailedHotelItem | undefined => detailedHotelsData.find(h => h.id === id),
  getHotelsByDestination: (dest: string): DetailedHotelItem[] => detailedHotelsData.filter(h => h.destination.toLowerCase() === dest.toLowerCase()),
  getHotelsByCity: (city: string): DetailedHotelItem[] => detailedHotelsData.filter(h => h.city.toLowerCase() === city.toLowerCase())
};

export default hotelsCatalog;
