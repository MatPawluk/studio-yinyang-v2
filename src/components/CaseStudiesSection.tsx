import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientText } from './GradientText';

const caseStudies = [
  {
    name: 'Vektor Automation',
    category: 'Weryfikacja dostawcy',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    client: 'Producent systemów automatyki przemysłowej',
    goal: 'Weryfikacja chińskiego dostawcy podzespołów do linii produkcyjnych',
    duration: '3 tygodnie',
    result: 'Wykrycie rozbieżności w zakresie certyfikacji i struktury właścicielskiej. Zabezpieczenie klienta przed podpisaniem kontraktu o podwyższonym ryzyku operacyjnym.',
  },
  {
    name: 'Arcom Electronics',
    category: 'Wejście na rynek',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80',
    client: 'Dystrybutor urządzeń elektronicznych klasy premium',
    goal: 'Opracowanie strategii wejścia na rynek chiński (model B2B)',
    duration: '3 miesiące',
    result: 'Uruchomienie pilotażowej sprzedaży w modelu cross-border. Podpisanie pierwszych umów z lokalnymi partnerami dystrybucyjnymi.',
  },
  {
    name: 'Aktir',
    category: 'Due Diligence',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&q=80',
    client: 'Operator transportu międzynarodowego',
    goal: 'Due diligence chińskiego partnera logistycznego',
    duration: '4 tygodnie',
    result: 'Kompleksowa analiza struktury finansowej i operacyjnej partnera. Podjęcie świadomej decyzji strategicznej oraz wzmocnienie pozycji negocjacyjnej klienta.',
  },
  {
    name: 'Orvanta',
    category: 'Optymalizacja łańcucha',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
    client: 'Platforma e-commerce z sektora elektroniki użytkowej',
    goal: 'Optymalizacja struktury importu i modelu sourcingowego',
    duration: '6 tygodni',
    result: 'Redukcja kosztów logistycznych o 28%. Wdrożenie stabilnego modelu bezpośredniej współpracy z producentami.',
  },
];

export const CaseStudiesSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section className="bg-gray-950 py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium uppercase tracking-wider mb-4">
            Case Studies
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
            Projekty, które <GradientText>mówią za nas</GradientText>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[480px] cursor-pointer perspective-1000"
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              <motion.div
                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div 
                  className="absolute inset-0 rounded-3xl overflow-hidden backface-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src={study.image}
                    alt={study.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-lime text-sm font-medium uppercase tracking-wider">
                      {study.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mt-2">
                      {study.name}
                    </h3>
                  </div>
                </div>

                {/* Back of card */}
                <div 
                  className="absolute inset-0 rounded-3xl bg-gray-900 border border-gray-800 p-5 backface-hidden overflow-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-lg font-bold text-white">{study.name}</h3>
                      <span className="px-2 py-1 rounded-full bg-lime/20 text-lime text-xs">
                        {study.category}
                      </span>
                    </div>

                    <div className="space-y-2 flex-1 overflow-y-auto">
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                        <span className="text-gray-500 text-xs uppercase tracking-wider">Klient</span>
                        <span className="text-white text-xs text-right max-w-[60%]">{study.client}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                        <span className="text-gray-500 text-xs uppercase tracking-wider">Cel klienta</span>
                        <span className="text-white text-xs text-right max-w-[60%]">{study.goal}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-800 pb-2">
                        <span className="text-gray-500 text-xs uppercase tracking-wider">Czas współpracy</span>
                        <span className="text-white text-xs">{study.duration}</span>
                      </div>
                      <div className="pb-2">
                        <span className="text-gray-500 text-xs uppercase tracking-wider block mb-1">Rezultat</span>
                        <span className="text-lime text-xs font-medium leading-relaxed block">{study.result}</span>
                      </div>
                    </div>

                    <Link
                      to="/kontakt"
                      className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-lime hover:text-gray-900 text-white rounded-full text-sm font-medium transition-all duration-300 group flex-shrink-0"
                    >
                      Porozmawiajmy o Twoim projekcie
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
