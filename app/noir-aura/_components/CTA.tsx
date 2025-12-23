export default function CTA() {
  return (
    <section id="reserve" className="py-16 bg-[color:var(--noir-bg)]">
      <div className="noir-container">
        <div className="noir-card p-8 md:p-10">
          <div className="noir-kicker">RESERVATION</div>
          <h2 className="noir-h2 mt-2">Ready when you are.</h2>
          <p className="mt-4 text-white/70 max-w-[62ch] leading-relaxed">
            予約導線を最短で。実案件ではここを「LINE」「予約フォーム」2本にして成約率を上げる。
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <a className="noir-btn noir-btn-solid" href="#">
              LINE予約（デモ）
            </a>
            <a className="noir-btn" href="#">
              WEB予約（デモ）
            </a>
            <a className="noir-btn" href="#menu">
              メニューを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}