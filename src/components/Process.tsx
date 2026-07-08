import { useLanguage } from "../i18n/useLanguage";

function Process() {
  const { t } = useLanguage();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.process.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{t.process.subtitle}</p>
        </div>

        <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-8 right-0 left-0 hidden h-px bg-border lg:block" />
          {t.process.steps.map((step, index) => (
            <div key={step.title} className="relative rounded-3xl bg-background lg:bg-transparent">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card text-lg font-semibold text-primary shadow-sm lg:mx-auto">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mt-6 space-y-3 lg:text-center">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-7 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
