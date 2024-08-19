'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaMobileAlt, FaReact, FaRocket, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiTailwindcss, SiVisualstudiocode, SiTypescript, SiNotion, SiTrello, SiMicrosoftazure, SiNextdotjs } from 'react-icons/si';

const technologies = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Visual Studio Code', icon: <SiVisualstudiocode className="text-blue-500" /> },
  { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
  { name: 'Azure', icon: <SiMicrosoftazure className="text-blue-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-700" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-900" /> },
  { name: 'Notion', icon: <SiNotion className="text-blue-500" /> },
  { name: 'Trello', icon: <SiTrello className="text-blue-500" /> },
  { name: 'Responsive Web Designs', icon: <FaMobileAlt className="text-blue-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800" /> }, // Added Next.js
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-xl font-medium text-purple-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Skills
        </motion.p>
        <motion.h1
          className="text-4xl font-bold text-gray-900 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Technologies I Use
        </motion.h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center space-x-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
