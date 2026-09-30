import Section from "./Section";
import Reveal from "./Reveal";
import { skillCategories } from "../data/skills";
import { useApp } from "../context/AppContext";

export default function Skills() {
  const { t } = useApp();
  return (
    <Section
      id="skills"
      kicker={t("sectionSkills")}
      title="Technical Skills"
      subtitle="A broad technical toolkit spanning operating systems, hardware, networking, software, IT support, development, DevOps, AI and automation."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <Reveal key={cat.title} delay={(i % 3) * 100}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl border border-line/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
                {/* animated shimmer on hover */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${cat.accent} text-white shadow-lg`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-lg border border-line bg-card2/60 px-3 py-1.5 text-xs font-medium text-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
