"use client";

import { useEffect, useMemo, useState } from "react";

const NAV = [
  { id: "inside", label: "INSIDE NOIR" },
  { id: "style", label: "HAIR STYLE" },
  { id: "trend", label: "TREND" },
  { id: "salon", label: "SALON" },
  { id: "price", label: "PRICE" },
  { id: "faq", label: "FAQ" },
  { id: "access", label: "ACCESS" },
  { id: "concept", label: "CONCEPT" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

type Props = {
  onReserve: () => void;
};

export default function Header({ onReserve }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <header className="noirHeader">
        <div className="brand">
          <div className="brand__name">NOIR AURA</div>
          <div className="brand__sub">aoyama</div>
        </div>

        <div className="headerActions">
          <button type="button" className="btn btn--ghost" onClick={onReserve}>
            RESERVE
          </button>

          <button
            type="button"
            className="btn btn--solid"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            MENU
          </button>
        </div>
      </header>

      {/* ✅ 外側（背景）を押した時だけ閉じる */}
      <div
        className={`menuOverlay ${open ? "isOpen" : ""}`}
        aria-hidden={!open}
        onClick={(e) => {
          // 背景（overlayそのもの）をクリックした時だけ閉じる
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        {/* 背景は見た目だけ（クリックは overlay が拾う） */}
        <div className="menuBg" aria-hidden />

        <button
          type="button"
          className="menuClose"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        {/* ✅ ここをクリックしても閉じない（クリック伝播を止める） */}
        <nav className="menuNav" onClick={(e) => e.stopPropagation()}>
          {NAV.map((n) => (
            <button
              type="button"
              key={n.id}
              className="menuLink"
              onClick={() => {
                setOpen(false);
                setTimeout(() => scrollToId(n.id), 60);
              }}
            >
              {n.label}
            </button>
          ))}

          <div className="menuDivider" />
          <div className="menuSmall">
            <div>NOIR AURA / AOYAMA</div>
            <div>© {year} NOIR AURA</div>
          </div>
        </nav>
      </div>
    </>
  );
}