import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBorderGlowProps {
  children?: React.ReactNode;
  className?: string;
  glowColor?: string;
  duration?: number;
  borderRadius?: string;
}

export const AnimatedBorderGlow = ({
  children,
  className,
  glowColor = "#c4ff00",
  duration = 6,
  borderRadius = "2.5rem", // Note: Best used with px or rem for reliable calc() results
}: AnimatedBorderGlowProps) => {
  return (
    <div 
      className={cn("relative p-[2px] overflow-hidden group", className)}
      style={{ borderRadius }}
    >
      {/* Main Border Glow (Concentrated light on the edge, clipped) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] opacity-100 blur-[8px]"
          style={{
            background: `conic-gradient(from 0deg, 
              transparent 0deg, 
              transparent 280deg, 
              ${glowColor} 320deg, 
              #00ffa3 340deg,
              ${glowColor} 360deg)`,
            willChange: 'transform',
            transformOrigin: 'center center',
          }}
        />
      </div>

      {/* Inner Content Container */}
      <div 
        className="relative z-10 w-full h-full bg-[#050608]/95 overflow-hidden border border-white/5"
        style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
      >
        {children}
      </div>
    </div>
  );
};
