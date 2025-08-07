import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rohit Sharma",
      role: "Wedding Planner",
      location: "Mumbai",
      rating: 5,
      text: "ArtistHub made our wedding planning so much easier! We found an amazing classical dancer and a live band through their platform. The booking process was seamless and the artists were incredibly professional.",
      event: "Wedding Celebration",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Priyanka Gupta",
      role: "Corporate Event Manager",
      location: "Delhi",
      rating: 5,
      text: "We've used ArtistHub for multiple corporate events and they never disappoint. The quality of artists is exceptional and their customer service is top-notch. Highly recommended!",
      event: "Corporate Annual Meet",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Arjun Patel",
      role: "Birthday Party Host",
      location: "Bangalore",
      rating: 5,
      text: "Found the perfect magician for my daughter's birthday party. The kids were mesmerized! The booking was quick and the artist arrived on time. Will definitely use again.",
      event: "Birthday Celebration",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Meera Krishnan",
      role: "Cultural Society President",
      location: "Chennai",
      rating: 5,
      text: "ArtistHub helped us organize our cultural festival with amazing performers from different art forms. The variety and quality of artists available is impressive.",
      event: "Cultural Festival",
      image: "/api/placeholder/100/100"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-cultural bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from satisfied customers who found their perfect artists
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-soft border border-border/50 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>

                    <div className="mt-8">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg lg:text-xl text-foreground mb-8 leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Customer Info */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-border"
                        />
                        <div>
                          <h4 className="font-semibold text-lg text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted-foreground">
                            {testimonial.role} • {testimonial.location}
                          </p>
                          <p className="text-sm text-primary font-medium">
                            {testimonial.event}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary scale-125"
                      : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">2,500+</div>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-tertiary mb-2">95%</div>
            <p className="text-muted-foreground">Repeat Bookings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;