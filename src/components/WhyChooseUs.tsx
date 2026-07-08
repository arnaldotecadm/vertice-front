import { LayoutGrid, Zap, ShieldCheck, Handshake, type LucideIcon } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";

const FEATURE_ICONS: LucideIcon[] = [LayoutGrid, Zap, ShieldCheck, Handshake];

// Four feature cards explaining why clients should choose Vértice Sistemas.
function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t.whyChooseUs.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
            {t.whyChooseUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {t.whyChooseUs.items.map((feature, index) => {
            const Icon = FEATURE_ICONS[index];
            return (
              <div
                key={feature.title}
                className="animate-fade-in-up flex gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-colors hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:bg-slate-900"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
