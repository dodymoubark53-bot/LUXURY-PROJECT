import { jordanTranslations } from './jordan.translations';

export interface TripItineraryDay {
  day: number | string;
  title: string;
  description: string;
  meals?: string;
}

export interface DetailedTrip {
  id: string;
  slug: string;
  code: string;
  title: string;
  destination: string;
  duration: string;
  minPax: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  overview: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: TripItineraryDay[];
}

export interface DestinationData {
  id: string;
  slug: string;
  name: string;
  heroImage: string;
  seoTitle: string;
  seoDesc: string;
  subtitle: string;
  desc: string;
  brief: string;
  translations: typeof jordanTranslations;
  tripsCount?: number;
  trips: DetailedTrip[];
}

export const jordanDestinationData: DestinationData = {
  id: "jordan",
  slug: "jordan",
  name: "Jordan",
  heroImage: "https://cdn.al-ain.com/lg/images/2022/11/24/62-021616-best-tourist-areas-jordan-4.jpeg",
  seoTitle: "Luxury Jordan Tours & Vacations | Dunas Travel",
  seoDesc: "Explore luxury journeys in Jordan with 5-star accommodations across Petra, Wadi Rum & Dead Sea.",
  subtitle: "The Rose-Red Kingdom",
  desc: "From the rose-red city of Petra to the otherworldly desert of Wadi Rum and the healing waters of the Dead Sea, Jordan is a land of timeless wonders.",
  brief: "Jordan is a treasure trove of ancient history and natural beauty. Our programs take you from the bustling streets of Amman to the silent deserts of Wadi Rum, the magnificent ruins of Petra, and the rejuvenating shores of the Dead Sea.",
  translations: jordanTranslations,
  tripsCount: 7,
  trips: [
    // 1. REG-15
    {
      id: "REG-15",
      slug: "reg-15-jordan-highlights",
      code: "REG-15",
      title: "أصالة الأردن والبتراء",
      destination: "jordan",
      duration: "4 Days / 3 Nights",
      minPax: "2 Pax",
      price: 680,
      rating: 4.8,
      reviewCount: 165,
      images: ["https://www.urtrips.net/wp-content/uploads/2019/02/Archaeological-Sites-In-Jordan-1.jpg"],
      overview: "برنامج مكثف يستعرض أهم معالم الأردن التاريخية من العاصمة عمان إلى مدينة البتراء الوردية ووادي رم والشيخ حسين.",
      highlights: [
        "جولة عمان التاريخية والقلعة",
        "زيارة مدينة البتراء الوردية",
        "سفاري وادي رم والتخييم الصحراوي",
        "استكشاف مدينة جرش الرومانية"
      ],
      included: [
        "الإقامة بالفنادق المحددة شاملة الإفطار والعشاء",
        "جميع التنقلات بسيارات حديثة مكيفة",
        "مرشد سياحي مرخص يتحدث العربية والإسبانية",
        "تذاكر دخول كافة المواقع الأثرية"
      ],
      excluded: ["التأشيرة والمشروبات والمصاريف الشخصية"],
      itinerary: [
        { day: 1, title: "الوصول إلى عمان", description: "الاستقبال في المطار والتوصيل إلى الفندق." },
        { day: 2, title: "عمان – جرش – البتراء", description: "زيارة آثار جرش الرومانية والانتقال إلى البتراء." },
        { day: 3, title: "جولة البتراء ووادي رم", description: "استكشاف السيق والتريزوري في البتراء ثم سفاري وادي رم." },
        { day: 4, title: "وادي رم – عمان / المغادرة", description: "الإفطار والتوصيل إلى المطار للمغادرة." }
      ]
    },
    // 2. REG-16
    {
      id: "REG-16",
      slug: "reg-16-petra-wadi-rum-express",
      code: "REG-16",
      title: "سحر البتراء ووادي رم",
      destination: "jordan",
      duration: "5 Days / 4 Nights",
      minPax: "2 Pax",
      price: 890,
      rating: 4.9,
      reviewCount: 142,
      images: ["https://cdn.alweb.com/thumbs/jordanencyclopedia/article/fit710x532/%D8%A3%D9%83%D8%A8%D8%B1-%D9%8./.jpg"],
      overview: "رحلة مميزة تغوص في أعماق البتراء الوردية مع إقامة فريدة في مخيمات وادي رم الفاخرة تحت النجوم.",
      highlights: [
        "إقامة في مخيم فقاعي شفاف بوادي رم",
        "جولة كاملة في البتراء الأثرية",
        "تجربة العشاء البدوي التقليدي (الزرب)"
      ],
      included: ["الإقامة والإفطار والعشاء والتنقلات والمرشد وتذاكر الدخول"],
      excluded: ["مصاريف شخصية وتذاكر الطيران"],
      itinerary: [
        { day: 1, title: "عمان", description: "الوصول والاستقبال." },
        { day: 2, title: "عمان – مادبا – جبل نيبو – البتراء", description: "زيارة خريطة الفسيفساء في مادبا وجبل نيبو." },
        { day: 3, title: "البتراء – وادي رم", description: "جولة البتراء والانتقال إلى المخيم الصحراوي." },
        { day: 4, title: "وادي رم – البحر الميت – عمان", description: "الاستجمام بالبحر الميت والعودة إلى عمان." },
        { day: 5, title: "المغادرة", description: "التوصيل للمطار." }
      ]
    },
    // 3. REG-17
    {
      id: "REG-17",
      slug: "reg-17-jordan-grand-classic",
      code: "REG-17",
      title: "كلاسيكيات الأردن الشاملة",
      destination: "jordan",
      duration: "6 Days / 5 Nights",
      minPax: "2 Pax",
      price: 990,
      rating: 4.85,
      reviewCount: 198,
      images: ["https://as2.ftcdn.net/v2/jpg/01/67/01/83/1000_F_167018309_n4U66E0FtjpdX5HpidLKSNetfnbayUib.jpg"],
      overview: "برنامج متكامل يربط بين تاريخ عمان العريق، مدينة جرش الرومانية، قلعة عجلون، البتراء، وادي رم، والبحر الميت.",
      highlights: ["قلعة عجلون ومادبا وجبل نيبو والبتراء وسفاري وادي رم 4x4 وتجربة الطفو بالبحر الميت"],
      included: ["إقامة 5 نجوم مع وجبتين يومياً ورسوم الدخول والمرشد الخاص"],
      excluded: ["التأشيرة والنفقات الشخصية"],
      itinerary: [
        { day: 1, title: "الوصول", description: "الاستقبال والتوصيل للفندق." },
        { day: 2, title: "عمان – جرش – عجلون – عمان", description: "زيارة الآثار الرومانية والقلاع الإسلامية." },
        { day: 3, title: "عمان – مادبا – نيبو – الشوبك – البتراء", description: "طريق الملوك وقلعة الشوبك." },
        { day: 4, title: "البتراء الكاملة", description: "استكشاف السيق، الدير، والخزنة." },
        { day: 5, title: "البتراء – وادي رم – البحر الميت", description: "جولة الجيب بالصحراء الساحرة ثم البحر الميت." },
        { day: 6, title: "المغادرة", description: "التوصيل للمطار." }
      ]
    },
    // 4. REG-18
    {
      id: "REG-18",
      slug: "reg-18-wonders-of-jordan",
      code: "REG-18",
      title: "عجائب الأردن والبحر الميت",
      destination: "jordan",
      duration: "7 Days / 6 Nights",
      minPax: "2 Pax",
      price: 1150,
      rating: 4.9,
      reviewCount: 220,
      images: ["https://thf.bing.com/th/id/R.163b5da11482baa539001f4a45596dcf?rik=4f9diCHlS0FjAQ&pid=ImgRaw&r=0"],
      overview: "البرنامج الأكثر شعبية لاستكشاف كامل ملكوت الأردن مع يوم كامل للاسترخاء والعلاج الطبيعي في البحر الميت.",
      highlights: ["البتراء، وادي رم، البحر الميت، المغطس، جرش وعمان"],
      included: ["الإقامة الكاملة مع التنقلات والدخوليات والمرشدين"],
      excluded: ["تذاكر الطيران وتأشيرة الدخول"],
      itinerary: [
        { day: 1, title: "الوصول إلى عمان", description: "الاستقبال والتنسيق." },
        { day: 2, title: "جولة عمان وجرش", description: "استكشاف المدرج الروماني ومعبد هركليز وجرش." },
        { day: 3, title: "مادبا ونيبو والبتراء", description: "زيارة الكنائس التاريخية والوصول للبتراء." },
        { day: 4, title: "عجائب البتراء", description: "جولة كاملة في المدينة الوردية." },
        { day: 5, title: "وادي رم", description: "سفاري 4x4 ومبيت تحت النجوم." },
        { day: 6, title: "منتجع البحر الميت", description: "يوم استجمام وطفو في مياه البحر الميت." },
        { day: 7, title: "المغادرة", description: "التوصيل للمطار." }
      ]
    },
    // 5. REG-19
    {
      id: "REG-19",
      slug: "reg-19-jordan-explorer-luxury",
      code: "REG-19",
      title: "مكتشف الأردن الملكي",
      destination: "jordan",
      duration: "8 Days / 7 Nights",
      minPax: "2 Pax",
      price: 1320,
      rating: 4.95,
      reviewCount: 180,
      images: ["https://i.pinimg.com/originals/ea/82/aa/ea82aa3795de28e223cefe6e8cd72ed4.jpg"],
      overview: "رحلة ملكية فاخرة تغطي شمال وجنوب الأردن مع العقبة والبحر الأحمر والبتراء ووادي رم.",
      highlights: ["خليج العقبة والبحر الأحمر، البتراء، وادي رم، البحر الميت وجرش"],
      included: ["فنادق ومنتجعات 5 نجوم ممتازة وشاملة الخدمات"],
      excluded: ["المشروبات والطلبات الخاصة"],
      itinerary: [
        { day: 1, title: "الوصول", description: "الاستقبال في المطار." },
        { day: 2, title: "عمان وجرش وعجلون", description: "جولة تاريخية كاملة." },
        { day: 3, title: "مادبا ونيبو إلى البتراء", description: "المعالم الدينية والمسيحية." },
        { day: 4, title: "جولة البتراء", description: "استكشاف المدينة النبطية." },
        { day: 5, title: "وادي رم – العقبة", description: "سفاري صحراوي ثم السفر لمنتجع العقبة على البحر الأحمر." },
        { day: 6, title: "العقبة إلى البحر الميت", description: "جولة البحر الأحمر ثم الانتقال للبحر الميت." },
        { day: 7, title: "البحر الميت واستجمام", description: "يوم كامل بالمنتجع." },
        { day: 8, title: "المغادرة", description: "التوصيل إلى مطار عمان." }
      ]
    },
    // 6. REG-20
    {
      id: "REG-20",
      slug: "reg-20-jordan-holy-heritage",
      code: "REG-20",
      title: "تراث الأردن والمقدسات",
      destination: "jordan",
      duration: "5 Days / 4 Nights",
      minPax: "2 Pax",
      price: 790,
      rating: 4.8,
      reviewCount: 110,
      images: ["https://www.opreismetco.nl/wp-content/uploads/2023/05/Citadel-van-Amman-min-585x390.jpg"],
      overview: "رحلة تراثية تركز على القلاع الإسلامية والمواقع الدينية والأثرية الهامة بالأردن.",
      highlights: ["موقع عماد السيد المسيح (المغطس)، جبل نيبو، البتراء وجرش"],
      included: ["إقامة فنادق 4/5 نجوم مع الإفطار والعشاء والمرشد والتنقلات"],
      excluded: ["التأشيرة والخدمات الشخصية"],
      itinerary: [
        { day: 1, title: "عمان", description: "الوصول والاستقبال." },
        { day: 2, title: "المغطس ومادبا ونيبو", description: "زيارة المغطس على نهر الأردن ومادبا." },
        { day: 3, title: "البتراء", description: "جولة في البتراء والعودة لعمان." },
        { day: 4, title: "جرش وعمان", description: "استكشاف الآثار الرومانية." },
        { day: 5, title: "المغادرة", description: "التوصيل للمطار." }
      ]
    },
    // 7. REG-21
    {
      id: "REG-21",
      slug: "reg-21-jordan-desert-and-sea",
      code: "REG-21",
      title: "صحراء الأردن وشواطئه",
      destination: "jordan",
      duration: "6 Days / 5 Nights",
      minPax: "2 Pax",
      price: 920,
      rating: 4.85,
      reviewCount: 135,
      images: ["https://png.pngtree.com/thumb_back/fh260/background/20220313/pngtree-ruins-at-amman-jordan-moyen-minaret-asia-photo-image_365536.jpg"],
      overview: "رحلة تجمع بين سحر صحراء وادي رم وجمال شواطئ البحر الميت والبتراء التاريخية.",
      highlights: ["تخييم وادي رم، البتراء، شواطئ البحر الميت وعمان"],
      included: ["الخدمات السياحية الكافية والتنقلات والإقامة"],
      excluded: ["المصاريف الشخصية والطيران"],
      itinerary: [
        { day: 1, title: "الوصول", description: "الاستقبال والاستقرار." },
        { day: 2, title: "عمان إلى البتراء", description: "زيارة البتراء والمبيت فيها." },
        { day: 3, title: "البتراء – وادي رم", description: "سفاري صحراوي ومبيت تحت النجوم." },
        { day: 4, title: "وادي رم – البحر الميت", description: "الانتقال للبحر الميت والطفو." },
        { day: 5, title: "البحر الميت – عمان", description: "جولة تسوق بعمان والمبيت." },
        { day: 6, title: "المغادرة", description: "التوصيل للمطار." }
      ]
    }
  ]
};

export default jordanDestinationData;
