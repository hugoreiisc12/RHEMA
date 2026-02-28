import { Button } from "@/components/ui/button";
import { Mail, Instagram, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-primary/30 shadow-[inset_0_0_20px_-5px_hsl(var(--primary)/0.3)]">
      {/* CTA Section */}
      <div className="py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center space-y-8">
            <ScrollReveal direction="up">
              <h2 className="font-display text-5xl md:text-[10rem] leading-none font-bold text-foreground">
                VAMOS<br />CRIAR
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up">
              <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto">
                Transforme sua visão em realidade. Entre em contato e descubra como podemos elevar seu projeto.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up">
              <a
                href="https://wa.me/5521980534868"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow transition-all duration-300 font-bold uppercase tracking-wide text-lg px-12 py-6 h-auto"
                >
                  <Mail className="mr-2 h-6 w-6" />
                  Fale Conosco
                </Button>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t-2 border-border py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal direction="left">
              <div>
                <h3 className="font-display text-6xl font-bold text-foreground mb-4">
                  RHEMA
                </h3>
                <p className="text-muted-foreground">
                  Produtora audiovisual especializada em criar experiências visuais inesquecíveis.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <div>
                <h4 className="font-bold text-foreground mb-4 uppercase tracking-wide">
                  Serviços
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="hover:text-primary transition-colors cursor-pointer">Filmmaking</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Fotografia</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Edição</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Marketing Digital</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h4 className="font-bold text-foreground mb-4 uppercase tracking-wide">
                  Redes Sociais
                </h4>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://instagram.com/rhema.medi4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                    aria-label="Instagram"
                  >
                    <div className="w-10 h-10 border-2 border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-[0_0_10px_transparent] group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">@rhema.medi4</span>
                  </a>
                  <a
                    href="https://wa.me/5521980534868"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                    aria-label="WhatsApp"
                  >
                    <div className="w-10 h-10 border-2 border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">(21) 98053-4868</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up">
            <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
              <p>© 2025 RHEMA. Todos os direitos reservados.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
