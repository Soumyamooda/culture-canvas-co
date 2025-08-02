import { useState } from "react";
import { Calendar, MapPin, User, Eye, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      image: "https://images.unsplash.com/photo-1583944122302-90ac25ad175b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A mesmerizing evening of Bharatanatyam performances"
    },
    {
      id: 2,
      title: "Fusion Music Night",
      date: "April 22, 2024",
      location: "Delhi Arts Theatre",
      artist: "Rhythmic Souls Band",
      category: "Upcoming Events",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "An innovative blend of traditional and modern music"
    },
    {
      id: 3,
      title: "Live Portrait Exhibition",
      date: "February 28, 2024",
      location: "Bangalore Art Gallery",
      artist: "Rajesh Kumar",
      category: "Past Events",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Watch master artists create stunning portraits live"
    },
    {
      id: 4,
      title: "Cultural Heritage Celebration",
      date: "May 10, 2024",
      location: "Hyderabad Convention Center",
      artist: "Multiple Artists",
      category: "Upcoming Events",
      image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A grand celebration of diverse cultural traditions"
    },
    {
      id: 5,
      title: "Contemporary Dance Workshop",
      date: "January 18, 2024",
      location: "Chennai Dance Academy",
      artist: "Maya Patel",
      category: "Past Events",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Interactive workshop on modern dance techniques"
    },
    {
      id: 6,
      title: "Traditional Music Ensemble",
      date: "June 5, 2024",
      location: "Kolkata Music Hall",
      artist: "Sitar Symphony Group",
      category: "Upcoming Events",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Classical Indian music with traditional instruments"
    }
  ];

  const filters = ["All", "Past Events", "Upcoming Events"];

  const filteredEvents = activeFilter === "All" 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-cultural bg-clip-text text-transparent">
            Cultural Events Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our rich portfolio of cultural events, showcasing the diverse 
            talents of our artist community across various venues and celebrations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-cultural text-white shadow-cultural"
                  : "bg-card text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border"
              }`}
            >
              <Filter className="w-4 h-4" />
              <span className="font-medium">{filter}</span>
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-cultural transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Event Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.category === "Upcoming Events"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {event.category}
                  </span>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                  <Eye className="w-5 h-5" />
                </button>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4 text-tertiary" />
                    <span>{event.artist}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="cultural" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;