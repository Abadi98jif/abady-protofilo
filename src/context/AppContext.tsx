import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar" | "tr";

type Dict = Record<string, { en: string; ar: string; tr: string }>;

const dict: Dict = {
  navAbout: { en: "About", ar: "عني", tr: "Hakkımda" },
  navSkills: { en: "Skills", ar: "المهارات", tr: "Yetenekler" },
  navProjects: { en: "Projects", ar: "المشاريع", tr: "Projeler" },
  navExperience: { en: "Experience", ar: "الخبرات", tr: "Deneyim" },
  navEducation: { en: "Education", ar: "التعليم", tr: "Eğitim" },
  navCerts: { en: "Certifications", ar: "الشهادات", tr: "Sertifikalar" },
  navAI: { en: "AI & Automation", ar: "الذكاء والآلي", tr: "Yapay Zekâ" },
  navContact: { en: "Contact", ar: "تواصل", tr: "İletişim" },
  viewProjects: { en: "View My Projects", ar: "عرض مشاريعي", tr: "Projeleri Gör" },
  downloadCV: { en: "Download CV", ar: "تحميل السيرة", tr: "CV İndir" },
  letsConnect: { en: "Let's Connect", ar: "لنتواصل", tr: "İletişime Geç" },
  sectionAbout: { en: "About Me", ar: "من أنا", tr: "Hakkımda" },
  sectionSkills: { en: "Technical Skills", ar: "المهارات التقنية", tr: "Teknik Beceriler" },
  sectionProjects: { en: "Featured Projects", ar: "المشاريع المميزة", tr: "Öne Çıkan Projeler" },
  sectionExperience: { en: "Experience", ar: "الخبرات", tr: "Deneyim" },
  sectionEducation: { en: "Education", ar: "التعليم", tr: "Eğitim" },
  sectionCerts: { en: "Certifications", ar: "الشهادات", tr: "Sertifikalar" },
  sectionITSupport: { en: "IT Support", ar: "الدعم التقني", tr: "BT Desteği" },
  sectionAI: { en: "AI & Automation", ar: "الذكاء الاصطناعي والأتمتة", tr: "Yapay Zekâ ve Otomasyon" },
  sectionCareer: { en: "Career Goals", ar: "الأهداف المهنية", tr: "Kariyer Hedefleri" },
  sectionContact: { en: "Contact", ar: "تواصل معي", tr: "İletişim" },
  sendMessage: { en: "Send Message", ar: "إرسال الرسالة", tr: "Mesaj Gönder" },
  yourName: { en: "Name", ar: "الاسم", tr: "İsim" },
  yourEmail: { en: "Email", ar: "البريد الإلكتروني", tr: "E-posta" },
  subject: { en: "Subject", ar: "الموضوع", tr: "Konu" },
  message: { en: "Message", ar: "الرسالة", tr: "Mesaj" },
  github: { en: "GitHub", ar: "جيت هاب", tr: "GitHub" },
  liveDemo: { en: "Live Demo", ar: "عرض مباشر", tr: "Canlı Önizleme" },
  viewDetails: { en: "View Details", ar: "التفاصيل", tr: "Detaylar" },
};

interface AppCtx {
  theme: "dark" | "light";
  toggleTheme: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
}

const Ctx = createContext<AppCtx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [lang, setLang] = useState<Lang>("en");

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  const t = useCallback(
    (key: string) => {
      const entry = dict[key];
      if (!entry) return key;
      return entry[lang] ?? entry.en;
    },
    [lang]
  );

  const value = useMemo(
    () => ({ theme, toggleTheme, lang, setLang, dir, t }),
    [theme, toggleTheme, lang, dir, t]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
