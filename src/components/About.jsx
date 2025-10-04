import React from "react";
import BgStyle from "./BgStyle";
import AbImg01 from "../assets/Rectangle 8.png";
import AbImg02 from "../assets/Rectangle 9.png";
import AbImg03 from "../assets/Rectangle 10.png";

export default function About() {
  return (
    <section className="relative py-16">
      {/* Background stripes */}
      {/* <BgStyle /> */}

      {/* Content (z-10 keeps it above background) */}
      <div className="relative z-10 max-w-[1170px] mx-auto px-5 grid grid-cols-12 gap-8">
        
        {/* Left images */}
        <div className="col-span-5 grid grid-cols-2 gap-4">
          <img src={AbImg01} alt="About 1" className="rounded-md" />
          <img src={AbImg02} alt="About 2" className="rounded-md" />
          <img src={AbImg03} alt="About 3" className="rounded-md col-span-2" />
        </div>

        {/* Right text */}
        <div className="col-span-7 flex flex-col justify-center">
          <h3 className="text-[56px] ml-40 text-gray-400 uppercase tracking-widest">
            About
          </h3>
          <p className="mt-4 ml-40 w-[400px] text-gray-700 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <button className="mt-6 ml-40 text-[18px] text-gray-400 tracking-widest font-medium hover:underline">
            Read More &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
