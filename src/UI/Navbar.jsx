
// or via CommonJS

import { NavLink } from "react-router-dom";
import {  useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
// import NET from "vanta/dist/vanta.Net.min";
// import * as THREE from 'three';
import { Button } from "../component/button";

// import { Button2 } from "../component/Button2";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleSide = () => {
    setOpen(!open);
  };

// ******************
// Vanta 
// ******************


// Vanta end 
 
  return (
    <>
      <section className=" text-white body-font   MainColor">
        <header className="w-full md:w-4/5 mx-auto text-gray-400  font-Poppins  md:rounded-full">
        <div className="container mx-auto flex flex-wrap p-3 items-center justify-around">
  <NavLink to="/" className="flex title-font font-medium items-center text-white"> {/* NavLink for the title */}
    <span className="text-2xl animate-fade-in">Portfolio</span>
  </NavLink>
  <nav className="hidden md:flex flex-wrap items-center text-base justify-end">
    <NavLink 
      to="/" 
      className={({ isActive }) => `mr-5  ${isActive ? 'text-blue-500' : ''}`} // Active class styling
    >
      Home
    </NavLink>
    <NavLink 
      to="/project" 
      className={({ isActive }) => `mr-5  ${isActive ? 'text-blue-500' : ''}`} // Active class styling
    >
      Project
    </NavLink>
    <NavLink 
      to="/blog" 
      className={({ isActive }) => `mr-5  ${isActive ? 'text-blue-500' : ''}`} // Active class styling
    >
      Blog
    </NavLink>
    <NavLink 
      to="/contact" 
      className={({ isActive }) => `mr-5  ${isActive ? 'text-blue-500' : ''}`} // Active class styling
    >
      Contact
    </NavLink>
    <NavLink 
      to="/hire" 
      className={({ isActive }) => `mr-5  ${isActive ? 'text-blue-500' : ''}`} // Active class styling
>
      Hire Me
    </NavLink>
    <Button />
  </nav>
</div>
          <button className="md:hidden text-white " aria-label="Toggle menu">
            <IoReorderThreeSharp
              className=" text-3xl inline-flex absolute top-3 left-80"
              onClick={handleSide}
            />
          </button>
        </header>

        {/* Sidebar for mobile */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-64 bg-black transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex flex-col h-full ">
            <div className="flex justify-between items-center p-4 border-gray-700">
              <h2 className="text-white text-2xl font-semibold">ABUBAKAR</h2>
              <button
                onClick={handleSide}
                className="text-white"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto">
              <ul className="text-white text-lg">
                <li className="border-b border-gray-700">
                  <NavLink
                    to="/"
                    className="block py-4 px-6 hover:bg-gray-800"
                    onClick={handleSide}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="border-b border-gray-700">
                  <NavLink
                    to="/project"
                    className="block py-4 px-6 hover:bg-gray-800"
                    onClick={handleSide}
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="border-b border-gray-700">
                  <NavLink
                    to="/blog"
                    className="block py-4 px-6 hover:bg-gray-800"
                    onClick={handleSide}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="border-b border-gray-700">
                  <NavLink
                    to="/contact"
                    className="block py-4 px-6 hover:bg-gray-800"
                    onClick={handleSide}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="p-4 inline-flex">
              <Button />
            </div>
          </div>
        </div>

      {/***********************
             sidebar end 
      ********************** */}

        {/* main section  */}
        {/* main  */}
        {/* <section className=" text-white body-font MainColor "> */}

        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28 flex flex-col md:flex-row items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
            <h1 className="title-font text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-10 font-medium text-gray-700">
              FULL-STACK WEB DEVELOPER
            </h1>
            <p className="mb-3 bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent leading-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold animate-pulse">
              MUHAMMAD ABUBAKAR 
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start">
              <span className="hidden sm:block border-gray-600 border-l-2 mr-3 h-full"></span>
              <p className="text-sm md:text-base lg:text-lg tracking-wider leading-relaxed bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent py-2 max-w-md">
                I&apos;m a full-stack web developer and I work onsite from Pakistan
              </p>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mt-10 md:mt-0 relative overflow-hidden group">
  <img
    className="w-full min-h-96  object-cover object-center rounded-lg bg-transparent  h-full cursor-pointer transform transition-transform duration-500 group-hover:scale-105"
    alt="hero"
    src="https://img.freepik.com/premium-photo/portrait-young-man-sunglass-isolated-gradient-violet-color-background_231208-14362.jpg?w=900"
  />
  <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
    {/* <Button2 /> */}
  </div>
</div>
        </div>
      </section>
    </>
  );
};
