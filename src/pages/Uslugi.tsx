import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LogoMarquee } from '@/components/LogoMarquee';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { 
  Target, Search, Rocket, Settings, TrendingUp, Users, 
  Truck, ClipboardCheck, Plane, GraduationCap, ArrowRight, CheckCircle
} from 'lucide-react';
import clientPortrait from '@/assets/client-portrait.jpg';

const services = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Strategia wobec Chin',
    subtitle: 'Poziom zarządczy',
    items: [
      'Analizy strategiczne wpływu Chin na firmę lub sektor',
      'Decyzje wejścia, współpracy, skalowania lub ograniczenia ekspozycji',
      'Scenariusze strategiczne i mapy ryzyk',
      'Briefingi decyzyjne dla zarządów',
    ],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Analizy rynkowe i sektorowe',
    subtitle: 'Badania i insights',
    items: [
      'Analizy sektorów i klastrów przemysłowych',
      'Badanie konkurencji lokalnej i międzynarodowej',
      'Analiza popytu, trendów i barier wejścia',
      'Analiza regulacyjna i instytucjonalna rynku',
    ],
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Research, Intelligence i Weryfikacja',
    subtitle: 'Due diligence',
    items: [
      'Research firm chińskich i europejskich',
      'Analiza zaplecza technologicznego i R&D',
      'Weryfikacja partnerów biznesowych i technologicznych',
      'Due diligence przed rozpoczęciem współpracy',
    ],
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Wejście na rynek',
    subtitle: 'Polska ↔ Chiny',
    items: [
      'Analiza rynku i modelu wejścia',
      'Wsparcie regulacyjne i formalne',
      'Przygotowanie struktur handlowych lub partnerskich',
    ],
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Marketing i Pozycjonowanie',
    subtitle: 'Strategia komunikacji',
    items: [
      'Pozycjonowanie marki i oferty (PL i CN)',
      'Strategia komunikacji i adaptacja do realiów lokalnych',
      'Materiały sprzedażowe i wizerunkowe',
      'Go-To-Market & walidacja rynku',
    ],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Identyfikacja partnerów',
    subtitle: 'Matchmaking',
    items: [
      'Identyfikacja potencjalnych partnerów',
      'Selekcja i ocena dopasowania',
      'Organizacja spotkań i rozmów',
      'Wsparcie negocjacyjne i relacyjne',
    ],
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Handel, Eksport i Import',
    subtitle: 'Wsparcie logistyczne',
    items: [
      'Doradztwo w zakresie eksportu i importu',
      'Analiza łańcucha dostaw i kosztów logistycznych',
      'Koordynacja operacyjna dostaw od A do Z',
    ],
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: 'Audyty i Nadzór operacyjny',
    subtitle: 'Kontrola jakości',
    items: [
      'Audyty firm i zakładów',
      'Kontrola jakości',
      'Monitoring realizacji ustaleń',
      'Bieżące wsparcie lokalne',
    ],
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: 'Misje biznesowe',
    subtitle: 'Wizyty studyjne',
    items: [
      'Misje biznesowe i technologiczne',
      'Wizyty studyjne',
      'Wsparcie delegacji chińskich w Polsce',
      'Przygotowanie merytoryczne uczestników',
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Szkolenia i Briefingi',
    subtitle: 'Dla decydentów',
    items: [
      'Szkolenia z systemu gospodarczego Chin',
      'Szkolenia z kultury biznesowej i negocjacji',
      'Zamknięte briefingi strategiczne',
      'Sesje decyzyjne',
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
      
      {/* Hero Section - Shorter */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-lime/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-6">
              Usługi
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Kompleksowe wsparcie
              <br />
              <span className="text-lime">na linii Polska–Chiny</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Zakres współpracy każdorazowo dopasowany jest do kontekstu klienta, etapu relacji z Chinami oraz charakteru podejmowanych decyzji.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-gray-50 rounded-3xl p-8 hover:bg-gray-900 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime/0 to-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gray-900 group-hover:bg-lime flex items-center justify-center text-lime group-hover:text-gray-900 transition-all duration-300 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 group-hover:text-lime/70 transition-colors duration-300">
                        {service.subtitle}
                      </span>
                      <h3 className="font-display font-semibold text-xl text-gray-900 group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-start gap-3 text-gray-600 group-hover:text-gray-300 text-sm transition-colors duration-300"
                      >
                        <CheckCircle className="w-4 h-4 text-lime flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 mt-6 text-gray-900 group-hover:text-lime font-medium text-sm transition-colors duration-300"
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

      {/* Case Study */}
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Client Portrait */}
              <div className="relative lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-lime/20 rounded-3xl blur-2xl" />
                  <img
                    src={clientPortrait}
                    alt="Client"
                    className="relative rounded-3xl object-cover w-full aspect-[3/4] border-4 border-lime/30"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-lime text-gray-900 px-6 py-3 rounded-2xl font-display font-semibold">
                    Średnia fabryka mebli
                  </div>
                </motion.div>
              </div>

              {/* Case Study Content */}
              <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/50">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lime font-medium mb-2">Sytuacja</h4>
                    <p className="text-gray-300">
                      Plan zakupu robotów lakierniczych z Chin. Obawy o awaryjność, brak części zamiennych i rzetelność dostawcy znalezionego w internecie.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lime font-medium mb-2">Działania Yin Yang</h4>
                    <p className="text-gray-300">
                      Przeprowadzono analizę rynku. Zidentyfikowano 3 producentów w klastrze robotyki (Foshan) posiadających stabilną pozycję rynkową. Odrzucono 2 firmy oparte wyłącznie na marketingu (negatywne opinie na chińskich forach inżynierskich). Rekomendowano dostawcę wykorzystującego podzespoły Siemens (łatwy serwis w Polsce).
                    </p>
                  </div>

                  <div className="bg-lime/10 rounded-2xl p-6 border border-lime/20">
                    <h4 className="text-lime font-medium mb-2">Efekt decyzyjny</h4>
                    <p className="text-white font-medium">
                      Klient zrezygnował z ryzykownego zakupu od pośrednika i rozpoczął rozmowy z rekomendowanym producentem. 
                      <span className="text-lime"> Uniknięcie straty szacowanej na ok. 200 tys. PLN.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
              className="inline-flex items-center gap-3 px-10 py-5 bg-lime text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lime-lg"
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
