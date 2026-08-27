"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Wraps a section with the crossfade + drift transition used between panels.
 * Sections are absolutely positioned so they overlap and blend while
 * AnimatePresence runs exit/enter together (no `mode="wait"`).
 *
 * Non-hero sections sit on a translucent dark glass panel so the animated
 * background never competes with the text, and get a "back to start" button.
 * Vertical centering still allows silent scroll when content is taller than
 * the viewport (scrollbar hidden).
 */
export function SectionShell({
  children,
  className,
  panel = true,
  onBack,
}: {
  children: ReactNode;
  className?: string;
  /** Wrap content in the translucent glass panel (default). Hero opts out. */
  panel?: boolean;
  /** When set, renders a button that returns to the hero section. */
  onBack?: () => void;
}) {
  const reduce = useReducedMotion();

  const backButton = onBack ? (
    <button
      type="button"
      onClick={onBack}
      className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-[13px] font-medium text-foreground/75 transition-colors hover:border-foreground/30 hover:text-foreground lg:text-sm"
    >
      <ArrowLeft className="size-3.5 lg:size-4" />
      Back to start
    </button>
  ) : null;

  return (
    <motion.section
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.985 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16, scale: 1.01 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="no-scrollbar absolute inset-0 overflow-y-auto"
    >
      <div className="flex min-h-full w-full flex-col items-center justify-center px-4 py-16 sm:px-8 sm:py-24">
        {panel ? (
          <div
            className={cn(
              "w-full max-w-5xl rounded-[2rem] border border-foreground/10 bg-black/60 p-6 shadow-[0_10px_60px_-12px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-10 xl:max-w-6xl xl:p-12",
              className,
            )}
          >
            {backButton}
            {children}
          </div>
        ) : (
          <div className={cn("w-full max-w-4xl", className)}>
            {backButton}
            {children}
          </div>
        )}
      </div>
    </motion.section>
  );
}

/** Shared container/child variants for staggered content inside a section. */
export const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.12, staggerChildren: 0.08 },
  },
};

export const rise = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};
