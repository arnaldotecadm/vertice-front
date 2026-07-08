import {
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  MonitorSmartphone,
  RefreshCw,
  Webhook,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "../i18n/useLanguage";

const SERVICE_ICONS: LucideIcon[] = [
  Code2,
  Cloud,
  Database,
  MonitorSmartphone,
  Webhook,
  RefreshCw,
  Workflow,
  BriefcaseBusiness,
];

function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-secondary/60 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em]"
          >
            {t.services.eyebrow}
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            {t.services.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((service, index) => {
            const Icon = SERVICE_ICONS[index];

            return (
              <Card
                key={service.title}
                className="rounded-3xl border border-border/70 bg-card shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-7">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
