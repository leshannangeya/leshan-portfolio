import CopyEmailButton from "../components/CopyEmailButton";

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
  const mailto =
    "mailto:" +
    email +
    "?subject=Opportunity%20or%20project%20discussion" +
    "&body=Role%20or%20context%3A%0A%0AProblem%3A%0A%0ASuccess%20metrics%3A%0A%0ATimeline%3A%0A%0AConstraints%3A%0A%0ALinks%20or%20data%20samples%3A%0A";

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-sm text-zinc-400">Contact</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let’s build systems that ship and show impact
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-300">
              If you’re hiring for Business Analyst, Data Analyst, Analytics Engineer, or Systems roles, I can help you
              move from messy data to clean decisions. Send context, constraints, and what success looks like.
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
              Best for internship and full time discussions. I respond faster when the ask is clear and measurable.
            </p>

            <div className="mt-6 space-y-4">
              <Row label="Email" value={email} href={mailto} />
              <div className="pt-1">
                <CopyEmailButton email={email} />
              </div>
              <Row label="Location" value="Greater Boston" />
              <Row label="Availability" value="By appointment" />
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-black p-5">
              <div className="text-xs uppercase tracking-wide text-zinc-500">What to include</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>Your problem in one paragraph</li>
                <li>What you have tried so far</li>
                <li>Success metrics you care about</li>
                <li>Timeline and constraints</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6">
            <h2 className="text-base font-semibold">Links</h2>
            <p className="mt-2 text-sm text-zinc-300">
              Recruiter friendly links. One click. No hunting.
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
              <Row label="Resume" value="Resume available on request" />
            </div>

            <div className="mt-6">
              <a
                href={mailto}
                className="inline-block rounded-xl bg-white px-4 py-2 text-sm font-medium text-black no-underline hover:opacity-90"
              >
                Email for opportunities
              </a>

              <p className="mt-3 text-xs text-zinc-500">
                If you include role, timeline, and the core problem, you get a faster, sharper reply.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-zinc-500">
          Hiring teams win when messaging is precise. I operate the same way.
        </div>
      </div>
    </main>
  );
}
