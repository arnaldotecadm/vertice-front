import {
  Code2,
  Laptop,
  Webhook,
  Cloud,
  Share2,
  RefreshCw,
  Workflow,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";

const SERVICE_ICONS: LucideIcon[] = [
  Code2,
  Laptop,
  Webhook,
  Cloud,
  Share2,
  RefreshCw,
  Workflow,
  BrainCircuit,
];

// Elegant grid of service cards, each with an icon, title, and short
// description. Cards lift slightly on hover to feel tactile and premium.
function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="bg-slate-50 py-24 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-accent">
            {t.services.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {t.services.title}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((service, index) => {
            const Icon = SERVICE_ICONS[index];
            return (
              <div
                key={service.title}
                className="animate-fade-in-up rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary dark:text-brand-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;

