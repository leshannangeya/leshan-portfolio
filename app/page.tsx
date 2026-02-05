export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-16">
        <section className="w-full">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            Leshan Nang&apos;eya
          </h1>

          <p className="mt-4 text-xl text-zinc-200">
            Product and Systems Architect
          </p>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            I design scalable data driven platforms that turn complex business problems
            into durable systems. My work blends analytics, system design, and execution
            with a focus on clarity, resilience, and measurable impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "System Design",
              "Data Modeling",
              "Python",
              "SQL",
              "Analytics Engineering",
              "Business Intelligence",
              "Automation",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/systems"
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black no-underline hover:opacity-90"
            >
              View Systems
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-medium text-white no-underline hover:border-zinc-400"
            >
              Contact
            </a>
          </div>

          <p className="mt-10 text-sm text-zinc-500">
            Portfolio under construction.
          </p>
        </section>
      </div>
    </main>
  );
}
