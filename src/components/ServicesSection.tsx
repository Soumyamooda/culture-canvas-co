import { useState } from "react";
import React from "react";
import { Music, Palette, Drama, Mic, Heart, Camera, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: Music,
      title: "Classical Dance",
      subtitle: "Traditional & Elegant",
      description: "Experience the grace of Bharatanatyam, Kathak, Kuchipudi, and other classical dance forms performed by trained artists.",
      styles: ["Bharatanatyam", "Kathak", "Kuchipudi", "Odissi", "Mohiniyattam"],
      color: "primary"
    },
    {
      icon: Users,
      title: "Western Dance",
      subtitle: "Modern & Dynamic",
      description: "Contemporary, hip-hop, salsa, and ballroom dance performances that energize any event.",
      styles: ["Contemporary", "Hip-Hop", "Salsa", "Ballroom", "Jazz"],
      color: "secondary"
    },
    {
      icon: Music,
      title: "Live Music",
      subtitle: "Bands & Solo Artists",
      description: "From traditional Indian music to modern bands, we have musicians for every taste and occasion.",
      styles: ["Classical Indian", "Fusion", "Rock Bands", "Solo Artists", "Folk Music"],
      color: "tertiary"
    },
    {
      icon: Palette,
      title: "Portrait & Live Painting",
      subtitle: "Artistic Creations",
      description: "Watch master artists create beautiful portraits and paintings live at your event.",
      styles: ["Oil Paintings", "Watercolor", "Digital Art", "Caricatures", "Live Sketching"],
      color: "accent"
    },
    {
      icon: Heart,
      title: "Tattoo & Mehndi",
      subtitle: "Body Art Specialists",
      description: "Professional tattoo artists and mehndi designers for special occasions and celebrations.",
      styles: ["Traditional Mehndi", "Contemporary Henna", "Temporary Tattoos", "Bridal Designs", "Festival Art"],
      color: "primary"
    },
    {
      icon: Drama,
      title: "Theatre/Drama",
      subtitle: "Storytelling & Performance",
      description: "Theatrical performances, storytelling, and dramatic presentations that captivate audiences.",
      styles: ["Classical Theatre", "Modern Drama", "Storytelling", "Puppet Shows", "Interactive Theatre"],
      color: "secondary"
    },
    {
      icon: Mic,
      title: "Emcees / Anchors",
      subtitle: "Event Hosting",
      description: "Professional hosts and anchors who can manage your event flow and keep audiences engaged.",
      styles: ["Bilingual Hosting", "Cultural Events", "Corporate Events", "Weddings", "Festivals"],
      color: "tertiary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-cultural bg-clip-text text-transparent">
            Diverse Services We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From traditional classical arts to contemporary performances, we connect you 
            with artists who specialize in various forms of cultural expression.
          </p>
        </div>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-cultural text-white shadow-cultural`
                    : "bg-background text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Display */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-soft animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-cultural rounded-2xl flex items-center justify-center shadow-cultural">
                  {React.createElement(services[activeTab].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-1">
                    {services[activeTab].title}
                  </h3>
                  <p className="text-lg text-secondary font-medium">
                    {services[activeTab].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {services[activeTab].description}
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Specializations:</h4>
                <div className="flex flex-wrap gap-3">
                  {services[activeTab].styles.map((style, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="cultural" size="lg">
                Find Artists
              </Button>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-cultural rounded-2xl p-8 text-white shadow-cultural relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm animate-float">
                      {React.createElement(services[activeTab].icon, { className: "w-10 h-10" })}
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Ready to Book?</h4>
                    <p className="text-white/90">Connect with verified {services[activeTab].title.toLowerCase()} artists</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-sm text-white/80">Available Artists</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold mb-1">4.8⭐</div>
                      <div className="text-sm text-white/80">Average Rating</div>
                    </div>
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

export default ServicesSection;