import i18nForTests from "i18next";
import { initReactI18next } from "react-i18next";

i18nForTests.use(initReactI18next).init({
  lng: "ru",
  fallbackLng: "ru",
  debug: false,

  interpolation: {
    escapeValue: false,
  },
  resources: { ru: { translations: {} } },
});

export { i18nForTests };
