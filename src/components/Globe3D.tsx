import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export const Globe3D = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video">
      {/* Stylized globe representation */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer glow */}
        <div className="absolute w-[400px] h-[400px] bg-lime/20 blur-[100px] rounded-full" />
        
        {/* Globe circles */}
        <div className="relative w-[300px] h-[300px]">
          {/* Rotating rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-lime/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-lime/20"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-lime/15"
          />
          
          {/* Center globe */}
          <div className="absolute inset-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-2xl overflow-hidden">
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-0 right-0 h-px bg-lime/50" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-lime/50" />
              <div className="absolute top-3/4 left-0 right-0 h-px bg-lime/50" />
              <div className="absolute left-1/4 top-0 bottom-0 w-px bg-lime/50" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-lime/50" />
              <div className="absolute left-3/4 top-0 bottom-0 w-px bg-lime/50" />
            </div>
          </div>
          
          {/* Warsaw marker */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-[30%] left-[45%] z-10"
          >
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-lime shadow-lg shadow-lime/50" />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900/90 px-2 py-1 rounded text-xs text-lime font-medium">
                Warszawa
              </div>
            </div>
          </motion.div>
          
          {/* Shanghai marker */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute top-[55%] right-[20%] z-10"
          >
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-lime shadow-lg shadow-lime/50" />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900/90 px-2 py-1 rounded text-xs text-lime font-medium">
                Shanghai
              </div>
            </div>
          </motion.div>
          
          {/* Connection line */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <motion.path
              d="M 45 30 Q 60 20 80 55"
              fill="none"
              stroke="hsl(75, 100%, 50%)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            />
          </svg>
          
          {/* Animated pulse on line */}
          <motion.div
            animate={{
              offsetDistance: ['0%', '100%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ offsetPath: 'path("M 135 90 Q 180 60 240 165")' }}
            className="absolute w-2 h-2 rounded-full bg-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
