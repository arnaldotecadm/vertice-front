export type Locale = "en" | "pt";

export interface Translations {
  nav: {
    home: string;
    services: string;
    solutions: string;
    about: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  whyChooseUs: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  technologies: {
    title: string;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    prev: string;
    next: string;
    goTo: string;
    items: { title: string; description: string; tags: string[] }[];
  };
  process: {
    title: string;
    steps: { number: string; title: string; description: string }[];
  };
  industries: {
    title: string;
    items: string[];
  };
  testimonials: {
    title: string;
    items: { quote: string; name: string; role: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    description: string;
    navigationTitle: string;
    contactTitle: string;
    linkedin: string;
    copyright: string;
  };
}

export const en: Translations = {
  nav: {
    home: "Home",
    services: "Services",
    solutions: "Solutions",
    about: "About",
    contact: "Contact",
    cta: "Schedule a Consultation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    titleStart: "Building software that",
    titleHighlight: "moves",
    titleEnd: "your business forward.",
    subtitle:
      "We design and develop scalable web platforms, backend systems, cloud-native applications, APIs, and digital solutions that help businesses innovate with confidence.",
    ctaPrimary: "Schedule a Consultation",
    ctaSecondary: "View Our Services",
    imageAlt:
      "Abstract illustration of connected cloud infrastructure and software components",
  },
  services: {
    eyebrow: "Excellence in Engineering",
    title: "Comprehensive Software Services",
    items: [
      {
        title: "Custom Software Development",
        description:
          "Tailored solutions built from the ground up to solve your unique business challenges.",
      },
      {
        title: "Web Applications",
        description:
          "Responsive, high-performance web experiences built with modern frameworks like React.",
      },
      {
        title: "Backend & API Development",
        description:
          "Robust, secure, and scalable server-side architectures that power your entire ecosystem.",
      },
      {
        title: "Cloud Solutions (AWS)",
        description:
          "Expert cloud infrastructure setup, migration, and management on Amazon Web Services.",
      },
      {
        title: "System Integration",
        description:
          "Seamlessly connecting your disparate software tools into a unified, efficient workflow.",
      },
      {
        title: "Legacy System Modernization",
        description:
          "Transforming aging systems into modern, maintainable, and future-proof digital assets.",
      },
      {
        title: "DevOps & CI/CD",
        description:
          "Automating your deployment pipeline for faster releases and higher software quality.",
      },
      {
        title: "Technical Consulting",
        description:
          "Strategic advice on technology stacks, architecture, and engineering best practices.",
      },
    ],
  },
  whyChooseUs: {
    title: "The Vértice Advantage",
    subtitle: "Why businesses trust us with their most critical systems.",
    items: [
      {
        title: "Scalable Architectures",
        description:
          "We build systems that grow with you, handling millions of requests with zero downtime.",
      },
      {
        title: "Modern Technologies",
        description:
          "Leveraging the latest stable tech stacks to ensure performance and maintainability.",
      },
      {
        title: "Secure by Design",
        description:
          "Security is not an afterthought — it's integrated into every line of code we write.",
      },
      {
        title: "Long-Term Partnership",
        description:
          "We are your technical allies, dedicated to your long-term success and growth.",
      },
    ],
  },
  technologies: {
    title: "Technologies We Use",
  },
  portfolio: {
    eyebrow: "Real-World Impact",
    title: "Applications We Can Build For You",
    subtitle:
      "A look at the kind of custom platforms our team designs and ships for clients across industries.",
    prev: "Previous example",
    next: "Next example",
    goTo: "Go to example",
    items: [
      {
        title: "Logistics Fleet Management Platform",
        description:
          "Real-time vehicle tracking, route optimization, and delivery analytics for logistics operators.",
        tags: ["React", "Node.js", "PostgreSQL", "AWS"],
      },
      {
        title: "Healthcare Patient Portal",
        description:
          "Secure patient scheduling, telemedicine, and records management for clinics and hospital networks.",
        tags: ["React", "Spring Boot", "PostgreSQL", "HL7"],
      },
      {
        title: "FinTech Payments Dashboard",
        description:
          "Real-time transaction monitoring, fraud detection, and reporting for financial institutions.",
        tags: ["Kotlin", "Kafka", "React", "AWS"],
      },
      {
        title: "E-commerce Retail Platform",
        description:
          "Scalable storefront with inventory sync, personalized recommendations, and headless checkout.",
        tags: ["React", "TypeScript", "MongoDB", "Docker"],
      },
      {
        title: "Manufacturing IoT Monitoring",
        description:
          "Real-time equipment monitoring and predictive maintenance dashboards for factory floors.",
        tags: ["React", "Kafka", "Kubernetes", "Terraform"],
      },
      {
        title: "SaaS Analytics Platform",
        description:
          "Multi-tenant analytics and reporting suite with customizable dashboards for B2B SaaS products.",
        tags: ["React", "Spring Boot", "PostgreSQL", "AWS"],
      },
    ],
  },
  process: {
    title: "Our Process",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description:
          "Deep dive into your business needs, goals, and technical constraints.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Architecting the solution and designing intuitive user interfaces.",
      },
      {
        number: "03",
        title: "Development",
        description:
          "Agile development cycles with continuous feedback and full transparency.",
      },
      {
        number: "04",
        title: "Delivery & Support",
        description:
          "Smooth deployment and ongoing support to keep your systems running at peak performance.",
      },
    ],
  },
  industries: {
    title: "Industries We Serve",
    items: ["Logistics", "Healthcare", "Finance", "Retail", "Manufacturing", "SaaS"],
  },
  testimonials: {
    title: "Trusted by Growing Businesses",
    items: [
      {
        quote:
          "Vértice Sistemas completely transformed our backend infrastructure. Their technical depth and commitment to quality are unmatched.",
        name: "Sara Almeida",
        role: "CTO, LogiTrack Global",
      },
      {
        quote:
          "Professionalism at its finest. They didn't just build an app — they built a scalable product that helped us raise our Series A.",
        name: "Miguel Ferreira",
        role: "Founder, HealthStream",
      },
      {
        quote:
          "The team at Vértice has been our go-to partner for AWS migrations and cloud strategy. Truly world-class engineers.",
        name: "Elena Rodrigues",
        role: "VP Engineering, FinCore",
      },
    ],
  },
  cta: {
    title: "Let's build your next software solution together.",
    subtitle:
      "Ready to elevate your business with elite engineering? Our consultants are ready to discuss your project requirements.",
    button: "Schedule a Consultation",
  },
  footer: {
    description:
      "Software engineering consultancy building high-quality custom solutions for businesses across Portugal and beyond.",
    navigationTitle: "Navigation",
    contactTitle: "Contact",
    linkedin: "LinkedIn",
    copyright: "All rights reserved.",
  },
};

