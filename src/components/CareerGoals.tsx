import {
  Code2,
  Headset,
  LifeBuoy,
  ServerCog,
  Workflow,
  Bot,
  Bug,
  Target,
} from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { useApp } from "../context/AppContext";

const roles = [
  { label: "Software Engineer", icon: Code2, accent: "from-emerald-500 to-teal-600" },
  { label: "IT Support Specialist", icon: Headset, accent: "from-cyan-500 to-sky-600" },
  { label: "Technical Support Engineer", icon: LifeBuoy, accent: "from-blue-500 to-indigo-600" },
  { label: "IT Operations", icon: ServerCog, accent: "from-violet-500 to-purple-600" },
  { label: "Junior DevOps", icon: Workflow, accent: "from-fuchsia-500 to-pink-600" },
  { label: "AI / Automation", icon: Bot, accent: "from-amber-500 to-orange-600" },
  { label: "QA / Software Testing", icon: Bug, accent: "from-rose-500 to-red-600" },
];

export default function CareerGoals() {
  const { t } = useApp();
  return (
    <Section
      id="career"
      kicker={t("sectionCareer")}
      title="What I'm Looking For"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <Reveal>
          <div className="glass rounded-2xl border border-accent/25 bg-accent/5 p-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
              <Target className="h-3.5 w-3.5" />
              Career Objective
            </div>
            <p className="text-base leading-relaxed text-soft">
              I am looking for an <span className="font-semibold text-ink">entry-level opportunity</span> in
              Software Engineering, IT Support, Technical Support, IT Operations, AI, Automation,
              or related technology roles where I can{" "}
              <span className="text-accent">apply my technical knowledge</span>,{" "}
              <span className="text-accent">learn continuously</span>, and contribute to meaningful
              projects.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {roles.map((r, i) => {
            const Icon = r.icon;
            return (
              <Reveal key={r.label} delay={(i % 3) * 80}>
                <div className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-line/60 bg-card/50 p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${r.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                    {r.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
