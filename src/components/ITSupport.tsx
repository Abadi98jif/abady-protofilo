import { useState } from "react";
import {
  Search,
  Stethoscope,
  Wrench,
  FileCheck2,
  Network,
  Cpu,
  AppWindow,
  Users,
  MonitorUp,
  Ticket,
} from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { useApp } from "../context/AppContext";

const steps = [
  { n: "01", title: "Identify", icon: Search, desc: "Understand the issue and gather information." },
  { n: "02", title: "Diagnose", icon: Stethoscope, desc: "Analyze hardware, software, network or system problems." },
  { n: "03", title: "Resolve", icon: Wrench, desc: "Apply the appropriate technical solution." },
  { n: "04", title: "Document", icon: FileCheck2, desc: "Document the solution and improve future support." },
];

const examples = [
  { label: "Network Troubleshooting", icon: Network },
  { label: "Hardware Troubleshooting", icon: Cpu },
  { label: "Software Installation", icon: AppWindow },
  { label: "User Support", icon: Users },
  { label: "Remote Support", icon: MonitorUp },
  { label: "Ticket Management", icon: Ticket },
];

export default function ITSupport() {
  const { t } = useApp();
  const [active, setActive] = useState(0);

  return (
    <Section
      id="it-support"
      kicker={t("sectionITSupport")}
      title="How I Solve Technical Problems"
      subtitle="A structured, methodical approach to technical support that reduces downtime and keeps users productive."
    >
      {/* Interactive steps */}
      <div className="relative">
        <div className="absolute left-0 right-0 top-9 hidden h-0.5 flow-line md:block" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <button
                key={s.n}
                onClick={() => setActive(i)}
                className={`group relative rounded-2xl border p-5 text-left transition-all duration-300 ${
                  isActive
                    ? "border-accent/50 bg-card shadow-xl shadow-accent/5"
                    : "border-line/60 bg-card/40 hover:border-accent/30"
                }`}
              >
                <div className="relative z-10 mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent2 font-display text-base font-bold text-white shadow-lg shadow-accent/20">
                  {s.n}
                </div>
                <div className={`mb-2 grid h-9 w-9 place-items-center rounded-lg ${isActive ? "bg-accent/10 text-accent" : "bg-card2 text-soft"}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="font-display text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-soft">{s.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual examples */}
      <Reveal delay={120}>
        <div className="mt-12 rounded-2xl border border-line/60 bg-card/50 p-6 sm:p-8">
          <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wide text-ink">
            Areas of Support
          </h4>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {examples.map((ex) => {
              const Icon = ex.icon;
              return (
                <div
                  key={ex.label}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-line bg-card2/50 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-soft">{ex.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
