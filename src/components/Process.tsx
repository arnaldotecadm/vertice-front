import { useLanguage } from "../i18n/useLanguage";

// Four-step horizontal timeline describing the engagement process, with a
// connecting line on desktop that visually links each numbered milestone.
function Process() {
  const { t } = useLanguage();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {t.process.title}
        </h2>

        <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-8 right-0 left-0 hidden h-px bg-slate-200 lg:block dark:bg-slate-800" />
          {t.process.steps.map((step, index) => (
            <div
              key={step.number}
              className="animate-fade-in-up relative space-y-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-brand-primary bg-white text-lg font-bold text-brand-primary shadow-sm dark:bg-slate-950 dark:text-brand-accent dark:border-brand-accent">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
