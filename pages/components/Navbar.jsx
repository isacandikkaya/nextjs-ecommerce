import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { RiShoppingBasket2Line } from "react-icons/ri";
import Link from "next/link";

function Navbar() {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <div className="w-screen h-[60px] bg-navColor opacity-70 flex  top-0 ">
      <div className="w-1/3 flex items-center ">
        <div
          onClick={() => {
            if (openMenu == true) {
              setopenMenu(false);
            } else {
              setopenMenu(true);
            }
            console.log(openMenu);
          }}
          className="ml-[5%]"
        >
          <AiOutlineMenu cursor={"pointer"} color="white" fontSize={"30px"} />
        </div>
        <div className={openMenu ?"fadeIn block" :"FadeOut hidden"}>
          <div className="h-[100px] w-[150px] transition duration-150	flex items-center text-center justify-center">
            <Link href="/home"><a>Home</a></Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/3 ">
        <Image
          className="cursor-pointer"
          src={"/logoW2.png"}
          height={"30px"}
          width={"100px"}
        />
      </div>
      <div className="flex w-1/3 items-center justify-center gap-10">
        <AiOutlineSearch
          className="cursor-pointer"
          color="white"
          fontSize={"35px"}
        />
        <RiShoppingBasket2Line
          className="cursor-pointer"
          color="white"
          fontSize={"35px"}
        />
      </div>
    </div>
  );
}

export default Navbar;
