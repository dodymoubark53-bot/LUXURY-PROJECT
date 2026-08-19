export interface ProgramTranslation {
  title: string;
  subtitle: string;
  desc: string;
  shortDesc: string;
}

export const extensionProgramTranslations: Record<string, ProgramTranslation> = {
  en: {
    title: "Egypt Extensions",
    subtitle: "Coastal Resorts & Oasis Escapes",
    desc: "Extend your Egypt journey with luxury Red Sea beach resorts in Hurghada and Sharm El Sheikh, or eco-lodge desert retreats in Siwa Oasis.",
    shortDesc: "Extend your Egypt journey with added destinations like Hurghada, Sharm El Sheikh, or Siwa Oasis."
  },
  es: {
    title: "Extensiones Egipto",
    subtitle: "Resorts del Mar Rojo y Oasis del Desierto",
    desc: "Amplíe su estancia en Egipto con días de relax en las playas del Mar Rojo (Hurghada y Sharm El Sheikh) o aventuras eco-lodge en el Oasis de Siwa.",
    shortDesc: "Añada días extra a su viaje con extensiones en la playa o en la tranquilidad del desierto."
  },
  pt: {
    title: "Extensões Egito",
    subtitle: "Resorts no Mar Vermelho e Oásis",
    desc: "Estenda sua viagem ao Egito com resorts de luxo em Hurghada e Sharm El Sheikh ou aventuras no Oásis de Siwa.",
    shortDesc: "Estenda sua jornada no Egito com destinos adicionais como Hurghada, Sharm El Sheikh ou Oásis de Siwa."
  },
  ar: {
    title: "امتدادات مصر (إضافات البرامج)",
    subtitle: "منتجعات البحر الأحمر وواحات الصحراء",
    desc: "مدد رحلتك في مصر بإضافة ليالٍ ساحرة في منتجعات البحر الأحمر بالغردقة وشرم الشيخ، أو مغامرات سيوة الصحراوية الصديقة للبيئة.",
    shortDesc: "مدد رحلتك في مصر مع وجهات إضافية مثل الغردقة، شرم الشيخ، أو واحة سيوة."
  },
  it: {
    title: "Estensioni Egitto",
    subtitle: "Resort sul Mar Rosso e Oasi",
    desc: "Estendi il tuo viaggio in Egitto con i resort del Mar Rosso a Hurghada e Sharm El Sheikh o le oasi del deserto.",
    shortDesc: "Estendi il tuo viaggio in Egitto con destinazioni come Hurghada, Sharm El Sheikh o l'Oasi di Siwa."
  }
};