export const pt: Translations = {
  nav: {
    home: "Início",
    services: "Serviços",
    solutions: "Soluções",
    about: "Sobre",
    contact: "Contacto",
    cta: "Marcar Consulta",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  hero: {
    titleStart: "Construímos software que",
    titleHighlight: "impulsiona",
    titleEnd: "o seu negócio.",
    subtitle:
      "Desenhamos e desenvolvemos plataformas web escaláveis, sistemas backend, aplicações cloud-native, APIs e soluções digitais que ajudam as empresas a inovar com confiança.",
    ctaPrimary: "Marcar Consulta",
    ctaSecondary: "Ver os Nossos Serviços",
    imageAlt:
      "Ilustração abstrata de infraestrutura cloud e componentes de software interligados",
  },
  services: {
    eyebrow: "Excelência em Engenharia",
    title: "Serviços de Software Completos",
    items: [
      {
        title: "Desenvolvimento de Software à Medida",
        description:
          "Soluções personalizadas, construídas de raiz, para resolver os desafios únicos do seu negócio.",
      },
      {
        title: "Aplicações Web",
        description:
          "Experiências web responsivas e de alto desempenho, construídas com frameworks modernos como o React.",
      },
      {
        title: "Desenvolvimento Backend & API",
        description:
          "Arquiteturas de servidor robustas, seguras e escaláveis que sustentam todo o seu ecossistema.",
      },
      {
        title: "Soluções Cloud (AWS)",
        description:
          "Configuração, migração e gestão especializada de infraestrutura cloud na Amazon Web Services.",
      },
      {
        title: "Integração de Sistemas",
        description:
          "Ligação transparente das suas ferramentas de software díspares num fluxo de trabalho unificado e eficiente.",
      },
      {
        title: "Modernização de Sistemas Legados",
        description:
          "Transformação de sistemas antigos em ativos digitais modernos, sustentáveis e preparados para o futuro.",
      },
      {
        title: "DevOps & CI/CD",
        description:
          "Automatização do pipeline de implementação para lançamentos mais rápidos e maior qualidade de software.",
      },
      {
        title: "Consultoria Técnica",
        description:
          "Aconselhamento estratégico sobre stacks tecnológicas, arquitetura e boas práticas de engenharia.",
      },
    ],
  },
  whyChooseUs: {
    title: "A Vantagem Vértice",
    subtitle: "Porque as empresas confiam em nós para os seus sistemas mais críticos.",
    items: [
      {
        title: "Arquiteturas Escaláveis",
        description:
          "Construímos sistemas que crescem consigo, suportando milhões de pedidos sem tempo de inatividade.",
      },
      {
        title: "Tecnologias Modernas",
        description:
          "Utilizamos as stacks tecnológicas estáveis mais recentes para garantir desempenho e manutenibilidade.",
      },
      {
        title: "Segurança desde a Conceção",
        description:
          "A segurança não é um acessório — está integrada em cada linha de código que escrevemos.",
      },
      {
        title: "Parceria de Longo Prazo",
        description:
          "Somos os seus aliados técnicos, dedicados ao seu sucesso e crescimento a longo prazo.",
      },
    ],
  },
  technologies: {
    title: "Tecnologias que Utilizamos",
  },
  portfolio: {
    eyebrow: "Impacto Real",
    title: "Aplicações que Podemos Construir para Si",
    subtitle:
      "Um vislumbre do tipo de plataformas à medida que a nossa equipa desenha e entrega a clientes de diversas indústrias.",
    prev: "Exemplo anterior",
    next: "Próximo exemplo",
    goTo: "Ir para o exemplo",
    items: [
      {
        title: "Plataforma de Gestão de Frotas Logísticas",
        description:
          "Rastreio de veículos em tempo real, otimização de rotas e análise de entregas para operadores logísticos.",
        tags: ["React", "Node.js", "PostgreSQL", "AWS"],
      },
      {
        title: "Portal do Paciente na Saúde",
        description:
          "Agendamento seguro de pacientes, telemedicina e gestão de registos clínicos para clínicas e hospitais.",
        tags: ["React", "Spring Boot", "PostgreSQL", "HL7"],
      },
      {
        title: "Dashboard de Pagamentos FinTech",
        description:
          "Monitorização de transações em tempo real, deteção de fraude e relatórios para instituições financeiras.",
        tags: ["Kotlin", "Kafka", "React", "AWS"],
      },
      {
        title: "Plataforma de Retalho E-commerce",
        description:
          "Loja online escalável com sincronização de inventário, recomendações personalizadas e checkout headless.",
        tags: ["React", "TypeScript", "MongoDB", "Docker"],
      },
      {
        title: "Monitorização IoT Industrial",
        description:
          "Monitorização de equipamentos em tempo real e dashboards de manutenção preditiva para fábricas.",
        tags: ["React", "Kafka", "Kubernetes", "Terraform"],
      },
      {
        title: "Plataforma de Análise SaaS",
        description:
          "Suite de análise e relatórios multi-tenant com dashboards personalizáveis para produtos SaaS B2B.",
        tags: ["React", "Spring Boot", "PostgreSQL", "AWS"],
      },
    ],
  },
  process: {
    title: "O Nosso Processo",
    steps: [
      {
        number: "01",
        title: "Descoberta",
        description:
          "Análise aprofundada das necessidades, objetivos e restrições técnicas do seu negócio.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "Arquitetura da solução e conceção de interfaces de utilizador intuitivas.",
      },
      {
        number: "03",
        title: "Desenvolvimento",
        description:
          "Ciclos de desenvolvimento ágil com feedback contínuo e total transparência.",
      },
      {
        number: "04",
        title: "Entrega & Suporte",
        description:
          "Implementação sem sobressaltos e suporte contínuo para manter os seus sistemas no seu melhor desempenho.",
      },
    ],
  },
  industries: {
    title: "Indústrias que Servimos",
    items: ["Logística", "Saúde", "Finanças", "Retalho", "Indústria", "SaaS"],
  },
  testimonials: {
    title: "A Confiança de Empresas em Crescimento",
    items: [
      {
        quote:
          "A Vértice Sistemas transformou completamente a nossa infraestrutura de backend. A profundidade técnica e o compromisso com a qualidade são incomparáveis.",
        name: "Sara Almeida",
        role: "CTO, LogiTrack Global",
      },
      {
        quote:
          "Profissionalismo ao mais alto nível. Não construíram apenas uma aplicação — construíram um produto escalável que nos ajudou a fechar a nossa Série A.",
        name: "Miguel Ferreira",
        role: "Fundador, HealthStream",
      },
      {
        quote:
          "A equipa da Vértice tem sido o nosso parceiro de eleição para migrações AWS e estratégia cloud. Engenheiros verdadeiramente de classe mundial.",
        name: "Elena Rodrigues",
        role: "VP de Engenharia, FinCore",
      },
    ],
  },
  cta: {
    title: "Vamos construir juntos a sua próxima solução de software.",
    subtitle:
      "Pronto para elevar o seu negócio com engenharia de elite? Os nossos consultores estão prontos para discutir os requisitos do seu projeto.",
    button: "Marcar Consulta",
  },
  footer: {
    description:
      "Consultoria de engenharia de software que constrói soluções à medida de alta qualidade para empresas em Portugal e além-fronteiras.",
    navigationTitle: "Navegação",
    contactTitle: "Contacto",
    linkedin: "LinkedIn",
    copyright: "Todos os direitos reservados.",
  },
};

export const translations: Record<Locale, Translations> = { en, pt };
