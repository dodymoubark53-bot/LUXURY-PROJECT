import { detailedTransportationData, DetailedTransportItem } from './transportation';
import { transportationTranslations } from './transportation.translations';

export * from './transportation';
export * from './transportation.translations';

export const transportationCatalog = {
  fleet: detailedTransportationData,
  translations: transportationTranslations,
  getTransportById: (id: string): DetailedTransportItem | undefined => detailedTransportationData.find(t => t.id === id),
  getTransportByCategory: (cat: string): DetailedTransportItem[] => detailedTransportationData.filter(t => t.category.toLowerCase() === cat.toLowerCase())
};

export default transportationCatalog;
