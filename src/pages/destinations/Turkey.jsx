import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../animations/variants';
import TourCard from '../../components/tour/TourCard';
import { tours } from '../../data/tours';

const Turkey = () => {
  const turkeyTours = tours.filter((tour) => tour.destination === 'turkey');

  return (
    <div className="w-full bg-obsidian-50 pb-24">
      <Helmet>
        <title>Luxury Turkey Tours & Vacations | Luxury Travel</title>
        <meta name="description" content="Discover Turkey. From the imperial palaces of Istanbul to the fairy chimneys of Cappadocia, embark on an unforgettable luxury journey." />
      </Helmet>

      {/* Destination Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1481180/pexels-photo-1481180.jpeg?auto=compress&cs=tinysrgb&w=1600&fit=crop"
            alt="Turkey Cappadocia Hero"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-obsidian-900/60"></div>
        </div>

        <motion.div
          className="relative z-10 container mx-auto px-6 text-center mt-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeInUp} className="text-gold-500 uppercase tracking-widest text-caption block mb-4">
            Where Continents Meet
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-display-xl text-ivory-50 mb-6">
            Turkey
          </motion.h1>
        </motion.div>
      </section>

      {/* Destination Brief & Tours Grid */}
      <section className="container mx-auto px-6 mt-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-body-lg text-obsidian-500 leading-relaxed">
            A captivating bridge between East and West, Turkey is a tapestry of vibrant bazaars, Byzantine masterpieces, and breathtaking coastlines. Whether you are sailing the turquoise waters of the Aegean Sea, marveling at the thermal terraces of Pamukkale, or waking up to a sky filled with hot air balloons in Cappadocia, every moment is curated for absolute luxury and cultural immersion.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {turkeyTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Turkey;
