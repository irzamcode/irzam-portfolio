import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";
import { WorksGrid, WorkItem } from "@/components/WorksGrid";

const site = {
  brand: "IRZAM Beauty",
  forWho: "美容室 / ネイル / エステ / 眉 / バーバー向け",
  headline: "上品で、速くて、予約・お問い合わせに繋がるWeb制作",
  sub:
    "見た目だけで終わらせません。導線・文章・表示速度・基本SEO/OGPまで整えて、「任せたくなる」サイトに仕上げます。",
  contact: {
    email: "irzam.code@gmail.com",
    // 友だち追加のURL（QRが出る/追加導線）
    lineAddUrl: "https://lin.ee/lFtPiyr", // ←あなたのLINE公式/個人の追加URLに差し替え
  },
};

const oneTimePlans = [
  {
    name: "Mini",
    badge: "まずは最小で",
    price: "¥59,800〜",
    lead: "まずは1ページで「予約・相談」まで繋げるライトプラン。",
    items: [
      "LP 1ページ（スマホ最適化）",
      "LINE / 電話 / メールへの導線設計",
      "表示速度の基本調整・基本SEO",
      "納品後の軽微修正（7日）",
    ],
  },
  {
    name: "Standard",
    badge: "一番人気",
    price: "¥148,000〜",
    lead: "信頼が伝わる構成で、予約・来店に繋がる“定番”プラン。",
    items: [
      "トップ＋下層（例：メニュー / スタッフ / アクセス / FAQ）",
      "Googleマップ / 営業時間 / 電話 / LINE導線",
      "表示速度・基本SEO・OGP",
      "文章差し替えしやすい運用設計",
      "納品後の軽微修正（14日）",
    ],
  },
  {
    name: "Premium",
    badge: "売上導線まで",
    price: "¥298,000〜",
    lead: "比較・不安つぶし・FAQ強化まで含めて“決め手”を作るプラン。",
    items: [
      "Standardの全て",
      "比較・不安つぶし・FAQ強化（予約率UPの導線）",
      "計測準備（例：GA導入サポート）",
      "公開後2ヶ月の改善サポート（軽微）",
    ],
    note: "※広告運用や予約システム連携がある場合は要相談",
  },
];

const maintenancePlans = [
  {
    name: "Light",
    price: "¥4,980 / 月",
    items: ["テキスト修正 月1回まで", "軽い表示崩れチェック"],
  },
  {
    name: "Standard",
    price: "¥9,800 / 月",
    items: ["修正 月3回まで", "軽い改善提案（導線/文章）"],
  },
  {
    name: "Pro",
    price: "¥19,800 / 月",
    items: ["修正多め", "優先対応", "簡単な改善（計測/ページ微調整）"],
  },
];

const works: WorkItem[] = [
  {
    title: "IRZAM Beauty（営業LP）",
    href: "https://folio-mocha.vercel.app/",
    img: "/works/irzam-beauty.png",
    note: "構成 / 導線 / 実装",
  },
  {
    title: "デモ：ネイルサロンLP",
    href: "https://example.com",
    img: "/works/demo-nail.png",
    note: "デモ制作",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function PrimaryButton({
  href,
  children,
  className,
  target,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800",
        className
      )}
    >
      {children}
    </Link>
  );
}

function GhostButton({
  href,
  children,
  className,
  target,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50",
        className
      )}
    >
      {children}
    </Link>
  );
}

