import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "IRZAM — Portfolio",
    template: "%s — IRZAM",
  },
  description:
    "Premium portfolio built with Next.js + TypeScript. Clean, fast, and business-ready.",
  metadataBase: new URL("https://irzam-portfolio-mocha.vercel.app"),
  openGraph: {
    title: "IRZAM — Portfolio",
    description:
      "Premium portfolio built with Next.js + TypeScript. Clean, fast, and business-ready.",
    url: "https://irzam-portfolio-mocha.vercel.app",
    siteName: "IRZAM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRZAM — Portfolio",
    description:
      "Premium portfolio built with Next.js + TypeScript. Clean, fast, and business-ready.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

function TopBar() {
  return (
    <header className="sticky top-0 z-50">
      {/* glass bar */}
      <div className="border-b border-slate-200/70 bg-white/70 backdrop-blur-xl">
        <div className="container h-16 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 font-semibold tracking-tight"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
              <span className="text-[12px] tracking-[0.25em] text-slate-900">
                I
              </span>
            </span>
            <span className="text-slate-900">
              IRZAM<span className="text-slate-400">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/#about"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-950"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-950"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-950"
            >
              Contact
            </Link>

            <span className="mx-2 h-6 w-px bg-slate-200" />

            <Link
              href="/#contact"
              className="btn btn-primary h-10 px-4 text-sm"
            >
              Let’s work
            </Link>
          </nav>

          {/* Mobile nav (no JS) */}
          <details className="md:hidden relative">
            <summary className="list-none cursor-pointer select-none rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50">
              Menu
            </summary>
            <div className="absolute right-0 mt-3 w-[min(84vw,320px)] rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
              <div className="p-3">
                <Link
                  href="/#about"
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                >
                  About
                </Link>
                <Link
                  href="/#projects"
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                >
                  Projects
                </Link>
                <Link
                  href="/#contact"
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                >
                  Contact
                </Link>

                <div className="my-3 h-px bg-slate-200" />

                <Link href="/#contact" className="btn btn-primary w-full">
                  Let’s work
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/70">
      <div className="container py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-slate-900">
              IRZAM<span className="text-slate-400">.</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Clean & premium web experiences. Built with Next.js.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a className="chip" href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="chip" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="chip" href="mailto:your@email.com">
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 divider" />

        <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} IRZAM. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Designed to convert: clarity, speed, trust.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        {/* skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-[999] focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg"
        >
          Skip to content
        </a>

        <TopBar />

        <main id="main" className="container">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}