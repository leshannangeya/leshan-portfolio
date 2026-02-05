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

export default function ContactPage() {
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
              If you need product thinking, system design, data platforms, or analytics that supports real decisions,
              reach out. Clear problem statements. Practical execution. Measurable outcomes.
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
              Use email for serious conversations. Add a short context and what success looks like.
            </p>

            <div className="mt-6 space-y-4">
              <Row label="Email" value="hello@leshan.com" />
              <Row label="Location" value="Boston, Massachusetts" />
              <Row label="Availability" value="By appointment" />
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-5">
              <div className="text-xs uppercase tracking-wide text-zinc-500">
                What to include
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>Your problem in one paragraph</li>
                <li>What you have tried so far</li>
                <li>Target outcome and timeline</li>
                <li>Any constraints you already know</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <h2 className="text-base font-semibold">Links</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Add your real links when ready. Keep it simple and consistent.
            </p>

            <div className="mt-6 space-y-4">
              <Row
                label="GitHub"
                value="github.com/leshannangeya"
                href="https://github.com/leshannangeya"
              />
              <Row label="LinkedIn" value="Add your LinkedIn profile link" href="#" />
              <Row label="Resume" value="Add resume PDF later" href="#" />
            </div>

            <div className="mt-6">
              <a
                href="mailto:hello@leshan.com?subject=Project%20discussion&body=Context%3A%0A%0AGoal%3A%0A%0ATimeline%3A%0A%0AConstraints%3A%0A"
                className="inline-block rounded-xl bg-white px-4 py-2 text-sm font-medium text-black no-underline hover:opacity-90"
              >
                Email me
              </a>

              <p className="mt-3 text-xs text-zinc-500">
                Update the email address later if you choose a different inbox.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-zinc-500">
          I respond faster when the message includes context, goals, and constraints.
        </div>
      </div>
    </main>
  );
}
