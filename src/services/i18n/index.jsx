import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";
import config from "../../config";
import storage from "../storage";
const i18config = i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(I18NextHttpBackend)
  .init({
    lng: storage.get("lang") || config.DEFAULT_APP_LANG,
    fallbackLng: storage.get("lang") || config.DEFAULT_APP_LANG,
    saveMissing: false,
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "lang",
    },
    react: {
      useSuspense: true,
      wait: true,
    },
    backend: {
      // loadPath: ``,
      // addPath: ``,
    },
  });

export default i18config;
