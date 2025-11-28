import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Locations', href: '/locations' },
    { name: 'Contact', href: '/contact' }
  ];

  const products = [
    { name: 'Industrial Salt', href: '/products' },
    { name: 'Edible Salt', href: '/products' },
    { name: 'Retail Packaged Salt', href: '/products' },
    { name: 'Custom Solutions', href: '/book-order' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'blue' },
    { icon: Twitter, href: '#', color: 'blue' },
    { icon: Instagram, href: '#', color: 'pink' },
    { icon: Linkedin, href: '#', color: 'blue' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">MD & CO</h3>
              <p className="text-blue-400 text-sm">Premium Salt Distributors</p>
            </div>
            <p className="text-gray-400">
              Leading salt distributor in India since 1995, providing premium quality 
              salt products for industrial, commercial, and retail customers nationwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">info@mdandsalt.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Rajkot, Gujarat</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Products</h4>
            <div className="space-y-3">
              {products.map((product, index) => (
                <Link
                  key={index}
                  to={product.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-3">Follow us on social media</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gray-400 mb-3">Business Hours</p>
                <p className="text-sm text-gray-300">Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-300">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 MD & CO Premium Salt Distributors. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Serving quality salt products across India since 1995
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;