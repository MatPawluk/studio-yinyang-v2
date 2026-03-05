import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { InteractiveCaseStudy } from '@/components/InteractiveCaseStudy';
import { GradientText } from '@/components/GradientText';
import { ChineseCharacters } from '@/components/ChineseCharacters';
import { ParallaxSection } from '@/components/ParallaxSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { sanityClient } from '@/lib/sanity';
import { ArrowLeft, ArrowRight, Check, X, FileText, Video, Loader2 } from 'lucide-react';
import statsBg from '@/assets/stats-bg.jpg';

// Service cover images
import uAnalizaWplywu from '@/assets/u-analiza-wplywu.png';
import uDecyzjeWejscia from '@/assets/u-decyzje-wejscia.png';
import uScenariuszeStrategiczne from '@/assets/u-scenariusze-strategiczne.png';
import uBriefingiDecyzyjne from '@/assets/u-briefingi-decyzyjne.png';
import uAnalizySektorow from '@/assets/u-analizy-sektorow.png';
import uAnalizaRegulacyjna from '@/assets/u-analiza-regulacyjna.png';
import uWeryfikacjaKontrahenta from '@/assets/u-weryfikacja-kontrahenta.png';
import uRozszerzonaWeryfikacja from '@/assets/u-rozszerzona-weryfikacja.png';
import uWyborModelu from '@/assets/u-wybor-modelu.png';
import uWsparcieFormalne from '@/assets/u-wsparcie-formalne.png';
import uIdentyfikacjaPartnerow from '@/assets/u-identyfikacja-partnerow.png';
import uWsparcieNegocjacyjne from '@/assets/u-wsparcie-negocjacyjne.png';
import uPrzygotowanieStruktur from '@/assets/u-przygotowanie-struktur.png';
import uAudytyWeryfikacja from '@/assets/u-audyty-weryfikacja.png';
import uProjektowanieLancucha from '@/assets/u-projektowanie-lancucha.png';
import uNadzorProdukcji from '@/assets/u-nadzor-produkcji.png';
import uOrganizacjaTransportu from '@/assets/u-organizacja-transportu.png';
import uKompleksowaRealizacja from '@/assets/u-kompleksowa-realizacja.png';
import uLokalnePozycjonowanie from '@/assets/u-lokalne-pozycjonowanie.png';
import uStrategieKomunikacji from '@/assets/u-strategie-komunikacji.png';
import uAdaptacjaKomunikacji from '@/assets/u-adaptacja-komunikacji.png';
import uMaterialySprzedazowe from '@/assets/u-materialy-sprzedazowe.png';
import uWsparcieMarketingowe from '@/assets/u-wsparcie-marketingowe.png';
import uOrganizacjaMisji from '@/assets/u-organizacja-misji.png';
import uAranzacjaSpotkan from '@/assets/u-aranzacja-spotkan.png';
import uSzkoleniaSystem from '@/assets/u-szkolenia-system.png';
import uSzkoleniaKultura from '@/assets/u-szkolenia-kultura.png';

// Image mapping by slug
const serviceImages: Record<string, string> = {
  'analiza-wplywu': uAnalizaWplywu,
  'decyzje-wejscia': uDecyzjeWejscia,
  'scenariusze-strategiczne': uScenariuszeStrategiczne,
  'briefingi-decyzyjne': uBriefingiDecyzyjne,
  'analizy-sektorow': uAnalizySektorow,
  'analiza-regulacyjna': uAnalizaRegulacyjna,
  'weryfikacja-kontrahenta': uWeryfikacjaKontrahenta,
  'due-diligence': uRozszerzonaWeryfikacja,
  'wybor-modelu': uWyborModelu,
  'wsparcie-formalne': uWsparcieFormalne,
  'identyfikacja-partnerow': uIdentyfikacjaPartnerow,
  'wsparcie-negocjacyjne': uWsparcieNegocjacyjne,
  'struktury-handlowe': uPrzygotowanieStruktur,
  'audyty-dostawcow': uAudytyWeryfikacja,
  'optymalizacja-lancucha': uProjektowanieLancucha,
  'nadzor-produkcji': uNadzorProdukcji,
  'transport-miedzynarodowy': uOrganizacjaTransportu,
  'realizacja-end-to-end': uKompleksowaRealizacja,
  'lokalne-pozycjonowanie': uLokalnePozycjonowanie,
  'strategia-komunikacji': uStrategieKomunikacji,
  'adaptacja-komunikacji': uAdaptacjaKomunikacji,
  'materialy-sprzedazowe': uMaterialySprzedazowe,
  'wsparcie-marketingowe': uWsparcieMarketingowe,
  'misje-biznesowe': uOrganizacjaMisji,
  'matchmaking': uAranzacjaSpotkan,
  'szkolenia-system': uSzkoleniaSystem,
  'szkolenia-kultura': uSzkoleniaKultura,
};

