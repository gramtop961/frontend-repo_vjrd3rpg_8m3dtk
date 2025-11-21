export default function CTA() {
  return (
    <section id="cta" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10">
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(239,68,68,0.15), transparent 30%), radial-gradient(circle at 80% 80%, rgba(239,68,68,0.15), transparent 30%)'
          }} />
          <div className="relative p-10 md:p-14">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Focus on the work. We’ll handle the rest.</h3>
              <p className="mt-3 text-white/70">Join thousands of teams choosing a calmer, more deliberate way to build. Start your 14‑day free trial.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-red-600 hover:bg-red-500 text-white px-5 py-3 text-sm font-medium shadow-[0_10px_30px_-10px_rgba(239,68,68,0.7)] transition-colors">Create account</a>
                <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white px-5 py-3 text-sm font-medium border border-white/10 transition-colors">Book a demo</a>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Redgrid, Inc.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="/test" className="hover:text-white">System</a>
          </div>
        </footer>
      </div>
    </section>
  )
}
