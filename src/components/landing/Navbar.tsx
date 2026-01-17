import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center neon-border">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display text-xl font-bold tracking-wider neon-text">
            MY INVEST
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            Features
          </a>
          <a href="#assets" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            Assets
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            How It Works
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            Login
          </Button>
          <Button variant="outline" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
