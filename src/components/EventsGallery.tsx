import { useState } from "react";
import { Calendar, MapPin, User, Eye, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import veenaImage from "@/assets/veena.png";      // <-- Veena image path
import mandalaImage from "@/assets/mandala.png";  // <-- Mandala image path

const EventsGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const events = [
    {
      id: 1,
      title: "Classical Dance Festival 2024",
      date: "March 15, 2024",
      location: "Mumbai Cultural Center",
      artist: "Priya Sharma",
      category: "Past Events",
      image:
        "https://images.unsplash.com/photo-1583944122302-90ac25ad175b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A mesmerizing evening of Bharatanatyam performances",
    },
    {
      id: 2,
      title: "Fusion Music Night",
      date: "April 22, 2024",
      location: "Delhi Arts Theatre",
      artist: "Rhythmic Souls Band",
      category: "Upcoming Events",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "An innovative blend of traditional and modern music",
    },
    {
      id: 3,
      title: "Live Portrait Exhibition",
      date: "February 28, 2024",
      location: "Bangalore Art Gallery",
      artist: "Rajesh Kumar",
      category: "Past Events",
      image:
        "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Watch master artists create stunning portraits live",
    },
    {
      id: 4,
      title: "Cultural Heritage Celebration",
      date: "May 10, 2024",
      location: "Hyderabad Convention Center",
      artist: "Multiple Artists",
      category: "Upcoming Events",
      image:
        "https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A grand celebration of diverse cultural traditions",
    },
    {
      id: 5,
      title: "Contemporary Dance Workshop",
      date: "January 18, 2024",
      location: "Chennai Dance Academy",
      artist: "Maya Patel",
      category: "Past Events",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Interactive workshop on modern dance techniques",
    },
    {
      id: 6,
      title: "Traditional Music Ensemble",
      date: "June 5, 2024",
      location: "Kolkata Music Hall",
      artist: "Sitar Symphony Group",
      category: "Upcoming Events",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Classical Indian music with traditional instruments",
    },
  ];

  const filters = ["All", "Past Events", "Upcoming Events"];

  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter((event) => event.category === activeFilter);

  return (
    <section
      id="gallery"
      className="relative py-20"
      style={{ backgroundColor: "#40C0E7" }}
    >
      {/* Decorative Veena on left */}
      <img
        src={veenaImage}
        alt="Veena Art"
        className="absolute left-4 bottom-0 w-28 md:w-40 opacity-80 pointer-events-none select-none"
      />

      {/* Decorative Mandala on top-right */}
      <img
        src={mandalaImage}
        alt="Mandala Art"
        className="absolute top-0 right-0 w-32 md:w-48 opacity-80 pointer-events-none select-none"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-3"
            style={{ color: "#2D344E" }}
          >
            Cultural Events Gallery
          </h2>
          <p className="text-base text-white max-w-2xl mx-auto">
            Explore our rich portfolio of cultural events, showcasing the diverse
            talents of our artist community across various venues and
            celebrations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#D15F16] text-white shadow-cultural"
                  : "bg-white/80 text-black hover:bg-white"
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span className="font-medium">{filter}</span>
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="flex flex-wrap justify-center gap-0">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="group rounded-lg overflow-hidden shadow-md transition-all duration-500 animate-fade-in m-2"
              style={{
                backgroundColor: "#D15F16",
                animationDelay: `${index * 0.1}s`,
                width: "260px", // reduced card size
              }}
            >
              {/* Event Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-2 left-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      event.category === "Upcoming Events"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {event.category}
                  </span>
                </div>
                <button className="absolute top-2 right-2 w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                  <Eye className="w-3 h-3" />
                </button>
              </div>

              {/* Event Details */}
              <div className="p-2" style={{ color: "#691624" }}>
                <h3 className="text-sm font-bold mb-1 transition-colors group-hover:text-[#2D344E]">
                  {event.title}
                </h3>
                <p className="mb-1 text-xs line-clamp-2">{event.description}</p>

                <div className="space-y-1 mb-2 text-xs">
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3 h-3 text-white" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3 h-3 text-white" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <User className="w-3 h-3 text-white" />
                    <span>{event.artist}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full text-xs py-1 group-hover:bg-[#2D344E] group-hover:text-white transition-all duration-300"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button
            size="sm"
            style={{ backgroundColor: "#2D344E", color: "white" }}
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;
