export type ProjectCategory =
  | "AI & Automation"
  | "Software Engineering"
  | "IT / Infrastructure"
  | "Web Development"
  | "API & Integration";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string | null;
  emoji: string;
  gradient: string;
  placeholder?: boolean;
}

export const projectCategories: ProjectCategory[] = [
  "AI & Automation",
  "Software Engineering",
  "IT / Infrastructure",
  "Web Development",
  "API & Integration",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "[AI Automation Workflow]",
    category: "AI & Automation",
    tagline: "Intelligent workflow automation concept",
    description:
      "[PLACEHOLDER] Describe your AI & automation project here — the problem it solves, the workflow it automates, and the outcome. This card is ready for you to replace with a real project.",
    technologies: ["N8N", "AI Agents", "REST APIs", "Webhooks"],
    features: [
      "[Feature 1 — describe a key capability]",
      "[Feature 2 — describe automation logic]",
      "[Feature 3 — describe integrations]",
    ],
    github: "[ADD GITHUB LINK]",
    demo: "[ADD LIVE DEMO]",
    emoji: "🤖",
    gradient: "from-fuchsia-500/80 to-indigo-600/80",
    placeholder: true,
  },
  {
    id: 2,
    title: "[Software Engineering Project]",
    category: "Software Engineering",
    tagline: "Scalable software solution",
    description:
      "[PLACEHOLDER] Describe your software engineering project — architecture, stack, and engineering practices used.",
    technologies: ["Git", "Docker", "CI/CD", "Agile"],
    features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
    github: "[ADD GITHUB LINK]",
    demo: null,
    emoji: "🧩",
    gradient: "from-emerald-500/80 to-cyan-600/80",
    placeholder: true,
  },
  {
    id: 3,
    title: "[IT Infrastructure Setup]",
    category: "IT / Infrastructure",
    tagline: "Network & systems implementation",
    description:
      "[PLACEHOLDER] Describe your IT infrastructure project — network design, hardware setup, or systems deployment.",
    technologies: ["DNS", "DHCP", "VPN", "LAN/WAN", "Troubleshooting"],
    features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
    github: "[ADD GITHUB LINK]",
    demo: null,
    emoji: "🖥️",
    gradient: "from-blue-500/80 to-violet-600/80",
    placeholder: true,
  },
  {
    id: 4,
    title: "[Web Development Project]",
    category: "Web Development",
    tagline: "Modern responsive web experience",
    description:
      "[PLACEHOLDER] Describe your web development project — the stack, features, and user experience.",
    technologies: ["React", "TypeScript", "Tailwind", "REST APIs"],
    features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
    github: "[ADD GITHUB LINK]",
    demo: "[ADD LIVE DEMO]",
    emoji: "🌐",
    gradient: "from-cyan-500/80 to-blue-600/80",
    placeholder: true,
  },
  {
    id: 5,
    title: "[API Integration Service]",
    category: "API & Integration",
    tagline: "Connecting systems through APIs",
    description:
      "[PLACEHOLDER] Describe your API integration project — endpoints, data flow, and systems connected.",
    technologies: ["Postman", "REST APIs", "Webhooks", "N8N"],
    features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
    github: "[ADD GITHUB LINK]",
    demo: null,
    emoji: "🔌",
    gradient: "from-amber-500/80 to-rose-600/80",
    placeholder: true,
  },
  {
    id: 6,
    title: "[Technical Support System]",
    category: "IT / Infrastructure",
    tagline: "Streamlining support & documentation",
    description:
      "[PLACEHOLDER] Describe your IT support project — ticketing workflow, documentation, or remote support process.",
    technologies: ["Jira", "ServiceNow", "Knowledge Base"],
    features: ["[Feature 1]", "[Feature 2]", "[Feature 3]"],
    github: "[ADD GITHUB LINK]",
    demo: null,
    emoji: "🧰",
    gradient: "from-sky-500/80 to-indigo-600/80",
    placeholder: true,
  },
];
