const Tag = ({ label }: { label: string }) => (
  <span className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-200">
    {label}
  </span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
    {children}
  </h3>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="text-sm text-zinc-300">{children}</li>
);

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-400">Systems</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Architecture case studies
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Real world systems written like decision memos: problem, constraints, choices, data model, APIs, analytics,
              and measurable outcomes.
            </p>
          </div>

          <a
            href="/"
            className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-white no-underline hover:border-zinc-500"
          >
            Home
          </a>
        </div>

        <div className="mt-10 rounded-3xl border border-zinc-900 bg-zinc-950/40 p-8">
          <h2 className="text-2xl font-semibold">Cash Intelligence for Mobile Money SMEs</h2>
          <p className="mt-3 max-w-3xl text-zinc-300">
            Transforms raw mobile money statements into daily cash position, inflow and outflow drivers, and anomaly ready
            features for SME decision making.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Tag label="System Design" />
            <Tag label="Data Modeling" />
            <Tag label="APIs" />
            <Tag label="Analytics" />
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <SectionTitle>Problem</SectionTitle>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                SMEs run on screenshots, spreadsheets, and late night guesswork. Without a daily cash position and
                category level drivers, decisions lag and risk hides in plain sight.
              </p>

              <div className="mt-8">
                <SectionTitle>Architecture overview</SectionTitle>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-300">
                  <li>Ingestion service accepts statements and API feeds</li>
                  <li>Normalization layer standardizes sender, receiver, amount, and timestamps</li>
                  <li>Immutable transaction ledger stores events and preserves history</li>
                  <li>Enrichment layer generates categories, counterparties, and derived features</li>
                  <li>Analytics layer computes daily cash position, trends, and drivers</li>
                  <li>Exports and APIs serve dashboards and downstream tools</li>
                </ol>
              </div>

              <div className="mt-8">
                <SectionTitle>Key decisions</SectionTitle>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <Bullet>Event ledger first to keep auditability and replay</Bullet>
                  <Bullet>Deterministic parsing rules before ML to ensure trust</Bullet>
                  <Bullet>Feature store style tables for anomaly readiness</Bullet>
                  <Bullet>Clear definitions for inflow, outflow, and net cash to prevent metric drift</Bullet>
                </ul>
              </div>
            </div>

            <div>
              <SectionTitle>Users and jobs to be done</SectionTitle>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <Bullet>Owners need today’s cash position in seconds</Bullet>
                <Bullet>Managers need drivers by category, counterparty, and channel</Bullet>
                <Bullet>Finance needs exports with consistent definitions and auditability</Bullet>
                <Bullet>Risk needs anomaly ready features and immutable history</Bullet>
              </ul>

              <div className="mt-8">
                <SectionTitle>Data model</SectionTitle>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <Bullet><span className="text-white">accounts</span> stores business entities and settings</Bullet>
                  <Bullet><span className="text-white">transactions</span> immutable event ledger of money movement</Bullet>
                  <Bullet><span className="text-white">counterparties</span> normalized people and businesses</Bullet>
                  <Bullet><span className="text-white">categories</span> taxonomy for reporting consistency</Bullet>
                  <Bullet><span className="text-white">daily_cash</span> precomputed cash position and comparisons</Bullet>
                  <Bullet><span className="text-white">features</span> anomaly ready metrics by day, merchant, and channel</Bullet>
                </ul>
              </div>

              <div className="mt-8">
                <SectionTitle>Success metrics</SectionTitle>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <Bullet>Time to cash position: under 10 seconds</Bullet>
                  <Bullet>Categorization coverage: 85 percent plus</Bullet>
                  <Bullet>Reconciliation accuracy: 99 percent plus</Bullet>
                  <Bullet>Weekly active usage: 3 sessions per user minimum</Bullet>
                  <Bullet>Flagged anomalies reviewed: tracked and measurable</Bullet>
                </ul>
              </div>

              <div className="mt-10 rounded-2xl border border-zinc-900 bg-black p-6">
                <p className="text-sm font-semibold text-white">What this shows recruiters</p>
                <p className="mt-2 text-sm text-zinc-300">
                  You get product clarity, system thinking, and analytics execution in one place. I can take a vague
                  business problem and turn it into a measurable system.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-zinc-500">
          More case studies will land here as I publish CPT and OPT ready work.
        </div>
      </div>
    </main>
  );
}
