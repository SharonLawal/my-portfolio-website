'use client'
import React, { createContext } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from '../assets/ProfilePic.jpg';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.p 
          className="text-lg font-medium text-purple-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Browse My Recent
        </motion.p>
        
        <motion.h1 
          className="text-4xl font-bold text-gray-900 mt-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Projects
        </motion.h1>
        
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image 
              src={profilePic}
              alt="Project 1" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Project Title</h3>
              <p className="text-gray-600 mt-2">
                A brief description of the project.
              </p>
            </div>
          </motion.div>
          {/* Repeat for more project items */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
