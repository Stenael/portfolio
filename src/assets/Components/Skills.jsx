import React from "react";

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

function SkillCard({ skill }) {
  return (
    <section id="skill">
      <div className="flex items-center gap-6 relative z-10">
      <img
        src={skill.image}
        alt={skill.name}
        className="w-8 h-8 object-contain"
      />

        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-white text-xl font-heading">
              {skill.name}
            </h2>
          </div>

          <div className="w-full h-1 bg-gray-700 rounded-full relative overflow-visible">
            <div
              className="h-full rounded-full transition-all duration-1000 relative"
              style={{
                width: `${skill.percentage}%`,
                backgroundColor: skill.color,
              }}
            >
              <div
                className="absolute right-0 top-1/2 w-3 h-3 rounded-full -translate-y-1/2 translate-x-1/2 shadow-[0_0_15px_#fff44f]"
                style={{
                  backgroundColor: skill.color,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">

      <div className="absolute -top-[260px] -left-[325px] w-[550px] h-[550px] border-[30px] border-[#fff44f]/20 rounded-full"></div>

      <div className="absolute top-20 right-20 w-72 h-72 bg-[#fff44f]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 grid grid-cols-5 gap-3 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-[#ecb939]"
          ></div>
        ))}
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 border-t-[30px] border-l-[30px] border-[#fff44f]/20 rounded-tl-full"></div>

      <div className="w-full px-10 md:px-40 py-20 relative z-10">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-14">
          Skills
        </h1>

        <div className="relative border border-white/10 bg-white/5 backdrop-blur-sm rounded-[40px] p-10 shadow-2xl">
          <div className="absolute bottom-6 left-6 w-12 h-12 bg-[#fff44f]/10 rounded-full blur-xl"></div>
          <div className="flex flex-col gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;