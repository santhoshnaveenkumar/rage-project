import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import customDesignIcon from "@/assets/custom-design-icon.png";
import precisionIcon from "@/assets/precision-icon.png";
import deliveryIcon from "@/assets/delivery-icon.png";

const services = [
  {
    icon: customDesignIcon,
    title: "Custom Design",
    description: "Unique designs tailored to your exact specifications. Our creative team brings your wildest ideas to life with precision and artistry.",
    features: ["3D Modeling", "Concept Development", "Design Consultation", "Rapid Prototyping"]
  },
  {
    icon: precisionIcon,
    title: "Precision Manufacturing",
    description: "State-of-the-art fabrication using cutting-edge technology. Every piece is crafted with meticulous attention to detail.",
    features: ["CNC Machining", "3D Printing", "Laser Cutting", "Quality Assurance"]
  },
  {
    icon: deliveryIcon,
    title: "Fast Delivery",
    description: "Lightning-fast turnaround times without compromising quality. We understand that time is money in today's fast-paced world.",
    features: ["Rush Orders", "Global Shipping", "Real-time Tracking", "On-time Guarantee"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive custom solutions that transform your ideas into reality. 
            From initial concept to final delivery, we've got you covered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="premium" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;