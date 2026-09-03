"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { sectionIds, type SectionId } from "@/lib/portfolio-data";
import { useLanguage } from "@/components/portfolio/language-provider";

export function TopNav({
  active,
  onNavigate,
}: {
  active: SectionId;
  onNavigate: (section: SectionId) => void;
}) {
  const { t } = useLanguage();

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-0 z-20 flex justify-center px-3 py-2.5 sm:justify-end sm:px-10 sm:py-5"
    >
      <nav className="no-scrollbar flex min-w-0 max-w-full flex-nowrap items-center gap-0.5 overflow-x-auto rounded-full border border-foreground/15 bg-black/40 p-1 backdrop-blur-md sm:gap-1 sm:p-1.5">
        {sectionIds.map((id) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onNavigate(id)}
              className={cn(
                "relative shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors sm:px-4 sm:py-1.5 sm:text-[13px] lg:text-sm",
                isActive ? "text-background" : "text-foreground/75 hover:text-foreground",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{t.nav[id]}</span>
            </button>
          );
        })}
      </nav>
    </motion.header>
  );
}
