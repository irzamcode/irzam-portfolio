import Image from "next/image";

const CONTACT = {
  mail: "yourmail@example.com", // ★差し替え
  lineUrl: "https://lin.ee/xxxxxxxx", // ★仕事用LINE公式 or LINE追加URLに差し替え
  instagramUrl: "https://instagram.com/your_account", // ★差し替え
  xUrl: "https://x.com/your_account", // ★差し替え
  githubUrl: "https://github.com/irzamcode",
};

const PRICING = [
  {
    name: "Mini（まずは1枚で集客）",
    price: "¥59,800〜",
    lead: "初回の“予約/問い合わせ”導線だけ作る最短プラン",
    points: [
      "LP 1ページ（スマホ最適化）",
      "予約/LINE/電話への導線設計",
      "表示速度・基本SEO",
      "納品後の軽微修正 7日",
    ],
    recommended: false,
  },
  {
    name: "Standard（サロンの定番）",
    price: "¥148,000〜",
    lead: "“信用が伝わる”構成で、予約に繋げるサイト",
    points: [
      "トップ＋下層（例：メニュー/スタッフ/アクセス/FAQ）",
      "Googleマップ/営業時間/電話/LINE導線",
      "表示速度・基本SEO・OGP",
      "運用しやすい構造（文章差し替え前提）",
      "納品後の軽微修正 14日",
    ],
    recommended: true,
  },
  {
    name: "Premium（売上を作る導線設計）",
    price: "¥298,000〜",
    lead: "広告/SEOどちらでも強い。予約率まで設計する",
    points: [
      "Standardの全て",
      "予約率を上げる導線：比較/不安つぶし/FAQ強化",
      "改善前提の計測導入（GA等の準備）",
      "2ヶ月の改善サポート（軽微）",
    ],
    recommended: false,
  },
];

const FAQ = [
  {
    q: "写真や文章がまだ揃っていなくても依頼できますか？",
    a: "OK。まずは「目的（予約増/単価UPなど）」「参考サイト」「期限」の3つがあれば進められます。文章は“そのまま使える叩き台”もこちらで用意します。",
  },
  {
    q: "予約システムは入れられますか？",
    a: "できます。既存の予約サービス（ホットペッパー/RESERVAなど）への導線最適化、またはフォーム/LINE誘導で“予約が増える流れ”を作ります。",
  },
  {
    q: "納期はどれくらい？",
    a: "Miniは最短1週間〜。Standardは2〜3週間が目安です（素材の揃い具合で変動）。急ぎも相談OK。",
  },
  {
    q: "なぜNext.js？サロンに必要？",
    a: "“表示が速い＝離脱が減る”のが大きいです。さらに構造が整理されて運用しやすく、SEO/共有（OGP）も整えやすいので、長期的に強いです。",
  },
];

function cn(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(" ");
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
      />
    </svg>
  );
}
function IconLine() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.5 3.5h-15A2.5 2.5 0 0 0 2 6v9a2.5 2.5 0 0 0 2.5 2.5H7v3l3.6-3h8.9A2.5 2.5 0 0 0 22 15V6a2.5 2.5 0 0 0-2.5-2.5Z"
      />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM18 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.8 7.8L23 22h-6.6l-5.2-6.8L5.2 22H2l7.3-8.4L1 2h6.8l4.7 6.1L18.9 2Zm-1.2 18h1.8L7.9 4H6L17.7 20Z"
      />
    </svg>
  );
}

