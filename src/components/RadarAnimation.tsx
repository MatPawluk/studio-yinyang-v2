import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface RadarAnimationProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Blips placed at specific angles (degrees) and distances (fraction of radius)
const BLIPS = [
  { angle: 45, dist: 0.55 },    // top-right
  { angle: 200, dist: 0.38 },   // bottom-left
  { angle: 295, dist: 0.48 },   // top-left area
];

const SWEEP_DURATION = 12; // seconds per full rotation
const PULSE_WINDOW = 30;   // degrees within which blip pulses

export const RadarAnimation = ({ size = 'md', className = '' }: RadarAnimationProps) => {
  const sizeClasses = {
    sm: 'w-48 h-48',
    md: 'w-72 h-72',
    lg: 'w-full h-full min-w-[500px] min-h-[500px]',
  };

  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const [pulseStates, setPulseStates] = useState<{ active: boolean; intensity: number }[]>(
    BLIPS.map(() => ({ active: false, intensity: 0 }))
  );

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = (timestamp - startTimeRef.current) / 1000;
      // Current angle of radar sweep (0–360)
      const currentAngle = (elapsed / SWEEP_DURATION) * 360 % 360;

      const newStates = BLIPS.map(blip => {
        // Compute angular difference, adjusting so the sweep hits blip from behind
        let diff = (currentAngle - blip.angle + 360) % 360;
        // diff=0 means sweep just passed the blip, diff in [0,PULSE_WINDOW] means still glowing
        const active = diff < PULSE_WINDOW;
        const intensity = active ? 1 - diff / PULSE_WINDOW : 0;
        return { active, intensity };
      });

      setPulseStates(newStates);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <div className={`relative ${sizeClasses[size]} mx-auto ${className}`}>
      {/* Concentric circles */}
      <div className="absolute inset-0 rounded-full border border-lime/20" />
      <div className="absolute inset-[10%] rounded-full border border-lime/25" />
      <div className="absolute inset-[20%] rounded-full border border-lime/30" />
      <div className="absolute inset-[30%] rounded-full border border-lime/35" />
      <div className="absolute inset-[40%] rounded-full border border-lime/40" />

      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-lime shadow-lg shadow-lime/50" />
      </div>

      {/* Rotating radar line */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: SWEEP_DURATION, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 origin-left bg-gradient-to-r from-lime/20 via-lime to-transparent rounded-full" />
      </motion.div>

      {/* Radar sweep fan gradient */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: SWEEP_DURATION, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, hsl(75 100% 50% / 0.05) 10deg, hsl(75 100% 50% / 0.15) 30deg, transparent 60deg)',
        }}
      />

      {/* Animated blip dots */}
      {BLIPS.map((blip, i) => {
        const rad = (blip.angle - 90) * (Math.PI / 180);
        // Position as percentage from center
        const x = 50 + blip.dist * 50 * Math.cos(rad);
        const y = 50 + blip.dist * 50 * Math.sin(rad);
        const { active, intensity } = pulseStates[i];
        const sizes = [16, 12, 14]; // pixel sizes for variety
        const sz = sizes[i % sizes.length];

        return (
          <div
            key={i}
            className="absolute rounded-full bg-lime"
            style={{
              width: sz,
              height: sz,
              left: `calc(${x}% - ${sz / 2}px)`,
              top: `calc(${y}% - ${sz / 2}px)`,
              boxShadow: `0 0 ${4 + intensity * 20}px ${intensity * 12}px rgba(196,255,0,${0.3 + intensity * 0.7})`,
              opacity: 0.5 + intensity * 0.5,
              transition: 'box-shadow 0.05s linear, opacity 0.05s linear',
            }}
          >
            {active && (
              <div
                className="absolute inset-0 rounded-full bg-lime animate-ping"
                style={{ opacity: intensity * 0.6 }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
