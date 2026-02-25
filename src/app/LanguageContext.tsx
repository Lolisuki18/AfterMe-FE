import { createContext, useState, type ReactNode } from "react";
import { en, vi, type Translations } from "@/locales";

export type Language = "en" | "vi";

export interface LanguageContextValue {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

/* ============================================================
   Context
   ============================================================ */
const LanguageContext = createContext<LanguageContextValue | null>(null);

export { LanguageContext };

/* ============================================================
   Provider
   ============================================================ */
const translations: Record<Language, Translations> = { en, vi };

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "vi";
    return (localStorage.getItem("language") as Language) ?? "vi";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const toggleLanguage = () => setLanguage(language === "vi" ? "en" : "vi");

  return (
    <LanguageContext.Provider
      value={{
        language,
        t: translations[language],
        toggleLanguage,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
