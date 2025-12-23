import Image from "next/image";

const items = [
  { label: "SHORT", src: "/demos/noir-aura/styles/style-short.jpg", tall: false },
  { label: "BOB", src: "/demos/noir-aura/styles/style-bob.jpg", tall: false },
  { label: "MEDIUM", src: "/demos/noir-aura/styles/style-medium.jpg", tall: false },
  { label: "LONG", src: "/demos/noir-aura/styles/style-long.jpg", tall: true }, // ←縦長にする
];

export default function Gallery() {
  return (
    <section id="style" className="py-16 bg-[color:var(--noir-bg)]">
      <div className="noir-container">
        <div className="noir-kicker">HAIR STYLE</div>
        <h2 className="noir-h2 mt-2">Which style do you like?</h2>

        <p className="mt-4 text-white/70 max-w-[62ch] leading-relaxed">
          カテゴリで選ばせる。配置は“きっちり”より“編集っぽく”。
        </p>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.label}
              className={`relative overflow-hidden border border-white/15 ${
                it.tall ? "aspect-[3/4] md:aspect-[2/3]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={it.src}
                alt={it.label}
                fill
                className="object-cover object-top"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
              <div className="absolute left-5 bottom-5">
                <span className="text-[12px] tracking-[0.24em] text-white/90">
                  {it.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}