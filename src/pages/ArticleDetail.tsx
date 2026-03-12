import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientText } from '@/components/GradientText';
import { ChineseCharacters } from '@/components/ChineseCharacters';
import { sanityClient } from '@/lib/sanity';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ArrowRight, TrendingUp, Globe, Facebook, Linkedin, X } from 'lucide-react';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { translations } from '@/i18n/translations';
import { useLanguage } from '@/contexts/LanguageContext';
import { PortableText } from '@portabletext/react';
import { SEO } from '@/components/SEO';


const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="font-display text-3xl font-bold text-white mt-12 mb-6 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-display text-2xl font-bold text-white mt-8 mb-4 tracking-tight">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-300 leading-relaxed mb-6">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="space-y-3 mb-8 list-none">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-3 text-gray-300">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
  },
  types: {
    image: ({ value }: any) => {
      const assetRef = value?.asset?._ref;
      if (!assetRef) return null;
      
      // Standard Sanity CDN URL construction from asset reference
      const parts = assetRef.split('-');
      const id = parts[1];
      const dimensions = parts[2];
      const extension = parts[3];
      const url = `https://cdn.sanity.io/images/oyjkh63s/production/${id}-${dimensions}.${extension}`;
      
      return (
        <div className="my-12 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
          <img 
            src={url} 
            alt="Article content image"
            className="w-full h-auto"
          />
        </div>
      );
    },
  },
};

