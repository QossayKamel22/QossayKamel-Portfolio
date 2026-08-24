export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** Short, single-line summary shown on the Featured Work card. */
  summary: string;
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
  // Priority — always visible
  {
    slug: "flow",
    name: "FLOW",
    tagline: "AI-Powered CRM Platform",
    summary: "AI-assisted CRM for managing leads, deals, and customers in one workspace.",
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
    summary: "Arabic-first personal finance app with budgets, bills, and an AI insights foundation.",
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
    summary: "A unified workspace for tasks, goals, notes, and daily planning.",
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
    slug: "pulse",
    name: "PULSE",
    tagline: "Habit & Daily-Rhythm Tracker",
    summary: "Cross-platform habit tracker with streaks, completion rates, and weekly insights.",
    category: "Mobile · Cross-Platform",
    description:
      "A Flutter and Firebase habit-tracking app spanning iOS, Android, macOS, and web from a single codebase — real Firebase Authentication, Firestore persistence with security rules, streak calculations, completion-rate metrics, and weekly insights. A 'PULSE AI' visual placeholder is present but has no LLM integration in the current version.",
    tech: ["Flutter", "GetX", "Firebase Auth", "Cloud Firestore", "FCM"],
    repo: "https://github.com/QossayKamel22/PULSE",
    featured: true,
    image: "pulse.jpg",
    imageAlt: "PULSE home, habit detail, insights, and profile screens",
    logo: "pulse.png",
    hasVersionControl: true,
  },
  {
    slug: "readspeed",
    name: "ReadSpeed",
    tagline: "Speed-Reading Mobile App",
    summary: "Speed-reading app for building reading pace and comprehension with focus-mode sessions.",
    category: "Mobile · EdTech",
    description:
      "A Flutter reading app for building reading speed and comprehension — a library with books, PDFs, and articles, a focus-mode speed reader with adjustable WPM, and statistics tracking words read, sessions, and streaks over time.",
    tech: ["Flutter", "Dart", "GetX", "Firebase Auth"],
    repo: "https://github.com/QossayKamel22/ReadSpeed",
    featured: true,
    image: "readspeed.jpg",
    imageAlt: "ReadSpeed onboarding, home, library, and speed reader screens",
    logo: "readspeed.png",
    hasVersionControl: true,
  },
  {
    slug: "makan",
    name: "MAKAN — مكان",
    tagline: "UAE Real-Estate Intelligence Platform",
    summary:
      "Premium UAE real-estate platform for discovering and evaluating properties, developers, and opportunities.",
    category: "Real Estate Intelligence",
    description:
      "A premium UAE real-estate intelligence platform designed to help users discover, search, compare, and evaluate properties, developers, and real-estate opportunities across the UAE.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "NestJS", "Firebase"],
    repo: "https://github.com/QossayKamel22/MAKAN",
    featured: true,
    logo: "makan.png",
    hasVersionControl: true,
  },
  {
    slug: "tamm",
    name: "TAMM — تم",
    tagline: "Cross-Platform Digital Services App",
    summary:
      "Modern cross-platform platform bringing digital services into one simple and intuitive experience.",
    category: "Digital Services",
    description:
      "A modern cross-platform digital services platform designed to bring multiple services into one simple, fast, and intuitive experience.",
    tech: ["Expo", "React Native", "TypeScript", "NestJS", "Firebase"],
    repo: "https://github.com/QossayKamel22/TAMM",
    featured: true,
    image: "tamm.jpg",
    imageAlt: "TAMM brand mark artwork",
    hasVersionControl: true,
  },
  {
    slug: "pos-agent",
    name: "POS Agent",
    tagline: "Restaurant Operations Monitoring Agent",
    summary: "Monitors live POS data and alerts managers when a branch deviates from its baseline.",
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
    slug: "ironfit",
    name: "IronFit",
    tagline: "Fitness & Workout Platform",
    summary: "Fitness platform scaffold connecting gym owners, coaches, and trainers.",
    category: "Mobile · Fitness Tech",
    description:
      "A Flutter fitness app scaffold connecting gym owners, coaches, and trainers — planned around custom training plans, workout tracking, and gym-owner analytics. The current public repository is an early-stage Flutter project scaffold without a detailed feature README yet.",
    tech: ["Flutter", "Dart", "Firebase", "Provider"],
    repo: "https://github.com/QossayKamel22/ironFit",
    logo: "ironfit-app.png",
    hasVersionControl: true,
  },
  {
    slug: "nasaq",
    name: "NASAQ",
    tagline: "Fashion & Accessories Mobile Commerce",
    summary: "Fashion and accessories commerce app with a full browsing and checkout flow.",
    category: "Mobile · E-Commerce",
    description:
      "A Flutter mobile commerce app for fashion and accessories — onboarding, auth, category browsing, product details, cart, checkout, orders, favorites, and address management, with a structured, reusable component architecture.",
    tech: ["Flutter", "Dart", "Provider", "HTTP"],
    repo: "https://github.com/QossayKamel22/NASAQ",
    image: "nasaq.jpg",
    imageAlt: "NASAQ onboarding, login, home, and product screens",
    logo: "nasaq.png",
    hasVersionControl: true,
  },
  {
    slug: "ishop",
    name: "iShop",
    tagline: "C2C Marketplace App",
    summary: "C2C marketplace concept for selling, trading, and bartering items.",
    category: "Mobile · Marketplace",
    description:
      "A Flutter marketplace concept for selling, trading, and bartering items, with cash-on-delivery and seller/admin dashboards.",
    tech: ["Flutter"],
  },
  {
    slug: "icar",
    name: "iCAR",
    tagline: "Car Services Booking — Product Design",
    summary: "Product design concept connecting car owners with service providers.",
    category: "Product Design · Mobility",
    description:
      "A product design project connecting car owners with service providers — scheduling, notifications, pricing, and a loyalty program. This is a UI/UX design concept built in Figma; it has not yet been engineered into a codebase, so no technical stack is claimed for it.",
    tech: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
  },
  {
    slug: "academic-freelance",
    name: "Academic & Freelance Projects",
    tagline: "University coursework and freelance builds",
    summary: "University coursework and freelance builds across web and mobile.",
    category: "Coursework",
    description:
      "An online training/education app in Flutter (UI, backend/API integration, auth), a university library booking system built with React and Express.js, and an online clothing store built with Spring and React as third-year coursework at Bethlehem University.",
    tech: ["Flutter", "React", "Express.js", "Spring"],
  },
];
