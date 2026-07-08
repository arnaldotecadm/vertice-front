import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "../assets/logo.png";
import { useLanguage } from "../i18n/useLanguage";
import type { Locale } from "../i18n/translations";
import { useTheme } from "../theme/useTheme";

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  const toggleTo: Locale = language === "en" ? "pt" : "en";

  return (
    <button
      type="button"
      onClick={() => setLanguage(toggleTo)}
      className={cn(
        "inline-flex items-center gap-1 rounded-xl border border-border bg-background px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-foreground",
        className
      )}
      aria-label={`Switch language to ${toggleTo === "en" ? "English" : "Português"}`}
    >
      <span className={language === "en" ? "text-primary" : ""}>EN</span>
      <span aria-hidden="true">/</span>
      <span className={language === "pt" ? "text-primary" : ""}>PT</span>
    </button>
  );
}

function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? t.nav.switchToLightMode : t.nav.switchToDarkMode}
      className={cn(
        "inline-flex items-center justify-center rounded-xl border border-border bg-background p-2 text-muted-foreground transition-colors hover:border-primary hover:text-foreground",
        className
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const NAV_LINKS = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="" className="h-8 w-8 rounded-lg" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Vertice Sistemas
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-10 rounded-xl px-5 shadow-sm"
            )}
          >
            {t.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-border bg-background p-2 text-foreground md:hidden"
          aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "mt-2 h-10 rounded-xl px-5"
              )}
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
