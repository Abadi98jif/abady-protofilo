import { useState, type FormEvent } from "react";
import type { ComponentType } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";
import { useApp } from "../context/AppContext";

type Channel = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
};

export default function Contact() {
  const { t } = useApp();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const channels: Channel[] = [
    {
      icon: Mail,
      label: "Email",
      value: "jifabady@gmail.com",
      href: "mailto:jifabady@gmail.com",
    },
    { icon: LinkedinIcon, label: "LinkedIn", value: "[ADD LINK]", href: "#" },
    { icon: GithubIcon, label: "GitHub", value: "[ADD LINK]", href: "#" },
    { icon: Phone, label: "Phone", value: "[ADD PHONE]", href: "#" },
    { icon: MapPin, label: "Location", value: "Makkah, Saudi Arabia", href: undefined },
  ];

  return (
    <Section
      id="contact"
      kicker={t("sectionContact")}
      title="Let's Build Something Meaningful."
      className="bg-bgsoft/40"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        {/* Left: CTA + channels */}
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-soft">
              Have a role in mind, a project to discuss, or a technical problem to solve? I'd love
              to hear from you. Let's connect and explore how I can contribute to your team.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 space-y-3">
              {channels.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <>
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent2/20 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wide text-soft">
                        {c.label}
                      </p>
                      <p className="truncate font-medium text-ink">{c.value}</p>
                    </div>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="group flex items-center gap-4 rounded-xl border border-line bg-card/50 p-3.5 transition-all hover:border-accent/40 hover:bg-card"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 rounded-xl border border-line bg-card/50 p-3.5"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-6 flex gap-2">
              <span className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-1.5 text-xs text-soft">
                <GithubIcon className="h-4 w-4 text-accent" /> GitHub
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-1.5 text-xs text-soft">
                <LinkedinIcon className="h-4 w-4 text-accent" /> LinkedIn
              </span>
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            className="glass rounded-2xl border border-line/60 p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-soft">
                  {t("yourName")}
                </label>
                <input
                  id="name"
                  required
                  className="w-full rounded-xl border border-line bg-card/60 px-4 py-2.5 text-sm text-ink placeholder:text-soft focus:border-accent focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-soft">
                  {t("yourEmail")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-line bg-card/60 px-4 py-2.5 text-sm text-ink placeholder:text-soft focus:border-accent focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-soft">
                {t("subject")}
              </label>
              <input
                id="subject"
                required
                className="w-full rounded-xl border border-line bg-card/60 px-4 py-2.5 text-sm text-ink placeholder:text-soft focus:border-accent focus:outline-none"
                placeholder="Subject"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-soft">
                {t("message")}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-line bg-card/60 px-4 py-2.5 text-sm text-ink placeholder:text-soft focus:border-accent focus:outline-none"
                placeholder="Your message…"
              />
            </div>
            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.02]"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message Ready to Send
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  {t("sendMessage")}
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
