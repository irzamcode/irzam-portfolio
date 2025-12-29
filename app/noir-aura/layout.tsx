"use client";

import { useEffect } from "react";
import "./noir.css";

export default function NoirAuraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Noir Auraページのテーマを適用
    document.documentElement.classList.add("noir-theme");
    document.body.classList.add("noir");

    return () => {
      // ページアンマウント時にテーマをクリーンアップ
      document.documentElement.classList.remove("noir-theme");
      document.body.classList.remove("noir");
      // body/htmlのスタイルをリセット
      document.body.style.background = "";
      document.body.style.color = "";
      document.documentElement.style.background = "";
      document.documentElement.style.color = "";
    };
  }, []);

  return <>{children}</>;
}
