"use client";

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
    <details className="group rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-md hover:shadow-lg transition-all">
      <summary className="cursor-pointer text-sm font-extrabold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 rounded">
        <div className="flex items-center justify-between gap-3">
          <span>{q}</span>
          <span className="text-2xl text-slate-400 transition-transform duration-200 group-open:rotate-45">
            ＋
          </span>
        </div>
      </summary>
      <p className="mt-3 text-sm leading-7 text-slate-600">{a}</p>
    </details>
  );
}

// 全プラン詳細の定数（モーダル横移動用に順序を定義）
const planOrder = [
  "standard",
  "growth",
  "spot",
  "pack",
  "monthlyLight",
  "monthlyStandard",
] as const;

const planDetails = {
  standard: {
    name: "Standard",
    price: "¥198,000",
    days: "目安14日（素材揃い後）",
    forWho: [
      "予約を増やしたいサロン",
      "HOTPEPPER/LINEへの導線を整えたい",
      "上品な見た目で信頼感を高めたい",
    ],
    includes: [
      "LP 1ページ（スマホ最適化・PC対応）",
      "HOTPEPPER/LINEへの導線設計",
      "表示速度最適化（Next.js）",
      "基本SEO・OGP設定",
      "制作中2回までの修正対応",
      "納品後の軽微修正 14日",
    ],
    excludes: [
      "複数ページの下層ページ（別見積）",
      "大規模な構成変更（別見積）",
    ],
    flow: "ヒアリング → デザイン提案 → 制作 → 修正（2回まで） → 納品",
  },
  growth: {
    name: "Growth",
    price: "¥298,000",
    days: "目安21日（素材揃い後）",
    forWho: [
      "予約率をさらに上げたいサロン",
      "比較・不安解消まで設計したい",
      "公開後の改善サポートも欲しい",
    ],
    includes: [
      "Standardの全て",
      "予約率を上げる導線設計（比較/不安解消/FAQ強化）",
      "計測の準備（GA4導入サポート等・軽微）",
      "公開後の改善サポート 2ヶ月（軽微）",
    ],
    excludes: [
      "大規模な機能追加（別見積）",
    ],
    flow: "ヒアリング → デザイン提案 → 制作 → 修正（2回まで） → 納品 → 改善サポート（2ヶ月）",
  },
  spot: {
    name: "単発修正（スポット）",
    price: "¥15,000",
    forWho: [
      "「ここだけ直したい」という要望がある",
      "軽微な修正を1箇所だけ対応してほしい",
      "緊急で修正が必要",
    ],
    includes: [
      "文言修正 / リンク修正 / 画像差し替え（1箇所）",
      "その他軽微修正（軽い崩れ・微調整など）",
      "事前に内容確認 → 金額確定 → 着手",
    ],
    excludes: [
      "複数箇所の修正（作業パック推奨）",
      "構成変更・全面デザイン変更（別見積）",
    ],
  },
  pack: {
    name: "作業パック（改修）",
    price: "要相談",
    packOptions: [
      { hours: "3h", price: "¥55,000" },
      { hours: "6h", price: "¥99,000" },
    ],
    forWho: [
      "複数箇所をまとめて対応したい",
      "改修が複数ある",
      "時間内で対応範囲を明確化したい",
    ],
    includes: [
      "複数箇所をまとめて対応",
      "時間内で対応範囲を明確化",
      "追加が出た場合は追加パックで対応",
    ],
    excludes: [
      "大規模改修（別見積）",
      "構成変更・全面デザイン変更（別見積）",
    ],
  },
  monthlyLight: {
    name: "月額 Light",
    price: "¥9,800/月",
    forWho: [
      "月1回の軽微な更新で十分",
      "文言修正や画像差し替えを任せたい",
      "コストを抑えながら保守したい",
    ],
    includes: [
      "月1回まで：文言修正、画像差し替えなど軽微な更新",
      "軽微な表示崩れ対応",
    ],
    excludes: [
      "大きな導線変更や構成変更（作業パックへ誘導）",
      "月2回以上の更新（Standardプランへ誘導）",
    ],
  },
  monthlyStandard: {
    name: "月額 Standard",
    price: "¥19,800/月",
    forWho: [
      "月2回の更新と改善提案が欲しい",
      "導線修正や軽い改善を継続したい",
      "優先対応を受けたい",
    ],
    includes: [
      "月2回まで：導線修正＋軽い改善提案（例：CTA改善、FAQ整理、見出し調整など）",
      "優先対応",
    ],
    excludes: [
      "大規模改修（作業パックへ誘導）",
      "月3回以上の更新（別途作業パック）",
    ],
  },
};

