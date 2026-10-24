import React, { useState, useEffect } from 'react';
import ExternalLink from './ExternalLink';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Story', href: '#story' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-grad-1 text-white flex items-center justify-center text-xs font-extrabold shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform">
            PP
          </div>
          <span className="text-sm font-bold text-text group-hover:text-primary-2 transition-colors">
            Prince <span className="text-primary-2">Pandit</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-semibold text-text-soft hover:text-text hover:bg-white/5 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ExternalLink
            href="https://github.com/PrincePandit16"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-text-soft text-xs font-bold hover:border-primary/40 hover:text-text hover:-translate-y-0.5 transition-all"
          >
            <span className="text-sm">🐙</span>
            GitHub
          </ExternalLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
