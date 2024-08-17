'use client'
import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/ProfilePic.jpg'; // Update with correct image path
import Image from 'next/image';


const Profile = () => {
  return (
    <div
      id="profile"
      className="flex flex-col lg:flex-row justify-center items-center mx-auto gap-20 max-h-500 h-auto animate-scaleIn z-10 p-6"
    >
      <motion.div
        className="h-96 w-96 rounded-full overflow-hidden flex items-center justify-center border-4 border-rose-950"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image src={profilePic} alt="Profile Picture" className="h-full w-full object-cover" />
      </motion.div>

      <motion.div
        className="text-center lg:text-left pt-5 animate-slideUp"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.p
          className="text-lg font-semibold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          className="text-4xl font-bold py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Sharon Lawal
        </motion.h1>
        <motion.p
          className="text-xl mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Frontend Developer
        </motion.p>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-5 mt-5">
          <motion.button
            className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-green-500 transform transition-transform duration-300"
            onClick={() => window.open('https://drive.google.com/file/d/11cNY4bO6S4JKjGUuo0JMTs_u9WZ2qNpy/view?usp=sharing')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
          <motion.button
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-500 transform transition-transform duration-300"
            onClick={() => window.location.href = '#contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Info
          </motion.button>
        </div>

        <motion.div
          id="socials-container"
          className="flex justify-center lg:justify-start gap-5 mt-5 text-black text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <a href="https://www.linkedin.com/in/sharon-lawal-9b7289261" className="hover:text-blue-600">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/SharonLawal" className="hover:text-gray-800">
            <i className="fab fa-github"></i>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
