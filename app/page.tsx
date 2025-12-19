"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type Plan = {
  name: string;
  badge?: string;
  price: string;
  lead: string;
  items: string[];
};

type Monthly = {
  name: string;
  price: string;
  items: string[];
};

type WorkItem = {
  id: string;   // ✅ 追加
  title: string;
  href: string;
  img?: string;
  note?: string;
};

function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setDone(true);
    setTimeout(() => setDone(false), 1200);
  };

  return (
    <button
      onClick={onCopy}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900",
        "hover:bg-slate-50 active:scale-[0.99] transition"
      )}
      type="button"
    >
      {done ? "コピーしました" : "テンプレをコピー"}
    </button>
  );
}

function SectionTitle({
  kicker,
  title,
  sub,
  id,
}: {
  kicker?: string;
  title: string;
  sub?: string;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-28">
      {kicker ? (
        <div className="text-sm font-semibold text-slate-700">{kicker}</div>
      ) : null}
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {sub ? (
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          {sub}
        </p>
      ) : null}
    </div>
  );
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
  target?: "_blank" | "_self";
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white",
        "hover:bg-slate-800 active:scale-[0.99] transition",
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
  target?: "_blank" | "_self";
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900",
        "hover:bg-slate-50 active:scale-[0.99] transition",
        className
      )}
    >
      {children}
    </Link>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-300 bg-white/70 px-4 py-1 text-sm font-semibold text-slate-800">
      {children}
    </span>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/60 p-4 backdrop-blur-sm">
      <div className="text-xs font-semibold text-slate-600">{label}</div>
      <div className="mt-1 text-xl font-extrabold tracking-tight text-slate-900">
        {value}
      </div>
    </div>
  );
}

