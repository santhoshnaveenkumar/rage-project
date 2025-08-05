import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Zap, Target } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Zap, label: "Projects Completed", value: "1000+" },
  { icon: Target, label: "Success Rate", value: "99%" }
];

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">RageCustom</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're not just another fabrication shop. We're innovators, creators, and perfectionists 
              who live and breathe custom design. Our passion for excellence drives everything we do.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Lightning Fast Turnaround</h3>
                  <p className="text-muted-foreground">
                    We understand urgency. Our streamlined processes ensure rapid delivery without sacrificing quality.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Precision Engineering</h3>
                  <p className="text-muted-foreground">
                    Every millimeter matters. Our state-of-the-art equipment ensures tolerances that exceed industry standards.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Award-Winning Quality</h3>
                  <p className="text-muted-foreground">
                    Our commitment to excellence has earned us recognition as industry leaders in custom fabrication.
                  </p>
                </div>
              </div>
            </div>
            
            <Button variant="hero" size="lg">
              Start Your Project
            </Button>
          </div>
          
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center group hover:shadow-glow transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-6 bg-gradient-primary text-primary-foreground border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                <p className="opacity-90 mb-4">
                  Join hundreds of satisfied clients who trust RageCustom for their most important projects.
                </p>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  Get Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;