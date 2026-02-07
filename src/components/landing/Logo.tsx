import { TrendingUp } from "lucide-react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-10" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon container */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[hsl(160_20%_18%)] border border-primary/20">
        <TrendingUp className="w-5 h-5 text-primary" strokeWidth={2.5} />
      </div>
      
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
