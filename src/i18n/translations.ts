export type Locale = "en" | "pt";

export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    switchToLightMode: string;
    switchToDarkMode: string;
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
    subtitle: string;
    items: { title: string; description: string }[];
  };
  whyChooseUs: {
    title: string;
    items: { title: string; description: string }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    description: string;
    servicesTitle: string;
    aboutTitle: string;
    contactTitle: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    copyright: string;
  };
}

export const en: Translations = {
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    cta: "Schedule a Consultation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToLightMode: "Switch to light mode",
    switchToDarkMode: "Switch to dark mode",
  },
  hero: {
    titleStart: "Building Reliable Software for Businesses That Want to",
    titleHighlight: "Scale",
    titleEnd: "",
    subtitle:
      "Vertice Sistemas develops cloud-native applications, modern backend platforms, and scalable web solutions that help companies move faster with confidence.",
    ctaPrimary: "Schedule a Consultation",
    ctaSecondary: "Our Services",
    imageAlt:
      "Abstract illustration representing reliable cloud engineering and scalable software systems",
  },
  services: {
    eyebrow: "Capabilities",
    title: "Our Specialized Services",
    subtitle:
      "Tailored engineering solutions designed to solve complex business problems through code and architecture.",
    items: [
      {
        title: "Custom Software Development",
        description:
          "End-to-end development of bespoke software systems tailored to your workflows and goals.",
      },
      {
        title: "Cloud Solutions (AWS)",
        description:
          "Architecting and migrating systems to highly available, cost-effective AWS environments.",
      },
      {
        title: "Backend Engineering",
        description:
          "Robust backend platforms built for performance, reliability, and high-concurrency workloads.",
      },
      {
        title: "Web Application Development",
        description:
          "Responsive web interfaces built with modern frontend architecture and premium user experience.",
      },
      {
        title: "API Design & Integration",
        description:
          "Secure, well-structured APIs that connect internal systems, partners, and customer-facing products.",
      },
      {
        title: "System Modernization",
        description:
          "Refactoring legacy systems into maintainable, scalable platforms ready for future growth.",
      },
      {
        title: "DevOps & CI/CD",
        description:
          "Automated delivery pipelines for faster releases, safer deployments, and better visibility.",
      },
      {
        title: "Technical Consulting",
        description:
          "Strategic guidance on architecture, delivery, hiring, and technology decisions.",
      },
    ],
  },
  whyChooseUs: {
    title: "Why Vertice Sistemas",
    items: [
      {
        title: "Engineering Excellence",
        description:
          "We build software that remains maintainable and scalable as your business grows.",
      },
      {
        title: "Cloud-First",
        description: "Designed for AWS and modern cloud platforms.",
      },
      {
        title: "Business Focused",
        description: "We solve business problems, not just technical ones.",
      },
      {
        title: "Long-Term Partnership",
        description:
          "We become a trusted technology partner rather than a temporary vendor.",
      },
    ],
  },
  process: {
    title: "How We Work",
    subtitle: "A structured approach to turning ideas into high-performance software.",
    steps: [
      {
        title: "Discovery",
        description:
          "In-depth analysis of your business requirements, constraints, and success metrics.",
      },
      {
        title: "Architecture",
        description:
          "Designing robust, scalable technical blueprints tailored for high-availability environments.",
      },
      {
        title: "Development",
        description:
          "Clean, tested code delivery using agile methodologies and continuous integration.",
      },
      {
        title: "Continuous Improvement",
        description:
          "Long-term monitoring, optimization, and scaling as your business grows.",
      },
    ],
  },
  cta: {
    title: "Let's Build Your Next Software Project",
    subtitle:
      "Ready to scale? Connect with our senior engineering team to discuss your project requirements and technical challenges.",
    button: "Get in Touch",
  },
  footer: {
    description:
      "A senior software engineering consultancy specializing in building reliable, scalable, and secure cloud platforms for modern businesses.",
    servicesTitle: "Services",
    aboutTitle: "About",
    contactTitle: "Contact",
    email: "arnaldotecadm@hotmail.com",
    phone: "+351 91 039 90 47",
    linkedin: "LinkedIn",
    github: "GitHub",
    copyright: "© 2025 Vertice Sistemas. All rights reserved.",
  },
};

