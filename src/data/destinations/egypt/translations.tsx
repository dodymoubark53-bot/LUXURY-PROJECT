export interface TripTranslationItem {
  title: string;
  overview: string;
  duration: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: { day: number | string; title: string; description: string }[];
}

export interface DestinationTranslation {
  title: string;
  subtitle: string;
  desc: string;
  brief: string;
  seoTitle: string;
  seoDesc: string;
  programsTitle: string;
  programsSubtitle: string;
  programsDesc: string;
  ctaLabel: string;
  ctaTitle: string;
  ctaDesc: string;
}

export const egyptTranslations: Record<string, DestinationTranslation> = {
  en: {
    title: "Egypt",
    subtitle: "Land of the Pharaohs",
    desc: "From the timeless Pyramids of Giza to the golden temples of Luxor and the crystal waters of the Red Sea, Egypt offers a journey through history like no other.",
    brief: "A civilisation that has captivated the world for millennia. Egypt blends monumental history with warm hospitality and breathtaking landscapes — from the iconic Pyramids and the Nile cruise to the coral reefs of the Red Sea. Every itinerary is crafted to deliver maximum comfort, luxury and authentic cultural immersion.",
    seoTitle: "Luxury Egypt Tours & Vacations | Dunas Travel",
    seoDesc: "Discover Egypt in grand style. From the majestic Pyramids of Giza to the temples of Luxor and the Red Sea coast, embark on an unforgettable luxury journey.",
    programsTitle: "Exclusive Egypt Experiences",
    programsSubtitle: "Egypt Programs",
    programsDesc: "Discover our curated programs designed to make your Egypt journey truly unforgettable.",
    ctaLabel: "DIDN'T FIND WHAT YOU'RE LOOKING FOR?",
    ctaTitle: "Let us design your perfect Egypt tour",
    ctaDesc: "Tell us your preferences, and our expert travel designers will craft a bespoke itinerary tailored just for you."
  },
  es: {
    title: "Egipto",
    subtitle: "Tierra de los Faraones",
    desc: "Desde las milenarias Pirámides de Guiza hasta los templos dorados de Lúxor y las cristalinas aguas del Mar Rojo.",
    brief: "Una civilización que ha fascinado al mundo durante milenios. Egipto combina historia monumental con hospitalidad y paisajes impresionantes: desde las icónicas Pirámides y el crucero por el Nilo hasta los arrecifes del Mar Rojo.",
    seoTitle: "Viajes de Lujo a Egipto | Dunas Travel",
    seoDesc: "Descubra Egipto con la máxima elegancia. Desde las Pirámides de Guiza hasta los templos de Lúxor y la costa del Mar Rojo.",
    programsTitle: "Experiencias Exclusivas en Egipto",
    programsSubtitle: "Programas de Egipto",
    programsDesc: "Descubra nuestros programas diseñados para hacer que su viaje a Egipto sea inolvidable.",
    ctaLabel: "¿NO ENCONTRÓ LO QUE BUSCABA?",
    ctaTitle: "Diseñemos su viaje perfecto a Egipto",
    ctaDesc: "Cuéntenos sus preferencias y nuestros diseñadores de viajes expertos crearán un itinerario a medida solo para usted."
  },
  pt: {
    title: "Egito",
    subtitle: "Terra dos Faraós",
    desc: "Das milenares Pirâmides de Gizé aos templos de Luxor e às águas cristalinas do Mar Vermelho.",
    brief: "Uma civilização que fascina o mundo há milênios. O Egito combina história monumental com cruzeiros de luxo e paisagens deslumbrantes.",
    seoTitle: "Pacotes de Luxo no Egito | Dunas Travel",
    seoDesc: "Descubra o Egito em grande estilo. Das majestosas Pirâmides de Gizé aos templos de Luxor e à costa do Mar Vermelho.",
    programsTitle: "Experiências Exclusivas no Egito",
    programsSubtitle: "Programas do Egito",
    programsDesc: "Descubra nossos programas selecionados para tornar sua viagem ao Egito inesquecível.",
    ctaLabel: "NÃO ENCONTROU O QUE PROCURAVA?",
    ctaTitle: "Deixe-nos projetar sua viagem perfeita ao Egito",
    ctaDesc: "Conte-nos suas preferências e nossos especialistas criarão um itinerário sob medida para você."
  },
  ar: {
    title: "مصر",
    subtitle: "أرض الفراعنة",
    desc: "من أهرامات الجيزة الخالدة إلى معابد الأقصر الذهبية ومياه البحر الأحمر البلورية، تقدم مصر رحلة عبر التاريخ لا مثيل لها.",
    brief: "حضارة أسرت العالم لآلاف السنين. تجمع مصر بين التاريخ الهائل والضيافة الدافئة والمناظر الطبيعية الخلابة — من الأهرامات ورحلات النيل إلى شعب البحر الأحمر المرجانية. تم تصميم كل برنامج لتقديم أعلى مستويات الراحة والفخامة.",
    seoTitle: "رحلات مصر الفاخرة | دوناس ترافيل",
    seoDesc: "اكتشف مصر بأسلوب ملكي فاخر. من أهرامات الجيزة إلى معابد الأقصر وشواطئ البحر الأحمر، انطلق في رحلة لا تُنسى.",
    programsTitle: "تجارب مصر الحصرية",
    programsSubtitle: "برامج مصر",
    programsDesc: "اكتشف برامجنا الممتازة المصممة لتجعل رحلتك إلى مصر استثنائية.",
    ctaLabel: "لم تجد ما تبحث عنه؟",
    ctaTitle: "دعنا نصمم رحلتك المثالية إلى مصر",
    ctaDesc: "أخبرنا بتفضيلاتك، وسيقوم خبراء تصميم الرحلات لدينا بإنشاء برنامج مخصص لك تماماً."
  },
  it: {
    title: "Egitto",
    subtitle: "Terra dei Faraoni",
    desc: "Dalle Piramidi di Giza ai templi di Luxor e alle acque del Mar Rosso, l'Egitto offre un viaggio nella storia senza eguali.",
    brief: "Una civiltà che affascina il mondo da millenni. L'Egitto unisce storia monumentale, crociere sul Nilo e splendidi paesaggi.",
    seoTitle: "Tour di Lusso in Egitto | Dunas Travel",
    seoDesc: "Scopri l'Egitto in grande stile. Dalle maestose Piramidi di Giza ai templi di Luxor e alla costa del Mar Rosso.",
    programsTitle: "Esperienze Esclusive in Egitto",
    programsSubtitle: "Programmi Egitto",
    programsDesc: "Scopri i nostri programmi curati per rendere il tuo viaggio in Egitto indimenticabile.",
    ctaLabel: "NON HAI TROVATO QUELLO CHE CERCAVI?",
    ctaTitle: "Lasciaci progettare il tuo tour perfetto in Egitto",
    ctaDesc: "Raccontaci le tue preferenze e i nostri esperti designer di viaggio creanti un itinerario su misura per te."
  }
};

