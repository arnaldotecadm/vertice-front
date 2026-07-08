import {
  Truck,
  Stethoscope,
  Landmark,
  ShoppingBag,
  Factory,
  CloudCog,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";

const INDUSTRY_ICONS: LucideIcon[] = [
  Truck,
  Stethoscope,
  Landmark,
  ShoppingBag,
  Factory,
  CloudCog,
];

// Icon grid of industries served, presented as compact rounded tiles.
function Industries() {
  const { t } = useLanguage();

  return (
    <section
      id="solutions"
      className="bg-slate-50 py-24 dark:bg-slate-900/40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {t.industries.title}
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {t.industries.items.map((label, index) => {
            const Icon = INDUSTRY_ICONS[index];
            return (
              <div
                key={label}
                className="animate-fade-in-up flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <Icon
                  className="h-8 w-8 text-brand-primary dark:text-brand-accent"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Industries;
