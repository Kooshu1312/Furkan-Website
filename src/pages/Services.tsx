import { Wrench, Car, Droplet, Zap, Gauge, Cog } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import engineImage from "@/assets/engine-repair.jpg";
import dentingImage from "@/assets/denting-painting.jpg";
import acImage from "@/assets/ac-repair.jpg";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "General Service",
      description: "Complete vehicle inspection, oil change, filter replacement, brake check, and fluid top-up. Keep your car running smoothly with regular maintenance.",
      price: "Starting ₹999",
    },
    {
      icon: Cog,
      title: "Engine Repair",
      description: "Expert engine diagnostics, timing belt replacement, head gasket repair, and complete engine overhaul. We handle all engine problems.",
      price: "Price on inspection",
      image: engineImage,
    },
    {
      icon: Car,
      title: "Denting & Painting",
      description: "Professional body work, dent removal, scratch repair, and high-quality painting. Restore your car's appearance to showroom condition.",
      price: "Starting ₹2,999",
      image: dentingImage,
    },
    {
      icon: Droplet,
      title: "AC Repair & Service",
      description: "AC gas refill, compressor repair, cooling system cleaning, and vent maintenance. Stay cool in every season.",
      price: "Starting ₹799",
      image: acImage,
    },
    {
      icon: Zap,
      title: "Electrical Work",
      description: "Battery replacement, alternator repair, wiring fixes, lighting issues, and electrical diagnostics for all vehicle systems.",
      price: "Starting ₹499",
    },
    {
      icon: Gauge,
      title: "Diagnostics",
      description: "Advanced computer diagnostics, error code reading, sensor testing, and comprehensive vehicle health checks using latest equipment.",
      price: "Starting ₹399",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-display text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Professional automotive repair and maintenance services for all makes and models
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display text-4xl font-bold mb-4">Need a Service?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book an appointment or call us for immediate assistance. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button variant="cta" size="lg">
                Book Appointment
              </Button>
            </a>
            <a href="tel:[PUT PHONE NUMBER HERE]">
              <Button variant="outline" size="lg">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
