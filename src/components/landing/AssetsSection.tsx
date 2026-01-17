import { 
  Bitcoin, 
  TrendingUp, 
  Building2, 
  DollarSign, 
  PieChart, 
  Landmark 
} from "lucide-react";

const assets = [
  {
    icon: Bitcoin,
    title: "Cryptocurrencies",
    description: "Bitcoin, Ethereum, and all major cryptocurrencies",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: TrendingUp,
    title: "Brazilian Stocks",
    description: "B3 listed stocks - PETR4, VALE3, ITUB4, and more",
    color: "from-primary to-accent",
  },
  {
    icon: Building2,
    title: "Real Estate Funds",
    description: "FIIs - Brazilian real estate investment trusts",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: DollarSign,
    title: "US Stocks",
    description: "NYSE and NASDAQ - AAPL, MSFT, GOOGL, AMZN",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: PieChart,
    title: "ETFs",
    description: "Exchange-traded funds from global markets",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Landmark,
    title: "Bank Balances",
    description: "Savings, checking, and fixed-income accounts",
    color: "from-slate-400 to-slate-600",
  },
];

const AssetsSection = () => {
  return (
    <section id="assets" className="py-32 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Track <span className="text-gradient">Every Asset</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From cryptocurrencies to bank accounts, manage all your investments in one unified dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assets.map((asset, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              <div className="glass-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${asset.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${asset.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <asset.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                  {asset.title}
                </h3>
                <p className="text-muted-foreground">
                  {asset.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssetsSection;
