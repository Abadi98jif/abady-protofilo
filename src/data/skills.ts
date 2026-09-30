import type { LucideIcon } from "lucide-react";
import {
  MonitorCog,
  Cpu,
  Network,
  AppWindow,
  Headset,
  Code2,
  Bot,
} from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  accent: string; // tailwind gradient classes
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Operating Systems",
    icon: MonitorCog,
    accent: "from-cyan-500 to-sky-600",
    items: ["Windows 10/11", "macOS", "Linux Basics"],
  },
  {
    title: "Hardware & Troubleshooting",
    icon: Cpu,
    accent: "from-blue-500 to-indigo-600",
    items: [
      "PC / Laptop Assembly",
      "Printer / Scanner Setup",
      "Monitor Setup",
      "RAM Troubleshooting",
      "Storage Troubleshooting",
      "CPU Troubleshooting",
    ],
  },
  {
    title: "Networking",
    icon: Network,
    accent: "from-violet-500 to-purple-600",
    items: [
      "IP",
      "DNS",
      "DHCP",
      "LAN / WAN",
      "VPN",
      "Wi-Fi Troubleshooting",
      "ping",
      "tracert",
      "ipconfig",
    ],
  },
  {
    title: "Software & Applications",
    icon: AppWindow,
    accent: "from-teal-500 to-cyan-600",
    items: [
      "Microsoft Office",
      "Outlook",
      "Gmail Configuration",
      "Antivirus Installation",
      "Software Installation",
      "Software Updates",
    ],
  },
  {
    title: "IT Support",
    icon: Headset,
    accent: "from-amber-500 to-orange-600",
    items: [
      "Jira",
      "ServiceNow",
      "Zendesk",
      "TeamViewer",
      "AnyDesk",
      "Knowledge Base Documentation",
    ],
  },
  {
    title: "Development & DevOps",
    icon: Code2,
    accent: "from-emerald-500 to-green-600",
    items: [
      "Git",
      "Visual Studio Code",
      "Postman",
      "Docker",
      "Jenkins",
      "REST APIs",
      "CI/CD",
      "Agile",
    ],
  },
  {
    title: "Automation & AI",
    icon: Bot,
    accent: "from-fuchsia-500 to-pink-600",
    items: ["N8N Workflow Automation", "AI Platforms", "AI Agents", "API Integration"],
  },
];
