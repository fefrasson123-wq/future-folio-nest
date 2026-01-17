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
    title: "100% Private",
    description: "No API connections or bank passwords. You manually enter all your data with complete privacy.",
  },
  {
    icon: BarChart3,
    title: "Visual Analytics",
    description: "Beautiful charts and graphs to visualize your portfolio distribution and performance over time.",
  },
  {
    icon: Wallet,
    title: "Multi-Asset Support",
    description: "Track crypto, Brazilian stocks, FIIs, US stocks, ETFs, and bank balances all in one place.",
  },
  {
    icon: RefreshCw,
    title: "Easy Updates",
    description: "Quickly update your portfolio values anytime. Simple, fast, and intuitive interface.",
  },
  {
    icon: Lock,
    title: "Secure Storage",
    description: "Your investment data is encrypted and stored securely. Only you have access.",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access your portfolio from any device. Responsive design that works everywhere.",
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
            <span className="text-gradient">Powerful</span> Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to track and manage your investment portfolio with complete privacy and control.
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
