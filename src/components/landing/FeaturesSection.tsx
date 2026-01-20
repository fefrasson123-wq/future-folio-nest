import { 
  Shield, 
  BarChart3, 
  Wallet, 
  RefreshCw, 
  Lock, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Privado",
    description: "Sem conexões de API ou senhas bancárias. Você insere todos os seus dados manualmente com total privacidade.",
  },
  {
    icon: BarChart3,
    title: "Análises Visuais",
    description: "Gráficos bonitos para visualizar a distribuição e o desempenho do seu portfólio ao longo do tempo.",
  },
  {
    icon: Wallet,
    title: "Multi-Ativos",
    description: "Acompanhe cripto, ações brasileiras, FIIs, ações americanas, ETFs e saldos bancários em um só lugar.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações Fáceis",
    description: "Atualize os valores do seu portfólio rapidamente. Interface simples, rápida e intuitiva.",
  },
  {
    icon: Lock,
    title: "Armazenamento Seguro",
    description: "Seus dados de investimento são criptografados e armazenados com segurança. Só você tem acesso.",
  },
  {
    icon: Smartphone,
    title: "Responsivo",
    description: "Acesse seu portfólio de qualquer dispositivo. Design responsivo que funciona em qualquer lugar.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="glow-orb w-[500px] h-[500px] bg-primary/30 -top-48 right-0 animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Recursos</span> Poderosos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo o que você precisa para acompanhar e gerenciar seu portfólio de investimentos com total privacidade e controle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card neon-border p-8 rounded-xl hover:neon-border-intense transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
