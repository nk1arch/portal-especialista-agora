import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa <span className="text-primary">Localização</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Visite-nos ou entre em contato para agendar seu atendimento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map Placeholder */}
          <Card className="overflow-hidden bg-card border-border h-[400px] flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mapa Interativo</h3>
              <p className="text-muted-foreground">
                Entre em contato conosco para conhecer nossa localização exata
              </p>
            </div>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Entre em contato para conhecer nossa sede
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Telefone</h3>
                  <p className="text-muted-foreground">
                    Ligue para agendar seu atendimento
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">E-mail</h3>
                  <p className="text-muted-foreground">
                    contato@agropower.com.br
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
