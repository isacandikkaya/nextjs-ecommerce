import React from "react";
import Product from "./Product";

function FeaturedP() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-[48px] leading-[72px] font-[600]">
        Featured Product
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5  mt-[70px] ">
        <Product image={"Product1.png"} />
        <Product image={"Product2.png"} />
        <Product image={"Product3.png"} />
        <Product image={"Product4.png"} />
        <Product image={"Product5.png"} />
        <Product image={"Product6.png"} />
        <Product image={"Product7.png"} />
        <Product image={"Product8.png"} />
        <Product image={"Product9.png"} />
        <Product image={"Product10.png"} />
        <Product image={"Product11.png"} />
        <Product image={"Product12.png"} />
      </div>
      <button className="bg-btncolor hover:bg-btncolor px-[50px] mt-10 text-textblack font-bold py-2  rounded-full">
        LOAD MORE
      </button>
    </div>
  );
}

export default FeaturedP;
