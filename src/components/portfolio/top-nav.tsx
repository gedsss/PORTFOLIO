"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { sections, type SectionId } from "@/lib/portfolio-data";

export function TopNav({
  active,
  onNavigate,
}: {
  active: SectionId;
  onNavigate: (section: SectionId) => void;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-0 z-20 flex justify-center px-6 py-5 sm:justify-end sm:px-10"
    >
      <nav className="flex items-center gap-1 rounded-full border border-foreground/15 bg-black/40 p-1.5 backdrop-blur-md">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onNavigate(section.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5 lg:text-base",
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
              <span className="relative z-10">{section.label}</span>
            </button>
          );
        })}
      </nav>
    </motion.header>
  );
}
