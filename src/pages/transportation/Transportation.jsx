import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaUserFriends, FaCog, FaCheck } from 'react-icons/fa';
import { transportation } from '../../data/transportation';
import TransportationForm from '../../components/booking/TransportationForm';

const Transportation = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Sedans', 'SUVs', 'Buses'];

  const filteredVehicles = transportation.filter(vehicle => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Sedans') return vehicle.category === 'sedan';
    if (activeFilter === 'SUVs') return vehicle.category === 'suv';
    if (activeFilter === 'Buses') return vehicle.category === 'bus';
    return true;
  });

  return (
    <div className="w-full bg-obsidian-50 pb-24">
      <Helmet>
        <title>Transportation | Luxury Travel</title>
        <meta name="description" content="Premium vehicles with professional drivers across Egypt, Jordan & Turkey" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] lg:h-[70vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550355291-bbee04aed9c2?auto=compress&cs=tinysrgb&w=1920&fit=crop&crop=center" 
            alt="Luxury Car" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-display-xl text-ivory-50 mb-6 font-display"
          >
            Travel in Comfort & Style
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-body-lg text-ivory-300 max-w-2xl mx-auto"
          >
            Premium vehicles with professional drivers across Egypt, Jordan & Turkey
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full text-body-md font-semibold transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-gold-500 text-obsidian-900 shadow-[0_0_20px_rgba(201,162,39,0.4)]' 
                  : 'bg-ivory-50 text-obsidian-700 hover:bg-gold-50 shadow-sm border border-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 text-left">
          {filteredVehicles.map((vehicle, index) => (
            <motion.div 
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 0 32px rgba(201,162,39,0.22)", transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
              className="bg-ivory-50 rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group"
            >
              <Link to={`/transportation/${vehicle.id}`} className="block relative h-64 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover cinematic-transition group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-ivory-50 font-semibold flex items-center gap-2">
                    View Details &rarr;
                  </span>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-caption text-gold-500 uppercase tracking-wider block mb-1">
                      {vehicle.category}
                    </span>
                    <h3 className="text-display-md text-xl text-obsidian-900">
                      <Link to={`/transportation/${vehicle.id}`} className="hover:text-gold-500 transition-colors">
                        {vehicle.name}
                      </Link>
                    </h3>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-caption text-obsidian-700">
                    <FaUserFriends className="text-gold-500" />
                    {vehicle.seats} Seats
                  </div>
                  <div className="flex items-center gap-2 text-caption text-obsidian-700">
                    <FaCog className="text-gold-500" />
                    {vehicle.transmission}
                  </div>
                </div>

                <ul className="mb-6 space-y-2">
                  {vehicle.features.slice(0, 2).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-caption text-obsidian-700">
                      <FaCheck className="text-sage-500 flex-shrink-0" size={12} />
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                  {vehicle.features.length > 2 && (
                    <li className="text-caption text-obsidian-500 italic">
                      + {vehicle.features.length - 2} more features
                    </li>
                  )}
                </ul>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-body-lg font-bold text-obsidian-900">${vehicle.pricePerDay}</span>
                    <span className="text-caption text-obsidian-500"> / day</span>
                  </div>
                  <Link 
                    to={`/transportation/${vehicle.id}`}
                    className="text-body-md font-medium text-gold-500 hover:text-gold-600 transition-colors rounded-full"
                  >
                    Reserve Now &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="container mx-auto px-6 max-w-4xl" id="reservation">
        <div className="text-center mb-12">
          <h2 className="text-display-lg text-obsidian-900 mb-4">Make a Reservation</h2>
          <p className="text-body-md text-obsidian-500 max-w-2xl mx-auto">
            Book your luxury transportation in advance. We provide professional chauffeurs and premium vehicles to ensure a comfortable and stylish journey.
          </p>
        </div>
        <TransportationForm />
      </section>
    </div>
  );
};

export default Transportation;
