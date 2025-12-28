"use client";

import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onNavigate?: {
    prev?: () => void;
    next?: () => void;
    hasPrev?: boolean;
    hasNext?: boolean;
  };
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  onNavigate,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // 背景スクロールを停止
      document.body.style.overflow = "hidden";
      // フォーカスを保存
      previousFocusRef.current = document.activeElement as HTMLElement;
      // モーダル内の最初のフォーカス可能要素にフォーカス
      setTimeout(() => {
        const firstFocusable = modalRef.current?.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as HTMLElement;
        firstFocusable?.focus();
      }, 100);
      // スクロール位置をトップに
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    } else {
      // 背景スクロールを復元
      document.body.style.overflow = "";
      // 以前のフォーカスに戻す
      previousFocusRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleArrow = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft" && onNavigate?.hasPrev && onNavigate.prev) {
        onNavigate.prev();
      }
      if (e.key === "ArrowRight" && onNavigate?.hasNext && onNavigate.next) {
        onNavigate.next();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleArrow);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleArrow);
    };
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* 背景オーバーレイ */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* モーダル本体 */}
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col sm:max-h-[85vh]"
      >
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 sm:p-8">
          <h2
            id="modal-title"
            className="text-xl font-extrabold text-slate-900 sm:text-2xl"
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            aria-label="閉じる"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
        <div ref={contentRef} className="flex-1 overflow-y-auto p-6 sm:p-8">
          {children}
        </div>

        {/* ナビゲーション（横移動） */}
        {onNavigate && (onNavigate.hasPrev || onNavigate.hasNext) && (
          <div className="flex items-center justify-between p-4 border-t border-slate-200 bg-slate-50/50">
            <button
              onClick={onNavigate.prev}
              disabled={!onNavigate.hasPrev}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 rounded"
              aria-label="前へ"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>前へ</span>
            </button>
            <span className="text-xs text-slate-400">他のプランを見る</span>
            <button
              onClick={onNavigate.next}
              disabled={!onNavigate.hasNext}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 rounded"
              aria-label="次へ"
            >
              <span>次へ</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
