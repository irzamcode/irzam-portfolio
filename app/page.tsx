"use client";

/**
 * 制作実例の画像を変更する場合：
 * - 画像ファイルは public/works/ 配下に配置
 * - 以下の works 配列の img プロパティを更新
 * - 例: { img: "/works/noir-aura.png" } → { img: "/works/新しい画像.png" }
 */

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Toast } from "@/components/Toast";
import { CopyButton } from "@/components/CopyButton";
import { Modal } from "@/components/Modal";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

// IntersectionObserver でスクロールアニメーション
function useScrollFade() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

function FadeSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, isVisible } = useScrollFade();
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  title,
  sub,
  id,
}: {
  title: string;
  sub?: string;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {sub && (
        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
          {sub}
        </p>
      )}
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  className,
  target,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: "_blank" | "_self";
  onClick?: () => void;
}) {
  const baseClass =
    "inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800 hover:shadow-xl active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2";

  if (onClick) {
    return (
      <button onClick={onClick} className={cn(baseClass, className)}>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={cn(baseClass, className)}
      >
        {children}
      </Link>
    );
  }

  return null;
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
        "inline-flex w-full items-center justify-center rounded-full border-2 border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white hover:border-slate-400 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2",
        className
      )}
    >
      {children}
    </Link>
  );
}

function PlanCard({
  name,
  price,
  days,
  badge,
  isRecommended,
  onDetailClick,
}: {
  name: string;
  price: string;
  days: string;
  badge?: string;
  isRecommended?: boolean;
  onDetailClick?: () => void;
}) {
  return (
    <div
      className={cn(
        "group relative rounded-3xl border-2 bg-white/90 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5",
        isRecommended
          ? "border-pink-300 ring-2 ring-pink-100"
          : "border-slate-200"
      )}
    >
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-pink-500 px-4 py-1 text-xs font-bold text-white">
            おすすめ
          </span>
        </div>
      )}
      {badge && (
        <div className="mb-3 text-right">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {badge}
          </span>
        </div>
      )}
      <div className="text-xl font-extrabold text-slate-900">{name}</div>
      <div className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
        {price}
      </div>
      <div className="mt-1 text-sm text-slate-600">{days}</div>
      {onDetailClick && (
        <button
          onClick={onDetailClick}
          className="mt-4 w-full rounded-full border-2 border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:border-slate-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        >
          詳細を見る
        </button>
      )}
    </div>
  );
}

function ServiceCard({
  title,
  price,
  desc,
  onDetailClick,
}: {
  title: string;
  price: string;
  desc: string;
  onDetailClick?: () => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-md hover:shadow-lg transition-all lg:p-6">
      <div className="text-base font-extrabold text-slate-900 lg:text-lg">
        {title}
      </div>
      <div className="mt-2 text-lg font-extrabold text-slate-900 lg:text-xl">
        {price}
      </div>
      <p className="mt-2 text-sm text-slate-600 lg:text-base">{desc}</p>
      {onDetailClick && (
        <button
          onClick={onDetailClick}
          className="mt-4 w-full rounded-full border-2 border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:border-slate-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        >
          詳細を見る
        </button>
      )}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50/50 p-5 shadow-md hover:shadow-lg hover:border-pink-200 transition-all">
      <summary className="cursor-pointer text-sm font-extrabold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 rounded">
        <div className="flex items-center justify-between gap-3">
          <span className="leading-relaxed">{q}</span>
          <span className="text-2xl text-pink-500 transition-transform duration-200 group-open:rotate-45 shrink-0">
            ＋
          </span>
        </div>
      </summary>
      <div className="mt-4 pt-4 border-t border-slate-200">
        <p className="text-sm leading-7 text-slate-700">{a}</p>
      </div>
    </details>
  );
}

type PlanKey =
  | "standard"
  | "growth"
  | "spot"
  | "pack"
  | "monthly";

const planOrder: PlanKey[] = [
  "standard",
  "growth",
  "spot",
  "pack",
  "monthly",
];

