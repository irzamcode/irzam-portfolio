export default function Access() {
  return (
    <section id="access" className="py-16 bg-[color:var(--noir-bg)]">
      <div className="noir-container">
        <div className="noir-kicker">ACCESS</div>
        <h2 className="noir-h2 mt-2">Aoyama / Omotesando</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="noir-card p-6">
            <div className="text-white/85 tracking-[0.12em]">住所（デモ）</div>
            <p className="mt-3 text-white/70 leading-relaxed">
              東京都港区南青山◯丁目（ダミー）<br />
              表参道駅 A3 徒歩5分 / 青山一丁目 徒歩8分
            </p>

            <div className="mt-5 border-t border-white/10 pt-5 space-y-2 text-white/70">
              <div className="flex justify-between"><span>営業時間</span><span>10:00 - 20:00</span></div>
              <div className="flex justify-between"><span>定休日</span><span>火曜</span></div>
            </div>

            <div className="mt-6 flex gap-3">
              {/* 重いなら埋め込みはやめてリンクだけ、って方針でOK */}
              <a className="noir-btn w-full" href="https://maps.google.com" target="_blank" rel="noreferrer">
                Google Mapを開く
              </a>
              <a className="noir-btn noir-btn-solid w-full" href="#reserve">
                予約（デモ）
              </a>
            </div>
          </div>

          <div className="noir-card p-6">
            <div className="text-white/85 tracking-[0.12em]">連絡（デモ）</div>
            <div className="mt-4 space-y-3 text-white/70">
              <div>LINE：@noiraura（ダミー）</div>
              <div>TEL：03-0000-0000（ダミー）</div>
              <div>WEB：予約ボタンから（ダミー）</div>
            </div>

            <div className="mt-6 text-white/55 text-[12px] leading-relaxed">
              ※実案件なら「キャンセル規定」「遅刻時の扱い」もここに短く入れると成約率が上がる。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}