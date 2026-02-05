// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://leshannangeya.com"),
  title: {
    default: "Leshan Nang’eya | Business Analyst",
    template: "%s | Leshan Nang’eya",
  },
  description:
    "Business Analyst focused on strategy and growth analytics, SQL and Python data platforms, and systems that support real operational decisions.",
  openGraph: {
    title: "Leshan Nang’eya | Business Analyst",
    description:
      "I build data driven decision systems that turn complex business problems into clear insights, reliable workflows, and measurable outcomes.",
    url: "https://leshannangeya.com",
    siteName: "Leshan Nang’eya",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Leshan Nang’eya portfolio Open Graph image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leshan Nang’eya | Business Analyst",
    description:
      "Architecture case studies and data driven systems for measurable outcomes.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="rounded-xl px-3 py-2 text-sm text-zinc-300 no-underline hover:bg-zinc-950 hover:text-white"
  >
    {label}
  </Link>
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
            <Link href="/" className="text-sm font-semibold text-white no-underline">
              Leshan Nang&apos;eya
            </Link>

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
