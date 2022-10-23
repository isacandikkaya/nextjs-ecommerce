import React from "react";
import Scroll from "./Scroll";
import Footer_2 from "./Footer_2";
function Footer() {
  return (
    <div className="bg-bgsl text-center mt-[20px] pt-[30px]">
      <h1 className="text-textColor text-[30px] font-[600] my-[50px]">Bamboo Products</h1>

      <div className="flex gap-6 justify-center">
        <button>CHAIR</button>
        <button>CHAIR</button>
        <button>CHAIR</button>
        <button>CHAIR</button>
      </div>
      <Scroll />
      <Footer_2/>
    </div>
  );
}

export default Footer;
