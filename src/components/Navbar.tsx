import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useLanguage } from "../i18n/useLanguage";
import type { Locale } from "../i18n/translations";

// Compact PT/EN toggle used in both the desktop bar and the mobile menu.
function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  const toggleTo: Locale = language === "en" ? "pt" : "en";

  return (
    <button
      type="button"
      onClick={() => setLanguage(toggleTo)}
      className={`inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-600 transition-colors hover:border-brand-primary hover:text-brand-primary dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-accent dark:hover:text-brand-accent ${className}`}
      aria-label={`Switch language to ${toggleTo === "en" ? "English" : "Português"}`}
    >
      <span className={language === "en" ? "text-brand-primary dark:text-brand-accent" : ""}>
        EN
      </span>
      <span aria-hidden="true">/</span>
      <span className={language === "pt" ? "text-brand-primary dark:text-brand-accent" : ""}>
        PT
      </span>
    </button>
  );
}

// Sticky top navigation: brand mark, primary nav links, language switcher,
// and the main "Schedule a Consultation" CTA. Collapses into a slide-down
// menu on mobile.
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const NAV_LINKS = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.solutions, href: "#solutions" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="" className="h-8 w-8" />
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Vértice Sistemas
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-primary dark:text-slate-300 dark:hover:text-brand-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-brand-secondary hover:shadow-md active:scale-95"
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 md:hidden dark:text-slate-200"
          aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher className="self-start" />
            <a
              href="#contact"
              className="mt-2 rounded-lg bg-brand-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
