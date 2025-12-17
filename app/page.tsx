const site = {
  brand: "IRZAM Beauty",
  headline: "上品で、速くて、予約・問い合わせに繋がるWeb制作。",
  sub:
    "見た目だけで終わらせない。導線・文章・速度・基本SEO/OGPまでセットで整えて「任せたくなる」サイトに仕上げます。",
  forWho: "美容室 / ネイル / エステ / 眉 / バーバー向け",
  // ↓ここだけあなたの情報に変える
  url: "https://YOUR-VERCEL-DOMAIN.vercel.app",
  contact: {
    lineUrl: "https://lin.ee/XXXXXXXXX", // ←あなたのLINE（仕事用推奨）
    email: "hello@example.com", // ←あなたのメール
    githubUrl: "https://github.com/irzamcode", // ←任意（消してOK）
  },
};

function Icon({ name }: { name: "line" | "mail" | "github" | "spark" | "bolt" | "map" | "seo" }) {
  const common = "w-5 h-5";
  switch (name) {
    case "mail":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" stroke="currentColor" strokeWidth="1.6"/>
          <path d="m6.5 8 5.5 4 5.5-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "github":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.5 1.1 3.1.8.1-.6.3-1 .6-1.2-2.3-.3-4.7-1.2-4.7-5.2 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 4.1-2.4 4.9-4.7 5.2.4.3.7 1 .7 2v3c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "line":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M20 11.3c0 3.8-3.6 6.8-8 6.8-.7 0-1.4-.1-2.1-.2L6.4 20c-.4.2-.9-.1-.8-.6l.4-2.6C4.7 15.6 4 13.6 4 11.3 4 7.5 7.6 4.5 12 4.5s8 3 8 6.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M8.2 11.3h.01M12 11.3h.01M15.8 11.3h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
        </svg>
      );
    case "spark":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2l1.4 6.2L20 10l-6.6 1.8L12 18l-1.4-6.2L4 10l6.6-1.8L12 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        </svg>
      );
    case "bolt":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        </svg>
      );
    case "seo":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M10 4h10v10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M20 4 12 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M6 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" stroke="currentColor" strokeWidth="1.6"/>
        </svg>
      );
    case "map":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M12 12.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.6"/>
        </svg>
      );
  }
}

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/65 border-b" style={{ borderColor: "rgb(var(--line))" }}>
      <div className="containerX flex items-center justify-between py-3">
        <a href="#top" className="font-semibold tracking-tight text-slate-900">
          {site.brand}
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <a href="#services" className="hover:underline">サービス</a>
          <a href="#pricing" className="hover:underline">料金</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="#contact" className="hover:underline">相談</a>
          <a className="btn btnPrimary" href={site.contact.lineUrl} target="_blank" rel="noreferrer">
            <Icon name="line" /> LINEで相談
          </a>
        </nav>

        {/* Mobile menu (JS不要) */}
        <details className="sm:hidden">
          <summary className="btn btnGhost list-none cursor-pointer">Menu</summary>
          <div className="absolute right-4 mt-2 w-[260px] card p-3">
            <div className="flex flex-col gap-2 text-sm">
              <a href="#services" className="btn btnGhost justify-start">サービス</a>
              <a href="#pricing" className="btn btnGhost justify-start">料金</a>
              <a href="#faq" className="btn btnGhost justify-start">FAQ</a>
              <a href="#contact" className="btn btnGhost justify-start">相談</a>
              <a className="btn btnPrimary" href={site.contact.lineUrl} target="_blank" rel="noreferrer">
                <Icon name="line" /> LINEで相談
              </a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

function SectionTitle({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="badge">
        <Icon name="spark" />
        {kicker}
      </div>
      <h2 className="h2 mt-4">{title}</h2>
      {desc ? <p className="p mt-3 max-w-3xl">{desc}</p> : null}
    </div>
  );
}

