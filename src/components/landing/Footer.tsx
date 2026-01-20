import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src={logo} alt="My Invest" className="h-10" />
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contato
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2024 My Invest. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
