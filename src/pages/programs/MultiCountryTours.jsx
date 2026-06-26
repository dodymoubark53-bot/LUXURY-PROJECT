import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TourCard from '../../components/tour/TourCard';
import { multiCountryTours } from '../../data/multiCountryTours';

const MultiCountryTours = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('programs.multiCountryTitle', 'Multi-Country Tours')} | Dunas Travel</title>
        <meta name="description" content={t('programs.multiCountryDesc', 'Multi-Country Tours')} />
      </Helmet>

      <section className="relative min-h-screen bg-ivory-50 pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-display-xl text-obsidian-900 font-display font-bold mb-4">
              {t('programs.multiCountryTitle', 'Multi-Country Tours')}
            </h1>
            <p className="text-body-lg text-obsidian-500 max-w-2xl mx-auto">
              {t('programs.multiCountrySubtitle', 'Epic Cross-Border Odysseys')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {multiCountryTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                linkBase="/programs/multi-country"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MultiCountryTours;
