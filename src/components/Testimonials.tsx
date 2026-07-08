import { useLanguage } from "../i18n/useLanguage";

// Three testimonial cards from satisfied clients, laid out as a simple grid.
function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {t.testimonials.title}
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.testimonials.items.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className="animate-fade-in-up flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <blockquote className="text-lg leading-relaxed text-slate-600 italic dark:text-slate-300">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold text-slate-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm font-medium text-brand-primary dark:text-brand-accent">
                  {testimonial.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
