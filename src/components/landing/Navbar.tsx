import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="My Invest" className="h-10" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="/#solution" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            O que oferecemos
          </a>
          <a href="/#assets" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            Ativos
          </a>
          <a href="/#how-it-works" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            Como Funciona
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <a href="/signup">Criar Conta Grátis</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
