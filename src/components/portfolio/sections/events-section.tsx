"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CalendarDays, MapPin, UserCheck } from "lucide-react";

import { type EventItem } from "@/lib/portfolio-data";
import { SectionShell, rise, stagger } from "@/components/portfolio/section-shell";
import { useLanguage } from "@/components/portfolio/language-provider";

const EASE = [0.22, 1, 0.36, 1] as const;

export function EventsSection({ onBack }: { onBack: () => void }) {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = t.events.items.find((event) => event.id === selectedId) ?? null;

  return (
    <SectionShell onBack={onBack}>
      <AnimatePresence mode="wait" initial={false}>
        {selected ? (
          <EventDetail
            key={selected.id}
            event={selected}
            onBackToList={() => setSelectedId(null)}
          />
        ) : (
          <EventList key="list" onSelect={setSelectedId} />
        )}
      </AnimatePresence>
    </SectionShell>
  );
}

function EventList({ onSelect }: { onSelect: (id: string) => void }) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="w-full"
    >
      <motion.div variants={stagger} initial="hidden" animate="visible" className="w-full">
        <motion.h2
          variants={rise}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl"
        >
          {t.events.heading}
        </motion.h2>
        <motion.p
          variants={rise}
          className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg lg:mt-4 lg:text-xl"
        >
          {t.events.intro}
        </motion.p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:gap-6">
          {t.events.items.map((event) => (
            <motion.button
              key={event.id}
              type="button"
              variants={rise}
              onClick={() => onSelect(event.id)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col rounded-2xl border border-foreground/15 bg-foreground/[0.05] p-6 text-left transition-colors hover:border-foreground/30 hover:bg-foreground/[0.08] lg:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/20 px-2.5 py-0.5 text-[12px] font-medium text-foreground/75">
                  <CalendarDays className="size-3.5" />
                  {event.date}
                </span>
                <ArrowUpRight className="size-5 shrink-0 text-foreground/50 transition-colors group-hover:text-foreground" />
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-snug text-foreground lg:text-2xl">
                {event.name}
              </h3>
              <p className="mt-1 text-[13px] font-medium text-foreground/60">{event.org}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-foreground/80 lg:text-[15px]">
                {event.blurb}
              </p>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function EventDetail({
  event,
  onBackToList,
}: {
  event: EventItem;
  onBackToList: () => void;
}) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="w-full"
    >
      <button
        type="button"
        onClick={onBackToList}
        className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-[13px] font-medium text-foreground/75 transition-colors hover:border-foreground/30 hover:text-foreground lg:text-sm"
      >
        <ArrowLeft className="size-3.5 lg:size-4" />
        {t.ui.allEvents}
      </button>

      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/55 lg:text-xs">
        {event.org}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {event.name}
      </h2>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-foreground/80 lg:text-[15px]">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="size-[18px]" />
          {event.date}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-[18px]" />
          {event.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <UserCheck className="size-[18px]" />
          {event.role}
        </span>
      </div>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/85 lg:text-lg">
        {event.blurb}
      </p>

      <ul className="mt-6 space-y-2.5">
        {event.highlights.map((line) => (
          <li
            key={line}
            className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/85 lg:text-[15px]"
          >
            <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-foreground/50" />
            {line}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {event.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-foreground/20 bg-foreground/[0.06] px-2 py-0.5 font-mono text-[11px] text-foreground/80 lg:text-[13px]"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={event.link}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-[13px] font-semibold text-background transition-colors hover:bg-foreground/90 lg:text-sm"
      >
        {t.ui.readMore}
        <ArrowUpRight className="size-4" />
      </a>
    </motion.div>
  );
}
