import React from "react";

const resumes = [
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, and experiences.",
    image: "/portfolio.png",
    link: "https://www.apikko.co.id/",
  },
  {
    title: "Website Profile RT Digital",
    description:
      "Landing page for a digital platform designed for community management and neighborhood services.",
    image: "/rtdigital.png",
    link: "https://www.rukuntetangga.online/",
  },
  {
    title: "Help Center RT Digital",
    description:
      "A help center and documentation platform for RT Digital users.",
    image: "helprtdigital.png",
    link: "https://helpcenter.rukuntetangga.online/",
  },
  {
    title: "Company Profile APIKKO",
    description:
      "A company profile website providing modern digital business solutions. ",
    image: "/apikko.png",
    link: "https://www.apikko.co.id/",
  },
];

function Resume() {
  return (
    <section id="resume">
      <div className="relative min-h-screen bg-[#ecb939] overflow-hidden px-10 md:px-40 py-20">

        <div className="absolute -top-[260px] -right-[293px] w-[550px] h-[550px] border-[30px] border-black/10 rounded-full"></div>

        <div className="absolute top-24 right-16 rotate-12 opacity-10">
          <div className="w-52 h-2 bg-black mb-5 rounded-full"></div>
          <div className="w-36 h-2 bg-black mb-5 rounded-full"></div>
          <div className="w-64 h-2 bg-black rounded-full"></div>
        </div>

        <div className="absolute bottom-20 left-20 grid grid-cols-5 gap-3 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-black"
            ></div>
          ))}
        </div>

        <div className="absolute bottom-0 right-0 w-64 h-64 border-t-[30px] border-l-[30px] border-black/10 rounded-tl-full"></div>

        <div className="relative z-10">

          <div className="mb-14">
            <h1 className="text-[#2e2e2e] text-3xl md:text-5xl font-bold">
              Resume
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {resumes.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#2e2e2e]/95 backdrop-blur-md border border-black/10 rounded-[35px] overflow-hidden hover:-translate-y-2 hover:scale-[1.02] transition duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              >

                <div className="absolute top-4 right-4 w-16 h-16 border border-[#fff44f]/20 rounded-full"></div>

                <div className="absolute bottom-4 left-4 w-10 h-10 bg-[#fff44f]/10 rounded-full blur-xl"></div>

                <div className="overflow-hidden h-40 md:h-56 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="px-6 py-5 relative z-10">
                  <h2 className="text-[#ecb939] text-2xl font-semibold mb-1">
                    {item.title}
                  </h2>

                  {/* <p className="text-white leading-relaxed mb-3 font-manrope">
                    {item.description}
                  </p> */}

                  <div className="inline-flex items-center gap-2 text-[#ecb939] font-medium">
                    Visit Website
                    <span className="group-hover:translate-x-1 transition duration-300">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Resume;