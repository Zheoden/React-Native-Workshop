import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enT, esT } from './translations/index';

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: enT
    },
    es: {
      translation: esT
    }
  }
});

export default i18next;
