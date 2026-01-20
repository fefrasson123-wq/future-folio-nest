import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Shield } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";
const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-primary top-1/4 -left-48 animate-pulse-slow" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent bottom-1/4 -right-32 animate-pulse-slow" style={{
      animationDelay: '2s'
    }} />
      <div className="glow-orb w-[300px] h-[300px] bg-neon-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" style={{
      animationDelay: '1s'
    }} />

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in-up">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Seguro. Simples. Sem conectar contas.</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up text-center">
            <span className="text-foreground text-left text-4xl">Todos os seus</span>
            <br />
            <span className="text-gradient text-5xl">Investimentos</span>
            <br />
            <span className="text-foreground">em um só </span>
            <span className="text-gradient">Lugar</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in-up leading-relaxed font-medium" style={{
          animationDelay: '0.2s'
        }}>Acompanhe Ações, Criptomoedas, Fundos Imobiliários, Renda fixa, Bolsa Americana, imóveis e muito mais, com preços atualizados em tempo real mantendo a Segurança total dos seus dados.</p>

          {/* Primary CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg" asChild>
              <a href="https://myinvestapp.lovable.app/auth?mode=signup">CRIAR CONTA GRÁTIS<ArrowRight className="w-5 h-5" /></a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-between gap-8 mt-12 max-w-2xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
          {[{
            value: "+10",
            label: "Categorias de",
            sublabel: "Investimentos"
          }, {
            value: "+500",
            label: "Investidores organizando",
            sublabel: "seu patrimônio"
          }].map((stat, index) => <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold neon-text mb-2">
                  {stat.value}
                </div>
                <div className="text-white text-sm uppercase tracking-wider">
                  {stat.label}
                  {stat.sublabel && <><br />{stat.sublabel}</>}
                </div>
              </div>)}
          </div>
        </div>

        {/* Floating dashboard preview */}
        <div className="mt-16 relative max-w-7xl mx-auto animate-float">
          <div className="glass-card neon-border p-2 rounded-2xl overflow-hidden">
            <img src={dashboardPreview} alt="My Invest Dashboard - Visualização do patrimônio, investimentos e lucros" className="w-full h-auto rounded-xl" style={{
            imageRendering: 'auto',
            WebkitBackfaceVisibility: 'hidden'
          }} loading="eager" />
          </div>
          {/* Glow effect behind the image */}
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-3xl -z-10" />
        </div>

        {/* Secondary CTA Button */}
        <div className="flex justify-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero-outline" size="lg" onClick={scrollToFeatures}>
            O que oferecemos
            <ChevronDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;