import React from "react";

import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { LuArrowDownLeft } from "react-icons/lu";

export const Followme = () => {
  const socialLinks = [
    { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
    { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
    { label: "GitHub", href: "https://github.com", icon: FaGithub },
  ];

  return (
    <div className="followme relative min-h-screen overflow-hidden flex justify-around">
      {/* Background gradient */}
      <div className="absolute inset-0 " />

      {/* Main content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Hero content */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly h-screen ">
          {/* Left side */}
          <div className="w-full lg:w-1/2 space-y-12">
            <h2 className="text-6xl sm:text-7xl  md:text-9xl lg:text-8xl text-center md:text-left font-bold leading-tight transition-all duration-500 hover:tracking-wider bg-gradient-to-r from-slate-900 to-slate-400 bg-clip-text text-transparent">
              Follow me
            </h2>

            {/* Social icons */}
            <div className="flex space-x-6 ">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative p-4 bg-gray-900/50 rounded-full transition-all duration-300 hover:bg-gray-800"
                >
                  <social.icon className="w-6 h-6 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Arrow icon */}
            <LuArrowDownLeft className="w-36 h-36 text-blue-500 animate-bounce" />
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2  lg:mt-0 group ">
  <div className="relative overflow-hidden w-full aspect-video  max-w-2xl mx-auto">
    <img src="https://img.freepik.com/premium-photo/portrait-young-man-sunglass-isolated-gradient-violet-color-background_231208-14362.jpg?w=900" alt="Portrait with neon lighting"
      className="object-cover w-full h-full cursor-pointer transform transition-transform duration-500 group-hover:scale-105"/>
    {/* Overlay gradients for the neon effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

{/* <div class="relative overflow-hidden w-72 h-48 cursor-zoom-in m-4">
<img src="image3.jpg" alt="Image 3" class="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110">
</div> */}