export const egyptTripsTranslations: Record<string, Record<string, TripTranslationItem>> = {
  "eg-br-001": {
    ar: {
      title: "القاهرة إكسبريس",
      duration: "4 أيام / 3 ليالٍ",
      overview: "رحلة مكثفة لمدة 4 أيام تستكشف قلب مصر القديمة: أهرامات الجيزة، أبوالهول، منف، سكارى، المتحف المصري الكبير، ومسجد الألاباستر وبازار خان الخليلي.",
      highlights: ["أهرامات الجيزة وأبو الهول", "منف وسقارة", "المتحف المصري الكبير (GEM)", "سوق خان الخليلي"],
      included: ["الإقامة 3 ليالٍ بالقاهرة مع الإفطار", "جميع التنقلات بسيارات حديثة مكيفة", "مرشد سياحي مرخص", "تذاكر كافة المعالم المحددة"],
      excluded: ["المشروبات خلال الوجبات", "الإكراميات المباشرة", "تأشيرة الدخول 35$"],
      itinerary: [
        { day: 1, title: "الوصول للقاهرة", description: "الاستقبال في المطار والتوصيل للفندق." },
        { day: 2, title: "الأهرامات وأبو الهول وسقارة", description: "زيارة أهرامات الجيزة، تمثال أبو الهول، ومقابر سقارة الهرم المدرج." },
        { day: 3, title: "المتحف الكبير ومصر القديمة وخان الخليلي", description: "زيارة المتحف المصري الكبير، مجمع الأديان، وبازار خان الخليلي." },
        { day: 4, title: "المغادرة", description: "التوصيل للمطار للمغادرة النهائية." }
      ]
    },
    en: {
      title: "Cairo Express",
      duration: "4 Days / 3 Nights",
      overview: "Intense four-day itinerary exploring the heart of Ancient Egypt. Visit the Pyramids of Giza, the Sphinx, Memphis, Sakkara, the Grand Egyptian Museum, the Alabaster Mosque, and Khan El Khalili Bazaar.",
      highlights: ["Giza Pyramids & Sphinx", "Memphis & Sakkara", "Grand Egyptian Museum (GEM)", "Khan El Khalili Bazaar"],
      included: ["3 nights hotel stay in Cairo with breakfast", "Airport / Hotel transfers", "Guided tours with licensed Egyptologist", "Entrance fees to specified sites"],
      excluded: ["Drinks during meals", "Tips", "Entry visa $35"],
      itinerary: [
        { day: 1, title: "Arrival in Cairo", description: "Airport reception and hotel transfer." },
        { day: 2, title: "Pyramids, Sphinx, Memphis & Sakkara", description: "Guided tour of Giza Pyramids, Sphinx, Memphis, and Sakkara." },
        { day: 3, title: "Grand Egyptian Museum (GEM) & Old Cairo", description: "Visit GEM, Alabaster Mosque, Coptic Quarter, and Khan El Khalili." },
        { day: 4, title: "Departure", description: "Hotel check-out and final airport transfer." }
      ]
    },
    es: {
      title: "El Cairo Express",
      duration: "4 Días / 3 Noches",
      overview: "Itinerario intenso de cuatro días explorando el corazón del Antiguo Egipto: Pirámides de Guiza, Esfinge, Menfis, Saqqara, Gran Museo Egipcio y Zoco Khan El Khalili.",
      highlights: ["Pirámides de Guiza y Esfinge", "Menfis y Saqqara", "Gran Museo Egipcio (GEM)", "Mercado Khan El Khalili"],
      included: ["03 noches de hotel en El Cairo con desayuno", "Traslados de aeropuerto", "Guía egiptólogo oficial", "Entradas a monumentos indicados"],
      excluded: ["Bebidas", "Propinas", "Visado $35"],
      itinerary: [
        { day: 1, title: "Llegada a El Cairo", description: "Recepción en el aeropuerto y traslado al hotel." },
        { day: 2, title: "Pirámides, Esfinge y Saqqara", description: "Visita guiada a las Pirámides de Guiza, la Esfinge y Saqqara." },
        { day: 3, title: "Gran Museo Egipcio y Barrio Copto", description: "Visita al GEM, Mezquita de Alabastro y Khan El Khalili." },
        { day: 4, title: "Salida", description: "Traslado al aeropuerto para vuelo internacional." }
      ]
    }
  },
  "eg-es-001": {
    ar: {
      title: "اكتشاف مصر: النيل الأسطوري",
      duration: "8 أيام / 7 ليالٍ",
      overview: "استمتع بسحر أهرامات الجيزة وابحر في كروز 5 نجوم فاخر عبر نهر النيل من أسوان إلى الأقصر برفقة مرشد سياحي متخصص.",
      highlights: ["أهرامات الجيزة وأبو الهول", "كروز النيل 5 نجوم إقامة كاملة", "وادي الملوك ومعبد الكرنك", "معبد فيلة ورحلة الفلوكة بأسوان"],
      included: ["3 ليالٍ بالفندق بالقاهرة مع الإفطار", "4 ليالٍ بكروز النيل مع وجبات كاملة", "طيران داخلي (القاهرة/أسوان - الأقصر/القاهرة)", "مرشد مصريات متخصص"],
      excluded: ["طيران دولي", "تأشيرة دخول 35$", "إكراميات المراكبية والمرشد"],
      itinerary: [
        { day: 1, title: "الوصول للقاهرة", description: "الاستقبال والتوصيل لفندق 5 نجوم." },
        { day: 2, title: "الأهرامات والمتحف المصري الكبير", description: "زيارة أهرامات الجيزة، أبو الهول، والمتحف المصري الكبير." },
        { day: 3, title: "طيران لأسوان ومعبد فيلة", description: "السفر لأسوان، زيارة معبد إيزيس بالفيلة، والإبحار بالنيل." },
        { day: 4, title: "كوم أمبو وإدفو", description: "الإبحار وزيارة معبد سوبيك بكوم أمبو ومعبد حورس بإدفو." },
        { day: 5, title: "الأقصر ومعابد الفراعنة", description: "زيارة وادي الملوك، معبد حتشبسوت، ومعابد الكرنك والأقصر." },
        { day: 6, title: "الأقصر – العودة للقاهرة", description: "مغادرة الكروز والسفر بالطيران الداخلي للقاهرة." },
        { day: 7, title: "القاهرة التاريخية والأسواق", description: "جولة خان الخليلي ومصر القديمة." },
        { day: 8, title: "المغادرة", description: "التوصيل للمطار النهائي." }
      ]
    },
    en: {
      title: "Discovering Egypt: The Legendary Nile",
      duration: "8 Days / 7 Nights",
      overview: "Enjoy the magic of the Giza Pyramids and cruise down the legendary Nile River on a 5-star ship from Aswan to Luxor with expert guide.",
      highlights: ["Giza Pyramids & Sphinx", "5-Star Nile Cruise Full Board", "Valley of the Kings & Karnak Temple", "Philae Temple & Felucca Ride in Aswan"],
      included: ["3 nights Cairo hotel with breakfast", "4 nights Nile Cruise with full board", "Domestic flights Cairo/Aswan - Luxor/Cairo", "Expert Egyptologist guide"],
      excluded: ["International flights", "Entry visa $35", "Tips"],
      itinerary: [
        { day: 1, title: "Arrival in Cairo", description: "Reception and luxury transfer." },
        { day: 2, title: "Pyramids & Grand Egyptian Museum", description: "Tour of Pyramids, Sphinx, and GEM." },
        { day: 3, title: "Flight to Aswan & Philae Temple", description: "Flight to Aswan, Philae visit, and cruise embarkation." },
        { day: 4, title: "Kom Ombo & Edfu Temples", description: "Sail down the Nile visiting ancient riverbank temples." },
        { day: 5, title: "Luxor Valley of Kings & Karnak", description: "West and East Bank temples of Luxor." },
        { day: 6, title: "Luxor to Cairo Flight", description: "Disembark and domestic flight back to Cairo." },
        { day: 7, title: "Historic Cairo", description: "Khan El Khalili bazaar and Coptic district." },
        { day: 8, title: "Final Departure", description: "Transfer to airport." }
      ]
    }
  }
};

export default egyptTranslations;
