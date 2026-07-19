import { useEffect, useState } from 'react';
import { X, Loader2, Check, Tv, Smartphone, Monitor, Cast } from 'lucide-react';
import { plans } from '../lib/data';
import { supabase } from '@/integrations/supabase/client';

const deviceOptions = [
  { id: 'smart-tv', label: 'Smart TV', icon: Tv },
  { id: 'fire-stick', label: 'Fire Stick', icon: Cast },
  { id: 'android', label: 'Android', icon: Smartphone },
  { id: 'apple-tv', label: 'Apple TV', icon: Monitor },
];

export default function CheckoutModal({ planId, onClose }: { planId: string | null; onClose: () => void }) {
  const plan = plans.find((p) => p.id === planId);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [device, setDevice] = useState('smart-tv');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (planId) {
      setStep(1); setStatus('idle'); setName(''); setEmail(''); setDevice('smart-tv');
    }
  }, [planId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (planId) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [planId, onClose]);

  if (!planId || !plan) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting'); setErrorMsg('');
    try {
      const { error } = await supabase.from('orders').insert({
        name: name.trim(), email: email.trim(), plan: plan.name,
        duration: plan.duration, price: plan.price, device_type: device, status: 'pending',
      });
      if (error) throw error;
      setStatus('success'); setStep(3);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-ink-900 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors z-10">
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-1">Order Summary</h3>
              <p className="text-sm text-slate-400 mb-6">Review your plan before checkout.</p>

              <div className="rounded-2xl bg-ink-850 border border-white/5 p-5 mb-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-white">{plan.name}</div>
                    <div className="text-xs text-slate-500">{plan.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display font-black text-2xl text-white">${plan.price}</div>
                    {plan.originalPrice && (
                      <div className="text-sm text-slate-500 line-through">${plan.originalPrice}</div>
                    )}
                  </div>
                </div>
                <div className="pt-3 border-t border-white/5 space-y-2">
                  {plan.features.slice(0, 4).map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" strokeWidth={2.5} />{f}
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={() => setStep(2)} className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 transition-all">
                Continue to Checkout
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit}>
              <h3 className="font-display font-bold text-xl text-white mb-1">Your Details</h3>
              <p className="text-sm text-slate-400 mb-6">We'll send your credentials to this email.</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-ink-850 border border-white/10 text-white placeholder-slate-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-ink-850 border border-white/10 text-white placeholder-slate-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Primary Device</label>
                  <div className="grid grid-cols-4 gap-2">
                    {deviceOptions.map((d) => (
                      <button key={d.id} type="button" onClick={() => setDevice(d.id)} className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${device === d.id ? 'bg-emerald-500/10 border-emerald-500/40' : 'bg-ink-850 border-white/10 hover:border-white/20'}`}>
                        <d.icon className={`w-5 h-5 ${device === d.id ? 'text-emerald-400' : 'text-slate-400'}`} />
                        <span className="text-[10px] text-slate-300">{d.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {status === 'error' && (
                <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-sm text-red-300">{errorMsg}</div>
              )}

              <div className="flex gap-3 mt-6">
                <button type="button" onClick={() => setStep(1)} className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">Back</button>
                <button type="submit" disabled={status === 'submitting'} className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 transition-all disabled:opacity-60 flex items-center justify-center gap-2">
                  {status === 'submitting' ? (<><Loader2 className="w-5 h-5 animate-spin" />Processing...</>) : (`Pay $${plan.price}`)}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                <Check className="w-8 h-8 text-emerald-400" strokeWidth={2.5} />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">Order Received!</h3>
              <p className="text-slate-400 mb-6">
                Thank you, {name.split(' ')[0]}! Your <strong className="text-white">{plan.name}</strong> subscription is being processed. Check your email for setup instructions.
              </p>
              <button onClick={onClose} className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 transition-all">Done</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
