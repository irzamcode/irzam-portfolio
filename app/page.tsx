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
  title: string;
  href: string;
  img: string; // /works/xxx.png
  note?: string;
};

function CopyButton({
  text,
  label = "テンプレをコピー",
}: {
  text: string;
  label?: string;
}) {
  const [done, setDone] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      setTimeout(() => setDone(false), 1200);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setDone(true);
      setTimeout(() => setDone(false), 1200);
    }
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
      {done ? "コピーしました" : label}
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
        // 👇ここに bg-white があるのは “白ボタン” なのでセーフ
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
    <span className="inline-flex items-center rounded-full border border-slate-300 bg-white/60 px-4 py-1 text-sm font-semibold text-slate-800">
      {children}
    </span>
  );
}

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/55 p-4 backdrop-blur-sm">
      <div className="text-xs font-semibold text-slate-600">{label}</div>
      <div className="mt-1 text-xl font-extrabold tracking-tight text-slate-900">
        {value}
      </div>
    </div>
  );
}

function WorksGrid({ works }: { works: WorkItem[] }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6">
      {works.map((w) => (
        <Link
          key={w.href}
          href={w.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group overflow-hidden rounded-2xl border border-slate-200 bg-white/55 backdrop-blur-sm",
            "hover:shadow-md transition"
          )}
        >
          <div className="aspect-[4/3] w-full overflow-hidden bg-slate-50">
            <img
              src={w.img}
              alt={w.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              onError={(e) => {
                // 画像が壊れてても崩れないように
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-slate-500">
              （サムネ未設定でもOK）
            </div>
          </div>
          <div className="p-4">
            <div className="text-sm font-extrabold text-slate-900">
              {w.title}
            </div>
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

function PlanCard({
  plan,
  onConsultHref,
}: {
  plan: Plan;
  onConsultHref: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/55 p-6 backdrop-blur-sm sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <div className="text-lg font-extrabold text-slate-900">{plan.name}</div>
        {plan.badge ? (
          <span className="rounded-full border border-slate-300 bg-white/70 px-3 py-1 text-xs font-bold text-slate-700">
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
        <PrimaryButton href={onConsultHref} target="_blank">
          このプランで相談
        </PrimaryButton>
      </div>
    </div>
  );
}

function MonthlyCard({ m }: { m: Monthly }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/55 p-5 backdrop-blur-sm">
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

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white/55 p-5 backdrop-blur-sm">
      <summary className="cursor-pointer list-none text-sm font-extrabold text-slate-900">
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
    // スマホ2行固定にするので本文は分割して描画する
    sub:
      "見た目だけで終わらせません。導線・文章・表示速度・基本SEO/OGPまで整えて、“任せたくなる”サイトに仕上げます。",
    contact: {
      email: "irzam.code@gmail.com",
      // 友だち追加（QRが出る）
      lineAddUrl: "https://lin.ee/9YMT6VF", // ←あなたのURLに差し替え
    },
  };

  // ✅ メール/LINEに「書きやすいテンプレ」を自動で入れる
  const mailSubject = "Web制作の相談（IRZAM Beauty）";
  const mailBody = `【ご相談内容】（コピペOK）
・業種：
・目的（予約増/単価UP/採用など）：
・希望ページ（LP or 複数ページ）：
・掲載したい内容（メニュー/スタッフ/アクセス等）：
・希望納期：
・参考サイト（あれば）：
・ご予算感：
`;
  const mailtoHref =
    "mailto:" +
    site.contact.email +
    "?subject=" +
    encodeURIComponent(mailSubject) +
    "&body=" +
    encodeURIComponent(mailBody);

  // LINEは「友だち追加URL」をCTAに（確実）
  const lineHref = site.contact.lineAddUrl;

  // コピー用テンプレ（ボタンでコピー）
  const copyTemplate = `【ご相談内容】（コピペOK）
・業種：
・目的（予約増/単価UP/採用など）：
・希望ページ（LP or 複数ページ）：
・掲載したい内容（メニュー/スタッフ/アクセス等）：
・希望納期：
・参考サイト（あれば）：
・ご予算感：
`;

  const oneTimePlans: Plan[] = [
    {
      name: "Mini（まずは1枚で集客）",
      badge: "最短",
      price: "¥59,800〜",
      lead: "予約/問い合わせ導線を、最短で形にするライトプラン。",
      items: [
        "LP 1ページ（スマホ最適化）",
        "LINE/電話/予約への導線設計",
        "表示速度・基本SEO/OGP",
        "納品後の軽微修正 7日",
      ],
    },
    {
      name: "Standard（サロンの定番）",
      badge: "人気",
      price: "¥148,000〜",
      lead: "“信用が伝わる”構成で、予約に繋げるサイト。",
      items: [
        "トップ＋下層（例：メニュー/スタッフ/アクセス/FAQ）",
        "Googleマップ/営業時間/電話/LINE導線",
        "表示速度・基本SEO・OGP",
        "文章差し替えしやすい構造",
        "納品後の軽微修正 14日",
      ],
    },
    {
      name: "Premium（売上を作る導線設計）",
      price: "¥298,000〜",
      lead: "比較・不安つぶし・FAQ強化まで含めて“決め手”を作る。",
      items: [
        "Standardの全て",
        "予約率を上げる導線（比較/不安つぶし/FAQ強化）",
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
      items: ["修正 月3回まで", "軽い改善提案（導線/文言）"],
    },
    {
      name: "Pro（優先対応）",
      price: "¥19,800 / 月",
      items: ["修正多め", "簡単な改善（計測/ページ微調整）", "優先対応"],
    },
  ];

  const works: WorkItem[] = useMemo(
    () => [
      {
        title: "IRZAM Web Studio（営業LP）",
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
      {
        title: "デモ：美容室LP",
        href: "https://example.com",
        img: "/works/demo-salon.png",
        note: "デモ制作",
      },
      {
        title: "デモ：エステLP",
        href: "https://example.com",
        img: "/works/demo-esthe.png",
        note: "デモ制作",
      },
    ],
    []
  );

  const consultHref = lineHref; // まずはLINE相談に寄せる（一番強い導線）

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="text-lg font-extrabold tracking-tight text-slate-900">
          {site.brand}
        </div>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 sm:flex">
          <a href="#service" className="hover:text-slate-900">
            サービス
          </a>
          <a href="#pricing" className="hover:text-slate-900">
            料金
          </a>
          <a href="#faq" className="hover:text-slate-900">
            FAQ
          </a>
          <a href="#contact" className="hover:text-slate-900">
            相談
          </a>
        </nav>

        <div className="sm:hidden">
          <a
            href="#contact"
            className="rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900"
          >
            Menu
          </a>
        </div>
      </header>

      {/* Hero (透けカード：ここが白ベタの犯人になりがち) */}
      <section className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200/60 bg-white/55 p-6 shadow-sm backdrop-blur-md sm:mt-10 sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-slate-300/35 blur-3xl"
        />

        <div className="relative">
          <Chip>{site.forWho}</Chip>

          {/* ✅ スマホ2行固定（3列っぽい崩れを完全回避） */}
          <h1 className="mt-5 font-extrabold tracking-tight text-slate-900 text-[clamp(34px,7.2vw,72px)] leading-[1.05]">
            <span className="block sm:hidden">
              上品で、速くて、予約・お問い合わせに繋がる
              <br />
              Web制作
            </span>
            <span className="hidden sm:block">
              上品で、速くて、予約・お問い合わせに繋がるWeb制作
            </span>
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
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
            <MiniStat label="制作" value="Next.js/TS" />
          </div>

          <p className="mt-4 text-xs text-slate-600">
            ※ テンプレ貼り付けではなく、あなたのサロンの「予約までの流れ」に合わせて設計します。
          </p>
        </div>
      </section>

      {/* Service */}
      <section className="mt-12 sm:mt-16">
        <SectionTitle
          id="service"
          kicker="サービス"
          title="予約に繋がるために、最初に整えること"
          sub="見た目・文章・導線・速度まで。1回で“ちゃんとしてる”印象を作ります。"
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "1画面で「何ができる / 誰向け / 次に押す」を固定",
            "迷わせないCTA（LINE/電話/予約）導線",
            "高く見える“余白/階層/フォント”設計",
            "速度/基本SEO/OGPで取りこぼしを減らす",
            "画像差し替え・メニュー変更も想定した構造",
            "公開後の修正/運用も選べる（月額プラン）",
          ].map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-slate-200 bg-white/55 p-5 backdrop-blur-sm"
            >
              <div className="text-sm font-semibold text-slate-900">✓ {t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Works */}
      <section className="mt-12 sm:mt-16">
        <SectionTitle
          title="実績の制作物（クリックで確認）"
          sub="サムネイルを押すと、実際のページを別タブで開きます。"
        />
        <WorksGrid works={works} />
      </section>

      {/* Pricing */}
      <section className="mt-12 sm:mt-16">
        <SectionTitle
          id="pricing"
          kicker="料金"
          title="買い切り（制作）プラン"
          sub="内容/ページ数/素材の揃い具合で調整します。見積もり無料です。"
        />

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {oneTimePlans.map((p) => (
            <PlanCard key={p.name} plan={p} onConsultHref={consultHref} />
          ))}
        </div>

        {/* 月額（小さめに・料金の下に） */}
        <div className="mt-8">
          <div className="text-sm font-extrabold text-slate-900">
            月額（保守・運用） ※必要な方のみ
          </div>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            「納品して終わり」もOK。更新や小修正を任せたい方だけ月額で対応します。
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {monthlyPlans.map((m) => (
              <MonthlyCard key={m.name} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ（開く形式） */}
      <section className="mt-12 sm:mt-16">
        <SectionTitle
          id="faq"
          kicker="FAQ"
          title="よくある質問"
          sub="迷うポイントだけ先に解消して、相談に進めるようにしています。"
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <FaqItem
            q="相談したら契約になりますか？"
            a="なりません。目的・現状・希望納期を聞いた上で、プランと進め方をご提案します。合わなければ断ってOKです。"
          />
          <FaqItem
            q="原稿や画像がまだ無くても大丈夫？"
            a="大丈夫です。最低限のたたき台を作り、後から差し替えしやすい構造にします。画像差し替え・メニュー変更も前提で組みます。"
          />
          <FaqItem
            q="納期はどれくらい？"
            a="最短1週間〜。素材の揃い具合とページ数で変わります。急ぎの場合もまず相談してください。"
          />
          <FaqItem
            q="月額は必須ですか？"
            a="必須ではありません。更新を自分でやる方は買い切りでOK。更新を任せたい方だけ月額を選べます。"
          />
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12 sm:mt-16" id="contact">
        <SectionTitle
          kicker="相談"
          title="送る内容（コピペOK）"
          sub="書きやすいようにテンプレを用意しました。ボタンでコピーして、そのまま貼り付けてください。"
        />

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white/55 p-6 backdrop-blur-sm sm:p-8">
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
              メールで相談する（自動でテンプレ入力）
            </GhostButton>
          </div>

          <p className="mt-3 text-xs text-slate-600">
            ※ LINEは「友だち追加URL」を案内しています（QRが出る/追加導線）。
          </p>
        </div>
      </section>

      <footer className="mt-12 pb-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} IRZAM Web Studio
      </footer>
    </main>
  );
}