export default function Page() {
  const [toastShow, setToastShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlanKey, setSelectedPlanKey] = useState<string | null>(null);
  const [selectedPackHours, setSelectedPackHours] = useState<"3h" | "6h">("3h");
  const lineHref = "https://lin.ee/kfrCGfH";
  const email = "irzam.code@gmail.com";
  const consultTemplate = `業種：
目的（予約増/単価UP/採用など）：
参考URL：
予算感：
希望納期：`;

  const handleCopy = () => {
    setToastShow(true);
    setTimeout(() => setToastShow(false), 2000);
  };

  const handlePlanDetail = (planKey: string) => {
    setSelectedPlanKey(planKey);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedPlanKey(null), 300);
  };

  const getCurrentIndex = () => {
    if (!selectedPlanKey) return -1;
    return planOrder.indexOf(selectedPlanKey as typeof planOrder[number]);
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

  const currentPlan = selectedPlanKey
    ? planDetails[selectedPlanKey as keyof typeof planDetails]
    : null;

  // メール相談用のmailtoリンク
  const mailSubject = encodeURIComponent("IRZAM Web Studio 相談");
  const mailBody = encodeURIComponent(consultTemplate);
  const mailtoHref = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;

  return (
    <>
      <main className="relative min-h-screen">
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
              <h1 className="text-[clamp(28px,5vw,48px)] font-extrabold tracking-tight text-slate-900 leading-[1.15] sm:text-[clamp(36px,6vw,64px)] lg:text-[clamp(42px,7vw,72px)] text-balance">
                <span className="block">予約が入る</span>
                <span className="block mt-2 sm:mt-3">
                  <span className="whitespace-nowrap text-pink-600 bg-gradient-to-r from-pink-100 to-pink-50 px-3 py-1 rounded-2xl inline-block">
                    "綺麗なLP"
                  </span>
                  <span className="inline sm:inline"> を、最短で。</span>
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
                <PrimaryButton href={lineHref} target="_blank">
                  無料で相談する（LINE）
                </PrimaryButton>
                <GhostButton href="#works">制作実例を見る</GhostButton>
              </div>
            </section>
          </FadeSection>

          {/* 2. 予約が増える理由3つ */}
          <FadeSection>
            <section className="mt-20 sm:mt-24 lg:mt-28">
              <SectionTitle
                title="予約が増える理由"
                sub="導線・速度・高そうに見える。この3つで選ばれます。"
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:gap-8">
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
                    className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-md hover:shadow-lg transition-all lg:p-8"
                  >
                    <div className="text-lg font-extrabold text-slate-900 lg:text-xl">
                      {item.title}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600 lg:text-base">
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
                ※独自ドメイン接続（DNS～Vercel～SSL）は別途対応可能。内容により変動します（事前にお見積り）。
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
                    title="作業パック（改修）"
                    price="要相談"
                    desc="3h / 6h から選択"
                    onDetailClick={() => handlePlanDetail("pack")}
                  />
                </div>

                {/* 月額 */}
                <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-md sm:p-8 lg:p-10">
                  <div className="mb-6 text-base font-extrabold text-slate-900 lg:text-lg">
                    月額（保守・運用）任意
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
                    <ServiceCard
                      title="Light"
                      price="¥9,800/月"
                      desc="月1回まで：文言/画像差し替え程度"
                      onDetailClick={() => handlePlanDetail("monthlyLight")}
                    />
                    <ServiceCard
                      title="Standard"
                      price="¥19,800/月"
                      desc="月2回まで：導線修正＋軽い改善提案"
                      onDetailClick={() => handlePlanDetail("monthlyStandard")}
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
                  a="必須ではありません。VercelでデモURLを納品します。独自ドメイン接続は別途対応可能です（事前にお見積り）。"
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
            href="#pricing"
            className="w-auto whitespace-nowrap bg-pink-600 px-4 py-2.5 text-xs shadow-lg hover:bg-pink-700 sm:px-5 sm:py-3 sm:text-sm"
          >
            見積もり
          </PrimaryButton>
        </div>
      </main>

      {/* プラン詳細モーダル */}
      {currentPlan && (
        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          title={currentPlan.name}
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
            {/* 価格 */}
            {currentPlan.price && (
              <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-5">
                <div className="text-2xl font-extrabold text-slate-900">
                  {currentPlan.price}
                </div>
                {currentPlan.days && (
                  <div className="mt-1 text-sm text-slate-600">
                    {currentPlan.days}
                  </div>
                )}
                {/* 作業パックの時間選択 */}
                {selectedPlanKey === "pack" && currentPlan.packOptions && (
                  <div className="mt-4 flex gap-2">
                    {currentPlan.packOptions.map((option) => (
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

            {/* こんな人向け */}
            {currentPlan.forWho && (
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-3">
                  こんな人におすすめ
                </h3>
                <ul className="space-y-2">
                  {currentPlan.forWho.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700">
                      <span className="text-pink-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 含まれるもの */}
            {currentPlan.includes && (
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-3">
                  含まれるもの
                </h3>
                <ul className="space-y-2">
                  {currentPlan.includes.map((item, i) => (
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

            {/* 含まれない/注意点 */}
            {currentPlan.excludes && currentPlan.excludes.length > 0 && (
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-3">
                  含まれない / 注意点（最重要）
                </h3>
                <ul className="space-y-2">
                  {currentPlan.excludes.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-slate-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 制作の流れ */}
            {currentPlan.flow && (
              <div className="rounded-xl bg-slate-50 p-4">
                <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                  進め方
                </h3>
                <p className="text-sm text-slate-700">{currentPlan.flow}</p>
              </div>
            )}

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
