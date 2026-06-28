import type { HomeProps } from '../types/app'

function Home({ onOpenDashboard }: HomeProps) {
  return (
    <main className="grid min-h-svh place-items-center bg-slate-50 px-6 py-10 text-slate-900">
      <section className="w-full max-w-2xl rounded-lg border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 sm:p-12">
        <p className="mb-3 text-xs font-black uppercase tracking-normal text-emerald-700">
          AndeanOptions
        </p>
        <h1 className="max-w-xl text-5xl font-black leading-none text-slate-950 sm:text-6xl">
          Regional farms workspace
        </h1>
        <p className="mb-7 mt-4 max-w-xl text-base leading-7 text-slate-500">
          Track farm health, urgent issues, production, revenue, and water status
          from one focused dashboard.
        </p>
        <button
          className="min-h-[42px] rounded-lg border border-slate-950 bg-slate-950 px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          type="button"
          onClick={onOpenDashboard}
        >
          Go to Dashboard
        </button>
      </section>
    </main>
  )
}

export default Home
