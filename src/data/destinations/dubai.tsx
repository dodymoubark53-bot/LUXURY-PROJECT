import { dubaiTranslations } from './dubai.translations';
import { DetailedTrip, DestinationData } from './jordan';

export const dubaiDestinationData: DestinationData = {
  id: "dubai",
  slug: "dubai",
  name: "Dubai & UAE",
  heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
  seoTitle: "Luxury Dubai Tours & Experiences | Dunas Travel",
  seoDesc: "Explore Burj Khalifa, Atlantis The Royal, Abu Dhabi, and VIP desert safaris in Dubai.",
  subtitle: "Future City & Arabian Glamour",
  desc: "Experience ultra-modern architecture, luxury desert safaris, world-class shopping, and Arabian hospitality.",
  brief: "Dubai is a futuristic metropolis that offers marvels like Burj Khalifa, Palm Jumeirah, and high-end desert glamping.",
  translations: dubaiTranslations,
  tripsCount: 9,
  trips: [
    // 1. REG-22
    {
      id: "REG-22",
      slug: "reg-22-dubai-highlights",
      code: "REG-22",
      title: "سحر دبي الحديثة",
      destination: "dubai",
      duration: "4 Days / 3 Nights",
      minPax: "2 Pax",
      price: 690,
      rating: 4.8,
      reviewCount: 160,
      images: ["https://wallpaperaccess.com/full/222675.jpg"],
      overview: "برنامج مكثف يستعرض أهم معالم دبي العصرية من برج خليفة ودبي مول ومتحف المستقبل إلى سفاري الصحراء.",
      highlights: ["صعود برج خليفة قمة العالم، متحف المستقبل، وسفاري الصحراء مع العشاء"],
      included: ["الإقامة مع الإفطار، التنقلات الخاصة، التذاكر والتأشيرة (حسب الباقة)"],
      excluded: ["المصاريف الشخصية والمشروبات"],
      itinerary: [
        { day: 1, title: "الوصول دبي", description: "الاستقبال والتوصيل بالفندق." },
        { day: 2, title: "دبي الحديثة وبرج خليفة", description: "برج خليفة ودبي مول ونافورة دبي." },
        { day: 3, title: "سفاري الصحراء VIP", description: "سفاري الجيب والرمال والعشاء البدوية." },
        { day: 4, title: "المغادرة", description: "التوصيل للمطار." }
      ]
    },
    // 2. REG-23
    {
      id: "REG-23",
      slug: "reg-23-dubai-and-abu-dhabi",
      code: "REG-23",
      title: "دبي وأبوظبي الكبرى",
      destination: "dubai",
      duration: "5 Days / 4 Nights",
      minPax: "2 Pax",
      price: 890,
      rating: 4.9,
      reviewCount: 210,
      images: ["/imgs/programs/dubai-reg-23.webp"],
      overview: "جمع رائع بين سحر دبي وفخامة العاصمة أبوظبي مع زيارة جامع الشيخ زايد وقصر الوطن.",
      highlights: ["جامع الشيخ زايد، قصر الوطن بأبوظبي، متحف اللوفر، وبرج خليفة"],
      included: ["الفنادق 5 نجوم، التنقلات الخاصة الفاخرة والدخوليات"],
      excluded: ["الطيران الدولي والتسوق الشخصي"],
      itinerary: [
        { day: 1, title: "الوصول دبي", description: "الاستقبال والتوصيل." },
        { day: 2, title: "معالم دبي", description: "نخلة جميرا وبرج خليفة." },
        { day: 3, title: "جولة أبوظبي الكبرى", description: "جامع الشيخ زايد وقصر الوطن واللوفر." },
        { day: 4, title: "سفاري الصحراء", description: "العشاء البدوي والدبابات." },
        { day: 5, title: "المغادرة", description: "التوصيل للمطار." }
      ]
    },
    // 3. REG-24
    {
      id: "REG-24",
      slug: "reg-24-dubai-luxury-shopping",
      code: "REG-24",
      title: "دبي الفاخرة والتسوق الملكي",
      destination: "dubai",
      duration: "6 Days / 5 Nights",
      minPax: "2 Pax",
      price: 1150,
      rating: 4.85,
      reviewCount: 175,
      images: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/cf/55/ba/caption.jpg?w=1200&h=1200&s=1"],
      overview: "رحلة تسوق رفيعة المستوى تشمل مول الإمارات، دبي مول، والأسواق الذهبية مع إقامة في أرقى الفنادق.",
      highlights: ["دبي مول، مول الإمارات ومجمع التزلج الداخلي، وسوق الذهب والتوابل"],
      included: ["الفنادق والخدمات والتنقلات الخاصة VIP"],
      excluded: ["المشتريات الشخصية"],
      itinerary: [
        { day: 1, title: "الوصول", description: "الاستقبال الملكي." },
        { day: 2, title: "دبي مول والتسوق", description: "برج خليفة والمول." },
        { day: 3, title: "مول الإمارات وسكي دبي", description: "التزلج والتسوق." },
        { day: 4, title: "الأسواق التراثية وسفاري", description: "سوق الذهب وسفاري." },
        { day: 5, title: "دبي مارينا ويخت خاص", description: "جولة اليخت." },
        { day: 6, title: "المغادرة", description: "التوصيل للمطار." }
      ]
    },
    // 4. REG-25
    {
      id: "REG-25",
      slug: "reg-25-emirates-grand-tour",
      code: "REG-25",
      title: "جراند تور الإمارات (دبي، أبوظبي، والشارقة)",
      destination: "dubai",
      duration: "7 Days / 6 Nights",
      minPax: "2 Pax",
      price: 1350,
      rating: 4.95,
      reviewCount: 230,
      images: ["https://www.yasmina.com/tachyon/sites/5/2022/01/7f96899cbdde462971ae6a503d3a61cfc65f50a1.jpg"],
      overview: "جولة كبرى تغطي 3 إمارات: دبي الحديثة، أبوظبي الملكية، والشارقة عاصمة الثقافة الإسلامية.",
      highlights: ["الشارقة الثقافية، دبي العصرية، وأبوظبي الملكية"],
      included: ["الإقامة 6 ليالٍ والتنقلات الكاملة والدخوليات"],
      excluded: ["المصاريف الشخصية"],
      itinerary: [
        { day: 1, title: "الوصول دبي", description: "الاستقبال." },
        { day: 2, title: "دبي الكاملة", description: "المعالم الرئيسية." },
        { day: 3, title: "الشارقة الثقافية", description: "متحف الحضارة الإسلامية وسوق العرصة." },
        { day: 4, title: "أبوظبي والشيخ زايد", description: "المعالم العظمى بالعاصمة." },
        { day: 5, title: "سفاري رمال دبي", description: "مغامرات الصحراء." },
        { day: 6, title: "شاطئ مارينا واليخت", description: "جولة بحرية." },
        { day: 7, title: "المغادرة", description: "التوصيل للمطار." }
      ]
    },
    // 5. REG-26
    {
      id: "REG-26",
      slug: "reg-26-dubai-desert-glamping",
      code: "REG-26",
      title: "تخييم المها الفاخر بسباقات الصحراء",
      destination: "dubai",
      duration: "5 Days / 4 Nights",
      minPax: "2 Pax",
      price: 1280,
      rating: 4.9,
      reviewCount: 140,
      images: ["https://i.pinimg.com/736x/7b/a8/4e/7ba84eb916025464c345151b07fc4604.jpg"],
      overview: "إقامة استثنائية في منتجعات الصحراء الفاخرة مع حمامات سباحة خاصة بين الكثبان الرملية.",
      highlights: ["منتجع صحراوي 5 نجوم، سفاري منطاد الصحراء، وعشاء الفخامة البدوية"],
      included: ["المنتجع الصحراوي والوجبات وجولات الصحراء VIP"],
      excluded: ["الطيران"],
      itinerary: [
        { day: 1, title: "الوصول والانتقال للمنتجع الصحراوي", description: "الاستقبال وتجربة الفندق الصحراوي." },
        { day: 2, title: "سفاري المنطاد والغزلان", description: "مشاهدة الغزلان والمها العربية." },
        { day: 3, title: "الانتقال لـ دبي مارينا", description: "فندق دبي وشاطئ مارينا." },
        { day: 4, title: "برج خليفة والتسوق", description: "المعالم الحديثة." },
        { day: 5, title: "المغادرة", description: "التوصيل للمطار." }
      ]
    },
    // 6. REG-27
    {
      id: "REG-27",
      slug: "reg-27-dubai-theme-parks-family",
      code: "REG-27",
      title: "دبي العائلية والمدن الترفيهية",
      destination: "dubai",
      duration: "6 Days / 5 Nights",
      minPax: "2 Pax",
      price: 1090,
      rating: 4.88,
      reviewCount: 290,
      images: ["/imgs/programs/dubai-reg-27.webp"],
      overview: "برنامج عائلي ممتع يشمل زيارة مدينة آي إم جي ورلد وموشنجيت ودبي باركس وأتلانتس أควابارك.",
      highlights: ["أكوابارك أتلانتس، موشنجيت، دبي باركس، ودبي أكواريوم"],
      included: ["تذاكر مدن الألعاب العائلية والإقامة والتنقلات"],
      excluded: ["المشتريات الشخصية"],
      itinerary: [
        { day: 1, title: "الوصول", description: "التوصيل للفندق." },
        { day: 2, title: "دبي باركس وموشنجيت", description: "يوم الألعاب والسينما." },
        { day: 3, title: "أكوابارك أتلانتس النخلة", description: "أكبر مدينة ألعاب مائية." },
        { day: 4, title: "دبي مول والأكواريوم وبرج خليفة", description: "العجائب البحرية والبرج." },
        { day: 5, title: "سفاري الصحراء العائلي", description: "العشاء والتخييم." },
        { day: 6, title: "المغادرة", description: "التوصيل للمطار." }
      ]
    },
    // 7. REG-28
    {
      id: "REG-28",
      slug: "reg-28-dubai-and-fujairah-beach",
      code: "REG-28",
      title: "استجمام دبي والفجيرة الساحلية",
      destination: "dubai",
      duration: "7 Days / 6 Nights",
      minPax: "2 Pax",
      price: 1190,
      rating: 4.85,
      reviewCount: 160,
      images: ["https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=800&q=80"],
      overview: "دمج مثالي بين صخب وأبراج دبي وراحة وشواطئ إمارة الفجيرة على المحيط الهندي.",
      highlights: ["شواطئ الفجيرة والمحيط الهندي، جبال الحجر، وبرج خليفة"],
      included: ["فنادق دبي والفجيرة والتنقلات والوجبات"],
      excluded: ["الأنشطة المائية الخاصة"],
      itinerary: [
        { day: 1, title: "الوصول دبي", description: "الاستقبال." },
        { day: 2, title: "معالم دبي", description: "برج خليفة والنخلة." },
        { day: 3, title: "دبي – الفجيرة", description: "الانتقال عبر جبال الحجر لمنتجع الفجيرة." },
        { day: 4, title: "الفجيرة والغوص", description: "استجمام على المحيط الهندي." },
        { day: 5, title: "الفجيرة – دبي", description: "العودة لدبي وسفاري الصحراء." },
        { day: 6, title: "دبي للتسوق", description: "يوم حر." },
        { day: 7, title: "المغادرة", description: "التوصيل للمطار." }
      ]
    },
    // 8. HM001
    {
      id: "HM001",
      slug: "hm001-dubai-honeymoon-royal",
      code: "HM001",
      title: "شهر العسل الملكي في دبي وأتلانتس",
      destination: "dubai",
      duration: "6 Days / 5 Nights",
      minPax: "2 Pax",
      price: 1850,
      rating: 5.0,
      reviewCount: 310,
      images: ["https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"],
      overview: "باقة شهر عسل فاخرة تشمل الإقامة في منتجع أتلانتس ذا رويال، عشاء يخت خاص، وجولة هليكوبتر فوق سماء دبي.",
      highlights: ["جولة هليكوبتر سماء دبي، عشاء يخت مارينا خاص، وأتلانتس ذا رويال"],
      included: ["جولة الهليكوبتر واليخت الخاص والإقامة الفاخرة والخدمات الرومانسية"],
      excluded: ["المشتريات الشخصية"],
      itinerary: [
        { day: 1, title: "الوصول والترحيب الملكي", description: "سيارة ليموزين خاصة للفندق." },
        { day: 2, title: "جولة الهليكوبتر فوق برج خليفة", description: "تحليق سماء دبي." },
        { day: 3, title: "الانتقال لـ أتلانتس ذا رويال", description: "الإقامة في الجناح الملكي." },
        { day: 4, title: "عشاء يخت خاص في دبي مارينا", description: "رحلة بحرية رومانسية." },
        { day: 5, title: "سفاري صحراوي ملكي VIP", description: "عشاء خاص تحت النجوم." },
        { day: 6, title: "المغادرة", description: "توصيل الليموزين للمطار." }
      ]
    },
    // 9. HM002
    {
      id: "HM002",
      slug: "hm002-dubai-maldives-style",
      code: "HM002",
      title: "شهر عسل دبي ورومانسية الصحراء",
      destination: "dubai",
      duration: "7 Days / 6 Nights",
      minPax: "2 Pax",
      price: 1990,
      rating: 4.98,
      reviewCount: 220,
      images: ["https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/19/7f/2e.jpg"],
      overview: "تجربة شهر عسل أسطورية تدمج بين حداثة دبي وإقامة الفلل المائية والصحراوية الخاصة.",
      highlights: ["فيلا خاصة بمسبح خاص، جلسة مساج للأزواج، وسفاري المنطاد"],
      included: ["الفلل الفاخرة والخدمات الرومانسية المكتملة"],
      excluded: ["الطيران الدولي"],
      itinerary: [
        { day: 1, title: "الوصول والاستقبال", description: "سيارة فاخرة واستقبال بالورد." },
        { day: 2, title: "برج خليفة وجلسة السبا", description: "سبا أزواج واستكشاف البرج." },
        { day: 3, title: "الانتقال لفيلا منتجع الصحراء", description: "مسبح خاص بالمحيط الصحراوي." },
        { day: 4, title: "منطاد الصحراء عند الفجر", description: "مشاهدة الشروق من السماء." },
        { day: 5, title: "العودة لـ نخلة جميرا", description: "منتجع الشاطئ." },
        { day: 6, title: "يوم استجمام وتدليك", description: "سبا ورлаكس." },
        { day: 7, title: "المغادرة", description: "التوصيل للمطار." }
      ]
    }
  ]
};

export default dubaiDestinationData;
