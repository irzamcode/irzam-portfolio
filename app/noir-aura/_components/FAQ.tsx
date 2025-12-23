export default function FAQ() {
  const faqs = [
    { q: "当日の予約はできますか？", a: "空きがあれば可能です。まずはLINEで希望時間を送ってください（デモ）。" },
    { q: "料金はどこまで確定ですか？", a: "表示は目安です。髪の長さ・履歴・希望で変動するため、事前に目安を提示します。" },
    { q: "キャンセル規定は？", a: "実運用では「前日/当日キャンセル」ルールを明記するとトラブルが減ります（デモ）。" },
  ];

  return (
    <section id="faq" className="py-16 bg-black">
      <div className="noir-container">
        <div className="noir-kicker">FAQ</div>
        <h2 className="noir-h2 mt-2">安心材料（不安を潰す）</h2>

        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="noir-card p-5">
              <summary className="cursor-pointer text-[16px] tracking-[0.08em] text-white/85">
                {f.q}
              </summary>
              <p className="mt-3 text-white/70 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}