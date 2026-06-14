import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ColorMode = "vivid" | "calm";
export type TextSize = "sm" | "md" | "lg";
export type MotionPref = "auto" | "reduce";
export type ContrastPref = "auto" | "high";
export type SimplePref = "off" | "on";

type Prefs = {
  mode: ColorMode;
  text: TextSize;
  motion: MotionPref;
  contrast: ContrastPref;
  simple: SimplePref;
};

const DEFAULTS: Prefs = {
  mode: "vivid",
  text: "sm",
  motion: "auto",
  contrast: "auto",
  simple: "off",
};

type Ctx = Prefs & {
  setMode: (m: ColorMode) => void;
  setText: (t: TextSize) => void;
  setMotion: (m: MotionPref) => void;
  setContrast: (c: ContrastPref) => void;
  setSimple: (s: SimplePref) => void;
  reset: () => void;
};

const PrefsCtx = createContext<Ctx | null>(null);

const KEY = "appda.prefs.v1";

function readSaved(): Partial<Prefs> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Partial<Prefs>) : {};
  } catch {
    return {};
  }
}

function applyToDom(p: Prefs) {
  const root = document.documentElement;
  root.setAttribute("data-color-mode", p.mode);
  root.setAttribute("data-a11y-text", p.text);
  root.setAttribute("data-a11y-motion", p.motion);
  root.setAttribute("data-a11y-contrast", p.contrast);
  root.setAttribute("data-a11y-simple", p.simple);
}

export function SitePrefsProvider({ children }: { children: ReactNode }) {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULTS);

  useEffect(() => {
    const saved = readSaved();
    const merged: Prefs = { ...DEFAULTS, ...saved };
    setPrefs(merged);
    applyToDom(merged);
  }, []);

  useEffect(() => {
    applyToDom(prefs);
    try {
      window.localStorage.setItem(KEY, JSON.stringify(prefs));
    } catch {}
  }, [prefs]);

  const ctx: Ctx = {
    ...prefs,
    setMode: (mode) => setPrefs((p) => ({ ...p, mode })),
    setText: (text) => setPrefs((p) => ({ ...p, text })),
    setMotion: (motion) => setPrefs((p) => ({ ...p, motion })),
    setContrast: (contrast) => setPrefs((p) => ({ ...p, contrast })),
    setSimple: (simple) => setPrefs((p) => ({ ...p, simple })),
    reset: () => setPrefs(DEFAULTS),
  };

  return <PrefsCtx.Provider value={ctx}>{children}</PrefsCtx.Provider>;
}

export function useSitePrefs() {
  const ctx = useContext(PrefsCtx);
  if (!ctx) throw new Error("useSitePrefs must be used within SitePrefsProvider");
  return ctx;
}
