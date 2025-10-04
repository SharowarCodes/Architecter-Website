import React from "react";
import BgStyle from "./BgStyle";
import Navbar from "./Navbar";
import Project from "./Project";
import About from "./About";
import Manifest from "./Manifest";
import OurPro from "./OurPro";
import Contact from "./Contact";
import Footer from "./Footer";
function Home() {
  return (
    <div className="relative">
      <BgStyle />  {/* background for entire page */}
      <div className="relative z-10">
        <Navbar />
        <Project />
        <About />
        <Manifest />
        <OurPro/>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
export default Home;
