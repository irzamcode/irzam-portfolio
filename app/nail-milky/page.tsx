
// app/nail-milky/page.tsx
"use client";

import Link from "next/link";

const BRAND = "MILKY GLASS NAIL";
const AREA = "Harajuku / Shibuya";

/** 予約導線（あとで本物のURLに差し替え） */
const HOTPEPPER_URL = "https://beauty.hotpepper.jp/"; // 仮
const LINE_URL = "https://line.me/"; // 仮
const INSTAGRAM_URL = "https://www.instagram.com/"; // 仮

/** Access（あとで差し替え） */
const GOOGLE_MAP_URL = "https://maps.google.com/?q=原宿駅"; // 仮
const GOOGLE_MAP_EMBED = "https://www.google.com/maps?q=原宿駅&output=embed"; // 仮

/** Gallery（public/demos/nail-milky/） */
const GALLERY = [
  {
    src: "/demos/nail-milky/g1.webp",
    alt: "Nail design 1",
    tag: "TREND",
    caption: "透明感ミルキー / ちゅるん",
  },
  {
    src: "/demos/nail-milky/g2.webp",
    alt: "Nail design 2",
    tag: "CHROME",
    caption: "ガラス反射 / うるっと光",
  },
  {
    src: "/demos/nail-milky/g3.webp",
    alt: "Nail design 3",
    tag: "3D",
    caption: "ぷっくり / 立体パーツ",
  },
  {
    src: "/demos/nail-milky/g4.webp",
    alt: "Nail design 4",
    tag: "GLASS",
    caption: "ガラスフレンチ / 上品",
  },
];

type MenuItem = {
  name: string;
  price: string;
  note?: string;
};
type MenuCategory = {
  title: string;
  thumb: string;
  badge?: string;
  items: MenuItem[];
};

const MENU: MenuCategory[] = [
  {
    title: "Popular",
    badge: "人気",
    thumb: "/demos/nail-milky/menu-popular.jpg",
    items: [
      { name: "ワンカラー", price: "¥6,600〜", note: "透明感カラー / ちゅるん仕上げOK" },
      { name: "マグネット", price: "¥7,700〜", note: "奥行き感・うるっと光" },
      { name: "持ち込みデザイン", price: "¥9,900〜", note: "画像共有→相談→予約がスムーズ" },
    ],
  },
  {
    title: "Art / Parts",
    badge: "追加",
    thumb: "/demos/nail-milky/menu-art.jpg",
    items: [
      { name: "アート追加（1本）", price: "¥330〜" },
      { name: "パーツ追加", price: "¥110〜" },
      { name: "長さ出し（1本）", price: "¥660〜" },
    ],
  },
  {
    title: "Care",
    badge: "ケア",
    thumb: "/demos/nail-milky/menu-care.jpg",
    items: [
      { name: "オフのみ", price: "¥3,300〜" },
      { name: "ケア（甘皮）", price: "¥2,200〜" },
    ],
  },
];

const STAFF = [
  { name: "Rina", role: "Trend / Long nails", note: "キラッと派手め・盛り得意" },
  { name: "Mio", role: "Milky / Simple", note: "ちゅるん・透明感・上品" },
  { name: "Ayaka", role: "Art / Bring-in", note: "持ち込み再現・相談が早い" },
  { name: "Sara", role: "Glass / French", note: "ガラスフレンチ・細ライン" },
  { name: "Yui", role: "Korean / Cute", note: "韓国っぽ・ぷっくりも" },
  { name: "Nana", role: "Design / Pop", note: "個性派・色合わせが強い" },
];

