import React from "react";
import { motion } from "framer-motion";

const educations = [
  {
    school: "SMA Katolik St. Thomas Aquino Tulungagung",
    major: "Senior High School",
    startYear: "2017",
    endYear: "2020",
  },
  {
    school: "Universitas Surabaya (UBAYA)",
    major: "Informatics Engineering",
    startYear: "2020",
    endYear: "2024",
  },
];

function Education() {
  return (
    <section id="education" className="relative min-h-screen bg-black py-24 overflow-hidden">

      <div className="relative z-10 flex flex-col justify-center px-10 md:px-40 md:py-20 w-full">
        
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-[#ecb939] text-4xl md:text-5xl font-bold tracking-wide">
            Education.
          </h1>
          <div className="w-20 h-1.5 bg-[#ecb939] mt-4 rounded-full" />
        </motion.div>

        <div className="relative space-y-12 md:space-y-16">
          {educations.map((item, index) => (
            <div key={index} className="relative flex items-start gap-6 md:gap-10">
              
              {index !== educations.length - 1 && (
                <div className="absolute left-[19px] md:left-[23px] top-12 bottom-[-4rem] md:bottom-[-5rem] w-[2px] bg-[#2a2a2a]" />
              )}

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 mt-1.5 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1e1e1e] border-2 border-[#ecb939] flex items-center justify-center shadow-[0_0_20px_rgba(236,185,57,0.3)]"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 md:w-4 md:h-4 bg-[#ecb939] rounded-full" 
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex-1 bg-[#1e1e1e]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-[0_10px_30px_rgba(236,185,57,0.1)] transition-all duration-300"
              >
                <div className="inline-block px-4 py-1.5 bg-[#ecb939]/10 border border-[#ecb939]/30 rounded-full mb-4">
                  <span className="text-[#ecb939] text-sm md:text-base font-semibold tracking-wider">
                    {item.startYear} — {item.endYear}
                  </span>
                </div>

                <h2 className="text-white text-xl md:text-3xl font-semibold mb-2">
                  {item.school}
                </h2>
                <h3 className="text-gray-400 text-base md:text-lg">
                  {item.major}
                </h3>
              </motion.div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Education;