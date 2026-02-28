

const About = () => {
  return (
    <section className="pt-16 pb-32 px-6 bg-transparent relative overflow-hidden border border-primary/30 shadow-[inset_0_0_20px_-5px_hsl(var(--primary)/0.3)]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-16 items-center">
          <div className="space-y-8 animate-scale-in" style={{ animationDelay: '200ms', opacity: 0 }}>
            <div>
              <p className="text-primary text-sm font-bold tracking-wider uppercase mb-4">
                Sobre Nós
              </p>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl leading-none font-bold text-foreground">
                CRIANDO<br />MOMENTOS<br />INESQUECÍVEIS
              </h2>
            </div>
            <div className="space-y-6 text-base sm:text-lg text-muted-foreground">
              <p>
                Na RHEMA, transformamos visões em realidade através da arte audiovisual.
                Cada projeto é uma nova história esperando para ser contada.
              </p>
              <p>
                Direção, captação e narrativa cinematográfica alinhadas ao propósito de cada marca.
                Roteiro, set e pós-produção integrados para resultados consistentes.
              </p>
              <p>
                Do conceito à entrega final, cada detalhe importa. Cada frame conta uma história.
              </p>
            </div>
            <div className="flex gap-6 pt-4">
              <div className="border-l-4 border-primary pl-6">
                <div className="font-display text-5xl text-foreground font-bold">100+</div>
                <p className="text-muted-foreground font-bold mt-2">PROJETOS</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <div className="font-display text-5xl text-foreground font-bold">50+</div>
                <p className="text-muted-foreground font-bold mt-2">CLIENTES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
