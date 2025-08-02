import { Award, Calendar, Trophy, Star } from "lucide-react";

const AwardsSection = () => {
  const awards = [
    {
      year: "2024",
      title: "Best Cultural Platform Award",
      organization: "India Arts Council",
      description: "Recognized for outstanding contribution to promoting cultural arts and artist empowerment.",
      icon: Trophy,
      color: "primary"
    },
    {
      year: "2023",
      title: "Innovation in Arts Technology",
      organization: "Digital Arts Foundation",
      description: "Awarded for innovative use of technology in connecting artists with opportunities.",
      icon: Star,
      color: "secondary"
    },
    {
      year: "2023",
      title: "Community Impact Excellence",
      organization: "National Heritage Society",
      description: "Honored for significant impact in preserving and promoting cultural traditions.",
      icon: Award,
      color: "tertiary"
    },
    {
      year: "2022",
      title: "Startup of the Year",
      organization: "Mumbai Business Awards",
      description: "Recognized as the most promising startup in the cultural and creative industry.",
      icon: Trophy,
      color: "accent"
    },
    {
      year: "2022",
      title: "Social Impact Award",
      organization: "Artists Welfare Association",
      description: "Acknowledged for creating meaningful livelihood opportunities for artists.",
      icon: Star,
      color: "primary"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-cultural bg-clip-text text-transparent">
            Awards & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence and cultural preservation has been recognized 
            by various prestigious organizations and industry leaders.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-cultural rounded-full"></div>

          {awards.map((award, index) => {
            const IconComponent = award.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`relative flex items-center mb-12 animate-fade-in ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-cultural rounded-full flex items-center justify-center shadow-cultural z-10 animate-float">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Award Content */}
                <div className={`lg:w-5/12 ${isEven ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-cultural transition-all duration-300 group hover:scale-105">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex items-center space-x-2 text-primary font-bold">
                        <Calendar className="w-4 h-4" />
                        <span>{award.year}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {award.title}
                    </h3>
                    
                    <p className="text-secondary font-medium mb-3">
                      {award.organization}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>

                    {/* Decorative element */}
                    <div className="mt-4 w-12 h-1 bg-gradient-cultural rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="lg:w-5/12"></div>
              </div>
            );
          })}
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 bg-gradient-cultural rounded-2xl p-8 text-white shadow-cultural relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-6">Recognition Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-white/90">Awards Received</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5</div>
                <div className="text-white/90">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-white/90">Industry Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;