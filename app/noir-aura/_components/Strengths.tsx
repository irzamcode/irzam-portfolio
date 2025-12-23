export default function Strengths() {
  const items = [
    { title: "提案力", desc: "骨格・肌・服の雰囲気まで見て “似合う” を言語化。" },
    { title: "持ち", desc: "伸びても崩れにくい設計。次回来店までのストレスを減らす。" },
    { title: "清潔感", desc: "ツール・席・導線。見えないところの安心を徹底。" },
  ];

  return (
    <section id="about" className="py-16 bg-[color:var(--noir-bg)]">
      <div className="noir-container">
        <div className="noir-kicker">INSIDE NOIR AURA</div>
        <h2 className="noir-h2 mt-2">Identity / Technique</h2>

        <p className="mt-4 text-white/70 max-w-[62ch] leading-relaxed">
          “ラグジュアリー” は派手さじゃなく、丁寧さの積み重ね。
          迷いがちなカット・カラーの意思決定を、最短で気持ちよく。
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="noir-card p-5">
              <div className="text-[16px] tracking-[0.12em] font-semibold">{it.title}</div>
              <p className="mt-2 text-white/70 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}