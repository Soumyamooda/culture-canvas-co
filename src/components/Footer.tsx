import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Events Gallery", href: "#gallery" },
    { name: "Artists", href: "#artists" },
    { name: "Team", href: "#team" },
    { name: "Awards", href: "#awards" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Classical Dance",
    "Western Dance", 
    "Live Music",
    "Portrait & Live Painting",
    "Tattoo & Mehndi",
    "Theatre/Drama",
    "Emcees / Anchors"
  ];

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-cultural bg-clip-text text-transparent">
              Stay Connected with Culture
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest updates on events, artists, and cultural celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="cultural" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-cultural rounded-lg flex items-center justify-center shadow-cultural">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-cultural bg-clip-text text-transparent">
                CultureCanvas Co
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Connecting artists with opportunities and celebrating cultural diversity 
              through seamless collaborations and unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                  >
                    {service}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-primary mt-1">
                  <MapPin className="w-full h-full" />
                </div>
                <div className="text-muted-foreground">
                  <p>123 Cultural Street</p>
                  <p>Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-primary">
                  <Phone className="w-full h-full" />
                </div>
                <a href="tel:+91-9876543210" className="text-muted-foreground hover:text-primary transition-colors">
                  +91-98765-43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-primary">
                  <Mail className="w-full h-full" />
                </div>
                <a href="mailto:hello@culturecanvas.co" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@culturecanvas.co
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 CultureCanvas Co. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;