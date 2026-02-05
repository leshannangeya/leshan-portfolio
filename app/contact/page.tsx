// app/contact/page.tsx
import Link from "next/link";

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
      <div className="text-xs uppercase tracking-wide text-zinc-500">{label}</div>
      <div className="text-sm">{content}</div>
    </div>
  );
};

export default function ContactPage() {
  const email = "hello@leshannangeya.com";

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
              If you need analytics, system design, or data workflows that support real decisions, reach out.
              Clear scope. Practical execution. Measurable outcomes.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-medium text-white no-underline hover:border-zinc-500"
          >
            Home
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <h2 className="text-base font-semibold">Direct</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Email works best. Include context, what success looks like, and when you need it.
            </p>

            <div className="mt-6 space-y-4">
              <Row label="Email" value={email} />
              <Row label="Location" value="Greater Boston" />
              <Row label="Availability" value="By appointment" />
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-5">
              <div className="text-xs uppercase tracking-wide text-zinc-500">What to include</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>Your problem in one paragraph</li>
                <li>Who the users are and what decisions they make</li>
                <li>The data you already have or can access</li>
                <li>Your timeline and constraints</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <h2 className="text-base font-semibold">Links</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Keep your public footprint consistent across GitHub, LinkedIn, and the site.
            </p>

            <div className="mt-6 space-y-4">
              <Row
                label="GitHub"
                value="github.com/leshannangeya"
                href="https://github.com/leshannangeya"
              />
              <Row
                label="LinkedIn"
                value="linkedin.com/in/leshannangeya"
                href="https://www.linkedin.com/in/leshannangeya/"
              />
            </div>

            <div className="mt-6">
              <a
                href={`mailto:${email}?subject=Project%20discussion&body=Context%3A%0A%0AGoal%3A%0A%0ATimeline%3A%0A%0AConstraints%3A%0A`}
                className="inline-block rounded-xl bg-white px-4 py-2 text-sm font-medium text-black no-underline hover:opacity-90"
              >
                Email me
              </a>

              <p className="mt-3 text-xs text-zinc-500">
                I respond faster when the message includes context, goals, and constraints.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-zinc-500">
          Clear scope. Clean data. Decisions that hold up under pressure.
        </div>
      </div>
    </main>
  );
}
