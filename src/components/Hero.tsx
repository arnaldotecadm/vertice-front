import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroIllustration from "../assets/hero-illustration.png";
import { useLanguage } from "../i18n/useLanguage";

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_var(--color-accent),_transparent_65%)] opacity-70" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
        <div className="space-y-8">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            {t.hero.titleStart}{" "}
            <span className="text-primary">{t.hero.titleHighlight}</span>
            {t.hero.titleEnd ? ` ${t.hero.titleEnd}` : null}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "group h-12 rounded-xl px-6 text-sm font-semibold shadow-sm"
              )}
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-xl px-6 text-sm font-semibold shadow-sm"
              )}
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-accent opacity-80 blur-3xl" />
          <div className="rounded-[2rem] border border-border/60 bg-card/80 p-4 shadow-sm backdrop-blur dark:bg-card/90 sm:p-6">
            <div className="overflow-hidden rounded-[1.5rem] bg-background">
              <img
                src={heroIllustration}
                alt={t.hero.imageAlt}
                className="w-full rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
