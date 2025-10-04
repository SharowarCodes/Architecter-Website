import React from "react";
import sampleImg1 from "../assets/Rectangle 12.png";
import sampleImg2 from "../assets/Rectangle 14.png";
import sampleImg3 from "../assets/Rectangle 15.png";
import BgStyle from "../components/BgStyle";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function OurPro() {
  const projects = [
    {
      id: 1,
      title: "Sample Project",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: sampleImg1,
    },
    {
      id: 2,
      title: "Sample Project 2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: sampleImg2,
    },
    {
      id: 3,
      title: "Sample Project 3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: sampleImg3,
    },
  ];

  return (
    <section className="">
        <BgStyle/>
        <Navbar/>

      <div className="max-w-[1170px] mx-auto px-5">
        
        {/* Title */}
        <h2 className="text-[82px] w-15 font-semibold mb-12">
          <span className="text-[#BDBDBD]">Our </span>
          <span className="text-black">Projects</span>
        </h2>

        {/* Project List */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center   rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-100 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-4xl font-semibold text-[#BDBDBD] mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{project.desc}</p>
                <button className="px-6 py-2 border border-gray-400 text-gray-600 font-medium text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-all w-fit">
                  View More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex gap-20 items-center mt-12 text-gray-600 text-sm">
          <span className="text-[18px]">01</span>
          <div className="flex gap-3 items-center">
            <button className="px-3 py-1 border border-gray-300 hover:bg-gray-100">←</button>
            <span>05</span>
            <button className="px-3 py-1 border border-gray-300 hover:bg-gray-100">→</button>
          </div>
        </div>
      </div>
      <div className="mt-10">
<Footer/>
      </div>
      
    </section>
  );
}
