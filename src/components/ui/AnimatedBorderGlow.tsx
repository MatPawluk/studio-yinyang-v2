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
  duration = 4,
}: AnimatedBorderGlowProps) => {
  return (
    <div className={cn("relative p-[1px] overflow-hidden rounded-[2.5rem]", className)}>
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-50%] z-0"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, transparent 300deg, ${glowColor} 340deg, transparent 360deg)`,
        }}
      />
      <div className="relative z-10 w-full h-full bg-inherit rounded-[calc(2.5rem-1px)] overflow-hidden">
        {children}
      </div>
    </div>
  );
};
