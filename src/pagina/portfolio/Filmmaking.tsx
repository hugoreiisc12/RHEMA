import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import MediaGallery from "@/components/MediaGallry.tsx/MediaGallery";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PortfolioFilmmaking = () => {
  return (
    <main>
      <div className="px-6 pt-10">
        <ScrollReveal direction="left">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="px-3 py-1 border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/portfolio" className="px-3 py-1 border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all">Portfólio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Filmmaking</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ScrollReveal>
      </div>

      <section className="px-6 py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left" className="space-y-6">
              <p className="text-primary text-sm font-bold tracking-wider uppercase">Serviço</p>
              <h1 className="font-display text-[5rem] md:text-[8rem] leading-none font-bold text-foreground">FILMMAKING</h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                Direção, captação e narrativa cinematográfica para campanhas, clipes e institucionais. Planejamento, roteiro e pós-produção integrados para entregar filmes impactantes.
              </p>
              <div className="flex gap-4">
                <a href="https://wa.me/5521980534868" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-primary-foreground font-bold px-8 py-6 h-auto">Fale Conosco</Button>
                </a>
                <Link to="/portfolio/filmmaking" className="px-8 py-6 h-auto border-2 border-foreground text-foreground font-bold hover:bg-foreground hover:text-background transition-all">Ver Portfólio</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="bg-gradient-dark p-8 border-4 border-primary">
              <div className="aspect-video bg-secondary" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal direction="up">
        <MediaGallery category="FILMMAKING" />
      </ScrollReveal>
    </main>
  );
};

export default PortfolioFilmmaking;
