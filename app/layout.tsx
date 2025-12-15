import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IRZAM — Portfolio",
    template: "%s | IRZAM",
  },
  description:
    "Premium, light, and conversion-focused web experiences. Built with Next.js, TypeScript, and Tailwind.",
  metadataBase: new URL("https://irzam-portfolio-mocha.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a
          href="#content"
          style={{
            position: "absolute",
            left: -9999,
            top: 0,
          }}
        >
          Skip to content
        </a>

        <header
          className="sticky top-0 z-50"
          style={{
            background: "rgba(246,244,239,.72)",
            borderBottom: "1px solid rgba(10,12,18,.08)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          <div className="container" style={{ paddingTop: 14, paddingBottom: 14 }}>
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-2">
                <span
                  style={{
                    fontWeight: 750,
                    letterSpacing: "0.02em",
                    fontSize: 14,
                  }}
                >
                  IRZAM
                </span>
                <span className="pill" style={{ fontSize: 12 }}>
                  small freelance / 継続OK
                </span>
              </a>

              <nav className="flex items-center gap-4 text-sm">
                <a href="#about" className="muted hover:text-black">
                  About
                </a>
                <a href="#projects" className="muted hover:text-black">
                  Projects
                </a>
                <a href="#contact" className="muted hover:text-black">
                  Contact
                </a>
                <a
                  href="https://github.com/irzamcode"
                  target="_blank"
                  rel="noreferrer"
                  className="muted hover:text-black"
                >
                  GitHub
                </a>
              </nav>
            </div>
          </div>
        </header>

        <main id="content">{children}</main>

        <footer style={{ borderTop: "1px solid rgba(10,12,18,.08)" }}>
          <div className="container" style={{ padding: "26px 24px" }}>
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div className="muted text-sm">
                Clean & premium web experiences. Built with Next.js.
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                <a className="muted hover:text-black" href="https://github.com/irzamcode" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="muted hover:text-black" href="#contact">
                  Email
                </a>
              </div>
            </div>

            <div className="muted text-xs" style={{ marginTop: 14 }}>
              © {new Date().getFullYear()} IRZAM. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}