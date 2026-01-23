import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  imageUrl?: string;
  overlayOpacity?: number;
}

export const ParallaxSection = ({ 
  children, 
  className = '', 
  imageUrl,
  overlayOpacity = 0.7 
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
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
