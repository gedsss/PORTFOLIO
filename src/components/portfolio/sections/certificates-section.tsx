"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, FileText, Image as ImageIcon } from "lucide-react";

import { type CertificateGroup } from "@/lib/portfolio-data";
import { SectionShell, rise, stagger } from "@/components/portfolio/section-shell";
import { useLanguage } from "@/components/portfolio/language-provider";

const EASE = [0.22, 1, 0.36, 1] as const;

export function CertificatesSection({ onBack }: { onBack: () => void }) {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected =
    t.certificates.groups.find((group) => group.id === selectedId) ?? null;

  return (
    <SectionShell onBack={onBack}>
      <AnimatePresence mode="wait" initial={false}>
        {selected ? (
          <GroupDetail
            key={selected.id}
            group={selected}
            onBackToList={() => setSelectedId(null)}
          />
        ) : (
          <GroupList key="list" onSelect={setSelectedId} />
        )}
      </AnimatePresence>
    </SectionShell>
  );
}

function GroupList({ onSelect }: { onSelect: (id: string) => void }) {
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
          {t.certificates.heading}
        </motion.h2>
        <motion.p
          variants={rise}
          className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg lg:mt-4 lg:text-xl"
        >
          {t.certificates.intro}
        </motion.p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:mt-10 lg:gap-6">
          {t.certificates.groups.map((group) => {
            const count: number = group.certificates.length;
            return (
              <motion.button
                key={group.id}
                type="button"
                variants={rise}
                onClick={() => onSelect(group.id)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col rounded-2xl border border-foreground/15 bg-foreground/[0.05] p-6 text-left transition-colors hover:border-foreground/30 hover:bg-foreground/[0.08] lg:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full border border-foreground/20 px-2.5 py-0.5 text-[12px] font-medium text-foreground/75">
                    {t.ui.certificateCount(count)}
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-foreground/50 transition-colors group-hover:text-foreground" />
                </div>

                <h3 className="mt-4 text-xl font-semibold leading-snug text-foreground lg:text-2xl">
                  {group.label}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-foreground/80 lg:text-[15px]">
                  {group.blurb}
                </p>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

function GroupDetail({
  group,
  onBackToList,
}: {
  group: CertificateGroup;
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
        {t.ui.allCollections}
      </button>

      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {group.label}
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/85 lg:text-lg">
        {group.blurb}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-3">
        {group.certificates.map((certificate) => {
          const isPdf = certificate.file.toLowerCase().endsWith(".pdf");
          const Icon = isPdf ? FileText : ImageIcon;
          return (
            <motion.a
              key={certificate.file}
              href={certificate.file}
              target="_blank"
              rel="noreferrer noopener"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className="group flex flex-col justify-between gap-4 rounded-2xl border border-foreground/15 bg-foreground/[0.05] p-5 transition-colors hover:border-foreground/30 hover:bg-foreground/[0.08]"
            >
              <div className="flex items-start justify-between gap-3">
                <Icon className="size-5 shrink-0 text-foreground/55" />
                <ArrowUpRight className="size-4 shrink-0 text-foreground/45 transition-colors group-hover:text-foreground" />
              </div>
              <div>
                <h3 className="text-[13px] font-semibold leading-snug text-foreground lg:text-[15px]">
                  {certificate.title}
                </h3>
                <p className="mt-1 text-[12px] text-foreground/60 lg:text-[13px]">
                  {certificate.issuer}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}
