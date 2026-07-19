import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Channels from '@/components/Channels';
import Pricing from '@/components/Pricing';
import Devices from '@/components/Devices';
import Reviews from '@/components/Reviews';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CheckoutModal from '@/components/CheckoutModal';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-ink-950 text-white selection:bg-emerald-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Channels />
        <Pricing onSelectPlan={setSelectedPlan} />
        <Devices />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CheckoutModal planId={selectedPlan} onClose={() => setSelectedPlan(null)} />
    </div>
  );
}
