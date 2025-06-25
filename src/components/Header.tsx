import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-amber-900 tracking-tight">
              LUXE<span className="text-amber-600">GEMS</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-300">Home</a>
            <a href="#collections" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-300">Collections</a>
            <a href="#about" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-300">About</a>
            <a href="#contact" className="text-amber-900 hover:text-amber-600 font-medium transition-colors duration-300">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-amber-900 hover:text-amber-600 transition-colors duration-300">
              <Search size={20} />
            </button>
            <button className="p-2 text-amber-900 hover:text-amber-600 transition-colors duration-300">
              <User size={20} />
            </button>
            <button className="p-2 text-amber-900 hover:text-amber-600 transition-colors duration-300">
              <Heart size={20} />
            </button>
            <button className="p-2 text-amber-900 hover:text-amber-600 transition-colors duration-300 relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-amber-900 hover:text-amber-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-amber-900 hover:text-amber-600 font-medium py-2 transition-colors duration-300">Home</a>
              <a href="#collections" className="block text-amber-900 hover:text-amber-600 font-medium py-2 transition-colors duration-300">Collections</a>
              <a href="#about" className="block text-amber-900 hover:text-amber-600 font-medium py-2 transition-colors duration-300">About</a>
              <a href="#contact" className="block text-amber-900 hover:text-amber-600 font-medium py-2 transition-colors duration-300">Contact</a>
              <div className="flex items-center space-x-4 pt-4 border-t border-amber-200">
                <button className="p-2 text-amber-900 hover:text-amber-600 transition-colors duration-300">
                  <Search size={20} />
                </button>
                <button className="p-2 text-amber-900 hover:text-amber-600 transition-colors duration-300">
                  <User size={20} />
                </button>
                <button className="p-2 text-amber-900 hover:text-amber-600 transition-colors duration-300">
                  <Heart size={20} />
                </button>
                <button className="p-2 text-amber-900 hover:text-amber-600 transition-colors duration-300 relative">
                  <ShoppingBag size={20} />
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;