import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Multiple glow orbs for dramatic effect */}
      <div className="glow-orb w-[800px] h-[800px] bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
      <div className="glow-orb w-[400px] h-[400px] bg-accent top-1/4 left-1/4 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="glow-orb w-[300px] h-[300px] bg-neon-cyan bottom-1/4 right-1/4 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Start for free today</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Ready to Take
            <br />
            <span className="text-gradient">Control?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of investors who track their portfolios with My Invest. 
            No hidden fees, no complicated setup, just pure control over your investments.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg">
              Create Free Account
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-muted-foreground text-sm mt-8">
            No credit card required • Free forever for basic tracking
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
