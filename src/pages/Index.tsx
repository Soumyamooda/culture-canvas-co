import NewNavigation from "@/components/NewNavigation";
import HeroCarousel from "@/components/HeroCarousel";
import ImpactStats from "@/components/ImpactStats";
import FeaturedArtists from "@/components/FeaturedArtists";
import ExploreCategories from "@/components/ExploreCategories";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewFooter from "@/components/NewFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewNavigation />
      <HeroCarousel />
      <ImpactStats />
      <FeaturedArtists />
      <ExploreCategories />
      <TestimonialsSection />
      <CTASection />
      <NewFooter />
    </div>
  );
};

export default Index;
