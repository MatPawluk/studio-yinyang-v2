import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export const GradientText = ({ children, className = '' }: GradientTextProps) => {
  return (
    <span 
      className={`bg-gradient-to-r from-white via-lime/80 to-lime bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};
