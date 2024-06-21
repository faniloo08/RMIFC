"use client";

import { I18nextProvider, initReactI18next } from "react-i18next";
import initTranslations from '@/app/i18n';
import { createInstance } from "i18next";

export default function TranslationsProvider({
    children,
    locale,
    namespace,
    ressources
}){
    const i18n = createInstance();

    initTranslations(locale, namespace, i18n, ressources);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}