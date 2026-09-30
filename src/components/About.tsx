import { GraduationCap, ServerCog, Bot, Languages, MapPin, CheckCircle2 } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { useCountUp } from "../hooks/useCountUp";
import { useApp } from "../context/AppContext";

const stats = [
  { num: 1, label: "Software Engineering Graduate", icon: GraduationCap },
  { num: 2, label: "IT Support & Infrastructure", icon: ServerCog },
  { num: 3, label: "AI & Automation", icon: Bot },
  { num: 4, label: "Multilingual", icon: Languages },
];

const languages = ["Arabic", "English", "Turkish"];

function StatCard({ stat, delay }: { stat: (typeof stats)[number]; delay: number }) {
  const { value, ref } = useCountUp(stat.num);
  const Icon = stat.icon;
  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        className="group glass relative overflow-hidden rounded-2xl border border-line/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
      >
        <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100" />
        <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 text-accent">
          <Icon className="h-5 w-5" />
        </div>
        <div className="font-display text-4xl font-bold text-ink">
          <span className="text-gradient">0{value}</span>
        </div>
        <p className="mt-2 text-sm font-medium text-soft">{stat.label}</p>
      </div>
    </Reveal>
  );
}

export default function About() {
  const { t } = useApp();
  return (
    <Section
      id="about"
      kicker={t("sectionAbout")}
      title="About Me"
      className="bg-bgsoft/40"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <div>
          <Reveal>
            <p className="text-base leading-relaxed text-soft">
              I am a <span className="font-semibold text-ink">Software Engineering graduate</span>{" "}
              passionate about IT, AI, automation, software development, and technology-driven
              solutions. I enjoy learning new technologies and solving practical technical
              problems. My interests combine software engineering with IT infrastructure, technical
              support, APIs, automation, and AI.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <div className="mb-2 flex items-center gap-2 text-accent">
                <MapPin className="h-4 w-4" />
                <span className="font-display text-sm font-semibold">What I'm looking for</span>
              </div>
              <p className="text-sm leading-relaxed text-soft">
                I am looking for opportunities where I can contribute to dynamic IT/technology
                teams while continuing to develop my technical expertise.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Technical Curiosity", "Problem Solving", "Adaptability", "Continuous Learning", "Professionalism"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card/60 px-3 py-1.5 text-xs font-medium text-soft"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                    {tag}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4">
          <Reveal>
            <div className="glass rounded-2xl border border-line/60 p-6">
              <h3 className="mb-4 font-display text-lg font-semibold text-ink">Languages</h3>
              <div className="space-y-3">
                {languages.map((l, i) => (
                  <div key={l} className="flex items-center gap-3">
                    <span className="w-6 font-mono text-xs text-accent">0{i + 1}</span>
                    <span className="flex-1 text-sm font-medium text-ink">{l}</span>
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-card2">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                        style={{ width: `${100 - i * 12}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <StatCard key={s.num} stat={s} delay={i * 90} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
