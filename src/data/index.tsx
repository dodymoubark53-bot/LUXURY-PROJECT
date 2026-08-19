// Central Data Index for Dunas Travel (.tsx)
// Exports all datasets, types, and helper query functions.

export * from './types';
export * from './trips';
export * from './packages';
export * from './transportation';
export * from './hotels';

import { tripsData } from './trips';
import { packagesData } from './packages';
import { transportationData } from './transportation';
import { hotelsData } from './hotels';

export const dunasCatalog = {
  trips: tripsData,
  packages: packagesData,
  transportation: transportationData,
  hotels: hotelsData
};

export default dunasCatalog;
