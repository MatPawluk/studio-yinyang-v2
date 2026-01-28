import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { InteractiveCaseStudy } from '@/components/InteractiveCaseStudy';
import { GradientText } from '@/components/GradientText';
import { ChineseCharacters } from '@/components/ChineseCharacters';
import { ParallaxSection } from '@/components/ParallaxSection';
import { ArrowLeft, ArrowRight, Check, X, FileText, Video, Clock, Users } from 'lucide-react';
import serviceStrategy from '@/assets/service-strategy.jpg';
import serviceAnalysis from '@/assets/service-analysis.jpg';
import statsBg from '@/assets/stats-bg.jpg';

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  whenItMakesSense: string[];
  problemsSolved: string[];
  scope: {
    includes: string[];
    excludes: string[];
  };
  deliverables: string[];
  workModel: {
    type: string;
    duration: string;
    communication: string;
  };
  caseStudy: {
    client: string;
    situation: string;
    actions: string;
    result: string;
  };
}> = {
  'strategia-wobec-chin': {
    title: 'Strategia wobec Chin',
    subtitle: 'Poziom zarządczy',
    image: serviceStrategy,
    description: 'Dostarczamy rzetelną ocenę Twojej branży w Chinach, zweryfikowaną z perspektywy Szanghaju. Zamiast teoretycznych danych, sprawdzamy lokalne chińskie źródła i plany rządowe, do których trudno dotrzeć z Europy. Dzięki temu oddzielamy realne fakty od marketingu. To pierwszy, bezpieczny krok, który pozwala Zarządowi ocenić szanse i ryzyka zanim firma zainwestuje w drogie audyty prawne czy wyjazdy służbowe.',
    whenItMakesSense: [
      'Konieczność Modernizacji: Firma traci konkurencyjność w Polsce (rosnące koszty pracy/energii) i musi wdrożyć automatyzację lub nowe technologie, ale obawia się niskiej jakości chińskich rozwiązań i braku serwisu.',
      'Ryzyko Dostawcy: Firma jest uzależniona od importu z Chin, ale nie zna kondycji finansowej i prawnej swojego dostawcy (ryzyko nagłego przerwania łańcucha dostaw przez nowe regulacje).',
      'Planowana Ekspansja: Firma rozważa eksport do Chin i potrzebuje realnej oceny szans (weryfikacja konkurencji i barier wejścia) przed zainwestowaniem środków w marketing.',
    ],
    problemsSolved: [
      'Minimalizacja Ryzyka (De-risking): Chroni przed błędem inwestycyjnym (np. wybór technologii wycofywanej z rynku lub współpraca z pośrednikiem udającym producenta).',
      'Weryfikacja Opłacalności: Wskazuje, czy import/wdrożenie danej technologii faktycznie przyniesie oszczędności względem rozwiązań dostępnych w Europie.',
    ],
    scope: {
      includes: [
        'Analiza Luki (Gap Analysis): Porównanie rozwiązań stosowanych w Chinach z obecną sytuacją w firmie klienta.',
        'Weryfikacja Polityczna: Sprawdzenie, czy dany sektor jest wspierany przez rząd (szansa na niższe ceny/dotacje), czy ograniczany regulacjami (ryzyko).',
        'Mapa Graczy: Identyfikacja kluczowych producentów i technologii w danym regionie.',
        'Analiza Ryzyka: Sprawdzenie opinii o podmiotach w chińskim internecie przemysłowym.',
      ],
      excludes: [
        'Fizycznych wizyt w fabrykach i audytów technicznych na miejscu.',
        'Bezpośrednich negocjacji handlowych i zakupów.',
        'Doradztwa prawnego i podatkowego.',
      ],
    },
    deliverables: [
      'Raport Zarządczy (Executive Memo): Dokument PDF (3-5 stron kluczowych wniosków + załączniki analityczne). Skupiony na faktach, liczbach i rekomendacjach, bez zbędnej teorii.',
      'Omówienie Wniosków (Debriefing Call): 45-minutowa konsultacja online. Możliwość zadania pytań i omówienia dalszych kroków "na żywo".',
    ],
    workModel: {
      type: 'Projekt jednorazowy (usługa otwierająca)',
      duration: 'do 10 dni roboczych',
      communication: 'Mail (przesłanie materiałów) + Finalne spotkanie wideo (Debriefing)',
    },
    caseStudy: {
      client: 'Średnia fabryka mebli (Polska)',
      situation: 'Plan zakupu robotów lakierniczych z Chin. Obawy o awaryjność, brak części zamiennych i rzetelność dostawcy znalezionego w internecie.',
      actions: 'Przeprowadzono analizę rynku. Zidentyfikowano 3 producentów w klastrze robotyki (Foshan) posiadających stabilną pozycję rynkową. Odrzucono 2 firmy oparte wyłącznie na marketingu (negatywne opinie na chińskich forach inżynierskich). Rekomendowano dostawcę wykorzystującego podzespoły Siemens (łatwy serwis w Polsce).',
      result: 'Klient zrezygnował z ryzykownego zakupu od pośrednika i rozpoczął rozmowy z rekomendowanym producentem. Uniknięcie straty szacowanej na ok. 200 tys. PLN.',
    },
  },
};