export default function Page() {
  // メールテンプレ（自動で件名/本文を入れる）
  const mailSubject = "Web制作の相談（IRZAM Beauty）";
  const mailBody = `【ご相談内容（コピペOK）】
・業種（例：ネイル/美容室/エステ）：
・店舗エリア：
・目的（例：予約を増やしたい/単価を上げたい）：
・欲しい内容（例：メニュー/スタッフ/FAQ/アクセス）：
・参考サイト（あればURL）：
・希望納期：
・ご予算感：
・連絡方法（LINE/メール/電話）：
`;

  const mailtoHref =
    `mailto:${site.contact.email}` +
    `?subject=${encodeURIComponent(mailSubject)}` +
    `&body=${encodeURIComponent(mailBody)}`;

  // LINEは「友だち追加」導線（WebでもQRが出る）
  const lineAddHref = site.contact.lineAddUrl;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="text-[15px] font-semibold tracking-[-0.01em] text-slate-900">
            {site.brand}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-[14px] font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
          >
            Menu
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6">
        {/* Hero */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
            {site.forWho}
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            {site.headline}
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            {site.sub}
          </p>

          <div className="mt-6 grid gap-3 sm:max-w-md">
            <PrimaryButton href="#contact">LINEで相談（最短24hでご提案）</PrimaryButton>
            <GhostButton href="#pricing">料金を見る</GhostButton>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold text-slate-600">初回提案</div>
              <div className="mt-1 text-2xl font-black text-slate-900">24h〜</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold text-slate-600">最短納期</div>
              <div className="mt-1 text-2xl font-black text-slate-900">1週間〜</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold text-slate-600">設計</div>
              <div className="mt-1 text-2xl font-black text-slate-900">導線</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-xs font-semibold text-slate-600">制作</div>
              <div className="mt-1 text-2xl font-black text-slate-900">Next.js</div>
            </div>
          </div>
        </section>

        {/* Works */}
        <WorksGrid works={works} />

        {/* Pricing */}
        <section id="pricing" className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
          <div className="text-sm font-semibold text-slate-700">料金（目安）</div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            まずは目的に合わせて最適なプランをご提案します
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            見積もりは無料です。内容・ページ数・素材の有無で調整します。
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {oneTimePlans.map((p) => (
              <div
                key={p.name}
                className={cn(
                  "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
                  p.name === "Standard" && "ring-1 ring-slate-900/10"
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold text-slate-900">
                    {p.name}{" "}
                    <span className="ml-2 text-xs font-semibold text-slate-500">
                      {p.badge}
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-4xl font-black tracking-tight text-slate-900">
                  {p.price}
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-600">{p.lead}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-slate-900" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                {p.note ? (
                  <div className="mt-4 text-xs text-slate-500">{p.note}</div>
                ) : null}

                <div className="mt-5">
                  <PrimaryButton href="#contact">このプランで相談</PrimaryButton>
                </div>
              </div>
            ))}
          </div>

          {/* Maintenance (small) */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-8">
            <div className="text-sm font-semibold text-slate-700">保守・運用（任意）</div>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
              納品後も“育てたい”方向けに月額プランをご用意しています
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              買い切り（制作のみ）も可能です。必要な方だけご加入いただけます。
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {maintenancePlans.map((m) => (
                <div key={m.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-baseline justify-between">
                    <div className="text-sm font-bold text-slate-900">{m.name}</div>
                    <div className="text-sm font-black text-slate-900">{m.price}</div>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {m.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-slate-900" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <GhostButton href="#contact">月額も含めて相談</GhostButton>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="flow" className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
          <div className="text-sm font-semibold text-slate-700">相談〜公開まで</div>
          <div className="mt-6 grid gap-4 sm:grid-cols-4">
            {[
              ["1", "ヒアリング", "現状と目的を整理し、勝ち筋を決めます。"],
              ["2", "構成・導線設計", "予約・問い合わせまでの流れを設計します。"],
              ["3", "制作・確認", "見やすさ/速度/スマホ最適化まで仕上げます。"],
              ["4", "公開・微調整", "公開後に軽微修正、必要なら運用へ。"],
            ].map(([n, t, d]) => (
              <div key={n} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-xs font-black text-slate-500">STEP {n}</div>
                <div className="mt-1 text-sm font-bold text-slate-900">{t}</div>
                <div className="mt-2 text-sm text-slate-600">{d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
          <div className="text-sm font-semibold text-slate-700">FAQ</div>
          <div className="mt-4 space-y-3">
            {[
              [
                "支払いタイミングは？",
                "基本は「着手金（例：50%）→納品前に残金」です。個人契約でも安心して進められる形にします。",
              ],
              [
                "素材（写真/文章）がなくても大丈夫？",
                "はい。手持ち素材での仮組み、必要なら文章整形・構成提案まで対応します。",
              ],
              [
                "月額は必須？",
                "必須ではありません。更新を任せたい方向けのオプションです。",
              ],
            ].map(([q, a]) => (
              <div key={q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm font-bold text-slate-900">{q}</div>
                <div className="mt-2 text-sm text-slate-600">{a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
          <div className="text-sm font-semibold text-slate-700">お問い合わせ</div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            まずは内容を送ってください（コピペOK）
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <PrimaryButton href={lineAddHref} target="_blank">
              LINEで相談（友だち追加）
            </PrimaryButton>

            <GhostButton href={mailtoHref}>
              メールで相談（テンプレ自動入力）
            </GhostButton>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm font-bold text-slate-900">送る内容（コピペOK）</div>
              <CopyButton text={mailBody} />
            </div>

            <pre className="mt-3 whitespace-pre-wrap rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
{mailBody}
            </pre>

            <div className="mt-3 text-xs text-slate-500">
              ※LINEで送る場合も、このテンプレをそのまま貼り付けてください。
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 pb-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {site.brand}
        </footer>
      </div>
    </main>
  );
}