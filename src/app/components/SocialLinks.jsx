'use client'
import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="nav-links-container">
        <div className="nav-links">
          <a href="#about" style={{ '--i': 1 }}>About</a>
          <a href="#technologies" style={{ '--i': 2 }}>Technologies</a>
          <a href="#projects" style={{ '--i': 3 }}>Projects</a>
          <a href="#contact" style={{ '--i': 4 }}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
