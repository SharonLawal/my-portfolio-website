'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="p-8">
      <motion.p
        className="text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Get in Touch
      </motion.p>
      <motion.h1
        className="text-3xl font-bold mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Contact Me
      </motion.h1>

      <div className="flex flex-col space-y-8 mt-4">
        <motion.div
          className="flex flex-col space-y-4"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <div className="flex items-center space-x-4">
            <i className="fa-solid fa-envelope text-2xl"></i>
            <a
              className="text-blue-600"
              href="mailto:sharonayolawal@gmail.com"
              alt="Email icon"
            >
              sharonayolawal@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <i className="fa-brands fa-linkedin text-2xl"></i>
            <p>
              <a
                className="text-blue-600"
                href="https://www.linkedin.com/in/sharon-lawal-9b7289261"
                alt="LinkedIn icon"
              >
                Sharon Lawal
              </a>
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <i className="fa-brands fa-x-twitter text-2xl"></i>
            <p>
              <a
                className="text-blue-600"
                href="https://twitter.com/thistechbabe"
                alt="Twitter icon"
              >
                @thistechbabe
              </a>
            </p>
          </div>
        </motion.div>

        <motion.form
          className="flex flex-col space-y-4"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <input
            type="email"
            placeholder="Enter email address"
            className="p-2 border border-gray-400 rounded"
          />
          <textarea
            placeholder="Enter message"
            className="p-2 border border-gray-400 rounded h-32"
          ></textarea>
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white rounded"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
