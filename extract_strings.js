import { tours } from './src/data/tours.js';
import fs from 'fs';

const strings = new Set();

tours.forEach(tour => {
  if (tour.title) strings.add(tour.title);
  if (tour.description) strings.add(tour.description);
  if (tour.duration) strings.add(tour.duration);
  if (tour.type) strings.add(tour.type);
  if (tour.departures) strings.add(tour.departures);
  
  if (tour.highlights) {
    tour.highlights.forEach(h => strings.add(h));
  }
  if (tour.included) {
    tour.included.forEach(i => strings.add(i));
  }
  if (tour.excluded) {
    tour.excluded.forEach(e => strings.add(e));
  }
  if (tour.itinerary) {
    tour.itinerary.forEach(day => {
      if (day.title) strings.add(day.title);
      if (day.morning) strings.add(day.morning);
      if (day.afternoon) strings.add(day.afternoon);
      if (day.evening) strings.add(day.evening);
    });
  }
});

fs.writeFileSync('extracted_strings.json', JSON.stringify(Array.from(strings), null, 2));
console.log(`Extracted ${strings.size} unique strings.`);