const ArticleDetail = () => {
  const { articleSlug } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  const [article, setArticle] = useState<any>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        setLoading(true);
        // Fetch current article
        const articleQuery = `*[_type == "article" && slug.current == $slug][0] {
          title,
          description,
          content,
          date,
          readTime,
          author,
          "imageUrl": image.asset->url,
          category->{
            _id,
            title,
            slug
          }
        }`;
        const data = await sanityClient.fetch(articleQuery, { slug: articleSlug });

        if (data) {
          const localizedArticle = {
            title: data?.title?.[language] || data?.title?.['pl'] || t.articleDetail.notFound,
            description: data?.description?.[language] || data?.description?.['pl'] || '',
            category: data?.category?.title?.[language] || data?.category?.title?.['pl'] || '',
            date: data?.date || '',
            readTime: data?.readTime?.[language] || data?.readTime?.['pl'] || '',
            author: data?.author || 'Yin Yang Team',
            image: data?.imageUrl || '',
            content: data?.content?.[language] || data?.content?.['pl'] || [],
          };
          setArticle(localizedArticle);

          // Fetch related articles (same category, different slug)
          const catId = data?.category?._id;
          if (catId) {
            const relatedQuery = `*[_type == "article" && category._ref == $catId && slug.current != $slug][0...2] {
              title,
              slug,
              "imageUrl": image.asset->url
            }`;
            const relatedData = await sanityClient.fetch(relatedQuery, { 
              catId, 
              slug: articleSlug 
            });
            
            setRelatedArticles((relatedData || []).map((r: any) => ({
              title: r?.title?.[language] || r?.title?.['pl'] || t.articleDetail.notFound,
              slug: r?.slug?.current || 'article',
              image: r?.imageUrl || ''
            })));
          } else {
            setRelatedArticles([]);
          }
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    if (articleSlug) {
      fetchArticleData();
      // Check if bookmarked
      const bookmarks = JSON.parse(localStorage.getItem('yy_bookmarks') || '[]');
      setIsBookmarked(bookmarks.includes(articleSlug));
    }
  }, [articleSlug, language]);

  const handleShare = (platform: 'facebook' | 'linkedin' | 'x') => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(article?.title || '');
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'x':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const toggleBookmark = () => {
    if (!articleSlug) return;
    const bookmarks = JSON.parse(localStorage.getItem('yy_bookmarks') || '[]');
    let newBookmarks;
    if (isBookmarked) {
      newBookmarks = bookmarks.filter((id: string) => id !== articleSlug);
    } else {
      newBookmarks = [...bookmarks, articleSlug];
    }
    localStorage.setItem('yy_bookmarks', JSON.stringify(newBookmarks));
    setIsBookmarked(!isBookmarked);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-400">
        <LoadingSpinner size={64} />
        <p className="mt-4">{t.articleDetail.loading}</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-400 px-6 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">{t.articleDetail.notFound}</h1>
        <Link to="/baza-wiedzy" className="text-lime hover:underline">{t.articleDetail.backToKnowledge}</Link>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-900">
      <SEO 
        title={article.title}
        description={article.description}
        ogType="article"
        ogImage={article.image}
        articleData={{
          publishedTime: article.date,
          author: article.author,
          tags: [article.category]
        }}
      />
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-28 pb-16 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <Link 
            to="/baza-wiedzy"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-lime transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.articleDetail.backToKnowledge}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime text-gray-900 text-sm font-semibold mb-6">
              {article.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              <GradientText>{article.title}</GradientText>
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
              <span>{t.articleDetail.author}: {article.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-gray-950 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-28 space-y-6">
                {/* Share buttons */}
                <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50">
                  <h3 className="font-semibold text-white mb-4">{t.articleDetail.share}</h3>
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={() => handleShare('facebook')}
                      className="w-10 h-10 rounded-xl bg-gray-700/50 hover:bg-[#1877F2] hover:text-white text-gray-400 flex items-center justify-center transition-all duration-300"
                      title={t.articleDetail.shareFB}
                    >
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleShare('linkedin')}
                      className="w-10 h-10 rounded-xl bg-gray-700/50 hover:bg-[#0A66C2] hover:text-white text-gray-400 flex items-center justify-center transition-all duration-300"
                      title={t.articleDetail.shareLI}
                    >
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleShare('x')}
                      className="w-10 h-10 rounded-xl bg-gray-700/50 hover:bg-white hover:text-black text-gray-400 flex items-center justify-center transition-all duration-300"
                      title={t.articleDetail.shareX}
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={toggleBookmark}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isBookmarked 
                          ? 'bg-lime text-gray-900' 
                          : 'bg-gray-700/50 hover:bg-lime/20 hover:text-lime text-gray-400'
                      }`}
                      title={isBookmarked ? t.articleDetail.removeBookmark : t.articleDetail.addBookmark}
                    >
                      <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Key Stats - Interactive element */}
                <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50">
                  <h3 className="font-semibold text-white mb-4">{t.articleDetail.keyStats}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-lime/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-lime" />
                      </div>
                      <div>
                        <p className="text-lime font-bold text-lg">15%+</p>
                        <p className="text-gray-500 text-xs">{t.articleDetail.statRD}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-lime/20 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-lime" />
                      </div>
                      <div>
                        <p className="text-lime font-bold text-lg">1.4 mld</p>
                        <p className="text-gray-500 text-xs">{t.articleDetail.statMarket}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 bg-lime/10 rounded-2xl border border-lime/20">
                  <h3 className="font-semibold text-white mb-3">{t.articleDetail.needAnalysis}</h3>
                  <p className="text-gray-400 text-sm mb-4">{t.articleDetail.dedicatedReport}</p>
                  <Link 
                    to="/kontakt"
                    className="block w-full text-center px-4 py-3 bg-lime text-gray-900 rounded-xl font-semibold text-sm hover:scale-105 transition-transform duration-300"
                  >
                    {t.articleDetail.contactUs}
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3 order-1 lg:order-2">
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 rounded-3xl overflow-hidden"
              >
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full aspect-video object-cover"
                />
              </motion.div>

              {/* Article body */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg prose-invert max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-a:text-lime prose-a:no-underline hover:prose-a:underline prose-strong:text-white"
              >
                <PortableText 
                  value={article.content} 
                  components={portableTextComponents}
                />
              </motion.div>

              {/* Infographic / Visual element */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 p-8 bg-gray-800/50 rounded-3xl border border-gray-700/50"
              >
                <h3 className="font-display font-bold text-xl text-white mb-6 text-center">
                  {t.articleDetail.infographicTitle}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {t.articleDetail.infographicStats.map((item, index) => (
                    <div key={item} className="text-center p-4 bg-gray-900/50 rounded-2xl border border-gray-700/50">
                      <div className="font-display text-4xl font-bold text-lime mb-2">
                        {['50%', '15%', '30%', '2x'][index]}
                      </div>
                      <p className="text-gray-400 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Related Articles */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <h3 className="font-display font-bold text-2xl text-white mb-8">
                  {t.articleDetail.relatedArticles} <GradientText>{t.articleDetail.relatedArticlesBr}</GradientText>
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/baza-wiedzy/${related.slug}`}
                      className="group relative rounded-2xl overflow-hidden aspect-video"
                    >
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h4 className="font-semibold text-white group-hover:text-lime transition-colors">
                          {related.title}
                        </h4>
                        <div className="flex items-center gap-2 text-lime opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                          <span className="text-sm">{t.articleDetail.readMore}</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticleDetail;