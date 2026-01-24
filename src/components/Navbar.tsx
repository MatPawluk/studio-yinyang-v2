import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Strona główna', href: '/' },
  { name: 'Usługi', href: '/uslugi' },
  { name: 'Baza wiedzy', href: '/baza-wiedzy' },
  { name: 'O nas', href: '/o-nas' },
  { name: 'Kontakt', href: '/kontakt' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="relative z-10 flex items-center gap-3 group"
            >
              <img 
                src={logo} 
                alt="Yin Yang" 
                className="h-10 w-10 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-display font-bold text-xl text-white">
                Yin Yang
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-300 hover:text-lime' : 'text-white/80 hover:text-lime'
                  } ${location.pathname === link.href ? 'text-lime' : ''}`}
                >
                  {link.name}
                  {location.pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lime rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Side - Language + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSelector />
              <Link
                to="/kontakt"
                className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-lime text-gray-900 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lime"
              >
                Umów rozmowę
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 p-2 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-gray-900/98 backdrop-blur-xl">
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={`text-2xl font-display font-semibold transition-colors duration-300 ${
                        location.pathname === link.href ? 'text-lime' : 'text-white hover:text-lime'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center gap-4"
                >
                  <LanguageSelector />
                  <Link
                    to="/kontakt"
                    className="mt-4 inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-lime text-gray-900 rounded-full"
                  >
                    Umów rozmowę
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
