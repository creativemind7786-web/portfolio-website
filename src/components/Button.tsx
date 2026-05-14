import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({ children, onClick, variant = 'primary', href, className = "", type = "button", disabled }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 font-bold text-sm uppercase tracking-tighter transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:opacity-90 shadow-xl shadow-primary/20",
    secondary: "bg-accent text-white hover:opacity-90 shadow-xl shadow-accent/20",
    outline: "border border-white/10 glass hover:border-primary hover:text-primary"
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className="inline-block"
    >
      {/* @ts-ignore */}
      <Component
        href={href}
        onClick={onClick}
        type={href ? undefined : type}
        disabled={disabled}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}
