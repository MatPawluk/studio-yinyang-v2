import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBorderGlowProps {
  children?: React.ReactNode;
  className?: string;
  glowColor?: string;
  duration?: number;
}

export const AnimatedBorderGlow = ({
  children,
  className,
  glowColor = "#c4ff00",
  duration = 6,
}: AnimatedBorderGlowProps) => {
  return (
    <div className={cn("relative p-[2px] rounded-[2.5rem] overflow-visible group", className)}>
      {/* Outer Ambient Aura (Soft glow bleeding outwards) */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-20%] z-0 opacity-40 blur-[40px] pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg, 
            transparent 0deg, 
            transparent 280deg, 
            ${glowColor} 320deg, 
            #00ffa3 340deg,
            ${glowColor} 360deg)`,
        }}
      />

      {/* Main Border Glow (Concentrated light on the edge) */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.5rem]">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[-150%] opacity-100 blur-[10px]"
          style={{
            background: `conic-gradient(from 0deg, 
              transparent 0deg, 
              transparent 280deg, 
              ${glowColor} 320deg, 
              #00ffa3 340deg,
              ${glowColor} 360deg)`,
          }}
        />
      </div>

      {/* Inner Content Container */}
      <div className="relative z-10 w-full h-full bg-[#050608]/90 backdrop-blur-3xl rounded-[calc(2.5rem-2px)] overflow-hidden border border-white/5">
        {children}
      </div>
    </div>
  );
};
