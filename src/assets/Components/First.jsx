import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

function First() {
  return (
    <div className="relative h-screen bg-[url('/download.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-40">
        <h1 className="font-heading text-white text-5xl md:text-5xl font-light leading-none">
          STEVEN PUTRA
        </h1>

        <h1 className="font-heading text-[#ecb939] text-5xl md:text-9xl leading-none">
          NATANAEL
        </h1>

        <p className="font-bold text-gray-300 tracking-[0.3em] mt-3 text-sm md:text-base uppercase">
          Web Developer
        </p>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-4">
        <a
          href="https://instagram.com/natanaelputrasteven"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-pink-400 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/steven-putra-natanael-641675289/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-blue-400 transition"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  )
}

export default First