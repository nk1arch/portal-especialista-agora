import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import valtraImg from "@/assets/valtra.jpg";
import masseyImg from "@/assets/massey.jpg";

const specialists = [
  {
    brand: "Valtra",
    image: valtraImg,
    description: "Especialistas certificados em tratores Valtra, oferecendo manutenção completa e suporte técnico especializado para toda linha de produtos.",
    features: ["Manutenção Preventiva", "Reparo de Motor", "Sistema Hidráulico", "Diagnóstico Eletrônico"],
  },
  {
    brand: "Massey Ferguson",
    image: masseyImg,
    description: "Expertise comprovada em tratores Massey Ferguson, garantindo desempenho máximo e confiabilidade em todas as operações agrícolas.",
    features: ["Manutenção Completa", "Transmissão", "Sistema Elétrico", "Modernização"],
  },
];

const Specialists = () => {
  return (
    <section id="specialists" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossas <span className="text-primary">Especialidades</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conhecimento técnico aprofundado nas marcas líderes do mercado agrícola
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {specialists.map((specialist, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={specialist.image}
                  alt={`${specialist.brand} Specialist`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="text-lg px-4 py-2 bg-primary hover:bg-primary/90">
                    Especialista {specialist.brand}
                  </Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {specialist.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {specialist.features.map((feature, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-primary/30 text-foreground hover:bg-primary/10"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialists;
