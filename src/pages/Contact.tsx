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
      toast.error("Please fill in all required fields");
      return;
    }

    // 1️⃣ SAVE TO DATABASE (IMPORTANT)
    try {
      const response = await fetch("http://localhost:5000/api/book-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("DB Response:", data);
    } catch (err) {
      console.error("DB ERROR:", err);
      toast.error("Failed to save to database");
    }

    // 2️⃣ SEND TO WHATSAPP
    const phoneNumber = "9999067526"; // ← PUT SHOP NUMBER HERE
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

    toast.success("Request sent!");

    // Reset form
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
            Book your service appointment or reach out for any inquiries
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
                    <Label htmlFor="issue">Issue Description *</Label>
                    <Textarea
                      id="issue"
                      name="issue"
                      placeholder="Describe the problem or service needed"
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
                      placeholder="e.g., Tomorrow morning"
                      value={formData.preferredTime}
                      onChange={handleChange}
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    Book Service
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Your details will be sent to our WhatsApp and saved in our
                    system.
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
                        href="tel:+91 99990 67526"
                        className="text-primary hover:underline font-semibold text-lg"
                      >
                        +91 99990 67526
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Call for immediate assistance
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
                        <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="text-display text-xl font-bold mb-3">
                    Need Immediate Help?
                  </h3>
                  <p className="mb-4">
                    For emergency breakdowns or urgent repairs, call us
                    directly!
                  </p>
                  <a href="tel:+919999067526">
                    <Button
                      variant="ctaOutline"
                      size="lg"
                      className="w-full bg-background hover:bg-background/90 text-foreground"
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
