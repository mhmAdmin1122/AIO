"use client";
import dynamic from "next/dynamic";
import React from "react";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import data from "../public/recentPost.json";
import BlogPostCard from "./BlogPostCard";

const BlogSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1035,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 619,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
      <Slider {...settings}>
        {data.map((blogData) => (
          <BlogPostCard key={blogData.id} {...blogData} />
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
