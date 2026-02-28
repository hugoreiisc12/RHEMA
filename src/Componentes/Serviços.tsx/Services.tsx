const services = [
  {
    number: "01",
    title: "FILMMAKING",
    description: "Direção, captação e narrativa cinematográfica. Roteiro, set e pós integrados para filmes impactantes.",
    route: "/servicos/filmmaking",
  },
  {
    number: "02",
    title: "FOTOGRAFIA",
    description: "Fotografia comercial, editorial e publicitária. Capturamos momentos que contam histórias.",
    route: "/servicos/fotografia",
  },
  {
    number: "03",
    title: "EDIÇÃO",
    description: "Pós-produção de alto nível. Color grading, motion graphics e efeitos visuais cinematográficos.",
    route: "/servicos/edicao",
  },
  {
    number: "04",
    title: "MARKETING",
    description: "Estratégias digitais integradas. Transformamos conteúdo visual em resultados mensuráveis.",
    route: "/servicos/marketing",
  },
];

const Services = () => {
  return (
    <section className="py-32 px-6 bg-transparent border border-primary/30 shadow-[inset_0_0_20px_-5px_hsl(var(--primary)/0.3)]">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-none font-bold text-foreground">
            SERVIÇOS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <a href={service.route}
              key={index}
              className="group p-8 bg-secondary border-2 border-border hover:border-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary">
                  {service.number}
                </span>
                <div className="flex-1 space-y-4">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
