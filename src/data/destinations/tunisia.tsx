import { tunisiaTranslations } from './tunisia.translations';
import { DestinationData } from './jordan';

export const tunisiaDestinationData: DestinationData = {
  id: "tunisia",
  slug: "tunisia",
  name: "Tunisia",
  heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  seoTitle: "Luxury Tunisia Tours & Vacations | Dunas Travel",
  seoDesc: "Discover Carthage, Sidi Bou Said, El Djem, and Sahara desert oases with luxury Tunisia tour packages.",
  subtitle: "Jewel of the Mediterranean & Sahara",
  desc: "Explore ancient Carthage ruins, the whitewashed streets of Sidi Bou Said, and the vast golden dunes of the Sahara.",
  brief: "Tunisia offers a rich tapestry of Roman history, Mediterranean charm, and Saharan desert adventures.",
  translations: tunisiaTranslations,
  trips: [
    {
      id: "tn-001",
      slug: "tesoros-de-tunez-7d",
      code: "TN-01",
      title: "Tesoros del Mediterráneo y el Sahara Tunecino",
      destination: "tunisia",
      duration: "7 Days / 6 Nights",
      minPax: "2 Pax",
      price: 980,
      rating: 4.8,
      reviewCount: 142,
      images: [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
      ],
      overview: "Explore las ruinas romanas de Cartago, el idílico pueblo blanco y azul de Sidi Bou Said, el anfiteatro de El Djem y el gran oasis sahariano de Tozeur.",
      highlights: [
        "Cartago y Sidi Bou Said",
        "Anfiteatro Romano de El Djem",
        "Oasis de Tozeur y Chott El Jerid",
        "Casas Trogloditas de Matmata"
      ],
      included: [
        "Traslados completos en autobús de gran turismo",
        "Alojamiento en media pensión",
        "Guía oficial de turismo",
        "Todas las visitas y entradas del programa"
      ],
      excluded: [
        "Vuelos internacionales",
        "Bebidas y propinas"
      ],
      itinerary: [
        { day: 1, title: "Llegada a Túnez", description: "Llegada al aeropuerto internacional de Túnez-Cartago y traslado al hotel en Gammarth." },
        { day: 2, title: "Túnez – Cartago – Sidi Bou Said", description: "Visita al Museo del Bardo, las termas de Antonino en Cartago y paseo por Sidi Bou Said." },
        { day: 3, title: "Túnez – Kairouan – Tozeur", description: "Visita a la Gran Mezquita de Kairouan y trayecto hacia el oasis de Tozeur." },
        { day: 4, title: "Oasis de Montaña Chebika y Tamerza", description: "Excursión en 4x4 por los oasis de montaña y escenarios de Star Wars en Ong Jmel." },
        { day: 5, title: "Tozeur – Chott El Jerid – Matmata – Douz", description: "Cruce del lago salado Chott El Jerid y visita a las casas trogloditas de Matmata." },
        { day: 6, title: "Douz – El Djem – Hammamet", description: "Visita al imponente anfiteatro romano de El Djem y traslado a la costa de Hammamet." },
        { day: 7, title: "Hammamet – Túnez / Salida", description: "Desayuno y traslado al aeropuerto para el vuelo de regreso." }
      ]
    }
  ]
};

export default tunisiaDestinationData;