export const pt: Translations = {
  nav: {
    home: "Início",
    services: "Serviços",
    about: "Sobre",
    contact: "Contacto",
    cta: "Agendar Consulta",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    switchToLightMode: "Mudar para modo claro",
    switchToDarkMode: "Mudar para modo escuro",
  },
  hero: {
    titleStart: "Criamos software fiável para empresas que querem",
    titleHighlight: "escalar",
    titleEnd: "",
    subtitle:
      "A Vertice Sistemas desenvolve aplicações cloud-native, plataformas backend modernas e soluções web escaláveis que ajudam as empresas a avançar mais rápido com confiança.",
    ctaPrimary: "Agendar Consulta",
    ctaSecondary: "Os Nossos Serviços",
    imageAlt:
      "Ilustração abstrata que representa engenharia cloud fiável e sistemas de software escaláveis",
  },
  services: {
    eyebrow: "Capacidades",
    title: "Os Nossos Serviços Especializados",
    subtitle:
      "Soluções de engenharia à medida, pensadas para resolver problemas de negócio complexos através de código e arquitetura.",
    items: [
      {
        title: "Desenvolvimento de Software à Medida",
        description:
          "Desenvolvimento completo de sistemas de software feitos à medida dos seus processos e objetivos.",
      },
      {
        title: "Soluções Cloud (AWS)",
        description:
          "Arquitetura e migração de sistemas para ambientes AWS altamente disponíveis e eficientes em custos.",
      },
      {
        title: "Engenharia Backend",
        description:
          "Plataformas backend robustas, preparadas para desempenho, fiabilidade e cargas elevadas.",
      },
      {
        title: "Desenvolvimento de Aplicações Web",
        description:
          "Interfaces web responsivas construídas com arquitetura frontend moderna e foco em experiência premium.",
      },
      {
        title: "Desenho e Integração de APIs",
        description:
          "APIs seguras e bem estruturadas para ligar sistemas internos, parceiros e produtos digitais.",
      },
      {
        title: "Modernização de Sistemas",
        description:
          "Refatoração de sistemas legados para plataformas sustentáveis, escaláveis e prontas para crescer.",
      },
      {
        title: "DevOps & CI/CD",
        description:
          "Pipelines automatizados para lançamentos mais rápidos, implementações mais seguras e maior visibilidade.",
      },
      {
        title: "Consultoria Técnica",
        description:
          "Apoio estratégico em arquitetura, delivery, contratação e decisões tecnológicas.",
      },
    ],
  },
  whyChooseUs: {
    title: "Porque escolher a Vertice Sistemas",
    items: [
      {
        title: "Excelência em Engenharia",
        description:
          "Construímos software que se mantém sustentável e escalável à medida que o seu negócio cresce.",
      },
      {
        title: "Cloud-First",
        description: "Projetado para AWS e plataformas cloud modernas.",
      },
      {
        title: "Foco no Negócio",
        description: "Resolvemos problemas de negócio, não apenas desafios técnicos.",
      },
      {
        title: "Parceria de Longo Prazo",
        description:
          "Tornamo-nos um parceiro tecnológico de confiança, e não um fornecedor temporário.",
      },
    ],
  },
  process: {
    title: "Como Trabalhamos",
    subtitle: "Uma abordagem estruturada para transformar ideias em software de alto desempenho.",
    steps: [
      {
        title: "Descoberta",
        description:
          "Análise aprofundada dos requisitos do seu negócio, restrições e métricas de sucesso.",
      },
      {
        title: "Arquitetura",
        description:
          "Desenho de bases técnicas robustas e escaláveis para ambientes de elevada disponibilidade.",
      },
      {
        title: "Desenvolvimento",
        description:
          "Entrega de código limpo e testado com metodologias ágeis e integração contínua.",
      },
      {
        title: "Melhoria Contínua",
        description:
          "Monitorização, otimização e escalabilidade contínuas à medida que o seu negócio cresce.",
      },
    ],
  },
  cta: {
    title: "Vamos Construir o Seu Próximo Projeto de Software",
    subtitle:
      "Pronto para escalar? Fale com a nossa equipa de engenharia sénior para discutir os requisitos e desafios técnicos do seu projeto.",
    button: "Entrar em Contacto",
  },
  footer: {
    description:
      "Uma consultora de engenharia de software sénior focada em criar plataformas cloud fiáveis, escaláveis e seguras para empresas modernas.",
    servicesTitle: "Serviços",
    aboutTitle: "Sobre",
    contactTitle: "Contacto",
    email: "arnaldotecadm@hotmail.com",
    phone: "+351 91 039 90 47",
    linkedin: "LinkedIn",
    github: "GitHub",
    copyright: "© 2025 Vertice Sistemas. Todos os direitos reservados.",
  },
};

export const translations: Record<Locale, Translations> = { en, pt };
