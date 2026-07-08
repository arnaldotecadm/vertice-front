import { Mail } from "lucide-react";
import logo from "../assets/logo.png";
import { useLanguage } from "../i18n/useLanguage";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9.5h4v11H3Zm7 0h3.83v1.5h.05c.53-.95 1.84-1.95 3.79-1.95 4.05 0 4.8 2.67 4.8 6.15v5.3h-4v-4.7c0-1.12-.02-2.57-1.57-2.57-1.58 0-1.82 1.23-1.82 2.49v4.78h-4Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.43 7.89 10.96.58.1.79-.25.79-.56 0-.28-.01-1.2-.02-2.18-3.21.7-3.89-1.37-3.89-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.78 2.72 1.27 3.38.97.1-.76.4-1.27.73-1.56-2.56-.29-5.25-1.29-5.25-5.74 0-1.27.45-2.31 1.2-3.13-.12-.29-.52-1.47.12-3.07 0 0 .98-.32 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.52 3.2-1.2 3.2-1.2.64 1.6.24 2.78.12 3.07.75.82 1.2 1.86 1.2 3.13 0 4.46-2.7 5.44-5.28 5.73.41.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z" />
    </svg>
  );
}

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-7 w-7 rounded-lg" />
              <span className="text-lg font-semibold text-foreground">Vertice Sistemas</span>
            </div>
            <p className="max-w-xs text-sm leading-7 text-muted-foreground">{t.footer.description}</p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label={t.footer.linkedin}
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <LinkedInIcon />
              </a>
              <a
                href="#"
                aria-label={t.footer.github}
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav.services}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t.footer.aboutTitle}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav.about}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav.contact}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {t.footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
