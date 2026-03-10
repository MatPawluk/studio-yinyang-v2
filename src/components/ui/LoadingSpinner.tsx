import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

export const LoadingSpinner = ({ size = 60 }: { size?: number }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          filter: [
            "drop-shadow(0 0 8px rgba(196,255,0,0.2))", 
            "drop-shadow(0 0 20px rgba(196,255,0,0.4))", 
            "drop-shadow(0 0 8px rgba(196,255,0,0.2))"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <img 
          src={logo} 
          alt="Loading..." 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};
