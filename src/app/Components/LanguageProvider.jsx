"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { localeLabels, locales, translations } from "../lib/translations";

const LocaleContext = createContext({
  locale: "en",
  setLanguage: (locale) => {},
  t: (key) => key,
  localeLabels: {},
  availableLocales: [],
});

export function useLocale() {
  return useContext(LocaleContext);
}

export default function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("ceylonix_locale");
    if (storedLocale && locales.includes(storedLocale)) {
      setLocale(storedLocale);
    }
  }, []);

  const setLanguage = (nextLocale) => {
    if (!locales.includes(nextLocale)) return;
    setLocale(nextLocale);
    window.localStorage.setItem("ceylonix_locale", nextLocale);
  };

  const t = (key) => {
    const path = Array.isArray(key) ? key : String(key).split(".");
    const read = (source) => path.reduce((value, segment) => (value == null ? value : value[segment]), source);
    const localized = read(translations[locale]);
    if (localized != null) return localized;
    const fallback = read(translations.en);
    return fallback == null ? key : fallback;
  };

  const value = useMemo(
    () => ({
      locale,
      setLanguage,
      t,
      localeLabels,
      availableLocales: locales,
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
