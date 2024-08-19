'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-blue-800 shadow-lg z-50">
      <motion.div
        className="flex items-center"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <div>
          <h1 className="text-xl font-bold text-white">SHARON LAWAL</h1>
        </div>
      </motion.div>

      {/* Hamburger Icon */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className={`lg:flex flex-col lg:flex-row lg:space-x-6 lg:items-center transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} fixed lg:static top-16 right-0 bg-blue-800 lg:bg-transparent lg:shadow-none shadow-lg lg:p-0 p-6 space-y-4 lg:space-y-0 rounded-3xl`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
          <li>
            <a
              href="#about"
              className="relative inline-block text-white font-medium hover:text-blue-300 group"
              style={{ paddingBottom: '2px' }}
            >
              About me
              <span
                className="absolute left-0 bottom-0 block bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"
                style={{
                  height: '2px',
                  width: '100%',
                  transformOrigin: 'bottom left',
                }}
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="relative inline-block text-white font-medium hover:text-blue-300 group"
              style={{ paddingBottom: '2px' }}
            >
              Experience
              <span
                className="absolute left-0 bottom-0 block bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"
                style={{
                  height: '2px',
                  width: '100%',
                  transformOrigin: 'bottom left',
                }}
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="relative inline-block text-white font-medium hover:text-blue-300 group"
              style={{ paddingBottom: '2px' }}
            >
              Skills
              <span
                className="absolute left-0 bottom-0 block bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"
                style={{
                  height: '2px',
                  width: '100%',
                  transformOrigin: 'bottom left',
                }}
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative inline-block text-white font-medium hover:text-blue-300 group"
              style={{ paddingBottom: '2px' }}
            >
              Projects
              <span
                className="absolute left-0 bottom-0 block bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"
                style={{
                  height: '2px',
                  width: '100%',
                  transformOrigin: 'bottom left',
                }}
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative inline-block text-white font-medium hover:text-blue-300 group"
              style={{ paddingBottom: '2px' }}
            >
              Contact me
              <span
                className="absolute left-0 bottom-0 block bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"
                style={{
                  height: '2px',
                  width: '100%',
                  transformOrigin: 'bottom left',
                }}
              ></span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
