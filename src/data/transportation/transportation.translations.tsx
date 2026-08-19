export interface TransportTranslation {
  name: string;
  categoryName: string;
  description: string;
  features: string[];
}

export const transportationTranslations: Record<string, Record<string, TransportTranslation>> = {
  "tr-bus-1": {
    en: {
      name: "Luxury Tour Bus Golden",
      categoryName: "VIP Tour Bus",
      description: "Premier 50-seater VIP tour bus equipped with modern entertainment, reclining leather seats, and on-board restroom for long distance travel.",
      features: ["AC", "WiFi", "Professional Driver", "Restroom", "Leather Seats", "Luggage Compartment"]
    },
    es: {
      name: "Autobús de Lujo Golden",
      categoryName: "Autobús VIP",
      description: "Autobús de lujo de 50 plazas equipado con entretenimiento moderno, asientos de cuero reclinables y baño a bordo.",
      features: ["Aire Acondicionado", "WiFi", "Chófer Profesional", "Baño a Bordo", "Asientos de Cuero", "Maletero Amplio"]
    },
    pt: {
      name: "Ônibus de Luxo Golden",
      categoryName: "Ônibus VIP",
      description: "Ônibus VIP de 50 lugares equipado com entretenimento moderno, assentos reclináveis de couro e banheiro a bordo.",
      features: ["Ar Condicionado", "WiFi", "Motorista Profissional", "Banheiro", "Assentos de Couro", "Compartimento de Bagagem"]
    },
    ar: {
      name: "حافلة سياحية فاخرة جولدن",
      categoryName: "حافلة سياحية كبرى",
      description: "حافلة كبرى سعة 50 راكباً مجهزة بأحدث وسائل الترفيه والمقاعد الجلدية المريحة ودورة مياه مدمجة للرحلات الطويلة.",
      features: ["تكييف هواء", "واي فاي", "سائق محترف", "دورة مياه", "مقاعد جلدية", "حقائب واسعة"]
    },
    it: {
      name: "Pullman di Lusso Golden",
      categoryName: "Pullman VIP",
      description: "Pullman VIP da 50 posti equipaggiato con intrattenimento moderno, sedili in pelle reclinabili e bagno a bordo.",
      features: ["Aria Condizionata", "WiFi", "Autista Professionista", "Bagno a Bordo", "Sedili in Pelle", "Vano Bagagli"]
    }
  },
  "tr-coaster-1": {
    en: {
      name: "Toyota Coaster Executive",
      categoryName: "Executive Minibus",
      description: "Mid-sized 26-seater minibus perfect for medium groups, airport transfers, and day excursions.",
      features: ["AC", "WiFi", "Professional Driver", "Audio System", "Spacious Legroom"]
    },
    es: {
      name: "Toyota Coaster Ejecutivo",
      categoryName: "Minibús Ejecutivo",
      description: "Minibús de 26 plazas ideal para grupos medianos, traslados al aeropuerto y excursiones de un día.",
      features: ["Aire Acondicionado", "WiFi", "Chófer Profesional", "Sistema de Audio", "Espacio Amplio"]
    },
    pt: {
      name: "Toyota Coaster Executivo",
      categoryName: "Minibuś Executivo",
      description: "Minibús de 26 lugares perfeito para grupos médios, transfers de aeroporto e passeios diários.",
      features: ["Ar Condicionado", "WiFi", "Motorista Profissional", "Sistema de Som", "Espaço Amplo"]
    },
    ar: {
      name: "تويوتا كوستر إكزيكتيف",
      categoryName: "حافلة كوستر متوسطة",
      description: "حافلة كوستر سعة 26 راكباً مثالية للمجموعات المتوسطة، تنقلات المطار، والرحلات اليومية.",
      features: ["تكييف هواء", "واي فاي", "سائق محترف", "نظام صوتي", "مساحة أرجل واسعة"]
    },
    it: {
      name: "Toyota Coaster Executive",
      categoryName: "Minibus Executive",
      description: "Minibus da 26 posti perfetto per piccoli gruppi, trasferimenti aeroportuali ed escursioni.",
      features: ["Aria Condizionata", "WiFi", "Autista Professionista", "Impianto Audio", "Spazio Gambe"]
    }
  },
  "tr-private-1": {
    en: {
      name: "Luxury Private Sedan & SUV",
      categoryName: "Private Luxury Car",
      description: "Private air-conditioned luxury vehicle with private chauffeur for airport pickups, city tours, and custom itineraries.",
      features: ["AC", "GPS", "Airbag", "WiFi", "Professional Driver", "Leather Seats", "Mineral Water"]
    },
    es: {
      name: "Sedán y SUV de Lujo Privado",
      categoryName: "Vehículo Privado VIP",
      description: "Vehículo privado de lujo con chófer privado para traslados, visitas a la ciudad e itinerarios personalizados.",
      features: ["Climatizador", "GPS", "Airbag", "WiFi", "Chófer Privado", "Asientos de Cuero", "Agua Mineral"]
    },
    pt: {
      name: "Sedan & SUV de Luxo Privativo",
      categoryName: "Carro Privativo VIP",
      description: "Veículo privativo de luxo com motorista particular para transfers, passeios e itinerários personalizados.",
      features: ["Ar Condicionado", "GPS", "Airbag", "WiFi", "Motorista Privativo", "Assentos de Couro", "Água Mineral"]
    },
    ar: {
      name: "سيارة سيدان ودفع رباعي فاخرة خاصة",
      categoryName: "سيارة خاصة فاخرة",
      description: "سيارة خاصة فاخرة مكيفة مع سائق خاص لاستقبال المطار والجولات الخاصة داخل المدن والبرامج المخصصة.",
      features: ["تكييف هواء", "نظام ملاحة GPS", "وسائد هوائية", "واي فاي", "سائق خاص", "مقاعد جلدية", "مياه مبردة"]
    },
    it: {
      name: "Sedan & SUV di Lusso Privato",
      categoryName: "Auto Privata VIP",
      description: "Veicolo privato di lusso con autista privato per trasferimenti e tour su misura.",
      features: ["Aria Condizionata", "GPS", "Airbag", "WiFi", "Autista Privato", "Sedili in Pelle", "Acqua Minerale"]
    }
  }
};

export default transportationTranslations;
