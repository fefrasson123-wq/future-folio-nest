import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  // Fallback: guarantees navigation even if the section isn't mounted yet.
  // This also makes the behavior consistent with hash-based deep links.
  if (window.location.hash !== `#${id}`) {
    window.location.hash = id;
  }

  window.setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 0);
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="My Invest" className="h-10" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("solution")} 
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            O que oferecemos
          </button>
          <button 
            onClick={() => scrollToSection("assets")} 
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Ativos
          </button>
          <button 
            onClick={() => scrollToSection("how-it-works")} 
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
          >
            Como Funciona
          </button>
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
