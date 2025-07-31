import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    'relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
        {/* Group Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src="https://img2.pic.in.th/pic/311472.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full border-2 border-blue-500 shadow-sm"
          />
          <p className="text-gray-700 font-medium font-nunito">Portfoilo Website</p>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <ul className="hidden lg:flex gap-6 text-gray-700 font-medium font-nunito">
          {['/', '/about', '/project', '/contract'].map((path, index) => {
            const labels = ['Home', 'About', 'Project', 'Contract'];
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `${linkClass} ${isActive ? 'after:w-full text-blue-600 font-bold' : 'after:w-0 hover:after:w-full'}`
                  }
                >
                  {labels[index]}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-2 px-4 sm:px-6">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium font-nunito items-center">
            {['/', '/about', '/project',  '/contract'].map((path, index) => {
              const labels = ['Home', 'About', 'Project', 'Contract'];
              return (
                <li key={path} className="w-full text-center">
                  <NavLink
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `relative inline-block pb-1
                 ${isActive ? 'text-blue-600 font-bold after:w-full' : 'text-gray-700'} 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                 after:bg-blue-600 after:transition-all after:duration-300 
                 after:w-0 hover:after:w-full`
                    }
                  >
                    {labels[index]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
