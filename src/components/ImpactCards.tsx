import { Users, Award, Globe, Calendar, Palette, Heart } from "lucide-react";

const ImpactCards = () => {
  const impacts = [
    {
      icon: Users,
      count: "800+",
      label: "Artists Onboard",
      color: "primary",
      gradient: "gradient-cultural"
    },
    {
      icon: Award,
      count: "25+",
      label: "Prestigious Awards",
      color: "secondary",
      gradient: "gradient-warm"
    },
    {
      icon: Globe,
      count: "12+",
      label: "States Covered",
      color: "tertiary",
      gradient: "gradient-primary"
    },
    {
      icon: Calendar,
      count: "500+",
      label: "Successful Bookings",
      color: "accent",
      gradient: "gradient-warm"
    },
    {
      icon: Palette,
      count: "100+",
      label: "Art Styles Represented",
      color: "primary",
      gradient: "gradient-cultural"
    },
    {
      icon: Heart,
      count: "10K+",
      label: "Happy Customers",
      color: "secondary",
      gradient: "gradient-warm"
    }
  ];

  return (
    <section className="py-20 bg-background mandala-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-cultural bg-clip-text text-transparent">
            Our Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect our commitment to connecting artists with opportunities 
            and creating unforgettable cultural experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => {
            const IconComponent = impact.icon;
            
            return (
              <div
                key={index}
                className="traditional-card group relative overflow-hidden p-8 hover:shadow-cultural transition-all duration-500 hover:scale-105 animate-fade-in lotus-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-${impact.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 bg-${impact.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-cultural group-hover:animate-float`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className={`text-4xl lg:text-5xl font-bold mb-2 text-${impact.color}`}>
                    {impact.count}
                  </div>
                  
                  <div className="text-muted-foreground font-medium">
                    {impact.label}
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactCards;