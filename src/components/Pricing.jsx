export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm uppercase tracking-widest text-white/60">Starter</h3>
            <div className="mt-3 text-4xl font-semibold">$0</div>
            <p className="mt-1 text-sm text-white/60">For individuals testing ideas.</p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>Unlimited projects</li>
              <li>Shared links</li>
              <li>Community support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex items-center justify-center w-full rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm border border-white/10 transition-colors">Get started</a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border border-red-500/30 bg-gradient-to-b from-red-600/10 to-white/5 p-6 ring-1 ring-inset ring-red-500/30">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-2 py-1 text-[10px] uppercase tracking-widest text-red-300">Popular</div>
            <h3 className="mt-3 text-sm uppercase tracking-widest text-white/80">Pro</h3>
            <div className="mt-3 text-4xl font-semibold">$19</div>
            <p className="mt-1 text-sm text-white/70">For teams who want more power.</p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>Everything in Starter</li>
              <li>Realtime collaboration</li>
              <li>Advanced permissions</li>
              <li>Priority support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex items-center justify-center w-full rounded-xl bg-red-600 hover:bg-red-500 text-white px-4 py-2 text-sm shadow-[0_10px_30px_-10px_rgba(239,68,68,0.6)] transition-colors">Upgrade</a>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm uppercase tracking-widest text-white/60">Enterprise</h3>
            <div className="mt-3 text-4xl font-semibold">Custom</div>
            <p className="mt-1 text-sm text-white/60">For organizations at scale.</p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>SSO & Audit logs</li>
              <li>Custom SLAs</li>
              <li>Dedicated success</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex items-center justify-center w-full rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm border border-white/10 transition-colors">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
