'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPaperPlane } from 'react-icons/fa';
import Illustration from '../assets/Illustartion.png';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-xl font-medium text-purple-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Get in Touch
        </motion.p>
        <motion.h1
          className="text-4xl font-bold text-gray-900 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Contact Me
        </motion.h1>
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Illustration */}
        <motion.div
          className="w-full lg:w-1/2 mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src={Illustration} 
            alt="Contact Illustration" 
            className="w-full h-auto" 
          />
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          className="w-full lg:w-1/2 p-8 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form className="w-full max-w-md flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter email address"
              className="p-3 border shadow-lg text-black rounded focus:outline-none focus:border-indigo-500"
            />
            <textarea
              placeholder="Enter message"
              className="p-3 border shadow-lg text-black rounded h-32 focus:outline-none focus:border-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="p-3 bg-blue-900 w-1/2 shadow-lg text-white rounded hover:bg-blue-950 transition duration-300 flex items-center justify-center space-x-2 self-center"
            >
              <span>Send Message</span>
              <FaPaperPlane />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
