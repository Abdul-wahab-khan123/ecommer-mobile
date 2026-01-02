"use client";
import Image from "next/image";
import { RiTwitterXLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};
  return (
    <Slider {...settings}>
        <div>
            <div className=" flex flex-col items-center">
              <div className="bg-[#F5F5F5] rounded-lg h-[490px] w-[90%] flex items-end justify-center mb-5">
                <Image src="/img15.svg" width={100} height={450} alt="Team"  className="h-[450px] w-[100%]"/>
              </div>
                <h4 className="text-black text-3xl font-bold mb-1.5">Tom Cruise</h4>
                <p className="text-xl leading-8 text-black mb-5">Founder & Chairman</p>
                <div className="flex gap-4">
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><RiTwitterXLine /></a>
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><FiInstagram /></a>
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><RiLinkedinLine /></a>
                </div>
            </div>
        </div>
        <div>
            <div className=" flex flex-col items-center">
              <div className="bg-[#F5F5F5] rounded-lg h-[490px] w-[90%] flex items-end justify-center mb-5">
                <Image src="/img17.svg" width={100} height={450} alt="Team"  className="h-[450px] w-[100%]"/>
              </div>
                <h4 className="text-black text-3xl font-bold mb-1.5">Emma Watson</h4>
                <p className="text-xl leading-8 text-black mb-5">Managing Director</p>
                <div className="flex gap-4">
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><RiTwitterXLine /></a>
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><FiInstagram /></a>
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><RiLinkedinLine /></a>
                </div>
            </div>
        </div>
        <div>
           <div className=" flex flex-col items-center">
               <div className="bg-[#F5F5F5] rounded-lg h-[490px] w-[90%] flex items-end justify-center mb-5">
                <Image src="/img16.svg" width={100} height={450} alt="Team"  className="h-[450px] w-[100%]"/>
              </div>
                <h4 className="text-black text-3xl font-bold mb-1.5">Will Smith</h4>
                <p className="text-xl leading-8 text-black mb-5">Product Designer</p>
                <div className="flex gap-4">
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><RiTwitterXLine /></a>
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><FiInstagram /></a>
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><RiLinkedinLine /></a>
                </div>
            </div>
        </div>
        <div>
            <div className=" flex flex-col items-center">
              <div className="bg-[#F5F5F5] rounded-lg h-[490px] w-[90%] flex items-end justify-center mb-5">
                <Image src="/img15.svg" width={100} height={450} alt="Team"  className="h-[450px] w-[100%]"/>
              </div>
                <h4 className="text-black text-3xl font-bold mb-1.5">Tom Cruise</h4>
                <p className="text-xl leading-8 text-black mb-5">Founder & Chairman</p>
                <div className="flex gap-4">
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><RiTwitterXLine /></a>
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><FiInstagram /></a>
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><RiLinkedinLine /></a>
                </div>
            </div>
        </div>
        <div>
            <div className=" flex flex-col items-center">
              <div className="bg-[#F5F5F5] rounded-lg h-[490px] w-[90%] flex items-end justify-center mb-5">
                <Image src="/img17.svg" width={100} height={450} alt="Team"  className="h-[450px] w-[100%]"/>
              </div>
                <h4 className="text-black text-3xl font-bold mb-1.5">Emma Watson</h4>
                <p className="text-xl leading-8 text-black mb-5">Managing Director</p>
                <div className="flex gap-4">
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><RiTwitterXLine /></a>
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><FiInstagram /></a>
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><RiLinkedinLine /></a>
                </div>
            </div>
        </div>
        <div>
           <div className=" flex flex-col items-center">
               <div className="bg-[#F5F5F5] rounded-lg h-[490px] w-[90%] flex items-end justify-center mb-5">
                <Image src="/img16.svg" width={100} height={450} alt="Team"  className="h-[450px] w-[100%]"/>
              </div>
                <h4 className="text-black text-3xl font-bold mb-1.5">Will Smith</h4>
                <p className="text-xl leading-8 text-black mb-5">Product Designer</p>
                <div className="flex gap-4">
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><RiTwitterXLine /></a>
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><FiInstagram /></a>
                    <a href="javascript:;" className="text-2xl font-semibold text-black transition-all duration-600 ease-in-out"><RiLinkedinLine /></a>
                </div>
            </div>
        </div>
    </Slider>
  );
}