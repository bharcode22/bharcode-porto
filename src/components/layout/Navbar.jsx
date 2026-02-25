import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Container from './Container.jsx';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/projects', label: t.nav.projects },
    { path: '/contact', label: t.nav.contact },
    { path: '/journey', label: t.nav.journey },
  ];

  return (
    <nav className="glass-dark sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-white">Bharcode</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-white/50 hover:text-white/90'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right side: Language Toggle + Mobile Button */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-xs font-semibold border border-white/15 rounded-md px-2.5 py-1 hover:border-white/35 transition-colors"
            >
              <span className={lang === 'id' ? 'text-white' : 'text-white/35'}>ID</span>
              <span className="text-white/20">/</span>
              <span className={lang === 'en' ? 'text-white' : 'text-white/35'}>EN</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white/70 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-white/50 hover:text-white/90'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
