import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// Assets
import serviceStrategy from '@/assets/service-strategy.jpg';
import serviceAnalysis from '@/assets/service-analysis.jpg';

const services = [
  {
    id: 1,
    title: 'Strategia wobec Chin',
    shortTitle: 'Strategia',
    description: 'Analizy strategiczne, scenariusze ryzyk i briefingi dla zarządów firm z ekspozycją na Chiny.',
    image: serviceStrategy,
    slug: 'analiza-wplywu-chin',
    badge: '01',
  },
  {
    id: 2,
    title: 'Analizy rynku i weryfikacja',
    shortTitle: 'Analizy',
    description: 'Mapowanie sektorów, analiza konkurencji, weryfikacja kontrahentów i due diligence partnerów.',
    image: serviceAnalysis,
    slug: 'analizy-sektorow-klastrow',
    badge: '02',
  },
  {
    id: 3,
    title: 'Wejście na rynek PL–CN',
    shortTitle: 'Wejście',
    description: 'Wybór modelu operacyjnego, wsparcie formalne i regulacyjne, selekcja partnerów.',
    image: serviceStrategy,
    slug: 'wybor-modelu-wejscia',
    badge: '03',
  },
  {
    id: 4,
    title: 'Import, eksport i logistyka',
    shortTitle: 'Logistyka',
    description: 'Audyty dostawców, optymalizacja łańcucha dostaw, nadzór produkcji i transport.',
    image: serviceAnalysis,
    slug: 'audyty-weryfikacja-dostawcow',
    badge: '04',
  },
  {
    id: 5,
    title: 'Marketing i pozycjonowanie',
    shortTitle: 'Marketing',
    description: 'Pozycjonowanie marki, strategia komunikacji i wsparcie działań marketingowych.',
    image: serviceStrategy,
    slug: 'lokalne-pozycjonowanie-marki',
    badge: '05',
  },
  {
    id: 6,
    title: 'Misje i szkolenia',
    shortTitle: 'Szkolenia',
    description: 'Organizacja misji biznesowych, matchmaking B2B i szkolenia z kultury negocjacji.',
    image: serviceAnalysis,
    slug: 'misje-biznesowe-technologiczne',
    badge: '06',
  },
];

export const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    if (index < 0) index = services.length - 1;
    if (index >= services.length) index = 0;
    setActiveIndex(index);
  };

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x * velocity.x;
    if (swipe < -10000) {
      goToSlide(activeIndex + 1);
    } else if (swipe > 10000) {
      goToSlide(activeIndex - 1);
    }
    setIsDragging(false);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        goToSlide(activeIndex + 1);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, isDragging]);

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#050608' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle abstract shapes */}
        <div className="absolute top-20 left-10 w-[300px] h-[300px] rounded-full bg-[#0B0B0B]/80 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full bg-[#0B0B0B]/60 blur-3xl" />
        {/* Glow behind active card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-lime/5 blur-[100px] rounded-full" />
      </div>

      {/* Oversized background typography */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[10%] left-[5%] font-display text-[15vw] font-bold text-white/[0.02] tracking-wider">
          PARTNER
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
            Nasze usługi
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white">
            Jak możemy <span className="text-lime">pomóc</span>?
          </h2>
        </motion.div>

        {/* Carousel */}
        <div ref={containerRef} className="relative">
          <div className="flex items-center justify-center gap-4 md:gap-8 perspective-1000">
            {services.map((service, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.75,
                    opacity: isActive ? 1 : 0.3,
                    x: offset * 280,
                    rotateY: offset * -8,
                    z: isActive ? 100 : 0,
                    filter: isActive ? 'grayscale(0%)' : 'grayscale(80%)',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  onClick={() => !isActive && goToSlide(index)}
                  className={`absolute ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div 
                    className={`relative w-[280px] md:w-[320px] lg:w-[360px] rounded-[24px] overflow-hidden transition-all duration-500 ${
                      isActive ? 'shadow-2xl shadow-lime/20' : ''
                    }`}
                    style={{
                      aspectRatio: '3/4',
                    }}
                  >
                    {/* Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/60 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime text-[#050608] font-bold text-sm">
                        {service.badge}
                      </span>
                    </div>

                    {/* Content - only show on active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ delay: 0.1 }}
                          className="absolute bottom-0 left-0 right-0 p-6"
                        >
                          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {service.description}
                          </p>
                          <Link
                            to={`/uslugi/${service.slug}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-lime text-[#050608] rounded-full font-semibold text-sm hover:scale-105 transition-transform"
                          >
                            Dowiedz się więcej
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Border glow for active */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-[24px] ring-2 ring-lime/30 pointer-events-none" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Placeholder for height */}
          <div className="h-[450px] md:h-[500px] lg:h-[550px]" />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Arrows */}
          <button
            onClick={() => goToSlide(activeIndex - 1)}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-lime/30 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-lime w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goToSlide(activeIndex + 1)}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-lime/30 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
