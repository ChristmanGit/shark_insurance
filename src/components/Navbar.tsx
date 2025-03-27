
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav py-3 shadow-subtle' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-shark-900 flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 14C28 18.4183 24.4183 22 20 22C15.5817 22 12 18.4183 12 14C12 9.58172 15.5817 6 20 6C24.4183 6 28 9.58172 28 14Z" fill="#0EA5E9"/>
              <path d="M26 14C26 17.3137 23.3137 20 20 20C16.6863 20 14 17.3137 14 14C14 10.6863 16.6863 8 20 8C23.3137 8 26 10.6863 26 14Z" fill="white"/>
              <path d="M24 19L25 27H7L11 16L13 18L16 16L20 18L24 19Z" fill="#0EA5E9"/>
              <path d="M15 14C15 15.1046 14.1046 16 13 16C11.8954 16 11 15.1046 11 14C11 12.8954 11.8954 12 13 12C14.1046 12 15 12.8954 15 14Z" fill="#000"/>
            </svg>
            <span>Shark Insurance</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('coverage')} className="nav-link">Coverage</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
          <button onClick={() => scrollToSection('faq')} className="nav-link">FAQ</button>
          <button onClick={() => scrollToSection('contact')} className="shark-button">
            Get Protected
          </button>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-shark-800 p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('about')} className="text-shark-800 hover:text-ocean-600 py-2">About</button>
            <button onClick={() => scrollToSection('coverage')} className="text-shark-800 hover:text-ocean-600 py-2">Coverage</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-shark-800 hover:text-ocean-600 py-2">Testimonials</button>
            <button onClick={() => scrollToSection('faq')} className="text-shark-800 hover:text-ocean-600 py-2">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="shark-button w-full text-center">Get Protected</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
