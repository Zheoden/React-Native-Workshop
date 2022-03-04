import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import { enT, esT } from './translations/index';

const locale = RNLocalize.getLocales();

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: locale[0].languageCode,
  debug: true,
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
