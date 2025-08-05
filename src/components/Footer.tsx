import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              RAGE CUSTOM
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Precision crafted. Boldly designed. Expertly delivered. Your vision, our expertise.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Custom Design</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">3D Modeling</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Precision Manufacturing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Rapid Prototyping</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Quality Assurance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">News</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-RAGE</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@ragecustom.com</span>
              </div>
              <div className="text-sm">
                123 Industrial Way<br />
                Manufacturing District<br />
                City, State 12345
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 RageCustom. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;