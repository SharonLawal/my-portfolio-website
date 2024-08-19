'use client';
import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/ProfilePic1.jpg'; // Update with correct image path
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white justify-between mx-auto py-12 px-6 lg:px-24 mt-8">
      <div className="text-center lg:text-left max-w-md lg:max-w-xl">
        <motion.p
          className="text-xl lg:text-2xl font-medium text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Hi 👋, I’m a
        </motion.p>
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-gray-900 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Software Developer
        </motion.h1>
        <motion.button
          className="mt-6 px-8 py-3 bg-blue-900 text-white font-semibold rounded-full shadow-lg hover:bg-blue-950 transition duration-300"
          onClick={() => window.location.href = '#contact'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact me
        </motion.button>
      </div>

      <motion.div
        className="mt-12 lg:mt-0 h-72 w-72 lg:h-96 lg:w-96 rounded-lg overflow-hidden flex items-center justify-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Image 
          src={profilePic} 
          alt="Profile Picture" 
          className="h-full w-full rounded-full object-cover"
          style={{ objectPosition: 'top' }} // Adjusts the image position within its container
        />
      </motion.div>

    </div>
  );
};

export default Profile;
