import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Klinik Pratama UBAYA",
    logo: "/klinik.png",
    position: "Web Developer",
    status: "Internship",
    startYear: "Feb 2024",
    endYear: "Jul 2024",
    description:
      "Developed a web-based appointment system that helps patients schedule doctor consultations more easily and efficiently.",
  },
  {
    company: "PT Apikko",
    logo: "/apikkologo.png",
    position: "Web Developer",
    status: "Full Time",
    startYear: "Feb 2025",
    endYear: "Present",
    description:
      "Created and maintained company profile websites while improving website performance, responsiveness, and overall user experience.",
  },
  {
    company: "CV Tetangga Rukun Raharja",
    logo: "/TRR.png",
    position: "Web Developer",
    status: "Full Time",
    startYear: "Feb 2025",
    endYear: "Present",
    description:
      "Developed and maintained supporting websites for the RT Digital product ecosystem, including landing pages, help center platforms, and other web-based services.",
  },
];

function Experiences() {
  return (
    <section id="experiences">
      <div className="relative min-h-screen bg-black overflow-hidden px-10 md:px-40 py-20">
        <div className="absolute top-32 right-20 opacity-10">
          <div className="grid grid-cols-4 gap-3">
            {[...Array(36)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -6, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.04,
                }}
                className="w-3 h-3 rounded-full bg-[#ecb939]"
              ></motion.div>
            ))}
          </div>
        </div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute -top-32 -left-32 w-80 h-80 bg-[#fff44f]/5 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#fff44f]/5 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute bottom-0 -left-[30px] w-64 h-64 border-t-[30px] border-r-[30px] border-[#ecb939]/10 rounded-tr-full"
        ></motion.div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Experiences
            </h1>
          </motion.div>
          <div className="relative max-w-5xl mx-auto">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="absolute left-6 top-0 w-1 bg-[#fff44f]/10"
            ></motion.div>

            <div className="space-y-12">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 30px rgba(255,244,79,0.4)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="absolute left-0 top-10 w-12 h-12 rounded-full bg-[#1a1a1a] border-4 border-[#ecb939] flex items-center justify-center text-[#fff44f] font-bold shadow-[0_0_20px_rgba(255,244,79,0.25)]"
                  >
                    {index + 1}
                  </motion.div>
                  <motion.div
                    whileHover={{
                      y: -10,
                      scale: 1.01,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="group relative bg-[#fff44f]/5 backdrop-blur-md border border-[#fff44f]/10 rounded-[32px] p-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      className="absolute -top-16 -right-16 w-40 h-40 bg-[#fff44f]/10 rounded-full blur-3xl"
                    ></motion.div>

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-6">
                      <div className="flex items-start gap-5">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#fff44f]/20 blur-2xl rounded-full"></div>
                          <motion.div
                            whileHover={{
                              rotate: 3,
                              scale: 1.08,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 250,
                            }}
                            className="relative w-15 h-15 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-[#fff44f]/20 bg-black/20 backdrop-blur-md flex items-center justify-center"
                          >
                            <img
                              src={item.logo}
                              alt={item.company}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        </div>

                        <div>
                          <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.2,
                            }}
                            viewport={{ once: true }}
                            className="text-[#ecb939] text-xl md:text-3xl font-bold mb-2 leading-tight"
                          >
                            {item.company}
                          </motion.h2>

                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.3,
                            }}
                            viewport={{ once: true }}
                            className="text-[#ecb939]/80 text-sm md:text-lg"
                          >
                            {item.position}
                          </motion.p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start lg:items-end gap-3">

                        <motion.span
                          whileHover={{
                            scale: 1.08,
                          }}
                          className="px-5 py-2 rounded-full bg-[#fff44f]/10 border border-[#fff44f]/20 text-[#fff44f] text-sm font-medium backdrop-blur-md"
                        >
                          {item.status}
                        </motion.span>

                        <span className="text-[#fff44f]/70 text-sm tracking-wider">
                          {item.startYear} — {item.endYear}
                        </span>
                      </div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.4,
                      }}
                      viewport={{ once: true }}
                      className="text-white leading-relaxed text-[15px] font-manrope"
                    >
                      {item.description}
                    </motion.p>

                    {/* LINE */}
                    <motion.div
                      whileHover={{
                        width: "100%",
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      className="mt-6 w-20 h-1 bg-[#ecb939] rounded-full"
                    ></motion.div>

                  </motion.div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;