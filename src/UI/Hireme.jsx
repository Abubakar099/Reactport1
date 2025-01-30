import React from 'react'
import { useState } from 'react';
export const Hireme = () => {

  // budget 
  const [activeIndex, setActiveIndex] = useState(1);

  const budgets = [
    { range: "Up to 2K" },
    { range: "2K-5K" },
    { range: "5K-10K" },
    { range: "More then 10K" },
  ];

  return (
    <>
    {/* Services  section   */}
    
    <div className="min-h-screen bg-black px-4 py-16 sm:px-6 lg:px-8 relative">

{/* Services  */}

  <section className="min-h-screen bg-black px-4 py-16 sm:px-6 lg:px-8">
 <div className="max-w-7xl mx-auto">
 {/* Hire Me Title  */}
  <h1 className="text-5xl sm:text-6xl md:text-7xl text-white font-light mb-20 transition-all duration-300 hover:tracking-wider">
    Hire Me
  </h1>

  {/* Services Section */}
   <div className="mb-24">
     <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-light mb-8 transition-all duration-300 hover:tracking-wider">
       Services
     </h2>
     <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-4">
       {[
        { title: "Website Development", active: true },
        { title: "iOS Development" },
        { title: "Android Development" },
        { title: "Backend Development" },
        { title: "Webflow Development" },
      ].map((service, index) => (
        <div
          key={index}
          className={`group px-4 py-6 rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 
        ${
          service.active
            ? "bg-blue-600"
            : "bg-gray-900 hover:bg-purple-600/10"
        }`}
        >
          <h3 className="text-white text-lg font-light text-center transition-all duration-300 group-hover:translate-y-[-2px]">
            {service.title}
          </h3>
        </div>
      ))}
    </div>
  </div>

  {/* Budget Section */}
  <div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-light mb-8 transition-all duration-300 hover:tracking-wider">
        Budget in USD
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {budgets.map((budget, index) => (
          <div
            key={index}
            className={`group p-6 rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 
            ${
              activeIndex === index
                ? "bg-blue-600 text-white"
                : "bg-transparent hover:bg-purple-600/10 text-gray-300 hover:text-white"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <h3 className="text-lg font-light text-center transition-all duration-300 group-hover:translate-y-[-2px]">
              {budget.range}
            </h3>
          </div>
        ))}
      </div>
    </div>
</div>
</section> 
</div>

        </>
      )
    }
 