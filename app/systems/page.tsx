"use client";

import { useMemo, useState } from "react";
import Reveal from "../components/Reveal";

type CaseStudy = {
  title: string;
  subtitle: string;
  tags: string[];
  problem: string;
  overview: string[];
  decisions: string[];
  dataModel: string[];
  metrics: string[];
};

const ALL_TAG = "All";

const CASES: CaseStudy[] = [
  {
    title: "Cash Intelligence for Mobile Money SMEs",
    subtitle:
      "Turns mobile money statements into daily cash position, drivers, and anomaly ready features for decision making.",
    tags: ["System Design", "Data Modeling", "SQL", "Python", "Analytics", "BI"],
    problem:
      "SMEs run on screenshots and late reports. Without a daily cash position and clear drivers, decisions lag and risk hides in plain sight.",
    overview: [
      "Ingestion accepts statements and API feeds",
      "Normalization standardizes parties, amounts, and timestamps",
      "Immutable transaction ledger preserves auditability",
      "Enrichment generates categories and derived features",
      "Analytics computes daily cash, trends, and drivers",
      "Exports and APIs serve dashboards and downstream tools",
    ],
    decisions: [
      "Ledger first design for auditability and replay",
      "Deterministic parsing rules before ML to maintain trust",
      "Clear metric definitions to prevent drift",
      "Feature tables structured for anomaly detection readiness",
    ],
    dataModel: [
      "accounts stores business entities and settings",
      "transactions immutable event ledger of money movement",
      "counterparties normalized people and businesses",
      "categories reporting taxonomy with consistent definitions",
      "daily_cash precomputed cash position and comparisons",
      "features anomaly ready metrics by day merchant and channel",
    ],
    metrics: [
      "Time to cash position under 10 seconds",
      "Categorization coverage 85 percent plus",
      "Reconciliation accuracy 99 percent plus",
      "Weekly active usage 3 sessions per user minimum",
      "Flagged anomalies reviewed tracked and measurable",
    ],
  },
];

const TagPill = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-full border px-3 py-1 text-xs transition ${
      active
        ? "border-zinc-500 bg-white text-black"
        : "border-zinc-800 bg-zinc-950/40 text-zinc-200 hover:border-zinc-500"
    }`}
  >
    {label}
  </button>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
    {children}
  </h4>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
    {items.map((x) => (
      <li key={x}>{x}</li>
    ))}
  </ul>
);

const CaseCard = ({ c }: { c: CaseStudy }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{c.title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-300">
            {c.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-800 bg-black/30 px-3 py-1 text-xs text-zinc-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-white hover:border-zinc-500"
        >
          {open ? "Hide details" : "View details"}
        </button>
      </div>

      <div
        className={`grid gap-8 transition-all duration-300 ${
          open ? "mt-8 opacity-100" : "mt-0 max-h-0 overflow-hidden opacity-0"
        } md:grid-cols-2`}
      >
        <div>
          <SectionTitle>Problem</SectionTitle>
          <p className="mt-3 text-sm leading-6 text-zinc-300">{c.problem}</p>

          <div className="mt-7">
            <SectionTitle>Architecture overview</SectionTitle>
            <BulletList items={c.overview} />
          </div>

          <div className="mt-7">
            <SectionTitle>Key decisions</SectionTitle>
            <BulletList items={c.decisions} />
          </div>
        </div>

        <div>
          <SectionTitle>Data model</SectionTitle>
          <BulletList items={c.dataModel} />

          <div className="mt-7">
            <SectionTitle>Success metrics</SectionTitle>
            <BulletList items={c.metrics} />
          </div>

          <div className="mt-7 rounded-2xl border border-zinc-900 bg-black p-6">
            <p className="text-sm font-semibold text-white">
              What this shows hiring teams
            </p>
            <p className="mt-2 text-sm text-zinc-300">
              Product clarity, system thinking, and analytics execution in one place.
              I take vague business problems and convert them into measurable systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SystemsPage() {
  const [activeTag, setActiveTag] = useState<string>(ALL_TAG);

  const tags = useMemo(() => {
    const set = new Set<string>();
    CASES.forEach((c) => c.tags.forEach((t) => set.add(t)));
    return [ALL_TAG, ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    if (activeTag === ALL_TAG) return CASES;
    return CASES.filter((c) => c.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm text-zinc-400">Systems</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                Architecture case studies
              </h1>
              <p className="mt-4 max-w-2xl text-zinc-300">
                Explore systems like decision memos: problem, constraints, choices, data model,
                analytics, and measurable outcomes.
              </p>
            </div>

            <a
              href="/"
              className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-white no-underline hover:border-zinc-500"
            >
              Home
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 rounded-2xl border border-zinc-900 bg-black/30 p-5">
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <TagPill
                  key={t}
                  label={t}
                  active={t === activeTag}
                  onClick={() => setActiveTag(t)}
                />
              ))}
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Filter by tag to scan what you care about, then open details for architecture and metrics.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 space-y-6">
          {filtered.map((c) => (
            <Reveal key={c.title} delay={0.04}>
              <CaseCard c={c} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <div className="mt-10 text-sm text-zinc-500">
            More case studies will land here as I publish CPT and OPT ready work.
          </div>
        </Reveal>
      </div>
    </main>
  );
}
