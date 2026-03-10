import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { WorldMap } from '@/components/WorldMap';
import { GradientText } from '@/components/GradientText';
import { ChineseCharacters } from '@/components/ChineseCharacters';
import { FloatingDots } from '@/components/FloatingDots';
import { TeamCarousel } from '@/components/TeamCarousel';
import { useLanguage } from '@/contexts/LanguageContext';
import { oNasTranslations } from '@/i18n/pageTranslations';
import { statsTranslations, oNasFaqTranslations } from '@/i18n/contentTranslations';
import { ArrowRight, ChevronRight, Plus } from 'lucide-react';
import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

// Assets
import onasAdrian from '@/assets/onas-adrian.png';
import onasHugo from '@/assets/onas-hugo.png';
import onasMaksymilian from '@/assets/onas-maksymilian.jpg';
import onasLiuWenhao from '@/assets/onas-liu-wenhao.jpeg';
import onasZhangRui from '@/assets/onas-zhang-rui.png';
import onasSara from '@/assets/onas-sara.png';
import shanghaiHeroBg from '@/assets/shanghai-hero-bg.jpg';
import heroAirplane from '@/assets/hero-airplane.png';
import heroTruck from '@/assets/hero-truck.png';
import heroContainer from '@/assets/hero-container.png';

const team = [
  { name: 'Adrian Nkwamu', role: 'Co-Founder & Managing Partner', image: onasAdrian },
  { name: 'Hugo Przybyła', role: 'Co-Founder & Poland Market Lead', image: onasHugo },
  { name: 'Maksymilian Szabatin', role: 'Partner, Strategy & Intelligence', image: onasMaksymilian },
  { name: 'Liu Wenhao', role: 'Senior China Market Analyst', image: onasLiuWenhao },
  { name: 'Zhang Rui', role: 'Logistics & Supply Chain Coordinator', image: onasZhangRui },
  { name: 'Sara Chen', role: 'Head of China Operations & International Relations', image: onasSara },
];

