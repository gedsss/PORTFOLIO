"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import type { SectionId } from "@/lib/portfolio-data";
import { LanguageProvider } from "@/components/portfolio/language-provider";
import { MetalBackground } from "@/components/portfolio/metal-background";
import { TopNav } from "@/components/portfolio/top-nav";
import { HeroSection } from "@/components/portfolio/sections/hero-section";
import { SkillsSection } from "@/components/portfolio/sections/skills-section";
import { ProjectsSection } from "@/components/portfolio/sections/projects-section";
import { EventsSection } from "@/components/portfolio/sections/events-section";
import { CertificatesSection } from "@/components/portfolio/sections/certificates-section";

export function Portfolio() {
  const [section, setSection] = useState<SectionId>("hero");

  // Esc always returns to the hero.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSection("hero");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <LanguageProvider>
      <main className="dark relative h-[100dvh] w-full overflow-hidden bg-black text-foreground">
        <MetalBackground />
        <TopNav active={section} onNavigate={setSection} />

        <div className="relative z-10 h-full">
          <AnimatePresence initial={false}>
            {section === "hero" && (
              <HeroSection key="hero" onNavigate={setSection} />
            )}
            {section === "skills" && (
              <SkillsSection key="skills" onBack={() => setSection("hero")} />
            )}
            {section === "projects" && (
              <ProjectsSection key="projects" onBack={() => setSection("hero")} />
            )}
            {section === "events" && (
              <EventsSection key="events" onBack={() => setSection("hero")} />
            )}
            {section === "certificates" && (
              <CertificatesSection
                key="certificates"
                onBack={() => setSection("hero")}
              />
            )}
          </AnimatePresence>
        </div>
      </main>
    </LanguageProvider>
  );
}