export default function Page() {
  return (
    <div id="top">
      <Header />

      {/* HERO */}
      <section className="section">
        <div className="containerX">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="badge">{site.forWho}</div>
              <h1 className="h1 mt-4">{site.headline}</h1>
              <p className="p mt-4 max-w-2xl">{site.sub}</p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a className="btn btnPrimary" href={site.contact.lineUrl} target="_blank" rel="noreferrer">
                  <Icon name="line" /> LINEで相談（最短24h提案）
                </a>
                <a className="btn btnGhost" href="#pricing">
                  料金を見る
                </a>
              </div>

              <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="card p-4">
                  <div className="text-xs text-slate-500">初回提案</div>
                  <div className="text-xl font-semibold mt-1">24h〜</div>
                </div>
                <div className="card p-4">
                  <div className="text-xs text-slate-500">最短納期</div>
                  <div className="text-xl font-semibold mt-1">1週間〜</div>
                </div>
                <div className="card p-4">
                  <div className="text-xs text-slate-500">設計</div>
                  <div className="text-xl font-semibold mt-1">導線/速度/SEO</div>
                </div>
                <div className="card p-4">
                  <div className="text-xs text-slate-500">制作</div>
                  <div className="text-xl font-semibold mt-1">Next.js/TS</div>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-4">
                ※ テンプレ貼り付けではなく、あなたのサロンの「予約までの流れ」に合わせて設計します。
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="card p-6">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Icon name="bolt" /> 「予約に繋がる」ために最初に整えること
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-slate-900" /> 1画面で「何ができる/誰向け/次に押す」を固定</li>
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-slate-900" /> 迷わせないCTA（LINE/電話/予約）導線</li>
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-slate-900" /> “高く見える”余白/階層/フォント設計</li>
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-slate-900" /> 速度/基本SEO/OGPで取りこぼしを減らす</li>
                </ul>
                <div className="hrSoft my-6" />
                <div className="text-xs text-slate-500">
                  相談時に「目的（予約増/単価UP/採用）」と「期限」だけ教えてください。そこから最短で設計します。
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="containerX">
          <SectionTitle
            kicker="Services"
            title="サロンで“成果が出る”ために作る内容"
            desc="見た目だけで終わりにしない。予約/問い合わせに繋がる導線・文章・速度までセットで整えます。"
          />

          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-6">
              <div className="flex items-center gap-2 font-semibold">
                <Icon name="map" /> 導線設計
              </div>
              <p className="p mt-3">
                迷わせない構成。LINE/電話/予約の「次の一手」を設計して、取りこぼしを減らします。
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="badge">CTA設計</span>
                <span className="badge">メニュー導線</span>
                <span className="badge">比較/不安つぶし</span>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-2 font-semibold">
                <Icon name="spark" /> 上品に見えるUI
              </div>
              <p className="p mt-3">
                余白・階層・文字サイズ・コントラストを整え、見た瞬間に“ちゃんとしてる”印象へ。
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="badge">高級感</span>
                <span className="badge">読みやすさ</span>
                <span className="badge">スマホ最優先</span>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-2 font-semibold">
                <Icon name="seo" /> 速度/基本SEO
              </div>
              <p className="p mt-3">
                表示が遅いだけで離脱します。速度・基本SEO・OGPまで整えて機会損失を減らします。
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="badge">Core Web Vitals</span>
                <span className="badge">OGP</span>
                <span className="badge">構造化の土台</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <div className="containerX">
          <SectionTitle
            kicker="Pricing"
            title="料金（目安）"
            desc="“安く見えない”提示にしています。まずはStandardを軸に、必要に応じて調整が一番売れます。見積もりは無料。"
          />

          <div className="grid lg:grid-cols-3 gap-4">
            {/* Mini */}
            <div className="card p-6">
              <div className="text-sm font-semibold">Mini（まずは1枚で集客）</div>
              <div className="mt-2 text-4xl font-semibold">¥59,800〜</div>
              <p className="p mt-3">予約/問い合わせ導線を最短で作るプラン。</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>・LP 1ページ（スマホ最適化）</li>
                <li>・LINE/電話/予約への導線設計</li>
                <li>・表示速度・基本SEO</li>
                <li>・納品後の軽微修正 7日</li>
              </ul>
              <a className="btn btnPrimary w-full mt-6" href={site.contact.lineUrl} target="_blank" rel="noreferrer">
                <Icon name="line" /> このプランで相談
              </a>
              <div className="text-xs text-slate-500 mt-3">
                ※価格は内容/ページ数/素材の揃い具合で調整
              </div>
            </div>

            {/* Standard */}
            <div className="card p-6 border-2" style={{ borderColor: "rgba(2,6,23,.25)" }}>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Standard（サロンの定番）</div>
                <span className="badge">人気</span>
              </div>
              <div className="mt-2 text-4xl font-semibold">¥148,000〜</div>
              <p className="p mt-3">“信用が伝わる”構成で、予約に繋げるサイト。</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>・トップ＋下層（例：メニュー/スタッフ/アクセス/FAQ）</li>
                <li>・Googleマップ/営業時間/電話/LINE導線</li>
                <li>・表示速度・基本SEO・OGP</li>
                <li>・運用しやすい構造（文章差し替え前提）</li>
                <li>・納品後の軽微修正 14日</li>
              </ul>
              <a className="btn btnPrimary w-full mt-6" href={site.contact.lineUrl} target="_blank" rel="noreferrer">
                <Icon name="line" /> Standardで相談
              </a>
              <div className="text-xs text-slate-500 mt-3">
                ※見積もり無料。目的（予約増/単価UP/採用）で設計が変わります
              </div>
            </div>

            {/* Premium */}
            <div className="card p-6">
              <div className="text-sm font-semibold">Premium（売上を作る導線設計）</div>
              <div className="mt-2 text-4xl font-semibold">¥298,000〜</div>
              <p className="p mt-3">比較・不安つぶし・FAQ強化まで含めて“決め手”を作る。</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li>・Standardの全て</li>
                <li>・予約率を上げる導線（比較/不安つぶし/FAQ強化）</li>
                <li>・改善前提の計測準備（例：GAの導入サポート）</li>
                <li>・2ヶ月の改善サポート（軽微）</li>
              </ul>
              <a className="btn btnPrimary w-full mt-6" href={site.contact.lineUrl} target="_blank" rel="noreferrer">
                <Icon name="line" /> Premiumで相談
              </a>
              <div className="text-xs text-slate-500 mt-3">
                ※広告運用や予約システム連携がある場合は要相談
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="containerX">
          <SectionTitle
            kicker="Process"
            title="相談〜公開まで（迷わない進め方）"
            desc="「何を用意すればいい？」を最小化します。まずは目的と期限だけでOK。"
          />

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { t: "① 相談", d: "LINEで目的/期限/参考URL（あれば）を送る" },
              { t: "② 初回提案", d: "構成（導線）と方向性を先に提示" },
              { t: "③ 制作", d: "文章/導線/速度/基本SEOまで一気に整える" },
              { t: "④ 公開", d: "公開後も軽微修正期間で微調整" },
            ].map((x) => (
              <div className="card p-6" key={x.t}>
                <div className="text-sm font-semibold">{x.t}</div>
                <p className="p mt-2">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="containerX">
          <SectionTitle
            kicker="FAQ"
            title="よくある質問"
            desc="不安になりやすいポイントを、先にクリアにします。"
          />

          <div className="grid gap-3">
            {[
              {
                q: "写真や文章がまだ揃っていなくても依頼できますか？",
                a: "大丈夫です。まずは現状の情報で構成（導線）を作り、必要な素材を「優先順」で案内します。先に進めた方が早いです。",
              },
              {
                q: "予約システムは入れられますか？",
                a: "可能です。今使っている予約サービス（ホットペッパー/LINE予約/外部予約）に合わせて、離脱しにくい導線で組みます。",
              },
              {
                q: "納期はどれくらい？",
                a: "内容によりますが、最短1週間〜。素材の揃い具合で変わります。急ぎの場合もまず相談してください。",
              },
              {
                q: "修正はどこまで？",
                a: "プラン内の軽微修正は期間内で対応します。構成の大幅変更や新規ページ追加は別見積もりになります。",
              },
            ].map((x) => (
              <details key={x.q} className="card p-5">
                <summary className="cursor-pointer font-semibold">{x.q}</summary>
                <p className="p mt-3">{x.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="containerX">
          <SectionTitle
            kicker="Contact"
            title="相談 → すぐ提案まで出します"
            desc="まずはこのまま送ってOK。「目的 / 期限 / 参考URL」があると最速で提案できます。"
          />

          <div className="grid lg:grid-cols-2 gap-4">
            <div className="card p-6">
              <div className="text-sm font-semibold">連絡手段</div>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a className="btn btnPrimary flex-1" href={site.contact.lineUrl} target="_blank" rel="noreferrer">
                  <Icon name="line" /> LINEで相談
                </a>
                <a className="btn btnGhost flex-1" href={`mailto:${site.contact.email}`}>
                  <Icon name="mail" /> メール
                </a>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                ※Instagram/Xは「運用が固まってから」追加でOK（今は出さない方が信頼が落ちない）
              </div>

              {site.contact.githubUrl ? (
                <div className="mt-4">
                  <a className="btn btnGhost w-full" href={site.contact.githubUrl} target="_blank" rel="noreferrer">
                    <Icon name="github" /> GitHub（技術の証明）
                  </a>
                </div>
              ) : null}
            </div>

            <div className="card p-6">
              <div className="text-sm font-semibold">送る内容（コピペOK）</div>
              <div className="mt-4 rounded-xl border bg-white/70 p-4 text-sm text-slate-700" style={{ borderColor: "rgb(var(--line))" }}>
                <div className="font-semibold">目的</div>
                <div className="text-slate-600">例）予約を増やしたい / 単価UP / 採用を強くしたい</div>
                <div className="mt-3 font-semibold">納期</div>
                <div className="text-slate-600">例）1週間 / 2週間 / できるだけ早く</div>
                <div className="mt-3 font-semibold">参考URL（あれば）</div>
                <div className="text-slate-600">例）雰囲気が近いサイトを2〜3個</div>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                こちらから「構成（導線）→文章→デザイン」の順で提案します。迷いを減らして早く決められます。
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="containerX text-xs text-slate-500">
          © {new Date().getFullYear()} {site.brand}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