function PlanCard({ plan, consultHref }: { plan: Plan; consultHref: string }) {
  return (
    <div className="glass rounded-3xl p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <div className="text-lg font-extrabold text-slate-900">{plan.name}</div>
        {plan.badge ? (
          <span className="rounded-full border border-slate-300 bg-white/75 px-3 py-1 text-xs font-bold text-slate-700">
            {plan.badge}
          </span>
        ) : null}
      </div>

      <div className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
        {plan.price}
      </div>
      <p className="mt-2 text-sm leading-7 text-slate-600">{plan.lead}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {plan.items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className="mt-[2px] inline-block h-5 w-5 rounded-full bg-slate-900/10 text-center text-xs leading-5">
              ✓
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <PrimaryButton href={consultHref} target="_blank">
          このプランで相談
        </PrimaryButton>
      </div>
    </div>
  );
}

function MonthlyCard({ m }: { m: Monthly }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/60 p-5 backdrop-blur-sm">
      <div className="text-base font-extrabold text-slate-900">{m.name}</div>
      <div className="mt-1 text-xl font-extrabold text-slate-900">{m.price}</div>
      <ul className="mt-3 space-y-1 text-sm text-slate-700">
        {m.items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className="text-slate-500">•</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WorksGrid({ works }: { works: WorkItem[] }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
      {works.map((w) => (
        <Link
  key={w.id}
  href={w.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group overflow-hidden rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-sm",
            "hover:shadow-md transition"
          )}
        >
          <div className="aspect-[16/10] w-full overflow-hidden bg-slate-50">
            {w.img ? (
              <img
                src={w.img}
                alt={w.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            ) : null}

            {/* 画像が無い場合も“未完成”に見せない */}
            <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm font-semibold text-slate-600">
              {w.img ? "" : "制作例は提案時に共有します（業種に合わせて最適化）"}
            </div>
          </div>

          <div className="p-4">
            <div className="text-sm font-extrabold text-slate-900">{w.title}</div>
            {w.note ? (
              <div className="mt-1 text-xs text-slate-600">{w.note}</div>
            ) : null}
            <div className="mt-3 text-xs font-semibold text-slate-700">
              クリックで開く →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white/60 p-5 backdrop-blur-sm">
      <summary className="cursor-pointer text-sm font-extrabold text-slate-900">
        <div className="flex items-center justify-between gap-3">
          <span>{q}</span>
          <span className="text-slate-500 transition group-open:rotate-45">＋</span>
        </div>
      </summary>
      <p className="mt-3 text-sm leading-7 text-slate-600">{a}</p>
    </details>
  );
}

export default function Page() {
  const site = {
    brand: "IRZAM Web Studio",
    forWho: "美容室 / ネイル / エステ / 眉 / バーバー向け",
    sub:
      "導線・文章・見やすさ・表示速度・基本SEO/OGPまで。見た目だけで終わらない“成果につながる”Webサイトに仕上げます。",
    contact: {
      email: "irzam.code@gmail.com",
      lineAddUrl: "https://lin.ee/kfrCGfH",
    },
  };

  // メール：件名/本文を自動入力
  const mailSubject = "Web制作のご相談（IRZAM Web Studio）";
  const mailBody = `【ご相談内容】（このまま送れます）
・業種：
・目的（予約増 / 単価UP / 採用 など）：
・希望ページ（LP / 複数ページ）：
・載せたい内容（メニュー/スタッフ/アクセス/FAQ等）：
・希望納期：
・参考URL（あれば）：
・ご予算感：
`;
  const mailtoHref =
    "mailto:" +
    site.contact.email +
    "?subject=" +
    encodeURIComponent(mailSubject) +
    "&body=" +
    encodeURIComponent(mailBody);

  const lineHref = site.contact.lineAddUrl;

  const copyTemplate = `【ご相談内容】（このまま送れます）
・業種：
・目的（予約増 / 単価UP / 採用 など）：
・希望ページ（LP / 複数ページ）：
・載せたい内容（メニュー/スタッフ/アクセス/FAQ等）：
・希望納期：
・参考URL（あれば）：
・ご予算感：
`;

  // ✅ “売れる”を邪魔しない名称に（集客/売上ワードは残してもOKだが、過度に煽らない）
  const oneTimePlans: Plan[] = [
    {
      name: "Mini",
      badge: "最短",
      price: "¥59,800〜",
      lead: "まずは1ページで、予約・お問い合わせ導線を整えたい方向け。",
      items: [
        "LP 1ページ（スマホ最適化）",
        "LINE/電話/予約への導線設計",
        "表示速度・基本SEO/OGP",
        "納品後の軽微修正 7日",
      ],
    },
    {
      name: "Standard",
      badge: "人気",
      price: "¥148,000〜",
      lead: "信用が伝わる構成で、選ばれるサイトに整えます。",
      items: [
        "トップ＋下層（例：メニュー/スタッフ/アクセス/FAQ）",
        "Googleマップ/営業時間/電話/LINE導線",
        "表示速度・基本SEO・OGP",
        "文章差し替えしやすい構造",
        "納品後の軽微修正 14日",
      ],
    },
    {
      name: "Premium",
      price: "¥298,000〜",
      lead: "比較・不安解消まで設計し、“決め手”を作ります。",
      items: [
        "Standardの全て",
        "予約率を上げる導線（比較/不安解消/FAQ強化）",
        "計測の準備（GA4導入サポート等・軽微）",
        "公開後の改善サポート 2ヶ月（軽微）",
      ],
    },
  ];

  const monthlyPlans: Monthly[] = [
    {
      name: "Light（保守・小修正）",
      price: "¥4,980 / 月",
      items: ["テキスト修正 月1回まで", "軽微な表示崩れ対応"],
    },
    {
      name: "Standard（運用サポート）",
      price: "¥9,800 / 月",
      items: ["修正 月3回まで", "改善提案（導線/文言）"],
    },
    {
      name: "Pro（優先対応）",
      price: "¥19,800 / 月",
      items: ["修正多め", "簡単な改善（計測/微調整）", "優先対応"],
    },
  ];

  // 実績：未完成を見せないため、いまは“強いものだけ”
  const works: WorkItem[] = useMemo(
  () => [
    {
      id: "sales", // ✅ 追加
      title: "営業サイト（このページ）",
      href: "https://irzam-portfolio-mocha.vercel.app/",
      img: "/works/irzam-webstudio.png",
      note: "構成 / 導線 / 実装（Next.js）",
    },
    {
      id: "examples", // ✅ 追加
      title: "制作例（業種に合わせて提案時に共有）",
      href: "https://irzam-portfolio-mocha.vercel.app/",
      note: "美容・ネイル・エステ・眉 など",
    },
  ],
  []
);

  // スマホメニュー開閉（下に飛ばない）
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "service", label: "サービス" },
    { id: "works", label: "実績" },
    { id: "pricing", label: "料金" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "相談" },
  ] as const;

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const consultHref = lineHref;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Header */}
      <header className="fade-up flex items-center justify-between">
        <div className="text-lg font-extrabold tracking-tight text-slate-900">
          {site.brand}
        </div>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 sm:flex">
          {navItems.map((x) => (
            <button
              key={x.id}
              type="button"
              onClick={() => scrollTo(x.id)}
              className="hover:text-slate-900 transition"
            >
              {x.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen ? (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div
            className="absolute inset-0 bg-slate-900/25 backdrop-blur-[2px]"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-3 top-3 left-3 glass-strong rounded-3xl p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-extrabold text-slate-900">
                {site.brand}
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-900"
              >
                閉じる
              </button>
            </div>

            <div className="mt-3 grid gap-2">
              {navItems.map((x) => (
                <button
                  key={x.id}
                  type="button"
                  onClick={() => scrollTo(x.id)}
                  className="w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-left text-sm font-semibold text-slate-900"
                >
                  {x.label}
                </button>
              ))}
            </div>

            <div className="mt-3 grid gap-2">
              <PrimaryButton href={consultHref} target="_blank">
                LINEで相談する
              </PrimaryButton>
              <GhostButton href={mailtoHref}>メールで相談する</GhostButton>
            </div>
          </div>
        </div>
      ) : null}

      {/* Hero */}
      <section className="fade-up relative mt-8 overflow-hidden rounded-3xl border border-slate-200/60 bg-white/40 p-6 shadow-sm backdrop-blur-md sm:mt-10 sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/45 blur-3xl floaty"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-sky-200/45 blur-3xl floaty"
        />

        <div className="relative">
          <Chip>{site.forWho}</Chip>

          

 <h1 className="mt-5 text-balance font-extrabold tracking-tight text-slate-900 leading-[1.06]">
  <span className="block text-[clamp(30px,6.4vw,64px)]">上品で、速いWeb制作</span>
  <span className="block text-[clamp(26px,5.6vw,54px)] text-slate-800">
    予約・お問い合わせにつなげます
  </span>
</h1>

<p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
  {site.sub}
</p>


          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
            {site.sub}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
            <PrimaryButton href={consultHref} target="_blank">
              LINEで相談（最短24hでご提案）
            </PrimaryButton>
            <GhostButton href="#pricing">料金を見る</GhostButton>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <MiniStat label="初回提案" value="24h〜" />
            <MiniStat label="最短納期" value="1週間〜" />
            <MiniStat label="設計" value="導線/速度/SEO" />
            <MiniStat label="実装" value="Next.js/TS" />
          </div>

          <p className="mt-4 text-xs text-slate-600">
            ※ サロンの導線（予約までの流れ）に合わせて、構成から設計します。
          </p>
        </div>
      </section>

      {/* Service */}
      <section className="mt-12 sm:mt-16" id="service">
        <SectionTitle
          kicker="サービス"
          title="成果につながるために、最初に整えること"
          sub="見た目・文章・導線・速度まで。はじめて見た瞬間に“ちゃんとしてる”印象を作ります。"
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "1画面で「何ができる / 誰向け / 次に押す」を明確に",
            "迷わせないCTA（LINE/電話/予約）導線",
            "上品に見える余白/階層/フォント設計",
            "表示速度・基本SEO/OGPで機会損失を減らす",
            "画像差し替え・メニュー変更を想定した構造",
            "納品後も“必要な方だけ”月額運用を選択可能",
          ].map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-slate-200 bg-white/60 p-5 backdrop-blur-sm"
            >
              <div className="text-sm font-semibold text-slate-900">✓ {t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Works */}
      <section className="mt-12 sm:mt-16" id="works">
        <SectionTitle
          kicker="実績"
          title="制作例（クリックで確認）"
          sub="実案件に近い形で、構成と導線を作り込んだものを掲載します。"
        />
        <WorksGrid works={works} />
        <p className="mt-3 text-xs text-slate-600">
          ※ 追加の制作例は、業種に合わせて提案時に共有します。
        </p>
      </section>

      {/* Pricing */}
      <section className="mt-12 sm:mt-16" id="pricing">
        <SectionTitle
          kicker="料金"
          title="買い切り（制作）プラン"
          sub="内容/ページ数/素材の揃い具合で調整します。見積もり無料です。"
        />

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {oneTimePlans.map((p) => (
            <PlanCard key={p.name} plan={p} consultHref={consultHref} />
          ))}
        </div>

        {/* 月額（料金の下に小さめで） */}
        <div className="mt-8">
          <div className="text-sm font-extrabold text-slate-900">
            月額（保守・運用） ※必要な方のみ
          </div>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            「納品して終わり」もOKです。更新や小修正を任せたい方だけ、月額で対応します。
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {monthlyPlans.map((m) => (
              <MonthlyCard key={m.name} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ（開く形式：前の形式を維持） */}
      <section className="mt-12 sm:mt-16" id="faq">
        <SectionTitle
          kicker="FAQ"
          title="よくある質問"
          sub="相談前に迷いやすいポイントだけ、先にクリアにします。"
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <FaqItem
            q="相談したら契約になりますか？"
            a="なりません。目的・現状・希望納期を伺った上で、プランと進め方をご提案します。合わなければ断って問題ありません。"
          />
          <FaqItem
            q="原稿や画像がまだ無くても依頼できますか？"
            a="可能です。構成（導線）を先に作り、必要な素材は後から差し替えできる形で進めます。"
          />
          <FaqItem
            q="納期はどれくらいですか？"
            a="最短1週間〜。ページ数と素材の揃い具合で変わります。急ぎの場合も一度ご相談ください。"
          />
          <FaqItem
            q="月額プランは必須ですか？"
            a="必須ではありません。更新を自分でされる方は買い切りでOK。更新を任せたい方だけ月額を選べます。"
          />
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12 sm:mt-16" id="contact">
        <SectionTitle
          kicker="相談"
          title="相談テンプレ（コピーして送れます）"
          sub="ボタンでコピーして、そのままLINE/メールに貼り付けてください。"
        />

        <div className="glass rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-extrabold text-slate-900">
              テンプレをコピーして送る
            </div>
            <CopyButton text={copyTemplate} />
          </div>

          <pre className="mt-4 whitespace-pre-wrap rounded-2xl border border-slate-200 bg-white/70 p-4 text-xs leading-6 text-slate-700">
{copyTemplate}
          </pre>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <PrimaryButton href={lineHref} target="_blank">
              LINEで相談する
            </PrimaryButton>
            <GhostButton href={mailtoHref}>
              メールで相談する（テンプレ自動入力）
            </GhostButton>
          </div>

          <p className="mt-3 text-xs text-slate-600">
            ※ LINEは友だち追加URLに遷移します（追加→そのまま相談できます）。
          </p>
        </div>
      </section>

      <footer className="mt-12 pb-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} IRZAM Web Studio
      </footer>
    </main>
  );
}
