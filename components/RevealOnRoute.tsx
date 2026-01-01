"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function restartAnimations() {
  // fade-up / data-reveal など “初期opacity:0” になりがちな要素を再起動
  const targets = document.querySelectorAll<HTMLElement>(".fade-up, [data-reveal]");
  targets.forEach((el) => {
    // classでアニメしてる場合
    el.classList.remove("fade-up");
    // reflow
    void el.offsetHeight;
    el.classList.add("fade-up");

    // inline animation の場合にも効く保険
    el.style.animation = "none";
    void el.offsetHeight;
    el.style.animation = "";
  });
}

export default function RevealOnRoute() {
  const pathname = usePathname();

  useEffect(() => {
    const run = () => {
      document.body.classList.remove("reveal");
      void document.body.offsetHeight;
      document.body.classList.add("reveal");
      restartAnimations();
    };

    run();

    // 「戻る」で復元された時にも必ず走らせる
    window.addEventListener("pageshow", run);

    return () => {
      window.removeEventListener("pageshow", run);
      document.body.classList.remove("reveal");
    };
  }, [pathname]);

  return null;
}