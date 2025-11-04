import { Card } from "@/components/ui/card";
import { Wrench, Zap, Navigation, Cpu } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Mecânica",
    description: "Manutenção preventiva e corretiva completa para tratores agrícolas, garantindo máximo desempenho e durabilidade dos equipamentos.",
  },
  {
    icon: Zap,
    title: "Elétrica",
    description: "Diagnóstico e reparo de sistemas elétricos, incluindo instalações, modificações e modernização de componentes eletrônicos.",
  },
  {
    icon: Navigation,
    title: "Piloto Automático",
    description: "Instalação, configuração e manutenção de sistemas de piloto automático para agricultura de precisão e otimização do trabalho.",
  },
  {
    icon: Cpu,
    title: "Agricultura de Precisão",
    description: "Implementação de tecnologias avançadas para maximizar produtividade, reduzir custos e promover sustentabilidade na lavoura.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Serviços <span className="text-primary">Especializados</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos soluções completas para manutenção e tecnologia agrícola, 
            com expertise em marcas líderes do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group"
            >
              <div className="mb-4 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
