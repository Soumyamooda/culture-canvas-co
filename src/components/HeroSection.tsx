import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/odyssey-hero.jpg"; // your uploaded image path

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden mt-16" // Added padding to offset navbar
    >
      {/* Static Hero Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: `url(${heroImage})`}}
      ></div>

      {/* Content Overlay */}
      {/* <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Odyssey: Celebrating Culture
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-white/90 animate-fade-in">
            The Journey of India's Largest Culture Education Company
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button variant="hero" className="group">
              Explore Artists
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
              <Calendar className="mr-2 w-5 h-5" />
              Post Your Requirement
            </Button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
