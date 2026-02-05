export const metadata = {
  title: "Contact | Leshan Nang'eya",
  description:
    "Contact Leshan Nang'eya for product thinking, system design, and data platform architecture.",
};

const Card = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
    <div className="space-y-1">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      {subtitle ? (
        <p className="text-sm leading-6 text-zinc-400">{subtitle}</p>
      ) : null}
    </div>
    <div className="mt-6">{children}</div>
  </section>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-medium tracking-wide text-zinc-500">{children}</p>
);

const Value = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-1 text-sm font-medium text-white">{children}</p>
);

const Row = ({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) => (
  <div className="py-4">
    <Label>{label}</Label>
    <Value>
      {href ? (
        <a
          href={href}
          className="text-white underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-400"
        >
          {value}
        </a>
      ) : (
        value
      )}
    </Value>
    <div className="mt-4 h-px w-full bg-zinc-900" />
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-900 bg-black/40 px-3 py-1 text-xs text-zinc-300">
    {children}
  </span>
);

export default function ContactPage() {
  const email = "hello@leshannangeya.com";
  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    "Project inquiry"
  )}&body=${encodeURIComponent(
    "Hi Leshan,\n\nContext:\n\nProblem:\n\nWhat we tried:\n\nTarget outcome:\n\nTimeline:\n\nConstraints:\n\nBest,\n"
  )}`;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-10 flex items-start justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-zinc-400">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let us build something durable
          </h1>

          <p className="mt-5 text-base leading-7 text-zinc-300">
            I work with founders, product leaders, and teams who need clarity in
            complex systems. If you are designing a data platform, rethinking
            system architecture, or fixing decisions that are not scaling, this
            is the right place to start.
          </p>

          <p className="mt-4 text-base leading-7 text-zinc-300">
            I focus on clear problem framing, practical system design, and
            execution that holds up under real world constraints.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Pill>System design</Pill>
            <Pill>Data platforms</Pill>
            <Pill>Analytics engineering</Pill>
            <Pill>Decision systems</Pill>
            <Pill>APIs</Pill>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={mailto}
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Start a conversation
            </a>

            <a
              href="/systems"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-black/20 px-5 py-3 text-sm font-semibold text-white hover:border-zinc-700 hover:bg-black/30"
            >
              View systems
            </a>
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            I respond fastest when the message includes context, goals, and
            constraints.
          </p>
        </div>

        <div className="hidden sm:block">
          <a
            href="/"
            className="rounded-xl border border-zinc-800 bg-black/20 px-4 py-2 text-sm text-zinc-200 hover:border-zinc-700 hover:bg-black/30"
          >
            Home
          </a>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card
          title="Direct contact"
          subtitle="Email is best for serious conversations. Keep it short, clear, and specific."
        >
          <div className="mt-1">
            <Row label="Email" value={email} href={mailto} />
            <Row
              label="Location"
              value="Boston, Massachusetts. Remote friendly."
            />
            <Row
              label="Availability"
              value="By appointment. Limited concurrent engagements."
            />

            <div className="pt-2">
              <Label>What to include</Label>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
                <li>One paragraph describing the problem</li>
                <li>What you have already tried</li>
                <li>Target outcome and timeline</li>
                <li>Known constraints: budget, data, team, compliance</li>
              </ul>

              <div className="mt-6 rounded-2xl border border-zinc-900 bg-black/30 p-4">
                <p className="text-xs font-medium tracking-wide text-zinc-500">
                  Message template
                </p>
                <pre className="mt-3 whitespace-pre-wrap text-sm leading-6 text-zinc-300">
{`Context:
Problem:
What we tried:
Target outcome:
Timeline:
Constraints:`}
                </pre>
              </div>
            </div>
          </div>
        </Card>

        <Card
          title="Professional presence"
          subtitle="Keep your links consistent. One identity across platforms."
        >
          <div className="mt-1">
            <Row
              label="GitHub"
              value="github.com/leshannangeya"
              href="https://github.com/leshannangeya"
            />
            <Row
              label="LinkedIn"
              value="Add your LinkedIn profile link"
              href="https://www.linkedin.com/in/leshannangeya/"
            />
            <Row label="Resume" value="Available on request" />

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={mailto}
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
              >
                Email me
              </a>
              <a
                href="/systems"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-black/20 px-5 py-3 text-sm font-semibold text-white hover:border-zinc-700 hover:bg-black/30"
              >
                See architecture work
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-900 bg-black/30 p-4">
              <p className="text-sm font-medium text-white">
                Engagements are selective
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                I take on a small number of engagements at a time to protect
                quality and focus. If your work needs durable decisions and
                strong architecture, we will move fast.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
