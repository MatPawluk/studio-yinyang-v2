import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LogoMarquee } from '@/components/LogoMarquee';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { InteractiveCaseStudy } from '@/components/InteractiveCaseStudy';
import { Target, ArrowRight, BarChart3, Search, Rocket, TrendingUp, Handshake, Package, ClipboardCheck } from 'lucide-react';
import serviceStrategy from '@/assets/service-strategy.jpg';
import serviceAnalysis from '@/assets/service-analysis.jpg';

const services = [
  {
    title: 'Strategia wobec Chin',
    subtitle: 'Poziom zarządczy',
    icon: <Target className="w-6 h-6" />,
    image: serviceStrategy,
    slug: 'strategia-wobec-chin',
    items: [
      'Analizy strategiczne wpływu Chin na firmę lub sektor',
      'Decyzje wejścia, współpracy, skalowania lub ograniczenia ekspozycji',
      'Scenariusze strategiczne i mapy ryzyk',
      'Briefingi decyzyjne dla zarządów',
    ],
  },
  {
    title: 'Analizy rynkowe i sektorowe',
    subtitle: 'Badania i insights',
    icon: <BarChart3 className="w-6 h-6" />,
    image: serviceAnalysis,
    slug: 'analizy-rynkowe',
    items: [
      'Analizy sektorów i klastrów przemysłowych',
      'Badanie konkurencji lokalnej i międzynarodowej',
      'Analiza popytu, trendów i barier wejścia',
      'Analiza regulacyjna i instytucjonalna rynku',
    ],
  },
  {
    title: 'Research, Intelligence i Weryfikacja',
    subtitle: 'Due diligence',
    icon: <Search className="w-6 h-6" />,
    image: serviceStrategy,
    slug: 'research-intelligence',
    items: [
      'Research firm chińskich i europejskich',
      'Analiza zaplecza technologicznego i R&D',
      'Weryfikacja partnerów biznesowych i technologicznych',
      'Due diligence przed rozpoczęciem współpracy',
    ],
  },
  {
    title: 'Wejście na rynek',
    subtitle: 'Polska ↔ Chiny',
    icon: <Rocket className="w-6 h-6" />,
    image: serviceAnalysis,
    slug: 'wejscie-na-rynek',
    items: [
      'Analiza rynku i modelu wejścia',
      'Wsparcie regulacyjne i formalne',
      'Przygotowanie struktur handlowych lub partnerskich',
    ],
  },
  {
    title: 'Marketing i Pozycjonowanie',
    subtitle: 'Strategia komunikacji',
    icon: <TrendingUp className="w-6 h-6" />,
    image: serviceStrategy,
    slug: 'marketing-pozycjonowanie',
    items: [
      'Pozycjonowanie marki i oferty (PL i CN)',
      'Strategia komunikacji i adaptacja do realiów lokalnych',
      'Materiały sprzedażowe i wizerunkowe',
      'Go-To-Market & walidacja rynku',
    ],
  },
  {
    title: 'Identyfikacja partnerów',
    subtitle: 'Matchmaking',
    icon: <Handshake className="w-6 h-6" />,
    image: serviceAnalysis,
    slug: 'identyfikacja-partnerow',
    items: [
      'Identyfikacja potencjalnych partnerów',
      'Selekcja i ocena dopasowania',
      'Organizacja spotkań i rozmów',
      'Wsparcie negocjacyjne i relacyjne',
    ],
  },
  {
    title: 'Handel, Eksport i Import',
    subtitle: 'Wsparcie logistyczne',
    icon: <Package className="w-6 h-6" />,
    image: serviceStrategy,
    slug: 'handel-eksport-import',
    items: [
      'Doradztwo w zakresie eksportu i importu',
      'Analiza łańcucha dostaw i kosztów logistycznych',
      'Koordynacja operacyjna dostaw od A do Z',
    ],
  },
  {
    title: 'Audyty i Nadzór operacyjny',
    subtitle: 'Kontrola jakości',
    icon: <ClipboardCheck className="w-6 h-6" />,
    image: serviceAnalysis,
    slug: 'audyty-nadzor',
    items: [
      'Audyty firm i zakładów',
      'Kontrola jakości',
      'Monitoring realizacji ustaleń',
      'Bieżące wsparcie lokalne',
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
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section - Dark with effects */}
      <section className="relative pt-28 pb-16 bg-gray-900 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-lime/5 blur-[150px] rounded-full" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${serviceStrategy})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/95 to-gray-900" />
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
              Kompleksowe wsparcie
              <br />
              <span className="text-lime">na linii Polska–Chiny</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Zakres współpracy każdorazowo dopasowany jest do kontekstu klienta, etapu relacji z Chinami oraz charakteru podejmowanych decyzji.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services - Alternating Layout with Large Images */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay with badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-lime flex items-center justify-center shadow-lime">
                          {service.icon}
                        </div>
                        <div>
                          <p className="text-white/70 text-sm">{service.subtitle}</p>
                          <p className="text-white font-semibold">{service.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} text-center lg:text-left`}>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <ul className="space-y-4 mb-8">
                    {service.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-600 justify-center lg:justify-start"
                      >
                        <div className="w-2 h-2 rounded-full bg-lime flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/uslugi/${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-lime hover:text-gray-900 transition-all duration-300 hover:shadow-lime"
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
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
              Przykładowa realizacja
            </h2>
          </motion.div>

          <InteractiveCaseStudy />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-950 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gray-500 text-sm uppercase tracking-widest">
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
                <div className="font-display text-4xl lg:text-5xl font-bold text-lime mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
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
