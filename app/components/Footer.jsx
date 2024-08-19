'use client';
import React from 'react';
import Image from 'next/image';
import wavyBackground from '../assets/wavyBackground.png';

const Footer = () => {
  return (
    <footer className="relative text-white text-center bg-black ">
      {/* Wavy Background */}
      <div className="absolute inset-0 h-96 w-full z-0">
        <Image 
          src={wavyBackground} 
          layout="fill"
          objectFit="cover" 
          alt="Wavy background" 
          className="object-cover"
        />
      </div>

      <div className="relative p-5 z-10">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/sharon-lawal-9b7289261/" className="text-2xl">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="tel:09134180175" className="text-2xl">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://x.com/thistechbabe" className="text-2xl">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="mailto:sharonayolawal@gmail.com" className="text-2xl">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <p>&copy; 2024 Sharon Lawal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
