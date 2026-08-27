"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile, type SectionId } from "@/lib/portfolio-data";
import { SectionShell, rise, stagger } from "@/components/portfolio/section-shell";

export function HeroSection({ onNavigate }: { onNavigate: (section: SectionId) => void }) {
  return (
    <SectionShell panel={false} className="max-w-6xl">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-7 text-center lg:gap-9"
      >
        <motion.div variants={rise}>
          <Badge
            variant="secondary"
            className="border-foreground/20 bg-foreground/10 px-4 py-1 text-sm text-foreground backdrop-blur-sm transition-colors hover:bg-foreground/20 lg:text-base"
          >
            {profile.focus}
          </Badge>
        </motion.div>

        <motion.h1
          variants={rise}
          className="text-6xl font-bold leading-[1.02] tracking-tight text-foreground [text-shadow:0_2px_30px_rgba(0,0,0,0.6)] sm:text-8xl lg:text-9xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={rise}
          className="text-2xl font-medium text-foreground [text-shadow:0_1px_16px_rgba(0,0,0,0.6)] sm:text-3xl lg:text-4xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={rise}
          className="max-w-2xl text-lg text-foreground/80 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)] sm:text-xl lg:text-2xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={rise}
          className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:gap-4"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Button
              size="lg"
              onClick={() => onNavigate("skills")}
              className="h-auto bg-foreground px-10 py-6 text-lg font-semibold text-background shadow-2xl transition-all duration-300 hover:bg-foreground/90 lg:px-12 lg:py-7 lg:text-xl"
            >
              Skills &amp; Information
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("projects")}
              className="h-auto border-foreground/30 px-10 py-6 text-lg font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-foreground/50 hover:bg-foreground/10 lg:px-12 lg:py-7 lg:text-xl"
            >
              Projects
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
