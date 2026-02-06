import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { WorldDotMap } from '@/components/WorldDotMap';
import { GradientText } from '@/components/GradientText';
import { ChineseCharacters } from '@/components/ChineseCharacters';
import { FloatingDots } from '@/components/FloatingDots';
import { FloatingTransport } from '@/components/FloatingTransport';
import { TeamCarousel } from '@/components/TeamCarousel';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import teamJan from '@/assets/team-jan.jpg';
import teamWei from '@/assets/team-wei.jpg';
import teamAnna from '@/assets/team-anna.jpg';
import avatar4 from '@/assets/avatar-4.jpg';
import avatar5 from '@/assets/avatar-5.jpg';
import avatar6 from '@/assets/avatar-6.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';
import serviceAnalysis from '@/assets/service-analysis.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const team = [
  { name: 'Adrian Nkwamu', role: 'Co-Founder & Managing Partner', image: teamJan },
  { name: 'Hugo Przybyła', role: 'Co-Founder & Poland Market Lead', image: teamWei },
  { name: 'Maksymilian Szabatin', role: 'Partner, Strategy & Intelligence', image: teamAnna },
  { name: 'Liu Wenhao', role: 'Senior China Market Analyst', image: avatar4 },
  { name: 'Zhang Rui', role: 'Logistics & Supply Chain Coordinator', image: avatar5 },
  { name: 'Sara Chen', role: 'Head of China Operations & International Relations', image: avatar6 },
];

const stats = [
  { value: 480, suffix: '+', label: 'zweryfikowanych podmiotów i partnerów biznesowych' },
  { value: 50, suffix: '+', label: 'lat łącznego doświadczenia zespołu w projektach międzynarodowych' },
  { value: 7, suffix: '', label: 'sektorów technologicznych' },
  { value: 0, suffix: 'PL-CN', label: 'stała obecność operacyjna', isText: true },
];

const faqs = [
  {
    question: 'Co wyróżnia Yin Yang na tle innych firm działających na linii Polska-Chiny?',
    answer: 'Łączymy operacyjną obecność w Chinach z dogłębną analizą strategiczną oraz znajomością realiów europejskich. Pracujemy w trzech językach i poruszamy się swobodnie po obu systemach regulacyjnych. Dzięki temu nie tylko tłumaczymy rynek, ale realnie go interpretujemy i filtrujemy ryzyka.',
  },
  {
    question: 'Jak wygląda typowy projekt współpracy z Yin Yang?',
    answer: 'Każdy projekt zaczynamy od bezpłatnej konsultacji, podczas której precyzujemy cel biznesowy oraz zakres wsparcia. Następnie definiujemy harmonogram i etapy realizacji, od analizy i weryfikacji po wsparcie operacyjne lub wejście na rynek. Każdy projekt ma jasno określony punkt decyzyjny oraz przejrzystą strukturę komunikacji.',
  },
  {
    question: 'Czy oferujecie wsparcie tylko dla dużych firm?',
    answer: 'Współpracujemy zarówno z małymi i średnimi przedsiębiorstwami, jak i z dużymi korporacjami. Nasz model współpracy jest elastyczny i dopasowujemy go do skali i budżetu klienta.',
  },
  {
    question: 'Jak długo trwa typowy projekt analityczny?',
    answer: 'W zależności od zakresu, projekt analityczny trwa od 5 do 14 dni roboczych. Bardziej złożone projekty due diligence mogą wymagać do 4 tygodni.',
  },
  {
    question: 'Czy macie biuro w Chinach?',
    answer: 'Tak, posiadamy operacyjną obecność w Shanghai, co pozwala nam na bezpośredni dostęp do chińskiego rynku, źródeł informacji i sieci kontaktów biznesowych.',
  },
  {
    question: 'W jakich językach świadczycie usługi?',
    answer: 'Nasze usługi świadczymy w języku polskim, angielskim i chińskim (mandaryński). Wszystkie raporty i materiały przygotowujemy w wybranym przez klienta języku.',
  },
  {
    question: 'Czy oferujecie wsparcie prawne i podatkowe?',
    answer: 'Nie świadczymy bezpośrednio usług prawnych ani podatkowych, ale współpracujemy z zaufanymi kancelariami specjalizującymi się w prawie chińskim i polskim oraz transakcjach międzynarodowych.',
  },
];

