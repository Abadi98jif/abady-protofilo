import { GraduationCap, School, CalendarDays, Award } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { useApp } from "../context/AppContext";

const items = [
  {
    type: "university",
    school: "İstanbul Nişantaşı Üniversitesi",
    location: "Istanbul, Türkiye",
    degree: "Bachelor of Software Engineering",
    period: "2020 – 2025",
    accent: "from-accent to-accent2",
    highlights: ["Software Engineering", "Technology & IT Foundation"],
  },
  {
    type: "school",
    school: "King Fahad School",
    location: "Makkah, Saudi Arabia",
    degree: "Secondary Education",
    period: "2014 – 2016",
    accent: "from-accent2 to-accent3",
    highlights: ["General Education"],
  },
];

export default function Education() {
  const { t } = useApp();
  return (
    <Section
      id="education"
      kicker={t("sectionEducation")}
      title="Education"
      subtitle="Academic background in software engineering, combined with a strong foundation from my early education."
      className="bg-bgsoft/40"
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute bottom-4 left-[19px] top-2 w-px bg-gradient-to-b from-accent via-accent2 to-transparent" />
        <div className="space-y-8">
          {items.map((item, i) => {
            const Icon = item.type === "university" ? GraduationCap : School;
            return (
              <Reveal key={item.school} delay={i * 120}>
                <div className="relative flex gap-6 pl-14">
                  <div className="absolute left-0 top-1 z-10">
                    <div className="animate-pulse-ring grid h-10 w-10 place-items-center rounded-full border border-accent/40 bg-card text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="glass flex-1 rounded-2xl border border-line/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                      <CalendarDays className="h-3 w-3" />
                      {item.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${item.accent} text-white`}>
                        <Award className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-ink">{item.school}</h3>
                        <p className="text-xs text-soft">{item.location}</p>
                      </div>
                    </div>
                    <p className="mt-3 font-mono text-sm font-medium text-gradient">{item.degree}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.highlights.map((h) => (
                        <span key={h} className="rounded-md border border-line bg-card2/60 px-2.5 py-1 text-[11px] font-medium text-soft">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
