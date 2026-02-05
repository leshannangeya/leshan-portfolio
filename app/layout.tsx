import "./globals.css";

export const metadata = {
  title: "Leshan Nang'eya Portfolio",
  description: "Product and Systems Architect portfolio",
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="rounded-xl px-3 py-2 text-sm text-zinc-300 no-underline hover:bg-zinc-950 hover:text-white"
  >
    {label}
  </a>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <a href="/" className="text-sm font-semibold text-white no-underline">
              Leshan Nang&apos;eya
            </a>

            <nav className="flex items-center gap-1">
              <NavLink href="/" label="Home" />
              <NavLink href="/systems" label="Systems" />
              <NavLink href="/contact" label="Contact" />
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
