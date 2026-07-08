import { Badge } from "@/components/ui/badge";
import { useLanguage } from "../i18n/useLanguage";

const TECHNOLOGIES = [
  "Java",
  "Kotlin",
  "Spring Boot",
  "React",
  "TypeScript",
  "Node.js",
  "AWS",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "Kafka",
  "GitHub Actions",
  "Terraform",
];

function Technologies() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-border bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.technologies.title}
          </h2>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {TECHNOLOGIES.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="h-auto rounded-full border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary hover:bg-accent"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
