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
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#050608' }}>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/50 to-transparent" />
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
                  className="absolute inset-0 rounded-3xl bg-[#0B0B0B] border border-gray-800 p-6 backface-hidden overflow-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <h3 className="font-display text-xl font-bold text-white">{study.name}</h3>
                        <span className="px-3 py-1 rounded-full bg-lime/20 text-lime text-xs font-medium">
                          {study.category}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between border-b border-gray-800 pb-3">
                          <span className="text-gray-500 text-xs uppercase tracking-wider">Klient</span>
                          <span className="text-white text-sm text-right max-w-[65%]">{study.client}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-800 pb-3">
                          <span className="text-gray-500 text-xs uppercase tracking-wider">Cel klienta</span>
                          <span className="text-white text-sm text-right max-w-[65%]">{study.goal}</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-800 pb-3">
                          <span className="text-gray-500 text-xs uppercase tracking-wider">Czas współpracy</span>
                          <span className="text-white text-sm">{study.duration}</span>
                        </div>
                        <div className="pt-1">
                          <span className="text-gray-500 text-xs uppercase tracking-wider block mb-2">Rezultat</span>
                          <span className="text-lime text-sm font-medium leading-relaxed block">{study.result}</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/kontakt"
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#111214] hover:bg-lime hover:text-[#050608] text-white rounded-full text-sm font-medium transition-all duration-300 group"
                    >
                      Porozmawiajmy o Twoim projekcie
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
