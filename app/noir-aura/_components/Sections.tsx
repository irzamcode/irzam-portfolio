"use client";

import { useEffect, useMemo, useState } from "react";
import PriceModal from "./PriceModal";
import ReserveModal from "./ReserveModal";

type PriceDetail = {
  title: string;
  subtitle?: string;
  items: { name: string; price: string; note?: string }[];
  footnote?: string;
};

const RESERVE = {
  lineUrl: "https://line.me/R/ti/p/@noir_aura_demo", // ← あとで本番のURLに差し替える
};
const PRICE_DETAILS: Record<string, PriceDetail> = {
  cut: {
    title: "Cut",
    subtitle: "Design / Top / Director（デモ）",
    items: [
      { name: "一般カット", price: "¥6,600〜", note: "シャンプー＆ブロー込" },
      { name: "学生カット（大・専）", price: "¥5,500〜" },
      { name: "学生カット（中・高）", price: "¥4,950〜" },
      { name: "前髪カット", price: "¥1,320" },
      { name: "顔周りカット", price: "¥3,300" },
    ],
    footnote:
      "※目安。髪の長さ/履歴/希望で変動します。施術前に必ず見積を提示します（デモ）。",
  },
  color: {
    title: "Cut + Color",
    subtitle: "透明感 / 艶 / 退色まで設計",
    items: [
      { name: "カット＋カラー", price: "¥14,300〜" },
      { name: "ケアカラー", price: "+¥2,200〜", note: "ダメージを抑える" },
      { name: "リタッチ", price: "¥8,800〜" },
      { name: "ブリーチ（1回）", price: "¥9,900〜", note: "範囲で変動" },
    ],
    footnote: "※履歴（黒染め/縮毛/ブリーチ）で施術内容が変わります。",
  },
  perm: {
    title: "Cut + Perm",
    subtitle: "質感・再現性・持ち重視",
    items: [
      { name: "カット＋パーマ", price: "¥14,300〜" },
      { name: "ポイントパーマ", price: "¥4,400〜" },
      { name: "デジタルパーマ", price: "¥17,600〜" },
    ],
    footnote: "※髪質/ダメージに合わせて薬剤を調整します（デモ）。",
  },
  care: {
    title: "Care",
    subtitle: "Treatment / Head spa",
    items: [
      { name: "トリートメント", price: "¥3,300〜" },
      { name: "集中補修トリートメント", price: "¥6,600〜" },
      { name: "ヘッドスパ", price: "¥4,400〜" },
    ],
    footnote: "※当日の髪状態で最適なコースをご提案します。",
  },
};

const faqs = [
  {
    q: "当日の予約はできますか？",
    a: "枠が空いていれば可能です。LINEで「希望日時」を送ってください（デモ）。",
  },
  {
    q: "料金はどこまで確定ですか？",
    a: "髪の長さ・履歴・希望で変動します。施術前に見積を提示します。",
  },
  {
    q: "キャンセル規定は？",
    a: "前日まで無料。当日は施術料金の一部を頂く場合があります（デモ）。",
  },
];

function setupReveal() {
  const els = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]")
  );
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("isIn");
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}

/** ✅ public/demos/noir-aura/styles/ に合わせる（あなたの実ファイル構成） */
const STYLE = [
  {
    key: "short",
    label: "SHORT",
    src: "/demos/noir-aura/styles/style-short.jpg",
    tall: false,
  },
  {
    key: "bob",
    label: "BOB",
    src: "/demos/noir-aura/styles/style-bob.jpg",
    tall: true,
  },
  {
    key: "medium",
    label: "MEDIUM",
    src: "/demos/noir-aura/styles/style-medium.jpg",
    tall: false,
  },
  {
    key: "long",
    label: "LONG",
    src: "/demos/noir-aura/styles/style-long.jpg",
    tall: true,
  },
] as const;

/** ✅ public/demos/noir-aura/inside/ */
const INSIDE = [
  "/demos/noir-aura/inside/inside-1.jpg",
  "/demos/noir-aura/inside/inside-2.jpg",
] as const;

