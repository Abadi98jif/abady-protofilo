import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-line/60 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-base font-bold tracking-[0.15em] text-ink">
            ABDULLAH <span className="text-accent">KHALID AL JAFRI</span>
          </p>
          <p className="mt-1 text-xs text-soft">
            Software Engineer · IT Support · AI & Automation
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:jifabady@gmail.com"
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-soft transition-colors hover:border-accent/50 hover:text-accent"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-soft transition-colors hover:border-accent/50 hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-soft transition-colors hover:border-accent/50 hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center gap-3 border-t border-line/60 pt-6 text-center text-xs text-soft sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} Abdullah Khalid Al Jafri. Built with React, Tailwind & TypeScript.
        </p>
        <a
          href="#hero"
          className="inline-flex items-center gap-1.5 font-medium text-accent transition-colors hover:text-accent2"
        >
          Back to top <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
