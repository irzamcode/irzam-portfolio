"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  onReserve: () => void;
};

export default function Hero({ onReserve }: Props) {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallax = useMemo(() => Math.min(36, y * 0.06), [y]);

  return (
    <section className="hero" id="top">
      <div
        className="heroMedia"
        style={{ transform: `translate3d(0, ${-parallax}px, 0) scale(1.04)` }}
        aria-hidden
      />

      {/* ✅ 文字用の暗いグラデ（読みやすさの土台） */}
      <div className="heroShade" aria-hidden />

      <div className="heroInner">
        {/* ✅ 読みやすい“ガラス板” */}
        <div className="heroCopy">
          <div className="heroKicker">NOIR AURA / AOYAMA</div>
          <h1 className="heroTitle">Cut &amp; Color that feels like luxury.</h1>

          <p className="heroLead">
            青山・表参道の高単価サロンを想定したデモ。黒×余白×上品さで「高級感」を一瞬で伝える。
          </p>

          <div className="heroMeta">
            <span>本日空き：2枠（デモ）</span>
            <span>所要：90分〜</span>
            <span>当日キャンセル：前日まで無料</span>
          </div>

          {/* ✅ 入らない問題：wrap前提 + モバイルは一部非表示 */}
          <div className="heroTrust">
            <span className="trustPill">指名率 62%（デモ）</span>
            <span className="trustPill">カウンセリング 10分（デモ）</span>
            <span className="trustPill">7日お直し保証（デモ）</span>
          </div>

          <div className="heroCtas">
            <button type="button" className="btn btn--solid" onClick={onReserve}>
              RESERVE
            </button>
            <a className="btn btn--ghost" href="#price">
              VIEW MENU
            </a>
          </div>

          <div className="heroNote">※デモサイト（架空）。写真・店舗情報はサンプルです。</div>
        </div>
      </div>
    </section>
  );
}