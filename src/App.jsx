import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Layout from './components/layout/Layout';

// Lazy loaded pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Egypt = lazy(() => import('./pages/destinations/Egypt'));
const Jordan = lazy(() => import('./pages/destinations/Jordan'));
const Turkey = lazy(() => import('./pages/destinations/Turkey'));
const Destinations = lazy(() => import('./pages/destinations/Destinations'));
const TourDetails = lazy(() => import('./pages/tours/TourDetails'));
const BlogDetails = lazy(() => import('./pages/blogs/BlogDetails'));
const ServiceDetails = lazy(() => import('./pages/services/ServiceDetails'));
const Transportation = lazy(() => import('./pages/transportation/Transportation'));
const TransportationDetails = lazy(() => import('./pages/transportation/TransportationDetails'));

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

import { variants } from './animations/variants';

const CinematicLoader = ({ onComplete }) => (
  <motion.div 
    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-obsidian-900"
    variants={variants.loadingExit}
    initial="initial"
    animate="animate"
    exit="exit"
    onAnimationComplete={onComplete}
  >
    <div aria-live="polite" className="sr-only">Loading Luxury Travel experiences...</div>
    <div className="flex flex-col items-center">
      {/* Fake Logo Mark */}
      <motion.div 
        className="w-12 h-12 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gold-500">
          <path d="M16 2L2 30L16 22L30 30L16 2M16 2V22" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </motion.div>
      
      {/* Brand & Tagline */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="font-display text-2xl text-ivory-50 tracking-[0.08em] mb-2 uppercase">Lumina</h1>
        <p className="font-body text-caption text-gold-500 tracking-[0.12em] uppercase">The World, Curated.</p>
      </motion.div>

      {/* Gold Line Expands */}
      <motion.div 
        className="h-[1px] bg-gold-500 mt-8"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 120, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  </motion.div>
);

const FallbackLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-obsidian-900">
    <div className="w-8 h-8 border-2 border-gold-300 border-t-gold-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const [initialLoading, setInitialLoading] = React.useState(true);
  const { i18n } = useTranslation();

  React.useEffect(() => {
    // Cinematic load duration
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-gradient-to-r from-gold-700 via-gold-500 to-gold-300"
      />

      <AnimatePresence>
        {initialLoading && <CinematicLoader onComplete={() => setInitialLoading(false)} />}
      </AnimatePresence>

      {!initialLoading && (
        <Suspense fallback={<FallbackLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Layout />}>
                <Route index element={<PageTransition><Home /></PageTransition>} />
                <Route path="about" element={<PageTransition><About /></PageTransition>} />
                <Route path="blogs">
                  <Route index element={<PageTransition><Blogs /></PageTransition>} />
                  <Route path=":slug" element={<PageTransition><BlogDetails /></PageTransition>} />
                </Route>
                <Route path="services">
                  <Route index element={<PageTransition><Services /></PageTransition>} />
                  <Route path=":service" element={<PageTransition><Services /></PageTransition>} />
                  <Route path=":category/:slug" element={<PageTransition><ServiceDetails /></PageTransition>} />
                </Route>
                <Route path="destinations">
                  <Route index element={<PageTransition><Destinations /></PageTransition>} />
                  <Route path="egypt" element={<PageTransition><Egypt /></PageTransition>} />
                  <Route path="jordan" element={<PageTransition><Jordan /></PageTransition>} />
                  <Route path="turkey" element={<PageTransition><Turkey /></PageTransition>} />
                </Route>
                <Route path="tours">
                  <Route path=":slug" element={<PageTransition><TourDetails /></PageTransition>} />
                </Route>
                <Route path="transportation">
                  <Route index element={<PageTransition><Transportation /></PageTransition>} />
                  <Route path=":slug" element={<PageTransition><TransportationDetails /></PageTransition>} />
                </Route>
                <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
              </Route>
            </Routes>
          </AnimatePresence>
        </Suspense>
      )}
    </>
  );
}

export default App;
