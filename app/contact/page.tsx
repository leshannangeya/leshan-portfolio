const Row = ({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) => {
  const content = href ? (
    <a
      href={href}
      className="text-white no-underline underline-offset-4 hover:underline"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {value}
    </a>
  ) : (
    <span className="text-white">{value}</span>
  );

  return (
    <div className="flex flex-col gap-1 border-b border-zinc-800 pb-4">
      <div className="text-xs uppercase tracking-wide text-zinc-500">
        {label}
      </div>
      <div className="text-sm">{content}</div>
    </div>
  );
};

const SERVICE_TAGS = [
  "System design and architecture",
  "Data platforms and pipelines",
  "Analytics engineering and BI",
  "Product strategy for data products",
  "Dashboards and decision systems",
];

export default function ContactPage() {
  const email = "hello@leshannangeya.com";
  const linkedin = "https://www.linkedin.com/in/leshannangeya/";
  const github = "https://github.com/leshannangeya";

  const mailto = `mailto:${email}?subject=Project%20discussion&body=Context%3A%0A%0AGoal%3A%0A%0AScope%3A%0A%0ATimeline%3A%0A%0AConstraints%3A%0A%0ALinks%20or%20docs%3A%0A`;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-400">Contact</p>

            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let us build something durable
            </h1>

            <p className="mt-4 max-w-2xl text-zinc-300">
              I help teams turn messy data and unclear decisions into systems that ship, scale, and stay reliable.
              If you want clarity, execution, and measurable outcomes, reach out.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {SERVICE_TAGS.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={mailto}
                className="inline-block rounded-xl bg-white px-4 py-2 text-sm font-medium text-black no-underline hover:opacity-90"
              >
                Email me
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-white no-underline hover:border-zinc-500"
              >
                LinkedIn
              </a>

              <a
                href="/systems"
                className="inline-block rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-white no-underline hover:border-zinc-500"
              >
                View case studies
              </a>
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              Faster replies come from clear context, a target outcome, and constraints.
            </p>
          </div>

          <a
            href="/"
            className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-white no-underline hover:border-zinc-500"
          >
            Home
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <h2 className="text-base font-semibold">Direct</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Use email for serious conversations. Two minutes of detail saves two weeks of confusion.
            </p>

            <div className="mt-6 space-y-4">
              <Row label="Email" value={email} href={`mailto:${email}`} />
              <Row label="Location" value="Boston, Massachusetts" />
              <Row label="Availability" value="By appointment" />
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-5">
              <div className="text-xs uppercase tracking-wide text-zinc-500">
                What to include
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>What you are trying to achieve</li>
                <li>What data you have today and where it lives</li>
                <li>Timeline and decision deadline</li>
                <li>Constraints: budget, tools, access, compliance</li>
                <li>What success looks like in one metric</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <h2 className="text-base font-semibold">Links</h2>
            <p className="mt-2 text-sm text-zinc-300">
              One source of truth. Clean links. No placeholders.
            </p>

            <div className="mt-6 space-y-4">
              <Row label="GitHub" value="github.com/leshannangeya" href={github} />
              <Row label="LinkedIn" value="linkedin.com/in/leshannangeya" href={linkedin} />
              <Row label="Resume" value="Add resume PDF when ready" />
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-5">
              <div className="text-xs uppercase tracking-wide text-zinc-500">
                Typical engagements
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>Architecture review and system blueprint</li>
                <li>Data model and pipeline rebuild</li>
                <li>Dashboard rebuild for decision velocity</li>
                <li>Analytics product scope and roadmap</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-zinc-500">
          Serious work is simple: define the decision, build the data path, ship the system, measure the impact.
        </div>
      </div>
    </main>
  );
}
