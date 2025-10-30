// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const Hero = ({ darkMode }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <ParticleBackground darkMode={darkMode} />
      
      {/* Animated Gradient Background */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900' 
          : 'bg-gradient-to-br from-cyan-100 via-purple-100 to-pink-100'
      }`} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block">Creative</span>
            <span className={`block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent`}>
              Web Designer
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting beautiful and functional digital experiences
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-semibold text-lg ${
                darkMode
                  ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                  : 'bg-purple-500 hover:bg-purple-600 text-white'
              } transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              View Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-semibold text-lg border-2 ${
                darkMode
                  ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  : 'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white'
              } transition-all duration-300`}
            >
              Hire Me
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className={`w-6 h-10 border-2 rounded-full ${
              darkMode ? 'border-cyan-400' : 'border-purple-500'
            } flex justify-center`}>
              <motion.div
                className={`w-1 h-3 rounded-full mt-2 ${
                  darkMode ? 'bg-cyan-400' : 'bg-purple-500'
                }`}
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;