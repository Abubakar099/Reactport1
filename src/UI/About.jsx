import React from "react"
// import { Button } from "../component/button"
import { LuArrowDownRight } from "react-icons/lu"

export const About = () => {
  return (
    <section className="w-full text-gray-400 AboutColor body-font">
      <div className="w-full px-4 py-12 sm:py-24 relative">
        <div className="flex flex-col lg:flex-row items-center w-full">
          {/* Image Section - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-start">
            <img
              alt="feature"
              className="object-cover object-center rounded-full h-64 w-64 sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px] transition-all duration-300 hover:scale-105"
              src="https://intbrains.com/assets/images/Quality-Engineering.jpg"
            />
          </div>

          {/* Content Section - Full width on mobile, half on desktop */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-4 lg:px-8">
            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-normal text-white title-font mb-8 text-center lg:text-left transition-all duration-300 hover:tracking-wider">
              About <br className="hidden sm:block" />
              <span className="inline-block">me</span>
              <LuArrowDownRight className="text-blue-500 inline-block ml-2 transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1 animate-bounce" />
            </h2>

            <div className="w-full">
              <p className="text-xs mb-6 leading-relaxed text-gray-300 text-center lg:text-left max-w-2xl lg:max-w-none">
                Description of the developer's biography and sit amet consectetur. Mattis in dui euismod sit egestas ac
                sit. Mollis eu urna pulvinar mi felis consectetur. Dapibus vivamus ornare feugiat vitae arcu.
              </p>

              <div className="flex justify-center lg:justify-start space-x-8 sm:space-x-16 text-gray-100 mb-8">
                <div className="text-center group">
                  <h3 className="text-4xl sm:text-5xl font-semibold transition-all duration-300 group-hover:scale-110">
                    10<span className="text-blue-500 font-semibold animate-spin">+ </span>
                  </h3>
                  <p className="text-xs mt-2">Project Complete</p>
                </div>

                <div className="text-center group">
                  <h3 className="text-4xl sm:text-5xl font-semibold transition-all duration-300 group-hover:scale-110">
                    2<span className="text-blue-500 font-semibold">+ </span>
                  </h3>
                  <p className="text-xs mt-2">Years Experience</p>
                </div>
              </div>

              <div className="w-32 text-center ml-6 rounded-full  sm:w-40 md:w-48 lg:w-56  lg:mr-5"> 
  <button className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-gray-900 hover:text-white hover:border-white hover:border-2 transition-colors duration-200 "
  >Details</button>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

