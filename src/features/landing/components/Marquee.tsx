import { Tv, Film, Trophy, Baby, Newspaper, Globe } from 'lucide-react';

const items = [
  { icon: Tv, label: '15,000+ Live Channels' },
  { icon: Film, label: '60,000+ Movies & Series' },
  { icon: Trophy, label: 'All Sports in 4K' },
  { icon: Baby, label: 'Kids & Family' },
  { icon: Newspaper, label: 'News & Docs' },
  { icon: Globe, label: '60+ Countries' },
];

export default function Marquee() {
  return (
    <section className="relative py-6 border-y border-white/5 bg-ink-900/40 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap">
        <div className="flex gap-12 animate-marquee">
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-slate-400">
              <item.icon className="w-5 h-5 text-emerald-400" />
              <span className="font-medium text-sm">{item.label}</span>
              <span className="text-emerald-500/30 ml-6">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