const planLabels: Record<PlanKey, string> = {
  standard: "Standard",
  growth: "Growth",
  spot: "単発修正",
  pack: "作業パック",
  monthly: "月額",
};

// 成約コピーに完全差し替え
const planDetails: Record<PlanKey, any> = {
  standard: {
    name: "Standard",
    price: "¥198,000",
    days: "目安14日（素材揃い後）",
    hook: "“予約につながる見せ方”まで整えた、信頼されるLPを最短で。",
    forWho: [
      "HOTPEPPER/LINEに流しても反応が弱い（迷わせている）",
      "見た目がチープで単価・指名に繋がりにくい",
      "まずは“ちゃんとしたLP”を一発で作って反応を見たい",
    ],
    results: [
      "迷わず予約/相談に進む導線になる",
      "見た目の信頼感が上がり、比較で負けにくくなる",
      "表示が速く、離脱が減る",
    ],
    includes: [
      "LP 1ページ制作（スマホ最優先＋PCも綺麗に最適化）",
      "構成整理（読まれる順番で、伝わる形に再設計）",
      "CTA設計（LINE/HOTPEPPERへの導線を最適化）",
      "文言の強化（短く・刺さる・不安が減る）",
      "表示速度最適化（Next.js）",
      "基本SEO/OGP",
      "修正：制作中2回まで",
    ],
    flow: "ヒアリング → 設計 → 制作 → 修正 → 公開",
    note: "※下層ページ追加や大幅な構成変更が必要な場合は別途提案します。",
  },
  growth: {
    name: "Growth",
    price: "¥298,000",
    days: "目安21日（素材揃い後）",
    hook: "“選ばれる理由”まで作り切る。予約だけでなく単価・指名にも効くLPへ。",
    forWho: [
      "予約はもちろん、単価UP/指名/リピートにも繋げたい",
      "強みが言葉になっていなくて、比較で埋もれている",
      "“何をどう見せるか”から一緒に詰めて完成度を上げたい",
    ],
    results: [
      "選ばれる理由が明確になり、比較で勝てる",
      "不安が先回りで潰れ、相談・予約が増えやすい",
      "伝えたい価値が整理され、広告/紹介にも強くなる",
    ],
    includes: [
      "Standardの全内容",
      "強みの言語化（刺さる一言・見出し設計）",
      "不安つぶし設計（比較/実例/FAQ/流れの最適化）",
      "セクション追加・改善調整（成約率寄りに整える）",
      "修正：制作中3回まで（改善調整込み）",
    ],
    flow: "ヒアリング（強み/客層/単価）→ 設計 → 制作 → 改善調整 → 公開",
    note: "※大規模な機能開発や複数ページ化は別途相談です。",
  },
  spot: {
    name: "単発修正（スポット）",
    price: "¥15,000",
    hook: "“ここだけ直したい”を、最短でプロ品質に。",
    forWho: [
      "ボタン文言/配置/余白など、1点だけで反応を上げたい",
      "表示崩れや違和感を今すぐ直したい",
    ],
    results: [
      "1箇所の弱点を潰して、離脱を減らせる",
      "見た目の粗が消えて、信頼感が上がる",
      "自分で触って崩す不安がなくなる",
    ],
    includes: [
      "1箇所の修正（文言/リンク/軽いレイアウト/崩れ）",
      "スマホ/PCチェック込み",
      "反映・公開まで対応",
    ],
    flow: "スクショで指示 → 修正 → 反映",
    note: "※複数箇所なら作業パックの方が早く・お得です。",
  },
  pack: {
    name: "作業パック（まとめて改善）",
    price: "要相談",
    packOptions: [
      { hours: "3h", price: "¥55,000" },
      { hours: "6h", price: "¥99,000" },
    ],
    hook: "細かい改善をまとめて一気に整える。完成度が一段上がります。",
    forWho: [
      "直したい所が複数ある（導線/文言/配置/余白/見せ方）",
      "1回で“ちゃんと強い”状態に仕上げたい",
    ],
    results: [
      "“もったいない箇所”が消えて反応が上がる",
      "見せ方が揃ってプロっぽくなる",
      "優先順位も整理され、やることが明確になる",
    ],
    includes: [
      "複数箇所をまとめて対応",
      "時間内で対応範囲を明確化",
      "改善提案（押される配置/文言/導線の整備）",
      "反映・公開まで",
    ],
    flow: "修正リスト共有 → 優先順位整理 → 一括作業 → 反映",
    note: "※LPを新規で作り直す規模なら制作プランが最短です。",
  },
  monthly: {
    name: "月額",
    light: {
      name: "月額 Light",
      price: "¥9,800/月",
      hook: "放置しないだけで反応は落ちません。月1回、確実に更新。",
      forWho: [
        "忙しくて更新が止まりがち",
        "自分で触って崩すのが怖い",
        "まずは最低限の運用を回したい",
      ],
      results: [
        "“放置による劣化”を防げる",
        "更新のたびに見た目が整う",
        "いつでも相談できる安心感が増える",
      ],
      includes: [
        "月1回まで：文言/画像差し替え程度",
        "スマホ/PCチェック",
        "反映・公開",
      ],
      flow: "更新内容を送る → 差し替え → 反映",
      note: "※導線の組み替えや改善提案まで必要なら月額Standardがおすすめ。",
    },
    standard: {
      name: "月額 Standard",
      price: "¥19,800/月",
      hook: "月2回、“少しずつ良くする”。運用で予約が増えるLPへ。",
      forWho: [
        "月2回ペースで導線も整えながら育てたい",
        "何を直すと効くか、提案も欲しい",
        "少しずつ“成約寄り”に寄せたい",
      ],
      results: [
        "導線が良くなり、相談/予約が増えやすくなる",
        "改善が積み上がって強いLPになる",
        "常に最新の状態を保てる",
      ],
      includes: [
        "月2回まで：導線修正＋軽い改善提案",
        "スマホ/PCチェック",
        "反映・公開",
      ],
      flow: "現状確認 → 改善案 → 反映 → 次回へ",
      note: "※大規模改修や新規制作は制作プランで対応します。",
    },
  },
};

