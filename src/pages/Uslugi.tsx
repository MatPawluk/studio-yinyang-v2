import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LogoMarquee } from '@/components/LogoMarquee';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { InteractiveCaseStudy } from '@/components/InteractiveCaseStudy';
import { GradientText } from '@/components/GradientText';
import { ArrowRight } from 'lucide-react';
import serviceStrategy from '@/assets/service-strategy.jpg';
import serviceAnalysis from '@/assets/service-analysis.jpg';
import statsBg from '@/assets/stats-bg.jpg';
import worldMap from '@/assets/world-map.jpg';

// Service categories with sub-services
const serviceCategories = [
  {
    title: 'Strategia wobec Chin',
    slug: 'strategia-wobec-chin',
    image: serviceStrategy,
    subServices: [
      { title: 'Analizy strategiczne wpływu Chin na firmę lub sektor', slug: 'analizy-strategiczne' },
      { title: 'Decyzje wejścia, współpracy, skalowania lub ograniczenia ekspozycji', slug: 'decyzje-wejscia' },
      { title: 'Scenariusze strategiczne i mapy ryzyk', slug: 'scenariusze-strategiczne' },
      { title: 'Briefingi decyzyjne dla zarządów', slug: 'briefingi-decyzyjne' },
    ],
  },
  {
    title: 'Analizy rynkowe i sektorowe',
    slug: 'analizy-rynkowe',
    image: serviceAnalysis,
    subServices: [
      { title: 'Analizy sektorów i klastrów przemysłowych', slug: 'analizy-sektorow' },
      { title: 'Badanie konkurencji lokalnej i międzynarodowej', slug: 'badanie-konkurencji' },
      { title: 'Analiza popytu, trendów i barier wejścia', slug: 'analiza-popytu' },
      { title: 'Analiza regulacyjna i instytucjonalna rynku', slug: 'analiza-regulacyjna' },
    ],
  },
  {
    title: 'Research, Intelligence i Weryfikacja',
    slug: 'research-intelligence',
    image: serviceStrategy,
    subServices: [
      { title: 'Research firm chińskich i europejskich', slug: 'research-firm' },
      { title: 'Analiza zaplecza technologicznego i R&D', slug: 'analiza-technologiczna' },
      { title: 'Weryfikacja partnerów biznesowych i technologicznych', slug: 'weryfikacja-partnerow' },
      { title: 'Due diligence przed rozpoczęciem współpracy', slug: 'due-diligence' },
    ],
  },
  {
    title: 'Wejście na rynek',
    slug: 'wejscie-na-rynek',
    image: serviceAnalysis,
    subServices: [
      { title: 'Analiza rynku i modelu wejścia', slug: 'analiza-modelu' },
      { title: 'Wsparcie regulacyjne i formalne', slug: 'wsparcie-regulacyjne' },
      { title: 'Przygotowanie struktur handlowych lub partnerskich', slug: 'struktury-handlowe' },
    ],
  },
  {
    title: 'Marketing i Pozycjonowanie',
    slug: 'marketing-pozycjonowanie',
    image: serviceStrategy,
    subServices: [
      { title: 'Pozycjonowanie marki i oferty (PL i CN)', slug: 'pozycjonowanie-marki' },
      { title: 'Strategia komunikacji i adaptacja do realiów lokalnych', slug: 'strategia-komunikacji' },
      { title: 'Materiały sprzedażowe i wizerunkowe', slug: 'materialy-sprzedazowe' },
      { title: 'Go-To-Market & walidacja rynku', slug: 'go-to-market' },
    ],
  },
  {
    title: 'Identyfikacja partnerów',
    slug: 'identyfikacja-partnerow',
    image: serviceAnalysis,
    subServices: [
      { title: 'Identyfikacja potencjalnych partnerów', slug: 'identyfikacja-potencjalnych' },
      { title: 'Selekcja i ocena dopasowania', slug: 'selekcja-ocena' },
      { title: 'Organizacja spotkań i rozmów', slug: 'organizacja-spotkan' },
      { title: 'Wsparcie negocjacyjne i relacyjne', slug: 'wsparcie-negocjacyjne' },
    ],
  },
  {
    title: 'Handel, Eksport i Import',
    slug: 'handel-eksport-import',
    image: serviceStrategy,
    subServices: [
      { title: 'Doradztwo w zakresie eksportu i importu', slug: 'doradztwo-eksport' },
      { title: 'Analiza łańcucha dostaw i kosztów logistycznych', slug: 'analiza-lancucha' },
      { title: 'Koordynacja operacyjna dostaw od A do Z', slug: 'koordynacja-dostaw' },
    ],
  },
  {
    title: 'Audyty i Nadzór operacyjny',
    slug: 'audyty-nadzor',
    image: serviceAnalysis,
    subServices: [
      { title: 'Audyty firm i zakładów', slug: 'audyty-firm' },
      { title: 'Kontrola jakości', slug: 'kontrola-jakosci' },
      { title: 'Monitoring realizacji ustaleń', slug: 'monitoring-realizacji' },
      { title: 'Bieżące wsparcie lokalne', slug: 'wsparcie-lokalne' },
    ],
  },
];

