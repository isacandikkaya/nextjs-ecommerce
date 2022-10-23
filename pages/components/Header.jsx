import React from "react";
import Navbar from "./Navbar";
import bg from '../../public/homepagebg.png'
import Carousel from "./Carousel";

function Header() {
  return (
    <div style={{ backgroundImage: `url(${bg.src})`, width: "100%", height: "100vh", backgroundSize:"100% 100%"}} className="bg h-screen">
      <Navbar />
      <Carousel /> 
    </div>
  );
}

export default Header;
