import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";
const HeroSection = () => {
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
            <span className="text-sm text-primary font-medium">Seguro. Sem conectar contas.</span>
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
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed font-medium" style={{
          animationDelay: '0.2s'
        }}>
            Track crypto, stocks, ETFs, real estate funds, and bank balances in one futuristic interface. 
            Add everything manually, keep full control of your data.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <Button variant="hero" size="lg">
              Start Tracking
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg">
              <Zap className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            {[{
            value: "6+",
            label: "Asset Types"
          }, {
            value: "100%",
            label: "Private"
          }, {
            value: "0",
            label: "Fees"
          }].map((stat, index) => <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold neon-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
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
      </div>
    </section>;
};
export default HeroSection;