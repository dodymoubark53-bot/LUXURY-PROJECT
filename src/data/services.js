export const services = [
  // HOTELS
  {
    id: 'srv-hot-1',
    category: 'hotels',
    slug: 'marriott-mena-house',
    title: 'Marriott Mena House',
    location: 'Cairo, Egypt',
    price: 350,
    rating: 5.0,
    images: ['/imgs/hotels/Marriott Mena House 1.webp', '/imgs/hotels/Marriott Mena House 2.webp'],
    shortDesc: 'Wake up to breathtaking views of the Great Pyramids from this historic 5-star luxury resort.',
    overview: [
      "Nestled in the shadow of the Great Pyramids of Giza, the Marriott Mena House is not just a hotel; it is a vital part of Egyptian history. Originally built as a hunting lodge for Khedive Ismail in 1869, this palatial estate has hosted kings, emperors, and heads of state. The lush, sprawling gardens offer an oasis of tranquility just steps away from the ancient wonders of the world.",
      "The resort blends classical charm with modern luxury. Guest rooms feature rich fabrics, elegant traditional furnishings, and private balconies that frame the majestic Pyramids perfectly against the skyline. Whether you are enjoying a morning espresso or a sunset cocktail, the proximity to the ancient monuments is an unparalleled, surreal experience.",
      "Beyond the views, Mena House offers world-class amenities including a massive outdoor pool surrounded by landscaped gardens, a luxurious spa, and exceptional dining. The legendary 139 Pavilion restaurant serves exquisite international and local cuisine, allowing guests to dine outdoors while the Pyramids are illuminated against the night sky."
    ],
    highlights: ['Unobstructed views of the Great Pyramids', 'Historic 19th-century palace architecture', 'World-class 139 Pavilion Restaurant', 'Heated outdoor pool & luxury spa', 'Private balconies in premium suites', 'Lush, 40-acre landscaped gardens'],
    included: ['Breakfast buffet', 'High-speed Wi-Fi', 'Access to pool and fitness center', 'Daily housekeeping'],
    excluded: ['Airport transfers', 'Spa treatments', 'In-room dining', 'Pyramids entrance tickets']
  },
  {
    id: 'srv-hot-2',
    category: 'hotels',
    slug: 'kempinski-hotel-ishtar',
    title: 'Kempinski Hotel Ishtar',
    location: 'Dead Sea, Jordan',
    price: 450,
    rating: 4.9,
    images: ['/imgs/hotels/16015431-external-view-kempinski-ishtar-dead-sea.jpg', '/imgs/hotels/Kempinski Hotel Ishtar 2.webp'],
    shortDesc: 'A lavish Babylonian-inspired resort offering floating infinity pools and the largest spa in the Middle East.',
    overview: [
      "Situated on the edge of the famous salt lake at the lowest point on Earth, the Kempinski Hotel Ishtar Dead Sea offers an extraordinary wellness and luxury experience. The hotel's architecture is a stunning tribute to the Hanging Gardens of Babylon, featuring cascading terraces, grand stone facades, and olive trees that dot the expansive property.",
      "The resort boasts an impressive array of freshwater pools, including stunning infinity edge pools that seem to melt directly into the Dead Sea horizon. Guests have exclusive access to a private, pristine stretch of the Dead Sea shore, complete with attendants providing bowls of the famous mineral-rich black mud for natural therapeutic treatments under the Jordanian sun.",
      "The crown jewel of the Kempinski Ishtar is its colossal spa, the largest in the Middle East. It features specialized hydro-facilities, Tepidarium heated lounges, and therapeutic massages utilizing local Dead Sea sea salt and mud. Dining is equally lavish, with multiple restaurants offering everything from authentic Levantine mezzes to fine Italian cuisine, all accompanied by spectacular sunset views."
    ],
    highlights: ['Private beach access to the Dead Sea', 'Nine spectacular freshwater pools', 'Largest luxury spa in the Middle East', 'Babylonian-inspired architecture', 'Complimentary Dead Sea mud treatments', 'Sea-view balconies in all rooms'],
    included: ['Breakfast buffet', 'Access to private beach', 'Complimentary minibar (non-alcoholic)', 'Use of spa hydro-facilities'],
    excluded: ['Premium spa massages', 'Alcoholic beverages', 'Airport transportation']
  },
  {
    id: 'srv-hot-3',
    category: 'hotels',
    slug: 'ciragan-palace-kempinski',
    title: 'Çırağan Palace Kempinski',
    location: 'Istanbul, Turkey',
    price: 850,
    rating: 5.0,
    images: ['/imgs/hotels/Çırağan Palace Kempinski 1.jpg', '/imgs/hotels/Çırağan Palace Kempinski 2.jpg'],
    shortDesc: 'Experience royal Ottoman luxury in an actual 19th-century palace located directly on the Bosphorus strait.',
    overview: [
      "The Çırağan Palace Kempinski is the epitome of Istanbul luxury, occupying a genuine 19th-century Ottoman imperial palace right on the shores of the Bosphorus. It is the only Ottoman Imperial Palace and Hotel situated on the strait that divides Europe and Asia, offering guests an experience steeped in absolute royal grandeur.",
      "Accommodations blend opulent Ottoman heritage with contemporary luxury. The suites feature high ceilings, antique-style furnishings, and lavish marble bathrooms. Waking up and stepping out onto a private balcony to watch the ferries glide up and down the sparkling Bosphorus is an experience exclusive to this magnificent property.",
      "The hotel's amenities are legendary. An incredible heated infinity pool gives the illusion of floating directly in the Bosphorus. The Sanitas Spa offers an authentic, hyper-luxurious Turkish Hammam experience. For dining, the award-winning Tuğra Restaurant, located on the first floor of the historical palace, serves ultimate Ottoman dining experiences against a backdrop of breathtaking waterside views."
    ],
    highlights: ['Genuine 19th-century Ottoman Palace', 'Bosphorus-front heated infinity pool', 'Award-winning Tuğra Restaurant', 'Authentic luxury Turkish Hammam', 'Helicopter arrival available', 'Private butler service in select suites'],
    included: ['Breakfast buffet', 'Wi-Fi', 'Pool and fitness center access'],
    excluded: ['Hammam treatments', 'Fine dining at Tuğra', 'Airport transfers']
  },

  // SAFARI
  {
    id: 'srv-saf-1',
    category: 'safari',
    slug: 'sinai-desert-safari',
    title: 'Sinai Desert Safari',
    location: 'South Sinai, Egypt',
    price: 150,
    rating: 4.7,
    images: ['/imgs/safari/Sinai Desert Safari 1.jpg', '/imgs/safari/Sinai Desert Safari 2.jpg'],
    shortDesc: 'A thrilling off-road jeep adventure through the rugged mountains of Sinai, complete with a traditional Bedouin dinner.',
    overview: [
      "Escape the coastal resorts of Sharm El-Sheikh and venture deep into the rugged, arid heart of the Sinai Peninsula. The Sinai Desert Safari is an exhilarating off-road adventure conducted in robust 4x4 vehicles, expertly navigated by local Bedouin guides. The journey takes you through dramatic canyons, vast sand dunes, and towering granite mountains that have stood unchanged for millennia.",
      "As the afternoon heat begins to wane, the safari stops at strategic viewpoints offering breathtaking panoramas of the desert landscape. Guests have the opportunity to hike through narrow, colorful slot canyons—often referred to as the 'Colored Canyon'—where the rock walls swirl with vibrant hues of red, yellow, and purple sandstone.",
      "The climax of the safari occurs as the sun sets. The group arrives at a secluded Bedouin camp nestled in a valley. Here, you will be treated to authentic Bedouin hospitality, sipping sweet sage tea by the fire while a traditional feast is prepared. As darkness falls, the absolute lack of light pollution reveals a staggering canopy of stars, turning the desert into a spectacular natural observatory."
    ],
    highlights: ['4x4 off-road adventure in Sinai mountains', 'Hike through the stunning Colored Canyon', 'Sunset viewing from a desert plateau', 'Authentic Bedouin dinner experience', 'Stargazing away from city lights', 'Guided by local Bedouin experts'],
    included: ['4x4 transportation', 'Professional guide', 'Dinner and tea at Bedouin camp', 'Hotel pickup and drop-off'],
    excluded: ['Gratuities', 'Personal expenses', 'Optional camel ride']
  },
  {
    id: 'srv-saf-2',
    category: 'safari',
    slug: 'wadi-rum-jeep-safari',
    title: 'Wadi Rum Jeep Safari',
    location: 'Wadi Rum, Jordan',
    price: 180,
    rating: 4.9,
    images: ['/imgs/safari/Wadi Rum Jeep Safari 1.webp', '/imgs/safari/Wadi Rum Jeep Safari 2.webp'],
    shortDesc: 'Traverse the Martian landscapes of the Valley of the Moon, exploring ancient petroglyphs and massive rock bridges.',
    overview: [
      "Wadi Rum, famously known as the Valley of the Moon and the filming location for Lawrence of Arabia and The Martian, is best explored via a private, open-air jeep safari. This journey takes you deep into the protected desert wilderness, far beyond the reach of standard tourist buses, allowing you to experience the sheer scale and silence of this UNESCO World Heritage site.",
      "The safari covers incredible geological formations, including massive natural rock bridges like the Um Frouth Rock Bridge, which adventurous guests can scramble up for panoramic photos. You will also visit Khazali Canyon, a narrow fissure cutting into the mountainside, the walls of which are covered in ancient Nabatean, Islamic, and Thamudic petroglyphs.",
      "Driven by a local Zalabia Bedouin, the tour is as much cultural as it is scenic. You will stop at a traditional tent woven from goat hair to rest in the shade, drink sweet Bedouin tea, and learn about the nomadic lifestyle that has persisted in this harsh environment for centuries. The safari culminates with finding the perfect high dune to sit back and watch the desert rocks turn fiery red under the setting sun."
    ],
    highlights: ['Explore the paths of Lawrence of Arabia', 'Climb natural rock bridges', 'View ancient Nabatean petroglyphs', 'Open-air 4x4 vehicles for best views', 'Sunset from a high red sand dune', 'Traditional tea with local Bedouins'],
    included: ['Private 4x4 jeep', 'Local Bedouin driver/guide', 'Bottled water', 'Bedouin tea'],
    excluded: ['Entry fee to Wadi Rum reserve', 'Gratuities', 'Meals']
  },
  {
    id: 'srv-saf-3',
    category: 'safari',
    slug: 'cappadocia-atv-safari',
    title: 'Cappadocia ATV Safari',
    location: 'Cappadocia, Turkey',
    price: 120,
    rating: 4.8,
    images: ['/imgs/safari/Cappadocia ATV Safari 1.webp', '/imgs/safari/Cappadocia ATV Safari 2.webp'],
    shortDesc: 'Ride through the surreal fairy chimneys and lunar valleys of Cappadocia on an exhilarating quad bike sunset tour.',
    overview: [
      "While hot air balloons offer a majestic view from above, the Cappadocia ATV Safari provides an adrenaline-pumping, up-close exploration of this bizarre and beautiful landscape. Riding an All-Terrain Vehicle (quad bike) allows you to effortlessly navigate the dusty, undulating dirt trails that wind through the region's famous valleys, which are inaccessible to larger vehicles.",
      "The guided convoy travels through some of Cappadocia's most iconic landscapes, including Sword Valley, Rose Valley, and Love Valley. You will weave directly between the towering 'fairy chimneys'—bizarre, mushroom-shaped rock formations created by volcanic eruptions and millennia of erosion. The route includes several stops at panoramic viewpoints perfect for photography.",
      "The most popular time for this safari is late afternoon. As the tour progresses, the setting sun casts long shadows and illuminates the tuff rock in brilliant shades of pink and rose. The tour finishes at a spectacular sunset observation point, allowing riders to turn off their engines, soak in the profound silence of the valleys, and watch the colors shift across the Anatolian plains."
    ],
    highlights: ['Drive your own ATV/Quad bike', 'Navigate through Sword and Rose valleys', 'Close-up views of Fairy Chimneys', 'Access off-the-beaten-path trails', 'Spectacular sunset viewing stop', 'Safety gear and training provided'],
    included: ['ATV rental', 'Helmet and safety equipment', 'Professional guide/escort', 'Hotel pickup/drop-off'],
    excluded: ['Gratuities', 'Personal insurance', 'Photos/videos taken by staff']
  },

  // CAMPING
  {
    id: 'srv-cmp-1',
    category: 'camping',
    slug: 'white-desert-camping',
    title: 'White Desert Camping',
    location: 'Farafra, Egypt',
    price: 250,
    rating: 4.9,
    images: ['/imgs/camping/pngtree-groups-of-people-gathered-around-a-campfire-at-night-picture-image_2646283.jpg', '/imgs/camping/shutterstock_625918454.jpg', '/imgs/camping/pngtree-night-camping-on-a-grassy-pasture-picture-image_2650533.jpg'],
    shortDesc: 'Sleep under the stars amidst surreal, chalk-white rock formations that look like snow in the middle of the Sahara.',
    overview: [
      "The White Desert (Sahara el Beyda) is one of Egypt's best-kept secrets and offers a camping experience unlike anywhere else on Earth. Located far in the western desert near the Farafra Oasis, this protected national park is famous for its bizarre, chalk-white rock formations that have been sculpted by wind and sand over millions of years into shapes resembling mushrooms, chickens, and alien spires.",
      "Camping here is a pure, back-to-nature experience, elevated with luxury touches. Rather than permanent structures, your Bedouin guides will set up a private, comfortable camp using traditional heavy carpets, windbreaks, and cozy sleeping bags. As the sun sets, the white rocks glow with an ethereal pink and orange light, creating an otherworldly, dreamlike atmosphere.",
      "The evening is spent gathered around a campfire. Your guides will prepare a delicious, hearty meal over the open flames, usually featuring grilled chicken, rice, and fresh vegetables. With zero light pollution for hundreds of miles, the stargazing is simply phenomenal. Falling asleep in the absolute silence of the desert, surrounded by the ghostly white rocks under the Milky Way, is an intensely moving experience."
    ],
    highlights: ['Surreal chalk-white rock formations', 'Private mobile camp setup', 'Dinner cooked over an open campfire', 'Unparalleled stargazing', 'Absolute silence and isolation', 'Off-road exploration of the Black and White deserts'],
    included: ['4x4 transport from Cairo/Bahariya', 'All camping equipment (tents/sleeping bags)', 'Dinner and Breakfast', 'National Park fees'],
    excluded: ['Personal sleeping bag (optional)', 'Gratuities', 'Extra snacks/drinks']
  },
  {
    id: 'srv-cmp-2',
    category: 'camping',
    slug: 'wadi-rum-bubble-tent',
    title: 'Wadi Rum Bubble Tent',
    location: 'Wadi Rum, Jordan',
    price: 320,
    rating: 5.0,
    images: ['/imgs/camping/OIP.webp', '/imgs/camping/OIP (1).webp', '/imgs/camping/OIP (2).webp'],
    shortDesc: 'Experience the ultimate desert glamping in a transparent dome tent, offering unobstructed views of the starry night sky.',
    overview: [
      "Wadi Rum has redefined desert camping with the introduction of 'Martian Domes' or Bubble Tents. These high-tech, luxury geodesic domes are designed to blend into the red desert landscape while providing 5-star hotel comfort. Featuring massive transparent panoramic panels, these tents allow you to immerse yourself in the desert environment without sacrificing air conditioning or a private en-suite bathroom.",
      "The interior of the bubble tent is the epitome of glamping. You will find a plush king-sized bed positioned perfectly to face the transparent wall. As night falls, you can literally lie in bed and watch the stars traverse the incredibly dark desert sky. Curtains can be drawn for privacy, but leaving them open to the cosmos is the true highlight of the stay.",
      "Beyond the extraordinary accommodation, the camp offers a full luxury experience. Guests dine in a communal luxury tent or outdoor terrace, enjoying traditional Zarb (meat and vegetables slow-cooked in a sand pit). In the morning, you wake up to the sun illuminating the massive sandstone cliffs right outside your window, enjoying a gourmet breakfast before heading out on your desert adventures."
    ],
    highlights: ['Transparent panoramic dome tent', 'En-suite bathroom and air conditioning', 'Stargaze directly from your bed', 'Traditional underground Zarb dinner', 'Located deep in the protected area', 'Luxury bedding and amenities'],
    included: ['Overnight in Bubble Tent', 'Dinner and Breakfast', 'Wi-Fi in reception area', 'Camp activities'],
    excluded: ['Jeep tours (booked separately)', 'Alcoholic beverages', 'Transfers to the camp']
  },
  {
    id: 'srv-cmp-3',
    category: 'camping',
    slug: 'mount-nemrut-camping',
    title: 'Mount Nemrut Camping',
    location: 'Adıyaman, Turkey',
    price: 180,
    rating: 4.7,
    images: ['/imgs/camping/camping-kampcilik-nedir.webp', '/imgs/camping/camping-stars-with-beautiful-view-mountains_604472-38600.jpg', '/imgs/camping/pngtree-camping-on-the-top-of-the-mountain-peaceful-recreation-in-the-photo-image_3035672.jpg'],
    shortDesc: 'A high-altitude adventure camping near the ancient, massive stone heads of King Antiochus to catch a legendary sunrise.',
    overview: [
      "Mount Nemrut in southeastern Turkey is home to one of the most mysterious and awe-inspiring archaeological sites in the world. At the 2,134-meter summit lies the tomb-sanctuary of King Antiochus I, flanked by massive, decapitated stone heads of ancient gods. Camping near the summit provides the unique opportunity to witness the legendary Mount Nemrut sunrise without having to make the grueling middle-of-the-night drive from the city.",
      "This is an adventure camping experience. Campsites are established at a safe, designated altitude just below the summit's archaeological zone. The air here is crisp and cold, even in summer, so high-quality, insulated tents and thick sleeping bags are provided. The evening involves a warm meal, hot Turkish tea, and sleeping under a vast, unpolluted sky.",
      "The true reward comes hours before dawn. You will wake up in the pitch dark, bundle up, and make the final short hike to the summit terraces. As the sun breaches the horizon, it slowly illuminates the massive stone faces of Apollo, Zeus, and Hercules, casting long, dramatic shadows. Watching the sunrise over the Mesopotamian plains alongside these silent, ancient sentinels is a deeply spiritual and unforgettable moment."
    ],
    highlights: ['Camp near a UNESCO World Heritage site', 'Witness the famous Mount Nemrut sunrise', 'Massive ancient stone statues', 'High-altitude adventure experience', 'Stunning views of the Mesopotamian plains', 'Guided hike to the summit'],
    included: ['Camping gear (tents, mats, bags)', 'Dinner and Breakfast', 'Professional guide', 'Entrance fees to the site'],
    excluded: ['Transportation to the mountain base', 'Gratuities', 'Heavy winter clothing']
  },

  // CRUISES
  {
    id: 'srv-cru-1',
    category: 'cruises',
    slug: 'nile-river-cruise',
    title: 'Nile River Cruise',
    location: 'Luxor to Aswan, Egypt',
    price: 1200,
    rating: 4.9,
    images: ['/imgs/nile cruises/IMG-20171013-WA0000(1).jpg', '/imgs/nile cruises/OIP.webp', '/imgs/nile cruises/OIP (1).webp'],
    shortDesc: 'Sail the lifeblood of Egypt on a 5-star floating hotel, stopping to explore ancient temples along the riverbanks.',
    overview: [
      "A luxury Nile River Cruise is the quintessential Egyptian experience, combining the relaxation of a 5-star resort with the adventure of an archaeological expedition. Sailing between Luxor and Aswan (usually over 4 to 5 days), these multi-deck ships serve as your floating luxury hotel, allowing you to unpack just once while the wonders of ancient Egypt glide past your panoramic cabin window.",
      "The pace of life on the Nile is sedate and majestic. During the day, you will disembark to visit monumental sites alongside an expert Egyptologist guide. You will explore the vast Karnak Temple, the beautifully preserved Temple of Horus at Edfu, and the unique double temple of Kom Ombo. Returning to the ship, you are greeted with cool towels and refreshing drinks.",
      "Life on board is pure indulgence. Spend your afternoons lounging by the rooftop plunge pool, watching the timeless scenes of farmers and fishermen on the lush riverbanks. Evenings feature gourmet dining in elegant restaurants, followed by entertainment ranging from traditional Nubian music to Galabeya dress-up parties. It is a seamless, highly romantic way to travel through history."
    ],
    highlights: ['5-star luxury cabin with panoramic windows', 'Guided tours of Edfu, Kom Ombo, and Philae', 'Rooftop sun deck and plunge pool', 'Full board gourmet dining', 'Expert onboard Egyptologist', 'Evening entertainment and parties'],
    included: ['Accommodation on the cruise', 'All meals (Breakfast, Lunch, Dinner)', 'Guided excursions and entrance fees', 'Airport/Train station transfers'],
    excluded: ['Beverages (alcoholic and premium non-alcoholic)', 'Gratuities (expected for crew)', 'Optional excursions (e.g., Abu Simbel)']
  },
  {
    id: 'srv-cru-2',
    category: 'cruises',
    slug: 'aqaba-glass-bottom-boat',
    title: 'Aqaba Glass-Bottom Boat',
    location: 'Aqaba, Jordan',
    price: 90,
    rating: 4.6,
    images: ['/imgs/nile cruises/OIP (2).webp', '/imgs/nile cruises/OIP (3).webp', '/imgs/nile cruises/OIP (4).webp'],
    shortDesc: 'Discover the vibrant marine life and coral reefs of the Red Sea on a relaxing glass-bottom boat cruise.',
    overview: [
      "The Red Sea coast of Aqaba boasts some of the most pristine, vibrant coral reefs in the world. For those who want to experience this underwater marvel without scuba diving, a luxury Glass-Bottom Boat cruise is the perfect solution. These specialized vessels feature large, clear viewing panels set into the hull, offering a literal window into the bustling marine ecosystem below.",
      "As you cruise away from the sandy shores of Aqaba, the water transitions from turquoise to deep sapphire. Looking down through the glass, you will spot colorful coral gardens swarming with exotic fish, including clownfish, parrotfish, and graceful rays. The captain navigates over famous sites, including a sunken tank and a shipwreck, explaining the marine life as you go.",
      "The cruise is not just about viewing; it is about relaxing. The boats feature shaded upper decks where you can sunbathe and enjoy refreshing drinks while taking in views of the coastline, where the borders of Jordan, Israel, Egypt, and Saudi Arabia converge. Most cruises drop anchor at a calm reef, allowing guests to jump into the warm, clear water for a guided snorkeling session."
    ],
    highlights: ['Clear glass viewing panels in the hull', 'View vibrant Red Sea coral reefs', 'Spot sunken wrecks and tanks', 'Shaded upper deck for sunbathing', 'Snorkeling stop with equipment provided', 'Views of four countries from the water'],
    included: ['Boat cruise ticket', 'Snorkeling equipment', 'Soft drinks and water', 'Life jackets'],
    excluded: ['Towels', 'Hotel transfers', 'Gratuities']
  },
  {
    id: 'srv-cru-3',
    category: 'cruises',
    slug: 'bosphorus-sunset-cruise',
    title: 'Bosphorus Sunset Cruise',
    location: 'Istanbul, Turkey',
    price: 150,
    rating: 4.9,
    images: ['/imgs/nile cruises/OIP (5).webp', '/imgs/nile cruises/download.webp', '/imgs/nile cruises/download (1).webp'],
    shortDesc: 'Sail between two continents as the sun sets over Istanbul, enjoying an elegant dinner and traditional entertainment.',
    overview: [
      "The Bosphorus Strait is the geographical and spiritual heart of Istanbul, slicing the city in half and separating the continents of Europe and Asia. A private or VIP sunset cruise on this legendary waterway is an unforgettable way to witness the sheer scale and beauty of the city. As the yacht departs from the pier, you are immediately flanked by centuries of history on both shores.",
      "The route takes you past iconic landmarks that look best from the water. You will glide by the opulent Dolmabahçe and Çırağan palaces, the imposing Rumeli Fortress, and elegant waterfront mansions (Yalıs). As the sun begins to set, the sky turns brilliant shades of gold and crimson, silhouetting the minarets and domes of the Old City against the twilight.",
      "The luxury sunset cruise experience is elevated by exceptional hospitality. Guests are served a gourmet dinner featuring Turkish meze and fresh seafood, accompanied by premium local wines. As darkness falls, the magnificent Bosphorus Bridges light up, connecting the continents with ribbons of neon. The evening often concludes with refined traditional entertainment, making it a highly romantic and culturally rich night out."
    ],
    highlights: ['Cruise between Europe and Asia', 'Views of Ottoman palaces and fortresses', 'Spectacular sunset over the Istanbul skyline', 'Gourmet Turkish dinner on board', 'Premium local wines and beverages', 'Illuminated Bosphorus bridges at night'],
    included: ['Yacht cruise', 'Multi-course dinner', 'Welcome cocktail', 'Hotel transfers'],
    excluded: ['Premium imported alcohol', 'Gratuities', 'Professional photographs']
  }
];
