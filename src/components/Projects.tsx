import { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";
import { projects, projectCategories, type Project, type ProjectCategory } from "../data/projects";
import { GithubIcon } from "./icons";
import { useApp } from "../context/AppContext";

const filters: ("All" | ProjectCategory)[] = ["All", ...projectCategories];

export default function Projects() {
  const { t } = useApp();
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section
      id="projects"
      kicker={t("sectionProjects")}
      title="Featured Projects"
      subtitle="Explore a selection of projects across AI & automation, software engineering, IT infrastructure, web development and API integration."
      className="bg-bgsoft/40"
    >
      {/* Filters */}
      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
              active === f
                ? "border-transparent bg-gradient-to-r from-accent to-accent2 text-white shadow-lg shadow-accent/20"
                : "border-line text-soft hover:border-accent/50 hover:text-accent"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 90}>
            <article className="group glass flex h-full flex-col overflow-hidden rounded-2xl border border-line/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
              {/* Visual */}
              <div
                className={`relative flex h-40 items-end justify-between overflow-hidden bg-gradient-to-br ${p.gradient} p-5`}
              >
                <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_70%_20%,#fff,transparent_40%)]" />
                <div className="absolute -right-4 -bottom-6 text-7xl drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">
                  {p.emoji}
                </div>
                <span className="z-10 rounded-full bg-black/25 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                  {p.category}
                </span>
                {p.placeholder && (
                  <span className="z-10 rounded-full bg-amber-400/90 px-2.5 py-1 text-[10px] font-bold text-black">
                    PLACEHOLDER
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-soft">
                  {p.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line bg-card2/60 px-2 py-0.5 text-[11px] font-medium text-soft"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
                  <button
                    onClick={() => setSelected(p)}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-card2 px-3 py-2 text-xs font-semibold text-ink transition-colors hover:bg-accent/10 hover:text-accent"
                  >
                    {t("viewDetails")}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="grid h-9 w-9 place-items-center rounded-lg border border-line text-soft transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="grid h-9 w-9 place-items-center rounded-lg border border-line text-soft transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}
