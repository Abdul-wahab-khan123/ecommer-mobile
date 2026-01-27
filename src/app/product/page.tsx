"use client";
import React from "react";
import Slider from "react-slick";
import { baseUrl } from "./config";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick.css";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick-theme.css";

export default function CustomPaging() {
  const settings = {
    customPaging: (i) => (
      <div className="w-16 h-16 cursor-pointer">
        <img
          src={`${baseUrl}/img${i + 1}.png`}
          alt={`thumb-${i}`}
          className="w-full h-full object-cover"
        />
      </div>
    ),
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container max-w-xl mx-auto">
      <Slider {...settings}>
        <div>
          <img src={`${baseUrl}/img1.png`} alt="img1" />
        </div>
        <div>
          <img src={`${baseUrl}/img2.png`} alt="img2" />
        </div>
        <div>
          <img src={`${baseUrl}/img3.png`} alt="img3" />
        </div>
        <div>
          <img src={`${baseUrl}/img4.png`} alt="img4" />
        </div>
      </Slider>
    </div>
  );
}
