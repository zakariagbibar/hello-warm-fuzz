import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'James Mitchell', role: 'Sports Fan', rating: 5, text: 'Tried three other providers before this one. IPTvvv is the only one that actually delivers on the anti-freeze promise. Sports in 4K is buttery smooth.', avatar: 'JM' },
  { name: 'Sarah Connor', role: 'Parent of 3', rating: 5, text: 'The kids section is incredible — Disney, Cartoon Network, all in one place. Setup took 5 minutes on our Smart TV. Worth every penny.', avatar: 'SC' },
  { name: 'Mohammed Al-Rashid', role: 'Movie Lover', rating: 5, text: '60,000+ movies is no joke. I find new content every week. The VOD library updates faster than my old Netflix subscription.', avatar: 'MA' },
  { name: 'Lisa Chen', role: 'Cord Cutter', rating: 5, text: 'Cancelled my $140 cable bill and never looked back. IPTvvv gives me more channels for a fraction of the cost. The 12-month plan is a steal.', avatar: 'LC' },
  { name: 'David Bauer', role: 'Verified Subscriber', rating: 5, text: 'Subscribed to the yearly plan right away and it has been rock solid for 8 months now. The setup guide made it a breeze. Highly recommend.', avatar: 'DB' },
  { name: 'Aisha Patel', role: 'International Viewer', rating: 5, text: 'I get channels from my home country plus everything else. Works perfectly while traveling too. Support actually responds within minutes.', avatar: 'AP' },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-[0.15em]">Testimonials</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4 tracking-tight">
            Loved By <span className="text-gradient">120,000+</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-slate-400">4.9 out of 5 · 12,000+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="p-6 rounded-2xl bg-ink-850/60 border border-white/5 hover:border-emerald-500/20 transition-all">
              <Quote className="w-8 h-8 text-emerald-500/30 mb-4" />
              <p className="text-slate-300 leading-relaxed mb-5">{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-sm font-bold">{r.avatar}</div>
                <div>
                  <div className="font-semibold text-white text-sm">{r.name}</div>
                  <div className="text-xs text-slate-500">{r.role}</div>
                </div>
                <div className="flex ml-auto">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
