export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* HERO */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
          <p className="text-sm text-zinc-400">High school senior / Tokyo</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight">
            Irzam — Portfolio
          </h1>
          <p className="mt-4 leading-relaxed text-zinc-300">
            目標は「金と時間」を作って、若いうちに経験を取りに行く。
            そのためにWeb開発を武器にして、将来は<span className="font-semibold text-white">車×IT</span>の事業へ繋げる。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:opacity-90"
              href="#projects"
            >
              プロジェクトを見る
            </a>
            <a
              className="rounded-xl border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-800"
              href="#contact"
            >
              連絡先
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs text-zinc-300">
            {["Next.js", "TypeScript", "React", "Git", "Mac"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <section id="projects" className="mt-10">
          <h2 className="text-xl font-extrabold">Projects</h2>
          <p className="mt-2 text-sm text-zinc-400">
            “稼げる実力”は作品で見せる。ここを増やしていく。
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <p className="text-xs text-zinc-400">Now</p>
              <h3 className="mt-1 text-lg font-bold">ポートフォリオ</h3>
              <p className="mt-2 text-sm text-zinc-300">
                実績の置き場。制作物・リンク・連絡先をまとめる。
              </p>
              <p className="mt-3 text-xs text-zinc-400">Status: building</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <p className="text-xs text-zinc-400">Next</p>
              <h3 className="mt-1 text-lg font-bold">在庫管理アプリ（車）</h3>
              <p className="mt-2 text-sm text-zinc-300">
                車種/仕入れ/利益/回転率を見える化。父の事業にも繋がる。
              </p>
              <p className="mt-3 text-xs text-zinc-400">Status: planned</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <p className="text-xs text-zinc-400">Next</p>
              <h3 className="mt-1 text-lg font-bold">顧客管理（CRM）</h3>
              <p className="mt-2 text-sm text-zinc-300">
                車検・点検リマインド、再来店率UPの仕組みを作る。
              </p>
              <p className="mt-3 text-xs text-zinc-400">Status: planned</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <p className="text-xs text-zinc-400">Next</p>
              <h3 className="mt-1 text-lg font-bold">収益化の実験</h3>
              <p className="mt-2 text-sm text-zinc-300">
                LP制作/運用、SNS導線、案件獲得までの型を作る。
              </p>
              <p className="mt-3 text-xs text-zinc-400">Status: planned</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-10">
          <h2 className="text-xl font-extrabold">Contact</h2>
          <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-sm text-zinc-300">
              GitHub / X / Mail はあとで本物に差し替える（今は仮でOK）
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="rounded-xl border border-zinc-700 px-3 py-2">GitHub: later</span>
              <span className="rounded-xl border border-zinc-700 px-3 py-2">X: later</span>
              <span className="rounded-xl border border-zinc-700 px-3 py-2">Mail: later</span>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} Irzam
        </footer>
      </div>
    </main>
  );
}