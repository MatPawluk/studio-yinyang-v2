import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LogoMarquee } from '@/components/LogoMarquee';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Target, Search, Rocket, Settings, ArrowRight, ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import statsBg from '@/assets/stats-bg.jpg';

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
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Background with parallax */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900" />
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              <span className="text-white/80 text-sm font-medium">Polska – Chiny</span>
            </motion.div>

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

        {/* Service Cards - Half visible on hero */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {heroServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center text-lime mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-lime group-hover:text-gray-900">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white pt-48 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
              Nasze usługi
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Kompleksowe wsparcie
            </h2>
            <Link 
              to="/uslugi"
              className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-lime transition-colors duration-300"
            >
              Zobacz wszystkie usługi
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
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

      {/* Process Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-lime to-transparent -translate-x-8" />
                )}
                
                <div className="relative">
                  <span className="font-display text-6xl font-bold text-lime/20">{step.number}</span>
                  <h3 className="font-display font-semibold text-xl text-gray-900 mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
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
              className="group inline-flex items-center gap-3 px-10 py-5 bg-lime text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lime-lg animate-pulse-glow"
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
