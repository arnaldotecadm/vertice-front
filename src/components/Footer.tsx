import { Mail } from "lucide-react";
import logo from "../assets/logo.png";
import { useLanguage } from "../i18n/useLanguage";

// Simple LinkedIn glyph, since lucide-react doesn't ship brand/social icons.
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

// Site footer: brand recap, navigation, and contact/social links.
function Footer() {
  const { t } = useLanguage();

  const NAVIGATION_LINKS = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.solutions, href: "#solutions" },
    { label: t.nav.about, href: "#about" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-7 w-7" />
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                Vértice Sistemas
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-brand-primary uppercase dark:text-brand-accent">
              {t.footer.navigationTitle}
            </h3>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-primary dark:text-slate-400 dark:hover:text-brand-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-widest text-brand-primary uppercase dark:text-brand-accent">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@verticesistemas.pt"
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-brand-primary dark:text-slate-400 dark:hover:text-brand-accent"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  hello@verticesistemas.pt
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/vertice-sistemas"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-brand-primary dark:text-slate-400 dark:hover:text-brand-accent"
                >
                  <LinkedInIcon />
                  {t.footer.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Vértice Sistemas. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
