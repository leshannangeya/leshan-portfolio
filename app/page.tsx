export default function HomePage() {
  const Chip = ({ label }: { label: string }) => (
    <span className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-200">
      {label}
    </span>
  );

  const PrimaryButton = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black no-underline hover:opacity-90"
    >
      {label}
    </a>
  );

  const SecondaryButton = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-zinc-800 px-5 py-3 text-sm font-semibold text-white no-underline hover:border-zinc-500"
    >
      {label}
    </a>
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm text-zinc-400">Boston | MBAN Candidate | Business Analyst</p>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
          Leshan Nang&apos;eya
        </h1>

        <p className="mt-4 text-lg text-zinc-300">
          Business Analyst | Systems and Data Platforms
        </p>

        <p className="mt-6 max-w-2xl text-zinc-300">
          I turn messy operations into decision grade systems. I design data pipelines, models, and dashboards
          that expose what is happening, why it is happening, and what to do next.
        </p>

        <p className="mt-4 text-sm text-zinc-400">
          Clear metrics. Tight definitions. Durable execution.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          <Chip label="System Design" />
          <Chip label="Data Modeling" />
          <Chip label="SQL" />
          <Chip label="Python" />
          <Chip label="Analytics Engineering" />
          <Chip label="Business Intelligence" />
          <Chip label="Automation" />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <PrimaryButton href="/systems" label="View Architecture Case Studies" />
          <SecondaryButton href="/contact" label="Let’s Talk" />
        </div>

        <div className="mt-14 rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">CPT and OPT readiness</p>
              <p className="mt-1 text-sm text-zinc-300">
                Currently building case studies for CPT and OPT roles starting May. Expect system write ups, data models, and measurable outcomes.
              </p>
            </div>

            <a
              href="/systems"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-white no-underline hover:border-zinc-500"
            >
              See what I build
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
