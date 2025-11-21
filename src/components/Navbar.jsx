import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 shadow-[0_0_30px_rgba(239,68,68,0.5)]" />
              <span className="text-white text-sm tracking-widest uppercase">Redgrid</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">Product</a>
              <a href="#pricing" className="text-sm text-white/70 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Docs</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Sign in</a>
              <a href="#cta" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-xl bg-red-600 hover:bg-red-500 text-white shadow-[0_10px_30px_-10px_rgba(239,68,68,0.6)] transition-colors">Get started</a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors">
              <Menu size={18} />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-6 pb-6">
              <div className="grid gap-2">
                <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors">Product</a>
                <a href="#pricing" className="text-sm text-white/80 hover:text-white transition-colors">Pricing</a>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Docs</a>
                <div className="h-px bg-white/10 my-2" />
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Sign in</a>
                <a href="#cta" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-xl bg-red-600 hover:bg-red-500 text-white transition-colors">Get started</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
