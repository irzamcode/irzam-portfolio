"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const lineHref = "https://lin.ee/kfrCGfH";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* 背景オーバーレイ */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* モーダル本体 */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-white/95 via-pink-50/40 to-indigo-50/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-pink-200/60 overflow-hidden flex flex-col"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1) translateY(0)" : "scale(0.9) translateY(20px)",
          filter: isVisible ? "blur(0)" : "blur(8px)",
          transition: "opacity 0.26s cubic-bezier(0.4, 0, 0.2, 1), transform 0.26s cubic-bezier(0.4, 0, 0.2, 1), filter 0.26s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-6 border-b border-pink-200/50 bg-gradient-to-r from-white/60 via-pink-50/40 to-indigo-50/40 backdrop-blur-md">
          <div className="flex-1">
            <h2
              className="text-2xl font-extrabold text-slate-900"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-10px)",
                transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
              }}
            >
              参考URL再現のやり方
            </h2>
            <p
              className="mt-2 text-sm text-slate-600"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-10px)",
                transition: "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s",
              }}
            >
              見た目は寄せる。中身は"予約が増える構造"に作り直す。
            </p>
            <div
              className="mt-3 flex flex-wrap gap-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-10px)",
                transition: "opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s",
              }}
            >
              {["最短3〜7日で初稿", "Next.js + Vercel", "スマホ最適化"].map(
                (badge, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full bg-pink-100/80 px-3 py-1 text-xs font-semibold text-pink-700 border border-pink-200/50 backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="ml-4 rounded-full p-2 text-slate-400 hover:text-slate-900 hover:bg-pink-100/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            aria-label="閉じる"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* コンテンツ（スクロール可能） */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* 2カラムレイアウト */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* 左：似せるところ */}
            <div className="space-y-4">
              <h3
                className="text-lg font-extrabold text-indigo-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 0.4s ease 0.3s, transform 0.4s ease 0.3s",
                }}
              >
                似せるところ（見た目）
              </h3>
              {[
                "余白のリズム（セクション間 / カード角丸）",
                "配色（背景グラデ / ガラス感 / 影の薄さ）",
                "フォント（見出しは上品 / 本文は読みやすく）",
                "CTA配置（1st view → プラン → 相談の最短動線）",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-700"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                    transition: `opacity 0.4s ease ${0.35 + i * 0.1}s, transform 0.4s ease ${0.35 + i * 0.1}s`,
                  }}
                >
                  <span className="text-indigo-500 mt-0.5">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* 右：変えるところ */}
            <div className="space-y-4">
              <h3
                className="text-lg font-extrabold text-pink-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(20px)",
                  transition: "opacity 0.4s ease 0.3s, transform 0.4s ease 0.3s",
                }}
              >
                変えるところ（成果のため）
              </h3>
              {[
                "文章（誰向け/何が得かを1秒で理解）",
                "導線（予約/LINE/HotPepperの優先度整理）",
                "SEO（title/OGP/見出し構造/速度）",
                "信頼（実績/FAQ/返信目安/地図/注意書き）",
                "運用（更新しやすい構造・画像差し替え簡単）",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-700"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.4s ease ${0.35 + i * 0.1}s, transform 0.4s ease ${0.35 + i * 0.1}s`,
                  }}
                >
                  <span className="text-pink-500 mt-0.5">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 制作の流れ */}
          <div
            className="mt-8 pt-6 border-t border-pink-200/50"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.4s ease 0.7s, transform 0.4s ease 0.7s",
            }}
          >
            <h3 className="text-lg font-extrabold text-slate-900 mb-4">
              制作の流れ（4ステップ）
            </h3>
            <ol className="space-y-3">
              {[
                "参考URL + 目的 + 納期を共有",
                "構成/文章の叩き台をこちらで作成",
                "デザイン→実装（スマホ最適化）",
                "修正→公開（操作方法も共有）",
              ].map((step, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-slate-700"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-10px)",
                    transition: `opacity 0.4s ease ${0.75 + i * 0.1}s, transform 0.4s ease ${0.75 + i * 0.1}s`,
                  }}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-100 text-xs font-bold text-pink-700">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* フッター（ボタン） */}
        <div
          className="p-6 border-t border-pink-200/50 bg-gradient-to-r from-white/60 via-pink-50/40 to-indigo-50/40 backdrop-blur-md flex gap-3 sm:flex-row flex-col"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.4s ease 1.1s, transform 0.4s ease 1.1s",
          }}
        >
          <Link
            href={lineHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-pink-700 hover:to-pink-600 hover:shadow-xl transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
          >
            参考URLを送って相談
          </Link>
          <Link
            href="#pricing"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 bg-white/80 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white hover:border-slate-400 transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            制作プランを見る
          </Link>
        </div>
      </div>
    </div>
  );
}

