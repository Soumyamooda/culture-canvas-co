import { useEffect, useState } from "react";
import { Users, Award, Globe, Calendar, Star, Heart } from "lucide-react";

const ImpactStats = () => {
  const [counts, setCounts] = useState({
    artists: 0,
    events: 0,
    rating: 0,
    customers: 0,
    years: 0,
  });

  const stats = [
    {
      icon: Users,
      finalCount: 500,
      suffix: "+",
      label: "Verified Artists",
      color: "primary",
      description: "Professional artists across all categories"
    },
    {
      icon: Calendar,
      finalCount: 1200,
      suffix: "+",
      label: "Events Completed",
      color: "secondary",
      description: "Successful bookings and performances"
    },
    {
      icon: Star,
      finalCount: 4.8,
      suffix: "/5",
      label: "Average Rating",
      color: "accent",
      description: "Customer satisfaction rating"
    },
    {
      icon: Heart,
      finalCount: 10000,
      suffix: "+",
      label: "Happy Customers",
      color: "tertiary",
      description: "Satisfied clients across India"
    },
    {
      icon: Globe,
      finalCount: 12,
      suffix: "+",
      label: "States Covered",
      color: "primary",
      description: "Pan-India artist network"
    },
    {
      icon: Award,
      finalCount: 3,
      suffix: "+",
      label: "Years Active",
      color: "secondary",
      description: "Experience in the industry"
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = stats.map((stat, index) => {
      let currentCount = 0;
      const increment = stat.finalCount / steps;

      return setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.finalCount) {
          currentCount = stat.finalCount;
          clearInterval(timers[index]);
        }

        setCounts(prev => ({
          ...prev,
          [index]: currentCount
        }));
      }, stepDuration);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-cultural bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting artists with opportunities and creating memorable experiences across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const displayCount = stat.finalCount < 10 
              ? (counts[index] || 0).toFixed(1)
              : Math.round(counts[index] || 0).toLocaleString();
            
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-card rounded-2xl p-8 shadow-soft hover:shadow-cultural transition-all duration-500 hover:scale-105 animate-fade-in border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-32 h-32 rounded-full border-2 border-current"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full border border-current"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 bg-${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-${stat.color === 'primary' ? 'cultural' : 'warm'} group-hover:animate-float transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className={`text-4xl lg:text-5xl font-bold mb-2 text-${stat.color} transition-all duration-300`}>
                    {displayCount}{stat.suffix}
                  </div>
                  
                  <div className="text-lg font-semibold mb-2 text-foreground">
                    {stat.label}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;