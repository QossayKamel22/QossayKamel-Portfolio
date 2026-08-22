export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  category: string;
  repo?: string;
  isPrivate?: boolean;
  status?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  logo?: string;
  hasVersionControl?: boolean;
}

export const projects: Project[] = [
  // Featured
  {
    slug: "flow",
    name: "FLOW",
    tagline: "AI-Powered CRM Platform",
    category: "Full-Stack · SaaS",
    description:
      "A production-quality CRM built to help teams manage leads, customers, deals, and follow-ups in one workspace — dashboard with live KPIs, lead scoring, a Kanban deals pipeline, calendar, and analytics, all backed by Firebase Authentication and per-workspace Cloud Firestore data. The AI Copilot and onboarding animations are visual product-concept features on the current roadmap: they use predefined demo content and do not call an external AI model yet.",
    tech: ["React 19", "TypeScript", "Vite", "Firebase Auth", "Cloud Firestore"],
    repo: "https://github.com/QossayKamel22/FLOW",
    featured: true,
    image: "flow.jpg",
    imageAlt: "FLOW CRM sign-in, AI onboarding, dashboard, and leads screens",
    logo: "flow.png",
    hasVersionControl: true,
  },
  {
    slug: "mizan",
    name: "MIZAN",
    tagline: "Smart Personal Finance Platform",
    category: "Mobile · FinTech · AI Agents",
    description:
      "An Arabic-first Flutter app for personal finance — income, expenses, budgets, transfers, bills, and savings goals — backed by a Python/FastAPI service and PostgreSQL, with Firebase handling authentication. A LangGraph-based AI agent layer is implemented as the foundation for AI-powered financial insights (a real /ai service with agents, tools, and prompts in the codebase); it is engineering groundwork, not a shipped user-facing AI feature yet. Currently pre-Milestone-A: functional, tested code, pending a live Firebase project, live LLM provider, and deployed database for full production.",
    tech: ["Flutter", "Dart", "GetX", "Python", "FastAPI", "PostgreSQL", "LangGraph"],
    repo: "https://github.com/QossayKamel22/MIZAN",
    featured: true,
    image: "mizan.jpg",
    imageAlt: "MIZAN home, transactions, bills, and AI insights screens",
    logo: "mizan.png",
    hasVersionControl: true,
  },
  {
    slug: "nova",
    name: "NOVA",
    tagline: "Personal Productivity Command Center",
    category: "Full-Stack · Productivity SaaS",
    description:
      "A React and Firebase productivity workspace unifying tasks, goals, notes, a monthly calendar, and a lightweight insights dashboard, with Firebase Authentication (including social sign-in) and real-time Firestore CRUD behind protected routes. Design direction draws from Apple, Linear, and Notion.",
    tech: ["React 18", "TypeScript", "Vite", "Firebase Auth", "Cloud Firestore", "Recharts"],
    repo: "https://github.com/QossayKamel22/NOVA",
    featured: true,
    image: "nova.jpg",
    imageAlt: "NOVA landing, auth, and dashboard screens",
    logo: "nova.png",
    hasVersionControl: true,
  },
  {
    slug: "pos-agent",
    name: "POS Agent",
    tagline: "Restaurant Operations Monitoring Agent",
    category: "AI Agent Engineering",
    description:
      "An operational monitoring system for restaurants: it reads a branch's live POS data, detects deviations from that branch's own baseline using a statistical (non-ML) detection layer, and routes alerts to the responsible manager through a LangGraph-based alert lifecycle. Backed by 90+ documented architecture decisions and a full requirements/spec trail. The backend, detection engine, and Flutter client are in active development.",
    tech: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "SQLAlchemy", "Flutter", "Docker"],
    isPrivate: true,
    status: "Private repository — details available on request.",
    featured: true,
    hasVersionControl: true,
  },
  // More work
  {
    slug: "pulse",
    name: "PULSE",
    tagline: "Habit & Daily-Rhythm Tracker",
    category: "Mobile · Cross-Platform",
    description:
      "A Flutter and Firebase habit-tracking app spanning iOS, Android, macOS, and web from a single codebase — real Firebase Authentication, Firestore persistence with security rules, streak calculations, completion-rate metrics, and weekly insights. A 'PULSE AI' visual placeholder is present but has no LLM integration in the current version.",
    tech: ["Flutter", "GetX", "Firebase Auth", "Cloud Firestore", "FCM"],
    repo: "https://github.com/QossayKamel22/PULSE",
    image: "pulse.jpg",
    imageAlt: "PULSE home, habit detail, insights, and profile screens",
    logo: "pulse.png",
    hasVersionControl: true,
  },
  {
    slug: "readspeed",
    name: "ReadSpeed",
    tagline: "Speed-Reading Mobile App",
    category: "Mobile · EdTech",
    description:
      "A Flutter reading app for building reading speed and comprehension — a library with books, PDFs, and articles, a focus-mode speed reader with adjustable WPM, and statistics tracking words read, sessions, and streaks over time.",
    tech: ["Flutter", "Dart", "GetX", "Firebase Auth"],
    repo: "https://github.com/QossayKamel22/ReadSpeed",
    image: "readspeed.jpg",
    imageAlt: "ReadSpeed onboarding, home, library, and speed reader screens",
    logo: "readspeed.png",
    hasVersionControl: true,
  },
  {
    slug: "ironfit",
    name: "IronFit",
    tagline: "Fitness & Workout Platform",
    category: "Mobile · Fitness Tech",
    description:
      "A Flutter fitness app scaffold connecting gym owners, coaches, and trainers — planned around custom training plans, workout tracking, and gym-owner analytics. The current public repository is an early-stage Flutter project scaffold without a detailed feature README yet.",
    tech: ["Flutter", "Dart", "Firebase", "Provider"],
    repo: "https://github.com/QossayKamel22/ironFit",
    logo: "ironfit.png",
    hasVersionControl: true,
  },
  {
    slug: "nasaq",
    name: "NASAQ",
    tagline: "Fashion & Accessories Mobile Commerce",
    category: "Mobile · E-Commerce",
    description:
      "A Flutter mobile commerce app for fashion and accessories — onboarding, auth, category browsing, product details, cart, checkout, orders, favorites, and address management, with a structured, reusable component architecture.",
    tech: ["Flutter", "Dart", "Provider", "HTTP"],
    repo: "https://github.com/QossayKamel22/NASAQ",
    image: "nasaq.jpg",
    imageAlt: "NASAQ onboarding, login, home, and product screens",
    hasVersionControl: true,
  },
  // Additional
  {
    slug: "ishop",
    name: "iShop",
    tagline: "C2C Marketplace App",
    category: "Mobile · Marketplace",
    description:
      "A Flutter marketplace concept for selling, trading, and bartering items, with cash-on-delivery and seller/admin dashboards.",
    tech: ["Flutter"],
  },
  {
    slug: "icar",
    name: "iCAR",
    tagline: "Car Services Booking — Product Design",
    category: "Product Design · Mobility",
    description:
      "A product design project connecting car owners with service providers — scheduling, notifications, pricing, and a loyalty program. This is a UI/UX design concept built in Figma; it has not yet been engineered into a codebase, so no technical stack is claimed for it.",
    tech: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
  },
  {
    slug: "makan",
    name: "MAKAN",
    tagline: "Real-Estate Discovery Concept",
    category: "Concept · PropTech",
    description:
      "A concept for a UAE real-estate discovery and comparison platform. Brand identity and product concept are defined; the codebase has not been started yet, so no technology stack is claimed for it.",
    tech: [],
    logo: "makan.png",
  },
  {
    slug: "academic-freelance",
    name: "Academic & Freelance Projects",
    tagline: "University coursework and freelance builds",
    category: "Coursework",
    description:
      "An online training/education app in Flutter (UI, backend/API integration, auth), a university library booking system built with React and Express.js, and an online clothing store built with Spring and React as third-year coursework at Bethlehem University.",
    tech: ["Flutter", "React", "Express.js", "Spring"],
  },
];
