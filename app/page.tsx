import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ConceptSection from "@/components/ConceptSection";
import PillarsSection from "@/components/PillarsSection";
import WhySection from "@/components/WhySection";
import KickoffSection from "@/components/KickoffSection";
import PricingSection from "@/components/PricingSection";
import PartnersSection from "@/components/PartnersSection";
import SpeakingSection from "@/components/SpeakingSection";
import InnerCircleSection from "@/components/InnerCircleSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ConceptSection />
      <PillarsSection />
      <WhySection />
      <KickoffSection />
      <PricingSection />
      <PartnersSection />
      <SpeakingSection />
      <InnerCircleSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </>
  );
}
