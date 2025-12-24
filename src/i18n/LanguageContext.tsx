import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language, Translations } from "./translations";

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && (saved === "pt" || saved === "en")) {
      return saved;
    }
    // Detect browser language, default to English
    const browserLang = navigator.language.split("-")[0];
    return browserLang === "pt" ? "pt" : "en";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
