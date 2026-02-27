import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        {/* HERO */}
        <section className="mb-40">
          <div className="grid lg:grid-cols-12 gap-14 items-center">
            {/* Text */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Stephen Leshan Nang’eya
              </h1>

              <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
                Product and Growth Analytics. I design clarity inside complex
                systems where data informs disciplined decisions.
              </p>

              <div className="mt-12 flex flex-wrap gap-6">
                <a
                  href="#work"
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  View Work
                </a>

                <a
                  href="mailto:nangeyaleshan@gmail.com"
                  className="border border-gray-600 px-6 py-3 rounded-lg hover:border-white transition"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-56 md:w-64 lg:w-72">
              <div className="relative aspect-square overflow-hidden rounded-full border border-gray-800">
                <Image
                  src="/profile.png"
                  alt="Stephen Leshan Nang’eya"
                  fill
                  priority
                  className="object-cover grayscale contrast-110"
                />
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-40 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
            About
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
            I have spent over a decade working across operations, ERP systems,
            and performance reporting. What shifted my trajectory was realizing
            that most business problems are not execution problems. They are
            visibility problems.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg md:text-xl">
            My focus today is building structured systems where metrics drive
            confident decisions. I am interested in product environments where
            usage data, monetization strategy, and operational readiness
            intersect.
          </p>
        </section>

        {/* WORK */}
        <section id="work" className="mb-40">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-16">
            Selected Work
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="border border-gray-800 p-8 rounded-xl hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold">
                Revenue Visibility Transformation
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Built KPI dashboards integrating structured datasets to improve
                operational clarity, reduce manual reporting cycles, and enable
                more disciplined quarterly performance reviews.
              </p>
            </div>

            <div className="border border-gray-800 p-8 rounded-xl hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold">SAP Operational Alignment</h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Supported ERP deployment and reporting integration, improving
                financial visibility and procurement efficiency through
                structured data alignment.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-40 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-10">
            Contact
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg md:text-xl">
            If you are hiring for Product Analytics, Product Strategy, or Growth Analytics roles,
            I would like to connect.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="mailto:nangeyaleshan@gmail.com"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Email me
            </a>

            <a
              href="https://www.linkedin.com/in/leshannangeya/"
              target="_blank"
              className="border border-gray-600 px-6 py-3 rounded-lg hover:border-white transition"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-16 border-t border-gray-800 text-gray-500 text-sm">
          © {new Date().getFullYear()} Stephen Leshan Nang’eya
        </footer>
      </div>
    </main>
  );
}