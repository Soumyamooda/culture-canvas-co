import { Eye, Target, Sparkles } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-cultural rounded-lg flex items-center justify-center shadow-cultural">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading platform that connects artists with opportunities and 
                celebrates cultural diversity, creating a world where art transcends 
                boundaries and enriches every community.
              </p>
            </div>

            <div className="animate-slide-in">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center shadow-warm">
                  <Target className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Empowering artists and enriching events through seamless collaborations. 
                We bridge the gap between talent and opportunity, making cultural 
                experiences accessible to everyone.
              </p>
            </div>
          </div>

          {/* Artistic Illustration */}
          <div className="relative animate-scale-in">
            <div className="relative bg-gradient-cultural rounded-2xl p-8 shadow-cultural overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 text-center text-white">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float">
                    <Sparkles className="w-10 h-10" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4">Connecting Cultures</h4>
                <p className="text-white/90 leading-relaxed">
                  Every artist has a story to tell, every event needs that perfect touch 
                  of creativity. We're here to make those connections meaningful and memorable.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">5+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">95%</div>
                    <div className="text-sm text-white/80">Client Satisfaction</div>
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

export default VisionMission;