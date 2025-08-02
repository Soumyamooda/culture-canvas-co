import { useState, useEffect } from "react";
import { Building, Users, Award, Heart } from "lucide-react";

const PartnersSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const partners = [
    {
      name: "Arts Council of India",
      category: "Government Partner",
      logo: "ACI",
      description: "Supporting traditional arts preservation"
    },
    {
      name: "Cultural Heritage Foundation",
      category: "NGO Partner",
      logo: "CHF",
      description: "Promoting cultural diversity"
    },
    {
      name: "EventPro Management",
      category: "Corporate Partner",
      logo: "EPM",
      description: "Professional event management"
    },
    {
      name: "Artists Welfare Society",
      category: "Community Partner",
      logo: "AWS",
      description: "Artist empowerment initiatives"
    },
    {
      name: "Mumbai Cultural Center",
      category: "Venue Partner",
      logo: "MCC",
      description: "Premier cultural venue"
    },
    {
      name: "Digital Arts Platform",
      category: "Technology Partner",
      logo: "DAP",
      description: "Innovative arts technology"
    }
  ];

  const categories = [
    { name: "Government", icon: Building, count: 3 },
    { name: "NGOs", icon: Heart, count: 5 },
    { name: "Corporate", icon: Award, count: 8 },
    { name: "Community", icon: Users, count: 9 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 3));
    }, 3000);
    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <section id="partners" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-cultural bg-clip-text text-transparent">
            Partners & Collaborations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work with diverse partners to create a thriving ecosystem that 
            supports artists and enriches cultural experiences.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-cultural transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-cultural rounded-full flex items-center justify-center mx-auto mb-4 shadow-cultural animate-float">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{category.name}</h3>
                <p className="text-3xl font-bold text-primary mb-1">{category.count}+</p>
                <p className="text-muted-foreground text-sm">Partners</p>
              </div>
            );
          })}
        </div>

        {/* Partners Carousel */}
        <div className="relative overflow-hidden bg-card rounded-2xl p-8 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.slice(currentSlide * 3, currentSlide * 3 + 3).map((partner, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                {/* Partner Logo */}
                <div className="w-20 h-20 bg-gradient-cultural rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-cultural group-hover:shadow-warm transition-shadow duration-300">
                  <span className="text-2xl font-bold text-white">{partner.logo}</span>
                </div>
                
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {partner.name}
                </h4>
                
                <p className="text-secondary font-medium mb-2">
                  {partner.category}
                </p>
                
                <p className="text-muted-foreground text-sm">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(partners.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 bg-gradient-cultural rounded-2xl p-8 text-white shadow-cultural relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-6">Partnership Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Wider Reach</div>
                <div className="text-white/90 text-sm">Access to diverse audiences</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Quality Assurance</div>
                <div className="text-white/90 text-sm">Verified partner network</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Resource Sharing</div>
                <div className="text-white/90 text-sm">Collaborative resources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Cultural Impact</div>
                <div className="text-white/90 text-sm">Meaningful social change</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;