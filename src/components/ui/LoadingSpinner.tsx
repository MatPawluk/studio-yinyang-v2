import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

export const LoadingSpinner = ({ size = 40 }: { size?: number }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative"
        style={{ width: size, height: size }}
      >
        <img 
          src={logo} 
          alt="Loading..." 
          className="w-full h-full object-contain"
        />
        {/* Ambient glow around the spinner */}
        <div className="absolute inset-0 bg-[#c4ff00]/20 blur-xl rounded-full -z-10" />
      </motion.div>
    </div>
  );
};
