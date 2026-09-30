import { useEffect } from "react";
import { X, ExternalLink, CheckCircle2, Info } from "lucide-react";
import type { Project } from "../data/projects";
import { GithubIcon } from "./icons";
import { useApp } from "../context/AppContext";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const { t } = useApp();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="glass relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line shadow-2xl">
        {/* header visual */}
        <div className={`relative flex h-44 items-end bg-gradient-to-br ${project.gradient} p-6`}>
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg bg-black/25 text-white transition-colors hover:bg-black/40"
          >
            <X className="h-5 w-5" />
          </button>
          <span className="absolute right-6 top-14 text-6xl opacity-90 drop-shadow-lg">
            {project.emoji}
          </span>
          <div>
            <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {project.category}
            </span>
            <h3 className="font-display text-2xl font-bold text-white drop-shadow">{project.title}</h3>
          </div>
        </div>

        <div className="p-6 sm:p-7">
          {project.placeholder && (
            <div className="mb-5 flex items-start gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-500">
              <Info className="mt-0.5 h-4 w-4 shrink-0" />
              <span>This is a placeholder — replace with your real project details.</span>
            </div>
          )}

          <p className="text-sm leading-relaxed text-soft">{project.description}</p>

          <div className="mt-6">
            <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wide text-ink">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-line bg-card2 px-2.5 py-1 text-xs font-medium text-soft"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wide text-ink">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-soft">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent2 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20"
            >
              <GithubIcon className="h-4 w-4" />
              {t("github")}
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-card2 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" />
                {t("liveDemo")}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
