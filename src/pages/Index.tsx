import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
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
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Target, Search, Rocket, Settings } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';
import statsBg from '@/assets/stats-bg.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';
import serviceAnalysis from '@/assets/service-analysis.jpg';
import avatarTeam1 from '@/assets/avatar-team-1.jpg';
import avatarTeam2 from '@/assets/avatar-team-2.jpg';
import avatarTeam3 from '@/assets/avatar-team-3.jpg';
import consultantImg from '@/assets/consultant.png';
const heroServices = [
  { 
    title: 'Strategia i decyzje', 
    description: 'Scenariusze, mapy ryzyk, briefingi zarządcze.',
    icon: Target,
  },
  { 
    title: 'Research i weryfikacja', 
    description: 'Due diligence, analiza partnerów, intelligence.',
    icon: Search,
  },
  { 
    title: 'Wejście i rozwój', 
    description: 'Model wejścia, struktury, pozycjonowanie.',
    icon: Rocket,
  },
  { 
    title: 'Operacje i logistyka', 
    description: 'Audyt, kontrola jakości, nadzór, eksport/import.',
    icon: Settings,
  },
];

const carouselServices = [
  {
    title: 'Strategia wobec Chin',
    description: 'Analizy strategiczne, scenariusze i mapy ryzyk, briefingi dla zarządów.',
    image: serviceStrategy,
    slug: 'strategia-wobec-chin',
  },
  {
    title: 'Analizy rynku i weryfikacja partnerów',
    description: 'Badania sektorów, analiza konkurencji, weryfikacja kontrahentów i due diligence.',
    image: serviceAnalysis,
    slug: 'analizy-rynku',
  },
  {
    title: 'Wejście na rynek Polska ↔ Chiny',
    description: 'Wybór modelu wejścia, wsparcie regulacyjne, identyfikacja partnerów.',
    image: serviceStrategy,
    slug: 'wejscie-na-rynek',
  },
  {
    title: 'Import, eksport i łańcuch dostaw',
    description: 'Audyty dostawców, optymalizacja logistyki, nadzór produkcji, transport.',
    image: serviceAnalysis,
    slug: 'import-eksport',
  },
  {
    title: 'Marketing i pozycjonowanie',
    description: 'Lokalne pozycjonowanie marki, strategia komunikacji, materiały sprzedażowe.',
    image: serviceStrategy,
    slug: 'marketing-pozycjonowanie',
  },
  {
    title: 'Misje biznesowe i szkolenia',
    description: 'Organizacja misji, matchmaking B2B, szkolenia z kultury i systemu Chin.',
    image: serviceAnalysis,
    slug: 'misje-szkolenia',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Opowiadasz nam o swojej potrzebie',
    description: 'Podczas bezpłatnej konsultacji poznajemy Twoją firmę, kontekst działania i cele, które chcesz osiągnąć.',
  },
  {
    number: '02',
    title: 'Projektujemy rozwiązanie szyte na miarę',
    description: 'Tworzymy plan działania dopasowany do Twojej sytuacji i skali.',
  },
  {
    number: '03',
    title: 'Podejmujesz decyzję',
    description: 'Akceptujesz kierunek, ustalamy harmonogram i zaczynamy współpracę.',
  },
  {
    number: '04',
    title: 'Egzekwujemy i kontrolujemy proces',
    description: 'Koordynujemy działania, minimalizujemy ryzyko i dbamy o pełną transparentność.',
  },
];

