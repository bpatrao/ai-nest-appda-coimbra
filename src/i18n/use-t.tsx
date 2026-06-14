import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type DictKey, type Lang } from "./dict";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: DictKey) => string };

const I18nCtx = createContext<Ctx | null>(null);

function readInitial(): Lang {
  if (typeof window === "undefined") return "pt";
  const saved = window.localStorage.getItem("appda.lang");
  if (saved === "pt" || saved === "en") return saved;
  const nav = window.navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("en") ? "en" : "pt";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const initial = readInitial();
    setLangState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("appda.lang", l);
    } catch {}
    document.documentElement.lang = l;
  };

  const t = (k: DictKey) => dict[lang][k] ?? dict.pt[k] ?? k;

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useT() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useT must be used within I18nProvider");
  return ctx;
}
