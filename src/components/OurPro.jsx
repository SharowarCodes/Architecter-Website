import React from "react";
import sampleImg1 from "../assets/Rectangle 12.png"; 
import sampleImg2 from "../assets/Rectangle 14.png"; 
import sampleImg3 from "../assets/Rectangle 15.png"; 
import sampleImg4 from "../assets/Rectangle 16.png"; 
import sampleImg5 from "../assets/image 16.png"; 
import { Link } from "react-router-dom";

export default function OurPro() {
  return (
    <section className="py-16">
      <div className="max-w-[1170px] mx-auto px-5">
        <h2 className="text-[82px] font-semibold text-[#BDBDBD] mb-8">
          Our Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-3 gap-4">
          {/* First Project with overlay */}
          <div className="relative col-span-1 row-span-2">
            <img
              src={sampleImg1}
              alt="Sample Project"
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-start p-6 text-white">
              <h3 className="text-[42px] text-gray-300 font-bold">Sample Project</h3>
              
              <div className="text-right mt-6">
  <Link
    to="/our-projects"
    className=" px-4 py-2 text-gray-300 text-[22px] hover:underline"
  >
    View More &rarr;
  </Link>
</div>

            </div>
          </div>

          {/* Other Projects */}
          <img src={sampleImg2} alt="Project" className="w-full h-auto object-cover rounded" />
          <img src={sampleImg3} alt="Project" className="w-full h-auto object-cover rounded" />
          <img src={sampleImg4} alt="Project" className="w-full h-auto object-cover rounded" />
          <img src={sampleImg5} alt="Project" className="w-full h-auto object-cover rounded" />
        </div>

        {/* All projects button */}
        <div className="text-right mt-6">
  <Link
    to="/our-projects"
    className="bg-white px-4 py-2 text-gray-800 font-medium hover:underline"
  >
    View More &rarr;
  </Link>
</div>

      </div>
    </section>
  );
}
