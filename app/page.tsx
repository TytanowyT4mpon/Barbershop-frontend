import HeroSection from "./components/Hero";
import ContactsBlock from "./components/ContactsBlock/indec";
import StatsSections from "./components/Stats";
import ServicesSection from "./components/Services";
import Footer from "./components/Footer";
import BarbersChooseSection from "./components/BarbersChoose";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ContactsBlock />
      <StatsSections />
      <ServicesSection />
      <BarbersChooseSection />
      <Footer />
    </>
  );
}
