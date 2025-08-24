import {
  Eye,
  Target,
  Sparkles,
  Users,
  Award,
  Globe,
  Calendar,
  Palette,
  Heart,
} from "lucide-react";

const VisionMissionImpact = () => {
  const impacts = [
    { icon: Users, count: "800+", label: "Artists Onboard" },
    { icon: Award, count: "25+", label: "Prestigious Awards" },
    { icon: Globe, count: "12+", label: "States Covered" },
    { icon: Calendar, count: "500+", label: "Successful Bookings" },
    { icon: Palette, count: "100+", label: "Art Styles Represented" },
    { icon: Heart, count: "10K+", label: "Happy Customers" },
  ];

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #E1BE53, #BBE4CD, #C7E89A)",
        padding: "80px 20px",
      }}
    >
      {/* Floating Background Images */}
      <img
        src="/images/feather.png"
        alt="Left Decoration"
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "220px",
          opacity: "0.7",
          zIndex: 1,
          animation: "float-slow 10s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <img
        src="/images/krishna.png"
        alt="Right Decoration"
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          width: "800px",
          opacity: "0.8",
          zIndex: 1,
          animation: "float-slower 14s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Vision & Mission */}
        <div className="vision-mission">
          {/* Left Side Text */}
          <div>
            <div style={{ marginBottom: "40px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "linear-gradient(to right, #E1BE53, #C7E89A)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <Eye size={24} color="white" />
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#7b1d1d",
                    marginLeft: "12px",
                  }}
                >
                  Our Vision
                </h3>
              </div>
              <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#333" }}>
                To be the leading platform that connects artists with
                opportunities and celebrates cultural diversity, creating a
                world where art transcends boundaries and enriches every
                community.
              </p>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "linear-gradient(to right, #C7E89A, #BBE4CD)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <Target size={24} color="#7b1d1d" />
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#7b1d1d",
                    marginLeft: "12px",
                  }}
                >
                  Our Mission
                </h3>
              </div>
              <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#333" }}>
                Empowering artists and enriching events through seamless
                collaborations. We bridge the gap between talent and
                opportunity, making cultural experiences accessible to everyone.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div
            style={{
              background:
                "linear-gradient(to right, #E1BE53, #BBE4CD, #C7E89A)",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "rgba(255,255,255,0.3)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                backdropFilter: "blur(4px)",
              }}
            >
              <Sparkles size={40} color="#7b1d1d" />
            </div>
            <h4
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Connecting Cultures
            </h4>
            <p style={{ color: "#222", lineHeight: "1.6" }}>
              Every artist has a story to tell, every event needs that perfect
              touch of creativity. We're here to make those connections
              meaningful and memorable.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginTop: "32px",
              }}
            >
              <div>
                <div style={{ fontSize: "28px", fontWeight: "bold" }}>5+</div>
                <div style={{ fontSize: "14px", color: "#444" }}>
                  Years Experience
                </div>
              </div>
              <div>
                <div style={{ fontSize: "28px", fontWeight: "bold" }}>95%</div>
                <div style={{ fontSize: "14px", color: "#444" }}>
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Impact */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "bold",
              background: "linear-gradient(to right, #E1BE53, #7b1d1d)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: "16px",
            }}
          >
            Our Impact
          </h2>
          <p
            style={{
              fontSize: "20px",
              maxWidth: "700px",
              margin: "0 auto",
              color: "#333",
            }}
          >
            Numbers that reflect our commitment to connecting artists with
            opportunities and creating unforgettable cultural experiences.
          </p>
        </div>

        <div className="impact-cards">
          {impacts.map((impact, i) => {
            const Icon = impact.icon;
            return (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.3)",
                  borderRadius: "20px",
                  padding: "32px",
                  textAlign: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  backdropFilter: "blur(6px)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "linear-gradient(to right, #E1BE53, #C7E89A)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  }}
                >
                  <Icon size={28} color="white" />
                </div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#7b1d1d",
                    marginBottom: "8px",
                  }}
                >
                  {impact.count}
                </div>
                <div style={{ fontSize: "16px", color: "#333" }}>
                  {impact.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating + Responsive Styles */}
      <style>
        {`
          @keyframes float-slow {
            0% { transform: translateY(0px); }
            50% { transform: translateY(20px); }
            100% { transform: translateY(0px); }
          }
          @keyframes float-slower {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-25px); }
            100% { transform: translateY(0px); }
          }

          /* Responsive Layout */
          .vision-mission {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 80px;
            align-items: center;
          }
          @media (max-width: 768px) {
            .vision-mission {
              grid-template-columns: 1fr;
            }
          }

          .impact-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 24px;
          }
          @media (max-width: 768px) {
            .impact-cards {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </section>
  );
};

export default VisionMissionImpact;
