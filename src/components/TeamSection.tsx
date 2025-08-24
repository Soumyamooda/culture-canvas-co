import { Linkedin, Twitter, Mail } from "lucide-react";
import teamb1 from "../assets/teambg1.png";
import teamb2 from "../assets/teambg2.png";
import teamb3 from "../assets/teambg3.png";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Arjun Patel",
      designation: "Founder & CEO",
      bio: "Passionate about bridging cultural gaps and empowering artists worldwide.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
      twitter: "#",
      email: "arjun@culturecanvas.co",
    },
    {
      name: "Priya Sharma",
      designation: "Head of Artist Relations",
      bio: "Former classical dancer turned advocate for artist empowerment and cultural preservation.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
      twitter: "#",
      email: "priya@culturecanvas.co",
    },
    {
      name: "Rahul Mehta",
      designation: "Technology Director",
      bio: "Building innovative platforms that connect artists with opportunities seamlessly.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
      twitter: "#",
      email: "rahul@culturecanvas.co",
    },
    {
      name: "Kavya Singh",
      designation: "Community Manager",
      bio: "Fostering vibrant artist communities and ensuring exceptional event experiences.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      linkedin: "#",
      twitter: "#",
      email: "kavya@culturecanvas.co",
    },
  ];

  return (
    <section
      id="team"
      className="relative py-10 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #8AB9B5, #E9DDBB, #ECA77D)",
      }}
    >
      {/* Background Decorative Images */}
      <img
        src={teamb1}
        alt="bg decoration"
        className="absolute top-0 left-0 w-60 opacity-80"
      />
      <img
        src={teamb3}
        alt="bg decoration"
        className="absolute bottom-0 left-0 w-60 opacity-80"
      />
      <img
        src={teamb2}
        alt="bg decoration"
        className="absolute top-0 right-0 w-60 opacity-80 object-contain"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black-100">
            Our Amazing Team
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Meet the passionate individuals who are dedicated to connecting
            artists with opportunities and celebrating cultural diversity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-400 h-180 border-2 border-[#8B4513] group rounded-2xl overflow-hidden shadow-soft hover:shadow-cultural transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{
                backgroundColor: "#D15F16",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Profile Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Social Links */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-black transition-colors">
                  {member.name}
                </h3>
                <p className="text-white/80 font-medium mb-3">
                  {member.designation}
                </p>
                <p className="text-white/90 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
