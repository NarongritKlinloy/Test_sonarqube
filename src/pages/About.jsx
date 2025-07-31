import React, { useState, useEffect } from 'react';
import timelineItems from '../data/timeline-data';
import ParticlesBackground from '../components/ParticlesBackground';
import { FaUser, FaArrowUp, FaDownload, FaCode, FaDatabase, FaTools, FaServer } from 'react-icons/fa';
import { IoIosSchool } from "react-icons/io";
const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // scroll-to-top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // show/hide button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white scroll-smooth">
      {/* Header */}
      <div className="relative flex flex-col md:flex-row justify-center items-center md:items-start px-4 sm:px-8 md:px-16 lg:px-24 gap-12 mx-auto z-10">
        <div className="max-w-2xl my-5 sm:my-6 px-6 sm:px-16 flex flex-row items-center gap-4 text-center md:text-center">
          <FaUser className="text-gray-500 text-2xl sm:text-3xl md:text-3xl" />
          <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold text-gray-500">About Me</h1>
        </div>
      </div>

      {/* About Section https://img2.pic.in.th/pic/311471.jpg*/}
      <div className="relative flex flex-col md:flex-row my-10 justify-center items-center md:items-start px-4 sm:px-8 md:px-16 lg:px-24 gap-12 max-w-screen-xl mx-auto z-10">
        <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 md:flex">
          <div className="relative overflow-hidden rounded-[20px] shadow-2xl z-10 object-cover">
            <img
              src="https://img2.pic.in.th/pic/311471.jpg"
              alt="Boom"
              className="w-full h-full object-cover transform scale-100 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>

        <div className="max-w-2xl md:my-32 px-6 sm:px-16 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold text-gray-500 mb-4">Hi, I'm Boom 👋</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500">
            A passionate Full Stack Software Developer having experience of building web applications with JavaScript,
            ReactJs, NodeJs and some other cool libraries and frameworks.
          </p>
          <div className="pt-1">
            <a
              href="/Resume-.pdf"
              download
              className="inline-block bg-blue-500 text-gray-100 px-5 py-2 my-5 rounded-xl font-semibold text-lg shadow-md hover:bg-blue-300 transition duration-300"
            >
              Resume 
            </a>
          </div>

        </div>
      </div>

      {/* Education Timeline */}
      <div id="education" className="bg-gray-100 w-full py-8">

        <div className="absolute inset-0 pointer-events-none z-14 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-3xl animate-floating"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0.3 + Math.random() * 0.3,
              }}
            >
              {['🌸', '🐱', '🧸', '🎓', '📚'][i % 5]}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-10 my-6 ">
          <div className="flex items-center justify-center gap-2 mb-4">
            <IoIosSchool className="text-gray-500 text-3xl" />
            <h2 className="text-3xl font-semibold text-gray-700 text-2xl sm:text-4xl md:text-4xl font-bold">Education</h2>
          </div>


          <ul className="relative border-l-4 border-gray-600 pl-8 space-y-8 ">
            {timelineItems.map((item, index) => (
              <li key={index} className="relative">
                {/* Circle */}
                <div className={`absolute w-6 h-6 ${item.bg} rounded-full -left-[14px] top-1`}>
                  <div className="text-white text-center text-sm leading-6">{item.icon}</div>
                </div>

                {/* Content */}
                <div
                  className="ml-4 cursor-pointer group"
                  onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                >
                  <p className="text-xl text-gray-600 group-hover:text-gray-800 transition duration-300">
                    {item.year}
                  </p>
                  <p className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300">
                    {item.title}
                  </p>
                  <p className="text-gray-600 text-xl group-hover:text-gray-700 transition duration-300">
                    {item.school}
                  </p>
                  <p className="text-gray-600 text-xl group-hover:text-gray-700 transition duration-300">
                    GPX : {item.GPX}
                  </p>
                </div>

                {/* Images if clicked */}
                {activeIndex === index && item.images?.length > 0 && (
                  <div className="mt-4 ml-4 overflow-x-auto">
                    <div className="flex space-x-4 w-full max-w-full pb-2">
                      {item.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`Education ${index}-${imgIndex}`}
                          className="h-48 w-auto rounded-xl shadow-md flex-shrink-0"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>


        </div>
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


      {/* Skill Section */}
      <div id="skill" className="bg-gray-300 w-full py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <IoIosSchool className="text-gray-500 text-3xl" />
            <h2 className="text-4xl font-semibold text-gray-700">Skills</h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center text-gray-700">
            {/* Frontend */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
                <FaCode className="text-blue-500" /> Frontend
              </h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">HTML</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">CSS</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">React</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Tailwind CSS</span>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
                <FaDatabase className="text-green-600" /> Backend
              </h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Express</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">C#</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Python</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">MySQL</span>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
                <FaTools className="text-purple-600" /> Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Git</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">GitHub</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">VS Code</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Postman</span>
              </div>
            </div>

            {/* Deployment Tools */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
                <FaServer className="text-red-500" /> Development Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-purple-100 text-red-700 px-3 py-1 rounded-full">Netlify</span>
                <span className="bg-purple-100 text-red-700 px-3 py-1 rounded-full">Docker</span>
                <span className="bg-purple-100 text-red-700 px-3 py-1 rounded-full">Jenkins</span>
                <span className="bg-purple-100 text-red-700 px-3 py-1 rounded-full">GitLab</span>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  );
};

export default About;
