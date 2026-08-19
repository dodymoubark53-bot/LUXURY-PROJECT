export interface ProgramTranslation {
  title: string;
  subtitle: string;
  desc: string;
  shortDesc: string;
}

export const classicProgramTranslations: Record<string, ProgramTranslation> = {
  en: {
    title: "Classic Egypt Programs",
    subtitle: "Timeless Wonders of the Pharaohs",
    desc: "Experience the ultimate classic Egyptian journeys combining Cairo's Pyramids and Grand Egyptian Museum with luxurious 5-star Nile River cruises from Aswan to Luxor.",
    shortDesc: "Experience the timeless beauty of Egypt with our signature classic itinerary covering all the iconic landmarks."
  },
  es: {
    title: "Programas Egipto Clásico",
    subtitle: "Maravillas Eternas de los Faraones",
    desc: "Disfrute de los circuitos clásicos por excelencia en Egipto: las Pirámides de Guiza, el Gran Museo Egipcio y cruceros de 5 estrellas por el Nilo de Asuán a Lúxor.",
    shortDesc: "Viva la magia de Egipto con nuestros itinerarios clásicos que cubren los monumentos más emblemáticos."
  },
  pt: {
    title: "Programas Egito Clássico",
    subtitle: "Maravilhas Atemporais dos Faraós",
    desc: "Roteiros clássicos combinando o Cairo, as Pirâmides e cruzeiros de luxo pelo Rio Nilo de Aswan a Luxor.",
    shortDesc: "Experimente a beleza atemporal do Egito com nossos roteiros clássicos imperdíveis."
  },
  ar: {
    title: "برامج مصر الكلاسيكية",
    subtitle: "عجائب الفراعنة الخالدة",
    desc: "استمتع بأروع البرامج الكلاسيكية التي تجمع بين أهرامات الجيزة والمتحف المصري الكبير ورحلات النيل الفاخرة 5 نجوم بين أسوان والأقصر.",
    shortDesc: "استكشف سحر مصر الخالد مع برامجنا الكلاسيكية التي تغطي جميع المعالم الأثرية الشهيرة."
  },
  it: {
    title: "Programmi Egitto Classico",
    subtitle: "Le Meraviglie dei Faraoni",
    desc: "Vivi il classico itinerario egiziano tra le Piramidi del Cairo e le crociere sul Nilo 5 stelle da Aswan a Luxor.",
    shortDesc: "Vivi la magia dell'Egitto con i nostri itinerari classici che toccano tutti i siti iconici."
  }
};
