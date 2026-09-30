import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Download, ChevronDown, Globe } from "lucide-react";
import { useApp, type Lang } from "../context/AppContext";

const navKeys = [
  "navAbout",
  "navSkills",
  "navProjects",
  "navExperience",
  "navEducation",
  "navCerts",
  "navAI",
  "navContact",
] as const;

const sectionIds = [
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "certifications",
  "ai",
  "contact",
] as const;

const langOptions: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ar", label: "ع" },
  { code: "tr", label: "TR" },
];

export default function Navbar() {
  const { theme, toggleTheme, lang, setLang, t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = sectionIds.map((id) => document.getElementById(id));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "glass mx-3 border-line/60 py-2 shadow-lg shadow-black/20 sm:mx-6 lg:mx-auto"
            : "border-transparent bg-transparent py-3"
        }`}
      >
        <a href="#hero" className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent2 font-display text-sm font-bold text-white shadow-lg shadow-accent/20">
            A
            <span className="absolute -inset-px rounded-lg bg-accent/30 blur-sm" />
          </span>
          <span className="font-display text-sm font-bold tracking-[0.18em] text-ink sm:text-base">
            ABDULLAH
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navKeys.map((key, i) => (
            <li key={key}>
              <a
                href={`#${sectionIds[i]}`}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === sectionIds[i]
                    ? "text-accent"
                    : "text-soft hover:text-ink"
                }`}
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-soft transition-colors hover:border-accent/50 hover:text-accent"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Language selector */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex h-9 items-center gap-1 rounded-lg border border-line px-2.5 text-sm text-soft transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Globe className="h-4 w-4" />
              {lang.toUpperCase()}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {langOpen && (
              <div className="glass absolute right-0 top-full mt-2 w-28 overflow-hidden rounded-xl border border-line p-1 shadow-xl shadow-black/30">
                {langOptions.map((o) => (
                  <button
                    key={o.code}
                    onClick={() => {
                      setLang(o.code);
                      setLangOpen(false);
                    }}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      lang === o.code
                        ? "bg-accent/10 text-accent"
                        : "text-soft hover:bg-card2 hover:text-ink"
                    }`}
                  >
                    {o.label} · {o.code}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Download CV */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent2 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03] md:flex"
          >
            <Download className="h-4 w-4" />
            {t("downloadCV")}
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-line text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="glass mx-3 mt-2 rounded-2xl border border-line/60 p-3 shadow-xl shadow-black/30 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navKeys.map((key, i) => (
              <li key={key}>
                <a
                  href={`#${sectionIds[i]}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-soft transition-colors hover:bg-card2 hover:text-ink"
                >
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center gap-2 border-t border-line pt-3 sm:hidden">
            {langOptions.map((o) => (
              <button
                key={o.code}
                onClick={() => {
                  setLang(o.code);
                  setOpen(false);
                }}
                className={`flex-1 rounded-lg border border-line px-2 py-2 text-sm ${
                  lang === o.code ? "text-accent" : "text-soft"
                }`}
              >
                {o.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
