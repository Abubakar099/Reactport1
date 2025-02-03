import { useState } from "react"
import PropTypes from "prop-types"
import { LuArrowDownRight } from "react-icons/lu"
import { IoLogoAngular, IoLogoCss3, IoLogoJavascript } from "react-icons/io5"
import { FaLaravel, FaReact, FaNodeJs } from "react-icons/fa6"
import { RiTailwindCssFill } from "react-icons/ri"
import { DiRuby } from "react-icons/di"

const skills = [
  { name: "CSS", icon: IoLogoCss3, initialRating: 8 },
  { name: "Tailwind", icon: RiTailwindCssFill, initialRating: 9 },
  { name: "Node.js", icon: FaNodeJs, initialRating: 7 },
  { name: "Ruby", icon: DiRuby, initialRating: 6 },
  { name: "JavaScript", icon: IoLogoJavascript, initialRating: 9 },
  { name: "Laravel", icon: FaLaravel, initialRating: 7 },
  { name: "React", icon: FaReact, initialRating: 8 },
  { name: "Angular", icon: IoLogoAngular, initialRating: 6 },
]

const SkillBar = ({ name, icon: Icon, initialRating }) => {
  const [rating, setRating] = useState(initialRating)

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-800 rounded-lg mb-4 transition-all hover:bg-gray-700">
      <div className="flex items-center mb-2 sm:mb-0">
        <Icon className="text-2xl text-blue-500 mr-3" />
        <span className="text-white text-lg font-semibold">{name}</span>
      </div>
      <div className="flex space-x-5">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index < rating ? "bg-red-500" : "bg-gray-600"
            }`}
            onClick={() => setRating(index + 1)}
          />
        ))}
      </div>
    </div>
  )
}
SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  initialRating: PropTypes.number.isRequired,
}


export const Skill = () => {
  return (
    <section className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-12 text-center text-white">
          My Skills
          <LuArrowDownRight className="text-blue-500 inline-block ml-4 animate-bounce" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

