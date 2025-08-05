import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+1 (555) 123-RAGE",
    subtitle: "Monday - Friday, 8AM - 6PM"
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@ragecustom.com",
    subtitle: "We respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "123 Industrial Way",
    subtitle: "Manufacturing District, City"
  },
  {
    icon: Clock,
    title: "Business Hours",
    detail: "Mon-Fri: 8AM-6PM",
    subtitle: "Sat: 9AM-4PM, Sun: Closed"
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and how we can make it extraordinary.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="John" className="bg-background/50" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Doe" className="bg-background/50" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input placeholder="+1 (555) 123-4567" className="bg-background/50" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Type</label>
                    <select className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background/50 text-sm">
                      <option>Custom Design</option>
                      <option>Precision Manufacturing</option>
                      <option>Prototyping</option>
                      <option>Consultation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Details</label>
                    <Textarea 
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      className="min-h-32 bg-background/50"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-foreground font-medium">{info.detail}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-gradient-primary text-primary-foreground border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Need Urgent Help?</h3>
                <p className="opacity-90 mb-4 text-sm">
                  For time-sensitive projects, call our emergency hotline.
                </p>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary w-full">
                  Emergency Contact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;