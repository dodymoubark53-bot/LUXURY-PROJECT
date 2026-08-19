import React, { createContext, useContext, useState, useEffect } from 'react';
import { tours as initialTours } from '../data/tours';
import { transportation as initialTransportation } from '../data/transportation';

// Initial Hotels Data
const initialHotels = [
  {
    id: 'hotel-cairo-1',
    name: 'Steigenberger Hotel El Tahrir',
    destination: 'egypt',
    city: 'Cairo',
    stars: 5,
    rating: 4.8,
    pricePerNight: 180,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    amenities: ['Pool', 'Free WiFi', 'Spa', 'Restaurant', 'Gym', 'Airport Transfer'],
    description: 'Located in the heart of Downtown Cairo, steps away from the Egyptian Museum.'
  },
  {
    id: 'hotel-luxor-1',
    name: 'Sofitel Winter Palace Luxor',
    destination: 'egypt',
    city: 'Luxor',
    stars: 5,
    rating: 4.9,
    pricePerNight: 240,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    amenities: ['Historic Palace', 'Nile Views', 'Pool', 'Fine Dining', 'Gardens'],
    description: 'A historic Victorian palace hotel on the banks of the River Nile in Luxor.'
  },
  {
    id: 'hotel-istanbul-1',
    name: 'Çırağan Palace Kempinski',
    destination: 'turkey',
    city: 'Istanbul',
    stars: 5,
    rating: 4.95,
    pricePerNight: 450,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    amenities: ['Bosphorus View', 'Infinity Pool', 'Turkish Bath', 'Helipad', 'Butler Service'],
    description: 'A 19th-century Ottoman palace offering ultimate luxury on the shores of Bosphorus.'
  },
  {
    id: 'hotel-petra-1',
    name: 'Mövenpick Resort Petra',
    destination: 'jordan',
    city: 'Petra',
    stars: 5,
    rating: 4.7,
    pricePerNight: 210,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    amenities: ['Roof Terrace', 'Pool', 'Oriental Craftwork', 'Close to Petra Entrance'],
    description: 'Located directly at the entrance to the historic city of Petra.'
  }
];

// Initial Packages Data
const initialPackages = [
  {
    id: 'pkg-multi-1',
    slug: 'egypt-jordan-grand-tour',
    title: 'Grand Egypt & Jordan Discovery',
    destination: 'Multi-Country',
    countries: ['Egypt', 'Jordan'],
    duration: '12 Days / 11 Nights',
    price: 1890,
    popular: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80',
    description: 'Combine the timeless pyramids of Egypt with the rose-red rock city of Petra and Wadi Rum desert.'
  },
  {
    id: 'pkg-honey-1',
    slug: 'nile-red-sea-honeymoon',
    title: 'Romantic Nile Cruise & Red Sea Luxury',
    destination: 'Egypt',
    type: 'Honeymoon',
    duration: '10 Days / 9 Nights',
    price: 1650,
    popular: true,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
    description: 'Private Nile felucca dinners, luxury 5-star cruise, and romantic beach resort stay in Hurghada.'
  },
  {
    id: 'pkg-turkey-1',
    slug: 'cappadocia-istanbul-express',
    title: 'Ottoman Heritage & Hot Air Balloons',
    destination: 'Turkey',
    type: 'Cultural',
    duration: '8 Days / 7 Nights',
    price: 1250,
    popular: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=800&q=80',
    description: 'Fly over magical fairy chimneys in Cappadocia and explore Hagia Sophia & Grand Bazaar.'
  }
];

