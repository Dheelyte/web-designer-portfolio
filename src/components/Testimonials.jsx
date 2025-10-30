// components/Testimonials.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Tech Innovators',
      role: 'CEO',
      text: 'Exceptional work! The design perfectly captured our vision and the development was flawless. Highly recommended!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Digital Solutions',
      role: 'Product Manager',
      text: 'Working with this designer was a game-changer for our project. Attention to detail and creativity beyond expectations.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Creative Labs',
      role: 'Design Director',
      text: 'The perfect blend of aesthetic appeal and functional design. Delivered on time and exceeded all requirements.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            Client <span className="text-cyan-400">Testimonials</span>
          </h2>
          <p className="text-xl opacity-90 mb-12">
            What my clients say about working with me
          </p>

          <div className="relative h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 p-8 rounded-3xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                }`}
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-2xl text-yellow-400 mx-1"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                {/* Quote */}
                <motion.p
                  className="text-2xl italic mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.p>

                {/* Client Info */}
                <motion.div
                  className="flex items-center justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-4xl">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-semibold">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="opacity-70">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial
                    ? darkMode
                      ? 'bg-cyan-400'
                      : 'bg-purple-500'
                    : darkMode
                    ? 'bg-gray-600'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;