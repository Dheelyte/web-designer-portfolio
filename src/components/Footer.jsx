// components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Palette, Zap, Laptop } from "lucide-react";


const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialIcons = [
    { name: 'LinkedIn', icon: <Briefcase />, url: '#' },
    { name: 'Dribbble', icon: <Palette />, url: '#' },
    { name: 'Behance', icon: <Zap />, url: '#' },
    { name: 'GitHub', icon: <Laptop />, url: '#' },
  ];

  return (
    <footer className={`py-12 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-100'
    }`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className={`opacity-70 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © {currentYear} Creative Portfolio. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-6">
            {quickLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1, color: '#06b6d4' }}
                className={`font-medium transition-colors duration-300 ${
                  darkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-purple-500'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialIcons.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-cyan-500' 
                    : 'bg-gray-300 hover:bg-purple-500 hover:text-white'
                } transition-all duration-300`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;