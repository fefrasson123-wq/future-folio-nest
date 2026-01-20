import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowRight } from "lucide-react";

const plans = {
  free: {
    name: "Free",
    price: "R$ 0",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      "Organize seus investimentos",
      "Até 10 ativos",
      "Até 2 categorias",
      "Preços automáticos",
    ],
    cta: "Começar Grátis",
    popular: false,
  },
  pro: {
    name: "Pro",
    price: "R$ 19,90",
    period: "/mês",
    description: "Para investidores sérios",
    features: [
      "Ativos ilimitados",
      "Categorias ilimitadas",
      "Relatórios avançados",
      "Histórico completo",
      "Exportações",
    ],
    cta: "Começar Grátis",
    popular: true,
  },
  premium: {
    name: "Premium",
    price: "R$ 39,90",
    period: "/mês",
    description: "Controle total",
    features: [
      "Tudo do Pro",
      "Suporte prioritário",
      "Alertas personalizados",
      "API de integração",
      "Multi-usuários",
      "Relatórios personalizados",
    ],
    cta: "Começar Grátis",
    popular: false,
  },
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="glow-orb w-[600px] h-[600px] bg-primary/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Planos <span className="text-gradient">simples</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sem confusão. Escolha o que faz sentido para você.
          </p>
        </div>
        
        <Tabs defaultValue="pro" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-12 bg-card/50 p-1">
            <TabsTrigger value="free" className="font-display">Free</TabsTrigger>
            <TabsTrigger value="pro" className="font-display">Pro</TabsTrigger>
            <TabsTrigger value="premium" className="font-display">Premium</TabsTrigger>
          </TabsList>
          
          {Object.entries(plans).map(([key, plan]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className={`glass-card p-8 md:p-12 rounded-2xl max-w-2xl mx-auto ${plan.popular ? 'neon-border-intense' : 'border border-border/50'}`}>
                {plan.popular && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/50 mb-6">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">Mais Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display text-5xl font-bold neon-text">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="/signup">
                    {plan.cta}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <p className="text-center text-muted-foreground text-sm mt-8">
          O foco é criar conta, não pagar agora. Comece grátis e evolua quando quiser.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
