"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

import {
  education,
  experience,
  practices,
  profile,
  skillGroups,
} from "@/lib/portfolio-data";
import { SectionShell, rise, stagger } from "@/components/portfolio/section-shell";
import { GitHubIcon, LinkedInIcon } from "@/components/portfolio/brand-icons";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/65 lg:text-xs">
      {children}
    </h3>
  );
}

export function SkillsSection({ onBack }: { onBack: () => void }) {
  return (
    <SectionShell onBack={onBack}>
      <motion.div variants={stagger} initial="hidden" animate="visible" className="w-full">
        <motion.div variants={rise} className="mb-8 lg:mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
            Skills &amp; Information
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/85 sm:text-lg lg:mt-4 lg:text-xl">
            {profile.summary}
          </p>
        </motion.div>

        <div className="grid gap-x-10 gap-y-8 lg:grid-cols-12 lg:gap-x-12">
          {/* Experience + education */}
          <motion.div variants={rise} className="lg:col-span-7">
            <Heading>Experience</Heading>
            <ul className="space-y-4">
              {experience.map((job) => (
                <li
                  key={job.company}
                  className="rounded-xl border border-foreground/15 bg-foreground/[0.05] p-4 lg:p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <p className="text-base font-semibold text-foreground lg:text-lg">
                      {job.role}
                      <span className="font-normal text-foreground/70"> · {job.company}</span>
                    </p>
                    {job.period && (
                      <span className="rounded-full border border-foreground/20 px-2.5 py-0.5 text-[12px] font-medium text-foreground/75 lg:text-[13px]">
                        {job.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80 lg:text-base">
                    {job.summary}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-6 lg:mt-8">
              <Heading>Education</Heading>
              {education.map((school) => (
                <p key={school.school} className="text-sm text-foreground/85 lg:text-base">
                  <span className="font-medium text-foreground">{school.degree}</span>
                  {" · "}
                  {school.school}
                  <span className="text-foreground/65"> · {school.period}</span>
                </p>
              ))}
            </div>
          </motion.div>

          {/* Stack + practices + languages + contact */}
          <motion.div variants={rise} className="lg:col-span-5">
            <Heading>Stack</Heading>
            <dl className="space-y-3">
              {skillGroups.map((group) => (
                <div key={group.label} className="grid grid-cols-[7rem_1fr] gap-x-3 lg:grid-cols-[9rem_1fr]">
                  <dt className="pt-0.5 text-[11px] font-semibold uppercase tracking-wider text-foreground/60 lg:text-xs">
                    {group.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-foreground/90 lg:text-base">
                    {group.items.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-xs leading-relaxed text-foreground/70 lg:text-sm">
              {practices.join("  ·  ")}
            </p>

            <div className="mt-6 lg:mt-8">
              <Heading>Languages</Heading>
              <p className="text-sm text-foreground/85 lg:text-base">
                {profile.languages
                  .map((lang) => `${lang.name} — ${lang.level}`)
                  .join("   ·   ")}
              </p>
            </div>

            <div className="mt-6 lg:mt-8">
              <Heading>Contact</Heading>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-foreground/85 lg:text-base">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <Mail className="size-[18px] lg:size-5" />
                  {profile.email}
                </a>
                <span className="inline-flex items-center gap-1.5 text-foreground/70">
                  <MapPin className="size-[18px] lg:size-5" />
                  {profile.location}
                </span>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <GitHubIcon className="size-[18px] lg:size-5" />
                  GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <LinkedInIcon className="size-[18px] lg:size-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
