import Image from "next/image";

const items = [
  { key: "short", label: "Short", src: "/demos/styles/style-short.jpg", tall: false },
  { key: "bob", label: "Bob", src: "/demos/styles/style-bob.jpg", tall: true },
  { key: "medium", label: "Medium", src: "/demos/styles/style-medium.jpg", tall: false },
  { key: "long", label: "Long", src: "/demos/styles/style-long.jpg", tall: true },
];

export default function HairStyleGrid() {
  return (
    <section id="hairstyle" className="py-16 bg-[color:var(--noir-bg)]">
      <div className="noir-container">
        <div className="noir-kicker">HAIR STYLE</div>
        <h2 className="noir-h2 mt-2">Which style do you like?</h2>
        <p className="mt-4 text-white/70 max-w-[62ch] leading-relaxed">
          カテゴリで選ばせる。配置は“きっちり”より“編集っぽく”。
        </p>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {items.map((it) => (
            <a
              key={it.key}
              href="#reserve"
              className={`relative overflow-hidden border border-white/15 bg-white/5 ${
                it.tall ? "aspect-[4/5]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={it.src}
                alt={`${it.label} style`}
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/0" />
              <div className="absolute left-4 bottom-4">
                <span className="text-[13px] tracking-[0.22em] text-white/90">
                  {it.label.toUpperCase()}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}