import { useEffect, useState } from 'react';
import { Tv } from 'lucide-react';

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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <a href="#home" className="flex shrink-0 items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
            <Tv className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-display font-extrabold text-xl text-white tracking-tight">
            IPTV<span className="text-emerald-400">vvv</span>
          </span>
        </a>

        <ul className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {links.map((l) => (
            <li key={l.href} className="shrink-0">
              <a
                href={l.href}
                className="block px-2 sm:px-3 lg:px-4 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#pricing"
          className="shrink-0 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all whitespace-nowrap"
        >
          Subscribe Now
        </a>
      </nav>
    </header>
  );
}
