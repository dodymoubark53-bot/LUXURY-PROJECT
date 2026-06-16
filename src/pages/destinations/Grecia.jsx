import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes, FaChevronDown, FaBed, FaMapMarkerAlt } from 'react-icons/fa';
import { staggerContainer, fadeInUp, cardHover } from '../../animations/variants';
import TourCard from '../../components/tour/TourCard';
import Button from '../../components/ui/Button';
import { tours } from '../../data/tours';

// ── destination image constants ────────────────────────────────────────────
const HERO_IMG =
  'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1920&q=80';
const SANTORINI_IMG =
  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80';
const MYKONOS_IMG =
  'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80';
const ATHENS_IMG =
  'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80';

const Grecia = () => {
  const { t } = useTranslation();
  const greekTours = tours.filter((tour) => tour.destination === 'greece');

  // Find the single Greece tour for detailed sections
  const tour = greekTours[0];

  const [expandedDay, setExpandedDay] = useState(1);

  const destinations = [
    { name: 'Atenas', img: ATHENS_IMG, desc: 'Historia & Cultura' },
    { name: 'Mykonos', img: MYKONOS_IMG, desc: 'Glamour & Playas' },
    { name: 'Santorini', img: SANTORINI_IMG, desc: 'Puestas de Sol & Caldera' },
  ];

  return (
    <div className="w-full bg-obsidian-50 pb-24">
      <Helmet>
        <title>{t('dest.greece.seoTitle', 'Luxury Greece Tours & Vacations | Dunas Travel')}</title>
        <meta
          name="description"
          content={t(
            'dest.greece.seoDesc',
            'Discover the best of Greece with Dunas Travel — Athens, Mykonos, Santorini and Crete in one luxury itinerary with Spanish-speaking guides.',
          )}
        />
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="Santorini, Greece"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchpriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, rgba(15,13,11,0.3), rgba(15,13,11,0.70))',
            }}
          />
        </div>

        <motion.div
          className="relative z-10 container mx-auto px-6 text-center mt-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block font-body text-gold-500 tracking-[0.2em] uppercase text-sm mb-4"
          >
            {t('dest.greece.subtitle', 'Mitos & Horizontes Azules')}
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="text-display-xl text-ivory-50 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('dest.greece.title', 'Grecia')}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-body-lg text-ivory-300 max-w-2xl mx-auto mb-8"
          >
            {t(
              'dest.greece.desc',
              'De la majestuosa Acrópolis de Atenas a los atardeceres eternos de Santorini y las playas cristalinas de Mykonos y Creta, Grecia es el viaje que siempre soñaste.',
            )}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-400 px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              🗓 Salidas diarias · 1 Abril – 9 Octubre
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Destination Highlights Strip ────────────────────────────────── */}
      <section className="bg-obsidian-900 py-3">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-ivory-300 text-sm">
            {['🏛 Atenas', '🌊 Mykonos', '🌅 Santorini', '🏖 Creta'].map((item) => (
              <span key={item} className="flex items-center gap-2 font-medium">
                {item}
              </span>
            ))}
            <span className="border-l border-ivory-50/10 pl-8 text-gold-500 font-semibold">
              9 Días / 8 Noches
            </span>
            <span className="text-gold-500 font-semibold">Primera Clase</span>
          </div>
        </div>
      </section>

      {/* ── Brief & Tours Grid ──────────────────────────────────────────── */}
      <section className="container mx-auto px-6 mt-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold block mb-4">
            {t('dest.greece.ourJourneys', 'NUESTROS PROGRAMAS')}
          </span>
          <h2
            className="text-display-lg text-obsidian-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('dest.greece.toursTitle', 'Programas a Grecia')}
          </h2>
          <p className="text-body-lg text-obsidian-500 leading-relaxed">
            {t(
              'dest.greece.brief',
              'Grecia es el destino perfecto para quienes buscan historia milenaria, paisajes de ensueño y gastronomía mediterránea. Nuestros programas combinan las principales islas con la capital en un único viaje sin complicaciones, con guías en español y todos los ferries incluidos.',
            )}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {greekTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </motion.div>
      </section>

      {/* ── Destination Preview Cards ────────────────────────────────────── */}
      <section className="bg-obsidian-900 py-20 mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold block mb-4">
              {t('dest.greece.destLabel', 'LOS DESTINOS')}
            </span>
            <h2
              className="text-display-lg text-ivory-50"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('dest.greece.destTitle', 'Cuatro Destinos, un Solo Viaje')}
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mt-6" />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {destinations.map((dest, idx) => (
              <motion.div
                key={dest.name}
                variants={fadeInUp}
                whileHover={{ y: -6, boxShadow: '0 0 32px rgba(245,166,35,0.22)', transition: { duration: 0.4 } }}
                className="relative h-[300px] rounded-2xl overflow-hidden group cursor-default"
              >
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/85 via-obsidian-900/30 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-display-md text-ivory-50 font-semibold mb-1">{dest.name}</h3>
                  <p className="text-gold-400 text-sm font-medium">{dest.desc}</p>
                </div>
                <div className="absolute top-4 right-4 bg-obsidian-900/60 backdrop-blur-sm border border-gold-500/30 text-gold-400 text-xs px-3 py-1 rounded-full">
                  2 noches
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Crete as a wide card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 relative h-[200px] rounded-2xl overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1602343168117-bb8a12d7c180?auto=format&fit=crop&w=1920&q=80"
              alt="Creta"
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900/80 via-obsidian-900/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center pl-10">
              <h3 className="text-display-lg text-ivory-50 font-semibold mb-1">Creta (Heraklion)</h3>
              <p className="text-gold-400 text-sm font-medium">Knossos · Elounda · Spinalonga</p>
            </div>
            <div className="absolute top-4 right-6 bg-obsidian-900/60 backdrop-blur-sm border border-gold-500/30 text-gold-400 text-xs px-3 py-1 rounded-full">
              2 noches
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Accommodation Table ──────────────────────────────────────────── */}
      {tour && tour.accommodation && (
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold block mb-4">
                {t('tour.accommodation', 'ALOJAMIENTO')}
              </span>
              <h2
                className="text-display-lg text-obsidian-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t('dest.greece.accTitle', 'Resumen de Alojamientos')}
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto mt-6" />
            </div>

            <div className="bg-ivory-50 rounded-2xl shadow-card overflow-hidden border border-gold-500/10">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-obsidian-900 text-ivory-50 text-sm font-semibold uppercase tracking-wider">
                <div className="p-4 border-r border-ivory-50/10">{t('tour.destination', 'Destino')}</div>
                <div className="p-4 border-r border-ivory-50/10 text-center">{t('tour.nights', 'Noches')}</div>
                <div className="p-4 text-center">{t('tour.regime', 'Régimen')}</div>
              </div>
              {tour.accommodation.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-3 border-b border-gold-500/10 last:border-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-obsidian-50/50'}`}
                >
                  <div className="p-4 border-r border-gold-500/10 font-semibold text-obsidian-900 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-gold-500 flex-shrink-0" />
                    {row.destination}
                  </div>
                  <div className="p-4 border-r border-gold-500/10 text-center font-bold text-gold-700 text-lg">
                    {row.nights}
                  </div>
                  <div className="p-4 text-center text-obsidian-700 flex items-center justify-center gap-2">
                    <FaBed className="text-gold-500 flex-shrink-0" />
                    {row.regime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Hotels by Destination ────────────────────────────────────────── */}
      {tour && tour.hotels && (
        <section className="bg-ivory-100 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold block mb-4">
                {t('tour.hotelCategory', 'CATEGORÍA')} — {tour.hotelCategory}
              </span>
              <h2
                className="text-display-lg text-obsidian-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t('dest.greece.hotelsTitle', 'Hoteles de Primera Clase')}
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto mt-6" />
              <p className="text-body-md text-obsidian-500 mt-4 max-w-xl mx-auto">
                {t('dest.greece.hotelsDesc', 'En función de la disponibilidad, alojamiento en uno de los siguientes hoteles de primera clase en cada destino.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(tour.hotels).map(([city, hotelList]) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-ivory-50 rounded-2xl shadow-card border border-gold-500/10 overflow-hidden"
                >
                  <div className="bg-obsidian-900 px-5 py-4">
                    <h3 className="text-gold-500 font-semibold text-sm uppercase tracking-widest flex items-center gap-2">
                      <FaMapMarkerAlt className="flex-shrink-0" />
                      {city}
                    </h3>
                  </div>
                  <ul className="p-4 flex flex-col gap-2">
                    {hotelList.map((hotel, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-body-sm text-obsidian-700 py-1.5 border-b border-gold-500/5 last:border-0"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                        {hotel}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Itinerary Accordion ──────────────────────────────────────────── */}
      {tour && tour.itinerary && (
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold block mb-4">
                {t('tour.stepByStep', 'DÍA A DÍA')}
              </span>
              <h2
                className="text-display-lg text-obsidian-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t('tour.detailedItinerary', 'Itinerario Detallado')}
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto mt-6" />
            </div>

            <div className="relative pl-6 md:pl-10">
              {/* Vertical timeline line */}
              <div className="absolute left-[11px] md:left-[19px] top-8 bottom-8 w-[2px] bg-[rgba(201,162,39,0.2)]" />

              <div className="flex flex-col gap-6">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="relative">
                    {/* Pulsing dot */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(201,162,39,0.4)',
                          '0 0 0 8px rgba(201,162,39,0)',
                          '0 0 0 0 rgba(201,162,39,0.4)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -left-6 md:-left-10 top-[26px] w-3 h-3 bg-gold-500 rounded-full transform -translate-x-1/2 z-10"
                    />

                    <div
                      className="rounded-xl overflow-hidden group"
                      style={{
                        backgroundColor:
                          expandedDay === day.day
                            ? 'rgba(201,162,39,0.08)'
                            : 'rgba(201,162,39,0.04)',
                        borderLeft: '2px solid rgba(201,162,39,0.3)',
                        boxShadow:
                          expandedDay === day.day
                            ? '-3px 0 12px rgba(201,162,39,0.3)'
                            : 'none',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <button
                        onClick={() =>
                          setExpandedDay(expandedDay === day.day ? null : day.day)
                        }
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <h3 className="text-body-lg font-semibold text-obsidian-900">
                          <span className="text-gold-600 mr-2 font-display">
                            {t('tour.day', 'Día')} {day.day} —
                          </span>{' '}
                          {day.title}
                        </h3>
                        <motion.div
                          animate={{ rotate: expandedDay === day.day ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className="text-gold-500 flex-shrink-0" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {expandedDay === day.day && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: 'auto',
                              opacity: 1,
                              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                              transition: { duration: 0.3 },
                            }}
                            className="px-6 pb-6 overflow-hidden"
                          >
                            <div className="bg-obsidian-900 p-6 rounded-xl flex flex-col gap-4 shadow-inner">
                              <div className="flex items-start gap-4 pb-4 border-b border-[rgba(201,162,39,0.1)]">
                                <span className="text-2xl mt-1">🌅</span>
                                <div>
                                  <span className="font-bold text-[#C9A227] block mb-1">
                                    {t('tour.morning', 'Mañana')}
                                  </span>
                                  <p className="text-[#F5EDD6] text-body-md leading-relaxed">
                                    {day.morning}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-4 pb-4 border-b border-[rgba(201,162,39,0.1)]">
                                <span className="text-2xl mt-1">☀️</span>
                                <div>
                                  <span className="font-bold text-[#C9A227] block mb-1">
                                    {t('tour.afternoon', 'Tarde')}
                                  </span>
                                  <p className="text-[#F5EDD6] text-body-md leading-relaxed">
                                    {day.afternoon}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-4">
                                <span className="text-2xl mt-1">🌙</span>
                                <div>
                                  <span className="font-bold text-[#C9A227] block mb-1">
                                    {t('tour.evening', 'Noche')}
                                  </span>
                                  <p className="text-[#F5EDD6] text-body-md leading-relaxed">
                                    {day.evening}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Included / Excluded ──────────────────────────────────────────── */}
      {tour && (
        <section className="bg-ivory-100 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold block mb-4">
                {t('tour.inclusions', 'INCLUYE / NO INCLUYE')}
              </span>
              <h2
                className="text-display-lg text-obsidian-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t('dest.greece.inclusionsTitle', 'Qué está incluido')}
              </h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto mt-6" />
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Included */}
              <div className="bg-ivory-50 rounded-2xl shadow-card p-8 border border-gold-500/10">
                <h3 className="text-display-md text-obsidian-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                    <FaCheck className="text-green-500 text-sm" />
                  </span>
                  {t('tourDetail.included', 'Incluido')}
                </h3>
                <ul className="flex flex-col gap-3">
                  {tour.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-body-md text-obsidian-700">
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className="bg-ivory-50 rounded-2xl shadow-card p-8 border border-red-100">
                <h3 className="text-display-md text-obsidian-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <FaTimes className="text-red-400 text-sm" />
                  </span>
                  {t('tourDetail.excluded', 'No incluido')}
                </h3>
                <ul className="flex flex-col gap-3">
                  {tour.excluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-body-md text-obsidian-700">
                      <FaTimes className="text-red-400 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SANTORINI_IMG})` }}
        />
        <div className="absolute inset-0 bg-obsidian-900/75" />
        <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
          <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold block mb-4">
            {t('dest.greece.ctaLabel', '¿LISTO PARA VOLAR A GRECIA?')}
          </span>
          <h2
            className="text-display-xl text-ivory-50 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('dest.greece.ctaTitle', 'Tu aventura griega comienza aquí')}
          </h2>
          <p className="text-body-lg text-ivory-300 mb-10">
            {t(
              'dest.greece.ctaDesc',
              'Reserva ahora y viaja con guías en español, alojamiento de primera clase y todos los ferries incluidos.',
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours/lo-mejor-de-grecia-9d">
              <Button variant="gold-glow" className="w-full sm:w-auto px-10 py-4">
                {t('dest.greece.ctaBtn', 'Ver Programa Completo')}
              </Button>
            </Link>
            <Link to="/tailor-a-tour">
              <Button variant="glass" className="w-full sm:w-auto px-10 py-4">
                {t('home.tailorTour', 'Personalizar Viaje')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grecia;
