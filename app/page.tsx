// app/page.tsx
// NOTE: Server Component (default). No onClick / no useState. Safe for Next.js App Router.

const SITE = {
  brand: "IRZAM",
  tagline: "上品で、速くて、成果につながるWeb制作。",
  sub: "Next.js / TypeScriptを軸に、見た目の高級感だけでなく、導線・読みやすさ・運用性まで設計して「任せたくなる」サイトに整えます。",
  availability: "Available for small freelance / 継続もOK",
  primaryCta: "相談する（メール）",
  secondaryCta: "作品を見る",
  githubCta: "GitHubを見る",
  email: "irzam.code@gmail.com", // ←あなたのメールに変えてOK
  github: "https://github.com/irzamcode",
  // Instagram / X は「投稿が育ってから」でもOK。入れるならここにURLを入れるだけで反映できる。
  instagram: "", // 例: "https://www.instagram.com/xxxxx/"
  x: "", // 例: "https://x.com/xxxxx"
  linkedin: "", // 例: "https://www.linkedin.com/in/xxxxx/"
};

type Project = {
  title: string;
  desc: string;
  tags: string[];
  href?: string; // 公開したらURLを入れる
  status?: "live" | "soon";
};

const PROJECTS: Project[] = [
  {
    title: "IRZAM Portfolio",
    desc: "“高級感 + 読みやすさ” を両立した、案件獲得用ポートフォリオ。",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    href: "https://irzam-portfolio-mocha.vercel.app/",
    status: "live",
  },
  {
    title: "Beauty Landing Page（準備中）",
    desc: "美容サロン向け：予約/問い合わせが増える導線のLP（デモ制作）。",
    tags: ["LP", "UI改善", "導線設計"],
    status: "soon",
  },
];

const SERVICES = [
  {
    title: "上品に見える設計",
    desc: "余白・階層・文字サイズ・コントラストを整えて、見た瞬間に“プロ感”が出るUIへ。",
  },
  {
    title: "速くて読みやすい実装",
    desc: "Next.jsで高速表示。スマホ最優先で崩れない・迷わない設計にします。",
  },
  {
    title: "運用しやすい構造",
    desc: "追加・修正がしやすい形に。将来の更新コストも下げます。",
  },
] as const;

const PROCESS = [
  { step: "01", title: "ヒアリング", desc: "目的 / ターゲット / 参考サイトを確認" },
  { step: "02", title: "構成提案", desc: "ワイヤーや見出し構造で導線を固める" },
  { step: "03", title: "実装", desc: "Next.jsで高速に制作、品質も担保" },
  { step: "04", title: "仕上げ", desc: "文言・余白・速度を調整して完成度を上げる" },
] as const;

function clsx(...v: Array<string | false | null | undefined>) {
  return v.filter(Boolean).join(" ");
}

