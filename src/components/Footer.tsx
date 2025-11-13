import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">

        {/* === FLEX LAYOUT FOR BRAND, CONTACT & NEWSLETTER === */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* === Brand Section === */}
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/favicon.ico" 
                alt="DipDips Logo" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold">DipDips</h3>
                <p className="text-sm text-background/70">Hygienic food for everyone</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              DipDips – Ready-to-Eat Vegetarian Meals Under 10 Minutes
               Healthy. Affordable. Instant. 100% Veg.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-background group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* === Contact Info Section === */}
          <div className="flex-1">
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">+1 234 567 8900</p>
                  <p className="text-sm text-background/70">24/7 Customer Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">hello@DipDips.com</p>
                  <p className="text-sm text-background/70">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Mumbai, Maharashtra</p>
                  <p className="text-sm text-background/70">India</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">6:00 AM - 11:00 PM</p>
                  <p className="text-sm text-background/70">Pickup Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* === Newsletter Section === */}
          <div className="flex-1">
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-sm text-background/80 mb-4">
              Subscribe to get special offers and health tips.
            </p>
            <div className="flex space-x-2 mb-8">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button className="bg-primary hover:bg-primary/90 px-6">
                Subscribe
              </Button>
            </div>

            
          </div>
        </div>
      </div>
    </footer>
  );
};

