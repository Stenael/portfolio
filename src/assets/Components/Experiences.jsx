import React from "react";

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
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-[#ecb939]"
              ></div>
            ))}
          </div>
        </div>
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#fff44f]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fff44f]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-[30px] w-64 h-64 border-t-[30px] border-r-[30px] border-[#ecb939]/10 rounded-tr-full"></div>
        
        <div className="relative z-10">

          <div className="mb-16 text-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Experiences
            </h1>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#fff44f]/10"></div>

            <div className="space-y-12">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-10 w-12 h-12 rounded-full bg-[#1a1a1a] border-4 border-[#ecb939] flex items-center justify-center text-[#fff44f] font-bold shadow-[0_0_20px_rgba(255,244,79,0.25)]">
                    {index + 1}
                  </div>

                  <div className="group relative bg-[#fff44f]/5 backdrop-blur-md border border-[#fff44f]/10 rounded-[32px] p-8 overflow-hidden hover:-translate-y-2 transition duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                    <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#fff44f]/10 rounded-full blur-3xl"></div>

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-6">

                      <div className="flex items-start gap-5">

                        <div className="relative">
                          <div className="absolute inset-0 bg-[#fff44f]/20 blur-2xl rounded-full"></div>

                          <div className="relative w-15 h-15 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-[#fff44f]/20 bg-black/20 backdrop-blur-md flex items-center justify-center">
                            <img
                              src={item.logo}
                              alt={item.company}
                              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />
                          </div>
                        </div>

                        <div>
                          <h2 className="text-[#ecb939] text-xl md:text-3xl font-bold mb-2 leading-tight">
                            {item.company}
                          </h2>

                          <p className="text-[#ecb939]/80 text-sm md:text-lg">
                            {item.position}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start lg:items-end gap-3">

                        <span className="px-5 py-2 rounded-full bg-[#fff44f]/10 border border-[#fff44f]/20 text-[#fff44f] text-sm font-medium backdrop-blur-md">
                          {item.status}
                        </span>

                        <span className="text-[#fff44f]/70 text-sm tracking-wider">
                          {item.startYear} — {item.endYear}
                        </span>
                      </div>
                    </div>

                    <p className="text-white leading-relaxed text-[15px] font-manrope">
                      {item.description}
                    </p>

                    <div className="mt-6 w-20 h-1 bg-[#ecb939] rounded-full group-hover:w-full transition-all duration-700"></div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;