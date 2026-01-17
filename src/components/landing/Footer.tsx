import { TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center neon-border">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display text-xl font-bold tracking-wider neon-text">
              MY INVEST
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2024 My Invest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
