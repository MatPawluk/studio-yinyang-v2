import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientText } from '@/components/GradientText';
import { ChineseCharacters } from '@/components/ChineseCharacters';
import { useLanguage } from '@/contexts/LanguageContext';
import { bazaWiedzyTranslations } from '@/i18n/pageTranslations';
import { articlesTranslations } from '@/i18n/contentTranslations';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import articleCompetition from '@/assets/article-competition.jpg';
import articleInnovation from '@/assets/article-china-innovation.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';
import worldMap from '@/assets/world-map.jpg';

const categories = ['Wszystkie', 'Analizy', 'Poradniki', 'Blog'];

const articles = [
  {
    category: 'Analizy',
    title: 'Gdzie znika Twoja marża? 5 sygnałów, że Twój chiński „producent" to tylko pośrednik',
    description: 'W chińskim systemie handlowym ustalenie, kto rzeczywiście stoi za produkcją, przypomina pracę analityka. Wyjaśniamy, jak za pomocą twardych danych z rejestrów państwowych ChRL zdemaskować pośrednika w mniej niż 15 minut.',
    date: '7.02.2026',
    readTime: '14 min',
    image: articleCompetition,
    slug: 'gdzie-znika-twoja-marza',
    featured: true,
  },
  {
    category: 'Analizy',
    title: 'Chiński Nowy Rok 2026: Jak uniknąć paraliżu łańcucha dostaw w Roku Konia?',
    description: 'Dla chińskiego sektora produkcyjnego Święto Wiosny to całkowite wygaszenie reaktora gospodarczego. Polskie firmy, które nie zaplanują dostaw z 4-miesięcznym wyprzedzeniem, ryzykują puste magazyny.',
    date: '5.02.2026',
    readTime: '12 min',
    image: articleInnovation,
    slug: 'chinski-nowy-rok-2026',
    featured: true,
  },
  {
    category: 'Analizy',
    title: 'Przewagi konkurencyjne chińskich firm w wybranych sektorach',
    description: 'Analiza kluczowych przewag, które pozwalają chińskim firmom dominować w wybranych branżach globalnie.',
    date: '10.01.2025',
    readTime: '12 min',
    image: articleCompetition,
    slug: 'przewagi-konkurencyjne-chinskich-firm',
    featured: true,
  },
  {
    category: 'Analizy',
    title: 'Chiński system innowacji i jego implikacje dla Europy',
    description: 'Jak chiński ekosystem innowacji wpływa na konkurencyjność europejskich firm i instytucji.',
    date: '5.01.2025',
    readTime: '15 min',
    image: articleInnovation,
    slug: 'chinski-system-innowacji',
    featured: true,
  },
  {
    category: 'Poradniki',
    title: 'Jak przygotować firmę do współpracy z chińskim partnerem',
    description: 'Praktyczny przewodnik dla firm planujących nawiązanie współpracy z partnerami z Chin.',
    date: '20.12.2024',
    readTime: '8 min',
    image: serviceStrategy,
    slug: 'przygotowanie-do-wspolpracy',
  },
  {
    category: 'Poradniki',
    title: 'Na co zwrócić uwagę przed podpisaniem umowy z firmą z Chin',
    description: 'Kluczowe aspekty prawne, kulturowe i operacyjne, które należy rozważyć przed finalizacją umowy.',
    date: '15.12.2024',
    readTime: '10 min',
    image: articleCompetition,
    slug: 'przed-podpisaniem-umowy',
  },
  {
    category: 'Blog',
    title: 'Chiny jako konkurent technologiczny Europy - aktualne trendy',
    description: 'Komentarz do najnowszych wydarzeń w sektorze technologicznym i ich wpływu na rynek europejski.',
    date: '10.12.2024',
    readTime: '5 min',
    image: articleInnovation,
    slug: 'chiny-konkurent-technologiczny',
  },
  {
    category: 'Analizy',
    title: 'Automatyzacja i robotyzacja w Chinach a przyszłość produkcji w Polsce',
    description: 'Jak rozwój automatyzacji w Chinach może wpłynąć na polski sektor produkcyjny.',
    date: '1.12.2024',
    readTime: '14 min',
    image: serviceStrategy,
    slug: 'automatyzacja-robotyzacja-chiny',
  },
];

const BazaWiedzy = () => {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const { language } = useLanguage();
  const pt = bazaWiedzyTranslations[language];
  
  const filteredArticles = activeCategory === 'Wszystkie' || activeCategory === pt.categories[0]
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050608' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 overflow-hidden" style={{ backgroundColor: '#050608' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img src={worldMap} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,6,8,0.8), rgba(5,6,8,0.9), #050608)' }} />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-lime/5 blur-[150px] rounded-full" />
        </div>
        
        <ChineseCharacters characters="知" position="right" className="top-20" opacity={0.06} />

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
              {pt.badge}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {pt.title} <GradientText>{pt.titleHighlight}</GradientText>
              <br />
              {pt.titleEnd}
            </h1>
            <p className="text-lg text-gray-500">
              {pt.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-12 relative overflow-hidden" style={{ backgroundColor: '#050608' }}>
        <ChineseCharacters characters="桥梁" position="left" className="top-40" opacity={0.04} />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-lime text-gray-900'
                    : 'text-gray-500 hover:text-white border border-gray-800/50'
                }`}
                style={activeCategory !== category ? { backgroundColor: '#0B0B0B' } : {}}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden border border-gray-800/50 hover:border-lime/30 hover:shadow-xl hover:shadow-lime/5 transition-all duration-500"
                style={{ backgroundColor: '#0B0B0B' }}
              >
                <Link to={`/baza-wiedzy/${article.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0B0B0B, rgba(11,11,11,0.3), transparent)' }} />
                    <div className="absolute bottom-4 left-4">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold ${
                        article.category === 'Analizy' 
                          ? 'bg-lime text-gray-900'
                          : article.category === 'Poradniki'
                          ? 'bg-white/90 text-gray-900'
                          : 'text-white border border-gray-700'
                      }`}
                      style={article.category === 'Blog' ? { backgroundColor: '#111214' } : {}}
                      >
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display font-semibold text-xl mb-3 text-white group-hover:text-lime transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - consistent with homepage style */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#050608' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lime/8 blur-[150px] rounded-full" />
        </div>
        
        <div className="absolute bottom-10 right-10 opacity-[0.06] pointer-events-none">
          <span className="font-display text-[10rem] font-bold text-[#c4ff00] leading-none">知識</span>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
              {pt.ctaTitle} <GradientText>{pt.ctaTitleHighlight}</GradientText>?
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">
              {pt.ctaSubtitle}
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#c4ff00] text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(196,255,0,0.5)]"
            >
              {pt.ctaButton}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BazaWiedzy;
