import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Clock, ArrowRight } from 'lucide-react';

const categories = ['Wszystkie', 'Analizy', 'Poradniki', 'Blog / komentarze'];

const articles = [
  {
    category: 'Analiza',
    title: 'Przewagi konkurencyjne chińskich firm w wybranych sektorach',
    description: 'Analiza kluczowych przewag, które pozwalają chińskim firmom dominować w wybranych branżach globalnie.',
    date: '10.01.2025',
    readTime: '12 min',
    featured: true,
  },
  {
    category: 'Analiza',
    title: 'Chiński system innowacji i jego implikacje dla Europy',
    description: 'Jak chiński ekosystem innowacji wpływa na konkurencyjność europejskich firm i instytucji.',
    date: '5.01.2025',
    readTime: '15 min',
    featured: true,
  },
  {
    category: 'Poradnik',
    title: 'Jak przygotować firmę do współpracy z chińskim partnerem',
    description: 'Praktyczny przewodnik dla firm planujących nawiązanie współpracy z partnerami z Chin.',
    date: '20.12.2024',
    readTime: '8 min',
  },
  {
    category: 'Poradnik',
    title: 'Na co zwrócić uwagę przed podpisaniem umowy z firmą z Chin',
    description: 'Kluczowe aspekty prawne, kulturowe i operacyjne, które należy rozważyć przed finalizacją umowy.',
    date: '15.12.2024',
    readTime: '10 min',
  },
  {
    category: 'Blog',
    title: 'Chiny jako konkurent technologiczny Europy - aktualne trendy',
    description: 'Komentarz do najnowszych wydarzeń w sektorze technologicznym i ich wpływu na rynek europejski.',
    date: '10.12.2024',
    readTime: '5 min',
  },
  {
    category: 'Analiza',
    title: 'Automatyzacja i robotyzacja w Chinach a przyszłość produkcji w Polsce',
    description: 'Jak rozwój automatyzacji w Chinach może wpłynąć na polski sektor produkcyjny.',
    date: '1.12.2024',
    readTime: '14 min',
  },
];

const BazaWiedzy = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section - Shorter */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-lime/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-6">
              Baza wiedzy
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Analizy, poradniki
              <br />
              <span className="text-lime">i komentarze</span>
            </h1>
            <p className="text-lg text-gray-400">
              Materiały dotyczące Chin, technologii oraz współpracy międzynarodowej – przygotowane z perspektywy decyzyjnej.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="bg-white py-20">
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

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 ${
                  article.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime/0 to-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative p-8">
                  {/* Category badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-lime/10 text-lime text-xs font-medium mb-4">
                    {article.category}
                  </span>

                  <h3 className="font-display font-semibold text-xl text-gray-900 mb-3 group-hover:text-gray-900 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>

                    <button className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-lime flex items-center justify-center transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
                    </button>
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
