/**
 * Single source of truth for portfolio content.
 * TODO(gabriel): paste real URLs where you see "#".
 */

export const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills & Info" },
  { id: "projects", label: "Projects" },
  { id: "events", label: "Events" },
  { id: "certificates", label: "Certificates" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const profile = {
  name: "Gabriel Edson",
  fullName: "Gabriel Edson Santos Almeida", // for formal/legal contexts only — not shown on the site
  shortName: "Gabriel Edson",
  role: "Backend Developer",
  focus: "Backend & AI Engineering",
  location: "Cuiabá, MT — Brazil",
  email: "gabrieledsoon3@gmail.com",
  phone: "+55 65 98165-0108",
  links: {
    github: "#", // TODO: https://github.com/<user>
    linkedin: "#", // TODO: https://www.linkedin.com/in/<user>
  },
  tagline:
    "I build production-ready APIs and fullstack apps — now focused on reliable AI systems.",
  summary:
    "Backend developer with hands-on experience shipping RESTful APIs and fullstack apps with Node.js, Fastify, TypeScript, PostgreSQL, Redis and Docker — with a security-first, layered-architecture mindset. Currently deep in AI engineering: RAG, structured outputs and evaluation harnesses.",
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Fluent" },
  ],
} as const;

export const experience = [
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
] as const;

export const education = [
  {
    degree: "B.Sc. Software Engineering",
    school: "Univag",
    period: "Expected 2029",
  },
] as const;

export const skillGroups = [
  { label: "Languages", items: ["TypeScript", "JavaScript"] },
  {
    label: "Backend",
    items: [
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
  },
  {
    label: "AI Engineering",
    items: [
      "RAG",
      "Structured output",
      "Agent / tool-calling",
      "Eval harnesses",
      "Anthropic / OpenAI APIs",
    ],
  },
  {
    label: "Databases",
    items: [
      "PostgreSQL",
      "SQLite",
      "Migrations",
      "B-tree / GIN / partial indexes",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "React Router v7",
      "Axios",
      "Canvas API",
    ],
  },
  {
    label: "Infra & DevOps",
    items: [
      "Docker",
      "Docker Compose",
      "Nginx",
      "PM2",
      "UFW",
      "SSL/HTTPS (Certbot)",
      "Git",
    ],
  },
  {
    label: "API & Tooling",
    items: [
      "RESTful design",
      "Swagger / OpenAPI",
      "Zod",
      "Biome",
      "Vitest",
    ],
  },
] as const;

export const practices = [
  "Layered architecture",
  "Async programming",
  "Modularization",
  "LGPD compliance",
] as const;

export const projects = [
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
    tags: ["Node.js", "Fastify", "TypeScript", "PostgreSQL", "Prisma", "React 19", "Docker"],
    link: "#", // TODO: repo or live demo
  },
  {
    name: "Fullstack Platform with Production Infrastructure",
    blurb: "End-to-end fullstack app running on hardened production infrastructure.",
    highlights: [
      "Node.js/Fastify backend + React/Vite frontend with role-based access control",
      "PostgreSQL + Prisma, Redis cache, client-side image compression via Canvas API",
      "Nginx reverse proxy with SSL/HTTPS (ZeroSSL + Certbot), cache-control headers, UFW firewall",
      "Deployed via Git + PM2; LGPD-compliant with dev/prod separation",
    ],
    tags: ["Node.js", "Fastify", "React", "PostgreSQL", "Redis", "Nginx", "PM2"],
    link: "#", // TODO: repo or live demo
  },
] as const;

/**
 * Events I took part in. Draft content — dates/roles are rough; refine later.
 * NOTE(gabriel): you called the second one "CSBC 2025" but the link points to
 * the 2026 edition, so the details below are for CSBC 2026. Adjust the year if
 * you actually attended the 2025 congress.
 */
export const events = [
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
    tags: ["Stellar", "Blockchain", "RWA tokenization", "Stablecoins", "Hackathon"],
    link: "https://stellar.org/blog/foundation-news/the-blueprint-at-meridian-2025",
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
    tags: ["SBC", "Research", "Computer Science", "Academia", "Brazil"],
    link: "https://csbc.sbc.org.br/2026/",
  },
] as const;

/**
 * Certificates, grouped into clickable blocks. Files live in
 * /public/certificates/<group>/ and open in a new tab.
 * Add more groups here later — the Certificates section renders whatever is in
 * this array.
 */
export const certificateGroups = [
  {
    id: "anthropic",
    label: "Anthropic",
    blurb:
      "AI Fluency, Claude and Model Context Protocol tracks from Anthropic's learning programs (with CodePath and partners).",
    certificates: [
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
    ],
  },
  {
    id: "proficiencies",
    label: "Proficiencies",
    blurb: "Language and tooling proficiency certificates.",
    certificates: [
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
    ],
  },
] as const;
