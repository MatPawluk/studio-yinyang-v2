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
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';
import statsBg from '@/assets/stats-bg.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';
import serviceAnalysis from '@/assets/service-analysis.jpg';
import avatar1 from '@/assets/avatar-1.jpg';
import avatar2 from '@/assets/avatar-2.jpg';
import avatar3 from '@/assets/avatar-3.jpg';

const heroServices = [
  { 
    title: 'Strategia i decyzje', 
    description: 'Scenariusze, mapy ryzyk, briefingi zarządcze.' 
  },
  { 
    title: 'Research i weryfikacja', 
    description: 'Due diligence, analiza partnerów, intelligence.' 
  },
  { 
    title: 'Wejście i rozwój', 
    description: 'Model wejścia, struktury, pozycjonowanie.' 
  },
  { 
    title: 'Operacje i logistyka', 
    description: 'Audyt, kontrola jakości, nadzór, eksport/import.' 
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
    title: 'Analizy rynkowe i sektorowe',
    description: 'Badania sektorów, analiza konkurencji i trendów rynkowych.',
    image: serviceAnalysis,
    slug: 'analizy-rynkowe',
  },
  {
    title: 'Research, Intelligence i Weryfikacja',
    description: 'Due diligence partnerów biznesowych i technologicznych.',
    image: serviceStrategy,
    slug: 'research-intelligence',
  },
  {
    title: 'Wejście na rynek',
    description: 'Analiza modelu wejścia i struktur handlowych.',
    image: serviceAnalysis,
    slug: 'wejscie-na-rynek',
  },
  {
    title: 'Marketing i Pozycjonowanie',
    description: 'Strategia komunikacji i Go-To-Market.',
    image: serviceStrategy,
    slug: 'marketing-pozycjonowanie',
  },
  {
    title: 'Identyfikacja partnerów',
    description: 'Matchmaking i wsparcie negocjacyjne.',
    image: serviceAnalysis,
    slug: 'identyfikacja-partnerow',
  },
  {
    title: 'Handel, Eksport i Import',
    description: 'Doradztwo logistyczne i koordynacja dostaw.',
    image: serviceStrategy,
    slug: 'handel-eksport-import',
  },
  {
    title: 'Audyty i Nadzór operacyjny',
    description: 'Kontrola jakości i monitoring realizacji.',
    image: serviceAnalysis,
    slug: 'audyty-nadzor',
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
  { value: 20, suffix: '+', label: 'firm i instytucji objętych wsparciem' },
  { value: 77, suffix: '', label: 'projektów analitycznych i doradczych' },
  { value: 7, suffix: '', label: 'sektorów technologicznych' },
  { value: 0, suffix: 'PL–CN', label: 'stała obecność operacyjna', isText: true },
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

  return (
    <div className="min-h-screen bg-gray-900">
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
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900" />
          
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
              <span className="text-lime">w relacjach Polska–Chiny.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed px-4"
            >
              Analizujemy, weryfikujemy, organizujemy i nadzorujemy projekty na linii PL–CN
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-lime text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lime-lg"
              >
                Umów bezpłatną konsultację
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Join 720+ clients - below CTA */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src={avatar1} alt="" className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover" />
                  <img src={avatar2} alt="" className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover" />
                  <img src={avatar3} alt="" className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover" />
                </div>
                <p className="text-white/80 text-sm">
                  <span className="font-semibold text-lime">Dołącz do grona 720+</span> zadowolonych klientów
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
          className="absolute bottom-56 md:bottom-64 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/40"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Service Cards - Higher z-index, mobile responsive */}
        <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 lg:-bottom-28 left-0 right-0 z-50 pointer-events-none">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pointer-events-auto">
              {heroServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group relative bg-black/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl hover:shadow-lime/20 transition-all duration-500 hover:-translate-y-2 border border-gray-800/50 overflow-hidden"
                >
                  {/* Top lime accent bar - shorter width (50%) */}
                  <div className="absolute top-0 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-lime/50 via-lime to-lime/50" />
                  
                  {/* Lime accent glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-8 bg-lime/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 text-center pt-2">
                    <h3 className="font-display font-semibold text-white text-sm sm:text-base mb-1 sm:mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed hidden sm:block">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Section - Transition between hero and services */}
      <section className="relative bg-gradient-to-b from-gray-900 via-white to-white pt-32 sm:pt-40 pb-16">
        {/* Chinese character decoration */}
        <div className="absolute top-20 right-8 lg:right-16 opacity-5 pointer-events-none">
          <span className="font-display text-[10rem] md:text-[16rem] font-bold text-lime leading-none">橋</span>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Łączymy polskie firmy z chińskim rynkiem. Od strategii po egzekucję.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="relative bg-white pt-8 pb-24 z-10">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header - "Nasze usługi" with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start justify-between mb-12"
          >
            <div>
              <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900">
                Nasze <GradientText className="text-gray-900">usługi</GradientText>
              </h2>
            </div>
            <Link 
              to="/uslugi"
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-gray-900 font-medium hover:border-lime hover:bg-lime transition-all duration-300"
            >
              Zobacz wszystkie usługi
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Carousel with peek effect */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[16/9] lg:aspect-[21/9]"
            >
              <motion.img
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={carouselServices[currentSlide].image}
                alt={carouselServices[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent" />
              
              {/* Content overlay - no icon */}
              <div className="absolute inset-0 flex items-end p-6 sm:p-8 lg:p-12">
                <motion.div 
                  key={`content-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-lg"
                >
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                    {carouselServices[currentSlide].title}
                  </h3>
                  <p className="text-gray-300 text-base lg:text-lg mb-6 hidden sm:block">
                    {carouselServices[currentSlide].description}
                  </p>
                  <Link
                    to={`/uslugi/${carouselServices[currentSlide].slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-lime text-gray-900 rounded-full font-medium hover:scale-105 transition-all duration-300"
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Carousel Controls - centered dots */}
            <div className="flex items-center justify-center mt-8 gap-4 sm:gap-6">
              {/* Arrows left */}
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-lime hover:bg-lime transition-all duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
              </button>

              {/* Centered Indicators */}
              <div className="flex gap-2">
                {carouselServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-8 bg-lime' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows right */}
              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-lime hover:bg-lime transition-all duration-300 group"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-gray-900 py-16">
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

      {/* Process Section - Dark with Large Radar and Chinese characters */}
      <section className="bg-gray-950 py-24 relative overflow-hidden">
        {/* Large Radar in Background - much bigger */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[1200px] h-[1200px] opacity-20">
            <RadarAnimation size="lg" className="w-full h-full" />
          </div>
        </div>
        
        {/* Chinese characters decoration */}
        <ChineseCharacters characters="桥梁" position="left" className="top-32" opacity={0.06} />
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/95 to-gray-950 pointer-events-none" />

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
                    <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-lime/30 transition-all duration-300 group">
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

      {/* Stats Section with Parallax */}
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
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" />
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

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section - NEW */}
      <HomeFAQSection />

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-lime/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-lime/5 rounded-full"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lime/10 blur-[150px] rounded-full" />
        </div>
        
        {/* Chinese character */}
        <div className="absolute bottom-10 left-10 opacity-5 pointer-events-none">
          <span className="font-display text-[12rem] font-bold text-lime leading-none">合作</span>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Skontaktuj się z nami na
              <br />
              <GradientText>bezpłatną konsultację</GradientText>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Jeśli Chiny mają znaczenie dla Twojej organizacji, zapraszamy do rozmowy.
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-lime text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lime-lg animate-pulse-glow-slow"
            >
              Umów rozmowę
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;