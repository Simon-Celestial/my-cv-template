import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationTR from "/public/Translations/tr.json";
import translationEN from "/public/Translations/en.json";
import translationRU from "/public/Translations/ru.json";
import translationAZ from "/public/Translations/az.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: translationEN,
            },
            ru: {
                translation: translationRU,
            },
            tr: {
                translation: translationTR,
            },
            az: {
                translation: translationAZ,
            }

        },
        lng: 'en',
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;