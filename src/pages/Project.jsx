import React, { useState, useEffect } from 'react';
import { FaLaptopCode, FaArrowUp } from 'react-icons/fa';
import Projects from '../data/project-data';
import ParticlesBackground from '../components/ParticlesBackground';


const Project = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div className="relative w-full min-h-screen text-white scroll-smooth">
      <ParticlesBackground />
      {/* Header Section */}
      <div className="relative flex flex-col my-10 md:flex-row justify-center items-center md:items-start px-4 sm:px-8 md:px-16 lg:px-24 gap-12 mx-auto z-10">
        <div className="flex flex-row items-center gap-4">
          <FaLaptopCode className="text-gray-600 text-3xl" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-700">Project</h1>
        </div>
      </div>

      {/* Loop Through All Sections */}
      <div className="w-full max-w-screen-xl mx-auto space-y-24 px-6 sm:px-10 md:px-16">
        {Projects.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-8">
            {/* Project Title and Subtitle */}
            <div className="flex flex-col gap-2 ">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 underline underline-offset-4">
                {section.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base text-gray-500">
                {section.sectionSubtitle}
              </p>
            </div>

            {/* Loop Through Projects */}
            <div className="space-y-14">
              {section.projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                    } items-center md:items-start gap-8`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center
                border-2 border-gray-200 rounded-xl
                bg-white bg-opacity-90
                p-6
                shadow-lg
                transition-transform transform hover:scale-105">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                      {project.title}
                    </h3>
                    <div className="space-y-3 mb-4">
                      {project.description.map((desc, i) => (
                        <p key={i} className="text-sm sm:text-base text-gray-600">
                          {desc}
                        </p>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-md hover:bg-blue-700 transition duration-300 w-fit"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 3h7m0 0v7m0-7L10 14"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12v7a2 2 0 002 2h7"
                        />
                      </svg>
                      View Project
                    </a>
                  </div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

    </div>
  );
};

export default Project;
