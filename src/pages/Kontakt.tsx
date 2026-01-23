import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MapPin, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const topics = [
  'Strategia wobec Chin',
  'Wejście na rynek chiński',
  'Weryfikacja partnera',
  'Audyt / Kontrola jakości',
  'Szkolenie / Briefing',
  'Inne',
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
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero + Form Section - Combined for compact view */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-lime/10 blur-[120px] rounded-full" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] border border-lime/10 rounded-full"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left side - Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm font-medium mb-6">
                  Kontakt
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                  Porozmawiajmy
                  <br />
                  <span className="text-lime">o Twoich potrzebach</span>
                </h1>
                <p className="text-lg text-gray-400 mb-12">
                  Jeśli Chiny mają znaczenie dla Twojej organizacji lub rozważasz współpracę w tym obszarze, zapraszamy do kontaktu.
                </p>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <h3 className="font-display font-semibold text-xl text-white mb-6">
                  Dane kontaktowe
                </h3>
                
                <a
                  href="mailto:contact@yinyang.pl"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center group-hover:bg-lime transition-colors duration-300">
                    <Mail className="w-5 h-5 text-lime group-hover:text-gray-900 transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">E-mail</p>
                    <p className="text-white font-medium">contact@yinyang.pl</p>
                  </div>
                </a>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-gray-800/50">
                    <div className="flex items-center gap-2 text-lime mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">Warszawa</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      ul. Chmielna 69<br />
                      00-801 Warszawa
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-800/50">
                    <div className="flex items-center gap-2 text-lime mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">Shanghai</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Zhangyang Road 777<br />
                      Pudong New Area
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                  Formularz kontaktowy
                </h3>
                <p className="text-gray-500 text-sm mb-8">
                  Wypełnij formularz, a skontaktujemy się w ciągu 24 godzin.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      placeholder="Jan Kowalski"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Firma / instytucja
                    </label>
                    <input
                      type="text"
                      placeholder="Nazwa firmy"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adres e-mail
                    </label>
                    <input
                      type="email"
                      placeholder="jan@firma.pl"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Temat rozmowy
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Wybierz temat</option>
                      {topics.map((topic) => (
                        <option key={topic} value={topic}>{topic}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Wiadomość
                    </label>
                    <textarea
                      placeholder="Opisz krótko, w czym możemy pomóc..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-lime text-gray-900 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lime"
                  >
                    <Send className="w-5 h-5" />
                    Wyślij wiadomość
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
