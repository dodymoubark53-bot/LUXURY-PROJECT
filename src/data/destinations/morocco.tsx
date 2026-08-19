import { moroccoTranslations } from './morocco.translations';
import { DestinationData } from './jordan';

export const moroccoDestinationData: DestinationData = {
  id: "morocco",
  slug: "morocco",
  name: "Morocco",
  heroImage: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80",
  seoTitle: "Luxury Morocco Tours & Desert Safaris | Dunas Travel",
  seoDesc: "Explore Marrakech, Fez, Ait Ben Haddou, and Merzouga Sahara glamping with bespoke luxury Morocco itineraries.",
  subtitle: "Kingdom of Wonders & Sahara Oasis",
  desc: "Discover Marrakech medinas, Sahara desert dunes, ancient Kasbahs, and imperial cities.",
  brief: "Morocco is a kingdom of vibrant colors, fragrant spices, ancient riads, and breathtaking desert landscapes.",
  translations: moroccoTranslations,
  trips: [
    {
      id: "ma-001",
      slug: "ciudades-imperiales-y-sahara-8d",
      code: "MOR-01",
      title: "Magia de Marruecos & Ciudades Imperiales",
      destination: "morocco",
      duration: "8 Days / 7 Nights",
      minPax: "2 Pax",
      price: 1190,
      rating: 4.9,
      reviewCount: 195,
      images: [
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80"
      ],
      overview: "Recorra Casablanca, Rabat, la medina medieval de Fez, la Kasbah Ait Ben Haddou y disfrute de una noche de lujo bajo las estrellas en el Sahara.",
      highlights: [
        "Mezquita Hassan II en Casablanca",
        "Medina de Fez (Patrimonio de la Humanidad)",
        "Noche de Glamping en las Dunas de Merzouga",
        "Kasbah de Ait Ben Haddou y Marrakech"
      ],
      included: [
        "Alojamiento 7 noches en Riads boutique y Campamento de Lujo",
        "Pensión completa durante el recorrido por el desierto",
        "Vehículo 4x4 o minivan privada con chofer guía",
        "Paseo en dromedario por las dunas al atardecer"
      ],
      excluded: [
        "Vuelos internacionales",
        "Bebidas y propinas"
      ],
      itinerary: [
        { day: 1, title: "Llegada a Casablanca", description: "Recepción en el aeropuerto y visita exterior a la Gran Mezquita Hassan II." },
        { day: 2, title: "Casablanca – Rabat – Fez", description: "Visita a la Torre Hassan en Rabat y traslado a la capital espiritual de Fez." },
        { day: 3, title: "Medina de Fez", description: "Visita guiada por los zocos, curtiderías y la madraza Bou Inania." },
        { day: 4, title: "Fez – Ifrane – Erfoud – Desierto de Merzouga", description: "Cruce del Medio Atlas hacia las dunas de Erg Chebbi para noche de glamping." },
        { day: 5, title: "Merzouga – Gargantas del Todra – Ouarzazate", description: "Amanecer en las dunas y ruta de las mil Kasbahs." },
        { day: 6, title: "Ouarzazate – Ait Ben Haddou – Marrakech", description: "Visita a la famosa Kasbah de cine y cruce del puerto de Tizi n'Tichka hacia Marrakech." },
        { day: 7, title: "Marrakech Imperial", description: "Visita a los Jardines Majorelle, Palacio Bahia y la animada Plaza Jemaa El Fna." },
        { day: 8, title: "Marrakech / Salida", description: "Traslado al aeropuerto internacional de Marrakech." }
      ]
    }
  ]
};

export default moroccoDestinationData;
