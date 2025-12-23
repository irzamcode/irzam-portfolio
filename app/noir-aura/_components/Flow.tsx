export default function Flow() {
  const steps = [
    { n: "01", t: "LINE / WEB で相談", d: "希望日時・メニューを送る（デモ）" },
    { n: "02", t: "提案 & 予約確定", d: "施術内容と価格目安を確認" },
    { n: "03", t: "来店 & 施術", d: "不安を潰してからスタート" },
  ];

  return (
    <section id="flow" className="py-16 bg-black">
      <div className="noir-container">
        <div className="noir-kicker">FLOW</div>
        <h2 className="noir-h2 mt-2">Reservation in 3 steps</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="noir-card p-6">
              <div className="text-white/55 tracking-[0.2em]">{s.n}</div>
              <div className="mt-2 text-[18px] tracking-[0.10em]">{s.t}</div>
              <div className="mt-2 text-white/70 leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}