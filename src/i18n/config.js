import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n

.use(initReactI18next)
.use(HttpApi)
.use(LanguageDetector) // Registering the detection plugin
.init({
  fallbackLng: 'en',
  
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    es: {
      translations: require('./locales/es/translations.json')
    },
    fr: {
      translations: require('./locales/fr/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
  
});

i18n.languages = ['en', 'es', 'fr'];

export default i18n;