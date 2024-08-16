'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white text-black shadow">
      <motion.div
        className="text-2xl font-bold"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        John Doe
      </motion.div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
