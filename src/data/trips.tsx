import { TripItem } from './types';

export const baseTrips: TripItem[] = [
  // 🇧🇷 MERCADO BRASILEIRO (PT-BR)
  {
    id: "eg-br-001",
    slug: "cairo-express-4d",
    language: "pt-BR",
    market: "Brasil",
    type: "City Break",
    duration: "4 Dias / 3 Noites",
    destination: "egypt",
    title: "Cairo Express",
    overview: "Roteiro intenso de quatro dias explorando o coração do Egito Antigo. Visite as Pirâmides de Giza, a Esfinge, Memphis, Sakkara, o Grand Egyptian Museum, a Mesquita de Alabastro e o vibrante Mercado Khan El Khalili. Pacote completo com traslados, hospedagem e visto inclusos.",
    departures: "Diário",
    price: 650,
    rating: 4.7,
    reviewCount: 312,
    images: ["/imgs/egypt/Cairo Express.jpg"],
    highlights: [
      "Pirâmides de Giza e Esfinge",
      "Memphis e Sakkara",
      "Grand Egyptian Museum (GEM)",
      "Mercado Khan El Khalili"
    ],
    included: [
      "03 noites de hospedagem no Cairo em hotel de categoria escolhida com café da manhã e taxas",
      "Traslados: Aeroporto / Hotel / Aeroporto em serviço regular",
      "Assistência no Aeroporto conforme roteiro",
      "Passeio no Cairo às Pirâmides e Esfinge, Memphis e Sakkara, Mastabas e Pirâmide de Teti",
      "Passeio e entrada ao Grand Egyptian Museum, Mesquita, Bairro Copta e Mercado Khan El Khalili"
    ],
    excluded: [
      "Bebidas durante refeições",
      "Gorjetas aos maleteiros e carregadores",
      "Visto obrigatório 35$ pp"
    ],
    itinerary: [
      { day: 1, title: "Chegada no Aeroporto Internacional do Cairo", description: "Chegada ao Aeroporto do Cairo e traslado para o Hotel." },
      { day: 2, title: "Pirâmides, Esfinge, Fábrica de Papiros, Memphis e Sakkara", description: "Café da manhã no hotel e saída para visita às pirâmides de Giza: Quéops, Quefren e Miquerinos." },
      { day: 3, title: "Novo Museu (GEM), Mesquita de Alabastro, Mercado Khan El Khalili", description: "Café da manhã no hotel e saída para a visita ao Novo Museu, Mesquita de Alabastro e Cidadela." },
      { day: 4, title: "Cairo / Aeroporto", description: "Café da manhã no hotel e saída ao Aeroporto para voo internacional." }
    ]
  },
  {
    id: "eg-br-002",
    slug: "cairo-express-alexandria-5d",
    language: "pt-BR",
    market: "Brasil",
    type: "City Break",
    duration: "5 Dias / 4 Noites",
    destination: "egypt",
    title: "Cairo Express com Alexandria",
    overview: "Roteiro de cinco dias que combina os tesouros do Cairo com a beleza mediterrânea de Alexandria. Explore as Pirâmides de Giza, Memphis, Sakkara, o Grand Egyptian Museum e a Mesquita de Alabastro.",
    departures: "Diário",
    price: 820,
    rating: 4.8,
    reviewCount: 198,
    images: ["/imgs/egypt/Cairo Express with Alexandria.jpeg"],
    highlights: [
      "Pirâmides de Giza e Esfinge",
      "Catacumbas de Kom El Shoqafa",
      "Cidadela de Qaitbay em Alexandria",
      "Grand Egyptian Museum (GEM)",
      "Biblioteca de Alexandria"
    ],
    included: [
      "04 noites de hospedagem no Cairo em hotel com café da manhã",
      "Traslados Aeroporto / Hotel / Aeroporto",
      "Visita a Alexandria de um dia inteiro com almoço incluso"
    ],
    excluded: [
      "Bebidas nas refeições",
      "Gorjetas"
    ]
  },
  {
    id: "eg-br-003",
    slug: "egito-classico-8d",
    language: "pt-BR",
    market: "Brasil",
    type: "Cruzeiro + City",
    duration: "8 Dias / 7 Noites",
    destination: "egypt",
    title: "Egito Clássico: Cairo + Cruzeiro no Nilo",
    overview: "Navegue pela grandiosidade do Egito antigo durante oito dias inesquecíveis, com cruzeiro pelo Rio Nilo de Aswan a Luxor. Contemple templos majestosos como Philae, Karnak e Kom Ombo, e o Vale dos Reis.",
    departures: "Diário",
    price: 1350,
    rating: 4.9,
    reviewCount: 410,
    images: ["/imgs/egypt/Classic Egypt.jpeg"],
    highlights: [
      "Cruzeiro no Nilo 5 estrelas 4 Noites",
      "Templos de Luxor e Karnak",
      "Vale dos Reis e Templo de Hatshepsut",
      "Templo de Philae em Aswan",
      "Pirâmides de Giza e GEM no Cairo"
    ]
  },

  // 🇪🇸 MERCADO ESPAÑOL & LATAM
  {
    id: "eg-es-001",
    slug: "descubrimiento-egipto-8d",
    language: "es",
    market: "España",
    type: "Crucero + Ciudad",
    duration: "8 Días / 7 Noches",
    destination: "egypt",
    title: "Descubrimiento de Egipto: El Nilo Legendario",
    overview: "Disfrute de la magia de las Pirámides de Guiza y navegue en un crucero de lujo por el río Nilo desde Asuán hasta Luxor. Incluye visitas guiadas con egiptólogo de habla hispana.",
    departures: "Lunes y Viernes",
    price: 1290,
    rating: 4.9,
    reviewCount: 520,
    images: ["https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=800&q=80"],
    highlights: [
      "Pirámides de Guiza y Esfinge",
      "Crucero por el Nilo 5 Estrellas Pensión Completa",
      "Valle de los Reyes y Templo de Karnak",
      "Paseo en Faluca en Asuán"
    ]
  },
  {
    id: "jo-es-001",
    slug: "tesoros-de-jordania-7d",
    language: "es",
    market: "España",
    type: "Circuito Cultural",
    duration: "7 Días / 6 Noches",
    destination: "jordan",
    title: "Maravillas y Tesoros de Jordania",
    overview: "Recorra la mística ciudad rosa de Petra, duerma bajo las estrellas en el desierto de Wadi Rum, flote en el Mar Muerto y descubra las ruinas romanas de Jerash.",
    departures: "Sábados",
    price: 1150,
    rating: 4.8,
    reviewCount: 165,
    images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"],
    highlights: [
      "Ciudad Rosa de Petra",
      "Safari 4x4 y Noche de Glamping en Wadi Rum",
      "Experiencia Flotante en el Mar Muerto",
      "Jerash y Castillo de Ajloun"
    ]
  },

  // 🇹🇷 TURKEY TOURS
  {
    id: "tr-001",
    slug: "magia-de-turquia-8d",
    language: "es",
    market: "Global",
    type: "Circuito Cultural",
    duration: "8 Días / 7 Noches",
    destination: "turkey",
    title: "Magia de Turquía: Estambul y Capadocia",
    overview: "Descubra la grandiosidad de Estambul con sus mezquitas e historia imperial, combinada con los paisajes lunares y chimeneas de hadas de Capadocia.",
    departures: "Diario",
    price: 1100,
    rating: 4.9,
    reviewCount: 230,
    images: ["https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=800&q=80"],
    highlights: [
      "Santa Sofía y Mezquita Azul en Estambul",
      "Paseo en Barco por el Bósforo",
      "Vuelo en Globo Aerostático en Capadocia",
      "Ciudad Subterránea de Kaymakli"
    ]
  },

  // 🇹🇳 TUNISIA TOURS
  {
    id: "tn-001",
    slug: "tesoros-de-tunez-7d",
    language: "es",
    market: "Global",
    type: "Circuito Cultural",
    duration: "7 Días / 6 Noches",
    destination: "tunisia",
    title: "Tesoros del Mediterráneo y el Sahara Tunecino",
    overview: "Explore las ruinas romanas de Cartago, el idílico pueblo blanco y azul de Sidi Bou Said, el anfiteatro de El Djem y el gran oasis sahariano de Tozeur.",
    departures: "Domingos",
    price: 980,
    rating: 4.8,
    reviewCount: 142,
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"],
    highlights: [
      "Cartago y Sidi Bou Said",
      "Anfiteatro Romano de El Djem",
      "Oasis de Tozeur y Chott El Jerid",
      "Casas Trogloditas de Matmata"
    ]
  },

  // 🇬🇷 GREECE TOURS
  {
    id: "gr-001",
    slug: "atenas-y-las-islas-griegas-9d",
    language: "es",
    market: "Global",
    type: "Islas y Cultura",
    duration: "9 Días / 8 Noches",
    destination: "greece",
    title: "Atenas y la Joya de las Islas Cícladas",
    overview: "Contemple la cuna de la civilización occidental en la Acrópolis de Atenas, relájese en las playas cosmopolitas de Mykonos y disfrute de los atardeceres legendarios de Santorini.",
    departures: "Miércoles",
    price: 1780,
    rating: 4.95,
    reviewCount: 310,
    images: ["https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80"],
    highlights: [
      "Acrópolis y Partenón de Atenas",
      "Ferry de Alta Velocidad entre Islas",
      "Atardecer Mágico en Oia, Santorini",
      "Playas Paradisíacas de Mykonos"
    ]
  }
];

export const tripsData: TripItem[] = [...baseTrips];
export const tours = tripsData;
export const allTours = tripsData;

export const getTripBySlug = (slug: string): TripItem | undefined => {
  return tripsData.find(t => t.slug.toLowerCase() === slug.toLowerCase());
};

export const getTripById = (id: string): TripItem | undefined => {
  return tripsData.find(t => t.id === id);
};

export const getTripsByDestination = (dest: string): TripItem[] => {
  return tripsData.filter(t => t.destination.toLowerCase() === dest.toLowerCase());
};
