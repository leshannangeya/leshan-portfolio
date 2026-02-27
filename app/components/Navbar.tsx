import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-900 bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-4 flex items-center justify-between">
       <Link href="/" className="text-sm font-semibold tracking-wide text-white">
        Stephen Leshan
        </Link>

        <nav className="flex items-center gap-6 text-sm text-gray-300">
          <Link href="/#work" className="hover:text-white transition">
            Work
          </Link>
          <Link href="/#about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/#contact" className="hover:text-white transition">
            Contact
          </Link>
            <Link href="/projects" className="hover:text-white transition">
            Case Studies
            </Link>
          <a
            href="/resume.pdf"
            className="border border-gray-700 px-4 py-2 rounded-lg hover:border-white hover:text-white transition"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}