import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-widest text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            Minimal. Modern. Powerful.
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight text-white">
            The clean SaaS for teams who value focus
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed">
            Ship faster with a distraction-free workspace. Opinionated defaults, premium design, and the performance you expect.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-red-600 hover:bg-red-500 text-white px-5 py-3 text-sm font-medium shadow-[0_10px_30px_-10px_rgba(239,68,68,0.7)] transition-colors">
              Start free trial
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white px-5 py-3 text-sm font-medium border border-white/10 transition-colors">
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
