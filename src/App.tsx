import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">My Portfolio</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm [Your Name]
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            A passionate developer building amazing web experiences
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View My Work
          </button>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-gray-600 mb-6">
            [Add your personal description here]
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Frontend Development</h3>
              <p className="text-gray-600">React, Vue, TypeScript</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Backend Development</h3>
              <p className="text-gray-600">Node.js, Python, SQL</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Tools & Technologies</h3>
              <p className="text-gray-600">Git, Docker, AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add your project cards here */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img src="https://via.placeholder.com/400x200" alt="Project 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold mb-2">Project 1</h3>
                <p className="text-gray-600 mb-4">Description of your first project</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;