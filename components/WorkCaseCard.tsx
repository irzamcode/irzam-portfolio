"use client";

import { useState } from "react";
import { CaseStudyModal } from "./CaseStudyModal";

export function WorkCaseCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="group cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 bg-white/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        onClick={() => setIsModalOpen(true)}
      >
        {/* サムネイル（スクショ風ダミー） */}
        <div className="aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative">
          {/* ブラウザバー風 */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-slate-100/80 backdrop-blur-sm border-b border-slate-200/50 flex items-center gap-1.5 px-3 z-10">
            <div className="w-2 h-2 rounded-full bg-red-300"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
            <div className="w-2 h-2 rounded-full bg-green-300"></div>
            <div className="flex-1"></div>
            <div className="w-16 h-4 rounded bg-slate-200/60"></div>
          </div>
          {/* コンテンツエリア */}
          <div className="absolute inset-0 pt-8 p-4 flex flex-col gap-2">
            <div className="h-4 w-3/4 rounded bg-indigo-200/40"></div>
            <div className="h-3 w-1/2 rounded bg-pink-200/40"></div>
            <div className="flex-1"></div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 rounded bg-purple-200/30"></div>
              <div className="h-16 rounded bg-pink-200/30"></div>
              <div className="h-16 rounded bg-indigo-200/30"></div>
            </div>
          </div>
          {/* Hover時のズーム */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 via-purple-100/20 to-pink-100/20 transition-transform duration-500 group-hover:scale-110"></div>
        </div>

        {/* カード内容 */}
        <div className="p-5 lg:p-6">
          <div className="text-lg font-extrabold text-slate-900 lg:text-xl">
            参考URL再現 Case Study
          </div>
          <div className="mt-1 text-sm text-slate-600 lg:text-base">
            "似せる×成果導線"の設計図
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "余白/タイポ再現",
              "CTA最短動線",
              "SEO/文章は再設計",
            ].map((chip, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full bg-indigo-100/80 px-2.5 py-1 text-xs font-semibold text-indigo-700 border border-indigo-200/50"
              >
                {chip}
              </span>
            ))}
          </div>
          <div className="mt-4 text-right">
            <span className="text-xs text-slate-500">詳細を見る →</span>
          </div>
        </div>
      </div>

      {/* モーダル */}
      <CaseStudyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

