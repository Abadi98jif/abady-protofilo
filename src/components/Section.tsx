import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  kicker,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="mb-12 md:mb-16">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-accent to-accent2" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
                {kicker}
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-soft sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
