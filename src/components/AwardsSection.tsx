import bgimage from "../assets/awardsbg.png";

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      title: "Best Digital Platform",
      category: "Arts & Culture awards",
      description:
        "Excellence in bridging traditional culture with modern technology",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      type: "image",
    },
    {
      id: 2,
      title: "Outstanding Contribution",
      category: "Community Recognition",
      description: "For supporting and empowering local artists worldwide",
      year: "2023",
      type: "text",
    },
    {
      id: 3,
      title: "Innovation Award",
      category: "Tech & Culture",
      description:
        "Blending modern digital solutions with cultural preservation",
      year: "2022",
      type: "text",
    },
  ];

  return (
    <section
      id="awards"
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      {/* Overlay for readability */}
      {/* <div className="absolute inset-0 bg-[#5EC4E7]/80"></div> */}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Awards & Appreciations
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Recognition for our commitment to cultural preservation and
            community building
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column (Image Card) */}
          <div>
            {awards
              .filter((a) => a.type === "image")
              .map((award) => (
                <div
                  key={award.id}
                  className="rounded-xl overflow-hidden border-2 border-[#8B4513] shadow-lg hover:scale-105 transition-transform bg-white"
                >
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="bg-[#D15F16] p-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {award.title}
                      </h3>
                      <p className="text-white/80">{award.category}</p>
                    </div>
                    <span className="bg-gray-200 text-gray-900 text-sm px-4 py-1 rounded-full">
                      {award.year}
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Column (Text Cards stacked) */}
          <div className="flex flex-col gap-8">
            {awards
              .filter((a) => a.type === "text")
              .map((award) => (
                <div
                  key={award.id}
                  className="bg-[#D15F16] rounded-xl p-6 flex items-center justify-between border-2 border-[#8B4513] shadow-md hover:scale-105 transition-transform"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-10 h-10 bg-white text-[#D15F16] flex items-center justify-center rounded-full text-2xl font-bold">
                      ★
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {award.title}
                      </h3>
                      <p className="text-white/80">{award.category}</p>
                      <p className="text-white/90 text-sm mt-1">
                        {award.description}
                      </p>
                    </div>
                  </div>

                  <span className="bg-gray-200 text-gray-900 text-sm px-4 py-1 rounded-full">
                    {award.year}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
