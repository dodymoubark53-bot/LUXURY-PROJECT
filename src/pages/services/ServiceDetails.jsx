import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimes, FaStar, FaMapMarkerAlt, FaTimesCircle } from 'react-icons/fa';
import Button from '../../components/ui/Button';
import { staggerContainer, fadeInUp } from '../../animations/variants';
import { services } from '../../data/services';
import InquiryForm from '../../components/booking/InquiryForm';

const ServiceDetails = () => {
  const { category, slug } = useParams();
  const service = services.find((s) => s.category === category && s.slug === slug);
  const [activeImage, setActiveImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-obsidian-50">
        <h1 className="text-display-lg text-obsidian-900">Service not found</h1>
      </div>
    );
  }

  const relatedServices = services.filter((s) => s.category === category && s.id !== service.id).slice(0, 3);

  return (
    <div className="w-full bg-obsidian-50 pb-24">
      <Helmet>
        <title>{service.title} | Luxury {category.charAt(0).toUpperCase() + category.slice(1)}</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-end justify-center overflow-hidden pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={`${service.images[0]}?w=1600&q=90&fit=crop`}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-obsidian-900/60 bg-gradient-to-t from-obsidian-900 via-obsidian-900/30 to-transparent"></div>
        </div>

        <motion.div
          className="relative z-10 container mx-auto px-6 max-w-5xl flex flex-col md:flex-row justify-between items-end"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="mb-6 md:mb-0">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4 text-caption text-gold-500 uppercase tracking-widest font-medium">
              <span>{category}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              <span className="flex items-center gap-1"><FaMapMarkerAlt /> {service.location}</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-display-lg md:text-display-xl text-ivory-50">
              {service.title}
            </motion.h1>
          </div>
          
          <motion.div variants={fadeInUp} className="flex flex-col items-start md:items-end bg-obsidian-900/80 backdrop-blur-md p-6 rounded-2xl border border-ivory-50/10">
            <div className="flex text-gold-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(service.rating) ? "text-gold-500" : "text-obsidian-300"} />
              ))}
              <span className="text-ivory-50 ml-2 text-body-sm font-medium">{service.rating}</span>
            </div>
            <div className="text-ivory-300 text-caption uppercase tracking-wider mb-1">Starting From</div>
            <div className="text-display-md text-ivory-50">${service.price}</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 mt-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            {/* Overview */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-display-md text-obsidian-900 mb-6">Overview</h2>
              <div className="prose prose-lg prose-p:text-obsidian-500 prose-p:font-body prose-p:mb-6">
                {service.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12">
              <h2 className="text-display-md text-obsidian-900 mb-6">Key Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-gold-500 mt-1 flex-shrink-0" />
                    <span className="text-body-md text-obsidian-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Included / Excluded */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 bg-ivory-50 p-8 rounded-2xl shadow-sm border border-obsidian-900/5">
              <h2 className="text-display-md text-obsidian-900 mb-8">What's Included & Excluded</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-body-lg font-semibold text-sage-700 mb-4 flex items-center gap-2">Included</h3>
                  <ul className="space-y-3">
                    {service.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-obsidian-500">
                        <FaCheckCircle className="text-sage-500 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-body-lg font-semibold text-red-700 mb-4 flex items-center gap-2">Not Included</h3>
                  <ul className="space-y-3">
                    {service.excluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-obsidian-500">
                        <FaTimesCircle className="text-red-500 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Photo Gallery */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
              <h2 className="text-display-md text-obsidian-900 mb-6">Gallery</h2>
              <div className="grid grid-cols-3 gap-4">
                {service.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-xl overflow-hidden cursor-pointer group relative ${idx === 0 ? 'col-span-3 h-80' : 'col-span-1 h-40'}`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img src={`${img}?w=400&q=75&fit=crop`} alt={`${service.title} ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-ivory-50 rounded-2xl shadow-card p-8 border border-gold-500/10">
                <h3 className="text-display-sm text-obsidian-900 mb-2">Book Your Experience</h3>
                <p className="text-body-sm text-obsidian-300 mb-6">Our concierge team will confirm availability within 2 hours.</p>
                
                <Button variant="gold-glow" className="w-full py-4 mb-4" onClick={() => setIsModalOpen(true)}>
                  Inquire Now
                </Button>
                
                <div className="text-center">
                  <span className="text-caption text-obsidian-300 flex items-center justify-center gap-2">
                    <FaCheckCircle className="text-sage-500" /> Best Price Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-ivory-50 py-24 mt-24 border-t border-obsidian-900/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-display-lg text-obsidian-900">More {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relService) => (
                <div key={relService.id} className="bg-obsidian-50 rounded-2xl overflow-hidden group h-full flex flex-col shadow-sm border border-obsidian-900/5 hover:shadow-card transition-all">
                  <div className="relative h-60 overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 bg-gold-500 text-obsidian-900 text-caption uppercase px-3 py-1 rounded-full">{relService.location}</div>
                    <img src={`${relService.images[0]}?auto=compress&cs=tinysrgb&w=800&fit=crop&crop=center`} alt={relService.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-display-md text-obsidian-900 mb-3 text-xl line-clamp-1">{relService.title}</h3>
                    <p className="text-body-sm text-obsidian-500 line-clamp-2 mb-6">{relService.shortDesc}</p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-obsidian-900/10">
                      <div>
                        <span className="text-caption text-obsidian-300 block">From</span>
                        <span className="text-body-lg font-semibold text-obsidian-900">${relService.price}</span>
                      </div>
                      <Link to={`/services/${relService.category}/${relService.slug}`}>
                        <Button variant="outline-gold" className="px-4 py-2 text-sm">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry Modal */}
      <InquiryForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} tourName={service.title} />

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-obsidian-900/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <button className="absolute top-6 right-6 text-ivory-50 hover:text-gold-500 z-50">
              <FaTimes size={32} />
            </button>
            <img src={`${activeImage}?w=1600&q=90&fit=crop`} className="max-w-full max-h-[90vh] object-contain rounded-lg" alt="Gallery preview" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceDetails;
