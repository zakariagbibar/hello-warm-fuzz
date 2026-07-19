import { Check, Crown } from 'lucide-react';
import { plans } from '../lib/data';

export default function Pricing({ onSelectPlan }: { onSelectPlan: (id: string) => void }) {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-[0.15em]">Pricing</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4 tracking-tight">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-slate-400 text-lg">Simple, transparent pricing. No hidden fees, no contracts. Cancel anytime.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.id} className={`relative rounded-3xl p-7 transition-all ${plan.popular ? 'bg-gradient-to-b from-emerald-500/10 to-ink-850 border-2 border-emerald-500/40 shadow-2xl shadow-emerald-500/20 lg:-translate-y-4' : 'bg-ink-850/60 border border-white/5 hover:border-emerald-500/20'}`}>

              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold flex items-center gap-1 shadow-lg shadow-emerald-500/40">
                  <Crown className="w-3 h-3" />
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-400">{plan.tagline}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-2">
                  <span className="font-display font-black text-4xl text-white">${plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-slate-500 line-through mb-1">${plan.originalPrice}</span>
                  )}
                </div>
                <span className="text-sm text-slate-400">/ {plan.duration}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectPlan(plan.id)}
                className={`w-full py-3.5 rounded-xl font-semibold transition-all ${plan.popular ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
