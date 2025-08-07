import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  X,
  ChevronDown,
  MapPin,
  Bell,
  User,
  Music,
  Camera,
  Mic,
  Palette,
  Star,
  Users,
  MessageSquare,
  Settings,
  LogOut,
  Wand2,
  Guitar,
  Drama,
  HeadphonesIcon,
} from "lucide-react";

const NewNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Mumbai");

  const categories = [
    { name: "Dancer", icon: Music, color: "text-primary" },
    { name: "Singer", icon: Mic, color: "text-secondary" },
    { name: "Magician", icon: Wand2, color: "text-tertiary" },
    { name: "Live Band", icon: Guitar, color: "text-accent" },
    { name: "Anchor", icon: Users, color: "text-primary" },
    { name: "Makeup Artist", icon: Palette, color: "text-secondary" },
    { name: "Photographer", icon: Camera, color: "text-tertiary" },
    { name: "Speaker", icon: MessageSquare, color: "text-accent" },
    { name: "Comedian", icon: Drama, color: "text-primary" },
    { name: "Instrumentalist", icon: HeadphonesIcon, color: "text-secondary" },
    { name: "DJ", icon: HeadphonesIcon, color: "text-tertiary" },
  ];

  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune", "Kolkata"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-cultural rounded-xl flex items-center justify-center shadow-cultural">
              <Star className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-cultural bg-clip-text text-transparent">
              ArtistHub
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Category Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  Categories
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-card/95 backdrop-blur-lg border border-border/50">
                <div className="grid grid-cols-2 gap-1 p-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <DropdownMenuItem
                        key={category.name}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 cursor-pointer"
                      >
                        <IconComponent className={`w-5 h-5 ${category.color}`} />
                        <span className="font-medium">{category.name}</span>
                      </DropdownMenuItem>
                    );
                  })}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Location Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <MapPin className="w-4 h-4" />
                  {selectedLocation}
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card/95 backdrop-blur-lg">
                {cities.map((city) => (
                  <DropdownMenuItem
                    key={city}
                    onClick={() => setSelectedLocation(city)}
                    className="cursor-pointer"
                  >
                    {city}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Us */}
            <Button variant="ghost" className="font-medium">
              Contact Us
            </Button>

            {/* Notification Bell */}
            <div className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center bg-secondary text-xs">
                  3
                </Badge>
              </Button>
            </div>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-card/95 backdrop-blur-lg">
                <DropdownMenuItem className="cursor-pointer">
                  <User className="w-4 h-4 mr-2" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Star className="w-4 h-4 mr-2" />
                  My Bookings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Messages
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-destructive">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent/20 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              <Button variant="outline" className="justify-start">
                Categories
              </Button>
              <Button variant="outline" className="justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                {selectedLocation}
              </Button>
              <Button variant="ghost" className="justify-start">
                Contact Us
              </Button>
              <Button variant="ghost" className="justify-start">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="ghost" className="justify-start">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NewNavigation;