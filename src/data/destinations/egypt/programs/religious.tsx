import { religiousProgramTranslations } from './religious.translations';
import { EgyptProgram } from './classic';

export const religiousEgyptProgramData: EgyptProgram = {
  id: "religious-programs",
  slug: "religious",
  name: "Religious Programs",
  image: "https://www.saintjeromechurch.org/wp-content/uploads/2025/03/14714-what-is-ccd-in-catholic-church-religious-education-programs-explained.png",
  priceFrom: 1100,
  translations: religiousProgramTranslations,
  trips: [
    {
      id: "eg-rel-001",
      slug: "ruta-sagrada-familia-8d",
      code: "EG-REL-01",
      title: "Ruta de la Sagrada Familia en Egipto",
      destination: "egypt",
      duration: "8 Days / 7 Nights",
      minPax: "2 Pax",
      price: 1100,
      rating: 4.85,
      reviewCount: 160,
      images: [
        "https://www.saintjeromechurch.org/wp-content/uploads/2025/03/14714-what-is-ccd-in-catholic-church-religious-education-programs-explained.png"
      ],
      overview: "Circuito espiritual y cultural dedicado a recorrer las principales estaciones de la Sagrada Familia durante su refugio en Egipto.",
      highlights: [
        "Iglesia de San Sergio y Baco (Cripta de la Sagrada Familia)",
        "Monasterios Coptos de Wadi El Natrun",
        "Iglesia de la Virgen María en Maadi (Orillas del Nilo)",
        "Monasterio de San Macario y San Bishoy"
      ],
      included: [
        "07 noches de hotel con media pensión",
        "Guía especializado en teología e historia copta",
        "Transporte privado en autobús con aire acondicionado",
        "Donaciones y entradas a todos los monasterios"
      ],
      excluded: [
        "Vuelos internacionales",
        "Propinas personales"
      ],
      itinerary: [
        { day: 1, title: "Llegada al Cairo", description: "Asistencia espiritual y traslado al hotel en El Cairo." },
        { day: 2, title: "Barrio Copto y Cripta Sagrada", description: "Visita a la Iglesia Colgante, San Sergio y Baco, y la Sinagoga Ben Ezra." },
        { day: 3, title: "Monasterios de Wadi El Natrun", description: "Visita a los monasterios de Deir al-Surian, Deir Anba Bishoy y Deir al-Baramus." },
        { day: 4, title: "El Cairo – Maadi – El Minya", description: "Visita a la Iglesia de Maadi donde zarpó la Sagrada Familia hacia el Alto Egipto." },
        { day: 5, title: "El Minya & Monasterio de la Virgen (Jebel el-Teir)", description: "Visita al monasterio excavado en la roca en Jebel el-Teir." },
        { day: 6, title: "Regreso a El Cairo & Pirámides", description: "Retorno a la capital y visita vespertina panorámica a las Pirámides." },
        { day: 7, title: "Catedral Copta Ortodoxa de San Marcos", description: "Misa y visita a la sede patriarcal en Abbassia." },
        { day: 8, title: "El Cairo / Salida", description: "Traslado al aeropuerto internacional." }
      ]
    }
  ]
};

export default religiousEgyptProgramData;
