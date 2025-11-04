import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <img 
            src={logo} 
            alt="AgroPower Logo" 
            className="w-48 h-48 mx-auto object-contain rounded-2xl bg-background/50 backdrop-blur-sm p-4 shadow-2xl"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              AgroPower
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
            Tecnologia e robustez no campo
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Especialistas em manutenção e tecnologia para tratores Valtra e Massey Ferguson. 
            Soluções completas em mecânica, elétrica, piloto automático e agricultura de precisão.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8"
            >
              Entre em Contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="text-lg px-8 border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