const stats = [
  { value: 480, suffix: '+', label: 'zweryfikowanych podmiotów i partnerów biznesowych' },
  { value: 50, suffix: '+', label: 'lat łącznego doświadczenia zespołu w projektach międzynarodowych' },
  { value: 7, suffix: '', label: 'sektorów technologicznych' },
  { value: 0, suffix: 'PL-CN', label: 'stała obecność operacyjna', isText: true },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Auto-scroll carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselServices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselServices.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselServices.length) % carouselServices.length);
  };

  const getPrevIndex = () => (currentSlide - 1 + carouselServices.length) % carouselServices.length;
  const getNextIndex = () => (currentSlide + 1) % carouselServices.length;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050608' }}>
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/70 via-[#050608]/50 to-[#050608]" />
          
          {/* Animated overlay effects */}
          <motion.div
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-br from-lime/5 via-transparent to-lime/10"
          />
        </motion.div>

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-lime/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-lime/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Hero Content - CENTERED */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 lg:pt-40"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Twój <TypewriterText words={['przewodnik', 'partner']} pauseDuration={3000} />
              <br />
              <span className="text-lime">w relacjach Polska-Chiny.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed px-4"
            >
              Analizujemy, weryfikujemy, organizujemy i nadzorujemy
              <br className="hidden sm:block" />
              projekty na linii PL-CN
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-lime text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lime-lg"
              >
                Umów bezpłatną konsultację
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <div className="flex items-center justify-center gap-3">
                {/* Stacked Avatars - real photos */}
                <div className="flex -space-x-2">
                  <img 
                    src={avatarTeam1} 
                    alt="Client" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <img 
                    src={avatarTeam2} 
                    alt="Client" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <img 
                    src={avatarTeam3} 
                    alt="Client" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <p className="text-gray-300 text-sm font-medium">
                  Dołącz do grona <span className="text-lime font-bold">540+</span> zadowolonych klientów
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll arrow - moved lower */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-52 md:bottom-56 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/40"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Premium Service Cards - Thala Labs Style */}
        <div className="absolute -bottom-32 sm:-bottom-36 md:-bottom-40 lg:-bottom-44 left-0 right-0 z-50 pointer-events-none">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pointer-events-auto">
              {heroServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.15 }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-gray-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-gray-800/50 hover:border-lime/40 transition-all duration-500 hover:shadow-2xl hover:shadow-lime/10 overflow-hidden"
                  >
                    {/* Glowing Effect */}
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    
                    {/* Top lime accent bar - thin and half width */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-lime/50 via-lime to-lime/50" />
                    
                    {/* Lime accent glow on hover */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 bg-lime/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 pt-4">
                      {/* Icon */}
                      <div className="mb-4">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 group-hover:text-lime transition-colors duration-300" />
                      </div>
                      
                      <h3 className="font-display font-bold text-white text-base sm:text-lg lg:text-xl mb-2 sm:mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Dark transition curve like Thala Labs */}
      <section className="relative pt-48 sm:pt-56 md:pt-64 pb-20" style={{ backgroundColor: '#050608' }}>
        {/* Curved transition */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#050608] to-[#0B0B0B]" />
        
        {/* Content placeholder - visual transition element */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent"
          />
        </div>
      </section>

      {/* Services Carousel Section - Premium Redesign */}
      <section className="relative py-24 z-10" style={{ backgroundColor: '#050608' }}>
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Light slash effect */}
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
          {/* Subtle abstract shapes */}
          <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full bg-[#0B0B0B]/60 blur-3xl" />
        </div>

        {/* Oversized background typography */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div className="absolute top-[20%] left-[-5%] font-display text-[18vw] font-bold text-white/[0.02] tracking-wider">
            PARTNER
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl lg:text-6xl font-bold">
              <span className="text-white">Nasze </span>
              <GradientText>usługi</GradientText>
            </h2>
          </motion.div>

          {/* Premium Card Carousel with 3D perspective */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Cards Container - 3D Perspective */}
              <div className="flex items-center justify-center gap-4 lg:gap-8 perspective-[1500px]">
                {/* Previous Card - Left */}
                <motion.div 
                  key={`prev-${getPrevIndex()}`}
                  className="hidden lg:block flex-shrink-0 cursor-pointer"
                  onClick={prevSlide}
                  whileHover={{ scale: 1.02 }}
                  style={{ 
                    transform: 'perspective(1000px) rotateY(15deg) scale(0.85)',
                    transformOrigin: 'right center',
                  }}
                >
                  <div className="relative w-[220px] rounded-2xl overflow-hidden aspect-[3/4] opacity-40 hover:opacity-60 transition-opacity border border-gray-800/30">
                    <img
                      src={carouselServices[getPrevIndex()].image}
                      alt=""
                      className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white/60 text-sm font-medium truncate">{carouselServices[getPrevIndex()].title}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Main Active Card - Center */}
                <div className="flex-shrink-0 w-full max-w-3xl">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative rounded-3xl overflow-hidden aspect-[16/10] lg:aspect-[2/1] border border-gray-800/50 shadow-2xl shadow-lime/5 group"
                  >
                    <motion.img
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                      src={carouselServices[currentSlide].image}
                      alt={carouselServices[currentSlide].title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/70 to-transparent" />
                    
                    {/* Lime accent glow */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-lime via-lime/50 to-transparent" />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex items-center p-8 sm:p-12 lg:p-16">
                      <motion.div 
                        key={`content-${currentSlide}`}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="max-w-xl"
                      >
                        {/* Category tag */}
                        <span className="inline-block px-3 py-1 rounded-full bg-lime/20 text-lime text-xs font-medium mb-4">
                          Kategoria {currentSlide + 1} z {carouselServices.length}
                        </span>
                        
                        <h3 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                          {carouselServices[currentSlide].title}
                        </h3>
                        <p className="text-gray-400 text-base lg:text-lg mb-8 hidden sm:block leading-relaxed">
                          {carouselServices[currentSlide].description}
                        </p>
                        <Link
                          to={`/uslugi#${carouselServices[currentSlide].slug}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-lime text-[#050608] rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300"
                        >
                          <span>Poznaj szczegóły</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Next Card - Right */}
                <motion.div 
                  key={`next-${getNextIndex()}`}
                  className="hidden lg:block flex-shrink-0 cursor-pointer"
                  onClick={nextSlide}
                  whileHover={{ scale: 1.02 }}
                  style={{ 
                    transform: 'perspective(1000px) rotateY(-15deg) scale(0.85)',
                    transformOrigin: 'left center',
                  }}
                >
                  <div className="relative w-[220px] rounded-2xl overflow-hidden aspect-[3/4] opacity-40 hover:opacity-60 transition-opacity border border-gray-800/30">
                    <img
                      src={carouselServices[getNextIndex()].image}
                      alt=""
                      className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white/60 text-sm font-medium truncate">{carouselServices[getNextIndex()].title}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Carousel Controls - minimal dots */}
            <div className="flex items-center justify-center mt-10 gap-4 sm:gap-6">
              {/* Arrows left */}
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B0B0B] border border-gray-800 flex items-center justify-center hover:border-lime/50 hover:bg-[#111214] transition-all duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 text-gray-500 group-hover:text-lime" />
              </button>

              {/* Centered Indicators - minimal dots */}
              <div className="flex gap-2">
                {carouselServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-8 bg-lime' : 'w-1.5 bg-gray-700 hover:bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows right */}
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B0B0B] border border-gray-800 flex items-center justify-center hover:border-lime/50 hover:bg-[#111214] transition-all duration-300 group"
              >
                <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-lime" />
              </button>
            </div>

            {/* See all services link */}
            <div className="text-center mt-8">
              <Link 
                to="/uslugi"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-lime transition-colors duration-300 text-sm"
              >
                Zobacz wszystkie usługi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Parallax - MOVED BEFORE PROCESS */}
      <section className="relative py-32 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${statsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-[#050608]/80 backdrop-blur-sm" />
        </motion.div>

        {/* Animated glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              x: ['-20%', '20%', '-20%'],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-lime/20 blur-[100px] rounded-full"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">
              Skala i zaufanie
            </span>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-lime mb-3">
                  {stat.isText ? (
                    <span>{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-white/70 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Dark with Large Radar and Chinese characters */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#050608' }}>
        {/* Large Radar in Background - much bigger */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[1200px] h-[1200px] opacity-40">
            <RadarAnimation size="lg" className="w-full h-full" />
          </div>
        </div>
        
        {/* Chinese characters decoration - 合作关系 */}
        <ChineseCharacters characters="合作关系" position="left" className="top-32" opacity={0.06} />
        
        {/* Background gradient - lighter to show radar */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/80 via-[#050608]/70 to-[#050608]/80 pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
              Proces
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Jak to <GradientText>działa</GradientText>?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Prosty, przejrzysty proces współpracy od pierwszego kontaktu do realizacji.
            </p>
          </motion.div>

          {/* Vertical Timeline Layout */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-lime via-lime/50 to-lime/20 md:-translate-x-1/2" />
              
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-lime shadow-lg shadow-lime/50 md:-translate-x-1/2 z-10">
                    <div className="absolute inset-0 rounded-full bg-lime animate-ping opacity-30" />
                  </div>
                  
                  {/* Content card */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="relative bg-[#0B0B0B]/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-lime/30 transition-all duration-300 group">
                      {/* Large number */}
                      <span className={`absolute top-4 font-display text-7xl font-bold text-lime/30 group-hover:text-lime/50 transition-colors ${
                        index % 2 === 0 ? 'right-6 md:left-6 md:right-auto' : 'right-6'
                      }`}>
                        {step.number}
                      </span>
                      
                      <div className="relative z-10 pt-8">
                        <h3 className="font-display font-semibold text-xl text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8"
          >
            Zaufali nam
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

      {/* CTA Section - Phunk-style premium card with consultant */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#050608' }}>
        <div className="absolute bottom-10 left-10 opacity-[0.04] pointer-events-none">
          <span className="font-display text-[10rem] font-bold text-white leading-none">合作</span>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="relative rounded-[2rem] overflow-hidden border border-gray-800/50" style={{ background: 'linear-gradient(135deg, #0B0B0B 0%, #111214 50%, rgba(196,255,0,0.08) 100%)' }}>
            {/* Subtle lime glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-lime/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative grid lg:grid-cols-2 gap-8 items-end">
              {/* Left: Text content */}
              <div className="p-10 lg:p-16">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Skontaktuj się z nami na
                  <br />
                  <GradientText>bezpłatną konsultację</GradientText>
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-md">
                  Jeśli Chiny mają znaczenie dla Twojej organizacji, zapraszamy do rozmowy.
                </p>
                <Link
                  to="/kontakt"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-lime text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lime-lg"
                >
                  Umów rozmowę
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Right: Consultant image breaking frame */}
              <div className="relative hidden lg:block">
                <img 
                  src={consultantImg}
                  alt="Konsultant Yin Yang"
                  className="relative z-10 w-full max-w-md ml-auto object-contain -mt-8 -mb-1"
                  style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
