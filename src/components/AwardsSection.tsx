import { Award, Trophy, Star } from "lucide-react";

const AwardsSection = () => {
  const awards = [
    {
      year: "2024",
      title: "Best Cultural Platform Award",
      organization: "India Arts Council",
      icon: Trophy,
    },
    {
      year: "2023",
      title: "Innovation in Arts Technology",
      organization: "Digital Arts Foundation",
      icon: Star,
    },
    {
      year: "2023",
      title: "Community Impact Excellence",
      organization: "National Heritage Society",
      icon: Award,
    },
    {
      year: "2022",
      title: "Startup of the Year",
      organization: "Mumbai Business Awards",
      icon: Trophy,
    },
    {
      year: "2022",
      title: "Social Impact Award",
      organization: "Artists Welfare Association",
      icon: Star,
    }
  ];

  return (
    <section id="awards" className="py-20 bg-background paisley-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-cultural bg-clip-text text-transparent">
            Awards & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognized by prestigious organizations for excellence in cultural arts and innovation.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            
            return (
              <div
                key={index}
                className="traditional-card p-6 hover:shadow-cultural transition-all duration-300 group hover:scale-105 animate-fade-in lotus-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-cultural">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {award.year}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {award.title}
                </h3>
                
                <p className="text-secondary text-sm font-medium">
                  {award.organization}
                </p>

                {/* Decorative element */}
                <div className="mt-4 w-8 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Achievement Summary */}
        <div className="bg-tertiary rounded-xl p-6 text-white shadow-cultural relative overflow-hidden cultural-border">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Recognition Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">25+</div>
                <div className="text-white/90 text-sm">Awards Received</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">5</div>
                <div className="text-white/90 text-sm">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">15+</div>
                <div className="text-white/90 text-sm">Industry Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;