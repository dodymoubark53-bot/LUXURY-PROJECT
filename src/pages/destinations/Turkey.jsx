import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../animations/variants';
import TourCard from '../../components/tour/TourCard';
import { tours } from '../../data/tours';

const Turkey = () => {
  const { t } = useTranslation();
  const turkeyTours = tours.filter((tour) => tour.destination === 'turkey');

  return (
    <div className="w-full bg-obsidian-50 pb-24">
      <Helmet>
        <title>{t('dest.turkey.seoTitle', 'Luxury Turkey Tours & Vacations | Luxury Travel')}</title>
        <meta name="description" content={t('dest.turkey.seoDesc', "Discover Turkey. From the imperial palaces of Istanbul to the fairy chimneys of Cappadocia, embark on an unforgettable luxury journey.")} />
      </Helmet>

      {/* Destination Hero */}
      <section className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1920&q=80"
            alt="Cappadocia Hot Air Balloons Sunrise"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div 
            className="absolute inset-0" 
            style={{ backgroundImage: 'linear-gradient(to bottom, rgba(15,13,11,0.3), rgba(15,13,11,0.65))' }}
          ></div>
        </div>

        <motion.div
          className="relative z-10 container mx-auto px-6 text-center mt-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeInUp} className="inline-block font-body text-gold-500 tracking-[0.2em] uppercase text-sm mb-4">
            {t('dest.turkey.subtitle', 'Where Continents Meet')}
          </motion.span>
          <motion.h1 
            variants={fadeInUp} 
            className="text-display-xl text-ivory-50 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('dest.turkey.title', 'Turkey')}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-body-lg text-ivory-300 max-w-2xl mx-auto">
            {t('dest.turkey.desc', 'From the imperial palaces of Istanbul to the fairy chimneys of Cappadocia, embark on an unforgettable luxury journey where East meets West.')}
          </motion.p>
        </motion.div>
      </section>

      {/* Destination Brief & Tours Grid */}
      <section className="container mx-auto px-6 mt-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-body-lg text-obsidian-500 leading-relaxed">
            {t('dest.turkey.brief', 'A captivating bridge between East and West, Turkey is a tapestry of vibrant bazaars, Byzantine masterpieces, and breathtaking coastlines. Whether you are sailing the turquoise waters of the Aegean Sea, marveling at the thermal terraces of Pamukkale, or waking up to a sky filled with hot air balloons in Cappadocia, every moment is curated for absolute luxury and cultural immersion.')}
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
