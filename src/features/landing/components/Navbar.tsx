import { useEffect, useState } from 'react';
import { Menu, X, Tv } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Channels', href: '#channels' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Devices', href: '#devices' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'glass border-b border-white/5 py-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent shadow-none'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
            <Tv className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-display font-extrabold text-xl text-white tracking-tight">
            IPTV<span className="text-emerald-400">vvv</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#pricing"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all"
          >
            Subscribe Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white rounded-lg hover:bg-white/5"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass border-t border-white/5 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <ul className="px-5 py-4 space-y-1 max-w-7xl mx-auto">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-lg"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-center text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl"
              >
                Subscribe Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
