import { egyptDestinationData } from './egypt/index';
import { jordanDestinationData } from './jordan';
import { turkeyDestinationData } from './turkey';
import { tunisiaDestinationData } from './tunisia';
import { greeceDestinationData } from './greece';
import { dubaiDestinationData } from './dubai';
import { moroccoDestinationData } from './morocco';
import { holyLandDestinationData } from './holy-land';

export * from './jordan';
export * from './turkey';
export * from './tunisia';
export * from './greece';
export * from './dubai';
export * from './morocco';
export * from './holy-land';
export * from './egypt/index';

export const allDestinationsData = [
  egyptDestinationData,
  jordanDestinationData,
  turkeyDestinationData,
  tunisiaDestinationData,
  greeceDestinationData,
  dubaiDestinationData,
  moroccoDestinationData,
  holyLandDestinationData
];

export const getDestinationBySlug = (slug: string) => {
  return allDestinationsData.find(d => d.slug.toLowerCase() === slug.toLowerCase());
};

export default allDestinationsData;
