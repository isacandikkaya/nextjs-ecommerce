import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


function Carousel() {
  const settings = {
    Dats:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="text-center  mx-[50px]">
      <h1 className="text-textColor font-bold tracking-[0.2em]  text-[24px] mt-[100px]">
        INDOORS
      </h1>
      <Slider {...settings}>
        <div>
          <p className="text-textColor font-normal text-[40px]">
            See Bamboo’s New Range Of Indoor Furniture
          </p>
          <div className=" ">
            <p className="text-[20px]  text-textColor">
              Classic meet modern living,{<br></br>} Bamboo has a fantastic
              range of indoor furniture,{<br></br>} perfect for any modern home.
            </p>
          </div>
        </div>
        <div>
          <p className="text-textColor font-normal text-[40px]">
            See Bamboo’s New Range Of Indoor Furniture
          </p>
          <div className=" ">
            <p className="text-[20px]  text-textColor">
              Classic meet modern living,{<br></br>} Bamboo has a fantastic
              range of indoor furniture,{<br></br>} perfect for any modern home.
            </p>
          </div>
        </div>
        <div>
          <p className="text-textColor font-normal text-[40px]">
            See Bamboo’s New Range Of Indoor Furniture
          </p>
          <div className=" ">
            <p className="text-[20px]  text-textColor">
              Classic meet modern living,{<br></br>} Bamboo has a fantastic
              range of indoor furniture,{<br></br>} perfect for any modern home.
            </p>
          </div>
        </div>
      </Slider>
      <button className="bg-btncolor hover:bg-btncolor px-[50px] mt-10 text-textblack font-bold py-2  rounded-full">SEE MORE</button>
    </div>
  );
}

export default Carousel;
