const Pill = ({ text }: { text: string }) => (
  <span className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-200">
    {text}
  </span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
    {children}
  </h2>
);

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-400">Systems</p>

            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              System architecture case studies
            </h1>

            <p className="mt-4 max-w-2xl text-zinc-300">
              Each case study is structured as problem, decisions, system design, data model, and success metrics.
              I focus on clarity, resilience, and real world constraints.
            </p>
          </div>

          <a
            href="/"
            className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-white no-underline hover:border-zinc-500"
          >
            Home
          </a>
        </div>

        <div className="mt-10 grid gap-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">
                  Cash intelligence platform for small and medium enterprises
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">
                  A system that converts raw mobile money transactions into daily cash position, inflow and outflow trends,
                  and business health signals. Designed for high volume businesses first, with a path toward risk and anomaly detection.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Pill text="System Design" />
                <Pill text="Data Modeling" />
                <Pill text="APIs" />
                <Pill text="Analytics" />
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <SectionTitle>Problem</SectionTitle>
                <p className="text-sm leading-relaxed text-zinc-300">
                  Business owners rely on spreadsheets and manual summaries. They cannot see today&apos;s net cash,
                  what is driving movement, or early warning patterns. Decisions happen late, based on incomplete data.
                </p>
              </div>

              <div className="space-y-3">
                <SectionTitle>Users and jobs to be done</SectionTitle>
                <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  <li>Owner needs daily net cash and trend direction in seconds</li>
                  <li>Manager needs categories and top drivers of inflows and outflows</li>
                  <li>Finance team needs clean exports and consistent data definitions</li>
                  <li>Future risk team needs anomaly ready features and audit trails</li>
                </ul>
              </div>

              <div className="space-y-3">
                <SectionTitle>Architecture overview</SectionTitle>
                <ol className="list-decimal space-y-2 pl-5 text-sm text-zinc-300">
                  <li>Ingestion service accepts statements or API feeds</li>
                  <li>Normalization layer standardizes sender, receiver, amounts, timestamps</li>
                  <li>Core ledger table stores immutable transactions</li>
                  <li>Daily aggregates compute cash position and key metrics</li>
                  <li>Insights layer produces categories, comparisons, and flags</li>
                  <li>API serves dashboard and exports with role based access</li>
                </ol>
              </div>

              <div className="space-y-3">
                <SectionTitle>Data model</SectionTitle>
                <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  <li><span className="text-white">accounts</span> stores business entities and settings</li>
                  <li><span className="text-white">transactions</span> immutable event ledger</li>
                  <li><span className="text-white">counterparties</span> normalized people and businesses</li>
                  <li><span className="text-white">categories</span> mapping rules with override support</li>
                  <li><span className="text-white">daily_metrics</span> net cash, inflows, outflows, balances</li>
                  <li><span className="text-white">audit_log</span> traceability for edits and model updates</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-800 bg-black p-5">
                <SectionTitle>Key decisions</SectionTitle>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  <li>Ledger is append only to preserve truth</li>
                  <li>Derived tables are rebuildable from source</li>
                  <li>Category rules are explicit and overridable</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-black p-5">
                <SectionTitle>Risks and controls</SectionTitle>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  <li>Duplication handled by idempotency keys</li>
                  <li>PII protected through minimal storage</li>
                  <li>Audit logs support compliance and debugging</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-black p-5">
                <SectionTitle>Success metrics</SectionTitle>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  <li>Time to insight under 10 seconds</li>
                  <li>Daily reconciliation accuracy above 99 percent</li>
                  <li>Month end reporting time reduced by 50 percent</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-zinc-800 bg-black p-5">
              <SectionTitle>Next build steps</SectionTitle>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-300">
                <li>Add a simple architecture diagram image</li>
                <li>Create sample data and show one dashboard screenshot</li>
                <li>Publish a short technical write up for trade offs and constraints</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-zinc-500">
          More case studies coming. Each one will include diagram, schema, and measurable outcomes.
        </div>
      </div>
    </main>
  );
}
