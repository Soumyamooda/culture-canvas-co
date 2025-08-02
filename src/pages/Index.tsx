import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VisionMission from "@/components/VisionMission";
import ImpactCards from "@/components/ImpactCards";
import ServicesSection from "@/components/ServicesSection";
import EventsGallery from "@/components/EventsGallery";
import TeamSection from "@/components/TeamSection";
import AwardsSection from "@/components/AwardsSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <VisionMission />
      <ImpactCards />
      <ServicesSection />
      <EventsGallery />
      <TeamSection />
      <AwardsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
