import React from "react";
import Image from "next/image";

function Scroll() {
  return (
    <div className="w-screen flex justify-center p-[50px]">
      <div className="whitespace-nowrap  overflow-x-auto overflow-y-hidden w-full">
        <div className="w-[500px] inline-block">
          <Image src="/pr1s.png" width={"350px"} height={"200px"} />
        </div>
        <div className="w-[500px] inline-block">
          <Image src="/pr1s.png" width={"350px"} height={"200px"} />
        </div>
        <div className="w-[500px] inline-block">
          <Image src="/pr1s.png" width={"350px"} height={"200px"} />
        </div>
        <div className="w-[500px] inline-block">
          <Image src="/pr1s.png" width={"350px"} height={"200px"} />
        </div>
        <div className="w-[500px] inline-block">
          <Image src="/pr1s.png" width={"350px"} height={"200px"} />
        </div>
      </div>
    </div>
  );
}

export default Scroll;
