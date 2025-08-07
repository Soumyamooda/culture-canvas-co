import {
  Music,
  Mic,
  Camera,
  Palette,
  Users,
  MessageSquare,
  Wand2,
  Guitar,
  Drama,
  HeadphonesIcon,
  Mic2,
  Crown
} from "lucide-react";

const ExploreCategories = () => {
  const categories = [
    {
      name: "Dancer",
      icon: Music,
      count: 125,
      color: "primary",
      gradient: "from-primary to-primary-glow",
      description: "Classical & Contemporary"
    },
    {
      name: "Singer",
      icon: Mic,
      count: 98,
      color: "secondary",
      gradient: "from-secondary to-accent",
      description: "Bollywood & Regional"
    },
    {
      name: "Live Band",
      icon: Guitar,
      count: 67,
      color: "tertiary",
      gradient: "from-tertiary to-primary",
      description: "Rock, Pop & Folk"
    },
    {
      name: "Magician",
      icon: Wand2,
      count: 45,
      color: "accent",
      gradient: "from-accent to-secondary",
      description: "Stage & Close-up Magic"
    },
    {
      name: "Photographer",
      icon: Camera,
      count: 156,
      color: "primary",
      gradient: "from-primary to-tertiary",
      description: "Event & Portrait"
    },
    {
      name: "Anchor",
      icon: Mic2,
      count: 78,
      color: "secondary",
      gradient: "from-secondary to-primary",
      description: "Event & Corporate"
    },
    {
      name: "Makeup Artist",
      icon: Palette,
      count: 89,
      color: "tertiary",
      gradient: "from-tertiary to-accent",
      description: "Bridal & Fashion"
    },
    {
      name: "Speaker",
      icon: MessageSquare,
      count: 56,
      color: "accent",
      gradient: "from-accent to-primary",
      description: "Motivational & Corporate"
    },
    {
      name: "Comedian",
      icon: Drama,
      count: 34,
      color: "primary",
      gradient: "from-primary to-secondary",
      description: "Stand-up & Improv"
    },
    {
      name: "DJ",
      icon: HeadphonesIcon,
      count: 87,
      color: "secondary",
      gradient: "from-secondary to-tertiary",
      description: "Club & Wedding"
    },
    {
      name: "Instrumentalist",
      icon: Crown,
      count: 62,
      color: "tertiary",
      gradient: "from-tertiary to-secondary",
      description: "Classical & Modern"
    },
    {
      name: "All Categories",
      icon: Users,
      count: 897,
      color: "accent",
      gradient: "from-accent to-primary-glow",
      description: "Explore Everything"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-cultural bg-clip-text text-transparent">
            Explore by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover artists across various categories and find the perfect match for your event
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.name}
                className="group relative overflow-hidden bg-card rounded-2xl p-6 shadow-soft hover:shadow-cultural transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-in border border-border/50"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-${category.color === 'primary' ? 'cultural' : 'warm'} group-hover:animate-float transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Category Name */}
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  
                  {/* Artist Count */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-${category.color}/10 text-${category.color} text-sm font-semibold`}>
                    {category.count} Artists
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-primary/20 rounded-2xl transition-all duration-300"></div>
                
                {/* Click Ripple Effect */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-active:opacity-100 transition-opacity duration-150 rounded-2xl"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-muted-foreground mb-6">
              Tell us about your specific requirements and we'll help you find the perfect artist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-cultural text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-warm">
                Post Your Requirement
              </button>
              <button className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted/50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;