function SocialLinks() {
  const links = [
    SITE.github ? { label: "GitHub", href: SITE.github } : null,
    SITE.linkedin ? { label: "LinkedIn", href: SITE.linkedin } : null,
    SITE.instagram ? { label: "Instagram", href: SITE.instagram } : null,
    SITE.x ? { label: "X", href: SITE.x } : null,
  ].filter(Boolean) as Array<{ label: string; href: string }>;

  if (links.length === 0) return null;

  return (
    <div className="footer-links">
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="footer-link">
          {l.label}
        </a>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      {/* Top bar */}
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#top" className="brand" aria-label="Go to top">
            {SITE.brand}
          </a>

          <div className="topbar-badge">{SITE.availability}</div>

          <nav className="topnav" aria-label="Primary">
            <a className="topnav-link" href="#about">
              About
            </a>
            <a className="topnav-link" href="#projects">
              Projects
            </a>
            <a className="topnav-link" href="#contact">
              Contact
            </a>
            <a className="topnav-link" href={SITE.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="section hero">
        <div className="container hero-inner">
          <div className="kicker">上品 / 速い / 成果につながる</div>

          <h1 className="hero-title">{SITE.tagline}</h1>
          <p className="hero-sub">{SITE.sub}</p>

          <div className="hero-cta">
            <a className="btn btn-primary" href={`mailto:${SITE.email}?subject=Web制作の相談`}>
              {SITE.primaryCta}
            </a>
            <a className="btn btn-ghost" href="#projects">
              {SITE.secondaryCta}
            </a>
            <a className="btn btn-soft" href={SITE.github} target="_blank" rel="noreferrer">
              {SITE.githubCta}
            </a>
          </div>

          <div className="chips">
            <span className="chip">LP / コーポレート</span>
            <span className="chip">美容サロン向け</span>
            <span className="chip">UI改善 / 速度改善</span>
            <span className="chip">スマホ最優先</span>
          </div>

          <div className="card hero-card">
            <div className="hero-card-title">提案までが速い</div>
            <p className="hero-card-text">
              「何を作りたいか」「参考サイト」「期限」だけでOK。構成（導線）と制作の方向性を先に出して、迷いを減らします。
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="grid3">
            {SERVICES.map((s) => (
              <div key={s.title} className="card service-card">
                <div className="card-title">{s.title}</div>
                <p className="card-text">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">About</h2>
            <p className="muted">
              自己紹介は短く「断言 → 根拠（技術/経験） → 最後に“何ができるか”」の順に。ちゃんとできそうが伝わる文章に寄せています。
            </p>
          </div>

          <div className="grid2">
            <div className="card">
              <div className="card-title">UI / UX デザイン</div>
              <p className="card-text">余白・階層・読みやすさで「高く見える」UIを作ります。</p>
            </div>
            <div className="card">
              <div className="card-title">フロントエンド実装</div>
              <p className="card-text">Next.jsで高速・保守しやすい構造。スマホ最優先で作ります。</p>
            </div>
            <div className="card">
              <div className="card-title">速度 / SEO の基礎</div>
              <p className="card-text">表示速度・構造・読み込み最適化で離脱を減らします。</p>
            </div>
            <div className="card">
              <div className="card-title">導線設計</div>
              <p className="card-text">CTA（相談・問い合わせ）までの流れを作って、成果につなげます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">進め方（最短4ステップ）</h2>
            <p className="muted">短いほどプロ。まずは3行の要件からでもOK。</p>
          </div>

          <div className="process">
            {PROCESS.map((p) => (
              <div key={p.step} className="process-row">
                <div className="process-step">{p.step}</div>
                <div className="process-body">
                  <div className="process-title">{p.title}</div>
                  <div className="process-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-head row-between">
            <div>
              <h2 className="h2">Projects</h2>
              <p className="muted">Selected works / “課題 → 解決 → 成果”で書くほど、案件が増えやすい。</p>
            </div>
          </div>

          <div className="grid2">
            {PROJECTS.map((p) => {
              const isSoon = p.status === "soon";
              return (
                <div key={p.title} className="card project-card">
                  <div className="project-head">
                    <div className="project-title">{p.title}</div>

                    {isSoon ? (
                      <span className="pill">Coming soon</span>
                    ) : (
                      <a className="btn btn-mini" href={p.href} target="_blank" rel="noreferrer">
                        Open
                      </a>
                    )}
                  </div>

                  <p className="card-text">{p.desc}</p>

                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {isSoon ? (
                    <div className="muted small mt8">
                      ※制作中：完成後にリンクと説明を差し替えます。
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Contact</h2>
            <p className="muted">相談 → すぐ提案まで出します。「目的」「参考サイト」「期限」だけでOK。</p>
          </div>

          <div className="grid2">
            <div className="card">
              <div className="card-title">まずはこのまま送ってOK</div>
              <div className="template">
                <div className="template-row">
                  <div className="template-key">目的</div>
                  <div className="template-val">例）美容サロンのLP / 店舗サイト / ポートフォリオ改善</div>
                </div>
                <div className="template-row">
                  <div className="template-key">期限</div>
                  <div className="template-val">例）1週間 / 2週間</div>
                </div>
                <div className="template-row">
                  <div className="template-key">参考URL</div>
                  <div className="template-val">例）URL 2〜3個（近い雰囲気でOK）</div>
                </div>
              </div>

              <div className="muted small mt12">
                Tip：Projectsは「課題 → 解決 → 成果」で書くほど、案件が増えやすい。
              </div>
            </div>

            <div className="card">
              <div className="card-title">連絡先</div>
              <p className="card-text">
                メールが一番早いです。SNSは投稿が増えてから強くなるので、今はメール/GitHubでOK。
              </p>

              <div className="hero-cta">
                <a className="btn btn-primary" href={`mailto:${SITE.email}?subject=Web制作の相談`}>
                  メールで相談
                </a>
                <a className="btn btn-ghost" href={SITE.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>

              <div className="muted small mt12">
                返信しやすいように「目的・期限・参考URL」を添えて送ってください。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="brand">{SITE.brand}.</div>
            <div className="muted">Clean & premium web experiences. Built with Next.js.</div>
          </div>

          <SocialLinks />

          <div className="footer-copy muted">© {new Date().getFullYear()} {SITE.brand}. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}