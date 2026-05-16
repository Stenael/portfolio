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
    <section id="education">
      <div className="relative min-h-screen bg-[#ecb939] overflow-hidden px-10 md:px-40 py-20">

        <div
          className="absolute -top-[260px] -left-[326px] w-[550px] h-[550px] border-[30px] border-black/10 rounded-full"
        ></div>

        <div className="absolute bottom-20 right-20 grid grid-cols-5 gap-3 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -6, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.08,
              }}
              className="w-2 h-2 rounded-full bg-black"
            ></motion.div>
          ))}
        </div>

        <div
          className="absolute bottom-0 -left-[30px] w-64 h-64 border-t-[30px] border-r-[30px] border-black/10 rounded-tr-full"
        ></div>

        <div className="relative z-10">

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h1 className="text-[#2e2e2e] text-3xl md:text-5xl font-bold text-right">
              Education
            </h1>
          </motion.div>

          <div className="space-y-14">
            {educations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                className="relative bg-[#2e2e2e]/75 border border-black/10 rounded-[35px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0.7, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-4 left-4 w-10 h-10 bg-[#fff44f]/40 rounded-full blur-xl"
                ></motion.div>
                <div className="flex items-center mb-8">

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-full border-4 border-[#fff44f] flex items-center justify-center text-[#fff44f] font-bold bg-[#2e2e2e]">
                      {item.startYear}
                    </div>
                  </motion.div>

                  <div className="flex-1 h-1 bg-[#fff44f]/40 mx-4 relative overflow-hidden rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3,
                      }}
                      viewport={{ once: true }}
                      className="absolute inset-0 bg-[#fff44f]"
                    ></motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-14 h-14 rounded-full border-4 border-[#fff44f] flex items-center justify-center text-[#fff44f] font-bold bg-[#2e2e2e]">
                      {item.endYear}
                    </div>
                  </motion.div>
                </div>
                <div>
                  <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2,
                    }}
                    viewport={{ once: true }}
                    className="text-[#fff44f] text-lg md:text-3xl font-semibold mb-2"
                  >
                    {item.school}
                  </motion.h2>

                  <motion.h3
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                    }}
                    viewport={{ once: true }}
                    className="text-[#fff44f]/80 text-sm md:text-lg mb-4"
                  >
                    {item.major}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;