import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaChevronRight, FaUserFriends, FaCog, FaCheck, FaCar } from 'react-icons/fa';
import { transportation } from '../../data/transportation';
import TransportationForm from '../../components/booking/TransportationForm';

const TransportationDetails = () => {
  const { slug } = useParams();
  // slug is the ID based on our setup (e.g., tr-001)
  const vehicle = transportation.find(v => v.id === slug) || transportation[0];

  return (
    <div className="w-full bg-obsidian-50 pb-24">
      <Helmet>
        <title>{vehicle.name} | Luxury Transportation</title>
        <meta name="description" content={`Reserve the ${vehicle.name} for your premium travel experience.`} />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-10 bg-obsidian-900 text-center px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 text-caption text-gold-500 mb-4 uppercase tracking-wider">
            <Link to="/" className="hover:text-ivory-50 transition-colors">Home</Link>
            <span className="rtl-flip"><FaChevronRight className="text-[10px]" /></span>
            <Link to="/transportation" className="hover:text-ivory-50 transition-colors">Transportation</Link>
            <span className="rtl-flip"><FaChevronRight className="text-[10px]" /></span>
            <span className="text-ivory-300">{vehicle.name}</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-display-xl text-ivory-50 mb-6 font-display"
          >
            {vehicle.name}
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:w-2/3">
            <div className="bg-ivory-50 rounded-2xl p-6 shadow-card mb-8">
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 border-b border-gray-100 pb-8">
                <div className="flex flex-col gap-2">
                  <span className="text-caption text-obsidian-500 uppercase">Category</span>
                  <div className="flex items-center gap-2 text-body-md font-semibold text-obsidian-900">
                    <FaCar className="text-gold-500" />
                    <span className="capitalize">{vehicle.category}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-caption text-obsidian-500 uppercase">Capacity</span>
                  <div className="flex items-center gap-2 text-body-md font-semibold text-obsidian-900">
                    <FaUserFriends className="text-gold-500" />
                    <span>{vehicle.seats} Seats</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-caption text-obsidian-500 uppercase">Transmission</span>
                  <div className="flex items-center gap-2 text-body-md font-semibold text-obsidian-900">
                    <FaCog className="text-gold-500" />
                    <span>{vehicle.transmission}</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-display-md text-2xl text-obsidian-900 mb-6">Premium Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-body-md text-obsidian-700">
                      <div className="w-6 h-6 rounded-full bg-gold-50 flex items-center justify-center text-gold-500 mt-1 flex-shrink-0">
                        <FaCheck size={12} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-display-md text-2xl text-obsidian-900 mb-4">About this Vehicle</h3>
                <p className="text-body-lg text-obsidian-700 leading-relaxed">
                  Experience ultimate comfort and prestige with the {vehicle.name}. Designed for those who appreciate the finer things in life, this premium vehicle comes with a professional chauffeur dedicated to providing a smooth, safe, and luxurious journey. Whether for airport transfers, inter-city travel, or VIP tours, expect nothing less than perfection.
                </p>
              </div>
            </div>
            
            {/* Mobile form renders here implicitly if order changed via flex on mobile, but let's just let it flow natively (it will be under the left column on mobile) */}
          </div>

          {/* Right Column: Sidebar Form */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <TransportationForm preSelectedVehicleId={vehicle.id} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TransportationDetails;
