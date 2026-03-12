import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect, useCallback, lazy, Suspense, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LogoMarquee } from '@/components/LogoMarquee';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { RadarAnimation } from '@/components/RadarAnimation';
import { TypewriterText } from '@/components/TypewriterText';
import { GradientText } from '@/components/GradientText';
import { HomeFAQSection } from '@/components/HomeFAQSection';
import { ChineseCharacters } from '@/components/ChineseCharacters';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { AnimatedBorderGlow } from '@/components/ui/AnimatedBorderGlow';
import { SEO } from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import { statsTranslations, carouselServicesTranslations } from '@/i18n/contentTranslations';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Globe,
  Shield,
  Zap,
  Users,
  Plus
} from 'lucide-react';
import statsBg from '@/assets/stats-bg.webp';
import heroImgBg from '@/assets/bghero.png';
import consultantImg from '@/assets/consultant.png';
import { hyperspeedPresets } from '@/components/Hyperspeed/HyperSpeedPresets';

// Lazy loading heavy 3D components to reduce main bundle size and improve TBT
const InteractiveGlobe = lazy(() => import('@/components/ui/interactive-globe').then(module => ({ default: module.InteractiveGlobe })));
const HyperspeedContainer = lazy(() => import('@/components/Hyperspeed/Hyperspeed').then(module => ({ default: module.default })));
const YinYangLogo3D = lazy(() => import('@/components/ui/YinYangLogo3D').then(module => ({ default: module.YinYangLogo3D })));

// Service carousel images
import sgStrategia from '@/assets/sg-strategia.png';
import sgAnalizy from '@/assets/sg-analizy.png';
import sgWejscie from '@/assets/sg-wejscie.png';
import sgImport from '@/assets/sg-import.png';
import sgMarketing from '@/assets/sg-marketing.png';
import sgMisje from '@/assets/sg-misje.png';

import { HeroServiceCard } from '@/components/HeroServiceCard';

import articleCompetition from '@/assets/article-competition.jpg';
import articleInnovation from '@/assets/article-china-innovation.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';
import avatarTeam1 from '@/assets/avatar-team-1.jpg';
import avatarTeam2 from '@/assets/avatar-team-2.jpg';
import avatarTeam3 from '@/assets/avatar-team-3.jpg';

const carouselImages = [sgStrategia, sgAnalizy, sgWejscie, sgImport, sgMarketing, sgMisje];
const carouselSlugs = ['strategia-wobec-chin', 'analizy-rynku', 'wejscie-na-rynek', 'import-eksport', 'marketing-pozycjonowanie', 'misje-szkolenia'];

