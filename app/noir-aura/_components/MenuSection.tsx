"use client";

import { useMemo, useState } from "react";
import { menuCategories, MenuCategory } from "../_data/menu";
import MenuModal from "./MenuModal";

export default function MenuSection() {
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState<MenuCategory | null>(null);

  const list = useMemo(() => menuCategories, []);

  return (
    <section id="menu" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="text-xs tracking-[0.35em] text-white/60">PRICE</p>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl tracking-wide">
            Cut Menu / Side Menu
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
            黒×余白の世界観を崩さずに、必要な情報は“静かに強く”。価格は目安（¥○○〜OK）で、
            詳細は来店前に確認→確定にする運用が一番揉めない。
          </p>
        </div>

        <div className="md:col-span-5 md:text-right">
          <a
            href="#reserve"
            className="inline-flex items-center gap-3 border border-white/25 px-5 py-3 text-xs tracking-[0.25em] text-white/80 hover:border-white/60 hover:text-white"
          >
            RESERVATION
            <span className="text-white/50">→</span>
          </a>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10">
        {list.map((c) => (
          <button
            key={c.id}
            onClick={() => {
              setCat(c);
              setOpen(true);
            }}
            className="group flex w-full items-center justify-between border-b border-white/10 py-7 text-left"
          >
            <div>
              <p className="font-[var(--font-display)] text-2xl tracking-wide">{c.title}</p>
              {c.subtitle ? (
                <p className="mt-2 text-xs tracking-[0.2em] text-white/50">{c.subtitle}</p>
              ) : null}
            </div>

            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-white/60 group-hover:text-white">
              VIEW
              <span className="inline-block translate-x-0 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </button>
        ))}
      </div>

      <MenuModal open={open} onClose={() => setOpen(false)} category={cat} />
    </section>
  );
}