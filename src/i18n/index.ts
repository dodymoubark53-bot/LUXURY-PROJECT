import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ar from './locales/ar.json';
import es from './locales/es.json';
import pt from './locales/pt.json';
import it from './locales/it.json';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
  es: { translation: es },
  pt: { translation: pt },
  it: { translation: it }
};

const getInitialLang = () => {
  try {
    const stored = localStorage.getItem('i18nextLng');
    if (stored && ['en', 'ar', 'es', 'pt', 'it'].includes(stored.split('-')[0])) {
      return stored.split('-')[0];
    }
  } catch (e) {}
  return 'es';
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLang(),
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
