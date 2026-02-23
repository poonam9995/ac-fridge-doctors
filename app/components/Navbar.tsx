'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 leading-tight">
                AC-Fridge <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Doctors</span>
              </span>
              <span className="text-xs text-gray-500 font-medium">Expert Cooling Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-indigo-50">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-indigo-50">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-indigo-50">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-indigo-50">
              Contact
            </Link>
            <a
              href="tel:+919136705351"
              className="ml-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl btn-shine flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 animate-slide-up">
            <div className="flex flex-col space-y-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+919136705351"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-semibold text-center shadow-lg flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