// Initial Reviews Data
const initialReviews = [
  {
    id: 'rev-1',
    tripId: 'eg-br-001',
    tripTitle: 'Cairo Express',
    author: 'Carlos Eduardo',
    country: 'Brazil',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    date: '2026-07-15',
    comment: 'Experiência inesquecível! Nosso guia falou português perfeitamente e a organização foi impecável.'
  },
  {
    id: 'rev-2',
    tripId: 'eg-br-002',
    tripTitle: 'Cairo Express com Alexandria',
    author: 'Mariana Silva',
    country: 'Portugal',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    date: '2026-08-02',
    comment: 'Alexandria é fascinante e a vista da Biblioteca é espetacular. Recomendo 100% a Dunas Travel!'
  },
  {
    id: 'rev-3',
    tripId: 'eg-es-001',
    tripTitle: 'Descubrimiento de Egipto',
    author: 'Javier Rodríguez',
    country: 'Spain',
    avatar: 'https://i.pravatar.cc/150?img=68',
    rating: 4.9,
    date: '2026-08-10',
    comment: 'El crucero por el Nilo superó todas nuestras expectativas. Servicio de lujo y guías de egiptología de primer nivel.'
  }
];

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // 1. TRIPS STATE
  const [trips, setTrips] = useState(() => {
    const saved = localStorage.getItem('dunas_trips');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return initialTours;
  });

  // 2. PACKAGES STATE
  const [packages, setPackages] = useState(() => {
    const saved = localStorage.getItem('dunas_packages');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return initialPackages;
  });

  // 3. HOTELS STATE
  const [hotels, setHotels] = useState(() => {
    const saved = localStorage.getItem('dunas_hotels');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return initialHotels;
  });

  // 4. TRANSPORTATION STATE
  const [transportation, setTransportation] = useState(() => {
    const saved = localStorage.getItem('dunas_transport');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return initialTransportation;
  });

  // 5. REVIEWS STATE
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('dunas_reviews');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return initialReviews;
  });

  // Save to LocalStorage whenever state changes
  useEffect(() => { localStorage.setItem('dunas_trips', JSON.stringify(trips)); }, [trips]);
  useEffect(() => { localStorage.setItem('dunas_packages', JSON.stringify(packages)); }, [packages]);
  useEffect(() => { localStorage.setItem('dunas_hotels', JSON.stringify(hotels)); }, [hotels]);
  useEffect(() => { localStorage.setItem('dunas_transport', JSON.stringify(transportation)); }, [transportation]);
  useEffect(() => { localStorage.setItem('dunas_reviews', JSON.stringify(reviews)); }, [reviews]);

  // --- TRIPS CRUD ---
  const addTrip = (newTrip) => {
    const tripWithId = {
      ...newTrip,
      id: newTrip.id || `trip-${Date.now()}`,
      slug: newTrip.slug || (newTrip.title ? newTrip.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : `trip-${Date.now()}`),
      rating: newTrip.rating ? parseFloat(newTrip.rating) : 5.0,
      reviewCount: newTrip.reviewCount ? parseInt(newTrip.reviewCount) : 0,
      popular: newTrip.popular || false,
      price: newTrip.price ? parseFloat(newTrip.price) : 0,
      views: newTrip.views || Math.floor(Math.random() * 400) + 100,
      inquiries: newTrip.inquiries || Math.floor(Math.random() * 80) + 20
    };
    setTrips(prev => [tripWithId, ...prev]);
    return tripWithId;
  };

  const updateTrip = (id, updatedFields) => {
    setTrips(prev => prev.map(t => t.id === id ? { ...t, ...updatedFields } : t));
  };

  const deleteTrip = (id) => {
    setTrips(prev => prev.filter(t => t.id !== id));
  };

  // --- PACKAGES CRUD ---
  const addPackage = (newPkg) => {
    const pkgWithId = {
      ...newPkg,
      id: newPkg.id || `pkg-${Date.now()}`,
      rating: newPkg.rating ? parseFloat(newPkg.rating) : 5.0,
      price: newPkg.price ? parseFloat(newPkg.price) : 0
    };
    setPackages(prev => [pkgWithId, ...prev]);
  };

  const updatePackage = (id, updatedFields) => {
    setPackages(prev => prev.map(p => p.id === id ? { ...p, ...updatedFields } : p));
  };

  const deletePackage = (id) => {
    setPackages(prev => prev.filter(p => p.id !== id));
  };

  // --- HOTELS CRUD ---
  const addHotel = (newHotel) => {
    const hotelWithId = {
      ...newHotel,
      id: newHotel.id || `hotel-${Date.now()}`,
      rating: newHotel.rating ? parseFloat(newHotel.rating) : 4.5,
      stars: newHotel.stars ? parseInt(newHotel.stars) : 5,
      pricePerNight: newHotel.pricePerNight ? parseFloat(newHotel.pricePerNight) : 150
    };
    setHotels(prev => [hotelWithId, ...prev]);
  };

  const updateHotel = (id, updatedFields) => {
    setHotels(prev => prev.map(h => h.id === id ? { ...h, ...updatedFields } : h));
  };

  const deleteHotel = (id) => {
    setHotels(prev => prev.filter(h => h.id !== id));
  };

  // --- TRANSPORTATION CRUD ---
  const addTransport = (item) => {
    const transportWithId = {
      ...item,
      id: item.id || `tr-${Date.now()}`,
      rating: item.rating ? parseFloat(item.rating) : 4.8,
      seats: item.seats ? parseInt(item.seats) : 4
    };
    setTransportation(prev => [transportWithId, ...prev]);
  };

  const updateTransport = (id, updatedFields) => {
    setTransportation(prev => prev.map(t => t.id === id ? { ...t, ...updatedFields } : t));
  };

  const deleteTransport = (id) => {
    setTransportation(prev => prev.filter(t => t.id !== id));
  };

  // --- REVIEWS CRUD ---
  const addReview = (review) => {
    const reviewWithId = {
      ...review,
      id: review.id || `rev-${Date.now()}`,
      date: review.date || new Date().toISOString().split('T')[0],
      rating: review.rating ? parseFloat(review.rating) : 5.0
    };
    setReviews(prev => [reviewWithId, ...prev]);
  };

  const updateReview = (id, updatedFields) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, ...updatedFields } : r));
  };

  const deleteReview = (id) => {
    setReviews(prev => prev.filter(r => r.id !== id));
  };

  // Helper for Dashboard Analytics: Top Popular Trips
  const getPopularTrips = () => {
    return [...trips].sort((a, b) => {
      const scoreA = (a.reviewCount || 0) * 3 + (a.rating || 5) * 20 + (a.popular ? 50 : 0);
      const scoreB = (b.reviewCount || 0) * 3 + (b.rating || 5) * 20 + (b.popular ? 50 : 0);
      return scoreB - scoreA;
    });
  };

  return (
    <DataContext.Provider value={{
      trips,
      packages,
      hotels,
      transportation,
      reviews,
      addTrip,
      updateTrip,
      deleteTrip,
      addPackage,
      updatePackage,
      deletePackage,
      addHotel,
      updateHotel,
      deleteHotel,
      addTransport,
      updateTransport,
      deleteTransport,
      addReview,
      updateReview,
      deleteReview,
      getPopularTrips
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
