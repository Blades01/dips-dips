import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "#story" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
    ],
    services: [
      { name: "Food Pickup", href: "#pickup" },
      { name: "Catering", href: "#catering" },
      { name: "Franchise", href: "/franchise" },
      { name: "Corporate Orders", href: "#corporate" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Track Order", href: "#track" },
      { name: "Returns", href: "#returns" },
      { name: "Contact Us", href: "/contact" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/public/favicon.ico" 
                  alt="DipDips Logo" 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold">DipDips</h3>
                  <p className="text-sm text-background/70">Hygienic food for everyone</p>
                </div>
              </div>
              <p className="text-background/80 mb-6 leading-relaxed">
                Preparing fresh, healthy, and delicious meals ready for pickup. 
                Made with love, served with care.
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

            {/* Links Sections */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-background/80 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4">Services</h4>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-background/80 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4">Support</h4>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-background/80 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact & Newsletter */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-4 mb-8">
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

              {/* Newsletter */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
                <p className="text-sm text-background/80 mb-4">
                  Subscribe to get special offers and health tips.
                </p>
                <div className="flex space-x-2">
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-background/70">
              © 2024 DipDips. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-background/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-background/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-background/70 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};