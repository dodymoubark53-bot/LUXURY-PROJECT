import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../ui/Logo';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-obsidian-900 text-ivory-300 pt-20 pb-8 border-t border-ivory-50/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Socials */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <Logo theme="dark" height={48} />
            </Link>
            <p className="text-body-md mb-6 opacity-80">
              {t('footer.desc', 'Curating award-winning luxury travel experiences across Egypt, Jordan, and Turkey since 2010.')}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="footer-social w-10 h-10 rounded-full bg-obsidian-700 flex items-center justify-center text-ivory-50 hover:bg-gold-500 hover:text-obsidian-900 transition-all duration-300 hover:scale-110" style={{ boxShadow: 'none', filter: 'none', textShadow: 'none' }}>
                <FaFacebook />
              </a>
              <a href="#" className="footer-social w-10 h-10 rounded-full bg-obsidian-700 flex items-center justify-center text-ivory-50 hover:bg-gold-500 hover:text-obsidian-900 transition-all duration-300 hover:scale-110" style={{ boxShadow: 'none', filter: 'none', textShadow: 'none' }}>
                <FaInstagram />
              </a>
              <a href="#" className="footer-social w-10 h-10 rounded-full bg-obsidian-700 flex items-center justify-center text-ivory-50 hover:bg-gold-500 hover:text-obsidian-900 transition-all duration-300 hover:scale-110" style={{ boxShadow: 'none', filter: 'none', textShadow: 'none' }}>
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-display-md text-ivory-50 mb-6 text-lg">{t('footer.quickLinks', 'Quick Links')}</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/blogs" className="hover:text-gold-500 transition-colors">{t('nav.blogs')}</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">{t('nav.contact')}</Link></li>
              <li><Link to="/faq" className="hover:text-gold-500 transition-colors">{t('footer.faq', 'FAQs')}</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-display-md text-ivory-50 mb-6 text-lg">{t('nav.destinations')}</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/destinations/egypt" className="hover:text-gold-500 transition-colors">{t('nav.egypt')}</Link></li>
              <li><Link to="/destinations/jordan" className="hover:text-gold-500 transition-colors">{t('nav.jordan')}</Link></li>
              <li><Link to="/destinations/turkey" className="hover:text-gold-500 transition-colors">{t('nav.turkey')}</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-display-md text-ivory-50 mb-6 text-lg">{t('nav.contact')}</h4>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gold-500 mt-1" />
                <span>{t('footer.address', '123 Luxury Avenue, Cairo, Egypt')}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-gold-500" />
                <a href="tel:+201004146843" className="hover:text-gold-500 transition-colors">+20 100 414 6843</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gold-500" />
                <a href="mailto:info@luxurytravel.com" className="hover:text-gold-500 transition-colors">info@luxurytravel.com</a>
              </li>
            </ul>

            <form className="relative">
              <input 
                type="email" 
                placeholder={t('footer.newsletter', 'Subscribe to newsletter')}
                className="w-full bg-obsidian-700 border border-ivory-50/10 rounded-full py-3 px-6 text-ivory-50 outline-none focus:border-gold-500 transition-colors placeholder:text-ivory-50/40"
              />
              <button 
                type="submit" 
                className="absolute right-1 top-1 bottom-1 bg-gold-500 hover:bg-gold-300 text-obsidian-900 rounded-full px-6 font-medium transition-colors"
              >
                {t('footer.join', 'Join')}
              </button>
            </form>
          </div>
          
        </div>

        {/* Credits */}
        <div className="pt-8 border-t border-ivory-50/10 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-caption opacity-80">
            &copy; {new Date().getFullYear()} Luxury Travel. {t('footer.rights', 'All rights reserved.')}
          </p>
          <p className="text-caption text-gold-500">
            {t('footer.created', 'Created by Dina Hefny')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
