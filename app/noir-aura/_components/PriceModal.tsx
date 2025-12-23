"use client";

type PriceDetail = {
  title: string;
  subtitle?: string;
  items: { name: string; price: string; note?: string }[];
  footnote?: string;
};

export default function PriceModal({
  open,
  onClose,
  detail,
}: {
  open: boolean;
  onClose: () => void;
  detail: PriceDetail | null;
}) {
  if (!open || !detail) return null;

  return (
    <div className="modalWrap" role="dialog" aria-modal="true" aria-label="Price details">
      <button className="modalBackdrop" onClick={onClose} aria-label="Close backdrop" />

      <div className="modalPanel">
        <button className="modalClose" onClick={onClose} aria-label="Close modal">
          ×
        </button>

        <div className="modalHead">
          <div className="modalKicker">PRICE</div>
          <div className="modalTitle">{detail.title}</div>
          {detail.subtitle && <div className="modalSub">{detail.subtitle}</div>}
        </div>

        <div className="modalBody">
          {detail.items.map((it) => (
            <div key={it.name} className="modalRow">
              <div className="modalName">
                {it.name}
                {it.note && <div className="modalMini">{it.note}</div>}
              </div>
              <div className="modalPrice">{it.price}</div>
            </div>
          ))}
          {detail.footnote && <div className="modalFoot">{detail.footnote}</div>}
        </div>
      </div>
    </div>
  );
}