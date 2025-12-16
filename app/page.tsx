export default function Page() {
  const tags = [
    "美容サロンLP",
    "メニュー/予約導線",
    "既存サイト改善",
    "スマホ最優先",
    "表示速度/SEO基礎",
  ];

  const services = [
    {
      title: "“高級に見える”UI設計",
      desc: "余白・階層・タイポグラフィで“ちゃんとしてる感”を作り、価格帯を上げられる見た目に整えます。",
    },
    {
      title: "予約につながる導線",
      desc: "メニュー/料金/実績/アクセス/予約ボタンの配置を整理し、迷いを減らして予約率に寄せます。",
    },
    {
      title: "スマホで完結する設計",
      desc: "美容はスマホが主戦場。スクロールの気持ちよさ・読みやすさ・押しやすさに全振りします。",
    },
    {
      title: "運用しやすい構造",
      desc: "追加・修正がしやすい構造に。キャンペーンや新メニュー更新が回るサイトにします。",
    },
  ];

  const process = [
    { step: "01", title: "ヒアリング", desc: "目的 / ターゲット / 参考サイトを確認" },
    { step: "02", title: "構成提案", desc: "見出し・導線・ページ構成を先に固める" },
    { step: "03", title: "実装", desc: "Next.jsで高速に制作、品質も担保" },
    { step: "04", title: "仕上げ", desc: "文言・余白・速度を整えて完成度を上げる" },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "¥59,800〜",
      for: "まずは最低限のLPで反応を見る",
      points: ["1ページLP", "スマホ最適化", "基本SEO/速度調整", "CTA設計（予約/LINE/フォーム）"],
    },
    {
      name: "Standard",
      price: "¥129,800〜",
      for: "“任せたくなる”見た目と導線まで作る",
      points: ["2〜4ページ構成", "メニュー/料金の見せ方最適化", "実績/FAQ/アクセス整備", "運用しやすい構造"],
    },
    {
      name: "Premium",
      price: "¥199,800〜",
      for: "ブランド感を上げて単価を取りにいく",
      points: ["5ページ以上/設計重視", "ビジュアル設計（高級感）", "速度・構造の徹底最適化", "公開後の改善提案（軽め）"],
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="section">
        <div className="container">
          <div className="glass" style={{ padding: 34 }}>
            <div className="kicker">Beauty / Salon Web Design</div>

            <div style={{ height: 10 }} />

            <h1 style={{ fontSize: "clamp(34px, 5vw, 58px)" }}>
              上品で、速くて、<br />
              予約につながるWeb制作。
            </h1>

            <div style={{ height: 14 }} />

            <p className="lead" style={{ maxWidth: 760 }}>
              “高級に見えるデザイン”だけじゃなく、導線・読みやすさ・速度まで整えて、
              <b style={{ color: "var(--text)" }}>「任せたくなる」</b>サイトに仕上げます。
              小さめの改善から継続までOK。
            </p>

            <div style={{ height: 18 }} />

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {/* ↓自分のメールに変える */}
              <a className="btn btn-primary" href="#contact">
                相談する（メール）
              </a>
              <a className="btn" href="#projects">
                作品を見る
              </a>
              <a className="btn btn-ghost" href="https://github.com/irzamcode" target="_blank" rel="noreferrer">
                GitHubを見る ↗
              </a>
            </div>

            <div style={{ height: 18 }} />
            <div className="chips">
              {tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "clamp(26px, 3.6vw, 40px)" }}>Services</h2>
            <p className="lead" style={{ maxWidth: 520 }}>
              美容は「雰囲気」と「予約導線」。この2つを同時に上げます。
            </p>
          </div>

          <div style={{ height: 18 }} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 14,
            }}
          >
            {services.map((s, i) => (
              <div
                key={s.title}
                className="card"
                style={{
                  gridColumn: "span 6",
                  padding: 22,
                }}
              >
                <div className="kicker">0{i + 1}</div>
                <div style={{ height: 8 }} />
                <h3 style={{ fontSize: 18 }}>{s.title}</h3>
                <div style={{ height: 8 }} />
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <style>{`
            @media (max-width: 900px){
              #services .card{ grid-column: span 12 !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <div className="glass" style={{ padding: 28 }}>
            <h2 style={{ fontSize: "clamp(26px, 3.6vw, 40px)" }}>About</h2>
            <div style={{ height: 12 }} />
            <p style={{ maxWidth: 860 }}>
              自己紹介は短く <b style={{ color: "var(--text)" }}>断言 → 根拠（技術/経験）→ 最後に「何ができるか」</b>の順に。
              “ちゃんとできそう”が伝わる文章に寄せています。美容サロンのLP/コーポレート/既存サイト改善など、成果に近いところから作れます。
            </p>

            <div style={{ height: 18 }} />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: 14,
              }}
            >
              {[
                { title: "UI / UX デザイン", desc: "余白・階層・読みやすさで「高く見える」UIを作ります。" },
                { title: "フロントエンド実装", desc: "Next.jsで高速・保守しやすい構造。スマホ最優先で作ります。" },
                { title: "速度 / SEOの基礎", desc: "表示速度・構造・読み込み最適化で離脱を減らします。" },
              ].map((b) => (
                <div key={b.title} className="card" style={{ gridColumn: "span 4", padding: 20 }}>
                  <h3 style={{ fontSize: 16 }}>{b.title}</h3>
                  <div style={{ height: 8 }} />
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>

            <style>{`
              @media (max-width: 900px){
                #about .card{ grid-column: span 12 !important; }
              }
            `}</style>

            <div style={{ height: 18 }} />

            <div className="card" style={{ padding: 20 }}>
              <h3 style={{ fontSize: 16 }}>進め方（最短4ステップ）</h3>
              <div style={{ height: 10 }} />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                  gap: 10,
                }}
              >
                {process.map((p) => (
                  <div key={p.step} className="soft" style={{ gridColumn: "span 3", padding: 14, border: "1px solid var(--line)" }}>
                    <div className="kicker">{p.step}</div>
                    <div style={{ height: 6 }} />
                    <div style={{ fontWeight: 700 }}>{p.title}</div>
                    <div style={{ height: 6 }} />
                    <div style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7 }}>{p.desc}</div>
                  </div>
                ))}
              </div>

              <style>{`
                @media (max-width: 900px){
                  #about .soft{ grid-column: span 12 !important; }
                }
              `}</style>

              <div style={{ marginTop: 12, color: "rgba(15,23,42,.55)", fontSize: 13 }}>
                ※「短いほどプロ」：まずは3行の要件からでもOK。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <h2 style={{ fontSize: "clamp(26px, 3.6vw, 40px)" }}>Projects</h2>
            <p className="lead" style={{ maxWidth: 520 }}>
              “課題 → 解決 → 成果”で書くほど案件が増えやすい（ここは次に一緒に詰めよう）。
            </p>
          </div>

          <div style={{ height: 16 }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 14 }}>
            <div className="glass" style={{ gridColumn: "span 7", padding: 22 }}>
              <div className="kicker">Selected work</div>
              <div style={{ height: 8 }} />
              <h3 style={{ fontSize: 18 }}>IRZAM Portfolio</h3>
              <div style={{ height: 8 }} />
              <p>
                “高級感 + 読みやすさ”を両立した、案件獲得用のポートフォリオ。
                美容サロン向けに「予約導線」と「スマホ体験」を最適化する提案ができます。
              </p>
              <div style={{ height: 14 }} />
              <div className="chips">
                {["Next.js", "TypeScript", "Tailwind", "Vercel"].map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div style={{ height: 16 }} />
              <a className="btn btn-primary" href="#" onClick={(e)=>e.preventDefault()}>
                Open（制作中のため後でリンク差し替え）
              </a>
            </div>

            <div className="card" style={{ gridColumn: "span 5", padding: 22 }}>
              <div className="kicker">Next</div>
              <div style={{ height: 8 }} />
              <h3 style={{ fontSize: 18 }}>Project 2（準備中）</h3>
              <div style={{ height: 8 }} />
              <p>
                美容サロンLP（仮）：メニュー/料金・アクセス・予約導線まで整えた“反応が取れる形”のサンプルを作成予定。
              </p>
              <div style={{ height: 14 }} />
              <div className="chips">
                {["LP", "予約導線", "UI改善"].map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div style={{ height: 16 }} />
              <span className="btn btn-ghost">Coming soon</span>
            </div>
          </div>

          <style>{`
            @media (max-width: 900px){
              #projects .glass{ grid-column: span 12 !important; }
              #projects .card{ grid-column: span 12 !important; }
            }
          `}</style>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="glass" style={{ padding: 28 }}>
            <h2 style={{ fontSize: "clamp(26px, 3.6vw, 40px)" }}>Pricing</h2>
            <div style={{ height: 10 }} />
            <p style={{ maxWidth: 860 }}>
              料金は<b style={{ color: "var(--text)" }}>「ページ数」より「設計の深さ」</b>で変わります。
              まずは目的・参考サイト・期限だけ送ってください。最短で方向性と見積りを出します。
            </p>

            <div style={{ height: 16 }} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 14 }}>
              {pricing.map((p) => (
                <div key={p.name} className="card" style={{ gridColumn: "span 4", padding: 22 }}>
                  <div className="kicker">{p.name}</div>
                  <div style={{ height: 8 }} />
                  <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-.02em" }}>{p.price}</div>
                  <div style={{ height: 6 }} />
                  <div style={{ color: "rgba(15,23,42,.68)", fontSize: 14 }}>{p.for}</div>

                  <div style={{ height: 12 }} />
                  <div style={{ display: "grid", gap: 8 }}>
                    {p.points.map((pt) => (
                      <div key={pt} style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                        <span style={{ width: 6, height: 6, borderRadius: 99, background: "rgba(15,23,42,.55)", marginTop: 7 }} />
                        <span style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <style>{`
              @media (max-width: 900px){
                #pricing .card{ grid-column: span 12 !important; }
              }
            `}</style>

            <div style={{ height: 14 }} />
            <div style={{ color: "rgba(15,23,42,.55)", fontSize: 13 }}>
              ※ 目安です。内容（予約導線/文章作成/写真素材/ページ数）で前後します。
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="glass" style={{ padding: 28 }}>
            <h2 style={{ fontSize: "clamp(26px, 3.6vw, 40px)" }}>Contact</h2>
            <div style={{ height: 10 }} />
            <p style={{ maxWidth: 780 }}>
              相談 → すぐ提案まで出します。<br />
              「何を作りたいか」「参考サイト」「期限」だけでOK。
            </p>

            <div style={{ height: 14 }} />

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {/* ↓自分のメールに変える */}
              <a
                className="btn btn-primary"
                href="mailto:your.email@example.com?subject=Web%E5%88%B6%E4%BD%9C%E7%9B%B8%E8%AB%87&body=%E3%80%90%E7%9B%B8%E8%AB%87%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%80%91%0A%E7%9B%AE%E7%9A%84%EF%BC%9A%0A%E7%B4%8D%E6%9C%9F%EF%BC%9A%0A%E5%8F%82%E8%80%83URL%EF%BC%9A%0A%E4%BA%88%E7%AE%97%EF%BC%9A%EF%BC%88%E4%BB%BB%E6%84%8F%EF%BC%89%0A"
              >
                メールで相談
              </a>
              <a className="btn" href="https://github.com/irzamcode" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>

            <div style={{ height: 12 }} />
            <div style={{ color: "rgba(15,23,42,.62)", fontSize: 13 }}>
              ※ SNSは「投稿がしっかりあるなら」入れると強い。まだ薄いなら、まずは <b style={{ color: "var(--text)" }}>メール / GitHub</b> でOK。
            </div>

            <div style={{ height: 16 }} />

            <div className="card" style={{ padding: 22 }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>送る内容（このままでOK）</div>
              <div style={{ height: 12 }} />

              <div style={{ display: "grid", gap: 10 }}>
                <div className="soft" style={{ padding: 14, border: "1px solid var(--line)" }}>
                  <div style={{ fontWeight: 700 }}>目的</div>
                  <div style={{ color: "var(--muted)", marginTop: 6 }}>例）美容サロンLP / 店舗サイト / 既存サイト改善</div>
                </div>
                <div className="soft" style={{ padding: 14, border: "1px solid var(--line)" }}>
                  <div style={{ fontWeight: 700 }}>納期</div>
                  <div style={{ color: "var(--muted)", marginTop: 6 }}>例）1週間 / 2週間</div>
                </div>
                <div className="soft" style={{ padding: 14, border: "1px solid var(--line)" }}>
                  <div style={{ fontWeight: 700 }}>参考URL</div>
                  <div style={{ color: "var(--muted)", marginTop: 6 }}>例）URL 2〜3個（近い雰囲気でOK）</div>
                </div>
              </div>

              <div style={{ marginTop: 14, color: "rgba(15,23,42,.55)", fontSize: 13 }}>
                Tip：Projectsは「課題 → 解決 → 成果」で書くほど案件が増えやすい。
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
