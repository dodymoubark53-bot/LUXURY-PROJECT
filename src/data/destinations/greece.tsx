import { greeceTranslations } from './greece.translations';
import { DestinationData } from './jordan';

export const greeceDestinationData: DestinationData = {
  id: "greece",
  slug: "greece",
  name: "Greece",
  heroImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
  seoTitle: "Luxury Greece & Cyclades Island Tours | Dunas Travel",
  seoDesc: "Experience Athens Acropolis, Santorini cliffside luxury, and Mykonos beaches with bespoke private itineraries.",
  subtitle: "Cradle of Western Civilization",
  desc: "Behold the Acropolis of Athens, relax on Mykonos beaches, and marvel at Santorini's legendary sunsets.",
  brief: "Greece combines iconic ancient history in Athens with the turquoise waters and whitewashed villages of the Cyclades Islands.",
  translations: greeceTranslations,
  trips: [
    {
      id: "gr-001",
      slug: "atenas-y-las-islas-griegas-9d",
      code: "GR-01",
      title: "Atenas y la Joya de las Islas Cícladas",
      destination: "greece",
      duration: "9 Days / 8 Nights",
      minPax: "2 Pax",
      price: 1780,
      rating: 4.95,
      reviewCount: 310,
      images: [
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80"
      ],
      overview: "Contemple la cuna de la civilización occidental en la Acrópolis de Atenas, relájese en las playas cosmopolitas de Mykonos y disfrute de los atardeceres legendarios de Santorini.",
      highlights: [
        "Acrópolis y Partenón de Atenas",
        "Ferry de Alta Velocidad entre Islas",
        "Atardecer Mágico en Oia, Santorini",
        "Playas Paradisíacas de Mykonos"
      ],
      included: [
        "Alojamiento 8 noches en hoteles seleccionados con desayuno",
        "Billetes de ferry rápido Atenas – Mykonos – Santorini – Atenas",
        "Visita guiada a la Acrópolis con entradas incluidas",
        "Traslados privados puerto/hotel/aeropuerto"
      ],
      excluded: [
        "Tasas de alojamiento turístico en Grecia",
        "Vuelos internacionales",
        "Comidas no especificadas y propinas"
      ],
      itinerary: [
        { day: 1, title: "Llegada a Atenas", description: "Llegada al aeropuerto internacional de Atenas y traslado al hotel." },
        { day: 2, title: "Atenas Panorámica y Acrópolis", description: "Visita guiada al Partenón, Estadio Panatenaico y el Museo de la Acrópolis." },
        { day: 3, title: "Atenas – Mykonos", description: "Traslado al puerto de El Pireo y ferry rápido hacia Mykonos." },
        { day: 4, title: "Día Libre en Mykonos", description: "Exploración libre de las callejuelas de Chora, los molinos de viento y las playas de Psarou." },
        { day: 5, title: "Mykonos – Santorini", description: "Embarque en catamarán con destino a la espectacular isla de Santorini." },
        { day: 6, title: "Santorini y Atardecer en Oia", description: "Día libre para descubrir Firá, las playas de arena negra y la famosa puesta de sol en Oia." },
        { day: 7, title: "Crucero en Catamarán por la Caldeira", description: "Excursión en barco por los volcanes y fuentes termales de la caldeira con barbacoa a bordo." },
        { day: 8, title: "Santorini – Atenas", description: "Ferry de regreso a Atenas y noche final de alojamiento." },
        { day: 9, title: "Atenas / Salida", description: "Traslado al aeropuerto para el vuelo de regreso." }
      ]
    }
  ]
};

export default greeceDestinationData;
