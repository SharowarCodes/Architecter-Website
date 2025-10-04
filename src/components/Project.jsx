import React from "react";
import BgStyle from "./BgStyle";
import ProImg from "../assets/Rectangle 6.png";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <section className="relative py-16">
      {/* Background stripes */}
      {/* <BgStyle /> */}

      {/* Content wrapper */}
      <div className="relative z-10 max-w-[1170px] mx-auto px-5 grid grid-cols-12 gap-8 items-center">
        
        {/* Left: Project text */}
        <div className="col-span-3 text-left">
          <p className="text-gray-400 uppercase tracking-widest text-[56px]">Project</p>
          <h2 className="text-3xl font-bold mt-2">Lorum</h2>
          <div className="mt-4 flex gap-2 items-center">
            <button className="border border-gray-300 px-2 py-1">&larr;</button>
            <button className="border border-gray-300 px-2 py-1">&rarr;</button>
            <span className="text-gray-400 ml-4">01 / 02</span>
          </div>
        </div>

        {/* Right: Project image */}
        <div className="col-span-9 relative">
          <img
            src={ProImg}
            alt="Project"
            className="w-full h-auto object-cover rounded-md"
          />

          {/* ✅ Button wrapped inside Link for navigation */}
          <Link
            to="/our-projects"
            className="absolute bottom-0 left-0 bg-white px-3 py-6 text-sm font-medium text-gray-800 hover:underline"
          >
            View Project &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
