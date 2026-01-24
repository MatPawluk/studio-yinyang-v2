import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MapPin, Mail, Send, ArrowUpRight, MessageCircle, Calendar, Phone } from 'lucide-react';
import { useState } from 'react';

const topics = [
  'Strategia wobec Chin',
  'Wejście na rynek chiński',
  'Weryfikacja partnera',
  'Audyt / Kontrola jakości',
  'Szkolenie / Briefing',
  'Inne',
];

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Napisz do nas',
    subtitle: 'contact@yinyang.pl',
    color: 'bg-red-500',
    href: 'mailto:contact@yinyang.pl',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Porozmawiaj z nami',
    subtitle: 'Rozpocznij czat',
    color: 'bg-green-500',
    href: '#',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Umów spotkanie',
    subtitle: 'Zarezerwuj termin',
    color: 'bg-blue-500',
    href: '#',
  },
];

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    topic: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Main Content - Dark theme */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header - Short */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
              Kontakt
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Porozmawiajmy
              <br />
              <span className="text-lime">o Twoich potrzebach</span>
            </h1>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left side - Contact Methods + Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Contact Method Cards */}
              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-lime/30 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center text-white`}>
                      {method.icon}
                    </div>
                    <div className="flex-grow">
                      <p className="text-white font-semibold">{method.title}</p>
                      <p className="text-lime text-sm">{method.subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-lime transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
                <h3 className="font-display font-semibold text-xl text-white mb-2">
                  Wyślij wiadomość
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Wypełnij formularz, a skontaktujemy się w ciągu 24 godzin.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Imię i nazwisko *
                      </label>
                      <input
                        type="text"
                        placeholder="Jan Kowalski"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        placeholder="jan@firma.pl"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Firma / instytucja
                    </label>
                    <input
                      type="text"
                      placeholder="Nazwa firmy"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      placeholder="Opisz krótko, w czym możemy pomóc..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lime-lg"
                  >
                    Wyślij wiadomość
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations + Map Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Location Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-display font-semibold text-2xl text-white mb-6">
                Nasze lokalizacje
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-lime/30 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5 text-lime" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Warszawa</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    ul. Chmielna 69<br />
                    00-801 Warszawa<br />
                    Polska
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-lime/30 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-xl bg-lime flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5 text-gray-900" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Shanghai</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Zhangyang Road 777<br />
                    Pudong New Area<br />
                    Shanghai 200120
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Apple Maps Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-gray-700/50"
            >
              <iframe
                src="https://embed.apple.com/maps/place?address=Chmielna%2069,%2000-801%20Warsaw,%20Poland&h=400&colorScheme=dark"
                width="100%"
                height="400"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa lokalizacji Warszawa"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
