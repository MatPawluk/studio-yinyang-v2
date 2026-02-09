import { motion } from 'framer-motion';
import serviceStrategy from '@/assets/service-strategy.jpg';
import serviceAnalysis from '@/assets/service-analysis.jpg';
import teamJan from '@/assets/team-jan.jpg';
import teamWei from '@/assets/team-wei.jpg';
import teamAnna from '@/assets/team-anna.jpg';

const teamPhotos = [
  serviceStrategy,
  serviceAnalysis,
  teamJan,
  teamWei,
  teamAnna,
  serviceStrategy,
  serviceAnalysis,
  teamJan,
];

export const TeamCarousel = () => {
  const duplicatedPhotos = [...teamPhotos, ...teamPhotos];

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: '#050608' }}>
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #050608, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #050608, transparent)' }} />

        {/* Scrolling photos */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-6"
        >
          {duplicatedPhotos.map((photo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-40 rounded-2xl overflow-hidden"
              style={{
                transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
              }}
            >
              <img
                src={photo}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
