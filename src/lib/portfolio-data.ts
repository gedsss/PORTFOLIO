/**
 * Single source of truth for portfolio content.
 *
 * Every visitor-facing string lives here in both languages (`en` / `pt`).
 * Components never hard-code copy — they read `content[locale]` through the
 * `useLanguage()` hook. Language-invariant data (URLs, file paths, tech tags)
 * is declared once above and shared by both trees.
 *
 * TODO(gabriel): paste real project/repo URLs where you see "#".
 */

export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const sectionIds = [
  "hero",
  "skills",
  "projects",
  "events",
  "certificates",
] as const;
export type SectionId = (typeof sectionIds)[number];

/** Language-invariant identity + contact details. */
export const profileName = "Gabriel Edson";

export const contact = {
  email: "gabrieledsoon3@gmail.com",
  phone: "+55 65 98165-0108",
  links: {
    github: "https://github.com/gedsss/",
    linkedin: "https://www.linkedin.com/in/gabriel-edson-a08673345/",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*  Shared, language-invariant data                                          */
/* -------------------------------------------------------------------------- */

const skillItems = {
  languages: ["TypeScript", "JavaScript"],
  backend: [
    "Node.js",
    "Fastify",
    "Prisma",
    "Sequelize",
    "Redis",
    "JWT",
    "bcrypt",
    "Helmet",
    "Rate limiting",
    "CORS",
  ],
  ai: [
    "RAG",
    "Structured output",
    "Agent / tool-calling",
    "Eval harnesses",
    "Anthropic / OpenAI APIs",
  ],
  databases: [
    "PostgreSQL",
    "SQLite",
    "Migrations",
    "B-tree / GIN / partial indexes",
  ],
  frontend: [
    "React 19",
    "Vite",
    "Tailwind CSS v4",
    "React Router v7",
    "Axios",
    "Canvas API",
  ],
  infra: ["Docker", "Docker Compose", "Nginx", "PM2", "UFW", "SSL/HTTPS (Certbot)", "Git"],
  tooling: ["RESTful design", "Swagger / OpenAPI", "Zod", "Biome", "Vitest"],
} as const;

const projectMeta = {
  api: {
    tags: ["Node.js", "Fastify", "TypeScript", "PostgreSQL", "Prisma", "React 19", "Docker"],
    link: "#", // TODO: repo or live demo
  },
  platform: {
    tags: ["Node.js", "Fastify", "React", "PostgreSQL", "Redis", "Nginx", "PM2"],
    link: "#", // TODO: repo or live demo
  },
} as const;

const eventMeta = {
  "stellar-blueprint": {
    tags: ["Stellar", "Blockchain", "RWA tokenization", "Stablecoins", "Hackathon"],
    link: "https://stellar.org/blog/foundation-news/the-blueprint-at-meridian-2025",
  },
  "sebrae-hacking-2026": {
    tags: ["Sebrae", "Startups", "Innovation", "Mato Grosso", "Brazil"],
    link: "https://cloud.divulga.sebraemt.com.br/sebrae-hacking-26",
  },
  "csbc-2026": {
    tags: ["SBC", "Research", "Computer Science", "Academia", "Brazil"],
    link: "https://csbc.sbc.org.br/2026/",
  },
} as const;

/**
 * Certificate titles/issuers/files are proper nouns — identical in both
 * languages, so the arrays are shared and only the group label/blurb differ.
 * Files live in /public/certificates/<group>/ and open in a new tab.
 */
const anthropicCertificates = [
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    file: "/certificates/anthropic/ai-fluency-framework-and-foundations.pdf",
  },
  {
    title: "AI Fluency: AI Capabilities & Limitations",
    issuer: "Anthropic",
    file: "/certificates/anthropic/ai-fluency-capabilities-and-limitations.pdf",
  },
  {
    title: "AI Fluency for Builders",
    issuer: "CodePath × Anthropic",
    file: "/certificates/anthropic/ai-fluency-for-builders.pdf",
  },
  {
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    file: "/certificates/anthropic/ai-fluency-for-students.pdf",
  },
  {
    title: "AI Fluency for Educators",
    issuer: "Anthropic",
    file: "/certificates/anthropic/ai-fluency-for-educators.pdf",
  },
  {
    title: "AI Fluency for Nonprofits",
    issuer: "Anthropic × GivingTuesday",
    file: "/certificates/anthropic/ai-fluency-for-nonprofits.pdf",
  },
  {
    title: "AI Fluency for Small Businesses",
    issuer: "Anthropic × PayPal",
    file: "/certificates/anthropic/ai-fluency-for-small-businesses.pdf",
  },
  {
    title: "Teaching the AI Fluency Framework",
    issuer: "Anthropic",
    file: "/certificates/anthropic/teaching-the-ai-fluency-framework.pdf",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    file: "/certificates/anthropic/claude-101.pdf",
  },
  {
    title: "Claude Platform 101",
    issuer: "Anthropic",
    file: "/certificates/anthropic/claude-platform-101.pdf",
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    file: "/certificates/anthropic/claude-code-101.pdf",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    file: "/certificates/anthropic/claude-code-in-action.pdf",
  },
  {
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    file: "/certificates/anthropic/introduction-to-claude-cowork.pdf",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    file: "/certificates/anthropic/introduction-to-model-context-protocol.pdf",
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "Anthropic",
    file: "/certificates/anthropic/model-context-protocol-advanced-topics.pdf",
  },
] as const;

const proficiencyCertificates = [
  {
    title: "HTML5 & CSS3",
    issuer: "B7Web · 92h",
    file: "/certificates/proficiencies/html5-css3.jpeg",
  },
  {
    title: "JavaScript",
    issuer: "B7Web · 66h",
    file: "/certificates/proficiencies/javascript.jpeg",
  },
  {
    title: "TypeScript",
    issuer: "B7Web · 20h",
    file: "/certificates/proficiencies/typescript.jpeg",
  },
  {
    title: "Git & GitHub",
    issuer: "B7Web · 20h",
    file: "/certificates/proficiencies/git-github.jpeg",
  },
  {
    title: "Tailwind CSS",
    issuer: "B7Web · 20h",
    file: "/certificates/proficiencies/tailwindcss.jpeg",
  },
  {
    title: "NLW Connect — React",
    issuer: "Rocketseat · 5h",
    file: "/certificates/proficiencies/nlw-connect-react.pdf",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Localized content shape                                                  */
/* -------------------------------------------------------------------------- */

type Certificate = { title: string; issuer: string; file: string };

export interface LocalizedContent {
  /** Top-nav pill labels, keyed by section id. */
  nav: Record<SectionId, string>;
  /** Reusable UI chrome copy. */
  ui: {
    backToStart: string;
    allEvents: string;
    allCollections: string;
    readMore: string;
    contactHeading: string;
    languageLabel: string;
    certificateCount: (n: number) => string;
    heroCtas: {
      skills: string;
      projects: string;
      events: string;
      certificates: string;
    };
  };
  profile: {
    role: string;
    focus: string;
    location: string;
    tagline: string;
    summary: string;
  };
  languages: { name: string; level: string }[];
  experience: { role: string; company: string; period: string; summary: string }[];
  education: { degree: string; school: string; period: string }[];
  skills: {
    heading: string;
    experienceHeading: string;
    educationHeading: string;
    stackHeading: string;
    languagesHeading: string;
    groups: { label: string; items: readonly string[] }[];
    practices: string[];
  };
  projects: {
    heading: string;
    items: {
      name: string;
      blurb: string;
      highlights: string[];
      tags: readonly string[];
      link: string;
    }[];
  };
  events: {
    heading: string;
    intro: string;
    items: {
      id: string;
      name: string;
      org: string;
      date: string;
      location: string;
      role: string;
      blurb: string;
      highlights: string[];
      tags: readonly string[];
      link: string;
    }[];
  };
  certificates: {
    heading: string;
    intro: string;
    groups: {
      id: string;
      label: string;
      blurb: string;
      certificates: readonly Certificate[];
    }[];
  };
}

/* -------------------------------------------------------------------------- */
/*  English                                                                  */
/* -------------------------------------------------------------------------- */

const en: LocalizedContent = {
  nav: {
    hero: "Home",
    skills: "Skills & Info",
    projects: "Projects",
    events: "Events",
    certificates: "Certificates",
  },
  ui: {
    backToStart: "Back to start",
    allEvents: "All events",
    allCollections: "All collections",
    readMore: "Read more",
    contactHeading: "Contact",
    languageLabel: "Language",
    certificateCount: (n) => `${n} ${n === 1 ? "certificate" : "certificates"}`,
    heroCtas: {
      skills: "Skills & Information",
      projects: "Projects",
      events: "Events",
      certificates: "Certificates",
    },
  },
  profile: {
    role: "Backend Developer",
    focus: "Software & AI Engineer",
    location: "Cuiabá, MT — Brazil",
    tagline:
      "I build production-ready APIs and fullstack apps — now focused on reliable AI systems.",
    summary:
      "Backend developer with hands-on experience shipping RESTful APIs and fullstack apps with Node.js, Fastify, TypeScript, PostgreSQL, Redis and Docker — with a security-first, layered-architecture mindset. Currently deep in AI engineering: RAG, structured outputs and evaluation harnesses.",
  },
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Fluent" },
  ],
  experience: [
    {
      role: "AI Engineering Intern (Backend)",
      company: "FlyRank AI Internship",
      period: "Present",
      summary:
        "Server-side AI systems built for reliability: RAG response flows with grounding checks, structured-output pipelines, agent/tool-calling workflows, and eval sets to compare model quality. Anthropic/OpenAI APIs, Zod, Postgres/Supabase.",
    },
    {
      role: "Backend Developer",
      company: "OUD Tecnologia",
      period: "Internship",
      summary:
        "RESTful APIs with Node.js, Fastify and TypeScript — JWT auth and Zod validation. PostgreSQL schemas via Prisma with query-optimizing indexes. Security practices: bcrypt, CORS, rate limiting.",
    },
    {
      role: "Fullstack Developer",
      company: "ATM Soluções e Serviços",
      period: "",
      summary:
        "Node.js/Fastify services and React frontends with role-based access control. PostgreSQL + Redis caching. Production deploys with Docker, Nginx, SSL/HTTPS (Certbot), PM2 and Git. LGPD compliance with dev/prod separation.",
    },
  ],
  education: [
    {
      degree: "B.Sc. Software Engineering",
      school: "Univag",
      period: "Expected 2029",
    },
  ],
  skills: {
    heading: "Skills & Information",
    experienceHeading: "Experience",
    educationHeading: "Education",
    stackHeading: "Stack",
    languagesHeading: "Languages",
    groups: [
      { label: "Languages", items: skillItems.languages },
      { label: "Backend", items: skillItems.backend },
      { label: "AI Engineering", items: skillItems.ai },
      { label: "Databases", items: skillItems.databases },
      { label: "Frontend", items: skillItems.frontend },
      { label: "Infra & DevOps", items: skillItems.infra },
      { label: "API & Tooling", items: skillItems.tooling },
    ],
    practices: [
      "Layered architecture",
      "Async programming",
      "Modularization",
      "LGPD compliance",
    ],
  },
  projects: {
    heading: "Projects",
    items: [
      {
        name: "RESTful API + React 19 SPA",
        blurb:
          "Layered REST API with a modern single-page frontend, fully containerized.",
        highlights: [
          "Node.js + Fastify + TypeScript API — JWT auth, Zod validation, rate limiting, CORS",
          "PostgreSQL via Prisma ORM with migrations and GIN indexes for full-text search",
          "React 19 + Vite + Tailwind v4 SPA — client-side routing, Axios JWT interceptor",
          "Docker + Docker Compose; frontend served through Nginx with a multi-stage build",
        ],
        tags: projectMeta.api.tags,
        link: projectMeta.api.link,
      },
      {
        name: "Fullstack Platform with Production Infrastructure",
        blurb:
          "End-to-end fullstack app running on hardened production infrastructure.",
        highlights: [
          "Node.js/Fastify backend + React/Vite frontend with role-based access control",
          "PostgreSQL + Prisma, Redis cache, client-side image compression via Canvas API",
          "Nginx reverse proxy with SSL/HTTPS (ZeroSSL + Certbot), cache-control headers, UFW firewall",
          "Deployed via Git + PM2; LGPD-compliant with dev/prod separation",
        ],
        tags: projectMeta.platform.tags,
        link: projectMeta.platform.link,
      },
    ],
  },
  events: {
    heading: "Events",
    intro:
      "Conferences and gatherings I've taken part in. Pick one to see the details.",
    items: [
      {
        id: "stellar-blueprint",
        name: "The Blueprint at Meridian 2025",
        org: "Stellar Development Foundation",
        date: "September 2025",
        location: "Copacabana Palace, Rio de Janeiro — Brazil",
        role: "Attendee · HackMeridian builder",
        blurb:
          "Stellar's flagship ecosystem conference, where SDF laid out “The Blueprint” — its vision for how validators, engineers and developers build the open infrastructure for next-generation finance.",
        highlights: [
          "1,200+ attendees; HackMeridian ran alongside with 400+ builders, 110+ submissions and 6 finalists",
          "PayPal's PYUSD and Ondo Finance's USDY (yield-bearing U.S. Treasury stablecoin) went live on Stellar",
          "Mercado Bitcoin announced a $200M tokenized fixed-income and equity issuance; RedSwan brought $200M in tokenized commercial real estate",
          "Circle's Cross-Chain Transfer Protocol V2 for USDC and Meridian Pay, SDF's first smart wallet, were unveiled",
          "New ecosystem funds from Pantera Capital and Onigiri Capital; the next Meridian was announced for Abu Dhabi",
        ],
        tags: eventMeta["stellar-blueprint"].tags,
        link: eventMeta["stellar-blueprint"].link,
      },
      {
        id: "sebrae-hacking-2026",
        name: "Sebrae Hacking 2026",
        org: "Sebrae Mato Grosso",
        date: "May 22–23, 2026",
        location: "Centro de Eventos do Pantanal, Cuiabá — Brazil",
        role: "Attendee",
        blurb:
          "The 4th edition of Mato Grosso's largest innovation and creativity gathering — a summit of talks, panels and startup pitch competitions across six themed arenas.",
        highlights: [
          "Six concurrent arenas: Startups, Innovation Ecosystems, Science & Technology, Creators, Investment & Fundraising, and Digital Commerce",
          "Startup pitch competitions with finals and prizes",
          "Talks on AI, digital marketing, branding and business scaling from industry leaders",
          "Networking with founders, investors and the regional innovation ecosystem",
          "Live experiences — robotics demos, electric vehicles and more",
        ],
        tags: eventMeta["sebrae-hacking-2026"].tags,
        link: eventMeta["sebrae-hacking-2026"].link,
      },
      {
        id: "csbc-2026",
        name: "CSBC 2026",
        org: "Brazilian Computer Society (SBC) · UFRGS",
        date: "July 19–23, 2026",
        location: "Gramado Convention Center, Rio Grande do Sul — Brazil",
        role: "Attendee",
        blurb:
          "The 46th Congress of the Brazilian Computer Society — Latin America's largest computing and IT event — under the theme “Digital Transformation for a World in Climate Emergency”.",
        highlights: [
          "~2,000 attendees: professors, students and professionals from Brazil and abroad",
          "10 base events, including workshops on computing education, software engineering and teaching quality",
          "17+ satellite events on emerging topics: blockchain, quantum computing and digital government",
          "Hundreds of submitted and accepted papers, plus panels, lectures and scientific exhibits",
          "Hosted by the UFRGS Institute of Informatics in partnership with SBC",
        ],
        tags: eventMeta["csbc-2026"].tags,
        link: eventMeta["csbc-2026"].link,
      },
    ],
  },
  certificates: {
    heading: "Certificates",
    intro: "Courses and programs I've completed. Pick a collection to browse it.",
    groups: [
      {
        id: "anthropic",
        label: "Anthropic",
        blurb:
          "AI Fluency, Claude and Model Context Protocol tracks from Anthropic's learning programs (with CodePath and partners).",
        certificates: anthropicCertificates,
      },
      {
        id: "proficiencies",
        label: "Proficiencies",
        blurb: "Language and tooling proficiency certificates.",
        certificates: proficiencyCertificates,
      },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*  Português (pt-BR)                                                        */
/* -------------------------------------------------------------------------- */

const pt: LocalizedContent = {
  nav: {
    hero: "Início",
    skills: "Habilidades",
    projects: "Projetos",
    events: "Eventos",
    certificates: "Certificados",
  },
  ui: {
    backToStart: "Voltar ao início",
    allEvents: "Todos os eventos",
    allCollections: "Todas as coleções",
    readMore: "Ler mais",
    contactHeading: "Contato",
    languageLabel: "Idioma",
    certificateCount: (n) => `${n} ${n === 1 ? "certificado" : "certificados"}`,
    heroCtas: {
      skills: "Habilidades & Informações",
      projects: "Projetos",
      events: "Eventos",
      certificates: "Certificados",
    },
  },
  profile: {
    role: "Desenvolvedor Backend",
    focus: "Engenheiro de Software & IA",
    location: "Cuiabá, MT — Brasil",
    tagline:
      "Construo APIs e aplicações fullstack prontas para produção — agora focado em sistemas de IA confiáveis.",
    summary:
      "Desenvolvedor backend com experiência prática entregando APIs RESTful e aplicações fullstack com Node.js, Fastify, TypeScript, PostgreSQL, Redis e Docker — com uma mentalidade de segurança em primeiro lugar e arquitetura em camadas. Atualmente imerso em engenharia de IA: RAG, saídas estruturadas e harnesses de avaliação.",
  },
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Fluente" },
  ],
  experience: [
    {
      role: "Estagiário de Engenharia de IA (Backend)",
      company: "FlyRank AI Internship",
      period: "Atualmente",
      summary:
        "Sistemas de IA no servidor construídos para confiabilidade: fluxos de resposta RAG com verificação de embasamento, pipelines de saída estruturada, workflows de agentes/tool-calling e conjuntos de avaliação para comparar a qualidade dos modelos. APIs da Anthropic/OpenAI, Zod, Postgres/Supabase.",
    },
    {
      role: "Desenvolvedor Backend",
      company: "OUD Tecnologia",
      period: "Estágio",
      summary:
        "APIs RESTful com Node.js, Fastify e TypeScript — autenticação JWT e validação com Zod. Schemas PostgreSQL via Prisma com índices que otimizam consultas. Práticas de segurança: bcrypt, CORS, rate limiting.",
    },
    {
      role: "Desenvolvedor Fullstack",
      company: "ATM Soluções e Serviços",
      period: "",
      summary:
        "Serviços Node.js/Fastify e frontends React com controle de acesso baseado em papéis. PostgreSQL + cache com Redis. Deploys em produção com Docker, Nginx, SSL/HTTPS (Certbot), PM2 e Git. Conformidade com a LGPD e separação dev/produção.",
    },
  ],
  education: [
    {
      degree: "Bacharelado em Engenharia de Software",
      school: "Univag",
      period: "Previsão 2029",
    },
  ],
  skills: {
    heading: "Habilidades & Informações",
    experienceHeading: "Experiência",
    educationHeading: "Formação",
    stackHeading: "Stack",
    languagesHeading: "Idiomas",
    groups: [
      { label: "Linguagens", items: skillItems.languages },
      { label: "Backend", items: skillItems.backend },
      { label: "Engenharia de IA", items: skillItems.ai },
      { label: "Bancos de Dados", items: skillItems.databases },
      { label: "Frontend", items: skillItems.frontend },
      { label: "Infra & DevOps", items: skillItems.infra },
      { label: "API & Ferramentas", items: skillItems.tooling },
    ],
    practices: [
      "Arquitetura em camadas",
      "Programação assíncrona",
      "Modularização",
      "Conformidade com a LGPD",
    ],
  },
  projects: {
    heading: "Projetos",
    items: [
      {
        name: "API RESTful + SPA React 19",
        blurb:
          "API REST em camadas com um frontend single-page moderno, totalmente conteinerizada.",
        highlights: [
          "API Node.js + Fastify + TypeScript — autenticação JWT, validação com Zod, rate limiting, CORS",
          "PostgreSQL via Prisma ORM com migrations e índices GIN para busca full-text",
          "SPA React 19 + Vite + Tailwind v4 — roteamento no cliente, interceptor JWT com Axios",
          "Docker + Docker Compose; frontend servido via Nginx com build multi-stage",
        ],
        tags: projectMeta.api.tags,
        link: projectMeta.api.link,
      },
      {
        name: "Plataforma Fullstack com Infraestrutura de Produção",
        blurb:
          "Aplicação fullstack completa rodando em infraestrutura de produção reforçada.",
        highlights: [
          "Backend Node.js/Fastify + frontend React/Vite com controle de acesso baseado em papéis",
          "PostgreSQL + Prisma, cache Redis, compressão de imagens no cliente via Canvas API",
          "Proxy reverso Nginx com SSL/HTTPS (ZeroSSL + Certbot), headers de cache-control, firewall UFW",
          "Deploy via Git + PM2; em conformidade com a LGPD e separação dev/produção",
        ],
        tags: projectMeta.platform.tags,
        link: projectMeta.platform.link,
      },
    ],
  },
  events: {
    heading: "Eventos",
    intro:
      "Conferências e encontros dos quais participei. Escolha um para ver os detalhes.",
    items: [
      {
        id: "stellar-blueprint",
        name: "The Blueprint at Meridian 2025",
        org: "Stellar Development Foundation",
        date: "Setembro de 2025",
        location: "Copacabana Palace, Rio de Janeiro — Brasil",
        role: "Participante · Builder no HackMeridian",
        blurb:
          "A principal conferência do ecossistema da Stellar, onde a SDF apresentou “The Blueprint” — sua visão de como validadores, engenheiros e desenvolvedores constroem a infraestrutura aberta para as finanças de próxima geração.",
        highlights: [
          "1.200+ participantes; o HackMeridian aconteceu em paralelo com 400+ builders, 110+ submissões e 6 finalistas",
          "O PYUSD da PayPal e o USDY da Ondo Finance (stablecoin lastreada em títulos do Tesouro dos EUA com rendimento) entraram no ar na Stellar",
          "O Mercado Bitcoin anunciou uma emissão tokenizada de renda fixa e ações de US$ 200 mi; a RedSwan trouxe US$ 200 mi em imóveis comerciais tokenizados",
          "Foram revelados o Cross-Chain Transfer Protocol V2 da Circle para USDC e o Meridian Pay, a primeira smart wallet da SDF",
          "Novos fundos de ecossistema da Pantera Capital e da Onigiri Capital; o próximo Meridian foi anunciado para Abu Dhabi",
        ],
        tags: eventMeta["stellar-blueprint"].tags,
        link: eventMeta["stellar-blueprint"].link,
      },
      {
        id: "sebrae-hacking-2026",
        name: "Sebrae Hacking 2026",
        org: "Sebrae Mato Grosso",
        date: "22–23 de maio de 2026",
        location: "Centro de Eventos do Pantanal, Cuiabá — Brasil",
        role: "Participante",
        blurb:
          "A 4ª edição do maior encontro de inovação e criatividade de Mato Grosso — um summit de palestras, painéis e competições de pitch de startups em seis arenas temáticas.",
        highlights: [
          "Seis arenas simultâneas: Startups, Ecossistemas de Inovação, Ciência & Tecnologia, Criadores, Investimento & Captação e Comércio Digital",
          "Competições de pitch de startups com finais e premiações",
          "Palestras sobre IA, marketing digital, branding e escala de negócios com líderes do setor",
          "Networking com fundadores, investidores e o ecossistema regional de inovação",
          "Experiências ao vivo — demonstrações de robótica, veículos elétricos e mais",
        ],
        tags: eventMeta["sebrae-hacking-2026"].tags,
        link: eventMeta["sebrae-hacking-2026"].link,
      },
      {
        id: "csbc-2026",
        name: "CSBC 2026",
        org: "Sociedade Brasileira de Computação (SBC) · UFRGS",
        date: "19–23 de julho de 2026",
        location: "Centro de Convenções de Gramado, Rio Grande do Sul — Brasil",
        role: "Participante",
        blurb:
          "O 46º Congresso da Sociedade Brasileira de Computação — o maior evento de computação e TI da América Latina — com o tema “Transformação Digital para um Mundo em Emergência Climática”.",
        highlights: [
          "~2.000 participantes: professores, estudantes e profissionais do Brasil e do exterior",
          "10 eventos-base, incluindo workshops sobre educação em computação, engenharia de software e qualidade de ensino",
          "17+ eventos satélites sobre temas emergentes: blockchain, computação quântica e governo digital",
          "Centenas de artigos submetidos e aceitos, além de painéis, palestras e mostras científicas",
          "Realizado pelo Instituto de Informática da UFRGS em parceria com a SBC",
        ],
        tags: eventMeta["csbc-2026"].tags,
        link: eventMeta["csbc-2026"].link,
      },
    ],
  },
  certificates: {
    heading: "Certificados",
    intro: "Cursos e programas que concluí. Escolha uma coleção para explorar.",
    groups: [
      {
        id: "anthropic",
        label: "Anthropic",
        blurb:
          "Trilhas de AI Fluency, Claude e Model Context Protocol dos programas de aprendizado da Anthropic (com a CodePath e parceiros).",
        certificates: anthropicCertificates,
      },
      {
        id: "proficiencies",
        label: "Proficiências",
        blurb: "Certificados de proficiência em linguagens e ferramentas.",
        certificates: proficiencyCertificates,
      },
    ],
  },
};

/* -------------------------------------------------------------------------- */

export const content: Record<Locale, LocalizedContent> = { en, pt };

export type EventItem = LocalizedContent["events"]["items"][number];
export type CertificateGroup = LocalizedContent["certificates"]["groups"][number];
export type ProjectItem = LocalizedContent["projects"]["items"][number];
