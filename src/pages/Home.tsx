import { Phone, MessageCircle, Wrench, Clock, Shield, ThumbsUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-garage.jpg";

const handleWhatsAppClick = () => {
  const phoneNumber = "919999067526"; // no +, no spaces
  const message = "Hi! I need help with my car.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};


  const quickServices = [
    {
      icon: Wrench,
      title: "General Service",
      description: "Complete car maintenance and servicing",
      price: "Starting ₹999"
    },
    {
      icon: Wrench,
      title: "Engine Repair",
      description: "Expert engine diagnostics and repair",
      price: "Price on inspection"
    },
    {
      icon: Wrench,
      title: "AC Service",
      description: "AC repair, gas refill, and maintenance",
      price: "Starting ₹799"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional car repair garage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-garage-dark/90 to-garage-dark/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-yellow-600">
          <h1 className="text-display text-5xl md:text-7xl font-bold mb-4 tracking-wide">
            Furkan Automobiles
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium">
            Your Trusted Neighborhood Auto Repair Shop
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+91 99990 67526">
              <Button variant="cta" size="xl" className="gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
            <Button 
              variant="ctaOutline" 
              size="xl" 
              className="gap-2 bg-background/10 backdrop-blur-sm hover:bg-primary"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display text-4xl font-bold mb-6">Expert Car Care in [Mukherjee Nagar]</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience serving the community, we provide honest, reliable, and affordable car repair services. 
              From routine maintenance to complex repairs, our skilled technicians are here to keep your vehicle running smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-display text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quickServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-display text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-display text-xl font-bold mb-2">Honest Pricing</h3>
              <p className="text-sm opacity-80">No hidden charges. Transparent quotes before we start.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-display text-xl font-bold mb-2">Expert Technicians</h3>
              <p className="text-sm opacity-80">Skilled professionals with years of experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-display text-xl font-bold mb-2">Quality Service</h3>
              <p className="text-sm opacity-80">We stand behind our work with satisfaction guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Hours */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-primary" />
                <h3 className="text-display text-2xl font-bold">Shop Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Saturday</span>
                  <span className="text-muted-foreground">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span className="text-muted-foreground">Still Open</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="text-display text-2xl font-bold">Visit Us</h3>
              </div>
              <p className="text-muted-foreground mb-4">Mukherjee Nagar</p>
              <a href="tel:[PUT PHONE NUMBER HERE]" className="text-primary font-semibold hover:underline">
              +91 99990 67526
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="bg-card p-4 rounded-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2841763576436!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjIiTiA3N8KwMTInMzIuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
                title="Shop Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
