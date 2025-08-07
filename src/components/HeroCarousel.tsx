import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import dancePerformance from "@/assets/dance-performance.jpg";
import musicEvent from "@/assets/music-event.jpg";
import portraitPainting from "@/assets/portrait-painting.jpg";
import culturalGathering from "@/assets/cultural-gathering.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: dancePerformance,
      title: "Bring Art to Your Events",
      subtitle: "Discover talented artists for any occasion - from classical dancers to modern performers",
      cta: "Explore Artists & Bands"
    },
    {
      image: musicEvent,
      title: "Find the Perfect Artist",
      subtitle: "Connect with verified musicians, singers, and performers in your city",
      cta: "Browse Categories"
    },
    {
      image: portraitPainting,
      title: "Book in Just a Few Clicks",
      subtitle: "Simple booking process with transparent pricing and instant confirmation",
      cta: "Start Booking"
    },
    {
      image: culturalGathering,
      title: "Celebrate Culture Together",
      subtitle: "From intimate gatherings to grand celebrations, find artists for every event",
      cta: "View Events"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden mt-16">
      {/* Carousel Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-background/10 backdrop-blur-md rounded-full text-white hover:bg-background/20 transition-all duration-300 hover:scale-110 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-background/10 backdrop-blur-md rounded-full text-white hover:bg-background/20 transition-all duration-300 hover:scale-110 border border-white/20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90 animate-slide-in leading-relaxed max-w-2xl">
                {slides[currentSlide].subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
                <Button 
                  variant="hero" 
                  className="group text-lg px-8 py-4 h-auto"
                  title="Explore Artists & Bands"
                >
                  EA
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4 h-auto"
                >
                  Learn More
                </Button>
              </div>

              {/* Floating Search Bar */}
              <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-background/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-2xl">
                  <h3 className="text-lg font-semibold mb-3 text-white">Quick Search</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Search by artist name, category, or location..."
                      className="flex-1 px-4 py-3 rounded-lg bg-background/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    />
                    <Button variant="secondary" className="px-6 py-3 h-auto">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;