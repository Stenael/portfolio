import React from 'react'
import { motion } from 'framer-motion'

function About() {
  const text =
    "I am a graduate of the Bachelor's Degree in Informatics Engineering from Universitas Surabaya with more than one year of professional experience as a Web Developer. I have experience in developing and maintaining web applications, collaborating with teams, and creating responsive and user-friendly websites. I am passionate about technology, problem-solving, and continuously improving my technical skills to deliver efficient and high-quality digital solutions."

  return (
    <section id="about">
      <div className="relative h-screen overflow-hidden bg-[#ecb939] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-[400px] h-[400px] border-[35px] border-black/10 rounded-full"
        ></motion.div>

        <div className="absolute bottom-0 left-0 w-56 h-56 border-t-[30px] border-r-[30px] border-black/10 rounded-tr-full"></div>

        <div className="absolute top-1/3 right-16 grid grid-cols-4 gap-3 opacity-10">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -5, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.08,
              }}
              className="w-2 h-2 bg-black rounded-full"
            ></motion.div>
          ))}
        </div>

        <div className="absolute bottom-24 right-24 rotate-12 opacity-10">
          <div className="w-44 h-2 bg-black mb-4 rounded-full"></div>
          <div className="w-28 h-2 bg-black mb-4 rounded-full"></div>
          <div className="w-56 h-2 bg-black rounded-full"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-10 md:px-40 md:py-20 w-full">
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#2e2e2e] text-4xl md:text-5xl font-black mb-10 text-left leading-none"
          >
            About
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="max-w-3xl relative"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
              }}
              viewport={{ once: true }}
              className="relative text-[#2e2e2e] text-lg md:text-xl leading-9 text-left font-manrope"
            >
              {text}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About