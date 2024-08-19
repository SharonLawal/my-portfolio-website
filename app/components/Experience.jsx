'use client';
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Web Developer Intern',
    company: 'DavTech',
    location: 'Remote',
    duration: 'July 2024 – Present',
    description: `
      Worked on both frontend and backend development, integrating Firebase for database management. Collaborated with a team to enhance web application functionality and performance, utilizing GitHub for version control.
    `,
  },
  {
    title: 'Web Developer Intern',
    company: 'TechnoHacks EduTech Official',
    location: 'Remote',
    duration: 'Jan 2024 – Feb 2024',
    description: `
      Developed and customized websites using HTML, CSS, and JavaScript. Managed and delivered multiple web projects within strict timelines, improving overall user experience.
    `,
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100 relative">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-xl font-medium text-purple-600 uppercase tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Experience
        </motion.p>
        <motion.h1
          className="text-4xl font-bold text-gray-900 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          My Professional Journey
        </motion.h1>

        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-600"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center w-full relative flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Circle node on the line, hidden on mobile/tablet */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-purple-600 w-4 h-4 rounded-full z-10 md:top-1/2 md:-translate-y-1/2"></div>

                {/* Experience Box */}
                <motion.div
                  className="relative bg-white shadow-lg rounded-lg p-6 border-2 border-purple-400 w-full md:w-5/12 transform transition-transform duration-500 hover:scale-105"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h2 className="text-2xl font-semibold text-gray-800">{exp.title}</h2>
                  <p className="text-gray-600 font-medium">{exp.company}</p>
                  <p className="text-gray-500">{exp.location}</p>
                  <p className="text-gray-400">{exp.duration}</p>
                  <p className="mt-2 text-gray-700 whitespace-pre-line">{exp.description}</p>
                </motion.div>

                {/* Circle node between the boxes, visible on mobile/tablet */}
                {index < experiences.length - 1 && (
                  <div className="block md:hidden my-4 bg-purple-600 w-4 h-4 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