function Section({
  id,
  eyebrow,
  title,
  desc,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-4 sm:px-6">
      <div className="mx-auto w-full max-w-6xl py-14 sm:py-20">
        {eyebrow && (
          <p className="text-sm font-semibold tracking-wide text-slate-600">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-2 font-[var(--font-serif)] text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h2>
        {desc && (
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            {desc}
          </p>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-baseline gap-3">
            <span className="font-[var(--font-serif)] text-lg font-bold tracking-tight">
              IRZAM Beauty
            </span>
            <span className="hidden text-sm text-slate-600 sm:inline">
              Salon web制作（小さめ案件→継続OK）
            </span>
          </div>

          <nav className="hidden items-center gap-5 text-sm text-slate-700 sm:flex">
            <a className="hover:text-slate-950" href="#services">
              Services
            </a>
            <a className="hover:text-slate-950" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-slate-950" href="#projects">
              Projects
            </a>
            <a className="hover:text-slate-950" href="#faq">
              FAQ
            </a>
            <a className="hover:text-slate-950" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-90"
            >
              相談する
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-slate-600">
              美容室 / ネイル / エステ / アイブロウ / バーバー向け
            </p>
            <h1 className="mt-3 font-[var(--font-serif)] text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              上品で、速くて、
              <span className="underline decoration-slate-300 decoration-2 underline-offset-8">
                予約・問い合わせ
              </span>
              に繋がる Web制作。
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              見た目の高級感だけじゃなく、導線・読みやすさ・表示速度まで設計して
              「任せたくなる」サイトに整えます。小さめ案件から継続までOK。
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "LP / 店舗サイト",
                "予約導線 / LINE導線",
                "UI改善 / 速度改善",
                "スマホ最優先",
                "基本SEO / OGP",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-soft"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${CONTACT.mail}?subject=${encodeURIComponent(
                  "【相談】サロンサイト制作について"
                )}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-glow hover:opacity-90"
              >
                <IconMail />
                メールで相談
              </a>
              <a
                href={CONTACT.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-soft hover:bg-slate-50"
              >
                <IconLine />
                LINEで相談
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-soft hover:bg-slate-50"
              >
                料金を見る
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["最短", "1週間〜"],
                ["初回提案", "24h〜"],
                ["設計", "導線/速度/SEO"],
                ["制作", "Next.js/TS"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-soft"
                >
                  <p className="text-xs font-semibold text-slate-600">{k}</p>
                  <p className="mt-1 text-lg font-bold text-slate-950">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/40" />
              <Image
                src="/images/salon-hero.jpg"
                alt="サロンの雰囲気写真（差し替え）"
                width={1200}
                height={900}
                className="h-[340px] w-full object-cover sm:h-[420px]"
                priority
              />
              <div className="p-5">
                <p className="text-sm font-semibold text-slate-950">
                  ここに“あなたの強み”を置く
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  例：美容サロンの「予約までの導線」「メニューの見せ方」「信頼の出し方」を
                  テンプレではなく設計で作る。
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              ※画像は /public/images/salon-hero.jpg を置くと差し替わります
            </p>
          </div>
        </div>
      </section>

      <Section
        id="services"
        eyebrow="Services"
        title="サロンで“成果が出る”ための、作る内容"
        desc="見た目だけ作って終わり、にしない。予約/問い合わせに繋がる導線・文章・速度までセットで整えます。"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              t: "提案が速い",
              d: "目的・参考サイト・期限だけでOK。構成（導線）を先に出して迷いを減らします。",
            },
            {
              t: "“高級に見える”作り",
              d: "余白/階層/文字サイズ/コントラストを整えて、見た瞬間に“プロ感”が出るUIへ。",
            },
            {
              t: "運用しやすい設計",
              d: "追加・修正がしやすい構造に。将来の更新コストも下げます。",
            },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-soft"
            >
              <p className="font-semibold text-slate-950">{x.t}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="pricing"
        eyebrow="Pricing"
        title="料金（目安）"
        desc="“安く見えない”提示にしています。まずはStandardを軸に、必要に応じて調整が一番売れます。"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {PRICING.map((p) => (
            <div
              key={p.name}
              className={cn(
                "rounded-2xl border bg-white/70 p-6 shadow-soft",
                p.recommended
                  ? "border-slate-950 ring-1 ring-slate-950"
                  : "border-slate-200"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950">{p.name}</p>
                  <p className="mt-1 text-2xl font-bold text-slate-950">
                    {p.price}
                  </p>
                </div>
                {p.recommended && (
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">
                    人気
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{p.lead}</p>

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {p.points.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-[2px] inline-block h-4 w-4 rounded-full border border-slate-300" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                このプランで相談する
              </a>

              <p className="mt-3 text-xs text-slate-500">
                ※価格は内容/ページ数/素材の揃い具合で調整（見積もりは無料）
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Projects"
        title="実績の見せ方（ここを“技術の証明”にする）"
        desc="本当はここに、あなたの制作物（Before→After / 数値 / 施策）を置くと一気に成約率が上がります。今はテンプレ枠を用意。"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {[
            {
              title: "IRZAM Beauty Demo（このサイト）",
              badge: "Next.js / TS / Tailwind / Vercel",
              desc: "“上品さ＋予約導線”のデモ。CTA/FAQ/料金/信頼の順番を最適化。",
              result: "例）問い合わせ率 +30%（仮）",
              link: "#",
            },
            {
              title: "Project 2（準備中）",
              badge: "LP / 速度改善 / SEO",
              desc: "完成したら、ここにリンクと説明を差し替える。",
              result: "例）表示速度改善で離脱減（仮）",
              link: "#",
            },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-soft"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-semibold text-slate-950">{x.title}</p>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                  {x.badge}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{x.desc}</p>
              <p className="mt-3 text-sm font-semibold text-slate-950">
                {x.result}
              </p>
              <a
                className="mt-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                href={x.link}
              >
                Open
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="faq"
        eyebrow="FAQ"
        title="よくある質問"
        desc="不安を消す＝成約率が上がる。ここは強い武器。"
      >
        <div className="space-y-3">
          {FAQ.map((x) => (
            <details
              key={x.q}
              className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-soft"
            >
              <summary className="cursor-pointer font-semibold text-slate-950">
                {x.q}
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600">{x.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="相談 → すぐ提案まで出します"
        desc="まずはこのまま送ってOK。「目的 / 納期 / 参考URL」があると最速で提案できます。"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-soft">
            <p className="font-semibold text-slate-950">連絡手段</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              仕事用LINEは分けるのが正解。Instagram/Xも入れると“薄さ”が消えて信頼が増えます。
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`mailto:${CONTACT.mail}`}
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                <IconMail /> Mail
              </a>
              <a
                href={CONTACT.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                <IconLine /> LINE
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                <IconInstagram /> Instagram
              </a>
              <a
                href={CONTACT.xUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                <IconX /> X
              </a>
              <a
                href={CONTACT.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                GitHub
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-950">
                送る内容（このままでOK）
              </p>
              <div className="mt-3 space-y-3 text-sm text-slate-700">
                <div>
                  <p className="font-semibold">目的</p>
                  <p className="text-slate-600">例）予約を増やしたい / 単価UP / 採用</p>
                </div>
                <div>
                  <p className="font-semibold">納期</p>
                  <p className="text-slate-600">例）1週間 / 2週間</p>
                </div>
                <div>
                  <p className="font-semibold">参考URL</p>
                  <p className="text-slate-600">例）URL 2〜3個（近い雰囲気でOK）</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Tip：Projectsは「課題→解決→成果」で書くほど、案件が増えやすい。
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-soft">
            <p className="font-semibold text-slate-950">美容向けの写真について</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              画像は「/public/images/」に入れるのが最強で、運用も簡単。
              まずは下の3つだけ置けば“それっぽさ”が一気に出ます。
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>/public/images/salon-hero.jpg（ヒーロー用）</li>
              <li>/public/images/salon-work-1.jpg（施術/店内）</li>
              <li>/public/images/salon-work-2.jpg（施術/店内）</li>
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { src: "/images/salon-work-1.jpg", alt: "施術写真（差し替え）" },
                { src: "/images/salon-work-2.jpg", alt: "店内写真（差し替え）" },
              ].map((x) => (
                <div
                  key={x.src}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft"
                >
                  <Image
                    src={x.src}
                    alt={x.alt}
                    width={900}
                    height={700}
                    className="h-40 w-full object-cover sm:h-48"
                  />
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-slate-500">
              ※画像が無くても動くけど、入れた瞬間に“売れる見た目”になります。
            </p>
          </div>
        </div>
      </Section>

      <footer className="border-t border-slate-200 bg-white/60 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-6xl text-sm text-slate-600">
          <p className="font-semibold text-slate-950">IRZAM Beauty</p>
          <p className="mt-2">
            Clean & premium web experiences. Built with Next.js.
          </p>
          <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} IRZAM. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}