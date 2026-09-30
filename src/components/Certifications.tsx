import { useMemo, useState } from "react";
import { Search, FileBadge, Building2, CalendarDays, ExternalLink } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { certifications } from "../data/certifications";
import { useApp } from "../context/AppContext";

export default function Certifications() {
  const { t } = useApp();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const cats = useMemo(
    () => ["All", ...Array.from(new Set(certifications.map((c) => c.category)))],
    []
  );

  const filtered = useMemo(() => {
    return certifications.filter((c) => {
      const matchCat = cat === "All" || c.category === cat;
      const q = query.toLowerCase();
      const matchQuery =
        !q || c.title.toLowerCase().includes(q) || c.org.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, cat]);

  return (
    <Section
      id="certifications"
      kicker={t("sectionCerts")}
      title="Certifications"
      subtitle="Continuous learning across IT support, service management, AI, security, leadership and professional skills."
      className="bg-bgsoft/40"
    >
      {/* Search + filters */}
      <div className="mb-8 flex flex-col gap-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-soft" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search certifications…"
            className="w-full rounded-xl border border-line bg-card/60 py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-soft focus:border-accent focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                cat === c
                  ? "border-transparent bg-gradient-to-r from-accent to-accent2 text-white"
                  : "border-line text-soft hover:border-accent/50 hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 80}>
            <div className="group glass flex h-full flex-col rounded-2xl border border-line/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <div className="mb-4 flex items-start justify-between">
                <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${c.accent} text-white shadow-lg`}>
                  <FileBadge className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-line px-2.5 py-1 text-[10px] font-medium text-soft">
                  {c.category}
                </span>
              </div>
              <h3 className="flex-1 font-display text-sm font-semibold leading-snug text-ink">
                {c.title}
              </h3>
              <div className="mt-3 space-y-1 text-xs text-soft">
                <p className="flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-accent" />
                  {c.org}
                </p>
                <p className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-accent" />
                  {c.date}
                </p>
              </div>
              <div className="mt-4 border-t border-line pt-3">
                <button
                  aria-disabled="true"
                  title="[ADD CERTIFICATE LINK]"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-line bg-card2 px-3 py-2 text-xs font-semibold text-soft transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  View Certificate
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-soft">No certifications match your search.</p>
      )}
    </Section>
  );
}
