import logoIcon from "@/assets/logo-icon.png";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-10" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon container */}
      <img src={logoIcon} alt="My Invest" className="w-10 h-10 rounded-xl object-cover" />
      
      {/* Text */}
      <span 
        className="text-primary font-semibold text-xl tracking-tight"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        My Invest
      </span>
    </div>
  );
};

export default Logo;
