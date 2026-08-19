import { honeymoonersProgramTranslations } from './honeymooners.translations';
import { EgyptProgram } from './classic';

export const honeymoonersEgyptProgramData: EgyptProgram = {
  id: "honeymooners",
  slug: "honeymooners",
  name: "Honeymooners Package",
  image: "https://thfvnext.bing.com/th/id/R.ddcd0b2a355a2267797bf6cd444de51d?rik=Lv4r4rM4ltmLhg&pid=ImgRaw&r=0",
  priceFrom: 1650,
  translations: honeymoonersProgramTranslations,
  trips: [
    {
      id: "pkg-honey-1",
      slug: "nile-red-sea-honeymoon",
      code: "EG-HNY-01",
      title: "Romantic Nile Cruise & Red Sea Luxury",
      destination: "egypt",
      duration: "10 Days / 9 Nights",
      minPax: "2 Pax",
      price: 1650,
      rating: 5.0,
      reviewCount: 245,
      images: [
        "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80",
        "https://thfvnext.bing.com/th/id/R.ddcd0b2a355a2267797bf6cd444de51d?rik=Lv4r4rM4ltmLhg&pid=ImgRaw&r=0"
      ],
      overview: "Crafted specifically for couples seeking romance, culture, and relaxation. Features private felucca sunset sailing, candlelight Nile dinner, and beachfront luxury in Hurghada.",
      highlights: [
        "Pyramids Private Sunset Tour",
        "Luxury Nile Cruise Suite with Private Balcony",
        "Private Felucca Sail at Sunset with Champagne",
        "Hurghada Beachfront All-Inclusive Villa Stay"
      ],
      included: [
        "VIP luxury airport transfers in executive private sedan",
        "Domestic flights Cairo – Luxor / Hurghada – Cairo",
        "Honeymoon room upgrades & romantic amenities",
        "All meals on Nile Cruise and Hurghada resort"
      ],
      excluded: [
        "International flights",
        "Personal spa treatments"
      ],
      itinerary: [
        { day: 1, title: "Arrival in Cairo & VIP Welcome", description: "VIP airport reception, champagne welcome at hotel, and romantic dinner." },
        { day: 2, title: "Private Pyramids & Sphinx Sunset Tour", description: "Private guided tour of Giza Pyramids with photographer and sunset view." },
        { day: 3, title: "Flight to Luxor & Cruise Suite Check-in", description: "Flight to Luxor and check-in to luxury Honeymoon Suite on the Nile." },
        { day: 4, title: "Valley of the Kings & Felucca Ride", description: "Explore West Bank tombs followed by private sunset felucca sailing." },
        { day: 5, title: "Edfu & Kom Ombo Temples", description: "Scenic Nile cruise sailing with romantic deck dinners." },
        { day: 6, title: "Aswan & Temple of Philae", description: "Visit Philae island temple and romantic dinner overlooking Aswan Nile." },
        { day: 7, title: "Transfer to Hurghada Red Sea Resort", description: "Private drive to Hurghada resort and check-in to beachfront villa." },
        { day: 8, title: "Red Sea Relaxation & Spa", description: "Couples spa massage session and private beach cabana relaxation." },
        { day: 9, title: "Private Yacht Snorkeling Trip", description: "Private yacht trip to Giftun Island coral reefs with seafood lunch." },
        { day: 10, title: "Hurghada – Cairo / Departure", description: "Flight to Cairo and connection to international flight." }
      ]
    }
  ]
};

export default honeymoonersEgyptProgramData;
