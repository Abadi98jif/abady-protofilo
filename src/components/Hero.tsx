import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles, Mail, Terminal, Braces, Radio } from "lucide-react";
import Reveal from "./Reveal";
import { useApp } from "../context/AppContext";

const roles = ["Software Engineer", "IT Support", "AI & Automation Enthusiast"];

export default function Hero() {
  const { t } = useApp();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Text */}
        <div className="relative z-10 text-center lg:text-left">
          <Reveal delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Open to Opportunities
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="mb-3 font-mono text-sm text-soft">
              <span className="text-accent">~/</span>abdullah-khalid-al-jafri
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[4rem]">
              ABDULLAH KHALID
              <span className="text-gradient block">AL JAFRI</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-6 flex h-9 items-center justify-center gap-2 lg:justify-start">
              <span className="text-ink/40">|</span>
              <span key={roleIndex} className="hero-role font-display text-lg font-medium text-accent sm:text-2xl">
                {roles[roleIndex]}
              </span>
              <span className="caret ml-1 inline-block h-6 w-0.5 bg-accent" />
            </div>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-soft lg:mx-0">
              Building practical technology solutions at the intersection of
              software engineering, IT infrastructure, AI, and automation.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03]"
              >
                {t("viewProjects")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-card/50 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Download className="h-4 w-4" />
                {t("downloadCV")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-soft transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                {t("letsConnect")}
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex items-center justify-center gap-6 text-soft lg:justify-start">
              <div className="text-center lg:text-left">
                <p className="font-display text-lg font-bold text-ink">Makkah 🇸🇦</p>
                <p className="text-xs">Saudi Arabia</p>
              </div>
              <span className="h-8 w-px bg-line" />
              <div className="text-center lg:text-left">
                <p className="font-display text-lg font-bold text-ink">Istanbul 🇹🇷</p>
                <p className="text-xs">Türkiye</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual / floating elements */}
        <div className="relative z-0 hidden h-[520px] lg:block">
          {/* center node */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-pulse-ring grid h-40 w-40 place-items-center rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 to-accent2/10 backdrop-blur-sm">
              <div className="text-center">
                <div className="mx-auto mb-2 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent2 text-white shadow-lg shadow-accent/30">
                  <Terminal className="h-7 w-7" />
                </div>
                <p className="font-mono text-[11px] text-soft">dev@abdullah</p>
              </div>
            </div>
          </div>

          {/* terminal card */}
          <div className="animate-float absolute left-0 top-10 w-56 rounded-xl border border-line bg-card/70 p-3 shadow-xl shadow-black/30 backdrop-blur-md">
            <div className="mb-2 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
            <p className="term text-[11px] leading-relaxed text-soft">
              <span className="text-accent">$</span> automate workflow
              <br />
              <span className="text-emerald-400">✓</span> n8n running…
              <br />
              <span className="text-accent2">→</span> API connected
            </p>
          </div>

          {/* code fragment */}
          <div className="animate-float-slow absolute right-0 top-8 w-48 rounded-xl border border-line bg-card/70 p-3 shadow-xl shadow-black/30 backdrop-blur-md">
            <div className="mb-1 flex items-center gap-1 text-accent2">
              <Braces className="h-3.5 w-3.5" />
              <span className="term text-[10px]">app.ts</span>
            </div>
            <p className="term text-[10px] leading-relaxed text-soft">
              <span className="text-purple-400">const</span> {""}
              <span className="text-cyan-400">stack</span> = [
              <br />
              &nbsp;&nbsp;<span className="text-emerald-400">"IT"</span>,{" "}
              <span className="text-emerald-400">"AI"</span>,
              <br />
              &nbsp;&nbsp;<span className="text-emerald-400">"DevOps"</span>
              <br />
              ];
            </p>
          </div>

          {/* API chip */}
          <div className="animate-float absolute bottom-24 left-4 flex items-center gap-2 rounded-xl border border-accent2/40 bg-card/70 px-3 py-2 shadow-lg backdrop-blur-md">
            <Radio className="h-4 w-4 text-accent2" />
            <span className="term text-xs text-soft">GET /api/integrate</span>
          </div>

          {/* network dots */}
          <div className="absolute right-10 bottom-10 flex flex-col gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-line bg-card/60 px-2.5 py-1.5 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="term text-[10px] text-soft">n8n.node</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-line bg-card/60 px-2.5 py-1.5 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="term text-[10px] text-soft">ai.agent</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-line bg-card/60 px-2.5 py-1.5 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              <span className="term text-[10px] text-soft">api.response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
