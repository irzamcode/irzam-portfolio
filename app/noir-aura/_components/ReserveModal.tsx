"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ReserveModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true" aria-label="Reserve form">
      <div className="modalCard">
        <button className="modalClose" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modalHead">
          <div className="modalTitle">予約フォーム（デモ）</div>
          <div className="modalSub">送信はデモ。入力UIで“実在感”を作る。</div>
        </div>

        <form
          className="reserveForm"
          onSubmit={(e) => {
            e.preventDefault();
            alert("送信しました（デモ）");
            onClose();
          }}
        >
          <div className="rfRow">
            <label className="rfLabel">お名前</label>
            <input className="rfInput" placeholder="例：山田 花子" required />
          </div>

          <div className="rfRow">
            <label className="rfLabel">メニュー</label>
            <select className="rfInput" defaultValue="cut">
              <option value="cut">Cut</option>
              <option value="color">Cut + Color</option>
              <option value="perm">Cut + Perm</option>
              <option value="care">Care / Head spa</option>
            </select>
          </div>

          <div className="rfRow2">
            <div>
              <label className="rfLabel">希望日</label>
              <input className="rfInput" type="date" required />
            </div>
            <div>
              <label className="rfLabel">希望時間</label>
              <select className="rfInput" defaultValue="evening">
                <option value="morning">午前</option>
                <option value="noon">昼</option>
                <option value="evening">夕方</option>
                <option value="night">夜</option>
              </select>
            </div>
          </div>

          <div className="rfRow">
            <label className="rfLabel">要望</label>
            <textarea className="rfInput rfTextarea" placeholder="例：暗めの透明感カラー、顔周りレイヤー…" />
          </div>

          <div className="rfActions">
            <button type="button" className="btn btn--ghost" onClick={onClose}>
              戻る
            </button>
            <button type="submit" className="btn btn--solid">
              送信（デモ）
            </button>
          </div>

          <div className="rfNote">※ このフォームはデモです。実運用時は Googleフォーム / Formspree / Supabase 等に接続。</div>
        </form>
      </div>
    </div>
  );
}