// Default data for services not yet defined
const defaultServiceData = {
  title: 'Usługa',
  subtitle: 'Wsparcie biznesowe',
  image: serviceAnalysis,
  description: 'Kompleksowe wsparcie w relacjach biznesowych na linii Polska-Chiny.',
  whenItMakesSense: [
    'Planowanie wejścia na rynek chiński',
    'Weryfikacja potencjalnych partnerów',
    'Optymalizacja istniejącej współpracy',
  ],
  problemsSolved: [
    'Minimalizacja ryzyka biznesowego',
    'Weryfikacja wiarygodności partnerów',
  ],
  scope: {
    includes: [
      'Analiza rynku i konkurencji',
      'Weryfikacja partnerów',
      'Raport z rekomendacjami',
    ],
    excludes: [
      'Doradztwo prawne i podatkowe',
      'Bezpośrednie negocjacje',
    ],
  },
  deliverables: [
    'Raport analityczny',
    'Konsultacja online',
  ],
  workModel: {
    type: 'Projekt jednorazowy',
    duration: 'do 14 dni roboczych',
    communication: 'Mail + spotkanie wideo',
  },
  caseStudy: {
    client: 'Firma produkcyjna (Polska)',
    situation: 'Poszukiwanie niezawodnego dostawcy komponentów z Chin.',
    actions: 'Przeprowadzono weryfikację potencjalnych dostawców i analizę rynku.',
    result: 'Wybrano optymalnego partnera, unikając potencjalnych problemów jakościowych.',
  },
};

const ServiceDetail = () => {
  const { serviceSlug, subServiceSlug } = useParams();
  
  // Try to find the service by main slug first, then check sub-service slug
  const mainSlug = serviceSlug || '';
  const service = servicesData[mainSlug] || defaultServiceData;
  
  // Override title if subServiceSlug exists
  const displayTitle = subServiceSlug 
    ? subServiceSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : service.title;

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Header with Background Image */}
      <section className="relative pt-28 pb-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={service.image} 
            alt="" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-lime/10 blur-[150px] rounded-full" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <Link 
            to="/uslugi"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-lime transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Wróć do usług
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
              {service.subtitle}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <GradientText>{displayTitle}</GradientText>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Description with Image */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        {/* Chinese character */}
        <ChineseCharacters characters="信" position="right" className="top-10" opacity={0.04} />
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-lime flex items-center justify-center">
                  <FileText className="w-6 h-6 text-gray-900" />
                </div>
                Opis usługi
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When it makes sense + Problems Solved - with parallax background */}
      <ParallaxSection imageUrl={statsBg} overlayOpacity={0.85} className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* When it makes sense */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                Kiedy ta usługa ma <GradientText>sens</GradientText>
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Sytuacje krytyczne, w których brak wiedzy generuje koszty
              </p>
              <div className="space-y-4">
                {service.whenItMakesSense.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative p-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-lime/30 transition-all duration-300"
                  >
                    <span className="absolute -top-3 left-6 font-display text-4xl font-bold text-lime/30">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-gray-300 text-sm pt-2">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Problems Solved */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-8">
                Problem klienta, który <GradientText>rozwiązuje</GradientText>
              </h2>
              <div className="space-y-6">
                {service.problemsSolved.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-lime/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-lime/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-lime" />
                      </div>
                      <p className="text-gray-300">{problem}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Scope */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 255, 0, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-2xl font-bold text-white">
                Zakres <GradientText>usługi</GradientText>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Includes */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50"
              >
                <h3 className="font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-lime flex items-center justify-center">
                    <Check className="w-5 h-5 text-gray-900" />
                  </div>
                  Obejmuje
                </h3>
                <ul className="space-y-4">
                  {service.scope.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                      <div className="w-2 h-2 rounded-full bg-lime flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Excludes */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50"
              >
                <h3 className="font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  Nie obejmuje
                </h3>
                <ul className="space-y-4">
                  {service.scope.excludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-400 text-sm">
                      <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables with engaging background */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 blur-[150px] rounded-full" />
        </div>
        
        {/* Chinese character */}
        <ChineseCharacters characters="任" position="left" className="top-10" opacity={0.04} />
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                Output / <GradientText>Deliverables</GradientText>
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Konkretne efekty pracy - to, co klient realnie otrzymuje
              </p>
              <div className="space-y-4">
                {service.deliverables.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-5 p-6 bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 text-left"
                  >
                    <div className="w-12 h-12 rounded-xl bg-lime flex items-center justify-center flex-shrink-0">
                      {index === 0 ? <FileText className="w-6 h-6 text-gray-900" /> : <Video className="w-6 h-6 text-gray-900" />}
                    </div>
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Model */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-10">
                Model <GradientText>współpracy</GradientText>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-lime/30 transition-all"
                >
                  <Users className="w-10 h-10 text-lime mx-auto mb-4" />
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Typ</p>
                  <p className="text-white font-semibold">{service.workModel.type}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-lime/30 transition-all"
                >
                  <Clock className="w-10 h-10 text-lime mx-auto mb-4" />
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Czas realizacji</p>
                  <p className="text-white font-semibold">{service.workModel.duration}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-lime/30 transition-all"
                >
                  <FileText className="w-10 h-10 text-lime mx-auto mb-4" />
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Komunikacja</p>
                  <p className="text-white font-semibold text-sm">{service.workModel.communication}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-gray-950 py-24 relative overflow-hidden">
        {/* Chinese character */}
        <ChineseCharacters characters="橋" position="right" className="top-20" opacity={0.05} />
        
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
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">
              Przykładowa <GradientText>realizacja</GradientText>
            </h2>
          </motion.div>

          <InteractiveCaseStudy data={service.caseStudy} />
        </div>
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
              Zainteresowany? <GradientText>Porozmawiajmy</GradientText>
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Bezpłatna konsultacja pomoże określić, czy ta usługa odpowiada Twoim potrzebom.
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

export default ServiceDetail;