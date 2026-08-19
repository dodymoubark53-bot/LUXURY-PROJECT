import { classicProgramTranslations } from './classic.translations';
import { DetailedTrip } from '../../jordan';

export interface EgyptProgram {
  id: string;
  slug: string;
  name: string;
  image: string;
  priceFrom: number;
  translations: typeof classicProgramTranslations;
  trips: DetailedTrip[];
}

export const classicEgyptProgramData: EgyptProgram = {
  id: "classic-program",
  slug: "classic-program",
  name: "Classic Program",
  image: "https://res.cloudinary.com/degbrq3ck/image/upload/v1783029636/Classic_Program_gfal0s.jpg",
  priceFrom: 1290,
  translations: classicProgramTranslations,
  trips: [
    {
      id: "eg-cls-001",
      slug: "egito-classico-nilo-8d",
      code: "EG-CLS-01",
      title: "Descubrimiento de Egipto: El Nilo Legendario",
      destination: "egypt",
      duration: "8 Days / 7 Nights",
      minPax: "2 Pax",
      price: 1290,
      rating: 4.9,
      reviewCount: 520,
      images: [
        "https://res.cloudinary.com/degbrq3ck/image/upload/v1783029636/Classic_Program_gfal0s.jpg",
        "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=800&q=80"
      ],
      overview: "Disfrute de la magia de las Pirámides de Guiza y navegue en un crucero de lujo por el río Nilo desde Asuán hasta Lúxor. Incluye visitas guiadas con egiptólogo de habla hispana.",
      highlights: [
        "Pirámides de Guiza y Gran Esfinge",
        "Crucero por el Nilo 5 Estrellas Pensión Completa",
        "Valle de los Reyes y Templo de Karnak",
        "Templo de Philae en Asuán"
      ],
      included: [
        "03 noches en el Cairo en hotel 5 estrellas con desayuno",
        "04 noches de crucero por el Nilo en Pensión Completa",
        "Vuelos domésticos El Cairo – Asuán / Lúxor – El Cairo",
        "Guía egiptólogo en español durante todo el recorrido"
      ],
      excluded: [
        "Vistos de entrada a Egipto ($35 pp)",
        "Bebidas a bordo del crucero",
        "Propinas generales ($50 pp)"
      ],
      itinerary: [
        { day: 1, title: "Llegada al Cairo", description: "Recepción en el aeropuerto internacional del Cairo y traslado al hotel de lujo." },
        { day: 2, title: "Pirámides de Guiza y Gran Museo Egipcio", description: "Visita panorámica a las Pirámides de Keops, Kefrén y Micerino, la Esfinge y el Grand Egyptian Museum." },
        { day: 3, title: "El Cairo – Vuelo a Asuán – Templo de Philae", description: "Vuelo a Asuán. Visita al hermoso templo de Isis en la isla de Philae y embarque en el crucero." },
        { day: 4, title: "Asuán – Kom Ombo – Edfu", description: "Navegación hacia Kom Ombo para visitar el templo doble de Sobek y Haroeris. Continuación a Edfu." },
        { day: 5, title: "Edfu – Lúxor", description: "Visita en calesa al templo de Horus en Edfu. Navegación cruzando la esclusa de Esna hacia Lúxor." },
        { day: 6, title: "Lúxor: Valle de los Reyes y Karnak", description: "Exploración de la orilla oeste (Valle de los Reyes, Colosos de Memnón) y los templos de Karnak y Lúxor." },
        { day: 7, title: "Lúxor – Vuelo a El Cairo", description: "Desembarque, vuelo de regreso a El Cairo y tiempo libre en el mercado Khan El Khalili." },
        { day: 8, title: "El Cairo / Salida", description: "Traslado al aeropuerto internacional para el vuelo de regreso." }
      ]
    },
    {
      id: "eg-cls-002",
      slug: "gran-faraon-egipto-11d",
      code: "EG-CLS-02",
      title: "Gran Faraón: El Cairo, Nilo & Abu Simbel",
      destination: "egypt",
      duration: "11 Days / 10 Nights",
      minPax: "2 Pax",
      price: 1750,
      rating: 4.95,
      reviewCount: 380,
      images: [
        "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=800&q=80"
      ],
      overview: "Itinerario majestuoso de 11 días que incluye la visita a los espectaculares Templos de Abu Simbel, el Cairo completo con Alejandría y el crucero fluvial por el Nilo.",
      highlights: [
        "Excursión a los Templos de Abu Simbel (Ramsés II)",
        "Crucero de Lujo por el Nilo 5 Estrellas Gran Lujo",
        "Excursión de día completo a Alejandría",
        "Barrio Copto y Ciudadela de Saladino en el Cairo"
      ],
      included: [
        "05 noches de hotel en El Cairo con desayuno",
        "04 noches de crucero por el Nilo en pensión completa",
        "Excursión por carretera a Abu Simbel con entradas",
        "Todos los vuelos domésticos e impuestos incluidos"
      ],
      excluded: [
        "Vuelos internacionales",
        "Visado obligatorio ($35 pp)"
      ],
      itinerary: [
        { day: 1, title: "Llegada al Cairo", description: "Llegada y traslado VIP al hotel." },
        { day: 2, title: "Pirámides y Sakkara", description: "Visita a las Pirámides de Guiza, la Esfinge y la pirámide escalonada de Zoser en Sakkara." },
        { day: 3, title: "El Cairo Cultural", description: "Museo de la Civilización (NMEC), Ciudadela de Saladino y Mezquita de Alabastro." },
        { day: 4, title: "Excursión a Alejandría", description: "Día entero en la perla del Mediterráneo: Catacumbas, Cidadela y Biblioteca." },
        { day: 5, title: "Vuelo a Asuán y Philae", description: "Vuelo a Asuán, visita al templo de Philae y embarque." },
        { day: 6, title: "Abu Simbel", description: "Excursión a Abu Simbel para contemplar los colosos de Ramsés II y Nefertari." },
        { day: 7, title: "Kom Ombo y Edfu", description: "Visitas a los templos greco-romanos del Nilo." },
        { day: 8, title: "Lúxor completo", description: "Valle de los Reyes, Templo de Hatshepsut y Gran Templo de Karnak." },
        { day: 9, title: "Lúxor – Vuelo a El Cairo", description: "Vuelo de regreso y alojamiento." },
        { day: 10, title: "Día Libre en El Cairo", description: "Día libre para compras en Khan El Khalili o visitas opcionales." },
        { day: 11, title: "Salida", description: "Traslado al aeropuerto internacional del Cairo." }
      ]
    }
  ]
};

export default classicEgyptProgramData;
