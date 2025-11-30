import { Phone, MapPin, Clock, Wrench } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-md">
                <Wrench className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-display text-xl font-bold">
                Furkan Automobiles
              </span>
            </div>
            <p className="text-sm opacity-80">
              Your trusted neighborhood auto repair shop. Quality service, honest pricing.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-display text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 shrink-0" />
                <a href="tel:[PUT PHONE NUMBER HERE]" className="hover:text-primary transition-colors">
                  +91-9999067526
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Mukharjee Nagar</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-display text-lg mb-4">Hours</h3>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </div>
              <div className="ml-6 opacity-80">Sunday: Still Open</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Furkhan Automobiles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