const ONas = () => {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());
  const heroRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();
  const pt = oNasTranslations[language];
  const stats = statsTranslations[language];
  const faqs = oNasFaqTranslations[language];
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050608' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Layer */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#050608]" />
          <div className="absolute inset-0 opacity-40">
            <img 
              src={shanghaiHeroBg} 
              alt="Shanghai Hero Background" 
              className="w-full h-full object-cover mix-blend-overlay grayscale contrast-125"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/90 to-[#050608]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050608] via-transparent to-[#050608]" />
        </motion.div>

        {/* Scattered UI Decorations (+) */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <Plus className="absolute top-[20%] left-[45%] text-white/20 w-8 h-8 font-light" />
          <Plus className="absolute top-[60%] right-[10%] text-white/20 w-12 h-12 font-light" />
          <Plus className="absolute bottom-[20%] left-[8%] text-white/20 w-6 h-6 font-light" />
          
          <div className="absolute top-[15%] left-[5%] font-display text-[12vw] font-bold text-white/[0.02] blur-[2px] tracking-wider whitespace-nowrap">LOGISTICS</div>
          <div className="absolute bottom-[15%] right-[5%] font-display text-[10vw] font-bold text-white/[0.02] blur-[2px] tracking-wider whitespace-nowrap">PL-CN</div>
        </div>
        
        <FloatingDots count={30} />

        <div className="container mx-auto px-6 lg:px-12 relative z-30 flex-grow flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Left Column: Typography & Content */}
            <div className="w-full lg:w-7/12 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start w-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium">O NAS</span>
                  <div className="h-px w-8 sm:w-12 bg-white/20" />
                  <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium">{pt.badge}</span>
                </div>

                <h1 className="font-display text-5xl md:text-7xl lg:text-[90px] font-light text-white leading-[0.9] tracking-tighter uppercase mb-8">
                  {pt.title}
                  <br />
                  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70" style={{ textShadow: '0 0 40px rgba(196, 255, 0, 0.15)' }}>
                    {pt.titleHighlight}
                  </span>
                  <br />
                  {pt.subtitle}
                </h1>

                <p className="text-lg lg:text-xl text-white/60 max-w-2xl leading-relaxed mb-12 font-light">
                  {pt.description}
                </p>
                
                {/* Stats Grid integrated into content area */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.4, duration: 0.8 }} 
                  className="grid grid-cols-2 gap-4 w-full max-w-2xl"
                >
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={stat.label} 
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ delay: 0.5 + index * 0.1 }} 
                      className="p-5 lg:p-6 rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] hover:border-lime/30 transition-all duration-500 hover:bg-white/[0.04]"
                    >
                      <div className="font-display text-3xl lg:text-4xl font-bold text-[#c4ff00] mb-2 drop-shadow-[0_0_15px_rgba(196,255,0,0.3)]">
                        {stat.isText ? <span>{stat.suffix}</span> : <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
                      </div>
                      <p className="text-white/50 text-xs uppercase tracking-wider font-medium">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column: 3D Transport Showcase Composition */}
            <div className="w-full lg:w-5/12 relative h-[500px] lg:h-[700px] flex items-center justify-center pointer-events-none mt-16 lg:mt-0">
              {/* Core Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c4ff00]/10 blur-[100px] rounded-full" />
              
              {/* Glassmorphic Base */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] lg:w-[450px] lg:h-[450px] rounded-full border border-[#c4ff00]/20 bg-[#c4ff00]/[0.02] backdrop-blur-3xl flex items-center justify-center overflow-hidden"
              >
                {/* Radar/Grid lines inside glass */}
                <div className="absolute inset-0" style={{ 
                  backgroundImage: `linear-gradient(rgba(196, 255, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(196, 255, 0, 0.05) 1px, transparent 1px)`, 
                  backgroundSize: '40px 40px',
                  backgroundPosition: 'center center'
                }} />
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c4ff00]/30 to-transparent absolute top-1/2 -translate-y-1/2" />
                <div className="h-full w-px bg-gradient-to-b from-transparent via-[#c4ff00]/30 to-transparent absolute left-1/2 -translate-x-1/2" />
              </motion.div>

              {/* Composition: Airplane (Top) */}
              <motion.div 
                initial={{ opacity: 0, x: 50, y: -50 }} 
                animate={{ opacity: 1, x: 0, y: 0 }} 
                transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }} 
                className="absolute top-[5%] lg:top-[10%] -right-[10%] lg:right-[0%] w-[260px] lg:w-[380px] z-30"
              >
                <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                  <img src={heroAirplane} alt="Air Freight" className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]" style={{ filter: 'drop-shadow(0 0 15px rgba(196, 255, 0, 0.15))' }} />
                </motion.div>
              </motion.div>

              {/* Composition: Container (Left / Middle) */}
              <motion.div 
                initial={{ opacity: 0, x: -50, y: 0 }} 
                animate={{ opacity: 1, x: 0, y: 0 }} 
                transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }} 
                className="absolute top-[35%] lg:top-[40%] text-white -left-[20%] lg:-left-[15%] w-[240px] lg:w-[320px] z-10"
              >
                <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                  <img src={heroContainer} alt="Sea Freight" className="w-full h-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)]" style={{ filter: 'drop-shadow(0 0 20px rgba(196, 255, 0, 0.08))' }} />
                </motion.div>
              </motion.div>

              {/* Composition: Truck (Bottom Front) */}
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.9 }} 
                animate={{ opacity: 1, y: 0, scale: 1 }} 
                transition={{ delay: 1, duration: 1.2, ease: "easeOut" }} 
                className="absolute bottom-[0%] lg:-bottom-[5%] left-[10%] w-[320px] lg:w-[450px] z-40"
              >
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                  <img src={heroTruck} alt="Land Freight" className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.95)]" style={{ filter: 'drop-shadow(0 0 20px rgba(196, 255, 0, 0.12))' }} />
                </motion.div>
              </motion.div>

              {/* UI Labels mapping points */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute z-50 pointer-events-none w-full h-full">
                <div className="absolute top-[25%] right-[0%] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c4ff00] shadow-[0_0_10px_#c4ff00]" />
                  <span className="text-[#c4ff00] text-[10px] tracking-widest font-mono uppercase bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded border border-[#c4ff00]/30 hidden md:block">AIR_LINK</span>
                </div>
                <div className="absolute top-[50%] left-[-5%] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
                  <span className="text-white/80 text-[10px] tracking-widest font-mono uppercase bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded border border-white/20 hidden md:block">SEA_ROUTE</span>
                </div>
                <div className="absolute bottom-[10%] left-[30%] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c4ff00] shadow-[0_0_10px_#c4ff00]" />
                  <span className="text-[#c4ff00] text-[10px] tracking-widest font-mono uppercase bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded border border-[#c4ff00]/30 hidden md:block">LAND_HUB</span>
                </div>
              </motion.div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#050608' }}>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
        <ChineseCharacters characters="作" position="left" className="top-20" opacity={0.05} />
        
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">{pt.teamBadge}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">{pt.teamTitle} <GradientText>{pt.teamTitleHighlight}</GradientText></h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              {team.slice(0, 3).map((member, index) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                  <div className="relative mb-4 rounded-2xl overflow-hidden aspect-[3/4]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/80 via-transparent to-transparent" />
                  </div>
                  <h3 className="font-display font-bold text-base lg:text-lg text-white">{member.name}</h3>
                  <p className="text-gray-500 text-xs lg:text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {team.slice(3, 6).map((member, index) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index + 3) * 0.1 }} className="group">
                  <div className="relative mb-4 rounded-2xl overflow-hidden aspect-[3/4]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/80 via-transparent to-transparent" />
                  </div>
                  <h3 className="font-display font-bold text-base lg:text-lg text-white">{member.name}</h3>
                  <p className="text-gray-500 text-xs lg:text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TeamCarousel />

      {/* World Dot Map */}
      <section className="py-24 relative" style={{ backgroundColor: '#050608', overflow: 'visible' }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ overflow: 'visible' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">{pt.connectionBadge}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Warszawa ↔ <GradientText>Shanghai</GradientText>
            </h2>
          </motion.div>
          <div className="w-full max-w-7xl mx-auto pt-2"><WorldMap /></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#050608' }}>
        <ChineseCharacters characters="信任" position="right" className="top-20" opacity={0.05} />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-lime/8 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">{pt.faqBadge}</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">{pt.faqTitle} <GradientText>{pt.faqTitleHighlight}</GradientText></h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-0">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="border-b border-gray-800">
                <button
                  onClick={() => {
                    setOpenIndices(prev => {
                      const next = new Set(prev);
                      if (next.has(index)) { next.delete(index); } else { next.add(index); }
                      return next;
                    });
                  }}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="font-display text-lg md:text-xl font-semibold text-white group-hover:text-lime transition-colors duration-300 pr-4">{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 text-gray-500 group-hover:text-lime transition-all duration-300 flex-shrink-0 ${openIndices.has(index) ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndices.has(index) && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="text-gray-400 pb-6 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#050608' }}>
        <div className="absolute bottom-10 left-10 opacity-[0.06] pointer-events-none">
          <span className="font-display text-[10rem] font-bold text-[#c4ff00] leading-none">合作</span>
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">{t.cta.title} <GradientText>{t.cta.titleHighlight}</GradientText></h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">{t.cta.subtitle}</p>
            <Link to="/kontakt" className="group inline-flex items-center gap-3 px-10 py-5 bg-[#c4ff00] text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(196,255,0,0.5)]">
              {t.cta.button}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ONas;