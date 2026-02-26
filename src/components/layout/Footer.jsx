import React from 'react'
import { Link } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Github,
  Gitlab,
  Phone
} from 'lucide-react';
import Container from './Container.jsx';

const Footer = () => {
  return (
    <footer className="glass-dark border-t border-white/10 text-white/50">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-white">Bharcode</span>
            </Link>
            <p className="text-sm">
              Orang biasa yang menjalankan hidup dengan biasa saja
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Projects', 'Journey', 'Contact',].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white font-semibold mb-4">Address</h3>
            <ul className="space-y-2 text-sm">
              <li>Desa Ulian, Kintamani, Bangli</li>
              <li>Bali, Indonesia</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <div className="flex flex-col space-y-3 text-sm">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/bharatayasa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>bharatayasa</span>
              </a>

              {/* github */}
              <a
                href="https://github.com/bharcode22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>bharcode22</span>
              </a>

              {/* gitlab */}
              <a
                href="https://gitlab.com/bharatayasa40"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Gitlab className="h-5 w-5" />
                <span>bharatayasa40</span>
              </a>

              {/* Email */}
              <a
                href="mailto:gedeputraswastika@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>bharatayasa40@gmail.com</span>
              </a>

              {/* Whatsapp */}
              <a
                href="mailto:gedeputraswastika@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+62 819-9993-4616</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;