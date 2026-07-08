import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";

// Bold final call-to-action banner on a rich blue gradient, driving visitors
// toward booking a consultation.
function CTA() {
  const { t } = useLanguage();

  return (
    <section className="px-6 pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-16 text-center shadow-xl shadow-blue-900/20 sm:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            {t.cta.subtitle}
          </p>
          <a
            id="contact"
            href="mailto:hello@verticesistemas.pt"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-brand-primary shadow-lg transition-all hover:bg-blue-50 active:scale-95"
          >
            {t.cta.button}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
