type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: "IRZAM Portfolio",
    description: "デザインと読みやすさを両立したポートフォリオ。スマホ最優先で設計。",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    href: "https://irzam-portfolio-mocha.vercel.app/",
  },
  {
    title: "Project 2（準備中）",
    description: "次の制作物。完成したらリンクと説明を差し替え。",
    tags: ["Coming soon"],
  },
];

const services = [
  {
    title: "UI/UX設計",
    desc: "“高く見える”余白と階層設計。見た目だけでなく、導線まで整えます。",
  },
  {
    title: "フロント実装",
    desc: "Next.js / TypeScript中心。速度・保守性・再利用性を意識して作ります。",
  },
  {
    title: "改善・運用",
    desc: "公開後の改善（文章/構成/速度）まで。成果に寄せて育てます。",
  },
];

export default function Home() {
  return (
    <main id="top">
      {/* HERO */}
      <section style={{ paddingTop: 44, paddingBottom: 28 }}>
        <div className="container-safe">
          <div className="glass-strong" style={{ padding: 26, position: "relative", overflow: "hidden" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-40px",
                background:
                  "radial-gradient(700px 260px at 20% 10%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(520px 260px at 90% 30%, rgba(236,72,153,0.14), transparent 60%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative" }}>
              <div className="pill" style={{ width: "fit-content" }}>
                <span style={{ fontWeight: 700 }}>Available</span>
                <span style={{ color: "rgba(11,13,18,0.62)" }}>小さめ案件 / 継続もOK</span>
              </div>

              <h1
                style={{
                  marginTop: 18,
                  fontSize: 40,
                  lineHeight: 1.12,
                  letterSpacing: "-0.03em",
                  fontWeight: 800,
                }}
                className="sm:text-5xl"
              >
                上品で、速くて、<br className="hidden sm:block" />
                成果につながるWeb。
              </h1>

              <p style={{ marginTop: 14, color: "rgba(11,13,18,0.70)", lineHeight: 1.85, maxWidth: 740 }}>
                Next.js / TypeScript を軸に、デザイン〜実装〜改善まで一貫対応。
                「安っぽい」「伝わらない」を、“任せたくなる形”に整えます。
              </p>

              <div style={{ marginTop: 18 }} className="flex flex-wrap gap-10">
                <a href="#projects" className="btn btn-primary">
                  作品を見る
                  <span className="kbd">Projects</span>
                </a>
                <a href="#contact" className="btn">
                  相談する
                  <span className="kbd">Contact</span>
                </a>

                <div className="flex flex-wrap items-center gap-8" style={{ color: "rgba(11,13,18,0.64)" }}>
                  <span className="pill">Next.js</span>
                  <span className="pill">TypeScript</span>
                  <span className="pill">Tailwind</span>
                  <span className="pill">Vercel</span>
                </div>
              </div>
            </div>
          </div>

          {/* MINI METRICS */}
          <div className="grid sm:grid-cols-3 gap-12" style={{ marginTop: 18 }}>
            <div className="glass" style={{ padding: 18 }}>
              <div style={{ fontWeight: 800, fontSize: 14, letterSpacing: "0.06em" }}>QUALITY</div>
              <div style={{ marginTop: 8, color: "rgba(11,13,18,0.70)", lineHeight: 1.75 }}>
                余白と階層で“高く見える”。<br />
                導線まで整えて成約率を上げる。
              </div>
            </div>
            <div className="glass" style={{ padding: 18 }}>
              <div style={{ fontWeight: 800, fontSize: 14, letterSpacing: "0.06em" }}>SPEED</div>
              <div style={{ marginTop: 8, color: "rgba(11,13,18,0.70)", lineHeight: 1.75 }}>
                速く作って、品質も担保。<br />
                “今すぐ欲しい”に強い。
              </div>
            </div>
            <div className="glass" style={{ padding: 18 }}>
              <div style={{ fontWeight: 800, fontSize: 14, letterSpacing: "0.06em" }}>MOBILE</div>
              <div style={{ marginTop: 8, color: "rgba(11,13,18,0.70)", lineHeight: 1.75 }}>
                スマホ最優先で設計。<br />
                見やすく、迷わないUIへ。
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-safe" style={{ marginTop: 18, marginBottom: 10 }}>
        <div className="hr-soft" />
      </div>

      {/* SERVICES */}
      <section id="services" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div className="container-safe">
          <div className="flex items-end justify-between gap-12 flex-wrap">
            <div>
              <div style={{ fontWeight: 900, letterSpacing: "0.10em", fontSize: 12, color: "rgba(11,13,18,0.60)" }}>
                SERVICES
              </div>
              <h2 style={{ marginTop: 8, fontSize: 28, fontWeight: 850, letterSpacing: "-0.02em" }}>
                できること（案件向けに強い形）
              </h2>
            </div>

            <div className="pill" style={{ color: "rgba(11,13,18,0.70)" }}>
              相談 → 構成案 → 制作 → 公開 → 改善
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-12" style={{ marginTop: 16 }}>
            {services.map((s) => (
              <div key={s.title} className="glass" style={{ padding: 20 }}>
                <div style={{ fontWeight: 800, fontSize: 16 }}>{s.title}</div>
                <p style={{ marginTop: 10, color: "rgba(11,13,18,0.70)", lineHeight: 1.85 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ paddingTop: 18, paddingBottom: 24 }}>
        <div className="container-safe">
          <div className="flex items-end justify-between gap-12 flex-wrap">
            <div>
              <div style={{ fontWeight: 900, letterSpacing: "0.10em", fontSize: 12, color: "rgba(11,13,18,0.60)" }}>
                PROJECTS
              </div>
              <h2 style={{ marginTop: 8, fontSize: 28, fontWeight: 850, letterSpacing: "-0.02em" }}>
                Selected works
              </h2>
            </div>
            <a href="#contact" className="btn">
              依頼の相談をする
            </a>
          </div>

          <div className="grid gap-12" style={{ marginTop: 16 }}>
            {projects.map((p) => (
              <div key={p.title} className="glass" style={{ padding: 20 }}>
                <div className="flex items-start justify-between gap-12 flex-wrap">
                  <div style={{ minWidth: 240 }}>
                    <div style={{ fontWeight: 850, fontSize: 18 }}>{p.title}</div>
                    <p style={{ marginTop: 10, color: "rgba(11,13,18,0.70)", lineHeight: 1.85 }}>
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-8" style={{ marginTop: 12 }}>
                      {p.tags.map((t) => (
                        <span key={t} className="pill" style={{ fontSize: 12 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-10">
                    {p.href ? (
                      <a className="btn btn-primary" href={p.href} target="_blank" rel="noreferrer">
                        Open
                        <span className="kbd">Live</span>
                      </a>
                    ) : (
                      <span className="pill" style={{ color: "rgba(11,13,18,0.65)" }}>
                        準備中
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ paddingTop: 18, paddingBottom: 24 }}>
        <div className="container-safe">
          <div className="glass" style={{ padding: 22 }}>
            <div style={{ fontWeight: 900, letterSpacing: "0.10em", fontSize: 12, color: "rgba(11,13,18,0.60)" }}>
              ABOUT
            </div>
            <h2 style={{ marginTop: 8, fontSize: 26, fontWeight: 850, letterSpacing: "-0.02em" }}>
              何者で、何を解決できるか
            </h2>

            <p style={{ marginTop: 12, color: "rgba(11,13,18,0.70)", lineHeight: 1.95, maxWidth: 920 }}>
              自己紹介は短く断言 → 根拠（技術 / 経験） → 最後に“何ができるか”の順に。
              「見た目が整っていて信頼できる」「速くて運用しやすい」サイトを作ります。
            </p>

            <div className="grid sm:grid-cols-3 gap-12" style={{ marginTop: 16 }}>
              <div className="glass" style={{ padding: 18 }}>
                <div style={{ fontWeight: 800 }}>デザイン調整</div>
                <div style={{ marginTop: 8, color: "rgba(11,13,18,0.70)", lineHeight: 1.85 }}>
                  余白・階層・文章の温度感を整えて“高級感”を作る。
                </div>
              </div>
              <div className="glass" style={{ padding: 18 }}>
                <div style={{ fontWeight: 800 }}>実装品質</div>
                <div style={{ marginTop: 8, color: "rgba(11,13,18,0.70)", lineHeight: 1.85 }}>
                  速度 / 保守性 / 再利用性を意識して、次の改善がしやすい構造に。
                </div>
              </div>
              <div className="glass" style={{ padding: 18 }}>
                <div style={{ fontWeight: 800 }}>導線設計</div>
                <div style={{ marginTop: 8, color: "rgba(11,13,18,0.70)", lineHeight: 1.85 }}>
                  CTA（相談・問い合わせ）までの流れを作って、成果につなげる。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ paddingTop: 18, paddingBottom: 60 }}>
        <div className="container-safe">
          <div className="glass-strong" style={{ padding: 22 }}>
            <div style={{ fontWeight: 900, letterSpacing: "0.10em", fontSize: 12, color: "rgba(11,13,18,0.60)" }}>
              CONTACT
            </div>

            <h2 style={{ marginTop: 8, fontSize: 26, fontWeight: 850, letterSpacing: "-0.02em" }}>
              相談 → すぐ提案まで出します。
            </h2>

            <p style={{ marginTop: 10, color: "rgba(11,13,18,0.70)", lineHeight: 1.95, maxWidth: 920 }}>
              「何を作りたいか」「参考サイト」「期限」だけでOK。こちらで構成案（導線）と制作の方向性を出します。
            </p>

            <div className="flex flex-wrap gap-10" style={{ marginTop: 14 }}>
              {/* ここは自分のメールに変えてOK */}
              <a className="btn btn-primary" href="mailto:irzam.code@gmail.com?subject=Website%20Inquiry&body=目的:%0A納期:%0A参考URL:%0A">
                メールで相談
              </a>
              <a className="btn" href="https://github.com/irzamcode" target="_blank" rel="noreferrer">
                GitHubを見る
              </a>
            </div>

            <div className="glass" style={{ padding: 18, marginTop: 16 }}>
              <div style={{ fontWeight: 800 }}>送る内容（このままでOK）</div>
              <ul style={{ marginTop: 10, color: "rgba(11,13,18,0.70)", lineHeight: 2.0, paddingLeft: 18 }}>
                <li>目的：例）店舗サイト / LP / ポートフォリオ改善</li>
                <li>納期：例）1週間 / 2週間</li>
                <li>参考：URL 2〜3個</li>
                <li>短い一言：まずは3行でOK</li>
              </ul>
              <div style={{ marginTop: 10, color: "rgba(11,13,18,0.62)" }}>
                Tip：Projectsは「課題 → 解決 → 成果」で書くほど案件が増えやすい。
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <a href="#projects" style={{ color: "rgba(11,13,18,0.70)", textDecoration: "underline" }}>
                Projectsへ戻る
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}