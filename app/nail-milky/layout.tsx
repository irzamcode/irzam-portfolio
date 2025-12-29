"use client";

import { useEffect } from "react";
import "./nail-milky.css";
import type { ReactNode } from "react";

export default function NailMilkyLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Nail Milkyページのテーマを適用
    document.documentElement.classList.add("nail-milky-theme");
    document.body.classList.add("nail-milky");

    return () => {
      // ページアンマウント時にテーマをクリーンアップ
      document.documentElement.classList.remove("nail-milky-theme");
      document.body.classList.remove("nail-milky");
      // body/htmlのスタイルをリセット
      document.body.style.background = "";
      document.body.style.color = "";
      document.documentElement.style.background = "";
      document.documentElement.style.color = "";
    };
  }, []);

  return <>{children}</>;
}
