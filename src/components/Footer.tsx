import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Strona główna', href: '/' },
    { name: 'Usługi', href: '/uslugi' },
    { name: 'O nas', href: '/o-nas' },
    { name: 'Baza wiedzy', href: '/baza-wiedzy' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { name: 'Polityka prywatności', href: '#' },
    { name: 'RODO', href: '#' },
    { name: 'Cookies', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
      
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-full bg-lime flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="font-display font-bold text-gray-900 text-xl">陰</span>
              </div>
              <span className="font-display font-bold text-2xl">Yin Yang</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Twój przewodnik w relacjach Polska–Chiny. Analizujemy, weryfikujemy, organizujemy i nadzorujemy projekty na linii PL–CN.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Nawigacja</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-lime transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Kontakt</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@yinyang.pl"
                className="flex items-center gap-3 text-gray-400 hover:text-lime transition-colors duration-300 text-sm"
              >
                <Mail size={18} className="text-lime" />
                contact@yinyang.pl
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Lokalizacje</h4>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-white font-medium mb-2">
                  <MapPin size={16} className="text-lime" />
                  Warszawa
                </div>
                <p className="text-gray-400 text-sm pl-6">
                  ul. Chmielna 69<br />
                  00-801 Warszawa
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white font-medium mb-2">
                  <MapPin size={16} className="text-lime" />
                  Shanghai
                </div>
                <p className="text-gray-400 text-sm pl-6">
                  Zhangyang Road 777<br />
                  Pudong New Area
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Yin Yang. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
