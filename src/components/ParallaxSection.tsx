import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  imageUrl?: string;
  overlayOpacity?: number;
  variant?: 'default' | 'asian' | 'dots';
}

export const ParallaxSection = ({ 
  children, 
  className = '', 
  imageUrl,
  overlayOpacity = 0.7,
  variant = 'default'
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {imageUrl && (
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-[130%] -top-[15%]"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${imageUrl})`,
              filter: 'blur(2px)'
            }}
          />
          <div 
            className="absolute inset-0 bg-gray-900" 
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>
      )}
      
      {/* Decorative pattern based on variant */}
      {variant === 'asian' && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Asian-inspired decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 border border-lime/10 rounded-full" />
          <div className="absolute top-16 right-16 w-20 h-20 border border-lime/5 rounded-full" />
          <div className="absolute bottom-10 left-10 w-24 h-24 border border-lime/10 rounded-full" />
          
          {/* Wave pattern */}
          <svg className="absolute bottom-0 left-0 right-0 h-20 text-lime/5" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor" />
          </svg>
        </div>
      )}
      
      {variant === 'dots' && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 255, 0, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
