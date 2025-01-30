
import { NavLink } from 'react-router-dom'

export function ErrorPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-purple-300 to-blue-200 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gradient-to-r from-gray-700 to-black backdrop-blur-sm rounded-2xl shadow-xl 
        p-8 md:p-12 animate-fade-up">
        <div className="text-center space-y-6">
          {/* Animated 404 */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-purple-400 
            animate-bounce-slow transition-all duration-300 hover:text-purple-500 
            hover:scale-105 cursor-default">
            404
          </h1>

          {/* Animated Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 
            animate-fade-in transition-all duration-300 hover:scale-105">
            oops! Page not found
          </h2>

          {/* Message with fade-in animation */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-md mx-auto 
            animate-fade-in animation-delay-200">
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 
            animate-fade-in animation-delay-300">
            <NavLink
              to="/"
              className="w-full sm:w-auto px-8 py-3 bg-purple-400 text-white rounded-full font-medium
                transition-all duration-300 hover:scale-105 hover:bg-purple-500
                hover:shadow-lg hover:shadow-purple-200/50 active:scale-95 text-center"
            >
              HOME
            </NavLink>
            <NavLink
              to="/contact"
              className="w-full sm:w-auto px-8 py-3 bg-pink-400 text-white rounded-full font-medium
                transition-all duration-300 hover:scale-105 hover:bg-pink-500
                hover:shadow-lg hover:shadow-pink-200/50 active:scale-95 text-center"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  )
}
