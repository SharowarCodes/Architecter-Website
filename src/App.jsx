import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./pages/Gallery";
import OurPro from "./pages/Ourpro";
import Certification from "./pages/Certification";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page (includes Navbar, etc.) */}
        <Route path="/" element={<Home />} />

        {/* Gallery Page */}
        <Route path="/gallery" element={<Gallery />} />
        {/* ourproject page */}
        <Route path="/our-projects" element={<OurPro />} />
        {/* Certification Page */}
        <Route path="/certification" element={<Certification />} />
        {/* contact */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
