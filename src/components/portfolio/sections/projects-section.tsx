"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/portfolio-data";
import { SectionShell, rise, stagger } from "@/components/portfolio/section-shell";

export function ProjectsSection({ onBack }: { onBack: () => void }) {
  return (
    <SectionShell onBack={onBack}>
      <motion.div variants={stagger} initial="hidden" animate="visible" className="w-full">
        <motion.h2
          variants={rise}
          className="mb-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:mb-10 lg:text-5xl xl:text-6xl"
        >
          Projects
        </motion.h2>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {projects.map((project) => {
            const hasLink = project.link && project.link !== "#";
            return (
              <motion.article
                key={project.name}
                variants={rise}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col rounded-2xl border border-foreground/15 bg-foreground/[0.05] p-6 lg:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold leading-snug text-foreground lg:text-2xl">
                    {project.name}
                  </h3>
                  {hasLink && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Open ${project.name}`}
                      className="shrink-0 rounded-full border border-foreground/25 p-1.5 text-foreground/80 transition-colors hover:border-foreground/45 hover:text-foreground"
                    >
                      <ArrowUpRight className="size-5" />
                    </a>
                  )}
                </div>

                <p className="mt-2 text-sm text-foreground/80 lg:text-base">{project.blurb}</p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((line) => (
                    <li
                      key={line}
                      className="flex gap-2 text-[13px] leading-relaxed text-foreground/85 lg:text-[15px]"
                    >
                      <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-foreground/50" />
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-foreground/20 bg-foreground/[0.06] px-2 py-0.5 font-mono text-[11px] text-foreground/80 lg:text-[13px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </SectionShell>
  );
}
