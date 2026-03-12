import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  articleData?: {
    publishedTime?: string;
    author?: string;
    tags?: string[];
  };
}

export const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogType = 'website', 
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
  articleData 
}: SEOProps) => {
  const { language } = useLanguage();
  
  const siteName = 'Studio Yin Yang';
  const defaultTitle = 'Studio Yin Yang | Strategic Partner Poland-China';
  const defaultDescription = 'Studio Yin Yang - Your strategic partner for full-cycle business relations between Poland and China. Strategy, design, and content that delivers results.';
  
  const seoTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoCanonical = canonical || window.location.origin + window.location.pathname;

  // Multi-language alternates
  const alternates = [
    { lang: 'pl', href: `${window.location.origin}/pl${window.location.pathname.replace(/^\/(pl|en|cn)/, '')}` },
    { lang: 'en', href: `${window.location.origin}/en${window.location.pathname.replace(/^\/(pl|en|cn)/, '')}` },
    { lang: 'zh-Hans', href: `${window.location.origin}/cn${window.location.pathname.replace(/^\/(pl|en|cn)/, '')}` },
  ];

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Studio Yin Yang",
    "url": "https://studioyinyang.pl",
    "logo": "https://studioyinyang.pl/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48-XXX-XXX-XXX",
      "contactType": "customer service",
      "availableLanguage": ["Polish", "English", "Chinese"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/studio-yin-yang",
      "https://twitter.com/StudioYinYang"
    ]
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={seoCanonical} />
      <html lang={language === 'cn' ? 'zh-Hans' : language} />

      {/* Language Alternates (Hreflang) */}
      {alternates.map((alt) => (
        <link key={alt.lang} rel="alternate" hrefLang={alt.lang} href={alt.href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={alternates[1].href} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article Specific */}
      {ogType === 'article' && articleData && (
        <>
          {articleData.publishedTime && <meta property="article:published_time" content={articleData.publishedTime} />}
          {articleData.author && <meta property="article:author" content={articleData.author} />}
          {articleData.tags?.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};
