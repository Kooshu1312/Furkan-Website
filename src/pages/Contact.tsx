import { useState } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carModel: "",
    issue: "",
    preferredTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.issue) {
      toast.error("Please fill all required fields");
      return;
    }

    // SAVE TO DATABASE
    try {
      const response = await fetch("http://localhost:5000/api/book-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("DATABASE RESPONSE:", data);
    } catch (err) {
      console.error("DATABASE ERROR:", err);
      toast.error("Could not save to database");
    }

    // WHATSAPP SEND
    const phoneNumber = "919999067526"; // SHOP NUMBER (NO + SIGN)
    const message = `
🚗 *New Service Request*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Car Model:* ${formData.carModel || "Not specified"}
*Issue:* ${formData.issue}
*Preferred Time:* ${formData.preferredTime || "Not specified"}
    `.trim();

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");

    toast.success("Request sent successfully!");

    // RESET FORM
    setFormData({
      name: "",
      phone: "",
      carModel: "",
      issue: "",
      preferredTime: "",
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-display text-5xl md:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Book your service appointment or ask anything
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Booking Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-display text-2xl">
                  Book a Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="carModel">Car Model</Label>
                    <Input
                      id="carModel"
                      name="carModel"
                      placeholder="e.g., Honda City 2018"
                      value={formData.carModel}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="issue">Issue *</Label>
                    <Textarea
                      id="issue"
                      name="issue"
                      placeholder="Describe the issue"
                      value={formData.issue}
                      onChange={handleChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Input
                      id="preferredTime"
                      name="preferredTime"
                      placeholder="Tomorrow morning, evening, etc."
                      value={formData.preferredTime}
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Book Service
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Your details will be saved in our system and sent to WhatsApp.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-md shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-display text-xl font-bold mb-2">
                        Call Us
                      </h3>
                      <a
                        href="tel:+919999067526"
                        className="text-primary hover:underline font-semibold text-lg"
                      >
                        +91 99990 67526
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        For quick assistance
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-md shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-display text-xl font-bold mb-2">
                        Visit Us
                      </h3>
                      <p className="text-muted-foreground">Mukherjee Nagar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-md shrink-0">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-display text-xl font-bold mb-2">
                        Shop Hours
                      </h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                        <p>Sunday: Open</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="text-display text-xl font-bold mb-3">
                    Emergency Repair?
                  </h3>
                  <p className="mb-4">Call us immediately!</p>
                  <a href="tel:+919999067526">
                    <Button
                      variant="ctaOutline"
                      size="lg"
                      className="w-full bg-background text-foreground"
                    >
                      Call Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
