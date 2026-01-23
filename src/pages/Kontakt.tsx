import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MapPin, Mail, Send, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import worldMap from '@/assets/world-map.jpg';

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
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content - Compact header */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
              Kontakt
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Porozmawiajmy
              <br />
              <span className="text-gray-900">o Twoich potrzebach</span>
            </h1>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left side - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200">
                <h3 className="font-display font-semibold text-xl text-gray-900 mb-2">
                  Formularz kontaktowy
                </h3>
                <p className="text-gray-500 text-sm mb-8">
                  Wypełnij formularz, a skontaktujemy się w ciągu 24 godzin.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
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
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]"
                  >
                    Wyślij wiadomość
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right side - Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-display font-semibold text-2xl text-gray-900 mb-6">
                  Dane kontaktowe
                </h3>
                
                {/* Email Card */}
                <a
                  href="mailto:contact@yinyang.pl"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 hover:border-lime transition-colors duration-300 group mb-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-lime flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-500 text-sm">E-mail</p>
                    <p className="text-gray-900 font-semibold text-lg">contact@yinyang.pl</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-lime transition-colors duration-300" />
                </a>

                {/* Location Cards */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-5 rounded-2xl border border-gray-200 hover:border-lime transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mb-4">
                      <MapPin className="w-5 h-5 text-lime" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Warszawa</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      ul. Chmielna 69<br />
                      00-801 Warszawa<br />
                      Polska
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl border border-gray-200 hover:border-lime transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-lime flex items-center justify-center mb-4">
                      <MapPin className="w-5 h-5 text-gray-900" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Shanghai</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Zhangyang Road 777<br />
                      Pudong New Area<br />
                      Shanghai 200120
                    </p>
                  </div>
                </div>

                {/* Map */}
                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src={worldMap}
                    alt="Mapa lokalizacji"
                    className="w-full h-64 object-cover"
                  />
                  {/* Map Markers */}
                  <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <MapPin className="w-4 h-4 text-gray-900" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <MapPin className="w-4 h-4 text-gray-900" />
                    </div>
                  </div>
                </div>
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
