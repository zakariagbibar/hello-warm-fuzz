import { Play, Star, Zap, ShieldCheck, Globe2 } from 'lucide-react';

const tiles = [
  {
    src: 'https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Kids channels',
    label: 'Kids',
    span: 'sm:col-span-2 sm:row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Live football channels',
    label: 'Football',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Movies and cinema',
    label: 'Movies',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Football stadium',
    label: 'Sports',
    span: 'sm:col-span-2 sm:row-span-1',
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/80 to-ink-950" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-600/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            #1 Rated IPTV Service 2026
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Premium TV,<br />
            <span className="text-gradient">Reinvented</span> for the<br />
            Streaming Era
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-xl mb-8">
            Stream <span className="text-white font-semibold">15,000+ live channels</span> and{' '}
            <span className="text-white font-semibold">60,000+ movies & series</span> in stunning
            Full HD and 4K. Works on every device you own — no dish, no contracts, no limits.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#pricing"
              className="group px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              View Plans
              <Play className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-7 py-4 text-base font-semibold text-white border border-white/15 rounded-2xl hover:bg-white/5 transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              24h Money-back
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Globe2 className="w-4 h-4 text-emerald-400" />
              Worldwide Access
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-400">
                <span className="text-white font-semibold">4.9</span> · 12,000+ reviews
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="relative w-full max-w-md">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {tiles.map((tile, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden shadow-xl shadow-emerald-900/40 border border-white/10 group ${tile.span}`}
                >
                  <img
                    src={tile.src}
                    alt={tile.alt}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-white text-xs font-semibold">
                    {tile.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 shadow-2xl shadow-emerald-500/60 flex flex-col items-center justify-center border-2 border-dashed border-white/40 rotate-3">
                <span className="font-display font-black text-3xl sm:text-4xl text-white leading-none">
                  8+
                </span>
                <span className="font-display font-bold text-[10px] sm:text-xs text-white/90 tracking-wider text-center mt-1 leading-tight px-2">
                  Years of<br/>Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
