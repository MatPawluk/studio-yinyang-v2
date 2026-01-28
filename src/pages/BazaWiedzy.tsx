import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientText } from '@/components/GradientText';
import { ChineseCharacters } from '@/components/ChineseCharacters';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import articleCompetition from '@/assets/article-competition.jpg';
import articleInnovation from '@/assets/article-china-innovation.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';
import worldMap from '@/assets/world-map.jpg';

const categories = ['Wszystkie', 'Analizy', 'Poradniki', 'Blog'];

const articles = [
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
  
  const filteredArticles = activeCategory === 'Wszystkie' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section - Dark themed with world map */}
      <section className="relative pt-28 pb-12 bg-gray-900 overflow-hidden">
        {/* Background with world map */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={worldMap} 
            alt="" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-lime/5 blur-[150px] rounded-full" />
        </div>
        
        {/* Chinese character */}
        <ChineseCharacters characters="知" position="right" className="top-20" opacity={0.06} />

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
              Baza wiedzy
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Analizy, <GradientText>poradniki</GradientText>
              <br />
              i komentarze
            </h1>
            <p className="text-lg text-gray-400">
              Materiały dotyczące Chin, technologii oraz współpracy międzynarodowej – przygotowane z perspektywy decyzyjnej.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-gray-950 py-12 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 255, 0, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Categories - Working filters */}
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
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-700/50'
                }`}
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
                className="group relative bg-gray-800/30 rounded-3xl overflow-hidden border border-gray-700/50 hover:border-lime/30 hover:shadow-xl hover:shadow-lime/5 transition-all duration-500"
              >
                <Link to={`/baza-wiedzy/${article.slug}`}>
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                    {/* Category badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold ${
                        article.category === 'Analizy' 
                          ? 'bg-lime text-gray-900'
                          : article.category === 'Poradniki'
                          ? 'bg-white/90 text-gray-900'
                          : 'bg-gray-800 text-white'
                      }`}>
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-xl mb-3 text-white group-hover:text-lime transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                      {article.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
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

      {/* CTA Section with smooth transition */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient transition from articles section */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900" />
          {/* Radial glow effect like "Let's get to work" inspiration */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64">
            <div className="absolute inset-0 bg-gradient-radial from-lime/10 via-lime/5 to-transparent rounded-t-full" />
          </div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime/10 blur-[120px] rounded-full"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
              Potrzebujesz dedykowanej <GradientText>analizy</GradientText>?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Przygotowujemy materiały na zamówienie, dopasowane do Twojej branży i potrzeb.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 px-10 py-5 bg-lime text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lime-lg"
            >
              Skontaktuj się z nami
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BazaWiedzy;