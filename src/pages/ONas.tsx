import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LogoMarquee } from '@/components/LogoMarquee';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ConnectionMap } from '@/components/ConnectionMap';
import { ArrowRight, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import teamJan from '@/assets/team-jan.jpg';
import teamWei from '@/assets/team-wei.jpg';
import teamAnna from '@/assets/team-anna.jpg';

const faqItems = [
  {
    question: 'Analizy strategiczne i sektorowe dotyczące Chin',
    answer: 'Dostarczamy kompleksowe analizy rynków i sektorów w Chinach, uwzględniając lokalne uwarunkowania, trendy i perspektywy rozwoju. Nasze raporty opierają się na bezpośrednim dostępie do chińskich źródeł i ekspertyzie lokalnej.',
  },
  {
    question: 'Research firm, technologii i ekosystemów innowacji',
    answer: 'Prowadzimy szczegółowy research chińskich firm i technologii, analizując ich pozycję rynkową, potencjał innowacyjny oraz powiązania w ekosystemie biznesowym.',
  },
  {
    question: 'Weryfikacja partnerów biznesowych i technologicznych',
    answer: 'Przeprowadzamy kompleksowe due diligence potencjalnych partnerów, weryfikując ich wiarygodność, historię biznesową i reputację na rynku chińskim.',
  },
  {
    question: 'Audyty firm i zakładów w Chinach',
    answer: 'Organizujemy i przeprowadzamy audyty fabryk oraz zakładów produkcyjnych w Chinach, kontrolując jakość, zgodność ze standardami i warunki współpracy.',
  },
  {
    question: 'Identyfikacja i dobór partnerów',
    answer: 'Pomagamy w identyfikacji optymalnych partnerów biznesowych, matchmakingu oraz budowaniu relacji odpowiadających potrzebom klienta.',
  },
  {
    question: 'Wsparcie negocjacji i współpracy',
    answer: 'Wspieramy proces negocjacji z chińskimi partnerami, uwzględniając specyfikę kulturową i biznesową, aby osiągnąć najlepsze warunki współpracy.',
  },
  {
    question: 'Organizacja misji biznesowych i wizyt studyjnych',
    answer: 'Planujemy i koordynujemy misje biznesowe do Chin, wizyty w fabrykach oraz spotkania z potencjalnymi partnerami.',
  },
  {
    question: 'Szkolenia i briefingi dla decydentów',
    answer: 'Prowadzimy dedykowane szkolenia i briefingi strategiczne dla kadry zarządzającej, przygotowując zespoły do skutecznej współpracy z chińskimi partnerami.',
  },
];

const team = [
  { name: 'Jan Kowalski', role: 'Founder / Strategy & China Lead', image: teamJan },
  { name: 'Wei Zhang', role: 'China Operations & Research', image: teamWei },
  { name: 'Anna Nowak', role: 'Business & Project Lead (PL)', image: teamAnna },
];

const stats = [
  { value: 77, suffix: '', label: 'projektów analitycznych' },
  { value: 20, suffix: '+', label: 'firm objętych wsparciem' },
  { value: 7, suffix: '', label: 'sektorów technologicznych' },
  { value: 0, suffix: 'PL–CN', label: 'stała obecność operacyjna', isText: true },
];

const ONas = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section - About Us Style */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-lime/10 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-lime" />
              O Yin Yang
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Twój partner,
              <br />
              <span className="text-lime">na linii PL–CN</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              Działamy operacyjnie pomiędzy Polską a Chinami, łącząc perspektywę europejskich firm z bezpośrednią obecnością w chińskim systemie gospodarczym.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50"
              >
                <div className="font-display text-3xl font-bold text-lime mb-1">
                  {stat.isText ? (
                    <span>{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Connection Map Animation */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
              Połączenie
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">
              Warszawa ↔ Shanghai
            </h2>
          </motion.div>
          
          <ConnectionMap />
        </div>
      </section>

      {/* FAQ Section - Replacing "Co robimy" */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gray-200 text-gray-600 text-sm font-medium mb-4">
              Zakres działań
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">
              Czym się zajmujemy?
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-white rounded-2xl border border-gray-200 px-6 overflow-hidden data-[state=open]:border-lime"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold text-gray-900 hover:text-lime py-5 hover:no-underline">
                      <span className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-lg bg-lime text-gray-900 flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Team - Large Photos */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">
              Zespół
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Poznaj nas
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {/* Large Photo */}
                <div className="relative mb-4 rounded-3xl overflow-hidden aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                </div>
                {/* Name and role below */}
                <h3 className="font-display font-bold text-xl text-white">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8"
          >
            Zaufali nam
          </motion.p>
        </div>
        <LogoMarquee />
      </section>

      {/* CTA Section - Fixed slow pulse */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-lime/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] border border-lime/5 rounded-full"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lime/10 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
              Umów <span className="text-lime">bezpłatną konsultację</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Porozmawiajmy o tym, jak możemy wesprzeć Twoją organizację w relacjach z Chinami.
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-lime text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lime-lg animate-pulse-glow-slow"
            >
              Skontaktuj się
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ONas;