/** ✅ public/demos/noir-aura/trend/ */
const TREND = [
  "/demos/noir-aura/trend/trend-1.jpg",
  "/demos/noir-aura/trend/trend-2.jpg",
  "/demos/noir-aura/trend/trend-3.jpg",
] as const;

const TREND_META = [
  { tag: "CUT+COLOR", note: "透明感 × 暗髪 / 90min（デモ）" },
  { tag: "LAYER", note: "顔周りレイヤー × 小顔設計（デモ）" },
  { tag: "GLOSS", note: "艶 × 低ダメージ設計（デモ）" },
] as const;

/** ✅ public/demos/noir-aura/salon/ */
const SALON = [
  "/demos/noir-aura/salon/salon-1.jpg",
  "/demos/noir-aura/salon/salon-2.jpg",
] as const;

type SectionsProps = {
  onReserve: () => void;
};
export default function Sections({ onReserve }: { onReserve: () => void }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailKey, setDetailKey] = useState<string | null>(null);
  const [reserveOpen, setReserveOpen] = useState(false);

  const detail = useMemo<PriceDetail | null>(() => {
    if (!detailKey) return null;
    return PRICE_DETAILS[detailKey] ?? null;
  }, [detailKey]);

  useEffect(() => setupReveal(), []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setModalOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  const openDetail = (key: string) => {
    setDetailKey(key);
    setModalOpen(true);
  };
{/* DEMO INFO */}
<section className="block" id="about" data-reveal style={{ ["--d" as any]: "20ms" }}>
  <div className="blockHead">
    <div className="blockEyebrow">DEMO</div>
    <h2 className="blockTitle">Designed for high-end salons</h2>
    <p className="blockDesc">
      “暗い＝高級”ではなく、余白・導線・読みやすさで「高単価の安心感」を設計。
      写真・コピー・構成は店舗に合わせて最適化できます。
    </p>
  </div>

  <div className="demoGrid">
    <div className="demoCard">
      <div className="demoTitle">What you get</div>
      <ul className="demoList">
        <li>トップ（Hero）＋予約導線の設計</li>
        <li>メニュー構成 / 料金表 / FAQ</li>
        <li>写真の見せ方（切れない・崩れない）</li>
        <li>スマホ最適化 / 表示速度 / 基本SEO</li>
      </ul>
    </div>

    <div className="demoCard">
      <div className="demoTitle">Customizable</div>
      <ul className="demoList">
        <li>ブランドカラー / 雰囲気（明るめにも可能）</li>
        <li>画像差し替え（撮影が無くても素材提案可）</li>
        <li>予約導線（LINE / フォーム / 予約システム）</li>
        <li>英日コピーの調整</li>
      </ul>
    </div>
  </div>
</section>


  return (
    <>
      {/* INSIDE */}
      <section
        className="block"
        id="inside"
        data-reveal
        style={{ ["--d" as any]: "40ms" }}
      >
        <div className="blockHead">
          <div className="blockEyebrow">INSIDE</div>
          <h2 className="blockTitle">Inside NOIR</h2>
          <p className="blockDesc blockDesc--inside">
  余白とコントラストで“雑誌っぽく”。写真が主役。
</p>
        </div>

        <div className="grid2">
          <div
            className="imgCard imgCard--tall"
            style={{ backgroundImage: `url(${INSIDE[0]})` }}
          />
          <div
            className="imgCard"
            style={{ backgroundImage: `url(${INSIDE[1]})` }}
          />
        </div>
      </section>

      {/* STYLE */}
      <section
        className="block"
        id="style"
        data-reveal
        style={{ ["--d" as any]: "80ms" }}
      >
        <div className="blockHead">
          <div className="blockEyebrow">STYLE</div>
          <h2 className="blockTitle">Hair Style</h2>
          <p className="blockDesc">
            カテゴリで選ばせる。配置は“きっちり”より“編集っぽく”。
          </p>
        </div>

        <div className="masonry">
          {STYLE.map((it) => (
            <a
              key={it.key}
              className={`tile ${it.tall ? "tile--tall" : ""}`}
              href="#reserve"
              onClick={(e) => e.preventDefault()}
            >
              <div
                className="tileImg"
                style={{ backgroundImage: `url(${it.src})` }}
              />
              <div className="tileLabel">{it.label}</div>
            </a>
          ))}
        </div>
      </section>


     {/* TREND */}
<section className="block" id="trend" data-reveal style={{ ["--d" as any]: "120ms" }}>
  <div className="blockHead">
    <div className="blockEyebrow">COLLECTION</div>
    <h2 className="blockTitle">Trend Collection</h2>
   <p className="blockDesc">“選ばれる髪型”を想定したビジュアル設計（デモ）。</p>
  </div>

  <div className="grid3">
    {TREND.map((src, i) => {
      const meta = TREND_META[i] ?? { tag: "STYLE", note: "Signature design（デモ）" };
      return (
        <a
          key={src}
          className={`imgCard trendCard ${i === 1 ? "imgCard--tall" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
          href="#"
          onClick={(e) => e.preventDefault()}
          aria-label={`Open trend ${i + 1}`}
        >
          <span className="trendTag">{meta.tag}</span>
          <span className="trendNote">{meta.note}</span>
          <span className="trendCap">VIEW</span>
        </a>
      );
    })}
  </div>

  <div className="smallNote">※デモ：クリックで予約導線へ（本番は詳細ページ/Modalに接続）</div>
</section>

      {/* SALON */}
      <section
        className="block"
        id="salon"
        data-reveal
        style={{ ["--d" as any]: "160ms" }}
      >
        <div className="blockHead">
          <div className="blockEyebrow">SALON</div>
          <h2 className="blockTitle">Calm &amp; Clean</h2>
          <p className="blockDesc">
            内装・導線・衛生。高単価に必要な“安心”。
          </p>
        </div>

        <div className="grid2">
          <div
            className="imgCard"
            style={{ backgroundImage: `url(${SALON[0]})` }}
          />
          <div
            className="imgCard"
            style={{ backgroundImage: `url(${SALON[1]})` }}
          />
        </div>
      </section>

            {/* PRICE (Click → Modal) */}
      {/* PRICE */}
<section
  className="block"
  id="price"
  data-reveal
  style={{ ["--d" as any]: "200ms" }}
>
  <div className="blockHead">
    <div className="blockEyebrow">PRICE</div>
    <h2 className="blockTitle">Menu</h2>
    <p className="blockDesc">
      クリックで詳細を表示（モーダル）。料金は目安のレンジです。
    </p>
  </div>

  <div className="accordion">
    {[
      { key: "cut", label: "Cut", from: "¥6,600〜" },
      { key: "color", label: "Cut + Coloring", from: "¥14,300〜" },
      { key: "perm", label: "Cut + Perm", from: "¥14,300〜" },
      { key: "care", label: "Side Menu / Care", from: "¥3,300〜" },
    ].map((row) => (
      <button
        key={row.key}
        type="button"
        className="accItem accBtn"
        onClick={() => openDetail(row.key)}
        aria-label={`Open ${row.label} details`}
      >
        <div className="accSummary">
          <span>{row.label}</span>
          <span className="accHint">View</span>
        </div>

        <div className="accBody">
          <div className="accMini">
            <div className="priceLine">
              <span>{row.from}</span>
            </div>
          </div>
        </div>
      </button>
    ))}
  </div>
</section>

      {/* FAQ */}
      <section
        className="block"
        id="faq"
        data-reveal
        style={{ ["--d" as any]: "240ms" }}
      >
        <div className="blockHead">
          <div className="blockEyebrow">FAQ</div>
          <h2 className="blockTitle">Questions</h2>
          <p className="blockDesc">黒×余白で静かに強いFAQ。</p>
        </div>

        <div className="accordion">
          {faqs.map((f) => (
            <details key={f.q} className="accItem">
              <summary className="accSummary">
                <span>{f.q}</span>
                <span className="accHint">Open</span>
              </summary>
              <div className="accBody">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

{/* DESIGN（設計したこと） */}
<section
  className="block"
  id="design"
  data-reveal
  style={{ ["--d" as any]: "260ms" }}
>
  <div className="blockHead">
    <div className="blockEyebrow">CONCEPT</div>
    <h2 className="blockTitle">Problem → Design Solution</h2>
    <p className="blockDesc">
      見た目だけじゃなく「予約される構造」を設計したデモです。
    </p>
  </div>

  <div className="designGrid">
    <div className="designCard">
      <div className="designTitle">Problem</div>
      <p className="designText">
        “雰囲気は良いのに、予約までの導線が弱い”と離脱が起きやすい。
      </p>
    </div>

    <div className="designCard">
      <div className="designTitle">Solution</div>
      <p className="designText">
        Style → Trend → Price → Reserve の順で迷わせない情報設計に。
      </p>
    </div>

    <div className="designCard">
      <div className="designTitle">Conversion</div>
      <p className="designText">
        上部・常設・最下部の3点で予約導線を確保（取りこぼし防止）。
      </p>
    </div>
  </div>

  <div className="smallNote">
    この構成は、美容室だけでなく ネイル / 眉 / エステ など他業種にも転用できます。
  </div>
</section>

      {/* ACCESS */}
      <section
        className="block"
        id="access"
        data-reveal
        style={{ ["--d" as any]: "280ms" }}
      >
        <div className="blockHead">
          <div className="blockEyebrow">ACCESS</div>
          <h2 className="blockTitle">Aoyama / Omotesando</h2>
          <p className="blockDesc">
            MAP埋め込みは後回しでOK。まずは駅情報＋リンクで十分。
          </p>
        </div>

        <div className="access">
          <div className="accessRow">
            <span>最寄り</span>
            <span>表参道駅 徒歩5分（デモ）</span>
          </div>
          <div className="accessRow">
            <span>住所</span>
            <span>東京都港区（デモ）</span>
          </div>
          <a
            className="btn btn--ghost"
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

        {/* CTA */}
      <section
        className="cta"
        id="reserve"
        data-reveal
        style={{ ["--d" as any]: "320ms" }}
      >
        <div className="ctaEyebrow">RESERVATION</div>
        <div className="ctaTitle">Ready when you are.</div>
        <div className="ctaText">
          予約導線は最短で。最初は「LINE」「フォーム」2本が強い。
        </div>

        <div className="heroCtas">
          {/* ✅ 予約フォーム：モーダルを開く */}
          <button type="button" className="btn btn--solid" onClick={onReserve}>
            RESERVE（デモ）
          </button>

          {/* ✅ LINE：外部リンク（あなたのURLに変えてOK） */}
          <a
            className="btn btn--ghost"
            href="https://line.me/"
            target="_blank"
            rel="noreferrer"
          >
            LINE予約
          </a>
        </div>
      </section>

      {/* Sticky CTA（右下固定） */}
      <div className="stickyCta" aria-label="Quick reservation">
        <button type="button" className="stickyBtn" onClick={onReserve}>
          予約する
          <span className="stickyBtnSub">フォームを開く</span>
        </button>

        <a
          className="stickyBtnGhost"
          href="https://line.me/"
          target="_blank"
          rel="noreferrer"
        >
          LINE
        </a>
      </div>

      <footer className="footer">
  <div className="footerInner">
    <div className="brand__name">NOIR AURA</div>
    <div className="footerSmall">© NOIR AURA / Demo site</div>
    <div className="footerSmall">Concept / Design / Frontend by IRZAM Web Studio</div>
    <div className="footerSmall">Available for client work（Demo / Portfolio）</div>
  </div>
</footer>

      <PriceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        detail={detail}
      />
    </>
  );
}