export default function Page() {
  const [toastShow, setToastShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlanKey, setSelectedPlanKey] = useState<PlanKey | null>(null);
  const [selectedMonthly, setSelectedMonthly] = useState<"light" | "standard">("light");
  const [selectedPackHours, setSelectedPackHours] = useState<"3h" | "6h">("3h");
  const [menuOpen, setMenuOpen] = useState(false);
  const lineHref = "https://lin.ee/kfrCGfH";
  const email = "irzam.code@gmail.com";
  const consultTemplate = `業種：
目的（予約増/単価UP/採用）：
参考URL：
希望納期：
予算感：`;

  const handleCopy = () => {
    setToastShow(true);
    setTimeout(() => setToastShow(false), 2000);
  };

  const handlePlanDetail = (planKey: PlanKey) => {
    setSelectedPlanKey(planKey);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedPlanKey(null), 300);
  };

  const handlePlanNav = (key: string) => {
    setSelectedPlanKey(key as PlanKey);
  };

  const getCurrentIndex = () => {
    if (!selectedPlanKey) return -1;
    return planOrder.indexOf(selectedPlanKey);
  };

  const handleNavigate = (direction: "prev" | "next") => {
    const currentIndex = getCurrentIndex();
    if (currentIndex === -1) return;

    let newIndex: number;
    if (direction === "prev") {
      newIndex = currentIndex - 1;
    } else {
      newIndex = currentIndex + 1;
    }

    if (newIndex >= 0 && newIndex < planOrder.length) {
      setSelectedPlanKey(planOrder[newIndex]);
    }
  };

  const currentIndex = getCurrentIndex();
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < planOrder.length - 1;

  const currentPlan = selectedPlanKey ? planDetails[selectedPlanKey] : null;

  // メール相談用のmailtoリンク
  const mailSubject = encodeURIComponent("IRZAM Web Studio 相談");
  const mailBody = encodeURIComponent(consultTemplate);
  const mailtoHref = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;

  // プランナビゲーション用のデータ
  const planNavData = selectedPlanKey
    ? {
        plans:
          selectedPlanKey === "monthly"
            ? [
                { key: "monthly-light", label: "Light" },
                { key: "monthly-standard", label: "Standard" },
              ]
            : planOrder.map((key) => ({
                key,
                label: planLabels[key],
              })),
        currentKey:
          selectedPlanKey === "monthly"
            ? `monthly-${selectedMonthly}`
            : selectedPlanKey,
        onSelect: (key: string) => {
          if (key.startsWith("monthly-")) {
            const type = key.split("-")[1] as "light" | "standard";
            setSelectedMonthly(type);
          } else {
            handlePlanNav(key);
          }
        },
      }
    : undefined;

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { id: "works", label: "実例" },
    { id: "pricing", label: "料金" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "相談" },
  ];

  return (
    <>
      <main className="relative min-h-screen">
        {/* 右上固定メニュー */}
        <div className="fixed top-4 right-4 z-50 sm:top-6 sm:right-6">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full bg-white/90 backdrop-blur-sm border-2 border-slate-200 p-3 shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            aria-label="メニュー"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span
                className={cn(
                  "h-0.5 bg-slate-900 rounded-full transition-all",
                  menuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "h-0.5 bg-slate-900 rounded-full transition-all",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-0.5 bg-slate-900 rounded-full transition-all",
                  menuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </div>
          </button>
          {menuOpen && (
            <div className="absolute top-14 right-0 w-48 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-slate-200 shadow-xl p-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-2 pt-2 border-t border-slate-200">
                <PrimaryButton
                  href={lineHref}
                  target="_blank"
                  className="text-xs py-2"
                >
                  LINEで相談
                </PrimaryButton>
              </div>
            </div>
          )}
        </div>

        {/* 泡の粒背景 */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
          <div className="bubble bubble-6"></div>
          <div className="bubble bubble-7"></div>
          <div className="bubble bubble-8"></div>
        </div>

        <div className="relative mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-6xl lg:px-8">
          {/* 1. Hero */}
          <FadeSection>
            <section className="text-center py-8 sm:py-12 lg:py-16">
              <h1 className="text-[clamp(32px,6vw,56px)] font-extrabold tracking-tight text-slate-900 leading-[1.1] sm:text-[clamp(40px,7vw,72px)] lg:leading-[1.05]">
                <span className="block">予約が入る</span>
                <span className="block mt-2 sm:mt-3">
                  <span className="whitespace-nowrap text-pink-600 bg-gradient-to-r from-pink-100 to-pink-50 px-3 py-1.5 rounded-2xl inline-block">
                    "綺麗なLP"
                  </span>
                  <span className="inline sm:inline"> を最短で。</span>
                </span>
              </h1>
              <p className="mt-4 text-sm text-slate-600 sm:text-base lg:text-lg max-w-xl mx-auto">
                ネイル・美容室・エステなど <span className="font-semibold text-slate-900">"サロン業"</span> の予約導線LP専門
              </p>
              <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 lg:text-xl lg:leading-8 max-w-2xl mx-auto">
                サロン向けに、見た目・導線・速度まで一気通貫。
                <br className="hidden sm:inline" />
                HOTPEPPER/LINEに迷わせず繋げます。
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:max-w-md sm:mx-auto lg:max-w-lg">
                <PrimaryButton href={lineHref} target="_blank" className="min-h-[44px]">
                  無料で相談する（LINE）
                </PrimaryButton>
                <GhostButton href="#works" className="min-h-[44px]">
                  制作実例を見る
                </GhostButton>
              </div>
              <p className="mt-4 text-xs text-slate-500 sm:text-sm">
                通常24時間以内に返信します（急ぎはLINEが早いです）
              </p>
            </section>
          </FadeSection>

          {/* 2. 予約が増える理由3つ */}
          <FadeSection>
            <section className="mt-20 sm:mt-24 lg:mt-28">
              <SectionTitle
                title="予約が増える理由"
                sub="導線・速度・高そうに見える。この3つで選ばれます。"
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    title: "導線設計",
                    desc: "HOTPEPPER/LINEへの迷いをなくし、スムーズに予約まで導きます。",
                  },
                  {
                    title: "表示速度",
                    desc: "Next.jsで高速表示。離脱を防ぎ、検索順位にも有利です。",
                  },
                  {
                    title: "高そうに見える",
                    desc: "上品なデザインで信頼感を高め、単価UPにもつながります。",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-md hover:shadow-lg transition-all sm:p-7 lg:p-8"
                  >
                    <div className="text-lg font-extrabold text-slate-900 sm:text-xl lg:text-2xl">
                      {item.title}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </FadeSection>

          {/* 3. 制作実例 */}
          <FadeSection>
            <section className="mt-20 sm:mt-24 lg:mt-28" id="works">
              <SectionTitle
                title="制作実例"
                sub="クリックで各デモサイトを確認できます。"
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
                {[
                  {
                    id: "noir-aura",
                    title: "Noir Aura",
                    href: "/noir-aura",
                    img: "/works/noir-aura.png",
                    note: "高単価サロン向けデモ",
                    improvement: "予約導線 / 世界観 / 高単価向け訴求",
                  },
                  {
                    id: "nail-milky",
                    title: "Nail Milky",
                    href: "/nail-milky",
                    img: "/works/nail-milky.webp",
                    note: "ネイルサロン向けデモ",
                    improvement: "可愛い×上品 / スマホ導線 / 速度",
                  },
                ].map((work) => (
                  <Link
                    key={work.id}
                    href={work.href}
                    className="group overflow-hidden rounded-2xl border-2 border-slate-200 bg-white/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      {work.img ? (
                        <img
                          src={work.img}
                          alt={work.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-500">
                          {work.title}
                        </div>
                      )}
                    </div>
                    <div className="p-5 lg:p-6">
                      <div className="text-lg font-extrabold text-slate-900 lg:text-xl">
                        {work.title}
                      </div>
                      {work.note && (
                        <div className="mt-1 text-sm text-slate-600 lg:text-base">
                          {work.note}
                        </div>
                      )}
                      {work.improvement && (
                        <div className="mt-2 text-xs text-slate-500 lg:text-sm">
                          {work.improvement}
                        </div>
                      )}
                      <div className="mt-3 text-sm font-semibold text-pink-600">
                        クリックで開く →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </FadeSection>

          {/* 4. 制作プラン */}
          <FadeSection>
            <section className="mt-20 sm:mt-24 lg:mt-28" id="pricing">
              <SectionTitle
                title="制作プラン"
                sub="Standardプランがおすすめです。"
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:max-w-2xl sm:mx-auto lg:max-w-3xl">
                <PlanCard
                  name="Standard"
                  price="¥198,000"
                  days="目安14日（素材揃い後）"
                  isRecommended
                  onDetailClick={() => handlePlanDetail("standard")}
                />
                <PlanCard
                  name="Growth"
                  price="¥298,000"
                  days="目安21日（素材揃い後）"
                  onDetailClick={() => handlePlanDetail("growth")}
                />
              </div>
              {/* 独自ドメイン注記 */}
              <p className="mt-6 text-xs text-slate-500 text-center">
                ※独自ドメイン接続（DNS～Vercel～SSL）：¥29,800（1ドメイン/1サイト）
              </p>
            </section>
          </FadeSection>

          {/* 5. 進め方/ルール（共通） */}
          <FadeSection>
            <section className="mt-20 sm:mt-24 lg:mt-28">
              <SectionTitle title="進め方/ルール（共通）" />
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-md sm:p-8 lg:p-10">
                <ul className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base lg:space-y-5">
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span>
                      <strong>支払い：</strong>50%先払い/50%納品時
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span>
                      <strong>修正：</strong>制作中2回まで（まとめて依頼）
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span>
                      <strong>範囲：</strong>文言/配置/色の微調整OK、構成変更/全面デザイン変更は別見積
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span>
                      <strong>素材：</strong>文章テンプレから整える、写真なければ仮素材→後差し替え
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      ✓
                    </span>
                    <span>
                      <strong>公開：</strong>VercelでURL納品（デモURL）
                    </span>
                  </li>
                </ul>
              </div>
            </section>
          </FadeSection>

          {/* 5.5. 制作の流れ */}
          <FadeSection>
            <section className="mt-20 sm:mt-24 lg:mt-28">
              <SectionTitle
                title="制作の流れ"
                sub="4ステップで進めます。各ステップで渡すもの・もらうものを明確にします。"
              />
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-md sm:p-8 lg:p-10">
                <ol className="space-y-6 text-sm leading-7 text-slate-700 sm:text-base lg:space-y-8">
                  <li className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      1
                    </span>
                    <div className="flex-1">
                      <div className="font-extrabold text-slate-900">ヒアリング（業種/目的/参考URL/納期/予算）</div>
                      <div className="mt-1 text-slate-600">→ もらう：参考URL / 必須要件</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      2
                    </span>
                    <div className="flex-1">
                      <div className="font-extrabold text-slate-900">構成・文章案（こちらで叩き台→確認）</div>
                      <div className="mt-1 text-slate-600">→ 渡す：構成案 / 文章案</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      3
                    </span>
                    <div className="flex-1">
                      <div className="font-extrabold text-slate-900">デザイン→実装（Next.js）</div>
                      <div className="mt-1 text-slate-600">→ 渡す：デザイン / プレビューURL</div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                      4
                    </span>
                    <div className="flex-1">
                      <div className="font-extrabold text-slate-900">修正→公開（操作方法も共有）</div>
                      <div className="mt-1 text-slate-600">→ 渡す：公開URL / 簡易操作ガイド</div>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
          </FadeSection>

          {/* 6. 納品後の変更メニュー */}
          <FadeSection>
            <section className="mt-20 sm:mt-24 lg:mt-28">
              <SectionTitle
                title="納品後の変更メニュー（任意）"
                sub="必要な時だけ、必要な分だけ対応します。"
              />
              <div className="mt-10 space-y-6 lg:space-y-8">
                {/* 単発修正・作業パック */}
                <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
                  <ServiceCard
                    title="単発修正（スポット）"
                    price="¥15,000"
                    desc="/ 1箇所"
                    onDetailClick={() => handlePlanDetail("spot")}
                  />
                  <ServiceCard
                    title="作業パック（まとめて改善）"
                    price="要相談"
                    desc="3h / 6h"
                    onDetailClick={() => handlePlanDetail("pack")}
                  />
                </div>

                {/* 月額（統合） */}
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-md sm:p-8 lg:p-10">
                  <div className="mb-6 text-base font-extrabold text-slate-900 lg:text-lg">
                    月額（保守・運用）任意
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
                    <ServiceCard
                      title="Light"
                      price="¥9,800/月"
                      desc="月1回まで：文言/画像差し替え程度"
                      onDetailClick={() => {
                        setSelectedMonthly("light");
                        handlePlanDetail("monthly");
                      }}
                    />
                    <ServiceCard
                      title="Standard"
                      price="¥19,800/月"
                      desc="月2回まで：導線修正＋軽い改善提案"
                      onDetailClick={() => {
                        setSelectedMonthly("standard");
                        handlePlanDetail("monthly");
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </FadeSection>

          {/* 不安つぶし */}
          <FadeSection>
            <section className="mt-20 sm:mt-24 lg:mt-28">
              <div className="rounded-2xl border-2 border-pink-200 bg-gradient-to-br from-pink-50/50 to-white p-6 shadow-md sm:p-8 lg:p-10">
                <h3 className="text-lg font-extrabold text-slate-900 mb-4 sm:text-xl">
                  よくある不安
                </h3>
                <div className="space-y-3 text-sm text-slate-700 sm:text-base">
                  <div className="flex gap-2">
                    <span className="text-pink-600 font-bold shrink-0">Q.</span>
                    <span>
                      <strong>素材が揃ってなくても大丈夫？</strong> → 最低限から先に作って、後から整えられます。
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-pink-600 font-bold shrink-0">Q.</span>
                    <span>
                      <strong>相談したら断れない？</strong> → 相談だけOK。合わなければ断って大丈夫です。
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </FadeSection>

          {/* 7. FAQ */}
          <FadeSection>
            <section className="mt-20 sm:mt-24 lg:mt-28" id="faq">
              <SectionTitle
                title="FAQ"
                sub="よくある質問にお答えします。"
              />
              <div className="mt-10 grid gap-4 lg:gap-5">
                <FaqItem
                  q="納期はどれくらいですか？"
                  a="Standardプランは素材揃い後、目安14日。Growthプランは目安21日です。急ぎの場合はご相談ください。"
                />
                <FaqItem
                  q="修正は何回まで可能ですか？"
                  a="制作中は2回まで（まとめて依頼）可能です。文言/配置/色の微調整はOKですが、構成変更や全面デザイン変更は別見積となります。"
                />
                <FaqItem
                  q="素材（写真・文章）がまだ揃っていなくても依頼できますか？"
                  a="可能です。文章はテンプレから整えます。写真がない場合は仮素材を使用し、後から差し替え可能です。"
                />
                <FaqItem
                  q="決済方法は？"
                  a="50%先払い、50%納品時のお支払いです。詳細はご相談時にご案内します。"
                />
                <FaqItem
                  q="公開後の変更はどうなりますか？"
                  a="単発修正（スポット）¥15,000/1箇所、作業パック（3h ¥55,000 / 6h ¥99,000）、または月額プラン（Light ¥9,800/月、Standard ¥19,800/月）で対応可能です。"
                />
                <FaqItem
                  q="独自ドメインは必要ですか？"
                  a="必須ではありません。VercelでデモURLを納品します。独自ドメイン接続は別途対応可能です（¥29,800）。"
                />
              </div>
            </section>
          </FadeSection>

          {/* 8. 相談テンプレ */}
          <FadeSection>
            <section className="mt-20 sm:mt-24 lg:mt-28" id="contact">
              <SectionTitle
                title="相談テンプレ"
                sub="テンプレをコピーして、LINE/メールでそのまま送れます。"
              />
              <div className="mt-10 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-md sm:p-8 lg:p-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm font-extrabold text-slate-900 lg:text-base">
                    テンプレをコピー
                  </div>
                  <CopyButton
                    text={consultTemplate}
                    label="テンプレをコピー"
                    onCopy={handleCopy}
                  />
                </div>
                <pre className="mt-4 whitespace-pre-wrap rounded-xl border border-slate-200 bg-white/90 p-4 text-xs leading-6 text-slate-700 sm:text-sm lg:text-base">
                  {consultTemplate}
                </pre>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <PrimaryButton href={lineHref} target="_blank">
                    LINEで相談する
                  </PrimaryButton>
                  <GhostButton href={mailtoHref}>メールで相談する</GhostButton>
                </div>
              </div>
            </section>
          </FadeSection>

          {/* 9. Footer */}
          <FadeSection>
            <footer className="mt-20 pb-12 text-center text-sm text-slate-600 sm:mt-24 lg:mt-28 lg:text-base">
              Design & Frontend by IRZAM Web Studio
              <br />
              通常24時間以内に返信します（急ぎはLINEが早いです）
            </footer>
          </FadeSection>
        </div>

        {/* 固定CTA（右下） */}
        <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6 sm:gap-3 sm:flex-row">
          <PrimaryButton
            href={lineHref}
            target="_blank"
            className="w-auto whitespace-nowrap px-4 py-2.5 text-xs shadow-lg sm:px-5 sm:py-3 sm:text-sm"
          >
            LINE相談
          </PrimaryButton>
          <PrimaryButton
            href={mailtoHref}
            className="w-auto whitespace-nowrap bg-pink-600 px-4 py-2.5 text-xs shadow-lg hover:bg-pink-700 sm:px-5 sm:py-3 sm:text-sm"
          >
            メール相談
          </PrimaryButton>
        </div>
      </main>

      {/* プラン詳細モーダル */}
      {currentPlan && (
        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          title={
            selectedPlanKey === "monthly"
              ? planDetails.monthly[selectedMonthly].name
              : currentPlan.name
          }
          planNav={planNavData}
          onNavigate={
            hasPrev || hasNext
              ? {
                  prev: () => handleNavigate("prev"),
                  next: () => handleNavigate("next"),
                  hasPrev,
                  hasNext,
                }
              : undefined
          }
        >
          <div className="space-y-6">
            {(() => {
              const plan =
                selectedPlanKey === "monthly"
                  ? planDetails.monthly[selectedMonthly]
                  : currentPlan;

              return (
                <>
                  {/* 刺しの一言 */}
                  {plan.hook && (
                    <div className="rounded-xl bg-gradient-to-br from-pink-50 to-pink-100/50 p-5 border-2 border-pink-200">
                      <p className="text-lg font-extrabold text-slate-900 leading-relaxed">
                        {plan.hook}
                      </p>
                    </div>
                  )}

                  {/* 価格 */}
                  {plan.price && (
                    <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-5">
                      <div className="text-2xl font-extrabold text-slate-900">
                        {selectedPlanKey === "pack" && plan.packOptions
                          ? plan.packOptions.find((opt: { hours: string; price: string }) => opt.hours === selectedPackHours)?.price || plan.price
                          : plan.price}
                      </div>
                      {plan.days && (
                        <div className="mt-1 text-sm text-slate-600">
                          {plan.days}
                        </div>
                      )}
                      {/* 作業パックの時間選択 */}
                      {selectedPlanKey === "pack" && plan.packOptions && (
                        <div className="mt-4 flex gap-2">
                          {plan.packOptions.map((option: { hours: string; price: string }) => (
                            <button
                              key={option.hours}
                              onClick={() =>
                                setSelectedPackHours(option.hours as "3h" | "6h")
                              }
                              className={cn(
                                "flex-1 rounded-lg border-2 px-4 py-2 text-sm font-semibold transition-all",
                                selectedPackHours === option.hours
                                  ? "border-slate-900 bg-slate-900 text-white"
                                  : "border-slate-300 bg-white text-slate-900 hover:border-slate-400"
                              )}
                            >
                              {option.hours} {option.price}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* こんな方に */}
                  {plan.forWho && (
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 mb-3">
                        こんな方に
                      </h3>
                      <ul className="space-y-2">
                        {plan.forWho.map((item: string, i: number) => (
                          <li key={i} className="flex gap-2 text-sm text-slate-700">
                            <span className="text-pink-600 font-bold shrink-0">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 得られる結果 */}
                  {plan.results && (
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 mb-3">
                        これで得られる結果
                      </h3>
                      <ul className="space-y-2">
                        {plan.results.map((item: string, i: number) => (
                          <li key={i} className="flex gap-2 text-sm text-slate-700">
                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 含まれる内容 */}
                  {plan.includes && (
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 mb-3">
                        含まれる内容
                      </h3>
                      <ul className="space-y-2">
                        {plan.includes.map((item: string, i: number) => (
                          <li key={i} className="flex gap-2 text-sm text-slate-700">
                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 進め方 */}
                  {plan.flow && (
                    <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                      <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                        進め方
                      </h3>
                      <p className="text-sm text-slate-700">{plan.flow}</p>
                    </div>
                  )}

                  {/* 注記 */}
                  {plan.note && (
                    <div className="rounded-xl bg-amber-50/50 border border-amber-200 p-4">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {plan.note}
                      </p>
                    </div>
                  )}
                </>
              );
            })()}

            {/* CTA */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <PrimaryButton href={lineHref} target="_blank">
                LINEで相談する
              </PrimaryButton>
              <GhostButton href={mailtoHref}>メールで相談する</GhostButton>
            </div>
          </div>
        </Modal>
      )}

      <Toast message="コピーしました" show={toastShow} />
    </>
  );
}
