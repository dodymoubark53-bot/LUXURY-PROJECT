export interface HotelTranslation {
  name: string;
  city: string;
  description: string;
  address: string;
  amenities: string[];
  roomTypes: string[];
}

export const hotelsTranslations: Record<string, Record<string, HotelTranslation>> = {
  "hotel-cairo-1": {
    en: {
      name: "Steigenberger Hotel El Tahrir",
      city: "Cairo",
      description: "Located in the heart of Downtown Cairo, steps away from the Egyptian Museum, offering 5-star luxury and Nile view rooms.",
      address: "El Tahrir Square, Downtown, Cairo, Egypt",
      amenities: ["Pool", "Free WiFi", "Spa", "Restaurant", "Gym", "Airport Transfer"],
      roomTypes: ["Standard Room", "Deluxe Nile View", "Executive Suite"]
    },
    es: {
      name: "Steigenberger Hotel El Tahrir",
      city: "El Cairo",
      description: "Ubicado en el corazón del centro histórico del Cairo, a pocos pasos del Museo Egipcio, ofreciendo lujo de 5 estrellas.",
      address: "Plaza El Tahrir, Centro, El Cairo, Egipto",
      amenities: ["Piscina", "WiFi Gratis", "Spa", "Restaurante", "Gimnasio", "Traslado al Aeropuerto"],
      roomTypes: ["Habitación Estándar", "Deluxe Vista al Nilo", "Suite Ejecutiva"]
    },
    pt: {
      name: "Steigenberger Hotel El Tahrir",
      city: "Cairo",
      description: "Localizado no coração do centro do Cairo, a poucos passos do Museu Egípcio, oferecendo luxo 5 estrelas.",
      address: "Praça El Tahrir, Centro, Cairo, Egito",
      amenities: ["Piscina", "WiFi Grátis", "Spa", "Restaurante", "Academia", "Transfer Aeroporto"],
      roomTypes: ["Quarto Standard", "Deluxe Vista Nilo", "Suíte Executiva"]
    },
    ar: {
      name: "فندق شتايجنبرجر التحرير",
      city: "القاهرة",
      description: "يقع في قلب وسط بلد القاهرة، على بعد خطوات من المتحف المصري، ويقدم رفاهية 5 نجوم وإطلالات ساحرة على النيل.",
      address: "ميدان التحرير، وسط البلد، القاهرة، مصر",
      amenities: ["حمام سباحة", "واي فاي مجاني", "سبا", "مطعم فاخر", "صالة ألعاب رياضية", "توصيل للمطار"],
      roomTypes: ["غرفة قياسية", "ديلوكس إطلالة نيلية", "جناح تنفيذي"]
    },
    it: {
      name: "Steigenberger Hotel El Tahrir",
      city: "Il Cairo",
      description: "Situato nel cuore del centro del Cairo, a pochi passi dal Museo Egizio, offre un lusso a 5 stelle.",
      address: "Piazza El Tahrir, Centro, Il Cairo, Egitto",
      amenities: ["Piscina", "WiFi Gratuito", "Spa", "Ristorante", "Palestra", "Navetta Aeroporto"],
      roomTypes: ["Camera Standard", "Deluxe Vista Nilo", "Suite Esecutiva"]
    }
  },
  "hotel-luxor-1": {
    en: {
      name: "Sofitel Winter Palace Luxor",
      city: "Luxor",
      description: "A historic Victorian palace hotel on the banks of the River Nile in Luxor, surrounded by tropical gardens.",
      address: "Corniche El Nile Street, Luxor, Egypt",
      amenities: ["Historic Palace", "Nile Views", "Pool", "Fine Dining", "Gardens"],
      roomTypes: ["Classic Room Garden View", "Nile View Luxury Room", "Royal Suite"]
    },
    es: {
      name: "Sofitel Winter Palace Luxor",
      city: "Lúxor",
      description: "Un palacio victoriano histórico a orillas del río Nilo en Lúxor, rodeado de frondosos jardines tropicales.",
      address: "Calle Corniche El Nile, Lúxor, Egipto",
      amenities: ["Palacio Histórico", "Vistas al Nilo", "Piscina", "Alta Gastronomía", "Jardines"],
      roomTypes: ["Habitación Clásica Vista Jardín", "Habitación de Lujo Vista al Nilo", "Suite Real"]
    },
    pt: {
      name: "Sofitel Winter Palace Luxor",
      city: "Luxor",
      description: "Um palácio vitoriano histórico às margens do Rio Nilo em Luxor, cercado por jardins tropicais exuberantes.",
      address: "Rua Corniche El Nile, Luxor, Egito",
      amenities: ["Palácio Histórico", "Vista Nilo", "Piscina", "Gastronomia Fina", "Jardins"],
      roomTypes: ["Quarto Clássico Vista Jardim", "Quarto de Luxo Vista Nilo", "Suíte Real"]
    },
    ar: {
      name: "فندق سوفيتيل ونتر بالاس الأقصر",
      city: "الأقصر",
      description: "قصر فيكتوري تاريخي ساحر يقع مباشرة على ضفاف نهر النيل في الأقصر، تحيط به حدائق استوائية خضراء.",
      address: "شارع كورنيش النيل، الأقصر، مصر",
      amenities: ["قصر تاريخي", "إطلالات نيلية", "حمام سباحة", "مطاعم راقية", "حدائق غنّاء"],
      roomTypes: ["غرفة كلاسيكية إطلالة حديقة", "غرفة فاخرة إطلالة نيلية", "جناح ملكي"]
    },
    it: {
      name: "Sofitel Winter Palace Luxor",
      city: "Luxor",
      description: "Un palazzo vittoriano storico sulle rive del fiume Nilo a Luxor, circondato da giardini tropicali.",
      address: "Via Corniche El Nile, Luxor, Egitto",
      amenities: ["Palazzo Storico", "Vista Nilo", "Piscina", "Ristorante Gourmet", "Giardini"],
      roomTypes: ["Camera Classica Vista Giardino", "Camera Luxury Vista Nilo", "Suite Reale"]
    }
  }
};

export default hotelsTranslations;
