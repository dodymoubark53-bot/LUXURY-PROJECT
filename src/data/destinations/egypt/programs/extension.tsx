import { extensionProgramTranslations } from './extension.translations';
import { EgyptProgram } from './classic';

export const extensionEgyptProgramData: EgyptProgram = {
  id: "extension",
  slug: "extension",
  name: "Egypt Extensions",
  image: "https://res.cloudinary.com/degbrq3ck/image/upload/v1783030445/Gemini_Generated_Image_kenvzkkenvzkkenv_h9kz07.png",
  priceFrom: 450,
  translations: extensionProgramTranslations,
  trips: [
    {
      id: "eg-ext-001",
      slug: "hurghada-red-sea-extension-4d",
      code: "EG-EXT-01",
      title: "Red Sea Coastal Paradise: Hurghada Extension",
      destination: "egypt",
      duration: "4 Days / 3 Nights",
      minPax: "2 Pax",
      price: 450,
      rating: 4.9,
      reviewCount: 210,
      images: [
        "https://res.cloudinary.com/degbrq3ck/image/upload/v1783030445/Gemini_Generated_Image_kenvzkkenvzkkenv_h9kz07.png"
      ],
      overview: "Relaxing 4-day extension at a luxury 5-star beachfront resort in Hurghada with crystal-clear turquoise waters and coral reefs.",
      highlights: [
        "All-Inclusive 5-Star Beachfront Resort",
        "Snorkeling & Coral Reef Diving Trips",
        "Quad Bike Desert Safari at Sunset"
      ],
      included: [
        "03 nights accommodation in 5-Star Deluxe Resort",
        "All-Inclusive soft meals & beverages",
        "Roundtrip transfers Luxor/Cairo to Hurghada"
      ],
      excluded: [
        "Water sports equipment rental",
        "Personal expenses"
      ],
      itinerary: [
        { day: 1, title: "Transfer to Hurghada", description: "Arrival from Cairo/Luxor, check-in to resort, beach relaxation." },
        { day: 2, title: "Red Sea Snorkeling & Giftun Island", description: "Boat trip to Giftun Island for snorkeling in pristine coral reefs." },
        { day: 3, title: "Desert Quad Safari", description: "Vibrant quad biking excursion in the Red Sea desert mountains." },
        { day: 4, title: "Departure", description: "Breakfast and transfer to Hurghada Airport or back to Cairo." }
      ]
    },
    {
      id: "eg-ext-002",
      slug: "siwa-oasis-desert-escape-3d",
      code: "EG-EXT-02",
      title: "Siwa Oasis Safari & Desert Adventure",
      destination: "egypt",
      duration: "3 Days / 2 Nights",
      minPax: "2 Pax",
      price: 520,
      rating: 4.95,
      reviewCount: 98,
      images: [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
      ],
      overview: "Escape into the magical Siwa Oasis: salt lakes floating experience, Oracle Temple of Alexander the Great, and Great Sand Sea 4x4 dune bashing.",
      highlights: [
        "Floating in Crystal Salt Lakes of Siwa",
        "Cleopatra Spring & Oracle Temple",
        "Great Sand Sea 4x4 Dune Bashing & Sandboarding",
        "Eco-lodge stay under desert stars"
      ],
      included: [
        "02 nights in authentic luxury eco-lodge in Siwa",
        "4x4 Private Jeep with experienced desert guide",
        "Full board organic meals"
      ],
      excluded: [
        "Personal purchases of Siwa olive oil & salt lamps"
      ],
      itinerary: [
        { day: 1, title: "Drive from Cairo to Siwa Oasis", description: "Scenic drive through Western Desert, arrival in Siwa, Cleopatra Spring swim." },
        { day: 2, title: "Salt Lakes & Sand Dune Safari", description: "Float in hyper-saline turquoise lakes, visit Oracle Temple, and 4x4 dune safari." },
        { day: 3, title: "Shali Fortress & Return to Cairo", description: "Explore ancient mudbrick Shali Fortress, date palm groves, return drive to Cairo." }
      ]
    }
  ]
};

export default extensionEgyptProgramData;
