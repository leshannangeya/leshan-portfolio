import Link from "next/link";

const projects = [
  {
    title: "Revenue Visibility Transformation",
    summary:
      "Standardized KPI reporting and dashboards to reduce manual reporting and improve decision cadence.",
    href: "/projects/revenue-visibility",
  },
  {
    title: "SAP Operational Alignment",
    summary:
      "Supported SAP deployment and integration to improve financial reporting clarity and procurement efficiency.",
    href: "/projects/sap-operational-alignment",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Case Studies
        </h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mb-16">
          A few examples of how I approached performance measurement, reporting structure,
          and operational visibility across complex systems.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="border border-gray-800 p-8 rounded-xl hover:border-gray-600 transition"
            >
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-4 text-gray-400 leading-relaxed">{p.summary}</p>
              <div className="mt-6 text-white underline">View case study →</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}