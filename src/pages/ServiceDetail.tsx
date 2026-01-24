import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, ArrowRight, Check, X, FileText, Video, Clock, Users } from 'lucide-react';
import clientPortrait from '@/assets/client-portrait.jpg';

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
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
  const { serviceSlug } = useParams();
  const service = serviceSlug && servicesData[serviceSlug] ? servicesData[serviceSlug] : defaultServiceData;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-28 pb-12 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
              {service.subtitle}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-lime flex items-center justify-center">
                  <FileText className="w-5 h-5 text-gray-900" />
                </div>
                Opis usługi
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When it makes sense */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Kiedy ta usługa ma sens
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Sytuacje krytyczne, w których brak wiedzy generuje koszty
              </p>
              <div className="space-y-4">
                {service.whenItMakesSense.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-gray-900 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Problem klienta, który rozwiązuje
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.problemsSolved.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gray-900 rounded-2xl"
                  >
                    <p className="text-white">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">
                Zakres usługi
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Includes */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-lime" />
                    Obejmuje
                  </h3>
                  <ul className="space-y-3">
                    {service.scope.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excludes */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    Nie obejmuje
                  </h3>
                  <ul className="space-y-3">
                    {service.scope.excludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-500 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Output / Deliverables
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Konkretne efekty pracy - to, co klient realnie otrzymuje
              </p>
              <div className="space-y-4">
                {service.deliverables.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 bg-lime/10 rounded-2xl border border-lime/20"
                  >
                    <div className="w-10 h-10 rounded-xl bg-lime flex items-center justify-center flex-shrink-0">
                      {index === 0 ? <FileText className="w-5 h-5 text-gray-900" /> : <Video className="w-5 h-5 text-gray-900" />}
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Model */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">
                Model współpracy
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                  <Users className="w-8 h-8 text-lime mx-auto mb-3" />
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Typ</p>
                  <p className="text-gray-900 font-semibold">{service.workModel.type}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                  <Clock className="w-8 h-8 text-lime mx-auto mb-3" />
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Czas trwania</p>
                  <p className="text-gray-900 font-semibold">{service.workModel.duration}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                  <Video className="w-8 h-8 text-lime mx-auto mb-3" />
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Komunikacja</p>
                  <p className="text-gray-900 font-semibold text-sm">{service.workModel.communication}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
              Case Study
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">
              Przykładowa realizacja
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Client Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-lime/20 rounded-3xl blur-2xl" />
              <img
                src={clientPortrait}
                alt="Client"
                className="relative rounded-3xl object-cover w-full aspect-[3/4] border-4 border-lime/30"
              />
              <div className="absolute -bottom-4 -right-4 bg-lime text-gray-900 px-6 py-3 rounded-2xl font-display font-semibold text-sm">
                {service.caseStudy.client}
              </div>
            </motion.div>

            {/* Case Study Content */}
            <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-gray-700/50">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lime font-medium mb-2">Sytuacja</h4>
                  <p className="text-gray-300">{service.caseStudy.situation}</p>
                </div>

                <div>
                  <h4 className="text-lime font-medium mb-2">Działania Yin Yang</h4>
                  <p className="text-gray-300">{service.caseStudy.actions}</p>
                </div>

                <div className="bg-lime/10 rounded-2xl p-6 border border-lime/20">
                  <h4 className="text-lime font-medium mb-2">Efekt decyzyjny</h4>
                  <p className="text-white font-medium">{service.caseStudy.result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Zainteresowany tą usługą?
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">
              Umów bezpłatną konsultację i sprawdź, jak możemy pomóc Twojej firmie.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-lime hover:text-gray-900 hover:scale-105"
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
