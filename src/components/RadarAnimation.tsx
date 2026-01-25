import { motion } from 'framer-motion';

export const RadarAnimation = () => {
  return (
    <div className="relative w-48 h-48 mx-auto">
      {/* Outer circles */}
      <div className="absolute inset-0 rounded-full border border-lime/20" />
      <div className="absolute inset-4 rounded-full border border-lime/30" />
      <div className="absolute inset-8 rounded-full border border-lime/40" />
      <div className="absolute inset-12 rounded-full border border-lime/50" />
      
      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-lime shadow-lg shadow-lime/50" />
      </div>
      
      {/* Rotating radar line */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 origin-left bg-gradient-to-r from-lime to-transparent" />
      </motion.div>
      
      {/* Radar sweep gradient */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, hsl(75 100% 50% / 0.15) 30deg, transparent 60deg)',
        }}
      />
      
      {/* Blip dots */}
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-lime"
      />
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
        className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-lime"
      />
    </div>
  );
};
