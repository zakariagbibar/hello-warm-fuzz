import { Target, Eye, Heart, Award, Users, Globe2, Server, ShieldCheck } from 'lucide-react';

const values = [
  { icon: Target, title: 'Our Mission', text: 'Make premium entertainment accessible to everyone, everywhere — without the bloated contracts and hidden fees of traditional cable.' },
  { icon: Eye, title: 'Our Vision', text: 'A world where the best live TV, sports, and cinema stream seamlessly to any screen, in any country, at an honest price.' },
  { icon: Heart, title: 'Our Promise', text: 'Reliable streams, real human support, and a service that simply works. We earn your subscription every single month.' },
];

const milestones = [
  { icon: Award, value: '2018', label: 'Founded in Toronto' },
  { icon: Users, value: '120K+', label: 'Active subscribers' },
  { icon: Globe2, value: '60+', label: 'Countries served' },
  { icon: Server, value: '99.9%', label: 'Uptime guarantee' },
];

const stats = [
  { icon: ShieldCheck, value: 'ISO 27001', label: 'Data security certified' },
  { icon: Server, value: '12 Data Centers', label: 'Global CDN infrastructure' },
  { icon: Users, value: '24/7', label: 'Human support team' },
  { icon: Award, value: '4.9/5', label: 'Average customer rating' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-[0.15em]">About IPTvvv</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-6 tracking-tight">
              The Streaming Company<br />
              <span className="text-gradient">Built On Trust</span>
            </h2>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>Founded in 2018 and headquartered in Toronto, IPTvvv Technologies Inc. is a global streaming infrastructure company delivering live television and on-demand entertainment to over 120,000 subscribers across 60+ countries.</p>
              <p>We operate our own distributed CDN of 12 data centers on four continents, engineered for one thing: picture-perfect, buffer-free streaming — whether you're watching the Champions League final in 4K or bingeing a series on your phone.</p>
              <p>We're not a reseller. We build, own, and operate the full stack — from content aggregation to the player on your screen. That's why we can guarantee what others only promise.</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/40 border border-white/10">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900" alt="IPTvvv company team and operations" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Server className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="font-display font-bold text-white">Own Infrastructure</div>
                  <div className="text-xs text-slate-400">12 data centers · 4 continents</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {values.map((v) => (
            <div key={v.title} className="p-7 rounded-2xl bg-ink-850/60 border border-white/5 hover:border-emerald-500/20 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5">
                <v.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{v.title}</h3>
              <p className="text-slate-400 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-ink-850/80 to-ink-900/80 border border-white/5 p-8 sm:p-12">
          <h3 className="font-display font-bold text-xl text-white text-center mb-10">Company At A Glance</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {milestones.map((m) => (
              <div key={m.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                  <m.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="font-display font-black text-2xl sm:text-3xl text-white mb-1">{m.value}</div>
                <div className="text-sm text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-display font-bold text-white text-sm">{s.value}</div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
