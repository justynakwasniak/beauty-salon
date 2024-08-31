// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import tłumaczeń
import enTranslation from "./locales/en";
import plTranslation from "./locales/pl";

// Inicjalizacja i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    pl: { translation: plTranslation },
  },
  lng: "en", // Domyślny język
  fallbackLng: "en", // Język, który zostanie użyty, jeśli tłumaczenie nie jest dostępne
  interpolation: {
    escapeValue: false, // React już ucieka wartości
  },
});

export default i18n;
