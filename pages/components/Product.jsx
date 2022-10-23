import React from "react";
import Image from "next/image";
import Link from "next/link";
function Product(props) {

  return (
    <Link href={"/productdetail"}>
    <div className="flex items-center justify-center ">
      <div className=" relative  hover:border-spacing-2 hover:border hover:border-orange-500 md:h-[350px] md:w-[260px] h-[420px] w-[320px] sm:h-[350px] sm:w-[280px] rounded-xl overflow-hidden">
        <Image src={"/" + props.image} layout={"fill"} />
      </div>
    </div>
    </Link>
  );
}

export default Product;
