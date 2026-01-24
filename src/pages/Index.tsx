import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LogoMarquee } from '@/components/LogoMarquee';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Target, Search, Rocket, Settings, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, TrendingUp, BarChart3, Users, Handshake, Package, ClipboardCheck } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import statsBg from '@/assets/stats-bg.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';
import serviceAnalysis from '@/assets/service-analysis.jpg';

const heroServices = [
  { 
    icon: <Target className="w-6 h-6" />, 
    title: 'Strategia i decyzje', 
    description: 'Scenariusze, mapy ryzyk, briefingi zarządcze.' 
  },
  { 
    icon: <Search className="w-6 h-6" />, 
    title: 'Research i weryfikacja', 
    description: 'Due diligence, analiza partnerów, intelligence.' 
  },
  { 
    icon: <Rocket className="w-6 h-6" />, 
    title: 'Wejście i rozwój', 
    description: 'Model wejścia, struktury, pozycjonowanie.' 
  },
  { 
    icon: <Settings className="w-6 h-6" />, 
    title: 'Operacje i logistyka', 
    description: 'Audyt, kontrola jakości, nadzór, eksport/import.' 
  },
];

const carouselServices = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Strategia wobec Chin',
    description: 'Analizy strategiczne, scenariusze i mapy ryzyk, briefingi dla zarządów.',
    image: serviceStrategy,
    slug: 'strategia-wobec-chin',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Analizy rynkowe i sektorowe',
    description: 'Badania sektorów, analiza konkurencji i trendów rynkowych.',
    image: serviceAnalysis,
    slug: 'analizy-rynkowe',
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Research, Intelligence i Weryfikacja',
    description: 'Due diligence partnerów biznesowych i technologicznych.',
    image: serviceStrategy,
    slug: 'research-intelligence',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Wejście na rynek',
    description: 'Analiza modelu wejścia i struktur handlowych.',
    image: serviceAnalysis,
    slug: 'wejscie-na-rynek',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Marketing i Pozycjonowanie',
    description: 'Strategia komunikacji i Go-To-Market.',
    image: serviceStrategy,
    slug: 'marketing-pozycjonowanie',
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: 'Identyfikacja partnerów',
    description: 'Matchmaking i wsparcie negocjacyjne.',
    image: serviceAnalysis,
    slug: 'identyfikacja-partnerow',
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Handel, Eksport i Import',
    description: 'Doradztwo logistyczne i koordynacja dostaw.',
    image: serviceStrategy,
    slug: 'handel-eksport-import',
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselServices.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselServices.length) % carouselServices.length);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Background with parallax + video overlay effect */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
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

        {/* Hero Content */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 lg:pt-40"
        >
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Twój przewodnik
              <br />
              <span className="text-lime">w relacjach Polska–Chiny.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
            >
              Analizujemy, weryfikujemy, organizujemy i nadzorujemy projekty na linii PL–CN
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-lime text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lime-lg"
              >
                Umów bezpłatną konsultację
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Service Cards - Dark themed with lime accents */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {heroServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group relative bg-black/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-lime/20 overflow-hidden"
                >
                  {/* Lime accent glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-lime/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-lime flex items-center justify-center text-gray-900 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lime-lg">
                      {service.icon}
                    </div>
                    <h3 className="font-display font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                  
                  {/* Bottom lime accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-lime/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="bg-white pt-48 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header - More prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start justify-between mb-16"
          >
            <div>
              <h2 className="font-display text-4xl lg:text-6xl font-bold text-gray-900">
                Nasze <span className="text-lime">usługi</span>
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

          {/* Carousel */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[16/9] lg:aspect-[21/9]"
            >
              <img
                src={carouselServices[currentSlide].image}
                alt={carouselServices[currentSlide].title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-end p-8 lg:p-12">
                <div className="max-w-lg">
                  <div className="w-14 h-14 rounded-2xl bg-lime flex items-center justify-center text-gray-900 mb-6">
                    {carouselServices[currentSlide].icon}
                  </div>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
                    {carouselServices[currentSlide].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">
                    {carouselServices[currentSlide].description}
                  </p>
                  <Link
                    to={`/uslugi/${carouselServices[currentSlide].slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-lime text-gray-900 rounded-full font-medium hover:scale-105 transition-all duration-300"
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-6">
              {/* Indicators */}
              <div className="flex gap-2">
                {carouselServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-8 bg-lime' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-lime hover:bg-lime transition-all duration-300 group"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-lime hover:bg-lime transition-all duration-300 group"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
                </button>
              </div>
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

      {/* Process Section - Staircase Layout */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
              Proces
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Jak to działa
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Prosty, przejrzysty proces współpracy od pierwszego kontaktu do realizacji.
            </p>
          </motion.div>

          {/* Staircase Layout */}
          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-start gap-6 mb-8 ${
                  index % 2 === 1 ? 'lg:ml-24' : ''
                } ${index % 2 === 0 && index !== 0 ? 'lg:mr-24' : ''}`}
                style={{ marginLeft: index * 40 }}
              >
                {/* Step indicator */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-lime flex items-center justify-center shadow-lime">
                  <span className="font-display text-2xl font-bold text-gray-900">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300">
                  <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-lime to-gray-200" />
                )}
              </motion.div>
            ))}
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
                <div className="font-display text-5xl lg:text-6xl font-bold text-lime mb-3">
                  {stat.isText ? (
                    <span>{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

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

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Skontaktuj się z nami na
              <br />
              <span className="text-lime">bezpłatną konsultację</span>
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
