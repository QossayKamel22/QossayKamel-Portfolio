export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  type?: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Customer Relations Officer — Digital Sales & Digital Banking",
    org: "Arab Bank",
    period: "Feb 2025 – May 2026",
    bullets: [
      "Work in digital sales, customer relations, and internet banking — helping customers adopt and use Arab Bank's digital and internet banking products, including the Arabi Mobile app.",
      "Identify customer banking needs and explain digital banking products, guiding onboarding to internet and mobile banking channels.",
      "Resolve customer issues and communicate banking workflows clearly, building requirements-gathering and stakeholder-communication skills.",
      "Gained ground-level familiarity with how a bank's digital ecosystem — including its mobile app — is positioned and used by real customers, connecting the customer side (Arab Bank) with the engineering side (PCNC).",
    ],
  },
  {
    role: "Flutter Developer",
    org: "PCNC IT Solutions",
    period: "Aug 2024 – Jan 2025 · After graduation",
    type: "Full-time",
    bullets: [
      "Worked as a full-time Flutter Developer at PCNC IT Solutions, contributing to production banking applications and mobile digital banking experiences for iOS and Android.",
      "Contributed to production-grade Flutter mobile banking apps for Bank of Palestine, Cairo Amman Bank, Arab Islamic Bank, Safa Bank, and Egyptian Arab Land Bank.",
      "Implemented banking features and screens, integrated APIs with banking backends, and built authentication and secure user flows.",
      "Debugged and maintained live production apps, collaborating cross-functionally with banking and technical teams using Git for version control.",
    ],
  },
  {
    role: "Frontend & UI/UX Developer",
    org: "Dimensions",
    period: "Jul 2023 – Oct 2023 · internship",
    bullets: [
      "Designed wireframes and prototypes to improve usability.",
      "Collaborated with the frontend team, translating UI/UX designs into functional interface elements.",
    ],
  },
  {
    role: "IT Officer",
    org: "BJP Pharmaceutical Company",
    period: "Jul 2022 – Oct 2022",
    bullets: [
      "Managed IT support ticketing, hardware and software troubleshooting, and network maintenance.",
    ],
  },
  {
    role: "UI/UX Designer & Branding Specialist",
    org: "Freelance",
    period: "2021 – Present",
    bullets: [
      "Delivered branding assets, logo design, and UI/UX solutions in Figma for independent clients.",
    ],
  },
];
