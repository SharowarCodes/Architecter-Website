// contact.jsx
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BgStyle from "../components/BgStyle";



const Contact = () => {
  return (
    <section className="">
      <BgStyle/>
      <Navbar/>
      <div className="flex ">
<div className="flex-1 px-10 py-16 md:pl-24">
    {/* Left Section */}
        <h2 className="text-gray-400 text-[82px] font-light">Contact</h2>
        <h3 className="text-gray-900 text-[82px] font-bold mb-10 -mt-2">Information</h3>

        <div className="mb-6">
          <p className="font-semibold text-gray-900 text-[42px]">Company Name</p>
          <p className="text-gray-600 text-[42px]">1234 Sample Street Austin Texas 76401</p>
        </div>

        <p className="text-[42px] font-bold text-gray-900 mb-4">512.333.2222</p>
        <p className="text-gray-600 text-[42px] mb-8">sampleemail@gmail.com</p>

        <button className="bg-gray-900 text-white px-8 py-3 rounded-md shadow-md hover:bg-gray-800 transition">
          CONTACT US
        </button>
      </div>

      {/* Right Section (Map) */}
      <div className="flex-1 w-full h-[500px] md:h-[600px] p-6 md:p-10">
        <iframe
          title="Austin Map"
          src="https://www.google.com/maps?q=Hop%20by%20Hilton%20Austin%20Downtown&output=embed"
          className="w-full h-full border-1 border-gray-800  rounded-lg shadow-lg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      </div>
      
      
      <Footer/>
    </section>
  );
};

export default Contact;
