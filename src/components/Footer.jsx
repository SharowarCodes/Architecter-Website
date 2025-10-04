import React from "react";
import FootLogo from "../assets/Group 11.png"

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-12">
      <div className="max-w-[1170px] mx-auto px-5 grid grid-cols-12 gap-8">
        
        {/* Logo */}
        <div className="col-span-3">
          <img src={FootLogo} alt="Logo" />
        </div>

        {/* Info Links */}
        <div className="col-span-3">
          <h3 className="font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-xl text-gray-300">
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="col-span-3">
          <h3 className="font-semibold mb-4">Contacts</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>1234 Sample Street<br/>Austin Texas 78704</li>
            <li>📞 512.333.2222</li>
            <li>✉️ sampleemail@gmail.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-span-3">
          <h3 className="font-semibold mb-4">Social Media</h3>
          <div className="flex gap-4 text-xl">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-gray-400 mt-8 text-sm">
        ©2024 All Rights Reserved
      </div>
    </footer>
  );
}
