import { channels } from '../lib/data';

const categories = ['All', 'Sports', 'Movies', 'Kids', 'Entertainment', 'News', 'Documentary'];

export default function Channels() {
  return (
    <section id="channels" className="relative py-24 sm:py-32 bg-ink-900/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-[0.15em]">Content Library</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4 tracking-tight">
            15,000+ <span className="text-gradient">Channels</span>
          </h2>
          <p className="text-slate-400 text-lg">From live sports and blockbuster movies to kids shows and global news — all in one subscription.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, i) => (
            <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-ink-850/60 text-slate-300 border border-white/5 hover:border-emerald-500/20'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {channels.map((c, i) => (
            <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-ink-850/60 border border-white/5 hover:border-emerald-500/20 hover:bg-ink-850 transition-all">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-xl shrink-0">{c.logo}</div>
              <div className="min-w-0">
                <div className="text-xs text-slate-400">{c.category}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#pricing" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 transition-all">
            Get All Channels
          </a>
        </div>
      </div>
    </section>
  );
}
