export interface DestinationTranslation {
  title: string;
  subtitle: string;
  desc: string;
  brief: string;
  seoTitle: string;
  seoDesc: string;
}

export const holyLandTranslations: Record<string, DestinationTranslation> = {
  en: {
    title: "Holy Land",
    subtitle: "Sacred Spiritual Heritage",
    desc: "Experience spiritual journeys to sacred historical sites.",
    brief: "The Holy Land holds sacred significance for major spiritual traditions, offering deep historical and cultural heritage.",
    seoTitle: "Holy Land Tours | Dunas Travel",
    seoDesc: "Explore spiritual itineraries in the Holy Land."
  },
  es: {
    title: "Tierra Santa",
    subtitle: "Patrimonio Espiritual Sagrado",
    desc: "Descubra circuitos espirituales en lugares sagrados.",
    brief: "Tierra Santa alberga monumentos y lugares de incalculable valor histórico y espiritual.",
    seoTitle: "Viajes a Tierra Santa | Dunas Travel",
    seoDesc: "Circuitos culturales y espirituales en Tierra Santa."
  },
  pt: {
    title: "Terra Santa",
    subtitle: "Patrimônio Espiritual Sagrado",
    desc: "Jornadas espirituais e culturais por locais sagrados.",
    brief: "A Terra Santa oferece uma profunda imersão em locais de grande relevância espiritual.",
    seoTitle: "Viagens para a Terra Santa | Dunas Travel",
    seoDesc: "Roteiros espirituais e culturais na Terra Santa."
  },
  ar: {
    title: "الأراضي المقدسة",
    subtitle: "التراث الروحي المقدّس",
    desc: "رحلات وتجارب روحانية في الأماكن المقدسة والمعالم التاريخية العريقة.",
    brief: "تضم الأراضي المقدسة مواقع ذات أهمية تاريخية وروحية كبرى، وتقدم إرثاً حضارياً وثقافياً عميقاً.",
    seoTitle: "رحلات الأراضي المقدسة | دوناس ترافيل",
    seoDesc: "استكشف برامج الأراضي المقدسة والدينية مع دوناس ترافيل."
  },
  it: {
    title: "Terra Santa",
    subtitle: "Patrimonio Spirituale Sacro",
    desc: "Viaggi spirituali e culturali nei luoghi santi.",
    brief: "La Terra Santa racchiude un patrimonio di inestimabile valore storico e spirituale.",
    seoTitle: "Tour in Terra Santa | Dunas Travel",
    seoDesc: "Itinerari culturali e religiosi in Terra Santa."
  }
};
