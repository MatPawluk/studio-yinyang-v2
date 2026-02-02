import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientText } from './GradientText';

const caseStudies = [
  {
    name: 'TechPol Industries',
    category: 'Weryfikacja dostawcy',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    client: 'Firma produkcyjna (Polska)',
    goal: 'Weryfikacja chińskiego dostawcy robotów',
    budget: '15 000 PLN',
    duration: '2 tygodnie',
    result: 'Uniknięcie straty 200 000 PLN',
  },
  {
    name: 'EuroAsia Trade',
    category: 'Wejście na rynek',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80',
    client: 'Dystrybutor elektroniki (Polska)',
    goal: 'Ekspansja na rynek chiński',
    budget: '45 000 PLN',
    duration: '3 miesiące',
    result: '+35% przychodów w pierwszym roku',
  },
  {
    name: 'InnoVest Capital',
    category: 'Due Diligence',
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&q=80',
    client: 'Fundusz inwestycyjny',
    goal: 'Weryfikacja przed inwestycją JV',
    budget: '25 000 PLN',
    duration: '4 tygodnie',
    result: 'Uniknięcie inwestycji w zadłużony podmiot',
  },
  {
    name: 'GlobalLink Logistics',
    category: 'Optymalizacja łańcucha',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
    client: 'E-commerce (Polska)',
    goal: 'Redukcja kosztów logistycznych',
    budget: '18 000 PLN',
    duration: '6 tygodni',
    result: '-35% kosztów logistycznych rocznie',
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
              className="relative h-[400px] cursor-pointer perspective-1000"
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
                  className="absolute inset-0 rounded-3xl bg-gray-900 border border-gray-800 p-6 backface-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-xl font-bold text-white">{study.name}</h3>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-lime/20 text-lime text-xs">
                          {study.category}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 flex-1">
                      <div className="flex justify-between border-b border-gray-800 pb-3">
                        <span className="text-gray-500 text-sm uppercase tracking-wider">Klient</span>
                        <span className="text-white text-sm">{study.client}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-800 pb-3">
                        <span className="text-gray-500 text-sm uppercase tracking-wider">Cel klienta</span>
                        <span className="text-white text-sm text-right max-w-[60%]">{study.goal}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-800 pb-3">
                        <span className="text-gray-500 text-sm uppercase tracking-wider">Budżet</span>
                        <span className="text-white text-sm">{study.budget}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-800 pb-3">
                        <span className="text-gray-500 text-sm uppercase tracking-wider">Czas współpracy</span>
                        <span className="text-white text-sm">{study.duration}</span>
                      </div>
                      <div className="flex justify-between pb-3">
                        <span className="text-gray-500 text-sm uppercase tracking-wider">Rezultat</span>
                        <span className="text-lime text-sm font-semibold">{study.result}</span>
                      </div>
                    </div>

                    <Link
                      to="/kontakt"
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-lime hover:text-gray-900 text-white rounded-full font-medium transition-all duration-300 group"
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
