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
      title: "Odyssey of Culture",
      subtitle: "Celebrate India’s artistic heritage through dance and rhythm",
    },
    {
      image: musicEvent,
      title: "Symphony of Traditions",
      subtitle: "Immerse in soulful performances and timeless melodies",
    },
    {
      image: portraitPainting,
      title: "Canvas of Creativity",
      subtitle: "Witness imagination take form with strokes of brilliance",
    },
    {
      image: culturalGathering,
      title: "Festivals of Unity",
      subtitle: "Join vibrant gatherings that embrace cultural harmony",
    },
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
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay with cultural vibe */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-900/60 via-orange-700/40 to-teal-800/60"></div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-orange-600/40 backdrop-blur-sm rounded-full text-white hover:bg-orange-600/70 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-orange-600/40 backdrop-blur-sm rounded-full text-white hover:bg-orange-600/70 transition-all duration-300 hover:scale-110"
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
                  ? "bg-orange-500 scale-125"
                  : "bg-white/60 hover:bg-orange-400"
              }`}
            />
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-wide drop-shadow-lg">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-orange-100 drop-shadow">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-lg mb-10 text-orange-200">
              Bringing India’s cultural legacy to every doorstep
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 group">
                Explore Artists
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="bg-transparent border border-orange-400 text-orange-100 hover:bg-orange-600/30 px-6 py-3 rounded-lg transition-all">
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
