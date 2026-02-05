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
  const email = "hello@leshannangeya.com";

  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    "Systems and data project"
  )}&body=${encodeURIComponent(
    `Context:
What are you building or fixing?

Goal:
What outcome matters, and how will we measure it?

Timeline:
When do you need progress?

Constraints:
Data, compliance, team, tools, budget?

Links:
Please include relevant docs/screenshots/repos`
  )}`;

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
              I work with founders and teams who need clarity in complex systems.
              If you are designing a data platform, improving system architecture,
              or fixing decision pipelines that aren’t scaling — let’s talk.
            </p>

            <p className="mt-3 max-w-2xl text-zinc-400">
              Clear problem framing. Reliable execution. Measurable outcomes.
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
          {/* Left card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <h2 className="text-base font-semibold">Direct contact</h2>

            <p className="mt-2 text-sm text-zinc-300">
              Email is the best way to start. Include context, goals, timeline,
              and constraints to speed up alignment.
            </p>

            <div className="mt-6 space-y-4">
              <Row label="Email" value={email} href={`mailto:${email}`} />
              <Row label="Location" value="Boston, Massachusetts" />
              <Row label="Mode" value="Remote friendly" />
              <Row label="Availability" value="By appointment" />
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-5">
              <div className="text-xs uppercase tracking-wide text-zinc-500">
                What to include
              </div>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>A clear one paragraph problem summary</li>
                <li>What you’ve already tried or ruled out</li>
                <li>Your target outcome and timeline</li>
                <li>Relevant constraints or regulatory needs</li>
                <li>Any supporting links or screenshots</li>
              </ul>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <h2 className="text-base font-semibold">Professional links</h2>

            <p className="mt-2 text-sm text-zinc-300">
              These are key references for my work and experience.
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

              <Row
                label="Resume"
                value="Available on request"
              />
            </div>

            <div className="mt-6">
              <a
                href={mailto}
                className="inline-block rounded-xl bg-white px-4 py-2 text-sm font-medium text-black no-underline hover:opacity-90"
              >
                Start a conversation
              </a>

              <p className="mt-3 text-xs text-zinc-500">
                Emails that include goals and constraints get faster responses.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-zinc-500">
          I respond faster when the message includes context, goals, timeline, and constraints.
        </div>
      </div>
    </main>
  );
}
