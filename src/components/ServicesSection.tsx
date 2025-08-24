import bgImage from "../assets/bg.png";
import performingIcon from "../assets/serviceicon.png";
import visualIcon from "../assets/serviceicon.png";
import literaryIcon from "../assets/serviceicon.png";
import culinaryIcon from "../assets/serviceicon.png";

const ServicesSection = () => {
  const services = [
    {
      title: "Performing Arts",
      subtitle: "Traditional & Elegant",
      description:
        "Performing arts encompass creative expressions like dance, music, theatre, and storytelling, brought to life through live performance. They combine skill, emotion, and artistry to engage and inspire audiences, while remaining deeply rooted in culture and tradition yet evolving with contemporary trends. This art form celebrates human creativity, communication, and the shared experiences that connect people across time and place.",
      icon: performingIcon,
    },
    {
      title: "Visual Arts",
      subtitle: "Expressive & Inspiring",
      description:
        "Visual arts encompass creative expressions like painting, sculpture, photography, and digital design, brought to life through visual mediums. They combine technique, imagination, and perspective to captivate and inspire viewers, while remaining deeply rooted in cultural heritage yet evolving with contemporary innovations. This art form celebrates human creativity, storytelling, and the visual connections that bridge people across time and place.",
      icon: visualIcon,
    },
    {
      title: "Literary Arts",
      subtitle: "Where Imagination Speaks",
      description:
        "Literary arts encompass creative expressions like poetry, storytelling, drama, and prose, brought to life through the written and spoken word. They combine imagination, language, and emotion to engage and inspire audiences, while remaining deeply rooted in cultural heritage yet evolving with contemporary voices. This art form celebrates human expression, shared narratives, and the power of words to connect people across time and place.",
      icon: literaryIcon,
    },
    {
      title: "Culinary Arts",
      subtitle: "Deliciously Crafted",
      description:
        "Culinary arts encompass creative expressions like cooking, baking, food presentation, and gastronomy, brought to life through flavorful experiences. They combine skill, creativity, and technique to delight and inspire people, while remaining deeply rooted in cultural traditions yet evolving with contemporary trends. This art form celebrates human connection, sensory enjoyment, and the shared experiences that bring people together across time and place.",
      icon: culinaryIcon,
    },
  ];

  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      id="services"
      className="py-20 bg-kalablue relative bg-cover bg-center"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Diverse Services We Offer
        </h2>
        <p className="text-center text-white max-w-2xl mx-auto mb-12">
          From traditional classical arts to contemporary performances, we
          connect you with artists who specialize in various forms of cultural
          expression.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-70 border-2 border-[brown] rounded-xl p-6 text-justify hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 mr-3 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-left">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 italic text-left">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-sm font-bold">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
