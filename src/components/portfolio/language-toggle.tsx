"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";

import { cn } from "@/lib/utils";
import { locales, type Locale } from "@/lib/portfolio-data";
import { useLanguage } from "@/components/portfolio/language-provider";

const LABEL: Record<Locale, { short: string; full: string }> = {
  en: { short: "EN", full: "English" },
  pt: { short: "PT", full: "Português" },
};

/**
 * PT / EN switch. Flips the active locale (persisted via <LanguageProvider>),
 * which re-renders every localized string on the page.
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.ui.languageLabel}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-foreground/15 bg-black/40 px-1.5 py-1 backdrop-blur-md",
        className,
      )}
    >
      <Languages className="ml-0.5 size-3.5 text-foreground/55 sm:size-4" aria-hidden />
      {locales.map((code) => {
        const isActive = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={isActive}
            title={LABEL[code].full}
            className={cn(
              "relative rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition-colors sm:text-xs",
              isActive
                ? "text-background"
                : "text-foreground/65 hover:text-foreground",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-foreground"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{LABEL[code].short}</span>
          </button>
        );
      })}
    </div>
  );
}
