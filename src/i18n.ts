import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en";
import plTranslation from "./locales/pl";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    pl: { translation: plTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