const ONas = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <img 
            src={heroBg} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900" />
        </motion.div>
        
        <FloatingDots count={80} />
        <FloatingTransport />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              rotate: 360,
            }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] border border-lime/10 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
            }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] border border-lime/5 rounded-full"
          />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-lime/10 blur-[150px] rounded-full" />
        </div>
        
        {/* Chinese character */}
        <ChineseCharacters characters="合" position="right" className="top-40" opacity={0.06} />

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 lg:px-12 text-center pt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
              O Yin Yang
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8">
              Twój <GradientText>partner</GradientText>,
              <br />
              na linii PL-CN
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Działamy operacyjnie pomiędzy Polską a Chinami, łącząc perspektywę europejskich firm z bezpośrednią obecnością w chińskim systemie gospodarczym. Nasi specjaliści łączą wieloletnią praktykę projektów międzynarodowych z zapleczem akademickim zdobytym na czołowych uczelniach w Chinach, w tym Fudan University i Tongji University.
            </p>
          </motion.div>

          {/* Stats Row - integrated into hero */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-6 lg:p-8 rounded-2xl bg-gray-900/60 backdrop-blur-lg border border-gray-800/50 hover:border-lime/30 transition-all duration-300"
              >
                <div className="font-display text-3xl lg:text-4xl font-bold text-lime mb-2">
                  {stat.isText ? (
                    <span>{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </section>

      {/* Team - 3+3 layout */}
      <section className="bg-gray-950 py-24 relative overflow-hidden">
        {/* Chinese character */}
        <ChineseCharacters characters="作" position="left" className="top-20" opacity={0.05} />
        
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">
              Zespół
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Poznaj <GradientText>nas</GradientText>
            </h2>
          </motion.div>

          {/* 3+3 grid */}
          <div className="max-w-5xl mx-auto">
            {/* First row - 3 people */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              {team.slice(0, 3).map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative mb-4 rounded-2xl overflow-hidden aspect-[3/4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  </div>
                  <h3 className="font-display font-bold text-base lg:text-lg text-white">{member.name}</h3>
                  <p className="text-gray-500 text-xs lg:text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>

            {/* Second row - 3 people centered */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {team.slice(3, 6).map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 3) * 0.1 }}
                  className="group"
                >
                  <div className="relative mb-4 rounded-2xl overflow-hidden aspect-[3/4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  </div>
                  <h3 className="font-display font-bold text-base lg:text-lg text-white">{member.name}</h3>
                  <p className="text-gray-500 text-xs lg:text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Carousel */}
      <TeamCarousel />

      {/* World Dot Map Section */}
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">
              Połączenie
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Warszawa ↔ <GradientText>Shanghai</GradientText>
            </h2>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <WorldDotMap />
          </div>
        </div>
      </section>

      {/* FAQ Section - Same style as homepage */}
      <section className="bg-gray-950 py-24 relative overflow-hidden">
        <ChineseCharacters characters="信任" position="right" className="top-20" opacity={0.08} />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-lime/5 blur-[150px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Najczęściej zadawane <GradientText>pytania</GradientText>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-0">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-800"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="font-display text-lg md:text-xl font-semibold text-white group-hover:text-lime transition-colors duration-300 pr-4">
                    {faq.question}
                  </span>
                  <ChevronRight 
                    className={`w-5 h-5 text-gray-500 group-hover:text-lime transition-all duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 pb-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section removed */}

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
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
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Umów <GradientText>bezpłatną konsultację</GradientText>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Porozmawiajmy o tym, jak możemy wesprzeć Twoją organizację w relacjach z Chinami.
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-lime text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lime-lg animate-pulse-glow-slow"
            >
              Skontaktuj się
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
