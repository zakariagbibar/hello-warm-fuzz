import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../lib/data';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-ink-900/30">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-[0.15em]">FAQ</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4 tracking-tight">
            Questions? <span className="text-gradient">Answered.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl bg-ink-850/60 border border-white/5 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                <span className="font-semibold text-white">{f.question}</span>
                <ChevronDown className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-slate-400 leading-relaxed">{f.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
