'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-5 bg-transparent">
      <div className="text-2xl font-bold">MyPortfolio</div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:static bg-purple-700 md:bg-transparent w-full left-0 md:w-auto`}>
        <li className="p-3"><a href="#profile">Profile</a></li>
        <li className="p-3"><a href="#about">About</a></li>
        <li className="p-3"><a href="#projects">Projects</a></li>
        <li className="p-3"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
