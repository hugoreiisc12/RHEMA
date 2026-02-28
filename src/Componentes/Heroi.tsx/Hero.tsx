import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-transparent border border-primary/30 shadow-[inset_0_0_20px_-5px_hsl(var(--primary)/0.3)]">
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-primary text-xs font-bold tracking-wider uppercase">
                Produtora Audiovisual
              </p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] leading-none font-bold text-foreground tracking-tight">
                RHEMA
              </h1>
            </div>

            <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
              <p className="text-xl md:text-2xl text-foreground/90 font-medium">
                Criamos experiências visuais que transformam histórias em arte
              </p>

              <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-bold justify-center lg:justify-start">
                <Link to="/portfolio/filmmaking" className="px-4 py-2 bg-primary text-primary-foreground">FILMMAKING</Link>
                <Link to="/portfolio/fotografia" className="px-4 py-2 bg-secondary text-foreground border border-border">FOTOGRAFIA</Link>
                <Link to="/portfolio/edicao" className="px-4 py-2 bg-secondary text-foreground border border-border">EDIÇÃO</Link>

              </div>

              <div className="flex gap-4 pt-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow transition-all duration-300 font-bold uppercase tracking-wide"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Ver Showreel
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-bold uppercase tracking-wide"
                  asChild
                >
                  <Link to="/portfolio">Portfólio</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative animate-scale-in [animation-delay:200ms] opacity-0">
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl"></div>
              <div className="relative bg-gradient-dark p-4 sm:p-6 md:p-8 border-4 border-primary shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                <div className="aspect-square bg-secondary flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto border-4 border-primary rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-primary ml-1" />
                    </div>
                    <p className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
                      SHOWREEL<br />2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
