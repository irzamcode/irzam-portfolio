import type { Metadata } from "next";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://irzam-portfolio-mocha.vercel.app";

const site = {
  name: "IRZAM Web Studio",
  url: SITE_URL,
  description:
    "美容室/ネイル/エステ/眉/バーバー向け。予約・お問い合わせにつながる導線、読みやすい文章、表示速度、基本SEO/OGPまでセットで整えるWeb制作。",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}｜美容サロン向け Web制作`,
    template: `%s｜${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name}｜美容サロン向け Web制作`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "ja_JP",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
