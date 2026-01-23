import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import articleCompetition from '@/assets/article-competition.jpg';
import articleInnovation from '@/assets/article-china-innovation.jpg';
import serviceStrategy from '@/assets/service-strategy.jpg';

const categories = ['Wszystkie', 'Analizy', 'Poradniki', 'Blog / komentarze'];

const articles = [
  {
    category: 'Analiza',
    title: 'Przewagi konkurencyjne chińskich firm w wybranych sektorach',
    description: 'Analiza kluczowych przewag, które pozwalają chińskim firmom dominować w wybranych branżach globalnie.',
    date: '10.01.2025',
    readTime: '12 min',
    image: articleCompetition,
    featured: true,
  },
  {
    category: 'Analiza',
    title: 'Chiński system innowacji i jego implikacje dla Europy',
    description: 'Jak chiński ekosystem innowacji wpływa na konkurencyjność europejskich firm i instytucji.',
    date: '5.01.2025',
    readTime: '15 min',
    image: articleInnovation,
    featured: true,
  },
  {
    category: 'Poradnik',
    title: 'Jak przygotować firmę do współpracy z chińskim partnerem',
    description: 'Praktyczny przewodnik dla firm planujących nawiązanie współpracy z partnerami z Chin.',
    date: '20.12.2024',
    readTime: '8 min',
    image: serviceStrategy,
  },
  {
    category: 'Poradnik',
    title: 'Na co zwrócić uwagę przed podpisaniem umowy z firmą z Chin',
    description: 'Kluczowe aspekty prawne, kulturowe i operacyjne, które należy rozważyć przed finalizacją umowy.',
    date: '15.12.2024',
    readTime: '10 min',
    image: articleCompetition,
  },
  {
    category: 'Blog',
    title: 'Chiny jako konkurent technologiczny Europy - aktualne trendy',
    description: 'Komentarz do najnowszych wydarzeń w sektorze technologicznym i ich wpływu na rynek europejski.',
    date: '10.12.2024',
    readTime: '5 min',
    image: articleInnovation,
  },
  {
    category: 'Analiza',
    title: 'Automatyzacja i robotyzacja w Chinach a przyszłość produkcji w Polsce',
    description: 'Jak rozwój automatyzacji w Chinach może wpłynąć na polski sektor produkcyjny.',
    date: '1.12.2024',
    readTime: '14 min',
    image: serviceStrategy,
  },
];

const BazaWiedzy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Short */}
      <section className="relative pt-28 pb-8 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
              Baza wiedzy
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Analizy, poradniki
              <br />
              <span className="text-gray-900">i komentarze</span>
            </h1>
            <p className="text-lg text-gray-500">
              Materiały dotyczące Chin, technologii oraz współpracy międzynarodowej – przygotowane z perspektywy decyzyjnej.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Articles Grid - Card Style with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold ${
                      article.category === 'Analiza' 
                        ? 'bg-gray-900 text-white'
                        : article.category === 'Poradnik'
                        ? 'bg-lime text-gray-900'
                        : 'bg-white text-gray-900'
                    }`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`font-display font-semibold text-xl mb-3 group-hover:text-gray-700 transition-colors duration-300 line-clamp-2 ${
                    article.category === 'Analiza' ? 'text-lime' : 'text-gray-900'
                  }`}>
                    {article.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400">
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gray-900">
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
              Potrzebujesz dedykowanej analizy?
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
