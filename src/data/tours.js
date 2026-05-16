export const tours = [
  {
    id: 'eg-001',
    destination: 'egypt',
    title: 'Nile Legacy Journey',
    slug: 'nile-legacy-journey',
    description: 'Experience the magic of Ancient Egypt on a luxurious 8-day journey from Cairo to Aswan, including a 4-night premium Nile cruise.',
    highlights: ['Pyramids of Giza', 'Luxor Temple', 'Valley of the Kings', 'Philae Temple'],
    price: 1850,
    duration: '8 Days / 7 Nights',
    type: 'Cultural',
    groupSize: '2–16',
    languages: ['English', 'Arabic'],
    rating: 4.8,
    reviewCount: 124,
    images: [
      '/imgs/egypt/Nile Legacy .webp'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Cairo',
        morning: 'VIP airport meet and greet, private transfer to your luxury hotel overlooking the Nile.',
        afternoon: 'Relax and unwind at the hotel or explore the local surroundings at your leisure.',
        evening: 'Welcome dinner featuring authentic Egyptian cuisine with your tour guide.',
      },
    ],
    included: ['Luxury accommodation', 'Domestic flights', 'Private Egyptologist guide', 'Nile Cruise'],
    excluded: ['International flights', 'Entry visa', 'Personal expenses'],
  },
  {
    id: 'eg-002',
    destination: 'egypt',
    title: 'Pharaohs & Pyramids',
    slug: 'pharaohs-pyramids',
    description: 'A deeply immersive historical tour focusing on the monumental achievements of the Pharaohs in Cairo and Luxor.',
    highlights: ['Great Sphinx', 'Egyptian Museum', 'Karnak Temple', 'Hatshepsut Temple'],
    price: 1200,
    duration: '5 Days / 4 Nights',
    type: 'Historical',
    groupSize: '2–12',
    languages: ['English', 'Spanish'],
    rating: 4.9,
    reviewCount: 89,
    images: [
      '/imgs/egypt/Pharaohs & Pyramid.jpg'
    ],
    itinerary: [],
    included: [],
    excluded: [],
  },
  {
    id: 'eg-003',
    destination: 'egypt',
    title: 'Jewels of the Red Sea',
    slug: 'jewels-red-sea',
    description: 'Combine the rich history of Luxor with the stunning, crystal-clear waters of the Red Sea in Hurghada.',
    highlights: ['Luxor East Bank', 'Red Sea Snorkeling', 'Desert Safari'],
    price: 1450,
    duration: '7 Days / 6 Nights',
    type: 'Leisure & Culture',
    groupSize: '2–20',
    languages: ['English', 'German'],
    rating: 4.7,
    reviewCount: 210,
    images: [
      '/imgs/egypt/Jewels of the Red Sea.webp',
      '/imgs/egypt/Jewels of the Red Se.jpg'
    ],
    itinerary: [],
    included: [],
    excluded: [],
  },
  {
    id: 'eg-004',
    destination: 'egypt',
    title: 'Alexandria & The North Coast',
    slug: 'alexandria-north-coast',
    description: 'Discover the Greco-Roman heritage of Alexandria and the luxurious resorts of the Mediterranean coast.',
    highlights: ['Bibliotheca Alexandrina', 'Qaitbay Citadel', 'Montaza Palace'],
    price: 950,
    duration: '4 Days / 3 Nights',
    type: 'Coastal',
    groupSize: '2–10',
    languages: ['English', 'Arabic'],
    rating: 4.6,
    reviewCount: 65,
    images: [
      '/imgs/egypt/Alexandria & The North Coast.jpg',
      '/imgs/egypt/Alexandria & The North Coast1.jpg'
    ],
    itinerary: [],
    included: [],
    excluded: [],
  },
  {
    id: 'eg-005',
    destination: 'egypt',
    title: 'Oasis & Desert Adventure',
    slug: 'oasis-desert-adventure',
    description: 'An off-the-beaten-path luxury safari through the Black and White Deserts and the Siwa Oasis.',
    highlights: ['White Desert Camping', 'Siwa Salt Lakes', 'Oracle Temple'],
    price: 1600,
    duration: '6 Days / 5 Nights',
    type: 'Adventure',
    groupSize: '2–8',
    languages: ['English'],
    rating: 4.9,
    reviewCount: 42,
    images: [
      '/imgs/egypt/Oasis & Desert Adventur.webp'
    ],
    itinerary: [],
    included: [],
    excluded: [],
  },
  {
    id: 'eg-006',
    destination: 'egypt',
    title: 'Ultimate Royal Egypt',
    slug: 'ultimate-royal-egypt',
    description: 'Our most exclusive and comprehensive tour covering all major historical sites with VIP access and 5-star plus luxury.',
    highlights: ['Private Pyramid Access', 'Dahabiya Nile Cruise', 'Abu Simbel'],
    price: 4500,
    duration: '12 Days / 11 Nights',
    type: 'Ultra-Luxury',
    groupSize: '2–6',
    languages: ['English', 'Portuguese'],
    rating: 5.0,
    reviewCount: 31,
    images: [
      '/imgs/egypt/Ultimate Royal Egypt..JPG'
    ],
    itinerary: [],
    included: [],
    excluded: [],
  },
  // JORDAN TOURS
  {
    id: 'jo-001', destination: 'jordan', title: 'The Petra Experience', slug: 'petra-experience',
    description: 'Discover the rose-red city of Petra, a UNESCO World Heritage site and one of the New Seven Wonders of the World.',
    highlights: ['The Treasury', 'The Monastery', 'Royal Tombs', 'Little Petra'],
    price: 1550, duration: '6 Days / 5 Nights', type: 'Cultural', groupSize: '2–12', languages: ['English', 'Arabic'],
    rating: 4.9, reviewCount: 98, images: ['https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg'], itinerary: [], included: [], excluded: []
  },
  {
    id: 'jo-002', destination: 'jordan', title: 'Wadi Rum Desert Safari', slug: 'wadi-rum-safari',
    description: 'Experience the majestic Martian landscape of Wadi Rum in luxury glamping tents.',
    highlights: ['Jeep Safari', 'Stargazing', 'Bedouin Camp'],
    price: 850, duration: '3 Days / 2 Nights', type: 'Adventure', groupSize: '2–8', languages: ['English'],
    rating: 4.8, reviewCount: 145, images: ['https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg'], itinerary: [], included: [], excluded: []
  },
  {
    id: 'jo-003', destination: 'jordan', title: 'Dead Sea Wellness Retreat', slug: 'dead-sea-wellness',
    description: 'Float in the mineral-rich waters of the Dead Sea and enjoy premium spa treatments at the lowest point on earth.',
    highlights: ['Dead Sea Mud Bath', 'Ma\'in Hot Springs', 'Luxury Spa'],
    price: 1200, duration: '4 Days / 3 Nights', type: 'Leisure', groupSize: '2–10', languages: ['English'],
    rating: 4.7, reviewCount: 76, images: ['https://images.pexels.com/photos/3676648/pexels-photo-3676648.jpeg'], itinerary: [], included: [], excluded: []
  },
  {
    id: 'jo-004', destination: 'jordan', title: 'Biblical Journey', slug: 'biblical-journey',
    description: 'Trace the footsteps of history through Mount Nebo, Bethany Beyond the Jordan, and Madaba.',
    highlights: ['Mount Nebo', 'Madaba Mosaic Map', 'Bethany'],
    price: 1100, duration: '5 Days / 4 Nights', type: 'Historical', groupSize: '4–20', languages: ['English', 'Spanish'],
    rating: 4.6, reviewCount: 54, images: ['https://images.pexels.com/photos/3760840/pexels-photo-3760840.jpeg'], itinerary: [], included: [], excluded: []
  },
  {
    id: 'jo-005', destination: 'jordan', title: 'Amman City Break', slug: 'amman-city-break',
    description: 'Explore the bustling capital of Jordan, from the ancient Citadel to the vibrant markets of Downtown.',
    highlights: ['Amman Citadel', 'Roman Theater', 'Rainbow Street'],
    price: 650, duration: '3 Days / 2 Nights', type: 'City Tour', groupSize: '2–14', languages: ['English', 'Arabic'],
    rating: 4.5, reviewCount: 112, images: ['https://images.pexels.com/photos/1541295/pexels-photo-1541295.jpeg'], itinerary: [], included: [], excluded: []
  },
  {
    id: 'jo-006', destination: 'jordan', title: 'Ultimate Jordan Grand Tour', slug: 'ultimate-jordan',
    description: 'A comprehensive luxury journey covering Amman, Petra, Wadi Rum, Aqaba, and the Dead Sea.',
    highlights: ['Petra', 'Wadi Rum', 'Aqaba Red Sea', 'Dead Sea'],
    price: 3200, duration: '10 Days / 9 Nights', type: 'Ultra-Luxury', groupSize: '2–6', languages: ['English'],
    rating: 5.0, reviewCount: 41, images: ['https://images.pexels.com/photos/2765874/pexels-photo-2765874.jpeg'], itinerary: [], included: [], excluded: []
  },
  // TURKEY TOURS
  {
    id: 'tr-001', destination: 'turkey', title: 'Bosphorus & Palaces', slug: 'bosphorus-palaces',
    description: 'Immerse yourself in the imperial history of Istanbul, cruising the Bosphorus and visiting magnificent Ottoman palaces.',
    highlights: ['Topkapi Palace', 'Hagia Sophia', 'Bosphorus Cruise'],
    price: 1350, duration: '5 Days / 4 Nights', type: 'Cultural', groupSize: '2–12', languages: ['English', 'Spanish'],
    rating: 4.9, reviewCount: 188, images: ['https://images.pexels.com/photos/1481180/pexels-photo-1481180.jpeg'], itinerary: [], included: [], excluded: []
  },
  {
    id: 'tr-002', destination: 'turkey', title: 'Cappadocia Hot Air Ballooning', slug: 'cappadocia-ballooning',
    description: 'Soar above the fairy chimneys of Cappadocia at sunrise and sleep in a luxury cave hotel.',
    highlights: ['Hot Air Balloon Ride', 'Goreme Open Air Museum', 'Underground City'],
    price: 1450, duration: '4 Days / 3 Nights', type: 'Adventure', groupSize: '2–8', languages: ['English'],
    rating: 5.0, reviewCount: 342, images: ['https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg'], itinerary: [], included: [], excluded: []
  },
  {
    id: 'tr-003', destination: 'turkey', title: 'Ephesus & The Aegean Coast', slug: 'ephesus-aegean',
    description: 'Walk through the ancient ruins of Ephesus and relax on the pristine beaches of the Turkish Riviera.',
    highlights: ['Ephesus Ruins', 'House of Virgin Mary', 'Bodrum Peninsula'],
    price: 1650, duration: '7 Days / 6 Nights', type: 'Historical & Leisure', groupSize: '2–16', languages: ['English', 'German'],
    rating: 4.8, reviewCount: 120, images: ['https://images.pexels.com/photos/2275955/pexels-photo-2275955.jpeg'], itinerary: [], included: [], excluded: []
  },
  {
    id: 'tr-004', destination: 'turkey', title: 'Antalya Turquoise Escape', slug: 'antalya-turquoise',
    description: 'A luxurious beach holiday on the Turquoise Coast, combined with visits to ancient Lycian ruins.',
    highlights: ['Kaleiçi (Old Town)', 'Düden Waterfalls', 'Aspendos Theater'],
    price: 1100, duration: '6 Days / 5 Nights', type: 'Coastal', groupSize: '2–10', languages: ['English', 'Russian'],
    rating: 4.7, reviewCount: 89, images: ['https://images.pexels.com/photos/3373200/pexels-photo-3373200.jpeg'], itinerary: [], included: [], excluded: []
  },
  {
    id: 'tr-005', destination: 'turkey', title: 'Culinary Delights of Istanbul', slug: 'istanbul-culinary',
    description: 'A gastronomic journey through Istanbul, tasting authentic street food, fine dining, and taking private cooking classes.',
    highlights: ['Spice Bazaar', 'Kadikoy Food Tour', 'Cooking Class'],
    price: 950, duration: '4 Days / 3 Nights', type: 'Culinary', groupSize: '2–6', languages: ['English'],
    rating: 4.9, reviewCount: 67, images: ['https://images.pexels.com/photos/3180632/pexels-photo-3180632.jpeg'], itinerary: [], included: [], excluded: []
  },
  {
    id: 'tr-006', destination: 'turkey', title: 'Grand Tour of Turkey', slug: 'grand-tour-turkey',
    description: 'The ultimate luxury expedition covering Istanbul, Cappadocia, Konya, Pamukkale, and Ephesus.',
    highlights: ['Istanbul', 'Cappadocia', 'Pamukkale Thermal Pools', 'Ephesus'],
    price: 3800, duration: '14 Days / 13 Nights', type: 'Ultra-Luxury', groupSize: '2–10', languages: ['English'],
    rating: 4.9, reviewCount: 156, images: ['https://images.pexels.com/photos/5005886/pexels-photo-5005886.jpeg'], itinerary: [], included: [], excluded: []
  }
];
