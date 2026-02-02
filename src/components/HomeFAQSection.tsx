import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { GradientText } from '@/components/GradientText';
import { ChineseCharacters } from '@/components/ChineseCharacters';

const faqs = [
  {
    question: 'Czy gwarantujecie rezultaty?',
    answer: 'Gwarantujemy rzetelność analiz i jakość materiałów. Nasze rekomendacje bazują na weryfikowalnych źródłach i wieloletnim doświadczeniu.',
  },
  {
    question: 'Jak wygląda raportowanie w trakcie współpracy?',
    answer: 'W zależności od modelu współpracy raporty przekazujemy jednorazowo po zakończeniu projektu lub cyklicznie, w modelu miesięcznym lub kwartalnym, przy wsparciu długoterminowym.',
  },
  {
    question: 'Czy działacie w mojej branży?',
    answer: 'Specjalizujemy się w sektorach: technologia, produkcja, automotive, energia odnawialna, e-commerce. Dla innych branż oferujemy konsultacje indywidualne.',
  },
  {
    question: 'Czy reprezentujecie interesy drugiej strony transakcji?',
    answer: 'Działamy wyłącznie po stronie klienta zlecającego projekt. Nie pobieramy prowizji handlowych ani nie reprezentujemy interesów dostawców, inwestorów czy partnerów biznesowych. Zapewnia to pełną niezależność naszych rekomendacji.',
  },
  {
    question: 'Czy wspieracie również na etapie wdrożenia?',
    answer: 'Tak. W zależności od zakresu projektu możemy wesprzeć klienta na etapie rozmów z partnerami, weryfikacji podmiotów, organizacji spotkań biznesowych oraz nadzoru operacyjnego po wejściu na rynek.',
  },
  {
    question: 'Czy wspieracie w organizacji transportu i łańcucha dostaw?',
    answer: 'Tak. W zależności od projektu możemy przejąć koordynację całego procesu logistycznego, od weryfikacji dostawcy i negocjacji warunków, przez organizację produkcji i kontroli jakości, po transport międzynarodowy oraz nadzór nad dostawą do miejsca docelowego.',
  },
];

export const HomeFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-950 py-24 relative overflow-hidden">
      {/* Chinese characters decoration */}
      <ChineseCharacters characters="信任" position="right" className="top-20" opacity={0.08} />
      
      {/* Background */}
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
  );
};
