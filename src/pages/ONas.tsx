import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LogoMarquee } from '@/components/LogoMarquee';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { MapPin, ArrowRight, CheckCircle, Users } from 'lucide-react';

const activities = [
  'Analizy strategiczne i sektorowe dotyczące Chin',
  'Research firm, technologii i ekosystemów innowacji',
  'Weryfikację partnerów biznesowych i technologicznych',
  'Audyty firm i zakładów w Chinach',
  'Identyfikację i dobór partnerów',
  'Wsparcie negocjacji i współpracy',
  'Organizację misji biznesowych i wizyt studyjnych',
  'Szkolenia i briefingi dla decydentów',
];

const team = [
  { name: 'Jan Kowalski', role: 'Founder / Strategy & China Lead', initials: 'JK' },
  { name: 'Wei Zhang', role: 'China Operations & Research', initials: 'WZ' },
  { name: 'Anna Nowak', role: 'Business & Project Lead (PL)', initials: 'AN' },
  { name: 'Zespół ekspertów', role: 'Współpracownicy i konsultanci', initials: '++', isTeam: true },
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
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-lime/10 blur-[150px] rounded-full" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/3 w-[300px] h-[300px] border border-lime/10 rounded-full"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-6">
                O nas
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Twój partner
                <br />
                <span className="text-lime">na linii PL–CN</span>
              </h1>
              <p className="text-lg text-gray-400 mb-6">
                Yin Yang to firma doradcza działająca na linii Polska-Chiny, specjalizująca się w analizie rynku chińskiego, weryfikacji partnerów oraz wsparciu decyzyjnym firm i instytucji.
              </p>
              <p className="text-gray-500">
                Współpracujemy z organizacjami, dla których Chiny mają realne znaczenie strategiczne – jako rynek, partner technologiczny lub źródło presji konkurencyjnej.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-lime flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-900" />
                  </div>
                  <div>
                    <div className="font-display text-4xl font-bold text-lime">
                      <AnimatedCounter end={10} suffix="+" />
                    </div>
                    <p className="text-gray-400">lat doświadczenia</p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                <p className="mt-6 text-gray-400 text-sm">
                  Zespół łączący głęboką znajomość chińskiego rynku z europejską perspektywą biznesową.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do - With cool effects */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
              Zakres działań
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900">
              Co robimy
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {activities.map((activity, index) => (
              <motion.div
                key={activity}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-gray-900 transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-lime/10 group-hover:bg-lime flex items-center justify-center transition-colors duration-300">
                    <span className="font-display font-bold text-lime group-hover:text-gray-900 transition-colors duration-300">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 group-hover:text-white transition-colors duration-300">
                    {activity}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">
              Ludzie
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Zespół
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className={`relative w-24 h-24 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  member.isTeam ? 'bg-gray-800 border-2 border-dashed border-gray-600' : 'bg-gradient-to-br from-lime to-lime-glow'
                }`}>
                  <span className={`font-display text-2xl font-bold ${
                    member.isTeam ? 'text-gray-400' : 'text-gray-900'
                  }`}>
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-gray-950 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-4">
              Lokalizacje
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Gdzie działamy
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Działamy operacyjnie pomiędzy Polską a Chinami, łącząc perspektywę europejskich firm z bezpośrednią obecnością w chińskim systemie gospodarczym.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Warsaw */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-lime/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime/0 to-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-lime" />
                    <span className="font-display font-bold text-2xl text-white">Warszawa</span>
                  </div>
                  <span className="text-gray-500 text-sm font-mono">52°N 21°E</span>
                </div>
                <p className="text-gray-400">
                  ul. Chmielna 69<br />
                  00-801 Warszawa<br />
                  Polska
                </p>
              </div>
            </motion.div>

            {/* Shanghai */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-lime/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lime/0 to-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-lime" />
                    <span className="font-display font-bold text-2xl text-white">Shanghai</span>
                  </div>
                  <span className="text-gray-500 text-sm font-mono">31°N 121°E</span>
                </div>
                <p className="text-gray-400">
                  Zhangyang Road 777<br />
                  Pudong New Area<br />
                  Shanghai 200120, China
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-lime mb-2">
                  {stat.isText ? (
                    <span>{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
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

      {/* CTA Section */}
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
              className="group inline-flex items-center gap-3 px-10 py-5 bg-lime text-gray-900 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lime-lg animate-pulse-glow"
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
