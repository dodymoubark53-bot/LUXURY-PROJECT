import { multiCountryProgramTranslations } from './multi-country.translations';
import { EgyptProgram } from './classic';

export const multiCountryEgyptProgramData: EgyptProgram = {
  id: "multi-country",
  slug: "multi-country",
  name: "Multi-Country Tours",
  image: "https://res.cloudinary.com/degbrq3ck/image/upload/v1783030113/Gemini_Generated_Image_cb2enncb2enncb2e_wvyejn.jpg",
  priceFrom: 1890,
  translations: multiCountryProgramTranslations,
  trips: [
    {
      id: "pkg-multi-1",
      slug: "egypt-jordan-grand-tour",
      code: "MCT-01",
      title: "Grand Egypt & Jordan Discovery",
      destination: "egypt",
      duration: "12 Days / 11 Nights",
      minPax: "2 Pax",
      price: 1890,
      rating: 4.9,
      reviewCount: 310,
      images: [
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80",
        "https://res.cloudinary.com/degbrq3ck/image/upload/v1783030113/Gemini_Generated_Image_cb2enncb2enncb2e_wvyejn.jpg"
      ],
      overview: "An unforgettable 12-day journey spanning Egypt and Jordan. Start in Cairo exploring Giza Pyramids and Egyptian Museum, cruise the Nile River, then fly to Amman for Petra, Jerash, and Wadi Rum.",
      highlights: [
        "Giza Pyramids & Sphinx",
        "4-Night Nile River Cruise (Aswan to Luxor)",
        "Rose-Red City of Petra",
        "Wadi Rum Jeep Safari & Glamping",
        "Float in the Dead Sea"
      ],
      included: [
        "All airport transfers with private luxury driver",
        "Domestic flight Cairo – Aswan & Luxor – Amman",
        "5-Star Deluxe Hotel Accommodations & Nile Cruise",
        "English/Spanish speaking licensed Egyptologist & Jordan guides"
      ],
      excluded: [
        "International airfare",
        "Entry visa fees"
      ],
      itinerary: [
        { day: 1, title: "Arrival in Cairo", description: "VIP airport greeting and transfer to hotel." },
        { day: 2, title: "Pyramids & Egyptian Museum", description: "Full-day tour of Pyramids, Sphinx, and Grand Egyptian Museum." },
        { day: 3, title: "Flight to Aswan & Philae Temple", description: "Flight to Aswan, visit Philae Temple, check-in Nile Cruise." },
        { day: 4, title: "Kom Ombo & Edfu Temples", description: "Sail down the Nile visiting ancient riverbank temples." },
        { day: 5, title: "Luxor East & West Banks", description: "Valley of the Kings, Hatshepsut Temple, and Karnak Complex." },
        { day: 6, title: "Flight Luxor to Amman", description: "Flight to Amman, Jordan. Transfer to hotel." },
        { day: 7, title: "Amman – Jerash – Ajloun", description: "Explore Roman ruins of Jerash and Ajloun Castle." },
        { day: 8, title: "Madaba – Mount Nebo – Petra", description: "Visit mosaic city of Madaba, Mount Nebo, drive to Petra." },
        { day: 9, title: "Petra Wonder of the World", description: "Full day exploring the Siq, Treasury, and Royal Tombs." },
        { day: 10, title: "Wadi Rum Desert Glamping", description: "4x4 jeep safari in Wadi Rum and luxury camp stay." },
        { day: 11, title: "Dead Sea Rejuvenation", description: "Float in the Dead Sea waters and return to Amman." },
        { day: 12, title: "Amman / Departure", description: "Transfer to Queen Alia International Airport." }
      ]
    },
    {
      id: "mct-001",
      slug: "estrellas-medio-oriente-19d",
      code: "MCT-02",
      title: "Estrellas del Medio Oriente (Egypt, Jordan & Turkey)",
      destination: "egypt",
      duration: "19 Days / 18 Nights",
      minPax: "2 Pax",
      price: 2850,
      rating: 4.9,
      reviewCount: 420,
      images: [
        "https://theglobetrottingdetective.com/wp-content/uploads/2022/03/best-places-in-the-middle-east-traveling-the-middle-east-cappadocia-turkey.jpg"
      ],
      overview: "The ultimate 19-day Middle East grand circuit exploring Pyramids of Giza, Nile Cruise, Petra, Dead Sea, Istanbul, and Cappadocia.",
      highlights: [
        "Pyramids, Sphinx & Grand Egyptian Museum",
        "Nile River Cruise (Luxor & Aswan)",
        "Petra Treasury & Monastery Trek",
        "Wadi Rum Desert Safari",
        "Istanbul Bosphorus Cruise",
        "Cappadocia Fairy Chimneys & Cave Hotel"
      ],
      included: [
        "All internal flights between Egypt, Jordan, and Turkey",
        "5-Star Deluxe Hotel & Cruise Accommodations",
        "Dedicated local multi-lingual guides",
        "All airport transfers in luxury coaches"
      ],
      excluded: [
        "International long-haul flights from/to home country",
        "Country entry visas"
      ],
      itinerary: [
        { day: 1, title: "Cairo Arrival", description: "VIP reception and transfer." },
        { day: 2, title: "Giza Pyramids", description: "Pyramids, Sphinx, and GEM museum." },
        { day: 3, title: "Nile Cruise Aswan", description: "Flight to Aswan, Philae temple, embark cruise." },
        { day: 4, title: "Nile Navigation", description: "Kom Ombo & Edfu temples." },
        { day: 5, title: "Luxor Temples", description: "Valley of Kings, Karnak, Luxor." },
        { day: 6, title: "Flight to Amman", description: "Transfer to Amman." },
        { day: 7, title: "Jerash & Citadel", description: "Roman ruins of Jerash." },
        { day: 8, title: "Petra City", description: "Full day in Petra." },
        { day: 9, title: "Wadi Rum Safari", description: "Jeep tour and desert camp." },
        { day: 10, title: "Dead Sea to Amman", description: "Floating experience." },
        { day: 11, title: "Flight to Istanbul", description: "Arrival in Turkey." },
        { day: 12, title: "Istanbul Classics", description: "Hagia Sophia, Blue Mosque." },
        { day: 13, title: "Bosphorus Cruise", description: "Boat ride & Grand Bazaar." },
        { day: 14, title: "Flight to Cappadocia", description: "Cave hotel check-in." },
        { day: 15, title: "Cappadocia Balloons", description: "Balloon flight & Göreme." },
        { day: 16, title: "Pamukkale Terraces", description: "Travertines & Hierapolis." },
        { day: 17, title: "Ephesus Ancient City", description: "Library of Celsus." },
        { day: 18, title: "Return to Istanbul", description: "Free time." },
        { day: 19, title: "Final Departure", description: "Airport transfer." }
      ]
    }
  ]
};

export default multiCountryEgyptProgramData;
