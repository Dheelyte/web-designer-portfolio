// components/Portfolio.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'Modern e-commerce solution with seamless user experience',
      image: '🛒',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Fitness App UI',
      category: 'design',
      tech: ['Figma', 'Adobe XD'],
      description: 'Mobile fitness application with intuitive workout tracking',
      image: '💪',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'web',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      description: 'Creative portfolio with smooth animations',
      image: '🎨',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Banking Dashboard',
      category: 'design',
      tech: ['Figma', 'Illustrator'],
      description: 'Financial dashboard with data visualization',
      image: '📊',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Travel Blog',
      category: 'web',
      tech: ['Next.js', 'GraphQL', 'Strapi'],
      description: 'Content-rich travel platform with stunning visuals',
      image: '✈️',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      title: 'Mobile Game UI',
      category: 'design',
      tech: ['Figma', 'After Effects'],
      description: 'Engaging game interface with smooth animations',
      image: '🎮',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="text-cyan-400">Portfolio</span>
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              A collection of my recent projects and creative works
            </p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            {['all', 'web', 'design'].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium capitalize transition-all ${
                  filter === category
                    ? darkMode
                      ? 'bg-cyan-500 text-white'
                      : 'bg-purple-500 text-white'
                    : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl overflow-hidden cursor-pointer group ${
                    darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                    <span>{project.image}</span>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="text-white text-center"
                      >
                        <div className="text-2xl mb-2">👁️</div>
                        <div className="text-sm">View Details</div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="opacity-70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode
                              ? 'bg-gray-700 text-cyan-400'
                              : 'bg-gray-200 text-purple-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className={`max-w-4xl w-full rounded-2xl overflow-hidden ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`h-64 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center text-8xl`}>
                  {selectedProject.image}
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-bold">{selectedProject.title}</h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className={`p-2 rounded-full ${
                        darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                      }`}
                    >
                      ✕
                    </button>
                  </div>
                  
                  <p className="text-lg mb-6 opacity-90">{selectedProject.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-4 py-2 rounded-full ${
                            darkMode
                              ? 'bg-gray-700 text-cyan-400'
                              : 'bg-gray-200 text-purple-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-full font-semibold ${
                        darkMode
                          ? 'bg-cyan-500 hover:bg-cyan-600'
                          : 'bg-purple-500 hover:bg-purple-600'
                      } text-white`}
                    >
                      View Live Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-full font-semibold border-2 ${
                        darkMode
                          ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                          : 'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white'
                      }`}
                    >
                      GitHub Repo
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;