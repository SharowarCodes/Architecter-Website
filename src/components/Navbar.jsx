import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Group 11.png";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="border-b transparent">
      <Container>
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center h-16">
            <img src={logo} alt="Logo" className="h-9 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="flex justify-center gap-8 text-[20px] font-medium text-gray-700 uppercase">
              <li>
                <Link to="/" className="hover:text-black ">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-black ">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/our-projects" className="hover:text-black ">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/certification" className="hover:text-black ">
                  Certification
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black ">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
