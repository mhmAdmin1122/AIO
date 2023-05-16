"use client";
import dynamic from "next/dynamic";
import React from "react";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import data from "../public/recentPost.json";
import Image from "next/image";

const BlogSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
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
      <Slider {...settings}>
        {data.map((blogData) => (
          <div
            key={blogData.id}
            className="card blogPosrSliderCard"
            style={{ width: "300px !important" }}
          >
            <div className="cardBlogImageBox ImageBox">
              <Image
                src={blogData.image_url}
                alt="blog-post-pic"
                width={299}
                height={200}
              />
            </div>
            <div className="cardBody">
              <h3>{blogData.name}</h3>
              <h2>
                Category:{" "}
                <b className="fs-4 text-red-500">{blogData.category}</b>
              </h2>
              <p>{blogData.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
