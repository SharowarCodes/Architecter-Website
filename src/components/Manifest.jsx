import React from "react";
import BgStyle from "./BgStyle";

export default function Manifest() {
  return (
    <section className="relative py-16">
      {/* Background stripes */}
      {/* <BgStyle /> */}

      {/* Content */}
      <div className="relative z-10 max-w-[1170px] mx-auto px-5">
        
        <h3 className="text-[56px] tracking-widest text-[#BDBDBD] font-semibold mb-8">
          Main Focus / Mission Statement
        </h3>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex gap-5">
            <span className="text-[200px] mr-10 font-bold text-gray-300">1</span>
            <p className="mt-25 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
            </p>
          </div>
          <div className="flex gap-5">
            <span className="text-[200px] mr-10 font-bold text-gray-300">2</span>
            <p className="mt-25 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
