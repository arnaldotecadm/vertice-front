import { useContext } from "react";
import { LanguageContext } from "./languageContextValue";

// Access the active language, translation dictionary, and setter. Must be
// used within a <LanguageProvider>.
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
