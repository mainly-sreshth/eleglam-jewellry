import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Collections', href: '#collections' },
      { name: 'Engagement Rings', href: '#collections' },
      { name: 'Wedding Bands', href: '#collections' },
      { name: 'Necklaces', href: '#collections' },
      { name: 'Earrings', href: '#collections' },
      { name: 'Bracelets', href: '#collections' }
    ],
    services: [
      { name: 'Custom Design', href: '#contact' },
      { name: 'Jewelry Repair', href: '#contact' },
      { name: 'Appraisals', href: '#contact' },
      { name: 'Cleaning Service', href: '#contact' },
      { name: 'Resizing', href: '#contact' },
      { name: 'Gift Cards', href: '#contact' }
    ],
    about: [
      { name: 'Our Story', href: '#about' },
      { name: 'Craftsmanship', href: '#about' },
      { name: 'Sustainability', href: '#about' },
      { name: 'Press', href: '#about' },
      { name: 'Careers', href: '#about' },
      { name: 'Reviews', href: '#about' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Size Guide', href: '#contact' },
      { name: 'Care Instructions', href: '#contact' },
      { name: 'Warranty', href: '#contact' },
      { name: 'Returns', href: '#contact' },
      { name: 'Shipping', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              LUXE<span className="text-amber-400">GEMS</span>
            </h3>
            <p className="text-amber-200 leading-relaxed mb-6">
              Creating extraordinary jewelry that celebrates life's most precious moments with unparalleled beauty and craftsmanship for over 25 years.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-amber-400 flex-shrink-0" />
                <span className="text-amber-200 text-sm">123 Luxury Lane, Beverly Hills, CA 90210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-400 flex-shrink-0" />
                <span className="text-amber-200 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-400 flex-shrink-0" />
                <span className="text-amber-200 text-sm">info@luxegems.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-amber-200 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-amber-200 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">About</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-amber-200 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-amber-200 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-amber-200 text-sm">
                © {currentYear} LuxeGems. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-amber-200 hover:text-white text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-amber-200 hover:text-white text-sm transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-amber-200 hover:text-white text-sm transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-amber-200 text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-red-400 fill-current" />
              <span>for jewelry lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;