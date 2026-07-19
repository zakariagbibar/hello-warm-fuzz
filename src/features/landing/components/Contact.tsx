import { useState } from 'react';
import { Mail, MessageCircle, MapPin, Phone, Loader2, Check, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('orders').insert({
        name: name.trim(),
        email: email.trim(),
        plan: 'Contact Inquiry',
        duration: subject.trim() || 'General',
        price: 0,
        device_type: null,
        message: message.trim(),
        status: 'inquiry',
      });

      if (error) throw error;
      setStatus('success');
      setName(''); setEmail(''); setSubject(''); setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-ink-900/40">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-[0.15em]">Get In Touch</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4 tracking-tight">
            Talk To <span className="text-gradient">Our Team</span>
          </h2>
          <p className="text-slate-400 text-lg">Questions about a plan, need a custom quote for your business, or want to become a reseller? We're here 24/7.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, title: 'Email Us', value: 'support@iptvvv.tv', sub: 'Replies within 2 hours' },
              { icon: MessageCircle, title: 'Live Chat', value: 'Available 24/7', sub: 'Average response: under 1 min' },
              { icon: Phone, title: 'Call Us', value: '+1 (416) 555-0192', sub: 'Mon–Fri, 9am–8pm EST' },
              { icon: MapPin, title: 'Headquarters', value: '120 Adelaide St W, Toronto, ON M5H 1T1, Canada', sub: 'IPTvvv Technologies Inc.' },
            ].map((c) => (
              <div key={c.title} className="flex items-start gap-4 p-5 rounded-2xl bg-ink-850/60 border border-white/5 hover:border-emerald-500/20 transition-all">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-0.5">{c.title}</div>
                  <div className="font-semibold text-white">{c.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="p-7 sm:p-8 rounded-3xl bg-ink-850/60 border border-white/5">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                    <Check className="w-8 h-8 text-emerald-400" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 mb-6">Thanks for reaching out. Our team will get back to you shortly.</p>
                  <button onClick={() => setStatus('idle')} className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
                      <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-ink-900 border border-white/10 text-white placeholder-slate-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                      <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-ink-900 border border-white/10 text-white placeholder-slate-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Subject</label>
                    <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-ink-900 border border-white/10 text-white focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all">
                      <option value="">Select a topic...</option>
                      <option value="Sales Inquiry">Sales Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Reseller Partnership">Reseller Partnership</option>
                      <option value="Business / Bulk Plans">Business / Bulk Plans</option>
                      <option value="General">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Message</label>
                    <textarea required value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl bg-ink-900 border border-white/10 text-white placeholder-slate-500 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none" />
                  </div>

                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-sm text-red-300">{errorMsg}</div>
                  )}

                  <button type="submit" disabled={status === 'submitting'} className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2">
                    {status === 'submitting' ? (<><Loader2 className="w-5 h-5 animate-spin" />Sending...</>) : (<><Send className="w-4 h-4" />Send Message</>)}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
