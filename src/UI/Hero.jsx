import React, {useEffect, useRef} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
const HeroRef = useRef(null)
const HeroElem = gsap.utils.selector(HeroRef)
  
useEffect(() => {
  gsap.fromTo(
    HeroElem(".abubakar"), {x: "-120% ", opacity: 90}, {x: 0, opacity: 1, duration : 1.9, delay: 0.5}
  )
}, [ HeroElem])


  return (
    <>
    
        {/* main section  */}
        {/* main  */}
        <section className=" text-white body-font HeroColor ">
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28 flex flex-col md:flex-row items-center">
          <div ref={HeroRef} className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
            <h1 className="title-font text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-10 font-medium text-gray-700">
              FULL-STACK WEB DEVELOPER
            </h1>
            <p  className="abubakar mb-3 bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent leading-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold animate-pulse">
              MUHAMMAD ABUBAKAR
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start">
              <span className="hidden sm:block mr-1 h-full"></span>
              <p className="text-sm md:text-left lg:text-lg tracking-tighter leading-relaxed bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent pr-3 pt-7 max-w-md">
                I&apos;m a full-stack web developer and I work onsite from
                Pakistan
              </p>
            </div>
          </div>
          <div  className=" lg:max-w-lg lg:w-full md:w-1/2 w-full mt-10 md:mt-0 relative overflow-hidden group">
            <img
              className=" w-full min-h-96  object-cover object-center rounded-lg bg-transparent  h-full cursor-pointer transform transition-transform duration-500 group-hover:scale-105"
              alt="hero"
              src="https://img.freepik.com/premium-photo/portrait-young-man-sunglass-isolated-gradient-violet-color-background_231208-14362.jpg?w=900"
            />
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
              {/* <Button2 /> */}
            </div>
          </div>
        </div>
        {/* ******************************* */}
        {/* INFINITE LOOP  */}

        <div className="relative w-full overflow-hidden border-y-2 border-gray-600 ">
          {/* Background image overlay */}

          {/* Scrolling container */}
          <div className="relative flex">

            {/* First set of items */}
            <div className="animate-scroll flex items-center whitespace-nowrap py-12">
              <span className="mx-8 text-3xl md:text-5xl font-light text-gray-300 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                BACK END
              </span>
              <span className="mx-8 text-3xl md:text-5xl font-light text-gray-300 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                WEBFLOW
              </span>
              <span className="mx-8 text-3xl md:text-5xl font-light text-gray-300 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                FULL STACK
              </span>
              <span className="mx-8 text-3xl md:text-5xl font-light text-gray-300 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                FRONT END
              </span>
            </div>

            {/* Duplicate set for seamless scrolling */}
            <div className="animate-scroll flex items-center whitespace-nowrap py-8">
              <span className="mx-8 text-3xl md:text-5xl font-light text-gray-300 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                BACK END
              </span>
              <span className="mx-8 text-3xl md:text-5xl font-light text-gray-300 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                WEBFLOW
              </span>
              <span className="mx-8 text-3xl md:text-5xl font-light text-gray-300 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                FULL STACK
              </span>
              <span className="mx-8 text-3xl md:text-5xl font-light text-gray-300 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
                FRONT END
              </span>
            </div>
            
          </div>
        </div>

        {/* END  */}
      </section>
    </>
  )
}
