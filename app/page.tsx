// app/page.tsx
import Link from "next/link";

const Chip = ({ label }: { label: string }) => (
  <span className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-200">
    {label}
  </span>
);

const Card = ({
  title,
  body,
}: {
  title: string;
  body: string;
}) => (
  <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
    <h3 className="text-base font-semibold">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-zinc-300">{body}</p>
  </div>
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-zinc-900 bg-gradient-to-b from-zinc-950/60 to-black p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Leshan Nang&apos;eya
          </h1>

          <p className="mt-3 text-base text-zinc-300 sm:text-lg">
            Business Analyst | Analytics and Systems Design
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-7 text-zinc-300">
            I build data driven decision systems that turn complex business problems into clear insights,
            reliable workflows, and measurable outcomes.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-400">
            Focused on strategy and growth analytics, SQL and Python data platforms, and systems that support real
            operational decisions.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <Chip label="Strategy and Growth Analytics" />
            <Chip label="SQL and Data Modeling" />
            <Chip label="Python and Automation" />
            <Chip label="Business Intelligence" />
            <Chip label="Systems and Verification Design" />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/systems"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black no-underline hover:opacity-90"
            >
              View Systems
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-800 px-5 py-2.5 text-sm font-medium text-white no-underline hover:border-zinc-500"
            >
              Contact
            </Link>
          </div>

          <div className="mt-10 border-t border-zinc-900 pt-8">
            <h2 className="text-lg font-semibold">What I work on</h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <Card
                title="Analytics and Decision Systems"
                body="Designing KPI frameworks, SQL models, and dashboards that connect data directly to business decisions and performance tracking."
              />
              <Card
                title="Data Platforms and Automation"
                body="Building reliable data pipelines and Python based workflows that reduce manual effort and improve data quality."
              />
              <Card
                title="Systems and Verification Infrastructure"
                body="Designing systems with validation, controls, and auditability to support scalable and trustworthy operations."
              />
            </div>

            <p className="mt-10 text-sm text-zinc-500">
              Clear problems. Practical execution. Measurable outcomes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
