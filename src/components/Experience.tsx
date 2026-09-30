import { Building2, MapPin, CalendarDays, CheckCircle2, TrendingUp } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { useApp } from "../context/AppContext";

const progression = [
  { label: "Hospitality & Guest Service", sub: "Customer-focused foundations", year: "2016" },
  { label: "Organization Supervision", sub: "Leadership & process optimization", year: "2021" },
  { label: "Software Engineering & IT", sub: "Technology career path", year: "2025" },
];

const experiences = [
  {
    company: "GENERAL SYNDICATE OF CARS",
    role: "Organization Supervisor",
    location: "Makkah, Saudi Arabia",
    period: "2021 – 2023",
    icon: Building2,
    accent: "from-cyan-500 to-sky-600",
    achievements: [
      "Streamlined processes and improved efficiency by 25%",
      "Coordinated 150+ transportation schedules",
      "Enhanced team productivity by 20%",
      "Implemented safety protocols, reducing incidents by 30%",
      "Fostered collaboration and strong team morale",
    ],
  },
  {
    company: "ANJUM HOTEL MAKKAH",
    role: "Hospitality Associate / Guest Service Assistant",
    location: "Makkah, Saudi Arabia",
    period: "2016 – 2019",
    icon: Building2,
    accent: "from-violet-500 to-indigo-600",
    achievements: [
      "95% guest satisfaction",
      "Reduced check-in/check-out wait times by 30%",
      "Increased additional revenue by 20% through upselling",
      "Received positive guest reviews",
      "Coordinated events",
      "Trained and mentored new employees",
    ],
  },
];

const transferable = [
  "Communication",
  "Problem Solving",
  "Teamwork",
  "Leadership",
  "Customer Service",
  "Process Improvement",
  "Time Management",
];

export default function Experience() {
  const { t } = useApp();
  return (
    <Section
      id="experience"
      kicker={t("sectionExperience")}
      title="Professional Experience"
      subtitle="A proven track record of leadership, process optimization and service excellence — skills that transfer directly into IT and software engineering roles."
    >
      {/* Progression visualization */}
      <Reveal>
        <div className="mb-14 rounded-2xl border border-line/60 bg-card/50 p-6 sm:p-8">
          <div className="mb-8 flex items-center gap-2 text-accent">
            <TrendingUp className="h-4 w-4" />
            <span className="font-display text-sm font-semibold">My Journey Toward Technology</span>
          </div>
          <div className="relative grid gap-6 sm:grid-cols-3 sm:gap-0">
            {/* connector */}
            <div className="absolute left-0 right-0 top-7 hidden h-0.5 flow-line sm:block" />
            {progression.map((step, i) => (
              <div key={step.label} className="relative flex items-start gap-4 sm:flex-col sm:items-center sm:text-center">
                <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-accent/40 bg-card font-display text-lg font-bold text-gradient shadow-lg shadow-accent/10">
                  0{i + 1}
                </div>
                <div>
                  <p className="font-mono text-[11px] text-accent">{step.year}</p>
                  <p className="mt-0.5 font-display text-sm font-semibold text-ink">{step.label}</p>
                  <p className="text-xs text-soft">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-accent via-accent2 to-transparent sm:left-1/2" />
        <div className="space-y-10">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            const left = i % 2 === 0;
            return (
              <Reveal key={exp.company} delay={80}>
                <div className="relative grid gap-4 pl-14 sm:grid-cols-2 sm:gap-10 sm:pl-0">
                  {/* node */}
                  <div className="absolute left-0 top-1 z-10 sm:left-1/2 sm:-translate-x-1/2">
                    <div className="animate-pulse-ring grid h-10 w-10 place-items-center rounded-full border border-accent/40 bg-card text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <div className={left ? "sm:col-start-1 sm:text-right" : "sm:col-start-2"}>
                    <div
                      className={`group glass rounded-2xl border border-line/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 ${
                        left ? "sm:mr-0" : "sm:ml-0"
                      }`}
                    >
                      <div className={`mb-3 flex flex-wrap items-center gap-2 ${left ? "sm:justify-end" : ""}`}>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                          <CalendarDays className="h-3 w-3" />
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-ink">{exp.company}</h3>
                      <p className={`mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-gradient`}>
                        {exp.role}
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-soft">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </p>

                      <ul className={`mt-5 space-y-2 ${left ? "sm:[direction:ltr]" : ""}`}>
                        {exp.achievements.map((a) => (
                          <li
                            key={a}
                            className={`flex items-start gap-2 text-sm text-soft ${
                              left ? "sm:flex-row-reverse sm:text-right" : ""
                            }`}
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={left ? "hidden sm:block sm:col-start-2" : "hidden"} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Transferable skills */}
      <Reveal delay={120}>
        <div className="mt-14 rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
          <h4 className="mb-4 font-display text-base font-semibold text-ink">
            Transferable Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {transferable.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-line bg-card/60 px-3 py-1.5 text-xs font-medium text-soft transition-colors hover:border-accent/50 hover:text-accent"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
