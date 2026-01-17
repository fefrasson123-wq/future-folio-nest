import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-primary top-1/4 -left-48 animate-pulse-slow" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent bottom-1/4 -right-32 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="glow-orb w-[300px] h-[300px] bg-neon-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in-up">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">No passwords required • 100% manual control</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up">
            <span className="text-foreground">All Your</span>
            <br />
            <span className="text-gradient">Investments</span>
            <br />
            <span className="text-foreground">One Dashboard</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Track crypto, stocks, ETFs, real estate funds, and bank balances in one futuristic interface. 
            Add everything manually, keep full control of your data.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {[
              { value: "6+", label: "Asset Types" },
              { value: "100%", label: "Private" },
              { value: "0", label: "Fees" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold neon-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating dashboard preview */}
        <div className="mt-16 relative max-w-5xl mx-auto animate-float">
          <div className="glass-card neon-border p-6 rounded-2xl">
            <div className="grid grid-cols-4 gap-4 mb-6">
              {["Crypto", "Stocks BR", "ETFs", "FIIs"].map((label, i) => (
                <div key={i} className="bg-secondary/50 rounded-lg p-4 text-center">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
                  <div className="font-display text-lg font-bold text-primary">
                    R$ {((i + 1) * 12500).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-32 bg-secondary/30 rounded-lg flex items-center justify-center">
              <div className="flex items-end gap-2 h-20">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                  <div
                    key={i}
                    className="w-6 bg-gradient-to-t from-primary/50 to-primary rounded-t transition-all duration-300 hover:from-primary/70 hover:to-accent"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
