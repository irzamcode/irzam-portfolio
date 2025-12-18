import Image from "next/image";
import Link from "next/link";

export type WorkItem = {
  title: string;
  href: string;
  img: string; // 例: "/works/irzam-beauty.png"
  note?: string;
};

export function WorksGrid({ works }: { works: WorkItem[] }) {
  return (
    <section id="works" className="mt-10 rounded-3xl border border-slate-200 bg-white p-6">
      <div className="text-sm font-semibold text-slate-900">実績の制作物（クリックで確認）</div>
      <p className="mt-2 text-sm text-slate-600">
        サムネイルを押すと、実際のページを別タブで開きます。
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {works.map((w) => (
          <Link
            key={w.href}
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={w.img}
                alt={w.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 240px"
              />
            </div>
            <div className="p-3">
              <div className="text-sm font-semibold text-slate-900">{w.title}</div>
              {w.note ? <div className="mt-1 text-xs text-slate-600">{w.note}</div> : null}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}