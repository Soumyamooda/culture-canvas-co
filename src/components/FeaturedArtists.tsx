import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedArtists = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);

  const filters = ["All", "Trending", "Top Rated", "Near You"];

  const artists = [
    {
      id: 1,
      name: "Priya Sharma",
      category: "Classical Dancer",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 124,
      location: "Mumbai",
      price: "₹8,000",
      featured: true,
      trending: true,
      topRated: true
    },
    {
      id: 2,
      name: "Ravi Kumar",
      category: "Live Band",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 89,
      location: "Delhi",
      price: "₹15,000",
      featured: true,
      trending: true
    },
    {
      id: 3,
      name: "Anjali Mehta",
      category: "Singer",
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 156,
      location: "Bangalore",
      price: "₹6,500",
      featured: true,
      topRated: true
    },
    {
      id: 4,
      name: "Vikram Singh",
      category: "Magician",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 98,
      location: "Mumbai",
      price: "₹4,000",
      featured: true,
      trending: true
    },
    {
      id: 5,
      name: "Sneha Patel",
      category: "Photographer",
      image: "/api/placeholder/300/300",
      rating: 4.6,
      reviews: 203,
      location: "Chennai",
      price: "₹3,500",
      featured: true
    },
    {
      id: 6,
      name: "Arjun Reddy",
      category: "DJ",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 87,
      location: "Hyderabad",
      price: "₹12,000",
      featured: true,
      topRated: true
    }
  ];

  const filteredArtists = artists.filter(artist => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Trending") return artist.trending;
    if (activeFilter === "Top Rated") return artist.topRated;
    if (activeFilter === "Near You") return artist.location === "Mumbai"; // Mock filter
    return true;
  });

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredArtists.length / itemsPerPage);
  const currentArtists = filteredArtists.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-cultural bg-clip-text text-transparent">
            Featured Artists & Bands
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover talented performers who bring magic to every event
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => {
                  setActiveFilter(filter);
                  setCurrentPage(0);
                }}
                className="transition-all duration-300"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Artists Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {currentArtists.map((artist, index) => (
              <div
                key={artist.id}
                className="group relative overflow-hidden bg-card rounded-2xl shadow-soft hover:shadow-cultural transition-all duration-500 hover:scale-105 animate-fade-in border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Featured Badge */}
                {artist.featured && (
                  <Badge className="absolute top-4 left-4 z-10 bg-secondary text-secondary-foreground">
                    Featured
                  </Badge>
                )}

                {/* Artist Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Artist Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-muted-foreground mb-3">{artist.category}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="font-semibold">{artist.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({artist.reviews} reviews)
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{artist.location}</span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-muted-foreground">Starts at</span>
                      <div className="text-lg font-bold text-primary">{artist.price}</div>
                    </div>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <span className="text-sm text-muted-foreground">
                {currentPage + 1} of {totalPages}
              </span>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="cultural" size="lg" className="px-8">
            View All Artists
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;