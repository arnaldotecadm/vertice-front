import { useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext } from "./languageContextValue";
import { translations, type Locale } from "./translations";

const STORAGE_KEY = "vertice-language";

function detectInitialLanguage(): Locale {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "pt") return stored;

  // Default to Portuguese for Portuguese-speaking visitors (Vértice Sistemas
  // is based in Portugal), otherwise fall back to English.
  return window.navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

// Provides the active language and translation dictionary to the whole app,
// persisting the visitor's choice to localStorage.
function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>(detectInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (next: Locale) => {
    setLanguageState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
