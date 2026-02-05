// app/contact/page.tsx

const Row = ({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) => {
  const isExternal = href?.startsWith("http");

  const content = href ? (
    <a
      href={href}
      className="text-white no-underline underline-offset-4 hover:underline"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {value}
    </a>
  ) : (
    <span className="text-white">{value}</span>
  );

  return (
    <div className="flex flex-col gap-1 border-b border-zinc-800 pb-4">
      <div className="text-xs uppercase tracking-wide text-zinc-500">{label}</div>
      <div className="text-sm">{content}</div>
    </div>
  );
};

export default function ContactPage() {
  const email = "hello@leshannangeya.com";

  const subject = encodeURIComponent("Project discussion");
  const body = encodeURIComponent(
    [
      "Context:",
      "",
      "What you are building:",
      "",
      "Decision needed:",
      "",
      "Timeline:",
      "",
      "Constraints:",
      "",
      "Links (optional):",
      "",
    ].join("\n")
  );

  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-400">Contact</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let us build something durable
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-300">
              If you want a system that ships clean, scales, and produces decision ready data,
              reach out. I help teams design architecture, data models, and analytics pipelines
              that reduce chaos and improve outcomes.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "System design",
                "Data modeling",
                "Analytics engineering",
                "Dashboards and KPIs",
                "Automation",
              ].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-200"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>

          <a
            href="/"
            className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-white no-underline hover:border-zinc-500"
          >
            Home
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* Left card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <h2 className="text-base font-semibold">Direct</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Email works best. Share the goal, the decision you need, and what success looks like.
              I respond faster when the request is specific.
            </p>

            <div className="mt-6 space-y-4">
              <Row label="Email" value={email} href={mailto} />
              <Row label="Base" value="Boston, Massachusetts" />
              <Row label="Availability" value="By appointment" />
              <Row label="Best for" value="Architecture reviews, analytics design, product systems" />
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-5">
              <div className="text-xs uppercase tracking-wide text-zinc-500">
                What to include
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>Your context in one paragraph</li>
                <li>The decision you need to make</li>
                <li>The data you have now and what is missing</li>
                <li>Your timeline and success metrics</li>
                <li>Constraints such as tools, budget, access, team</li>
              </ul>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <h2 className="text-base font-semibold">Links</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Here are the places where my work lives. If you want one link, start with GitHub.
            </p>

            <div className="mt-6 space-y-4">
              <Row
                label="GitHub"
                value="github.com/leshannangeya"
                href="https://github.com/leshannangeya"
              />
              <Row
                label="Portfolio"
                value="leshannangeya.com"
                href="https://leshannangeya.com"
              />
              <Row
                label="Email"
                value={email}
                href={mailto}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={mailto}
                className="inline-block rounded-xl bg-white px-4 py-2 text-sm font-medium text-black no-underline hover:opacity-90"
              >
                Email me
              </a>

              <a
                href="/systems"
                className="inline-block rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-white no-underline hover:border-zinc-500"
              >
                View case studies
              </a>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              If you are contacting me about a role, include the job link and what you want me to focus on.
            </p>
          </div>
        </div>

        <div className="mt-10 text-sm text-zinc-500">
          Clear inputs create clear outputs. Send context, target outcome, and constraints.
        </div>
      </div>
    </main>
  );
}
