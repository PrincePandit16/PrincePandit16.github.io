import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ExternalLink from './ExternalLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-grad-1 text-white flex items-center justify-center text-xs font-extrabold shadow-lg shadow-primary/40 group-hover:scale-110 transition-transform">
            PP
          </div>
          <span className="text-sm font-bold text-text group-hover:text-primary-2 transition-colors">
            Prince <span className="text-primary-2">Pandit</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-xs font-semibold text-text-soft hover:text-text hover:bg-white/5 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="px-3 py-1 rounded-full bg-mint/10 border border-mint/20 text-mint text-[10px] font-mono tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
            Open to Work
          </div>
            <ExternalLink
              href="https://github.com/PrincePandit16"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-text-soft text-xs font-bold hover:border-primary/40 hover:text-text hover:-translate-y-0.5 transition-all"
            >
              <span className="text-sm">🐙</span>
              GitHub
            </ExternalLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-bg/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-text-soft hover:text-text text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <ExternalLink
            href="https://github.com/PrincePandit16"
            className="text-primary-2 text-sm font-bold pt-2"
          >
            GitHub ↗
          </ExternalLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
