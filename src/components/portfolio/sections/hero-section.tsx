"use client";

import { motion } from "framer-motion";
import { Award, CalendarDays } from "lucide-react";

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
        className="flex flex-col items-center gap-5 text-center sm:gap-6 lg:gap-8"
      >
        <motion.div variants={rise}>
          <Badge
            variant="secondary"
            className="border-foreground/20 bg-foreground/10 px-4 py-1 text-xs text-foreground backdrop-blur-sm transition-colors hover:bg-foreground/20 lg:text-sm"
          >
            {profile.focus}
          </Badge>
        </motion.div>

        <motion.h1
          variants={rise}
          className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground [text-shadow:0_2px_30px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={rise}
          className="text-xl font-medium text-foreground [text-shadow:0_1px_16px_rgba(0,0,0,0.6)] sm:text-2xl lg:text-3xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={rise}
          className="max-w-2xl text-base text-foreground/80 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)] sm:text-lg lg:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={rise} className="flex flex-col items-center gap-2.5 pt-1 sm:gap-3 sm:pt-2">
          <div className="flex w-full flex-col items-center gap-2.5 sm:w-auto sm:flex-row sm:gap-4">
            <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="lg"
                onClick={() => onNavigate("skills")}
                className="h-auto w-full bg-foreground px-8 py-4 text-base font-semibold text-background shadow-2xl transition-all duration-300 hover:bg-foreground/90 sm:w-auto sm:py-5 lg:px-10 lg:py-6 lg:text-lg"
              >
                Skills &amp; Information
              </Button>
            </motion.div>

            <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("projects")}
                className="h-auto w-full border-foreground/30 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-foreground/50 hover:bg-foreground/10 sm:w-auto sm:py-5 lg:px-10 lg:py-6 lg:text-lg"
              >
                Projects
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => onNavigate("events")}
                className="h-auto gap-1.5 rounded-full border border-foreground/15 px-4 py-3 text-[13px] font-medium text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-foreground/35 hover:bg-foreground/10 hover:text-foreground sm:gap-2 sm:px-7 sm:py-3.5 sm:text-sm lg:text-base"
              >
                <CalendarDays className="size-4 sm:size-5" />
                Events
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => onNavigate("certificates")}
                className="h-auto gap-1.5 rounded-full border border-foreground/15 px-4 py-3 text-[13px] font-medium text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:border-foreground/35 hover:bg-foreground/10 hover:text-foreground sm:gap-2 sm:px-7 sm:py-3.5 sm:text-sm lg:text-base"
              >
                <Award className="size-4 sm:size-5" />
                Certificates
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
