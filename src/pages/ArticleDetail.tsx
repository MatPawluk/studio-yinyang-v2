import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from 'lucide-react';
import articleCompetition from '@/assets/article-competition.jpg';

const ArticleDetail = () => {
  const { articleSlug } = useParams();

  // Sample article data - in a real app this would come from a database
  const article = {
    title: 'Przewagi konkurencyjne chińskich firm w wybranych sektorach',
    category: 'Analiza',
    date: '10.01.2025',
    readTime: '12 min',
    author: 'Jan Kowalski',
    image: articleCompetition,
    content: `
      <h2>Wprowadzenie</h2>
      <p>Chińskie firmy w ostatniej dekadzie znacząco zwiększyły swoją obecność na globalnych rynkach, w wielu sektorach stając się liderami pod względem skali produkcji, innowacyjności oraz konkurencyjności cenowej. Niniejsza analiza przedstawia kluczowe przewagi konkurencyjne, które umożliwiły ten dynamiczny rozwój.</p>

      <h2>Sektor technologiczny</h2>
      <p>W sektorze technologicznym chińskie firmy wyróżniają się przede wszystkim:</p>
      <ul>
        <li>Skalą inwestycji w R&D, która w przypadku liderów przekracza 15% rocznych przychodów</li>
        <li>Dostępem do ogromnego rynku wewnętrznego, umożliwiającego szybkie skalowanie</li>
        <li>Wsparciem państwowym w ramach strategicznych programów rozwojowych</li>
        <li>Zintegrowanymi łańcuchami dostaw, minimalizującymi koszty produkcji</li>
      </ul>

      <h2>Sektor produkcyjny</h2>
      <p>W sektorze produkcyjnym kluczowe przewagi obejmują:</p>
      <ul>
        <li>Niższe koszty pracy przy jednoczesnym wzroście automatyzacji</li>
        <li>Koncentrację specjalistycznych klastrów przemysłowych</li>
        <li>Elastyczność i szybkość adaptacji do zmieniających się wymagań rynku</li>
        <li>Rozbudowaną infrastrukturę logistyczną i transportową</li>
      </ul>

      <h2>Implikacje dla europejskich firm</h2>
      <p>Rosnąca konkurencyjność chińskich przedsiębiorstw wymaga od firm europejskich strategicznego przemyślenia pozycjonowania rynkowego. Kluczowe rekomendacje obejmują:</p>
      <ol>
        <li>Koncentrację na segmentach premium i niszowych, gdzie chińska konkurencja jest mniej intensywna</li>
        <li>Inwestycje w automatyzację i cyfryzację procesów</li>
        <li>Budowanie partnerstw strategicznych z wiarygodnymi partnerami w Chinach</li>
        <li>Rozwój kompetencji w zakresie zarządzania międzykulturowego</li>
      </ol>

      <h2>Podsumowanie</h2>
      <p>Zrozumienie przewag konkurencyjnych chińskich firm jest niezbędne dla każdej europejskiej organizacji planującej działalność na rynku azjatyckim lub konkurującej z podmiotami z tego regionu. Yin Yang oferuje kompleksowe analizy sektorowe, pomagające firmom w podejmowaniu świadomych decyzji strategicznych.</p>
    `,
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-28 pb-12 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <Link 
            to="/baza-wiedzy"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-lime transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Wróć do bazy wiedzy
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime text-gray-900 text-sm font-semibold mb-4">
              {article.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <span>Autor: {article.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-28 space-y-6">
                <div className="p-6 bg-gray-50 rounded-2xl">
                  <h3 className="font-semibold text-gray-900 mb-4">Udostępnij</h3>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-xl bg-gray-200 hover:bg-lime hover:text-gray-900 flex items-center justify-center transition-colors duration-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-gray-200 hover:bg-lime hover:text-gray-900 flex items-center justify-center transition-colors duration-300">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-gray-900 rounded-2xl">
                  <h3 className="font-semibold text-white mb-3">Potrzebujesz analizy?</h3>
                  <p className="text-gray-400 text-sm mb-4">Przygotujemy dedykowany raport dla Twojej firmy.</p>
                  <Link 
                    to="/kontakt"
                    className="block w-full text-center px-4 py-3 bg-lime text-gray-900 rounded-xl font-semibold text-sm hover:scale-105 transition-transform duration-300"
                  >
                    Skontaktuj się
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg prose-gray max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
