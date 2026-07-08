import { createContext } from "react";
import type { Locale, Translations } from "./translations";

export interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
