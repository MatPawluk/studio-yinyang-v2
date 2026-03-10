import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const { progress, active } = useProgress();
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Once progress hits 100 and it's no longer active, wait a moment then trigger split
    if (progress === 100 && !active) {
      const timer = setTimeout(() => {
        setIsDone(true);
        // Notify parent after curtains have split (duration approx 1.2s)
        setTimeout(() => {
          onComplete?.();
        }, 1200);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, active, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Background Panels (Curtains) */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isDone ? '-100%' : 0 }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className="absolute inset-y-0 left-0 w-1/2 bg-[#050608] border-r border-white/5 pointer-events-auto"
      />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isDone ? '100%' : 0 }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className="absolute inset-y-0 right-0 w-1/2 bg-[#050608] border-l border-white/5 pointer-events-auto"
      />

      {/* Center Content */}
      <AnimatePresence>
        {!isDone && (
          <motion.div
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Logo with pulse/glow */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                filter: ["drop-shadow(0 0 10px rgba(196,255,0,0.2))", "drop-shadow(0 0 30px rgba(196,255,0,0.5))", "drop-shadow(0 0 10px rgba(196,255,0,0.2))"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24"
            >
              <img src={logo} alt="Studio Yin Yang" className="w-full h-full object-contain" />
            </motion.div>

            {/* Glowing Progress Bar Container */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative border border-white/5">
              {/* Dynamic Progress Fill */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute inset-y-0 left-0 bg-[#c4ff00] shadow-[0_0_15px_#c4ff00]"
                transition={{ duration: 0.5 }}
              />
              
              {/* Ambient Glow Trail */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
            </div>

            {/* Percentage Text */}
            <motion.span 
              className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-medium"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading {Math.round(progress)}%
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
