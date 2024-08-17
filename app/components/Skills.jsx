'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const technologies = [
  { name: 'HTML', icon: <FaCheckCircle /> },
  { name: 'CSS', icon: <FaCheckCircle /> },
  { name: 'JavaScript', icon: <FaCheckCircle /> },
  { name: 'Git', icon: <FaCheckCircle /> },
  { name: 'GitHub', icon: <FaCheckCircle /> },
  { name: 'Responsive Web Designs', icon: <FaCheckCircle /> },
  { name: 'React', icon: <FaCheckCircle /> },
  { name: 'Tailwind CSS', icon: <FaCheckCircle /> },
];

const Skills = () => {
  return (
    <section id="technologies" className="p-8">
      <motion.p
        className="text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Explore
      </motion.p>
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Technologies I Use
      </motion.h1>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.h2
              className="text-2xl font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Frontend Development
            </motion.h2>
            <div className="mt-4">
              {technologies.map((tech, index) => (
                <motion.article
                  key={index}
                  className="flex items-center space-x-4 mb-4"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {tech.icon}
                  <h3 className="text-lg">{tech.name}</h3>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
