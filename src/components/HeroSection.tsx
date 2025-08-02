import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, Calendar } from "lucide-react";
import dancePerformance from "@/assets/dance-performance.jpg";
import musicEvent from "@/assets/music-event.jpg";
import portraitPainting from "@/assets/portrait-painting.jpg";
import culturalGathering from "@/assets/cultural-gathering.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: dancePerformance,
      title: "Classical Dance Performances",
      subtitle: "Experience the grace and elegance of traditional dance forms"
    },
    {
      image: musicEvent,
      title: "Live Musical Events",
      subtitle: "Immerse yourself in the magic of live cultural music"
    },
    {
      image: portraitPainting,
      title: "Artistic Creations",
      subtitle: "Watch masterpieces come to life with skilled artists"
    },
    {
      image: culturalGathering,
      title: "Cultural Celebrations",
      subtitle: "Join vibrant gatherings that celebrate our rich heritage"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Carousel */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-hero"></div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-background/20 backdrop-blur-sm rounded-full text-white hover:bg-background/30 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-background/20 backdrop-blur-sm rounded-full text-white hover:bg-background/30 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Bringing Culture to Your Doorstep
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 animate-fade-in">
              Book talented artists for your next event in just a few clicks.
            </p>
            <div className="text-lg mb-10 text-white/80 animate-slide-in">
              {slides[currentSlide].subtitle}
            </div>
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;