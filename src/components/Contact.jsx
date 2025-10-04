import React from "react";
import contactImg from "../assets/image 12.png"; 

export default function Contact() {
  return (
    <section className="py-16">
      <div className="max-w-[1170px] mx-auto px-5 grid grid-cols-12 gap-8 items-center">
        
        {/* Left - Form */}
        <div className="col-span-5">
          <h2 className="text-[82px] font-semibold text-[#BDBDBD] mb-6">Contact Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full border p-3" />
            <input type="text" placeholder="Phone Number*" className="w-full border p-3" />
            <input type="email" placeholder="Email*" className="w-full border p-3" />
            <input type="text" placeholder="Interested In" className="w-full border p-3" />
            <textarea placeholder="Message*" rows="4" className="w-full border p-3"></textarea>
            <button className="px-6 py-2 bg-black text-white font-medium hover:bg-gray-800">
              Send Email →
            </button>
          </form>
        </div>

        {/* Right - Image */}
        <div className="col-span-7 mt-20">
          <img
            src={contactImg}
            alt="Contact"
            className="w-full h-[400px] object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}
