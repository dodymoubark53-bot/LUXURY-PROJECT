export interface ProgramTranslation {
  title: string;
  subtitle: string;
  desc: string;
  shortDesc: string;
}

export const religiousProgramTranslations: Record<string, ProgramTranslation> = {
  en: {
    title: "Religious Programs",
    subtitle: "Spiritual Journey Through Sacred Heritage",
    desc: "Trace the Holy Family trail in Egypt, visit ancient Coptic monasteries of Wadi El Natrun, Saint Catherine Monastery in Mount Sinai, and biblical landmarks.",
    shortDesc: "A spiritual journey through Egypt tracing ancient Coptic monasteries and sacred sites."
  },
  es: {
    title: "Programas Religiosos",
    subtitle: "Viaje Espiritual por los Caminos Sagrados",
    desc: "Siga la huella de la Sagrada Familia en Egipto, visite los monasterios coptos milenarios de Wadi El Natrun, el Monasterio de Santa Catalina y el Monte Sinaí.",
    shortDesc: "Un recorrido espiritual único siguiendo los pasos de la Sagrada Familia y conventos coptos."
  },
  pt: {
    title: "Programas Religiosos",
    subtitle: "Jornada Espiritual no Egito",
    desc: "Siga os passos da Sagrada Família no Egito, visitando os mosteiros coptas de Wadi El Natrun e o Monte Sinai.",
    shortDesc: "Uma jornada espiritual através do Egito rastreando antigos mosteiros coptas e locais sagrados."
  },
  ar: {
    title: "البرامج الدينية",
    subtitle: "رحلة روحانية في رحاب الأماكن المقدسة",
    desc: "تتبع مسار رحلة العائلة المقدسة في مصر، وزر أديرة وادي النطرون القبطية العريقة، ودير الكاتدرائية بالمعادي، ودير سانت كاترين وجبل موسى في سيناء.",
    shortDesc: "رحلة روحانية مميزة في مصر تتبع الأديرة القبطية والمواقع المقدسة التاريخية."
  },
  it: {
    title: "Programmi Religiosi",
    subtitle: "Viaggio Spirituale nei Luoghi Santi",
    desc: "Segui le tappe della Sacra Famiglia in Egitto e visita i monasteri copti e il Monte Sinai.",
    shortDesc: "Un viaggio spirituale in Egitto alla scoperta dei monasteri copti e dei siti sacri."
  }
};
