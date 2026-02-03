import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LogoMarquee } from '@/components/LogoMarquee';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { GradientText } from '@/components/GradientText';
import { ChineseCharacters } from '@/components/ChineseCharacters';
import { ArrowRight, ChevronDown } from 'lucide-react';
import serviceStrategy from '@/assets/service-strategy.jpg';
import serviceAnalysis from '@/assets/service-analysis.jpg';
import statsBg from '@/assets/stats-bg.jpg';
import worldMap from '@/assets/world-map.jpg';

// New 6 categories with their sub-services
const serviceCategories = [
  {
    title: 'Strategia wobec Chin',
    slug: 'strategia-wobec-chin',
    count: 3,
    subServices: [
      { title: 'Analiza wpływu Chin na firmę lub sektor', slug: 'analiza-wplywu', image: serviceStrategy },
      { title: 'Decyzje wejścia, współpracy, skalowania lub ograniczenia ekspozycji', slug: 'decyzje-strategiczne', image: serviceAnalysis },
      { title: 'Briefingi decyzyjne dla zarządów', slug: 'briefingi-decyzyjne', image: serviceStrategy },
    ],
  },
  {
    title: 'Analizy rynku i weryfikacja partnerów',
    slug: 'analizy-rynku',
    count: 4,
    subServices: [
      { title: 'Analizy sektorów, klastrów przemysłowych i konkurencji', slug: 'analizy-sektorow', image: serviceAnalysis },
      { title: 'Analiza regulacyjna i barier wejścia', slug: 'analiza-regulacyjna', image: serviceStrategy },
      { title: 'Weryfikacja kontrahenta (Desktop Check)', slug: 'weryfikacja-kontrahenta', image: serviceAnalysis },
      { title: 'Rozszerzona weryfikacja partnera (Due Diligence)', slug: 'due-diligence', image: serviceStrategy },
    ],
  },
  {
    title: 'Wejście na rynek Polska ↔ Chiny',
    slug: 'wejscie-na-rynek',
    count: 5,
    subServices: [
      { title: 'Wybór modelu wejścia na rynek', slug: 'wybor-modelu', image: serviceStrategy },
      { title: 'Wsparcie formalne i regulacyjne', slug: 'wsparcie-regulacyjne', image: serviceAnalysis },
      { title: 'Identyfikacja i selekcja partnerów', slug: 'identyfikacja-partnerow', image: serviceStrategy },
      { title: 'Wsparcie negocjacyjne i relacyjne', slug: 'wsparcie-negocjacyjne', image: serviceAnalysis },
      { title: 'Przygotowanie struktur handlowych lub partnerskich', slug: 'struktury-handlowe', image: serviceStrategy },
    ],
  },
  {
    title: 'Import, eksport i zarządzanie łańcuchem dostaw',
    slug: 'import-eksport',
    count: 5,
    subServices: [
      { title: 'Audyty i weryfikacja dostawców (On-Site)', slug: 'audyty-dostawcow', image: serviceAnalysis },
      { title: 'Projektowanie i optymalizacja łańcucha dostaw', slug: 'optymalizacja-lancucha', image: serviceStrategy },
      { title: 'Nadzór produkcji oraz kontrola jakości', slug: 'nadzor-produkcji', image: serviceAnalysis },
      { title: 'Organizacja transportu międzynarodowego', slug: 'transport-miedzynarodowy', image: serviceStrategy },
      { title: 'Kompleksowa realizacja projektu PL ↔ CN (end-to-end)', slug: 'projekt-end-to-end', image: serviceAnalysis },
    ],
  },
  {
    title: 'Marketing i pozycjonowanie rynkowe',
    slug: 'marketing-pozycjonowanie',
    count: 5,
    subServices: [
      { title: 'Lokalne pozycjonowanie marki (PL i CN)', slug: 'pozycjonowanie-marki', image: serviceStrategy },
      { title: 'Strategia komunikacji', slug: 'strategia-komunikacji', image: serviceAnalysis },
      { title: 'Adaptacja komunikacji do rynku PL i CN', slug: 'adaptacja-komunikacji', image: serviceStrategy },
      { title: 'Materiały sprzedażowe i wizerunkowe', slug: 'materialy-sprzedazowe', image: serviceAnalysis },
      { title: 'Wsparcie działań marketingowych i pozyskiwania leadów', slug: 'wsparcie-marketingowe', image: serviceStrategy },
    ],
  },
  {
    title: 'Misje biznesowe i szkolenia',
    slug: 'misje-szkolenia',
    count: 4,
    subServices: [
      { title: 'Organizacja misji biznesowych i technologicznych PL ↔ CN', slug: 'organizacja-misji', image: serviceAnalysis },
      { title: 'Aranżacja spotkań B2B i matchmaking partnerów', slug: 'matchmaking-b2b', image: serviceStrategy },
      { title: 'Szkolenia z systemu gospodarczego Chin', slug: 'szkolenia-system', image: serviceAnalysis },
      { title: 'Szkolenia z kultury biznesowej i negocjacji', slug: 'szkolenia-negocjacje', image: serviceStrategy },
    ],
  },
];

const stats = [
  { value: 480, suffix: '+', label: 'zweryfikowanych podmiotów i partnerów biznesowych' },
  { value: 50, suffix: '+', label: 'lat łącznego doświadczenia zespołu w projektach międzynarodowych' },
  { value: 7, suffix: '', label: 'sektorów technologicznych' },
  { value: 0, suffix: 'PL-CN', label: 'stała obecność operacyjna', isText: true },
];

const Uslugi = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);

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
        
        {/* Chinese character decoration */}
        <ChineseCharacters characters="合作" position="right" className="top-32" opacity={0.06} />

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
              na linii Polska-Chiny
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Zakres współpracy każdorazowo dopasowany jest do kontekstu klienta, etapu relacji z Chinami oraz charakteru podejmowanych decyzji.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Accordion Section */}
      <section className="bg-gray-950 py-16 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 255, 0, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Accordion List */}
          <div className="space-y-0">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-800"
              >
                {/* Category Header */}
                <button
                  onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
                  className="w-full flex items-center justify-between py-6 group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-lime transition-colors duration-300">
                      {category.title}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 text-xs">
                      {category.count} usług
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-500 group-hover:text-lime transition-all duration-300 ${
                      expandedCategory === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded Sub-services */}
                <AnimatePresence>
                  {expandedCategory === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
                        {category.subServices.map((subService, subIndex) => (
                          <motion.div
                            key={subService.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                          >
                            <Link
                              to={`/uslugi/${category.slug}/${subService.slug}`}
                              className="group relative block h-full"
                            >
                              <div className="relative h-full rounded-2xl overflow-hidden border border-gray-800/50 bg-gray-900/50 hover:border-lime/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime/5">
                                {/* Image - larger */}
                                <div className="aspect-[4/3] relative overflow-hidden">
                                  <img
                                    src={subService.image}
                                    alt={subService.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                                </div>
                                
                                {/* Content - better visibility */}
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                  <h3 className="text-white text-base font-semibold leading-tight group-hover:text-lime transition-colors mb-2">
                                    {subService.title}
                                  </h3>
                                  <div className="flex items-center gap-2 text-lime">
                                    <span className="text-sm">Dowiedz się więcej</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
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
              Skala i zaufanie
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
              Porozmawiajmy <GradientText>o Twoich potrzebach</GradientText>
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
