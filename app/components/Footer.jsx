'use client';
import React from 'react';
import { FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsTwitterX } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants for the icons
  const iconVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: { scale: 1.3, opacity: 1, rotate: 15 },
    tap: { scale: 1.1, rotate: 0 },
  };

  // Animation for footer entrance
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="relative text-white text-center bg-cover bg-center bg-blue-800 py-4"
    >
      <div className="flex justify-center space-x-10 mb-4 text-white">
        <motion.a
          href="https://www.linkedin.com/in/sharon-lawal-9b7289261/"
          className="text-3xl"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="tel:09134180175"
          className="text-3xl"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <FaPhoneAlt />
        </motion.a>
        <motion.a
          href="https://x.com/thistechbabe"
          className="text-3xl"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <BsTwitterX />
        </motion.a>
        <motion.a
          href="mailto:sharonayolawal@gmail.com"
          className="text-3xl"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <SiGmail />
        </motion.a>
      </div>
      <p>&copy; 2024 Sharon Lawal. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
