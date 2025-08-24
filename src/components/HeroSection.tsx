import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.png')", // use your background
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Left Logo */}
      <img
        src="/images/jignasa-logo.png"
        alt="Logo"
        className="absolute top-6 left-6 w-32 md:w-40"
      />

      {/* Top Right Jagannath Logo with animation */}
      <img
        src="/images/jagannath-logo.png"
        alt="Jagannath"
        className="absolute top-6 right-6 w-20 md:w-24 animate-bounce-slow"
      />

      {/* Main Title */}
      <h1 className="text-6xl md:text-8xl font-serif text-gray-800 drop-shadow-lg">
        Odyssey
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg md:text-2xl font-sans text-gray-700">
        The Journey of India’s Largest Culture Education Company
      </p>

      {/* People Group Image */}
      <div className="mt-12">
        <img
          src="/images/people-group.png"
          alt="Community"
          className="max-w-5xl mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
