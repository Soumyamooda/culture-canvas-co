import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Search } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-tertiary/10 rounded-3xl p-12 lg:p-16 shadow-cultural border border-border/50">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-8 left-8 w-32 h-32 rounded-full border-2 border-current animate-float"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full border border-current animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full border border-current animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-cultural bg-clip-text text-transparent leading-tight">
              Ready to Book the Perfect Artist?
            </h2>
            
            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers who found their ideal performers through our platform. 
              Start your journey to an unforgettable event today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                variant="cultural" 
                size="lg" 
                className="group text-lg px-8 py-4 h-auto shadow-warm hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Search className="mr-2 w-5 h-5" />
                Start Browsing
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto border-2 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border/30">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Verified Artists</h3>
                <p className="text-sm text-muted-foreground">All artists are background checked and verified</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Secure Payments</h3>
                <p className="text-sm text-muted-foreground">Safe and secure payment processing</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.5a9.5 9.5 0 000 19 9.5 9.5 0 000-19z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">Round-the-clock customer assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;