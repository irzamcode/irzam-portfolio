"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealOnRoute() {
  const pathname = usePathname();

  const runReveal = () => {
    // ✅ ルート変更時に表示アニメ/Reveal用の状態を完全にリセット
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    els.forEach((el) => {
      // 既存のアニメがあるなら一旦外して付け直す
      el.classList.remove("isIn");
      // data-reveal属性も一旦リセット（必要に応じて）
      const delay = el.getAttribute("data-reveal-delay");
      if (delay) {
        el.removeAttribute("data-reveal-delay");
        el.setAttribute("data-reveal-delay", delay);
      }
    });

    // ✅ 次のフレームで再評価（Heroの見出しが消える問題を防ぐ）
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        els.forEach((el) => {
          const r = el.getBoundingClientRect();
          const inView = r.top < window.innerHeight * 0.9;
          if (inView) el.classList.add("isIn");
        });
      });
    });
  };

  useEffect(() => {
    runReveal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const onRefresh = () => runReveal();
    window.addEventListener("reveal:refresh", onRefresh);
    return () => window.removeEventListener("reveal:refresh", onRefresh);
  }, []);

  return null;
}