const stats = [
  { value: 20, suffix: '+', label: 'firm objętych wsparciem' },
  { value: 77, suffix: '', label: 'projektów zrealizowanych' },
  { value: 7, suffix: '', label: 'sektorów technologicznych' },
  { value: 2, suffix: '', label: 'lokalizacje: Warszawa & Shanghai' },
];

const Uslugi = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const currentCategory = serviceCategories[activeCategory];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section - Dark with world map background */}
      <section className="relative pt-28 pb-16 bg-gray-900 overflow-hidden">
        {/* Background with world map */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={worldMap} 
            alt="" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900" />
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-lime/5 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-center mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-semibold uppercase tracking-wider mb-6">
              Usługi
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Kompleksowe <GradientText>wsparcie</GradientText>
              <br />
              na linii Polska–Chiny
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Zakres współpracy każdorazowo dopasowany jest do kontekstu klienta, etapu relacji z Chinami oraz charakteru podejmowanych decyzji.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs + Sub-services */}
      <section className="bg-gray-950 py-16 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 255, 0, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Category Tabs - Scrollable on mobile */}
          <div className="mb-12 overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-3 min-w-max">
              {serviceCategories.map((category, index) => (
                <button
                  key={category.slug}
                  onClick={() => setActiveCategory(index)}
                  className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === index
                      ? 'bg-lime text-gray-900'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-700/50'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {currentCategory.subServices.map((subService, index) => (
                <motion.div
                  key={subService.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/uslugi/${currentCategory.slug}/${subService.slug}`}
                    className="group relative block h-full"
                  >
                    <div className="relative h-full rounded-2xl overflow-hidden border border-gray-800/50 bg-gray-900/50 hover:border-lime/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime/5">
                      {/* Image */}
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <img
                          src={currentCategory.image}
                          alt={subService.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                      </div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-white text-sm font-medium leading-tight group-hover:text-lime transition-colors mb-3">
                          {subService.title}
                        </h3>
                        <div className="flex items-center gap-2 text-lime opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <span className="text-xs font-medium">Dowiedz się więcej</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Interactive Case Study */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">
              Case Study
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Przykładowa <GradientText>realizacja</GradientText>
            </h2>
          </motion.div>

          <InteractiveCaseStudy />
        </div>
      </section>

      {/* Stats Section with Background Image */}
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
              Doświadczenie i skala
            </span>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-5xl lg:text-6xl font-bold text-lime mb-3">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
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

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] border border-lime/10 rounded-full"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-lime/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
              Porozmawiajmy o Twoich potrzebach
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Bezpłatna konsultacja pomoże określić, jak możemy Ci pomóc.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 px-10 py-5 bg-lime text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lime-lg animate-pulse-glow-slow"
            >
              Umów rozmowę
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Uslugi;