import React from "react";
// import sampleImg1 from "../assets/Rectangle 12.png";
// import sampleImg2 from "../assets/Rectangle 14.png";
// import sampleImg3 from "../assets/Rectangle 15.png";
import BgStyle from "../components/BgStyle";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Certification() {
 

  return (
    <section className="">
        <BgStyle/>
        <Navbar/>

      <div className="max-w-[1170px] mx-auto px-5">
        <h2 className="text-[82px] mt-20 w-15 font-semibold mb-12">
          <span className="text-[#BDBDBD]">Company </span>
          <span className="text-black">Certifications</span>
        </h2>

        {/* Pagination */}
        <div className="flex gap-20 mt-90 items-center mt-12 text-gray-600 text-sm">
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
