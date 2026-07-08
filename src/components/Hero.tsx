import { ArrowRight } from "lucide-react";
import heroIllustration from "../assets/hero-illustration.png";
import { useLanguage } from "../i18n/useLanguage";

// The above-the-fold hero: headline, supporting copy, primary/secondary CTAs,
// and an abstract cloud/software illustration generated to match the brand.
function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 to-white dark:from-slate-900/40 dark:to-slate-950"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32 lg:px-8">
        <div className="animate-fade-in-up space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {t.hero.titleStart}{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>{" "}
            {t.hero.titleEnd}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-brand-secondary hover:shadow-xl active:scale-95"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50 active:scale-95 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in-up [animation-delay:150ms]">
          <div className="absolute -inset-8 -z-10 rounded-full bg-brand-accent/10 blur-3xl" />
          <img
            src={heroIllustration}
            alt={t.hero.imageAlt}
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
