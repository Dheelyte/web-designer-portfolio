// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Palette } from "lucide-react";


const About = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Figma', level: 95, color: 'from-purple-400 to-pink-400' },
    { name: 'Adobe XD', level: 90, color: 'from-pink-400 to-purple-400' },
    { name: 'HTML/CSS', level: 98, color: 'from-orange-400 to-red-400' },
    { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-orange-400' },
    { name: 'React', level: 90, color: 'from-cyan-400 to-blue-400' },
    { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-cyan-400' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`w-80 h-80 mx-auto rounded-full ${
                darkMode 
                  ? 'bg-gradient-to-br from-cyan-500 to-purple-600' 
                  : 'bg-gradient-to-br from-cyan-300 to-purple-400'
              } p-1`}>
                <div className={`w-full h-full rounded-full ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } flex items-center justify-center`}>
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className={`absolute -top-4 -right-4 w-16 h-16 rounded-full ${
                  darkMode ? 'bg-cyan-500' : 'bg-cyan-300'
                } flex items-center justify-center text-white`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap />
              </motion.div>
              <motion.div
                className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full ${
                  darkMode ? 'bg-purple-500' : 'bg-purple-300'
                } flex items-center justify-center text-white`}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Palette />
              </motion.div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.h2
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                About <span className="text-cyan-400">Me</span>
              </motion.h2>
              
              <motion.p
                className="text-lg mb-6 opacity-90"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                I'm a passionate web designer and developer with over 5 years of experience 
                creating digital experiences that blend beautiful design with seamless functionality.
              </motion.p>
              
              <motion.p
                className="text-lg mb-8 opacity-90"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                My philosophy is simple: design should not only look stunning but also solve 
                real problems and provide intuitive user experiences.
              </motion.p>

              {/* Skills */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    } overflow-hidden`}>
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;