export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  repo?: string;
  isPrivate?: boolean;
  status?: string;
  tier: 1 | 2 | 3;
}

export const projects: Project[] = [
  // Tier 1
  {
    slug: "flow",
    name: "FLOW",
    tagline: "AI-Powered CRM Platform",
    description:
      "A production-quality CRM built to help teams manage leads, customers, deals, and follow-ups in one workspace — dashboard with live KPIs, lead scoring, a Kanban deals pipeline, calendar, and analytics, all backed by Firebase Authentication and per-workspace Cloud Firestore data. The AI Copilot and onboarding animations are visual product-concept features: they use predefined demo content and do not call an external AI model in the current version.",
    tech: ["React 19", "TypeScript", "Vite", "Firebase Auth", "Cloud Firestore", "React Router"],
    repo: "https://github.com/QossayKamel22/FLOW",
    tier: 1,
  },
  {
    slug: "mizan",
    name: "MIZAN",
    tagline: "Smart Personal Finance Platform",
    description:
      "An Arabic-first Flutter app for personal finance — income, expenses, budgets, transfers, bills, and savings goals — backed by a Python/FastAPI service and PostgreSQL, with Firebase handling authentication. A LangGraph-based AI agent layer is in place as the foundation for future AI-powered financial insights; it is engineering groundwork, not a shipped AI feature yet. Currently pre-Milestone-A: functional, tested code, pending a live Firebase project, live LLM provider, and deployed database for full production.",
    tech: ["Flutter", "Dart", "GetX", "Python", "FastAPI", "PostgreSQL", "LangGraph", "Firebase"],
    repo: "https://github.com/QossayKamel22/MIZAN",
    tier: 1,
  },
  {
    slug: "nova",
    name: "NOVA",
    tagline: "Personal Productivity Command Center",
    description:
      "A React and Firebase productivity workspace unifying tasks, goals, notes, a monthly calendar, and a lightweight insights dashboard, with Firebase Authentication (including social sign-in) and real-time Firestore CRUD behind protected routes. Design direction draws from Apple, Linear, and Notion.",
    tech: ["React 18", "TypeScript", "Vite", "Firebase Auth", "Cloud Firestore", "React Router", "Recharts"],
    repo: "https://github.com/QossayKamel22/NOVA",
    tier: 1,
  },
  {
    slug: "pos-agent",
    name: "POS Agent",
    tagline: "Restaurant Operations Monitoring Agent",
    description:
      "An operational monitoring system for restaurants: it reads a branch's live POS data, detects deviations from that branch's own baseline using a statistical (non-ML) detection layer, and routes alerts to the responsible manager through a LangGraph-based alert lifecycle. Backed by 90+ documented architecture decisions and a full requirements/spec trail. The backend, detection engine, and Flutter client are in active development.",
    tech: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "SQLAlchemy", "Alembic", "Flutter", "Docker"],
    isPrivate: true,
    status: "Private project — details available on request.",
    tier: 1,
  },
  // Tier 2
  {
    slug: "pulse",
    name: "PULSE",
    tagline: "Habit & Daily-Rhythm Tracker",
    description:
      "A Flutter and Firebase habit-tracking app spanning iOS, Android, macOS, and web from a single codebase — real Firebase Authentication, Firestore persistence with security rules, streak calculations, completion-rate metrics, and weekly insights. A 'PULSE AI' visual placeholder is present but has no LLM integration in the current version.",
    tech: ["Flutter", "GetX", "Firebase Auth", "Cloud Firestore", "FCM", "fl_chart"],
    repo: "https://github.com/QossayKamel22/PULSE",
    tier: 2,
  },
  {
    slug: "readspeed",
    name: "ReadSpeed",
    tagline: "Speed-Reading Mobile App",
    description:
      "A Flutter reading app aimed at improving reading speed and consistency. The public repository is currently empty on GitHub, so this entry lists only what is confirmed rather than a full case study.",
    tech: ["Flutter", "Dart"],
    repo: "https://github.com/QossayKamel22/ReadSpeed",
    status: "Repository currently empty on GitHub — case study omitted, repo link only.",
    tier: 2,
  },
  {
    slug: "makan",
    name: "MAKAN",
    tagline: "Real-Estate Discovery Concept",
    description:
      "A concept for a UAE real-estate discovery and comparison platform. The public repository exists but currently has no committed code or README, so no implementation details can be verified yet.",
    tech: [],
    repo: "https://github.com/QossayKamel22/MAKAN",
    status: "Repository currently empty on GitHub — concept only, no verifiable implementation yet.",
    tier: 2,
  },
  {
    slug: "ironfit",
    name: "IronFit",
    tagline: "Fitness & Workout Platform",
    description:
      "A Flutter fitness app scaffold connecting gym owners, coaches, and trainers — planned around custom training plans, workout tracking, and gym-owner analytics. The current public repository is an early-stage Flutter project scaffold without a detailed feature README yet.",
    tech: ["Flutter", "Dart", "Firebase", "Provider", "REST APIs"],
    repo: "https://github.com/QossayKamel22/ironFit",
    tier: 2,
  },
  // Tier 3
  {
    slug: "nasaq",
    name: "NASAQ",
    tagline: "Fashion & Accessories Mobile Commerce",
    description:
      "A Flutter mobile commerce app for fashion and accessories — product browsing by category, local preference persistence, and a structured, reusable component architecture.",
    tech: ["Flutter", "Dart", "Provider", "HTTP", "Shared Preferences"],
    repo: "https://github.com/QossayKamel22/NASAQ",
    tier: 3,
  },
  {
    slug: "ishop",
    name: "iShop",
    tagline: "C2C Marketplace App",
    description:
      "A Flutter marketplace concept for selling, trading, and bartering items, with cash-on-delivery and seller/admin dashboards.",
    tech: ["Flutter"],
    tier: 3,
  },
  {
    slug: "icar",
    name: "iCAR",
    tagline: "Car Services Booking — UI/UX",
    description:
      "A product design project connecting car owners with service providers — scheduling, notifications, pricing, and a loyalty program, designed in Figma.",
    tech: ["Figma", "UI/UX"],
    tier: 3,
  },
  {
    slug: "academic-freelance",
    name: "Academic & Freelance Projects",
    tagline: "University coursework and freelance builds",
    description:
      "An online training/education app in Flutter (UI, backend/API integration, auth), a university library booking system built with React and Express.js, and an online clothing store built with Spring and React as third-year coursework at Bethlehem University.",
    tech: ["Flutter", "React", "Express.js", "Spring"],
    tier: 3,
  },
];
