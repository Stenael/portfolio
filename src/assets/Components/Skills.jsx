import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    image: "/html.png",
    percentage: 80,
    color: "#ecb939",
  },
  {
    name: "Tailwind CSS",
    image: "/tailwindcss.png",
    percentage: 95,
    color: "#ecb939",
  },
  {
    name: "MySQL",
    image: "/mysql.png",
    percentage: 85,
    color: "#ecb939",
  },
  {
    name: "JavaScript",
    image: "/js.png",
    percentage: 90,
    color: "#ecb939",
  },
  {
    name: "React",
    image: "/react.png",
    percentage: 100,
    color: "#ecb939",
  },
  {
    name: "Flutter",
    image: "/flutter.png",
    percentage: 70,
    color: "#ecb939",
  },
  {
    name: "Laravel",
    image: "/laravel.png",
    percentage: 70,
    color: "#ecb939",
  },
];

function SkillCard({ skill, index }) {
  return (
    <motion.section
      id="skill"
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      <motion.div
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className="flex items-center gap-6 relative z-10"
      >
        <motion.img
          src={skill.image}
          alt={skill.name}
          className="w-8 h-8 object-contain"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />

        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <motion.h2
              className="text-white text-xl font-heading"
              whileHover={{
                letterSpacing: "0.08em",
              }}
            >
              {skill.name}
            </motion.h2>
          </div>

          <div className="w-full h-1 bg-gray-700 rounded-full relative overflow-visible">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              transition={{
                duration: 1.5,
                delay: 0.2 + index * 0.1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="h-full rounded-full relative"
              style={{
                backgroundColor: skill.color,
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  boxShadow: [
                    "0 0 5px #fff44f",
                    "0 0 20px #fff44f",
                    "0 0 5px #fff44f",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute right-0 top-1/2 w-3 h-3 rounded-full -translate-y-1/2 translate-x-1/2"
                style={{
                  backgroundColor: skill.color,
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function Skills() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[260px] -left-[325px] w-[550px] h-[550px] border-[30px] border-[#fff44f]/20 rounded-full"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-20 right-20 w-72 h-72 bg-[#fff44f]/10 rounded-full blur-3xl"
      ></motion.div>


      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 w-64 h-64 border-t-[30px] border-l-[30px] border-[#fff44f]/20 rounded-tl-full"
      ></motion.div>

      <div className="w-full px-10 md:px-40 py-20 relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-5xl font-bold mb-14"
        >
          Skills
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="relative border border-white/10 bg-white/5 backdrop-blur-sm rounded-[40px] p-10 shadow-2xl"
        >
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute bottom-6 left-6 w-12 h-12 bg-[#fff44f]/10 rounded-full blur-xl"
          ></motion.div>

          <div className="flex flex-col gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;