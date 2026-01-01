"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteMount({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [tick, setTick] = useState(0);

  const bump = () => {
    setTick((t) => t + 1);

    // スクロール位置＆表示系のズレを一回リセット
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("reveal:refresh"));
    });
  };

  // 通常のルート遷移
  useEffect(() => {
    bump();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // ✅ “戻る/進む” のBFCache復元でも発火（ここが題名消え対策の本命）
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      // persisted=true がBFCache復元
      if (e.persisted) bump();
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div key={`${pathname}-${tick}`}>{children}</div>;
}