import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import FarmTypes from '@/components/FarmTypes';
import SmartFarming from '@/components/SmartFarming';
import HowWeWork from '@/components/HowWeWork';
import WhyChooseUs from '@/components/WhyChooseUs';
import ExpertCTA from '@/components/ExpertCTA';
import LatestNews from '@/components/LatestNews';
import HowItWorksCTA from '@/components/HowItWorksCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <FarmTypes />
      <SmartFarming />
      <HowWeWork />
      <WhyChooseUs />
      <ExpertCTA />
      <LatestNews />
      <HowItWorksCTA />
      <Contact />
      <Footer />
    </main>
  );
}
