"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  content,
  defaultLocale,
  locales,
  type Locale,
  type LocalizedContent,
} from "@/lib/portfolio-data";

const STORAGE_KEY = "portfolio:lang";

/* -------------------------------------------------------------------------- */
/*  Tiny external store so the locale survives navigation and re-renders      */
/*  without a hydration mismatch (server always starts at `defaultLocale`).   */
/* -------------------------------------------------------------------------- */

const listeners = new Set<() => void>();
let current: Locale | null = null;

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

function resolveInitial(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // localStorage blocked — fall through to the browser language.
  }
  if (navigator.language?.toLowerCase().startsWith("pt")) return "pt";
  return defaultLocale;
}

function getSnapshot(): Locale {
  if (current === null) current = resolveInitial();
  return current;
}

function getServerSnapshot(): Locale {
  return defaultLocale;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function writeLocale(next: Locale) {
  current = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Ignore write failures (private mode, storage disabled, etc.).
  }
  for (const listener of listeners) listener();
}

/* -------------------------------------------------------------------------- */

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Localized content tree for the active locale. */
  t: LocalizedContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = useCallback((next: Locale) => writeLocale(next), []);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: content[locale] }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within <LanguageProvider>");
  }
  return ctx;
}
