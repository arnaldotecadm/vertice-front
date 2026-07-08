import { useLanguage } from "../i18n/useLanguage";

const TECHNOLOGIES = [
  "Java",
  "Spring Boot",
  "Kotlin",
  "React",
  "TypeScript",
  "AWS",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "Kafka",
  "Terraform",
];

// Row of technology badge chips representing the stack Vértice works with.
function Technologies() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          {t.technologies.title}
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {TECHNOLOGIES.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-brand-primary/20 bg-brand-primary/5 px-4 py-2 text-sm font-medium text-brand-primary transition-colors hover:bg-brand-primary/10 dark:border-brand-accent/30 dark:bg-brand-accent/10 dark:text-brand-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
