'use client';
import React from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "RecipeRift - Recipe Recommender",
    description: "Created a recipe recommender web app using an external API. Designed the login page, personalized home page, and recipe recommendation page with HTML, CSS, and JavaScript. Integrated API calls to fetch and display recipes and implemented a responsive UI for improved user experience.",
    githubLink: "https://github.com/SharonLawal/RecipeRift",
    liveLink: "https://recipe-rift.vercel.app/"
  },
  {
    title: "Solex - Innovative Footwear Brand",
    description: "Designed and developed a responsive e-commerce website using React and Tailwind CSS to showcase the latest Solex arrivals.",
    githubLink: "https://github.com/SharonLawal/Solex",
    liveLink: "https://solex-phzuts299-sharon-lawals-projects.vercel.app/"
  },
  {
    title: "NextList - To-Do List App",
    description: "Developed the front-end for a dynamic to-do list app, featuring a user-friendly interface with a login page, personalized home page, and interactive to-do list. Ensured responsiveness across devices using HTML, CSS, and JavaScript.",
    githubLink: "https://github.com/SharonLawal/NextList",
    liveLink: "https://sharonlawal.github.io/NextList/"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my skills and projects.",
    githubLink: "https://github.com/SharonLawal/my-portfolio-website",
    liveLink: "https://sharonlawal.me/"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.p 
          className="text-lg font-medium text-purple-500 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Browse My Recent
        </motion.p>
        
        <motion.h1 
          className="text-4xl font-bold text-white text-center mt-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Projects
        </motion.h1>
        
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ height: '100%' }}
            >
              <div className="p-6 flex-grow flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white text-center">{project.title}</h3>
                <p className="text-gray-400 mt-4 text-center">
                  {project.description}
                </p>
              </div>
              <div className="p-6 mt-auto flex justify-between">
                <a 
                  href={project.githubLink} 
                  className="text-blue-500 hover:text-blue-400"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href={project.liveLink} 
                  className="text-blue-500 hover:text-blue-400"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
