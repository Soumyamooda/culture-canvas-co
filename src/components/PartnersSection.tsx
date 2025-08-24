import { Building, Users, Award, Heart } from "lucide-react";
import PartnersBg from "../assets/Partners.png";

const PartnersSection = () => {
  const categories = [
    { name: "Government", icon: Building, count: 3 },
    { name: "NGOs", icon: Heart, count: 5 },
    { name: "Corporate", icon: Award, count: 8 },
    { name: "Community", icon: Users, count: 9 }
  ];

  return (
    <section
      id="partners"
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${PartnersBg})`,
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/25"></div>

      <div className="relative container mx-auto px-4 lg:px-8 text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#2D344E" }}>
            Partners & Collaborations
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-black">
            We work with diverse partners to create a thriving ecosystem that 
            supports artists and enriches cultural experiences.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-xl p-6 w-48 min-h-48 text-center shadow-soft hover:shadow-cultural transition-all duration-300 hover:scale-105 animate-fade-in flex flex-col items-center justify-center"
              style={{
                backgroundColor: "#D15F16",
                animationDelay: `${index * 0.1}s`
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {category.name}
              </h3>
              <p className="text-4xl font-extrabold mb-1" style={{ color: "#2D344E" }}>
                {category.count}+
              </p>
              <p className="text-lg font-medium" style={{ color: "#2D344E" }}>
                Partners
              </p>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div
          className="mt-16 rounded-xl p-6 text-white shadow-lg relative overflow-hidden max-w-4xl mx-auto"
          style={{
            background: "linear-gradient(135deg, #54A86A 0%, #D15F16 50%, #53C6C5 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-6">Partnership Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold mb-2">Wider Reach</div>
                <div className="text-white/90 text-sm">Access to diverse audiences</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold mb-2">Quality Assurance</div>
                <div className="text-white/90 text-sm">Verified partner network</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold mb-2">Resource Sharing</div>
                <div className="text-white/90 text-sm">Collaborative resources</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold mb-2">Cultural Impact</div>
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
