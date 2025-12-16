import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-serif",
  display: "swap",
});

const SITE_URL = "https://irzam-portfolio-mocha.vercel.app"; // ★あなたの本番URLに合わせる

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "IRZAM Beauty | サロン向けWeb制作（予約・問い合わせに強い）",
  description:
    "美容室/ネイル/エステ/アイブロウ向け。上品で、速くて、予約・問い合わせにつながるWeb制作。導線設計/表示速度/SEO/運用しやすさまで一気通貫。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "IRZAM Beauty | サロン向けWeb制作",
    description:
      "上品で、速くて、予約・問い合わせにつながる。サロンの“売上に効く”Webを設計します。",
    url: SITE_URL,
    siteName: "IRZAM Beauty",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRZAM Beauty | サロン向けWeb制作",
    description: "予約・問い合わせに強い導線設計 / 表示速度 / SEO / 運用しやすさ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "IRZAM Beauty",
    url: SITE_URL,
    areaServed: "JP",
    serviceType: "Salon website / landing page / SEO / performance",
  };

  return (
    <html lang="ja" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-dvh font-[var(--font-sans)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}