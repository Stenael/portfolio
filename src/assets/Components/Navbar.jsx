import React from 'react'

function Navbar() {
  return (
    <nav className="w-full bg-black shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center gap-8">
        
        <a href="#" className="text-white text-sm font-medium hover:text-cyan-300 transition">
          Home
        </a>

        <a href="#about" className="text-white text-sm font-medium hover:text-cyan-300 transition">
          About
        </a>

        <a href="#skill" className="text-white text-sm font-medium hover:text-cyan-300 transition">
          Skills
        </a>

        <a href="#resume" className="text-white text-sm font-medium hover:text-cyan-300 transition">
          Resume
        </a>

      </div>
    </nav>
  )
}

export default Navbar