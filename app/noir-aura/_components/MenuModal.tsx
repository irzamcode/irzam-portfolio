"use client";

import type { MenuCategory } from "../_data/menu";

type Props = {
  open: boolean;
  onClose: () => void;
  category: MenuCategory | null; // ✅ これ追加
};

export default function MenuModal({ open, onClose, category }: Props) {
  if (!open || !category) return null;

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true">
      <div className="modalBox">
        <button className="modalClose" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modalHead">
          <div className="modalKicker">PRICE</div>
          <div className="modalTitle">{category.title}</div>
          {category.subtitle ? (
            <div className="modalSub">{category.subtitle}</div>
          ) : null}
        </div>

        <div className="modalList">
          {category.items.map((it) => (
            <div key={it.name} className="modalRow">
              <div className="modalName">
                <div>{it.name}</div>
                {it.note ? <div className="modalNote">{it.note}</div> : null}
              </div>
              <div className="modalPrice">{it.price}</div>
            </div>
          ))}
        </div>

        <div className="modalFoot">
          <div className="modalSmall">
            ※目安。髪の長さ/履歴/希望で変動します（デモ）。
          </div>
        </div>
      </div>
    </div>
  );
}