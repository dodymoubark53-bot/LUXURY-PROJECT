import { egyptTranslations, egyptTripsTranslations } from './translations';
import { classicEgyptProgramData, EgyptProgram } from './programs/classic';
import { honeymoonersEgyptProgramData } from './programs/honeymooners';
import { religiousEgyptProgramData } from './programs/religious';
import { multiCountryEgyptProgramData } from './programs/multi-country';
import { extensionEgyptProgramData } from './programs/extension';
import { DetailedTrip } from '../jordan';

export interface EgyptDestinationData {
  id: string;
  slug: string;
  name: string;
  heroImage: string;
  seoTitle: string;
  seoDesc: string;
  subtitle: string;
  desc: string;
  brief: string;
  translations: typeof egyptTranslations;
  tripsTranslations: typeof egyptTripsTranslations;
  tripsCount: number;
  programsCount: number;
  trips: DetailedTrip[];
  programs: {
    classic: EgyptProgram;
    honeymooners: EgyptProgram;
    religious: EgyptProgram;
    multiCountry: EgyptProgram;
    extension: EgyptProgram;
  };
}

export const egyptDestinationData: EgyptDestinationData = {
  id: "egypt",
  slug: "egypt",
  name: "Egypt",
  heroImage: "/imgs/egyothero.png",
  seoTitle: "Luxury Egypt Tours & Vacations | Dunas Travel",
  seoDesc: "Discover Egypt in grand style. From the majestic Pyramids of Giza to the temples of Luxor and the Red Sea coast, embark on an unforgettable luxury journey.",
  subtitle: "Land of the Pharaohs",
  desc: "From the timeless Pyramids of Giza to the golden temples of Luxor and the crystal waters of the Red Sea, Egypt offers a journey through history like no other.",
  brief: "A civilisation that has captivated the world for millennia. Egypt blends monumental history with warm hospitality and breathtaking landscapes — from the iconic Pyramids and the Nile cruise to the coral reefs of the Red Sea.",
  translations: egyptTranslations,
  tripsTranslations: egyptTripsTranslations,
  tripsCount: 9,
  programsCount: 5,
  programs: {
    classic: classicEgyptProgramData,
    honeymooners: honeymoonersEgyptProgramData,
    religious: religiousEgyptProgramData,
    multiCountry: multiCountryEgyptProgramData,
    extension: extensionEgyptProgramData
  },
  trips: [
    // 1. eg-br-001
    {
      id: "eg-br-001",
      slug: "cairo-express-4d",
      code: "EG-BR-001",
      title: "Cairo Express",
      destination: "egypt",
      duration: "4 Dias / 3 Noites",
      minPax: "2 Pax",
      price: 650,
      rating: 4.7,
      reviewCount: 312,
      images: ["/imgs/egypt/Cairo Express.jpg"],
      overview: "Roteiro intenso de quatro dias explorando o coração do Egito Antigo. Visite as Pirâmides de Giza, a Esfinge, Memphis, Sakkara, o Grand Egyptian Museum, a Mesquita de Alabastro e o vibrante Mercado Khan El Khalili.",
      highlights: [
        "Pirâmides de Giza e Esfinge",
        "Memphis e Sakkara",
        "Grand Egyptian Museum (GEM)",
        "Mercado Khan El Khalili"
      ],
      included: [
        "03 noites de hospedagem no Cairo com café da manhã",
        "Traslados aeroporto / hotel / aeroporto",
        "Passeios com guía egiptólogo",
        "Entradas aos monumentos citados"
      ],
      excluded: ["Bebidas", "Gorjetas obrigatórias", "Visto $35"],
      itinerary: [
        { day: 1, title: "Chegada no Cairo", description: "Chegada ao Aeroporto do Cairo e traslado para o Hotel." },
        { day: 2, title: "Pirâmides, Esfinge, Memphis e Sakkara", description: "Visita às pirâmides de Giza: Quéops, Quefren e Miquerinos, Esfinge e Sakkara." },
        { day: 3, title: "Novo Museu (GEM), Mesquita e Khan El Khalili", description: "Visita ao Grand Egyptian Museum, Bairro Copta e bazar." },
        { day: 4, title: "Cairo / Aeroporto", description: "Café da manhã no hotel e traslado ao Aeroporto." }
      ]
    },
    // 2. eg-br-002
    {
      id: "eg-br-002",
      slug: "cairo-express-alexandria-5d",
      code: "EG-BR-002",
      title: "Cairo Express com Alexandria",
      destination: "egypt",
      duration: "5 Dias / 4 Noites",
      minPax: "2 Pax",
      price: 820,
      rating: 4.8,
      reviewCount: 198,
      images: ["/imgs/egypt/Cairo Express with Alexandria.jpeg"],
      overview: "Roteiro de cinco dias que combina os tesouros do Cairo com a beleza mediterrânea de Alexandria.",
      highlights: [
        "Pirâmides de Giza e Esfinge",
        "Catacumbas de Kom El Shoqafa",
        "Cidadela de Qaitbay em Alexandria",
        "Grand Egyptian Museum (GEM)"
      ],
      included: [
        "04 noites no Cairo com café da manhã",
        "Visita a Alexandria de um dia inteiro com almoço",
        "Traslados e guias especializados"
      ],
      excluded: ["Bebidas e gorjetas", "Visto"],
      itinerary: [
        { day: 1, title: "Chegada no Cairo", description: "Traslado ao hotel." },
        { day: 2, title: "Pirâmides e Sakkara", description: "Visita às Pirâmides e Sakkara." },
        { day: 3, title: "Excursão a Alexandria", description: "Visita às Catacumbas, Cidadela e Biblioteca." },
        { day: 4, title: "GEM e Bairro Copta", description: "Novo Museu Egípcio e centro histórico." },
        { day: 5, title: "Cairo / Retorno", description: "Traslado ao aeroporto." }
      ]
    },
    // 3. eg-br-003
    {
      id: "eg-br-003",
      slug: "egito-classico-8d",
      code: "EG-BR-003",
      title: "Egito Clássico: Cairo + Cruzeiro no Nilo",
      destination: "egypt",
      duration: "8 Dias / 7 Noites",
      minPax: "2 Pax",
      price: 1350,
      rating: 4.9,
      reviewCount: 445,
      images: ["/imgs/egypt/egito-classico-cairo-cruzeiro-no-nilo.jpg"],
      overview: "Navegue pela grandiosidade do Egito antigo durante oito dias inesquecíveis, com cruzeiro pelo Rio Nilo de Aswan a Luxor.",
      highlights: [
        "Cruzeiro no Rio Nilo 5 estrelas",
        "Templos de Luxor e Karnak",
        "Vale dos Reis e Templo de Hatshepsut",
        "Novo Museu (GEM)"
      ],
      included: [
        "Voos domésticos Cairo / Aswan // Luxor / Cairo",
        "04 noites no Cairo com café da manhã",
        "03 noites de cruzeiro no Nilo com pensão completa"
      ],
      excluded: ["Gorjetas e vistos"],
      itinerary: [
        { day: 1, title: "Chegada no Cairo", description: "Recepção e traslado." },
        { day: 2, title: "Pirâmides de Giza e GEM", description: "Passeio às Pirâmides e Museu." },
        { day: 3, title: "Voo para Aswan & Embark", description: "Templo de Philae e embarque no cruzeiro." },
        { day: 4, title: "Kom Ombo e Edfu", description: "Navegação pelo Nilo." },
        { day: 5, title: "Luxor Ocidental e Oriental", description: "Valle dos Reis e Karnak." },
        { day: 6, title: "Luxor – Voo para o Cairo", description: "Retorno ao Cairo." },
        { day: 7, title: "Cairo Histórico", description: "Bairro Copta e Khan El Khalili." },
        { day: 8, title: "Partida", description: "Traslado final ao aeroporto." }
      ]
    },
    // 4. eg-br-004
    {
      id: "eg-br-004",
      slug: "egito-classico-ii-9d",
      code: "EG-BR-004",
      title: "Egito Clássico II: Cairo + Cruzeiro no Nilo",
      destination: "egypt",
      duration: "9 Dias / 8 Noites",
      minPax: "2 Pax",
      price: 1450,
      rating: 4.8,
      reviewCount: 367,
      images: ["/imgs/egypt/cairo-with-cruise-sharm-el-sheikh.jpg"],
      overview: "Vivencie o esplendor da civilização egípcia ao longo de nove dias inesquecíveis, com cruzeiro pelo Rio Nilo na rota de Luxor até Aswan.",
      highlights: [
        "Pirâmides de Giza, Esfinge, Memphis e Sakkara",
        "Novo Museu Egípcio (GEM) e Mesquita de Alabastro",
        "Cruzeiro pelo Nilo: Luxor → Aswan (4 noites)",
        "Vale dos Reis, Karnak, Edfu, Kom Ombo e Filae"
      ],
      included: [
        "Voos domésticos Cairo / Luxor // Aswan / Cairo",
        "04 noites no Cairo e 04 noites de cruzeiro"
      ],
      excluded: ["Bebidas e vistos"],
      itinerary: [
        { day: 1, title: "Chegada no Cairo", description: "Recepção no aeroporto." },
        { day: 2, title: "Pirâmides e Sakkara", description: "Visita às Pirâmides." },
        { day: 3, title: "Novo Museu (GEM)", description: "Visita ao GEM e bazar." },
        { day: 4, title: "Voo para Luxor", description: "Embarque no cruzeiro e Templos de Luxor." },
        { day: 5, title: "Vale dos Reis", description: "Tumbas Reais e Hatshepsut." },
        { day: 6, title: "Edfu e Kom Ombo", description: "Navegação e templos." },
        { day: 7, title: "Aswan e Philae", description: "Templo de Philae e felucca." },
        { day: 8, title: "Aswan / Cairo", description: "Voo de regresso ao Cairo." },
        { day: 9, title: "Partida", description: "Traslado ao aeroporto." }
      ]
    },
    // 5. eg-br-005
    {
      id: "eg-br-005",
      slug: "egito-historico-10d",
      code: "EG-BR-005",
      title: "Egito Histórico: Cairo + Cruzeiro + Mar Vermelho (Hurghada)",
      destination: "egypt",
      duration: "10 Dias / 9 Noites",
      minPax: "2 Pax",
      price: 1590,
      rating: 4.7,
      reviewCount: 289,
      images: ["/imgs/egypt/cairo-cruzeiro-mar-vermelho.jpg"],
      overview: "Mergulhe na cultura faraônica e relaxe no litoral vibrante do Mar Vermelho durante dez dias perfeitos.",
      highlights: [
        "Hospedagem All-Inclusive em Hurghada",
        "Cruzeiro no Nilo completo",
        "Mar Vermelho e recifes de corais",
        "Pirâmides e Novo Museu"
      ],
      included: [
        "03 noites no Cairo, 03 noites de cruzeiro, 03 noites All-Inclusive em Hurghada",
        "Voos internos e traslados"
      ],
      excluded: ["Bebidas fora do resort", "Gorjetas"],
      itinerary: [
        { day: 1, title: "Chegada no Cairo", description: "Recepção e traslado." },
        { day: 2, title: "Pirâmides e GEM", description: "Passeio às Pirâmides." },
        { day: 3, title: "Cairo / Aswan", description: "Voo a Aswan e embarque." },
        { day: 4, title: "Kom Ombo", description: "Templo de Sobek." },
        { day: 5, title: "Edfu / Luxor", description: "Templos de Edfu e Luxor." },
        { day: 6, title: "Luxor / Hurghada", description: "Vale dos Reis e traslado a Hurghada." },
        { day: 7, title: "Hurghada Beach", description: "Dia livre All-Inclusive." },
        { day: 8, title: "Hurghada Beach", description: "Dia livre All-Inclusive." },
        { day: 9, title: "Hurghada / Cairo", description: "Voo de regresso ao Cairo." },
        { day: 10, title: "Partida", description: "Traslado ao aeroporto." }
      ]
    },
    // 6. eg-br-006
    {
      id: "eg-br-006",
      slug: "cairo-cruzeiro-sharm-11d",
      code: "EG-BR-006",
      title: "Cairo c/ Cruzeiro + Sharm El Sheikh",
      destination: "egypt",
      duration: "11 Dias / 10 Noites",
      minPax: "2 Pax",
      price: 1690,
      rating: 4.8,
      reviewCount: 214,
      images: ["/imgs/egypt/cairo-with-cruise-sharm-el-sheikh-detail.jpg"],
      overview: "Descubra o Egito em um roteiro completo de onze dias: Pirâmides, Nilo de Luxor a Aswan, e três noites all inclusive em Sharm El Sheikh.",
      highlights: [
        "Pirâmides de Giza e Esfinge",
        "Cruzeiro no Nilo de Luxor a Aswan",
        "Sharm El Sheikh All Inclusive"
      ],
      included: [
        "03 noites no Cairo, 04 noites de cruzeiro, 03 noites All Inclusive em Sharm El Sheikh",
        "Todos os voos domésticos (CAI/ASW, LXR/CAI, CAI/SSH, SSH/CAI)"
      ],
      excluded: ["Taxas portuárias", "Gorjetas"],
      itinerary: [
        { day: 1, title: "Chegada no Cairo", description: "Traslado ao hotel." },
        { day: 2, title: "Pirâmides de Giza", description: "Visita às Pirâmides." },
        { day: 3, title: "Cairo livre", description: "Dia libre no Cairo." },
        { day: 4, title: "Voo para Luxor", description: "Embarque e Templos de Luxor." },
        { day: 5, title: "Vale dos Reis", description: "Tumbas e Hatshepsut." },
        { day: 6, title: "Edfu e Kom Ombo", description: "Navegação pelo Nilo." },
        { day: 7, title: "Aswan e Philae", description: "Templo de Isis e felucca." },
        { day: 8, title: "Aswan / Sharm El Sheikh", description: "Voos de conexão para Sharm." },
        { day: 9, title: "Sharm El Sheikh", description: "Praia e All Inclusive." },
        { day: 10, title: "Sharm El Sheikh", description: "Praia e Mergulho." },
        { day: 11, title: "Partida", description: "Voo de regresso via Cairo." }
      ]
    },
    // 7. eg-br-007
    {
      id: "eg-br-007",
      slug: "grande-ramses-10d",
      code: "EG-BR-007",
      title: "O Grande Ramsés: Cairo + Cruzeiro + Hotel em Abu Simbel",
      destination: "egypt",
      duration: "10 Dias / 9 Noites",
      minPax: "2 Pax",
      price: 1790,
      rating: 5.0,
      reviewCount: 178,
      images: ["/imgs/egypt/The Great Ramses.png"],
      overview: "Noite exclusiva em Abu Simbel com espetáculo de som e luz nos Templos de Ramsés II e Nefertari, além do cruzeiro e Cairo.",
      highlights: [
        "Noite exclusiva em Abu Simbel",
        "Show de Luzes e Som nos Templos de Ramsés II",
        "Cruzeiro completo no Nilo",
        "Grand Egyptian Museum (GEM)"
      ],
      included: [
        "04 noites no Cairo, 04 noites de cruzeiro, 01 noite em Abu Simbel",
        "Show de Som e Luz em Abu Simbel incluso"
      ],
      excluded: ["Gorjetas", "Visto"],
      itinerary: [
        { day: 1, title: "Chegada no Cairo", description: "Traslado." },
        { day: 2, title: "Cairo / Voo a Luxor", description: "Embarque no cruzeiro." },
        { day: 3, title: "Vale dos Reis", description: "Tumbas reais e Hatshepsut." },
        { day: 4, title: "Edfu e Kom Ombo", description: "Navegação." },
        { day: 5, title: "Aswan", description: "Philae e Represa Alta." },
        { day: 6, title: "Aswan / Abu Simbel", description: "Traslado terrestre e Show de Som e Luz." },
        { day: 7, title: "Abu Simbel / Cairo", description: "Voo de regresso ao Cairo." },
        { day: 8, title: "Pirâmides e GEM", description: "Visita às Pirâmides e Novo Museu." },
        { day: 9, title: "Cairo livre", description: "Dia livre." },
        { day: 10, title: "Partida", description: "Traslado ao aeroporto." }
      ]
    },
    // 8. eg-br-008
    {
      id: "eg-br-008",
      slug: "tesouros-egipto-9d",
      code: "EG-BR-008",
      title: "Tesouros do Egito com Alexandria",
      destination: "egypt",
      duration: "9 Dias / 8 Noites",
      minPax: "2 Pax",
      price: 1490,
      rating: 4.9,
      reviewCount: 143,
      images: ["/imgs/egypt/Treasures of Egypt with Alexandria.jpg"],
      overview: "Roteiro completo de nove dias: Pirâmides de Giza, Novo Museu, bate e volta a Alexandria e cruzeiro pelo Nilo de Aswan a Luxor.",
      highlights: [
        "Pirâmides de Giza e Esfinge",
        "Cruzeiro no Nilo de Aswan a Luxor",
        "Visita à Biblioteca de Alexandria",
        "Vale dos Reis e Templos de Karnak"
      ],
      included: [
        "04 noites no Cairo, 04 noites de cruzeiro",
        "Excursão de dia completo a Alexandria com almoço"
      ],
      excluded: ["Gorjetas", "Visto"],
      itinerary: [
        { day: 1, title: "Chegada no Cairo", description: "Traslado." },
        { day: 2, title: "Pirâmides e GEM", description: "Visita às Pirâmides e Museu." },
        { day: 3, title: "Bate e Volta a Alexandria", description: "Biblioteca, Cidadela e Catacumbas." },
        { day: 4, title: "Cairo / Voo a Aswan", description: "Embarque no cruzeiro e Philae." },
        { day: 5, title: "Kom Ombo", description: "Navegação e templo." },
        { day: 6, title: "Edfu / Luxor", description: "Templos de Edfu e Luxor." },
        { day: 7, title: "Luxor / Cairo", description: "Vale dos Reis e voo ao Cairo." },
        { day: 8, title: "Cairo libre", description: "Bazar Khan El Khalili." },
        { day: 9, title: "Partida", description: "Traslado ao aeroporto." }
      ]
    },
    // 9. eg-es-001
    {
      id: "eg-es-001",
      slug: "descubrimiento-egipto-8d",
      code: "EG-ES-001",
      title: "Descubrimiento de Egipto: El Nilo Legendario",
      destination: "egypt",
      duration: "8 Days / 7 Nights",
      minPax: "2 Pax",
      price: 1290,
      rating: 4.9,
      reviewCount: 520,
      images: ["https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=800&q=80"],
      overview: "Disfrute de la magia de las Pirámides de Guiza y navegue en un crucero de lujo por el río Nilo desde Asuán hasta Luxor con guía de habla hispana.",
      highlights: [
        "Pirámides de Guiza y Esfinge",
        "Crucero por el Nilo 5 Estrellas Pensión Completa",
        "Valle de los Reyes y Templo de Karnak",
        "Paseo en Faluca en Asuán"
      ],
      included: [
        "03 noches de hotel en El Cairo con desayuno",
        "04 noches de crucero por el Nilo con pensión completa",
        "Guía egiptólogo en español"
      ],
      excluded: ["Vuelos internacionales", "Visado $35"],
      itinerary: [
        { day: 1, title: "Llegada al Cairo", description: "Asistencia y traslado al hotel." },
        { day: 2, title: "Pirámides y Gran Museo Egipcio", description: "Visita a las Pirámides y Esfinge." },
        { day: 3, title: "Vuelo a Asuán – Crucero", description: "Visita a Philae y embarque." },
        { day: 4, title: "Kom Ombo – Edfu", description: "Navegación por el Nilo." },
        { day: 5, title: "Lúxor Faraónico", description: "Valle de los Reyes y Templos." },
        { day: 6, title: "Lúxor – Vuelo a El Cairo", description: "Vuelo de regreso." },
        { day: 7, title: "El Cairo Medieval", description: "Zoco Khan El Khalili." },
        { day: 8, title: "Salida", description: "Traslado al aeropuerto." }
      ]
    }
  ]
};

export default egyptDestinationData;