const ServiceDetail = () => {
  const { subServiceSlug } = useParams();
  const { t, language } = useLanguage();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const query = `*[_type == "service" && slug.current == $slug][0]`;
        const data = await sanityClient.fetch(query, { slug: subServiceSlug });
        
        if (data) {
          // Map Sanity data structure to component expectations
          const localizedData = {
            title: data?.title?.[language] || data?.title?.['pl'] || '',
            subtitle: data?.subtitle?.[language] || data?.subtitle?.['pl'] || '',
            description: data?.description?.[language] || data?.description?.['pl'] || '',
            image: serviceImages[subServiceSlug || ''] || uAnalizaWplywu,
            whenItMakesSense: (data?.whenItMakesSense || []).map((i: any) => i?.[language] || i?.['pl'] || ''),
            problemsSolved: (data?.problemsSolved || []).map((i: any) => i?.[language] || i?.['pl'] || ''),
            scope: {
              includes: (data?.scopeIncludes || []).map((i: any) => i?.[language] || i?.['pl'] || ''),
              excludes: (data?.scopeExcludes || []).map((i: any) => i?.[language] || i?.['pl'] || ''),
            },
            deliverables: (data?.deliverables || []).map((i: any) => i?.[language] || i?.['pl'] || ''),
            workModel: {
              type: data?.workModelType?.[language] || data?.workModelType?.['pl'] || '',
              duration: data?.workModelDuration?.[language] || data?.workModelDuration?.['pl'] || '',
              communication: data?.workModelCommunication?.[language] || data?.workModelCommunication?.['pl'] || '',
            },
            caseStudy: {
              client: data?.caseStudyClient?.[language] || data?.caseStudyClient?.['pl'] || '',
              situation: data?.caseStudySituation?.[language] || data?.caseStudySituation?.['pl'] || '',
              actions: data?.caseStudyActions?.[language] || data?.caseStudyActions?.['pl'] || '',
              result: data?.caseStudyResult?.[language] || data?.caseStudyResult?.['pl'] || '',
            },
            caseStudyImage: serviceImages[subServiceSlug || ''] || uAnalizaWplywu, // Placeholder
          };
          setService(localizedData);
        }
      } catch (error) {
        console.error('Error fetching service:', error);
      } finally {
        setLoading(false);
      }
    };

    if (subServiceSlug) {
      fetchService();
    }
  }, [subServiceSlug, language]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050608] text-gray-400">
        <Loader2 className="w-12 h-12 animate-spin mb-4 text-lime" />
        <p>Ładowanie szczegółów usługi...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050608] text-gray-400 px-6 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Nie znaleziono usługi</h1>
        <p className="mb-8 text-gray-500 max-w-md">Przepraszamy, ale usługa o podanym adresie nie istnieje lub została tymczasowo przeniesiona.</p>
        <Link to="/uslugi" className="px-8 py-3 bg-lime text-gray-900 rounded-full font-semibold hover:scale-105 transition-transform">
          Wróć do usług
        </Link>
      </div>
    );
  }


  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050608' }}>
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: '#050608' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            src={service.image} 
            alt="" 
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,6,8,0.8), rgba(5,6,8,0.9), #050608)' }} />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-lime/8 blur-[150px] rounded-full" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <Link 
            to="/uslugi"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#c4ff00] transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.serviceDetail.backToServices}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
              {service.subtitle}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <GradientText>{service.title}</GradientText>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Description with Image */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0B0B0B' }}>
        <ChineseCharacters characters="信" position="right" className="top-10" opacity={0.04} />
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0B0B0B, transparent, transparent)' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-[#c4ff00] rounded-full" />
                {t.serviceDetail.serviceDescription}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When it makes sense + Problems Solved - parallax */}
      <ParallaxSection imageUrl={statsBg} overlayOpacity={0.88} className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-8">
                {t.serviceDetail.whenMakesSense} <GradientText>{t.serviceDetail.whenMakesSenseHighlight}</GradientText>
              </h2>
              <div className="space-y-4">
                {service.whenItMakesSense.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-lime/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-display text-sm font-bold text-lime/60 mt-0.5 flex-shrink-0">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <p className="text-gray-300 text-sm">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-8">
                {t.serviceDetail.problemSolved} <GradientText>{t.serviceDetail.problemSolvedHighlight}</GradientText>
              </h2>
              <div className="space-y-4">
                {service.problemsSolved.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-lime/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0 mt-2" />
                      <p className="text-gray-300 text-sm">{problem}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Scope */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#050608' }}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-2xl font-bold text-white">
                {t.serviceDetail.scopeTitle} <GradientText>{t.serviceDetail.scopeHighlight}</GradientText>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-gray-800/50" style={{ backgroundColor: '#0B0B0B' }}
              >
                <h3 className="font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-6 bg-[#c4ff00] rounded-full" />
                  {t.serviceDetail.includes}
                </h3>
                <ul className="space-y-4">
                  {service.scope.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-gray-800/50" style={{ backgroundColor: '#0B0B0B' }}
              >
                <h3 className="font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-6 bg-red-500/60 rounded-full" />
                  {t.serviceDetail.excludes}
                </h3>
                <ul className="space-y-4">
                  {service.scope.excludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0B0B0B' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime/3 blur-[150px] rounded-full" />
        </div>
        
        <ChineseCharacters characters="任" position="left" className="top-10" opacity={0.04} />
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-8">
                Output / <GradientText>{t.serviceDetail.deliverables}</GradientText>
              </h2>
              <div className="space-y-4">
                {service.deliverables.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-xl border border-gray-800/50 text-left" style={{ backgroundColor: '#111214' }}
                  >
                    <span className="font-display text-sm font-bold text-lime/50 mt-0.5 flex-shrink-0">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-gray-300 text-sm">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Model - clean, no icons, no weird decorations */}
      <ParallaxSection 
        imageUrl={statsBg} 
        overlayOpacity={0.92} 
        className="py-20"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-white mb-10">
                {t.serviceDetail.workModelTitle} <GradientText>{t.serviceDetail.workModelHighlight}</GradientText>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <p className="text-[#c4ff00] text-xs uppercase tracking-wider mb-3 font-medium">{t.serviceDetail.workModelType}</p>
                  <p className="text-white font-semibold text-sm">{service.workModel.type}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <p className="text-[#c4ff00] text-xs uppercase tracking-wider mb-3 font-medium">{t.serviceDetail.workModelDuration}</p>
                  <p className="text-white font-semibold text-sm">{service.workModel.duration}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <p className="text-[#c4ff00] text-xs uppercase tracking-wider mb-3 font-medium">{t.serviceDetail.workModelComm}</p>
                  <p className="text-white font-semibold text-sm">{service.workModel.communication}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Case Study */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#050608' }}>
        <ChineseCharacters characters="橋" position="right" className="top-20" opacity={0.05} />
        
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">
              {t.serviceDetail.caseStudyBadge}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">
              {t.serviceDetail.caseStudyTitle} <GradientText>{t.serviceDetail.caseStudyHighlight}</GradientText>
            </h2>
          </motion.div>

          <InteractiveCaseStudy data={service.caseStudy} image={service.caseStudyImage} />
        </div>
      </section>

      {/* CTA Section - consistent style */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#050608' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lime/8 blur-[150px] rounded-full" />
        </div>
        
        <div className="absolute bottom-10 left-10 opacity-[0.06] pointer-events-none">
          <span className="font-display text-[10rem] font-bold text-[#c4ff00] leading-none">合作</span>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
              {t.serviceDetail.ctaTitle} <GradientText>{t.serviceDetail.ctaHighlight}</GradientText>
            </h2>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto">
              {t.serviceDetail.ctaSubtitle}
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#c4ff00] text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_48px_-12px_rgba(196,255,0,0.5)]"
            >
              {t.serviceDetail.ctaButton}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
