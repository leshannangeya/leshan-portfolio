export default function RevenueVisibility() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-24">
      <div className="max-w-4xl mx-auto space-y-14 prose-block">
        <a href="/projects" className="text-gray-400 hover:text-white transition underline">
            ← Back to Case Studies
            </a>
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Revenue Visibility Transformation
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Standardized KPI reporting and dashboards to reduce manual reporting effort
            and improve decision cadence during performance reviews.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Context</h2>
          <p className="text-gray-400 leading-relaxed">
            Performance data existed, but reporting workflows were inconsistent and often reactive.
            Teams spent time rebuilding reports instead of acting on insights. Leadership needed
            clearer visibility into performance drivers and outcomes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What I Did</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>
              Supported KPI review cycles using dashboards and structured summary reports to guide planning decisions.
            </li>
            <li>
              Helped standardize reporting formats and review routines to improve consistency in performance discussions.
            </li>
            <li>
              Supported adoption of reporting and automation tools to replace repeated manual reporting tasks.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Impact</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Improved performance visibility by approximately 30 percent.</li>
            <li>Reduced ad hoc reporting requests by approximately 40 percent.</li>
            <li>
              Supported more disciplined monthly and quarterly review cycles by making metrics easier to access and compare.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}