

import  React from "react"
import { useState, useEffect } from "react"
import ReactConfetti from "React-confetti"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectDetails: "",
    agreeToPrivacy: false,
  })

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectDetails: "",
    agreeToPrivacy: "",
  })

  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const firstNameError = validateFirstName(formData.firstName)
    const emailError = validateEmail(formData.email)

    if (firstNameError || emailError) {
      setErrors({
        ...errors,
        firstName: firstNameError,
        email: emailError,
      })
    } else {
      setShowConfetti(true)
      alert("Congratulations! Your form has been submitted successfully.")

      setTimeout(() => {
        setShowConfetti(false)
      }, 3000)
    }
  }

  const validateFirstName = (firstName) => {
    if (firstName.length < 8) {
      return "Username must be at least 8 characters long."
    }

    if (!/[A-Z]/.test(firstName)) {
      return "Username must contain at least one capital letter."
    }

    return ""
  }

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      return "Invalid email address."
    }

    return ""
  }

  return (
    <div className="min-h-screen bg-black px-4  sm:px-6 lg:px-8 relative">


{/* Services  section   */}

      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-extralight tracking-wide mb-12 transition-all duration-300 hover:tracking-wider">
            Contact Me
          </h1>

          {/* Input Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Name */}
            <div className="group">
              <input
                type="text"
                name="firstName"
                required
                className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 focus:outline-none focus:border-purple-500 transition-all duration-300 placeholder-gray-500"
                placeholder="First Name"
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              {errors.firstName && <div className="text-red-500 text-sm">{errors.firstName}</div>}
              <div className="w-0 group-hover:w-full h-0.5 bg-purple-500 transition-all duration-300" />
            </div>

            {/* Last Name */}
            <div className="group">
              <input
                type="text"
                name="lastName"
                required
                className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 focus:outline-none focus:border-purple-500 transition-all duration-300 placeholder-gray-500"
                placeholder="Last Name"
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
              <div className="w-0 group-hover:w-full h-0.5 bg-purple-500 transition-all duration-300" />
            </div>

            {/* Email */}
            <div className="group">
              <input
                type="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 focus:outline-none focus:border-purple-500 transition-all duration-300 placeholder-gray-500"
                placeholder="Email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
              <div className="w-0 group-hover:w-full h-0.5 bg-purple-500 transition-all duration-300" />
            </div>
          </div>

          {/* Project Details */}
          <div className="group relative">
            <textarea
              name="projectDetails"
              rows={4}
              className="w-full bg-transparent border-b border-gray-700 text-white px-0 py-2 focus:outline-none focus:border-purple-500 transition-all duration-300 placeholder-gray-500 resize-none"
              placeholder="Project Details (Optional)"
              onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
            />
            <h2 className="absolute right-2 top-2 text-gray-500 w-5 h-5 transition-all duration-300 hover:text-purple-500" />
            <div className="w-0 group-hover:w-full h-0.5 bg-purple-500 transition-all duration-300" />
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="privacy"
              required
              className="w-4 h-4 border-2 border-gray-700 rounded bg-transparent cursor-pointer"
              onChange={(e) => setFormData({ ...formData, agreeToPrivacy: e.target.checked })}
            />
            <label className="text-gray-400 text-sm">
              I agree to the processing of my data in accordance with the Privacy Policy
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-700 text-white rounded-full 
            shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.7)] 
            transition-all duration-300 transform hover:translate-y-[-2px] hover:scale-105"
          >
            HIRE ME
          </button>
          {showConfetti && (
  <ReactConfetti
    key={showConfetti.toString()}
    width={windowSize.width}
    height={windowSize.height}
    recycle={false}
    numberOfPieces={400} // Increased number of pieces
    pieceSize={1} // Larger pieces
    gravity={0.5} // Less gravity to make them move more explosively
    friction={0.99} // Less friction to make them move more quickly
    
  />
)}
      
        </form>
      </div>
    </div>
  )
}

 
