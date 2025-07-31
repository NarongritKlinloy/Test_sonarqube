""// src/pages/Home.jsx
import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative h-screen w-full flex items-center content-center text-white">
      <ParticlesBackground />

      {/* Main Container */}
      <div className="relative h-screen w-full flex flex-col md:flex-row items-center justify-center text-white px-4 sm:px-8 md:px-16 lg:px-24 space-y-10 md:space-y-0 md:space-x-10">
        
        {/* Text Detail */}
        <div className="flex flex-col justify-start items-start space-y-5 md:flex-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 drop-shadow-lg">
            Hi!
          </h1>
          <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-lg">
            I'm Boom
          </h1>
          <h2 className="text-3xl text-gray-800 font-medium">
            I am Into&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 drop-shadow-lg">
              <Typewriter
                words={['Full Stack Developer', 'Backend Developer', 'Frontend Developer']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-6 pt-4 text-2xl text-gray-700">
            <a href="https://www.linkedin.com/in/narongrit-klinloy-84a0022a3/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a href="https://github.com/Narongrit2544" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-black transition-colors duration-300" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100009976171760&locale=th_TH" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a href="https://www.instagram.com/nk_bx.time/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition-colors duration-300" />
            </a>
            <a href="https://www.tiktok.com/@nk_bx.time?_t=ZS-8wR8fu73VSb&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="hover:text-black transition-colors duration-300" />
            </a>
          </div>

          {/* About Me Button */}
          <div className="pt-1">
            <a
              href="/about"
              className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-gray-300 transition duration-300"
            >
              About Me
            </a>
          </div>

        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:flex-1 w-full max-w-sm md:max-w-md">
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-lg group">
            <img
              src="https://img2.pic.in.th/pic/311472.jpg"
              alt="image Boom"
              className="w-full h-full object-cover transform scale-125 group-hover:scale-150 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;
""
