import React from "react";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer_2() {
  return (
    <div className="bg-textblack w-full h-[350px] text-white">
      <div className="flex justify-between ">
        <div className="w-1/3 flex items-center">
          <h1 className="text-[600]">SUBSCRIBE TO OUR NEWSLETTER</h1>
          <a
            className="rounded-full bg-bga md:px-[45px] md:pt-[10px] sm:px-[25px] sm:pt-[5px] text-[5px] sm:text-[10px] "
            href="#"
          >
            Enter Your E-mail Address Here
          </a>
        </div>
        <div className="vr w-1/3"></div>
        <div className="w-1/3 flex gap-5 items-center">
          <h1 className="text-[600]">JOIN US ON</h1>
          <a href="#">
            <BsFacebook color="#3B5998" />
          </a>
          <a href="#">
            <AiFillTwitterCircle color="#55ACEE" />
          </a>
          <a href="#">
            <AiOutlineInstagram color="white" />
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="flex items-center h-[250px] bg-textblack">
        <div className="w-1/3">
          <h1>TERMS & CONDITION POLICY</h1>
        </div>
        <div className="w-1/3">
          <Image src="/ftrlogoL.png" height={"85px"} width={"90px"} />
        </div>
        <div className="w-1/3">
          <h1>© 2019 Bamboo All Rights Reserved</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer_2;
