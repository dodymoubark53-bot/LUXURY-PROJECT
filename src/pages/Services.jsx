import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, cardHover } from '../animations/variants';
import Button from '../components/ui/Button';
import { services as allServicesData } from '../data/services';

const Services = () => {
  const { service } = useParams();

  const categories = [
    { id: 'hotels', title: 'Luxury Hotels', desc: 'Hand-picked 5-star accommodations offering unparalleled views and comfort.' },
    { id: 'safari', title: 'Desert Safari', desc: 'Thrilling off-road adventures with premium SUVs and expert drivers.' },
    { id: 'camping', title: 'Glamping', desc: 'Luxury tented camps under the stars with private chefs and amenities.' },
    { id: 'cruises', title: 'Nile Cruises', desc: 'Boutique Dahabiyas and luxury ships sailing the timeless river.' }
  ];

  const filteredServices = service ? allServicesData.filter(s => s.category === service) : allServicesData;

  return (
    <div className="w-full bg-obsidian-50 pb-24">
      <Helmet>
        <title>{service ? `${service.charAt(0).toUpperCase() + service.slice(1)} | Luxury Services` : 'Our Services | Luxury Travel'}</title>
        <meta name="description" content="Discover our tailored luxury services including 5-star hotels, desert safaris, glamping, and private Nile cruises." />
      </Helmet>
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-obsidian-900"></div>
        <motion.div className="relative z-10 text-center" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.span variants={fadeInUp} className="text-gold-500 uppercase tracking-widest text-caption block mb-4">Tailored Experiences</motion.span>
          <motion.h1 variants={fadeInUp} className="text-display-xl text-ivory-50">Our Services</motion.h1>
          {service && (
            <motion.p variants={fadeInUp} className="text-body-lg text-ivory-300 mt-4 capitalize">
              Explore {service}
            </motion.p>
          )}
        </motion.div>
      </section>

      <section className="container mx-auto px-6 py-12">
        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link to="/services">
            <Button variant={!service ? 'gold-glow' : 'outline-gold'} className="px-6 py-2 text-sm">All Services</Button>
          </Link>
          {categories.map(cat => (
            <Link key={cat.id} to={`/services/${cat.id}`}>
              <Button variant={service === cat.id ? 'gold-glow' : 'outline-gold'} className="px-6 py-2 text-sm">{cat.title}</Button>
            </Link>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {filteredServices.map((item) => (
            <motion.div 
              key={item.id} 
              variants={fadeInUp}
              className="bg-ivory-50 rounded-2xl overflow-hidden shadow-card group h-full flex flex-col transition-all"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-gold-500 text-obsidian-900 text-caption uppercase px-3 py-1 rounded-full shadow-md">{item.location}</div>
                <img src={`${item.images[0]}?auto=compress&cs=tinysrgb&w=800&fit=crop&crop=center`} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-caption text-obsidian-300 uppercase tracking-widest">{item.category}</span>
                  <div className="flex items-center text-gold-500 text-caption font-medium">
                    <span className="mr-1">★</span> {item.rating}
                  </div>
                </div>
                <h3 className="text-display-md text-obsidian-900 mb-3 text-xl line-clamp-1">{item.title}</h3>
                <p className="text-body-sm text-obsidian-500 line-clamp-2 mb-6">{item.shortDesc}</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-caption text-obsidian-300 block">From</span>
                    <span className="text-body-lg font-semibold text-obsidian-900">${item.price}</span>
                  </div>
                  <Link to={`/services/${item.category}/${item.slug}`}>
                    <Button variant="outline-gold" className="px-4 py-2 text-sm group-hover:bg-gold-500 group-hover:text-obsidian-900 group-hover:shadow-[0_0_15px_rgba(201,162,39,0.4)] transition-all">View Details</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
