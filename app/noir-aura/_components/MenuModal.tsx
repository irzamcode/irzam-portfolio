"use client";

import { menu } from "../_data/menu";

export default function MenuModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="noir-modal" role="dialog" aria-modal="true">
      <button className="noir-modal__backdrop" onClick={onClose} aria-label="close" />
      <div className="noir-modal__panel">
        <div className="noir-modal__top">
          <p className="noir-modal__logo">NOIR AURA</p>
          <button className="noir-modal__close" onClick={onClose} aria-label="close">
            ×
          </button>
        </div>

        <div className="noir-modal__body">
          {menu.map((cat) => (
            <div key={cat.title} className="noir-menuBlock">
              <h3 className="noir-menuBlock__title">{cat.title}</h3>
              <ul className="noir-menuList">
                {cat.items.map((it) => (
                  <li key={it.name} className="noir-menuItem">
                    <span className="noir-menuItem__name">{it.name}</span>
                    <span className="noir-menuItem__price">{it.price}</span>
                    {it.note ? <span className="noir-menuItem__note">{it.note}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="noir-modal__note">
            ※価格は目安です。髪の状態・履歴・希望により変動します。施術前に必ず確認します。
          </p>
        </div>
      </div>
    </div>
  );
}