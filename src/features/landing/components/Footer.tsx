import { Tv, Mail, MessageCircle, MapPin } from 'lucide-react';

const cols = [
  { title: 'Service', links: [
    { label: 'About Us', href: '#about' },
    { label: 'Pricing Plans', href: '#pricing' },
    { label: 'Channel List', href: '#channels' },
    { label: 'Supported Devices', href: '#devices' },
    { label: 'Setup Guides', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]},
  { title: 'Company', links: ['Reviews', 'Contact Us', 'Refund Policy', 'Terms of Service', 'Privacy Policy'] as (string | { label: string; href: string })[] },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Tv className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                IPTV<span className="text-emerald-400">vvv</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              Premium IPTV streaming service with 15,000+ live channels and 60,000+ movies & series in Full HD and 4K.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-emerald-400" />support@iptvvv.tv</div>
              <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-emerald-400" />24/7 Live Chat</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" />Toronto, Canada</div>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-white mb-4">{col.title}</h4>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={typeof l === 'string' ? l : l.label}>
                    <a href={typeof l === 'string' ? '#' : l.href} className="text-slate-400 hover:text-emerald-400 transition-colors">
                      {typeof l === 'string' ? l : l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display font-bold text-white mb-4">Get Started</h4>
            <p className="text-slate-400 text-sm mb-4">Join 120,000+ subscribers streaming worldwide.</p>
            <a href="#pricing" className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 transition-all">
              Subscribe Now
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 IPTvvv. All rights reserved.</p>
          <p className="text-xs max-w-xl text-center sm:text-right">
            IPTvvv is a streaming service provider. We do not host any content; all streams are provided by third parties. Use of this service is subject to our Terms & Privacy Policy.
          </p>
        </div>
      </div>
    </footer>
  );
}
