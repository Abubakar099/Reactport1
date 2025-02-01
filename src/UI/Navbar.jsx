// or via CommonJS

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
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
      {/* <section className=" text-white body-font   MainColor"> */}
        <header className="w-full md:w-full mx-auto text-gray-400  MainColor font-Poppins ">
          <div className="container mx-auto flex flex-wrap p-3 items-center justify-around">
            <NavLink
              to="/"
              className="flex title-font font-medium items-center text-white"
            >
              {" "}
              {/* NavLink for the title */}
              <span className="text-3xl animate-fade-in">Portfolio</span>
            </NavLink>
            <nav className="hidden md:flex flex-wrap items-center text-base justify-end">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `mr-5  ${isActive ? "text-blue-500" : ""}`
                } // Active class styling
              >
                Home
              </NavLink>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  `mr-5  ${isActive ? "text-blue-500" : ""}`
                } // Active class styling
              >
                Project
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `mr-5  ${isActive ? "text-blue-500" : ""}`
                } // Active class styling
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `mr-5  ${isActive ? "text-blue-500" : ""}`
                } // Active class styling
              >
                Contact
              </NavLink>
              <NavLink
                to="/hire"
                className={({ isActive }) =>
                  `mr-5  ${isActive ? "text-blue-500" : ""}`
                } // Active class styling
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

    </>
  );
};
