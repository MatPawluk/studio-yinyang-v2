import { motion } from 'framer-motion';
import { Plane, Ship, Truck } from 'lucide-react';

export const FloatingTransport = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Truck - bottom left, moving right */}
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: '0%', opacity: 0.15 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
        className="absolute bottom-[15%] left-[5%]"
      >
        <motion.div
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Truck className="w-16 h-16 md:w-24 md:h-24 text-lime" strokeWidth={1} />
        </motion.div>
      </motion.div>

      {/* Container Ship - bottom right, gentle bob */}
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: '0%', opacity: 0.15 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
        className="absolute bottom-[10%] right-[8%]"
      >
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Ship className="w-20 h-20 md:w-28 md:h-28 text-lime" strokeWidth={1} />
        </motion.div>
      </motion.div>

      {/* Airplane - top right, flying across */}
      <motion.div
        initial={{ x: '120%', y: '0%', opacity: 0 }}
        whileInView={{ x: '0%', y: '0%', opacity: 0.12 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, delay: 1, ease: 'easeOut' }}
        className="absolute top-[15%] right-[10%]"
      >
        <motion.div
          animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Plane className="w-14 h-14 md:w-20 md:h-20 text-lime rotate-[-30deg]" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </div>
  );
};