const AnimatePingVisibility = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  return (
    <div ref={ref} className="absolute inset-0">
      {isInView && (
        <div className="absolute inset-0 rounded-full bg-lime animate-ping opacity-30" />
      )}
    </div>
  );
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();
  const stats = statsTranslations[language];
  
  const carouselServices = useMemo(() => 
    carouselServicesTranslations[language].map((s, i) => ({
      ...s,
      image: carouselImages[i],
      slug: carouselSlugs[i],
    })), [language]);

  const handleScroll = (direction: 'next' | 'prev') => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    // Standard scroll amount: card width (380) + gap (32)
    const scrollAmount = 412; 
    
    container.scrollBy({ 
      left: direction === 'next' ? scrollAmount : -scrollAmount, 
      behavior: 'smooth' 
    });
  };

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);


  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050608]" id="page-root">
      <SEO 
        description={language === 'pl' ? 'Twój strategiczny partner w pełnym cyklu relacji biznesowych Polska-Chiny. Kompleksowe doradztwo, design i content.' : undefined} 
      />
      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />
  
        {/* Hero Section - Organic Composition */}
        <section ref={heroRef} className="relative min-h-screen flex flex-col py-20 overflow-visible">
        {/* Background Layer - Solid Black */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#050608]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/40 via-[#050608]/60 to-[#050608]" />
        </div>

        {/* Scattered UI Decorations (+) */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-visible">
          <Plus className="absolute top-[15%] left-[45%] text-white/20 w-8 h-8 font-light" />
          <Plus className="absolute top-[45%] right-[15%] text-white/20 w-12 h-12 font-light" />
          <Plus className="absolute bottom-[25%] left-[10%] text-white/20 w-6 h-6 font-light" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20 flex-grow flex flex-col overflow-visible">
          {/* Top Layer: Headline & Globe */}
          <div className="relative flex-grow flex flex-col lg:flex-row items-center lg:items-start justify-between overflow-visible">
            
            {/* Left Column: Headline & Stats */}
            <div className="w-full lg:w-1/2 pt-12 lg:pt-24 z-30 flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center lg:items-start w-full"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium">{t.heroEditorial.strategic}</span>
                  <div className="h-px w-8 sm:w-12 bg-white/20" />
                  <span className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.3em] font-medium">{t.heroEditorial.context}</span>
                </div>

                <h1 className="font-display text-5xl md:text-8xl lg:text-[110px] font-light text-white leading-[0.9] lg:leading-[0.85] tracking-tighter uppercase mb-12 w-full">
                  <span className="opacity-40 block lg:whitespace-nowrap">
                    {t.heroEditorial.mainTitle}{' '}
                    <br className="lg:hidden" />
                    <TypewriterText 
                      words={t.heroEditorial.mainTitleAnimated} 
                      typingSpeed={100}
                      deletingSpeed={50}
                      pauseDuration={3000}
                    />
                  </span>
                  <span className="block italic lg:whitespace-nowrap">{t.heroEditorial.subTitle}</span>
                  <div className="flex items-center justify-center lg:justify-start gap-4 mt-6 lg:mt-4">
                    <GradientText className="font-black whitespace-nowrap animate-gradient-flow">
                      {t.heroEditorial.plcn}
                    </GradientText>
                    <Plus className="hidden lg:block text-white/20 w-8 h-8 lg:w-12 lg:h-12 flex-shrink-0" />
                  </div>
                </h1>
                
                <div className="flex flex-col sm:flex-row gap-8 items-center lg:items-center mt-12 lg:mt-16 w-full justify-center lg:justify-start">
                  <AnimatedBorderGlow
                    borderRadius="9999px"
                    className="shrink-0"
                    glowColor="#c4ff00"
                    duration={5}
                  >
                    <Link
                      to="/kontakt"
                      className="flex items-center gap-4 px-8 sm:px-10 py-5 sm:py-6 bg-transparent transition-[background-color,transform] duration-500 group"
                    >
                      <span className="font-bold text-lg sm:text-xl text-white transition-colors whitespace-nowrap">{t.nav.consultation}</span>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c4ff00] text-black rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-0 -rotate-45">
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </Link>
                  </AnimatedBorderGlow>
                  <p className="text-white/90 text-sm sm:text-base max-w-[320px] leading-relaxed font-normal text-center lg:text-left drop-shadow-sm">
                    {t.heroEditorial.supportText}
                  </p>
                </div>

              </motion.div>
            </div>


            {/* Right Column: Editorial & Featured Case */}
            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end justify-center pt-24 lg:pt-48 z-30">
              <div className="text-right mb-12 hidden lg:block">
                <p className="text-white/70 text-xs uppercase tracking-widest leading-loose max-w-[220px] ml-auto font-light">
                  {t.heroEditorial.statement}
                </p>
              </div>

              <div 
                className="w-[320px] aspect-[2/3] rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] border border-white/5 liquidglass overflow-hidden"
              >
                <div className="relative p-10 flex flex-col h-full z-10">
                  {/* YinYang Logo 3D - Now unconstrained by any box */}
                  <div className="w-full aspect-square mb-2 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-radial-gradient from-lime/5 to-transparent blur-3xl opacity-50" />
                    <Suspense fallback={null}>
                      <YinYangLogo3D />
                    </Suspense>
                  </div>

                  <div className="mt-auto relative z-20 pt-4">
                    {/* Team Avatars Stack */}
                    <div className="flex -space-x-3 mb-6 items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-white/10 overflow-hidden shadow-xl transform hover:z-30 hover:scale-110 transition-transform duration-300 ring-2 ring-black/40">
                        <img src={avatarTeam1} alt="Team 1" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white/10 overflow-hidden shadow-xl transform hover:z-30 hover:scale-110 transition-transform duration-300 ring-2 ring-black/40">
                        <img src={avatarTeam2} alt="Team 2" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white/10 overflow-hidden shadow-xl transform hover:z-30 hover:scale-110 transition-transform duration-300 ring-2 ring-black/40">
                        <img src={avatarTeam3} alt="Team 3" className="w-full h-full object-cover" />
                      </div>
                      <div className="pl-6">
                        <div className="h-px w-8 bg-white/20" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[#c4ff00] font-black text-6xl tracking-tighter block leading-none">{t.heroEditorial.featuredValue}</span>
                      <span className="text-white/80 text-[10px] uppercase tracking-[0.25em] font-medium block pt-1">{t.heroEditorial.featuredLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Sentiment & Cards Layout from Inspiration */}
          <div className="mt-24 relative z-30">
            <div className="grid grid-cols-1 lg:grid-cols-[0.4fr,2.6fr] gap-8 lg:gap-32 items-start mb-24 text-center lg:text-left">
              {/* Top Left: Tagline */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:pt-4 justify-center lg:justify-start">
                <Plus className="w-5 h-5 text-[#c4ff00] flex-shrink-0" />
                <span className="text-white font-medium text-sm sm:text-base tracking-normal leading-relaxed max-w-[400px]">
                  {t.serviceSentiment.tagline}
                </span>
              </div>
              
              {/* Right: Big Headline (Manual Cubic Typography Style - Optimized) */}
              <h2 className="font-display text-4xl md:text-6xl lg:text-[88px] font-black text-white leading-[1.1] lg:leading-[0.88] tracking-tighter uppercase lg:max-w-[1000px] w-full">
                {t.serviceSentiment.headlinePart1}
                <GradientText>{t.serviceSentiment.headlineHighlight1}</GradientText>
                {t.serviceSentiment.headlinePart2}
                <span className="text-white">{t.serviceSentiment.headlineHighlight2}</span>
                {t.serviceSentiment.headlinePart3}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-[0.4fr,2.6fr] gap-12 lg:gap-32 items-end">
              {/* Bottom Left: Support Text & Arrows */}
              <div className="flex flex-col gap-12">
                <p className="text-white/40 text-sm max-w-[240px] leading-relaxed font-light">
                  {t.serviceSentiment.subText}
                </p>
                <div className="flex gap-4 relative z-50 pointer-events-auto">
                  <button 
                    onClick={() => handleScroll('prev')}
                    className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 active:scale-90 transition-[background-color,transform] group cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </button>
                  <button 
                    onClick={() => handleScroll('next')}
                    className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 active:scale-90 transition-[background-color,transform] group cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
              
              {/* Right: Cards Slider - Fixed with min-w-0 and right-side screen bleed */}
              <div className="min-w-0 relative">
                <div 
                  ref={scrollRef}
                  className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scroll-smooth px-2 -mx-2 lg:mr-[-100vw] lg:pr-[100vw] relative z-30 no-scrollbar"
                >
                  {carouselServices.map((service, index) => (
                    <div key={index} className="snap-start flex-shrink-0">
                      <HeroServiceCard
                        number={`0${index + 1}`}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        slug={service.slug}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 translate-y-[-5%] overflow-visible">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative w-screen aspect-square flex items-center justify-center opacity-60 mix-blend-screen overflow-visible"
          >
            <Suspense fallback={<LoadingSpinner size={80} />}>
              <InteractiveGlobe size={1800} />
            </Suspense>
          </motion.div>
        </div>

        {/* Liquid Glass SVG Filter Definition - Moved to App.tsx for global availability */}
      </section>

      {/* Stats Section with Identical Parallax as Uslugi.tsx */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${statsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Match Uslugi.tsx style with blur and 80% opacity */}
          <div className="absolute inset-0 bg-[#050608]/80 backdrop-blur-sm" />
        </motion.div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(196,255,0,0.2) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">
              {t.stats.badge}
            </span>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-lime mb-3">
                  {stat.isText ? <span>{stat.suffix}</span> : <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
                </div>
                <p className="text-white/70 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#050608' }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[1200px] h-[1200px] opacity-40">
            <RadarAnimation size="lg" className="w-full h-full" />
          </div>
        </div>
        
        <ChineseCharacters characters="合作关系" position="left" className="top-32 hidden lg:block" opacity={0.06} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/80 via-[#050608]/70 to-[#050608]/80 pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
              {t.process.badge}
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              {t.process.title.split(' ').slice(0, -1).join(' ')} <GradientText>{t.process.title.split(' ').slice(-1)[0]}</GradientText>?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">{t.process.subtitle}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line that ends at the last dot */}
              <div className="absolute left-8 md:left-1/2 top-2 w-px md:-translate-x-1/2"
                style={{
                  bottom: 'calc(1.5rem + 8px)',
                  background: 'linear-gradient(to bottom, #c4ff00, rgba(196,255,0,0.4), transparent)',
                }}
              />
              
              {t.process.steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex items-start gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="absolute left-8 md:left-1/2 mt-4 w-4 h-4 rounded-full bg-lime shadow-lg shadow-lime/50 md:-translate-x-1/2 z-10 
                                  transform -translate-y-1/2">
                    <AnimatePingVisibility />
                  </div>
                  
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="relative liquidglass rounded-2xl p-6 border border-gray-800/50 hover:border-lime/30 transition-[border-color] duration-300 group">
                      <span className={`absolute top-4 font-display text-7xl font-bold text-lime/30 group-hover:text-lime/50 transition-colors ${index % 2 === 0 ? 'right-6 md:left-6 md:right-auto' : 'right-6'}`}>
                        {step.number}
                      </span>
                      <div className="relative z-10 pt-8">
                        <h3 className="font-display font-semibold text-xl text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16" style={{ backgroundColor: '#050608' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">
            {t.trust.title}
          </motion.p>
        </div>
        <LogoMarquee />
      </section>

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <HomeFAQSection />

      {/* CTA Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 overflow-visible z-20" style={{ backgroundColor: 'transparent' }}>
        <ChineseCharacters characters="信任" position="left" className="top-0 hidden lg:block" opacity={0.05} />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="relative max-w-5xl mx-auto rounded-[1.5rem] overflow-visible border border-gray-800/50" style={{ background: 'linear-gradient(135deg, #0B0B0B 0%, #111214 50%, rgba(196,255,0,0.08) 100%)' }}>
            <div className="absolute bottom-0 right-0 w-[300px] h-[250px] bg-[#c4ff00]/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-0 items-end">
              <div className="p-8 lg:p-12 relative z-20">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">{t.cta.title}</h2>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 leading-tight"><GradientText>{t.cta.titleHighlight}</GradientText></h2>
                <p className="text-gray-400 text-base mb-8 max-w-md">{t.cta.subtitle}</p>
                <Link to="/kontakt" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#c4ff00] text-gray-900 rounded-full font-semibold text-base transition-[transform,box-shadow] duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(196,255,0,0.5)]">
                  {t.cta.button}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="relative hidden lg:block lg:w-[380px] xl:w-[450px]">
                <img 
                  src={consultantImg} 
                  alt="Konsultant Yin Yang" 
                  className="absolute bottom-0 -right-24 lg:-right-32 xl:-right-40 z-10 w-[680px] xl:w-[820px] max-w-none object-contain pointer-events-none" 
                  style={{ 
                    filter: 'drop-shadow(-10px 20px 40px rgba(0,0,0,0.4))' 
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;