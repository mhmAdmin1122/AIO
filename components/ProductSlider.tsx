"use client";
import dynamic from "next/dynamic";
import React from "react";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import data from "../public/ProductSlider.json";
import SliderCard from "./SliderCard";
const ProductSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h2> Responsive </h2>
      <Slider {...settings}>
        {data.map((prductData) => (
          <SliderCard key={prductData.id} {...prductData}/>
        ))}
      </Slider>
    </div>
  );
};
<SliderCard />;
export default ProductSlider;
