import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/GlowingEffect';

interface FloatingStatCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
  delay?: number;
}

export const FloatingStatCard = ({ value, label, icon: Icon, className, delay = 0 }: FloatingStatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex flex-col gap-6 p-10 rounded-[3rem] bg-white/[0.03] backdrop-blur-[50px] border border-white/5 shadow-2xl pointer-events-auto transition-all duration-1000 group overflow-hidden",
        className
      )}
    >
      <GlowingEffect
        spread={80}
        glow={true}
        disabled={false}
        proximity={100}
        inactiveZone={0.01}
        borderRadius={48}
        movementDuration={6}
      />

      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none z-10" />
      
      {Icon && (
        <div className="w-14 h-14 rounded-2xl bg-[#c4ff00]/5 border border-[#c4ff00]/10 flex items-center justify-center relative z-20 group-hover:bg-[#c4ff00] transition-all duration-700 group-hover:shadow-[0_0_30px_rgba(196,255,0,0.3)]">
          <Icon className="w-7 h-7 text-[#c4ff00] group-hover:text-black transition-colors duration-700" />
        </div>
      )}
      
      <div className="relative z-20">
        <p className="text-white font-black text-6xl tracking-tighter leading-tight mb-1 group-hover:text-[#c4ff00] transition-colors duration-700">
          {value}
        </p>
        <p className="text-white/30 text-[11px] uppercase font-bold tracking-[0.3em] leading-tight transition-colors duration-700 group-hover:text-white/50">
          {label}
        </p>
      </div>
    </motion.div>
  );
};
