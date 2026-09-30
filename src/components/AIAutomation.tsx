import {
  UserRound,
  BrainCircuit,
  Workflow,
  Plug,
  Zap,
  Trophy,
  Bot,
  GitBranch,
  Network,
  Cpu,
  Boxes,
} from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { useApp } from "../context/AppContext";

const pipeline = [
  { label: "User Input", icon: UserRound, accent: "from-cyan-500 to-sky-600" },
  { label: "AI / Logic", icon: BrainCircuit, accent: "from-violet-500 to-purple-600" },
  { label: "Automation", icon: Workflow, accent: "from-fuchsia-500 to-pink-600" },
  { label: "API", icon: Plug, accent: "from-blue-500 to-indigo-600" },
  { label: "Action", icon: Zap, accent: "from-amber-500 to-orange-600" },
  { label: "Result", icon: Trophy, accent: "from-emerald-500 to-green-600" },
];

const interests = [
  { label: "AI Agents", icon: Bot },
  { label: "Workflow Automation", icon: Workflow },
  { label: "N8N", icon: GitBranch },
  { label: "API Integration", icon: Plug },
  { label: "AI Platforms", icon: Network },
  { label: "Intelligent Workflows", icon: Cpu },
  { label: "Data Flows", icon: Boxes },
];

export default function AIAutomation() {
  const { t } = useApp();

  return (
    <Section
      id="ai"
      kicker={t("sectionAI")}
      title="Exploring AI & Automation"
      subtitle="Applying artificial intelligence and workflow automation to turn manual processes into intelligent, repeatable systems."
      className="bg-bgsoft/40"
    >
      {/* Workflow pipeline */}
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-line/60 bg-card/40 p-6 sm:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent2/10 blur-3xl" />

          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {pipeline.map((node, i) => {
              const Icon = node.icon;
              return (
                <div key={node.label} className="relative flex flex-col items-center gap-3">
                  {/* connector */}
                  {i < pipeline.length - 1 && (
                    <div className="absolute right-[-12%] top-6 hidden h-0.5 w-6 lg:block">
                      <div className="h-full w-full flow-line" />
                    </div>
                  )}
                  <div
                    className="animate-pulse-ring grid h-14 w-14 place-items-center rounded-2xl border border-accent/30 bg-card"
                    style={{ animationDelay: `${i * 0.35}s` }}
                  >
                    <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${node.accent} text-white shadow-lg`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <span className="text-center font-mono text-[11px] font-medium uppercase tracking-wider text-soft">
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* arrow labels for mobile */}
          <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
            <span className="term text-xs text-accent">flow</span>
            <span className="flow-line h-0.5 w-16 rounded-full" />
            <span className="term text-xs text-accent2">automated</span>
          </div>
        </div>
      </Reveal>

      {/* Interests */}
      <Reveal delay={120}>
        <div className="mt-10">
          <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wide text-ink">
            Areas of Interest
          </h4>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
            {interests.map((it) => {
              const Icon = it.icon;
              return (
                <div
                  key={it.label}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-line bg-card/50 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-accent/20 to-accent2/20 text-accent transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-soft">{it.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
