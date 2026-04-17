import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionSection from "@/components/VisionSection";
import ConceptSection from "@/components/ConceptSection";
import PillarsSection from "@/components/PillarsSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import WhySection from "@/components/WhySection";
import PricingSection from "@/components/PricingSection";
import PartnersSection from "@/components/PartnersSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VisionSection />
      <ConceptSection />
      <PillarsSection />
      <PrinciplesSection />
      <WhySection />
      <PricingSection />
      <PartnersSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </>
  );
}
