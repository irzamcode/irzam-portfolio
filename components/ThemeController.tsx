"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const THEMES = {
  NOIR: "noir",
  MILKY: "milky",
  DEFAULT: "default",
} as const;

type ThemeKey = (typeof THEMES)[keyof typeof THEMES];

function getThemeFromPath(pathname: string): ThemeKey {
  if (pathname.startsWith("/noir-aura")) return THEMES.NOIR;
  if (pathname.startsWith("/nail-milky")) return THEMES.MILKY;
  return THEMES.DEFAULT;
}

export default function ThemeController() {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const theme = getThemeFromPath(pathname);

    // ✅ 毎回「正解の状態に強制」する（残りバグを潰す）
    html.classList.remove("noir-theme", "nail-milky-theme");
    body.classList.remove("noir", "nail-milky");

    if (theme === THEMES.NOIR) {
      html.classList.add("noir-theme");
      body.classList.add("noir");
    } else if (theme === THEMES.MILKY) {
      html.classList.add("nail-milky-theme");
      body.classList.add("nail-milky");
    }

    // ✅ 変な inline style が残って背景が固定化するのを防ぐ
    body.style.background = "";
    body.style.color = "";
    html.style.background = "";
    html.style.color = "";
  }, [pathname]);

  return null;
}