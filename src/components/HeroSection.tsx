import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/src/assets/hero.jpg";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-5 h-5 text-accent fill-accent" />
            <span className="text-muted-foreground text-sm uppercase tracking-wider">
              Premium Custom Services
            </span>
            <Star className="w-5 h-5 text-accent fill-accent" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            RAGE CUSTOM
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Precision Crafted. Boldly Designed. Expertly Delivered.
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your vision into reality with our cutting-edge custom fabrication and design services. 
            From concept to completion, we deliver excellence that exceeds expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              View Our Work
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">24h</div>
              <div className="text-sm text-muted-foreground">Response</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;