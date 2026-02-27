export default function SapOperationalAlignment() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-24">
      <div className="max-w-4xl mx-auto space-y-14 prose-block">
        <a href="/projects" className="text-gray-400 hover:text-white transition underline">
            ← Back to Case Studies
            </a>
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            SAP Operational Alignment
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Supported SAP ERP deployment and integration to improve financial reporting,
            procurement workflows, and operational visibility.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Context</h2>
          <p className="text-gray-400 leading-relaxed">
            Core operational and finance processes required stronger system alignment
            to reduce manual work and enable clearer reporting. Multiple teams depended
            on consistent data outputs for decision making.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What I Did</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>
              Supported SAP ERP deployment and optimization focused on reporting accuracy and workflow efficiency.
            </li>
            <li>
              Helped align system outputs with business performance and reporting objectives across stakeholders.
            </li>
            <li>
              Contributed to integration work connecting operational and revenue reporting where needed.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Impact</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Improved operational workflows and reporting efficiency by approximately 25 percent.</li>
            <li>Increased digital operational efficiency by approximately 30 percent through system integration and automation.</li>
            <li>Reduced friction in procurement and reporting cycles, supporting faster decision making.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}