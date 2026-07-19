import { Tv, Smartphone, Tablet, Cast, Monitor, Gamepad2 } from 'lucide-react';

const devices = [
  { icon: Tv, name: 'Smart TV', desc: 'Samsung, LG, Android TV' },
  { icon: Cast, name: 'Fire Stick', desc: 'Amazon Fire TV & Stick' },
  { icon: Monitor, name: 'Apple TV', desc: 'tvOS & AirPlay' },
  { icon: Smartphone, name: 'Android', desc: 'Phones & tablets' },
  { icon: Tablet, name: 'iOS', desc: 'iPhone & iPad' },
  { icon: Gamepad2, name: 'MAG Box', desc: 'Set-top boxes' },
];

export default function Devices() {
  return (
    <section id="devices" className="relative py-24 sm:py-32 bg-ink-900/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-[0.15em]">Compatibility</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-4 tracking-tight">
            Works On <span className="text-gradient">Everything</span>
          </h2>
          <p className="text-slate-400 text-lg">Stream on any device, anywhere. Switch between them seamlessly — your subscription follows you.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {devices.map((d) => (
            <div key={d.name} className="flex flex-col items-center text-center p-6 rounded-2xl bg-ink-850/60 border border-white/5 hover:border-emerald-500/20 hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <d.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <div className="font-semibold text-white text-sm mb-1">{d.name}</div>
              <div className="text-xs text-slate-500">{d.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
