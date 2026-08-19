export interface ProgramTranslation {
  title: string;
  subtitle: string;
  desc: string;
  shortDesc: string;
}

export const multiCountryProgramTranslations: Record<string, ProgramTranslation> = {
  en: {
    title: "Multi-Country Tours",
    subtitle: "Grand Circuits Across Middle East & Mediterranean",
    desc: "Explore grand itineraries combining Egypt with Jordan, Turkey, Greece, and Dubai in one seamless luxury voyage.",
    shortDesc: "Explore combined itineraries spanning Egypt, Jordan, Turkey and beyond for a truly grand adventure."
  },
  es: {
    title: "Tours Multi-País",
    subtitle: "Grandes Circuitos por Oriente Medio y el Mediterráneo",
    desc: "Combine los tesoros del Faraón con la ciudad rosa de Petra, Estambul, Capadocia y Dubái en un itinerario de ensueño.",
    shortDesc: "Roteiros combinados recorriendo Egipto, Jordania, Turquía y más allá."
  },
  pt: {
    title: "Tours Multi-Países",
    subtitle: "Grandes Circuitos pelo Oriente Médio",
    desc: "Combine o Egito com a Jordânia, Turquia e Dubai em uma viagem de luxo inesquecível.",
    shortDesc: "Explore itinerários combinados abrangendo o Egito, Jordânia, Turquia e outros destinos incríveis."
  },
  ar: {
    title: "برامج الرحلات متعددة الدول",
    subtitle: "جولات كبرى عبر الشرق الأوسط والمتوسط",
    desc: "استكشف برامج سياحية متكاملة تجمع بين مصر والأردن، تركيا، اليونان ودبي في رحلة ملكية واحدة.",
    shortDesc: "استكشف برامج سياحية متكاملة تغطي مصر والأردن وتركيا ودبي لمغامرة استثنائية."
  },
  it: {
    title: "Tour Multi-Paese",
    subtitle: "Grandi Circuiti in Medio Oriente",
    desc: "Combina l'Egitto con la Giordania, la Turchia e Dubai in un unico grande viaggio.",
    shortDesc: "Esplora itinerari combinati che toccano Egitto, Giordania, Turchia e oltre."
  }
};
