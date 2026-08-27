/**
 * Single source of truth for portfolio content.
 * TODO(gabriel): paste real URLs where you see "#".
 */

export const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills & Info" },
  { id: "projects", label: "Projects" },
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
