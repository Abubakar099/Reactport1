import React from "react";
import { useState } from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { IoLogoAngular, IoLogoCss3 } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { DiRuby } from "react-icons/di";

// import { IoLogoAngular } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";

export const Skill = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  return (
    <>
     <section className="SkillColor text-gray-300 py-16">
  <h2 className="text-7xl flex justify-center font-lg mb-20">
    My Skills
    <LuArrowDownRight className="text-purple-700 font-thin inline-block" />
  </h2>

  <div className="flex flex-col md:flex-row gap-9">
    <div className="line1 flex flex-col">
      <div className="flex items-center p-8">
        <span className="text-white mr-2">
          <IoLogoCss3 />
        </span>
        <span className="text-white">CSS</span>

        <div className="ml-20">
          <div className="flex">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ml-4 ${
                  index < rating ? "bg-purple-500" : "bg-gray-400"
                }`}
                onClick={() => handleRatingClick(index)}
              />
            ))}
          </div>
        </div>
      </div>


      <div className="flex items-center p-8">
        <span className="text-white mr-2">
        <RiTailwindCssFill />
        </span>
        <span className="text-white">Tailwind</span>

        <div className="ml-20">
          <div className="flex">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ml-4 ${
                  index < rating ? "bg-purple-500" : "bg-gray-400"
                }`}
                onClick={() => handleRatingClick(index)}
              />
            ))}
          </div>
        </div>
      </div>


      <div className="flex items-center p-8">
        <span className="text-white mr-2">
        <FaNodeJs />

        </span>
        <span className="text-white">Node js</span>

        <div className="ml-20">
          <div className="flex">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ml-4 ${
                  index < rating ? "bg-purple-500" : "bg-gray-400"
                }`}
                onClick={() => handleRatingClick(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center p-8">
        <span className="text-white mr-2">
        <DiRuby />
        </span>
        <span className="text-white">Ruby</span>

        <div className="ml-20">
          <div className="flex">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ml-4 ${
                  index < rating ? "bg-purple-500" : "bg-gray-400"
                }`}
                onClick={() => handleRatingClick(index)}
              />
            ))}
          </div>
        </div>
      </div>


      {/* ... other skill sections in line1 ... */}
    </div>

    <div className="line2 flex flex-col">
      <div className="flex items-center p-8">
        <span className="text-white mr-2">
          <IoLogoJavascript />
        </span>
        <span className="text-white">Javascript</span>

        <div className="ml-20">
          <div className="flex">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ml-4 ${
                  index < rating ? "bg-purple-500" : "bg-gray-400"
                }`}
                onClick={() => handleRatingClick(index)}
              />
            ))}
          </div>
        </div>
      </div>



      <div className="flex items-center p-8">
        <span className="text-white mr-2">
        <FaLaravel />

        </span>
        <span className="text-white">Laravel</span>

        <div className="ml-20">
          <div className="flex">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ml-4 ${
                  index < rating ? "bg-purple-500" : "bg-gray-400"
                }`}
                onClick={() => handleRatingClick(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center p-8">
        <span className="text-white mr-2">
          <FaReact />
        </span>
        <span className="text-white">React</span>

        <div className="ml-20">
          <div className="flex">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ml-4 ${
                  index < rating ? "bg-purple-500" : "bg-gray-400"
                }`}
                onClick={() => handleRatingClick(index)}
              />
            ))}
          </div>
        </div>
      </div>


      <div className="flex items-center p-8">
        <span className="text-white mr-2">
          <IoLogoAngular />
        </span>
        <span className="text-white">Angular</span>

        <div className="ml-20">
          <div className="flex">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ml-4 ${
                  index < rating ? "bg-purple-500" : "bg-gray-400"
                }`}
                onClick={() => handleRatingClick(index)}
              />
            ))}
          </div>
        </div>
      </div>


      {/* ... other skill sections in line2 ... */}
    </div>
  </div>
</section>
    </>
  );
};
