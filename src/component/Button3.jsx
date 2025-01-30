import React from 'react';
import { FiArrowDownRight } from "react-icons/fi";

export const Button3 = () => {
  return (
    <>
    <div className="flex justify-center mt-12">
            <button className="group px-6 py-3 bg-blue-500 rounded-full text-white font-medium flex items-center gap-2 hover:bg-purple-700 transition-colors text-lg">
              SEE ALL PROJECTS
              <FiArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>


    </>
  )
}



