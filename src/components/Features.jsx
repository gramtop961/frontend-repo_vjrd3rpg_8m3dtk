export default function Features() {
  const features = [
    {
      title: 'Zero clutter interface',
      desc: 'An immaculate workspace with only the essentials visible. Less noise, more signal.',
    },
    {
      title: 'Realtime collaboration',
      desc: 'Type, comment, and handoff with your team without breaking flow.',
    },
    {
      title: 'Enterprise-grade security',
      desc: 'SSO, audit logs, and fine-grained permissions out of the box.',
    },
    {
      title: 'Lightning performance',
      desc: 'Built on modern foundations to feel instant at scale.',
    },
  ]

  return (
    <section id="features" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/[0.07]">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-500 to-red-700/80 mb-4" />
              <h3 className="text-lg font-medium tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
