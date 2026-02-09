import { Link } from 'react-router-dom';
import { MapPin, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

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

interface FooterProps {
  variant?: 'dark' | 'light';
}

export const Footer = ({ variant = 'dark' }: FooterProps) => {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#050608' }}>
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand with Logo */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src={logo} 
                alt="Yin Yang Logo" 
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-display font-bold text-2xl text-white">Yin Yang</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Twój przewodnik w relacjach Polska-Chiny. Analizujemy, weryfikujemy, organizujemy i nadzorujemy projekty na linii PL-CN.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Nawigacja</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-500 hover:text-lime transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Kontakt</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@yinyang.pl"
                className="flex items-center gap-3 text-gray-500 hover:text-lime transition-colors duration-300 text-sm"
              >
                <Mail size={18} className="text-lime" />
                contact@yinyang.pl
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Lokalizacje</h4>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-white font-medium mb-2">
                  <MapPin size={16} className="text-lime" />
                  Warszawa
                </div>
                <p className="text-gray-500 text-sm pl-6">
                  ul. Chmielna 73<br />
                  00-801 Warszawa<br />
                  Polska
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white font-medium mb-2">
                  <MapPin size={16} className="text-lime" />
                  Shanghai
                </div>
                <p className="text-gray-500 text-sm pl-6">
                  696 Weihai Road<br />
                  Jing'an District<br />
                  Shanghai 200041, China
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 Yin Yang. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-400 transition-colors duration-300 text-sm"
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
