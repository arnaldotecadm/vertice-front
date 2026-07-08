import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "../i18n/useLanguage";

function CTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-8 py-16 text-center text-white shadow-sm sm:px-16 sm:py-20">
          <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              {t.cta.subtitle}
            </p>
            <a
              href="mailto:arnaldotecadm@hotmail.com"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "group mt-8 h-12 rounded-xl px-6 text-sm font-semibold shadow-sm"
              )}
            >
              {t.cta.button}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
