export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Mobile Development",
    items: [
      "Flutter",
      "Dart",
      "React Native",
      "Expo",
      "GetX",
      "Provider",
      "BLoC",
      "Riverpod",
      "Firebase",
      "iOS",
      "Android",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Vite", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Node.js",
      "NestJS",
      "Express.js",
      "REST API",
      "Java",
      "Spring Boot",
      "SQLAlchemy",
      "Alembic",
      "Docker",
    ],
  },
  {
    category: "Database",
    items: ["Firebase", "Cloud Firestore", "PostgreSQL", "SQL"],
  },
  {
    category: "AI",
    items: ["LangGraph", "AI Agents", "LLM Tool-Calling", "Agentic Workflows"],
  },
  {
    category: "Design",
    items: ["Figma", "UI/UX", "Wireframing", "Prototyping", "Branding"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Version Control", "VS Code", "Xcode", "Android Studio"],
  },
];

export interface FigmaWork {
  name: string;
  description: string;
  url: string;
}

export const figmaWork: FigmaWork[] = [
  {
    name: "AI POS Agent App",
    description:
      "AI-powered POS / business agent concept — the product-design counterpart to the POS Agent engineering work, focused on turning operational data into actionable alerts for managers. Concept design — not a claim of a deployed product.",
    url: "https://www.figma.com/make/mvuLWhAlltg9lPSnA0nbf9/AI-POS-Agent-App",
  },
  {
    name: "iCAR",
    description: "UI/UX product design project for a car services booking concept.",
    url: "https://www.figma.com/design/cP3WIWxro2CAscEiHsgSf2/iCAR",
  },
  {
    name: "PalGram",
    description: "UI/UX product design project.",
    url: "https://www.figma.com/design/sTwNl2EkM2gizHlls1Ii7G/PalGram",
  },
];
