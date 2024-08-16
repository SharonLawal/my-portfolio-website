'use client'
import React from 'react';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="text-center">
        <p className="text-lg font-semibold text-purple-600">Get To Know More</p>
        <h1 className="text-4xl font-bold text-gray-800 mt-4">About Me</h1>
      </div>

      <div className="mt-10 flex flex-col lg:flex-row lg:justify-center lg:space-x-8">
        <div className="lg:w-1/2 flex justify-center">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <div className="text-purple-600 text-4xl">
                <FaCertificate />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Experience</h3>
                <p className="text-gray-600">
                  1+ years <br />
                  Frontend Development
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-purple-600 text-4xl">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Education</h3>
                <p className="text-gray-600">
                  B.Sc. Bachelor's Degree (In Progress)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm Sharon Lawal, a proactive Frontend Developer with a year of practical experience. My expertise spans HTML, CSS, JavaScript, ReactJS, and Tailwind CSS, focusing on crafting compelling and adaptable user interfaces. I'm passionate about continuous learning, currently extending my skills into backend development to further enhance my capabilities in creating intuitive and seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
