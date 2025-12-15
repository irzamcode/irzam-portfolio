export default function Page() {
  // ★ここだけ自分用に変えてOK
  const EMAIL = "irzam.code@gmail.com"; // ←自分の連絡先
  const GITHUB = "https://github.com/irzamcode";

  return (
    <>
      {/* HERO */}
      <section className="section">
        <div className="container">
          <div className="grid2">
            <div>
              <div className="flex flex-wrap gap-2" style={{ marginBottom: 18 }}>
                <span className="pill">上品 / 速い / 成果につながる</span>
                <span className="pill">Next.js / TypeScript / Tailwind</span>
              </div>

              <h1 className="h1" style={{ fontFamily: "var(--font-serif)" }}>
                上品で、速くて、成果につながるWeb制作。
              </h1>

              <p className="sub" style={{ marginTop: 16, maxWidth: 640 }}>
                見た目の高級感だけでなく、<b>導線</b>・<b>読みやすさ</b>・<b>速度</b>まで設計して、
                「任せたくなる」サイトに整えます。小さめの案件から継続までOK。
              </p>

              <div className="flex flex-wrap gap-3" style={{ marginTop: 22 }}>
                <a className="btn btnPrimary" href={`mailto:${EMAIL}?subject=Web%E5%88%B6%E4%BD%9C%E7%9B%B8%E8%AB%87`}>
                  相談する（メール）
                </a>
                <a className="btn" href="#projects">
                  作品を見る
                </a>
                <a className="btn" href={GITHUB} target="_blank" rel="noreferrer">
                  GitHubを見る
                </a>
              </div>

              <div className="flex flex-wrap gap-2" style={{ marginTop: 18 }}>
                <span className="chip">LP / コーポレート</span>
                <span className="chip">ポートフォリオ改善</span>
                <span className="chip">UI改修 / 速度改善</span>
                <span className="chip">スマホ最優先</span>
              </div>
            </div>

            {/* Right side card */}
            <div className="glass" style={{ padding: 18 }}>
              <div className="softGrid">
                <div className="card" style={{ padding: 18 }}>
                  <div className="h2">提案までが速い</div>
                  <p className="sub" style={{ marginTop: 8 }}>
                    目的・参考サイト・期限だけでOK。構成と方向性を先に出して、迷いを減らします。
                  </p>
                </div>

                <div className="card" style={{ padding: 18 }}>
                  <div className="h2">“高級に見える”作り</div>
                  <p className="sub" style={{ marginTop: 8 }}>
                    余白 / 階層 / 文字サイズ / コントラストを整えて、見た瞬間にプロ感を出します。
                  </p>
                </div>

                <div className="card" style={{ padding: 18 }}>
                  <div className="h2">運用しやすい設計</div>
                  <p className="sub" style={{ marginTop: 8 }}>
                    追加・修正がしやすい構造に。将来の更新コストも下げます。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hr" style={{ marginTop: 54 }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section" style={{ paddingTop: 34 }}>
        <div className="container">
          <div className="grid2">
            <div>
              <h2 className="h2" style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>
                About
              </h2>
              <p className="sub" style={{ marginTop: 12 }}>
                自己紹介は短く断言 → 根拠（技術/経験）→ 最後に「何ができるか」の順に。
                “ちゃんとできそう”が伝わる文章に寄せています。
              </p>

              <div className="softGrid" style={{ marginTop: 16 }}>
                <div className="card" style={{ padding: 18 }}>
                  <div className="h2">UI / UX デザイン</div>
                  <p className="sub" style={{ marginTop: 8 }}>
                    余白・階層・読みやすさで「高く見える」UIを作ります。
                  </p>
                </div>

                <div className="card" style={{ padding: 18 }}>
                  <div className="h2">フロントエンド実装</div>
                  <p className="sub" style={{ marginTop: 8 }}>
                    Next.jsで高速・保守しやすい構造。スマホ最優先で作ります。
                  </p>
                </div>

                <div className="card" style={{ padding: 18 }}>
                  <div className="h2">速度 / SEOの基礎</div>
                  <p className="sub" style={{ marginTop: 8 }}>
                    表示速度・構造・読み込みの最適化で離脱を減らします。
                  </p>
                </div>
              </div>
            </div>

            <div className="glass" style={{ padding: 18 }}>
              <div className="h2" style={{ marginBottom: 10 }}>
                進め方（最短4ステップ）
              </div>

              <div className="softGrid">
                {[
                  ["01 ヒアリング", "目的 / ターゲット / 参考サイトを確認"],
                  ["02 構成提案", "ワイヤーや見出し構造で導線を固める"],
                  ["03 実装", "Next.jsで高速に制作、品質も担保"],
                  ["04 仕上げ", "文言・余白・速度を調整して完成度を上げる"],
                ].map(([t, d]) => (
                  <div key={t} className="cardSoft" style={{ padding: 16 }}>
                    <div style={{ fontWeight: 650 }}>{t}</div>
                    <div className="sub" style={{ marginTop: 6 }}>
                      {d}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 14 }} className="muted text-sm">
                ※「短いほどプロ」：まずは3行の要件からでもOK。
              </div>
            </div>
          </div>

          <div className="hr" style={{ marginTop: 54 }} />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section" style={{ paddingTop: 34 }}>
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <h2 className="h2" style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>
              Projects
            </h2>
            <div className="muted text-sm">Selected works</div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 18,
              marginTop: 18,
            }}
            className="max-[900px]:grid-cols-1"
          >
            <div className="card" style={{ padding: 18 }}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="h2">IRZAM Portfolio</div>
                  <div className="sub" style={{ marginTop: 6 }}>
                    “高級感 + 読みやすさ”を両立した、案件獲得用のポートフォリオ。
                  </div>
                </div>
                <a className="btn" href="/" style={{ height: 40, padding: "0 14px" }}>
                  Open
                </a>
              </div>

              <div className="flex flex-wrap gap-2" style={{ marginTop: 14 }}>
                <span className="chip">Next.js</span>
                <span className="chip">TypeScript</span>
                <span className="chip">Tailwind</span>
                <span className="chip">Vercel</span>
              </div>
            </div>

            <div className="card" style={{ padding: 18 }}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="h2">Project 2（準備中）</div>
                  <div className="sub" style={{ marginTop: 6 }}>
                    次の制作物。完成したらリンクと説明を差し替え。
                  </div>
                </div>
                <span className="pill" style={{ fontSize: 12 }}>
                  Coming soon
                </span>
              </div>

              <div className="flex flex-wrap gap-2" style={{ marginTop: 14 }}>
                <span className="chip">LP</span>
                <span className="chip">UI改善</span>
                <span className="chip">速度改善</span>
              </div>
            </div>
          </div>

          <div className="hr" style={{ marginTop: 54 }} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section" style={{ paddingTop: 34 }}>
        <div className="container">
          <div className="glass" style={{ padding: 22 }}>
            <div className="grid2">
              <div>
                <h2 className="h2" style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>
                  Contact
                </h2>
                <p className="sub" style={{ marginTop: 12 }}>
                  相談 → すぐ提案まで出します。<br />
                  「何を作りたいか」「参考サイト」「期限」だけでOK。
                </p>

                <div className="flex flex-wrap gap-3" style={{ marginTop: 16 }}>
                  <a className="btn btnPrimary" href={`mailto:${EMAIL}?subject=Web%E5%88%B6%E4%BD%9C%E7%9B%B8%E8%AB%87`}>
                    メールで相談
                  </a>
                  <a className="btn" href={GITHUB} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>

                <div className="muted text-sm" style={{ marginTop: 12 }}>
                  ※ SNSは「投稿がしっかりあるなら」入れると強い。<br />
                  まだ薄いなら、まずは <b>メール / GitHub</b> でOK。
                </div>
              </div>

              <div className="card" style={{ padding: 18 }}>
                <div style={{ fontWeight: 650 }}>送る内容（このままでOK）</div>
                <div className="softGrid" style={{ marginTop: 10 }}>
                  <div className="cardSoft" style={{ padding: 14 }}>
                    <div style={{ fontWeight: 650 }}>目的</div>
                    <div className="sub" style={{ marginTop: 6 }}>
                      例）店舗サイト / LP / ポートフォリオ改善
                    </div>
                  </div>
                  <div className="cardSoft" style={{ padding: 14 }}>
                    <div style={{ fontWeight: 650 }}>納期</div>
                    <div className="sub" style={{ marginTop: 6 }}>
                      例）1週間 / 2週間
                    </div>
                  </div>
                  <div className="cardSoft" style={{ padding: 14 }}>
                    <div style={{ fontWeight: 650 }}>参考URL</div>
                    <div className="sub" style={{ marginTop: 6 }}>
                      例）URL 2〜3個（近い雰囲気でOK）
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="muted text-sm" style={{ marginTop: 18 }}>
            Tip：Projectsは「課題 → 解決 → 成果」で書くほど案件が増えやすい。
          </div>
        </div>
      </section>
    </>
  );
}