export default function Page() {
  return (
    <div className="nmShell">
      <main className="nm">
        {/* Header */}
        <header className="nmHeader">
          <div className="nmHeaderInner">
            <div className="nmBrand">
              <div className="nmBrandTop">{BRAND}</div>
              <div className="nmBrandSub">{AREA}</div>
            </div>

            <nav className="nmNav" aria-label="Primary navigation">
              <a className="nmNavLink" href="#menu">MENU</a>
              <a className="nmNavLink" href="#gallery">GALLERY</a>
              <a className="nmNavLink" href="#staff">STAFF</a>
              <a className="nmNavLink" href="#access">ACCESS</a>
            </nav>

            <div className="nmHeaderCtas">
              <Link className="nmBtn nmBtnPrimary" href={HOTPEPPER_URL} target="_blank" rel="noreferrer">
                予約
              </Link>
              <Link className="nmBtn nmBtnGhost" href={LINE_URL} target="_blank" rel="noreferrer">
                LINE相談
              </Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="nmHero" id="top" aria-label="Hero">
          <div className="nmHeroBg" aria-hidden />
          <div className="nmHeroInner">
            <div className="nmPillRow">
              <span className="nmPill">当日OK（デモ）</span>
              <span className="nmPill">持ち込み歓迎</span>
              <span className="nmPill">ミルキー×ガラス</span>
            </div>

            <h1 className="nmHeroTitle">
              Milky × Glass.
              <br />
              “可愛い”が一番似合う指先へ。
            </h1>

            <p className="nmHeroLead">
              迷わせない導線で、予約まで最短。
              <br />
              予約はHOT PEPPER、相談・持ち込みはLINEが早い。
            </p>

            <div className="nmHeroCtas">
              <Link className="nmBtn nmBtnPrimary nmBtnBig" href={HOTPEPPER_URL} target="_blank" rel="noreferrer">
                今すぐ予約（HOT PEPPER）
              </Link>
              <Link className="nmBtn nmBtnGhost nmBtnBig" href={LINE_URL} target="_blank" rel="noreferrer">
                LINEで相談（画像OK）
              </Link>
              <Link className="nmBtn nmBtnText" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagramを見る →
              </Link>
            </div>

            <div className="nmHeroNote">
              ※ デモ：画像・住所・メニューは仮。構造は本番差し替え前提。
            </div>
          </div>
        </section>

        {/* Start here（迷ったらこれ） */}
        <section className="nmSection" aria-label="Start here">
          <div className="nmSectionHead">
            <div className="nmEyebrow">START HERE</div>
            <h2 className="nmH2">迷ったら、これだけ。</h2>
            <p className="nmDesc">
              「予約したい / 相談したい / 雰囲気見たい」— まずは一つ選べばOK。
            </p>
          </div>

          <div className="nmCards3">
            <div className="nmCard">
              <div className="nmCardTitle">空き枠を見て予約</div>
              <div className="nmCardText">最短で予約まで。迷わない入口。</div>
              <div className="nmCardBtns">
                <Link className="nmBtn nmBtnPrimary" href={HOTPEPPER_URL} target="_blank" rel="noreferrer">
                  HOT PEPPERで予約
                </Link>
              </div>
            </div>

            <div className="nmCard">
              <div className="nmCardTitle">画像を送って相談</div>
              <div className="nmCardText">持ち込みの再現・料金目安もスムーズ。</div>
              <div className="nmCardBtns">
                <Link className="nmBtn nmBtnGhost" href={LINE_URL} target="_blank" rel="noreferrer">
                  LINEで相談
                </Link>
              </div>
            </div>

            <div className="nmCard">
              <div className="nmCardTitle">雰囲気で選ぶ</div>
              <div className="nmCardText">好きな質感を見つけて、そのまま予約。</div>
              <div className="nmCardBtns">
                <a className="nmBtn nmBtnGhost" href="#gallery">ギャラリーを見る</a>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <section className="nmMarquee" aria-label="Marquee">
          <div className="nmMarqueeTrack">
            <div className="nmMarqueeRow">
              <span>NAIL</span><i>•</i><span>MILKY</span><i>•</i><span>GLASS</span><i>•</i>
              <span>BRING YOUR DESIGN</span><i>•</i><span>RESERVE</span><i>•</i>
              <span>NAIL</span><i>•</i><span>MILKY</span><i>•</i><span>GLASS</span><i>•</i>
              <span>BRING YOUR DESIGN</span><i>•</i><span>RESERVE</span><i>•</i>
            </div>
            <div className="nmMarqueeRow" aria-hidden>
              <span>NAIL</span><i>•</i><span>MILKY</span><i>•</i><span>GLASS</span><i>•</i>
              <span>BRING YOUR DESIGN</span><i>•</i><span>RESERVE</span><i>•</i>
              <span>NAIL</span><i>•</i><span>MILKY</span><i>•</i><span>GLASS</span><i>•</i>
              <span>BRING YOUR DESIGN</span><i>•</i><span>RESERVE</span><i>•</i>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="nmSection" id="menu" aria-label="Menu">
          <div className="nmSectionHead">
            <div className="nmEyebrow">MENU</div>
            <h2 className="nmH2">メニュー</h2>
            <p className="nmDesc">
              価格は目安。デザイン・長さ・オフ有無で変動します。最短はHOT PEPPER。
            </p>
          </div>

          <div className="nmMenuGrid">
            {MENU.map((cat) => (
              <div key={cat.title} className="nmMenuCard">
                <div className="nmThumb">
                  <img src={cat.thumb} alt={`${cat.title} thumbnail`} loading="lazy" />
                </div>

                <div className="nmMenuBody">
                  <div className="nmMenuTitleRow">
                    <div className="nmMenuTitle">{cat.title}</div>
                    {cat.badge ? <div className="nmBadge">{cat.badge}</div> : null}
                  </div>

                  <ul className="nmMenuList">
                    {cat.items.map((it) => (
                      <li key={it.name} className="nmMenuRow">
                        <div className="nmMenuLeft">
                          <div className="nmMenuName">{it.name}</div>
                          {it.note ? <div className="nmMenuNote">{it.note}</div> : null}
                        </div>
                        <div className="nmMenuPrice">{it.price}</div>
                      </li>
                    ))}
                  </ul>

                  <div className="nmMenuCta">
                    <Link className="nmBtn nmBtnPrimary" href={HOTPEPPER_URL} target="_blank" rel="noreferrer">
                      このメニューで予約
                    </Link>
                    <Link className="nmBtn nmBtnGhost" href={LINE_URL} target="_blank" rel="noreferrer">
                      LINEで相談
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="nmSection" id="gallery" aria-label="Gallery">
          <div className="nmSectionHead">
            <div className="nmEyebrow">GALLERY</div>
            <h2 className="nmH2">雰囲気で選ぶ（横スライド）</h2>
            <p className="nmDesc">好きな質感を決めたら、そのまま予約かLINE相談へ。</p>
          </div>

          <div className="nmSliderWrap">
            <div className="nmSliderHint">Swipe →</div>

            <div className="nmSlider" role="list" aria-label="Nail gallery slider">
              {GALLERY.map((g, i) => (
                <div className="nmSlide" role="listitem" key={g.src + i}>
                  <div className="nmSlideMedia">
                    <img src={g.src} alt={g.alt} loading="lazy" />
                    <div className="nmSlideTag">{g.tag}</div>
                  </div>
                  <div className="nmSlideCaption">{g.caption}</div>
                </div>
              ))}
            </div>

            <div className="nmCenterCta">
              <Link className="nmBtn nmBtnPrimary" href={HOTPEPPER_URL} target="_blank" rel="noreferrer">
                この雰囲気で予約
              </Link>
              <Link className="nmBtn nmBtnGhost" href={LINE_URL} target="_blank" rel="noreferrer">
                画像を送って相談
              </Link>
              <Link className="nmBtn nmBtnText" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram →
              </Link>
            </div>
          </div>
        </section>

        {/* Staff */}
        <section className="nmSection" id="staff" aria-label="Staff">
          <div className="nmSectionHead">
            <div className="nmEyebrow">STAFF</div>
            <h2 className="nmH2">スタッフ</h2>
            <p className="nmDesc">得意が見えると“指名したくなる”。（デモは仮）</p>
          </div>

          <div className="nmStaffGrid">
            {STAFF.map((s) => (
              <div key={s.name} className="nmStaffCard">
                <div className="nmAvatar" aria-hidden />
                <div className="nmStaffName">{s.name}</div>
                <div className="nmStaffRole">{s.role}</div>
                <div className="nmStaffNote">{s.note}</div>
              </div>
            ))}
          </div>

          <div className="nmSmall">
            ※ 本番はスタッフごとにInstagramや指名導線を付けると一気に“実在感”が出る。
          </div>
        </section>

        {/* Access */}
        <section className="nmSection" id="access" aria-label="Access">
          <div className="nmSectionHead">
            <div className="nmEyebrow">ACCESS</div>
            <h2 className="nmH2">アクセス</h2>
            <p className="nmDesc">地図はクリックでGoogle Mapへ。迷わせない。</p>
          </div>

          <div className="nmAccessGrid">
            <a className="nmMapCard" href={GOOGLE_MAP_URL} target="_blank" rel="noreferrer" aria-label="Open Google Maps">
              <div className="nmMapFrame">
                <iframe
                  title="Google Map"
                  src={GOOGLE_MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="nmMapOverlay">
                <div className="nmMapOverlayTitle">Google Mapで開く</div>
                <div className="nmMapOverlaySub">タップで別タブ</div>
              </div>
            </a>

            <div className="nmAccessInfo">
              <div className="nmAccessRow">
                <span>最寄り</span>
                <span>原宿駅 / 渋谷駅（デモ）</span>
              </div>
              <div className="nmAccessRow">
                <span>住所</span>
                <span>東京都渋谷区（デモ）</span>
              </div>
              <div className="nmAccessRow">
                <span>営業時間</span>
                <span>11:00 - 20:00（デモ）</span>
              </div>
              <div className="nmAccessRow">
                <span>補足</span>
                <span>当日枠 / 持ち込み相談OK（デモ）</span>
              </div>

              <div className="nmAccessBtns">
                <Link className="nmBtn nmBtnPrimary" href={HOTPEPPER_URL} target="_blank" rel="noreferrer">
                  予約（HOT PEPPER）
                </Link>
                <Link className="nmBtn nmBtnGhost" href={LINE_URL} target="_blank" rel="noreferrer">
                  LINEで相談
                </Link>
                <Link className="nmBtn nmBtnText" href={GOOGLE_MAP_URL} target="_blank" rel="noreferrer">
                  地図を大きく見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="nmBottomCta" aria-label="Bottom CTA">
          <div className="nmBottomInner">
            <div className="nmBottomTitle">可愛いのに、予約しやすい。</div>
            <div className="nmBottomText">
              予約はHOT PEPPER。相談・持ち込みはLINEへ。
            </div>

            <div className="nmBottomBtns">
              <Link className="nmBtn nmBtnPrimary nmBtnBig" href={HOTPEPPER_URL} target="_blank" rel="noreferrer">
                予約する
              </Link>
              <Link className="nmBtn nmBtnGhost nmBtnBig" href={LINE_URL} target="_blank" rel="noreferrer">
                LINEで相談
              </Link>
              <Link className="nmBtn nmBtnText" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="nmFooter">
          <div className="nmFooterInner">
            <div className="nmFooterBrand">{BRAND}</div>

            <div className="nmFooterLinks">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
              <a href={HOTPEPPER_URL} target="_blank" rel="noreferrer">HOT PEPPER</a>
              <a href={LINE_URL} target="_blank" rel="noreferrer">LINE</a>
            </div>

            <div className="nmFooterSmall">
              Demo page / Design & Frontend by IRZAM Web Studio
            </div>
          </div>
        </footer>

        {/* Mobile sticky CTA（効く） */}
        <div className="nmStickyCta" aria-label="Sticky reservation bar">
          <Link className="nmBtn nmBtnPrimary nmStickyBtn" href={HOTPEPPER_URL} target="_blank" rel="noreferrer">
            予約
          </Link>
          <Link className="nmBtn nmBtnGhost nmStickyBtn" href={LINE_URL} target="_blank" rel="noreferrer">
            LINE相談
          </Link>
        </div>
      </main>
    </div>
  );
}