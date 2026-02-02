import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GradientText } from '@/components/GradientText';
import { MapPin, Send, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    ),
    title: 'Napisz do nas',
    subtitle: 'contact@yinyang.pl',
    color: 'red',
    hoverBorder: 'hover:border-red-500',
    hoverText: 'group-hover:text-red-500',
    iconColor: 'group-hover:text-red-500',
    href: 'mailto:contact@yinyang.pl',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    title: 'Porozmawiaj z nami',
    subtitle: 'WhatsApp',
    color: 'green',
    hoverBorder: 'hover:border-green-500',
    hoverText: 'group-hover:text-green-500',
    iconColor: 'group-hover:text-green-500',
    href: 'https://wa.me/48123456789',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.328.328 0 0 0 .186-.059l1.92-1.14a.595.595 0 0 1 .494-.062c.71.194 1.473.301 2.246.301 4.8 0 8.691-3.288 8.691-7.342s-3.89-7.243-8.691-7.243m4.687 4.87a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-3.75 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-3.75 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M21 17.781a.595.595 0 0 1 .213-.665c1.832-1.347 3.001-3.338 3.001-5.55 0-4.054-3.89-7.342-8.69-7.342-.182 0-.36.01-.538.021 2.866 1.159 4.938 3.596 4.938 6.568 0 3.977-4.04 7.206-9.008 7.275a11.14 11.14 0 0 0 4.614.996c.773 0 1.536-.107 2.246-.301a.595.595 0 0 1 .494.062l1.92 1.14c.057.037.118.059.186.059.16 0 .29-.132.29-.295 0-.072-.03-.143-.048-.213l-.39-1.48a.593.593 0 0 1 .213-.665"/>
      </svg>
    ),
    title: 'WeChat',
    subtitle: 'Skanuj kod QR',
    color: 'green',
    hoverBorder: 'hover:border-green-500',
    hoverText: 'group-hover:text-green-500',
    iconColor: 'group-hover:text-green-500',
    href: '#',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 17.5l-4-4 1.41-1.41L10.5 14.67l5.09-5.09L17 11l-6.5 6.5z"/>
      </svg>
    ),
    title: 'Umów spotkanie',
    subtitle: 'Google Meet',
    color: 'blue',
    hoverBorder: 'hover:border-blue-500',
    hoverText: 'group-hover:text-blue-500',
    iconColor: 'group-hover:text-blue-500',
    href: 'https://calendar.google.com',
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
      
      {/* Main Content - Dark theme with background decorations */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-lime/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-lime/3 blur-[120px] rounded-full" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(196, 255, 0, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Two Column Layout - Form aligned with title */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left side - Title + Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Header */}
              <div className="mb-8">
                <span className="inline-block px-4 py-2 rounded-full bg-lime/20 text-lime text-sm font-medium mb-4">
                  Kontakt
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                  Porozmawiajmy
                  <br />
                  <GradientText>o Twoich potrzebach</GradientText>
                </h1>
              </div>

              {/* Contact Method Cards */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className={`group flex items-center gap-4 p-5 rounded-2xl bg-gray-800/50 border-2 border-gray-700/50 ${method.hoverBorder} transition-all duration-300`}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gray-700/50 flex items-center justify-center text-gray-400 ${method.iconColor} transition-colors duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-grow">
                      <p className={`text-white font-semibold ${method.hoverText} transition-colors duration-300`}>{method.title}</p>
                      <p className="text-gray-400 text-sm">{method.subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
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
                      Temat
                    </label>
                    <input
                      type="text"
                      placeholder="W jakiej sprawie piszesz?"
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      placeholder="Opisz krótko, w czym możemy pomóc..."
                      rows={6}
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

      {/* Map + Locations Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Location Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="font-display font-semibold text-2xl text-white mb-6">
              Nasze <GradientText>lokalizacje</GradientText>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-lime/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-lime" />
                </div>
                <h4 className="font-semibold text-white mb-2">Warszawa</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  ul. Chmielna 73<br />
                  00-801 Warszawa<br />
                  Polska
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-lime/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-lime" />
                </div>
                <h4 className="font-semibold text-white mb-2">Shanghai</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  696 Weihai Road<br />
                  Jing'an District<br />
                  Shanghai 200041<br />
                  China
                </p>
              </div>
            </div>
          </motion.div>

          {/* Apple Maps Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
