// components/Contact.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Zap, Laptop, Bird, Pen } from "lucide-react";


const Contact = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Briefcase />, url: 'https://www.linkedin.com/in/delight-olu-olagbuji-990b61314/', color: 'from-blue-500 to-blue-600' },
    { name: 'X/Twitter', icon: <Bird />, url: '#', color: 'from-pink-500 to-purple-500' },
    { name: 'Blog', icon: <Pen />, url: '#', color: 'from-blue-600 to-blue-700' },
    { name: 'GitHub', icon: <Laptop />, url: '#', color: 'from-gray-700 to-gray-800' },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
                        : 'bg-white border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                    } outline-none`}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-all ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
                        : 'bg-white border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                    } outline-none`}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className={`w-full px-4 py-3 rounded-xl border transition-all ${
                      darkMode
                        ? 'bg-gray-800 border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
                        : 'bg-white border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                    } outline-none resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg ${
                    darkMode
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600'
                  } text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full ${
                      darkMode ? 'bg-cyan-500/20' : 'bg-purple-500/20'
                    } flex items-center justify-center`}>
                      📧
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="opacity-70">delightgbolahan1@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full ${
                      darkMode ? 'bg-cyan-500/20' : 'bg-purple-500/20'
                    } flex items-center justify-center`}>
                      📱
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="opacity-70">+2349015376434</p>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`p-4 rounded-xl bg-gradient-to-r ${social.color} text-white text-center shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="text-2xl mb-2">{social.icon}</div>
                      <div className="font-semibold">{social.name}</div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;