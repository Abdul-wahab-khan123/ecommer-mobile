"use client";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  type ArrowProps = { onClick?: React.MouseEventHandler<HTMLDivElement> };
  function NextArrow(props: ArrowProps) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute right-[40px] top-[-50%] z-10 bg-[#F5F5F5] text-black w-[50px] h-[50px] text-xl
        flex items-center justify-center rounded-full cursor-pointer hover:bg-black hover:text-white transition"
      >
        <FaArrowRight />
      </div>
    );
  }
  function PrevArrow(props: ArrowProps) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute right-[100px] top-[-50%] z-10 bg-[#F5F5F5] text-black w-[50px] h-[50px] text-xl
       flex items-center justify-center rounded-full cursor-pointer hover:bg-black hover:text-white transition"
      >
        <FaArrowLeft />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <Slider {...settings}>
      <div>
        <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
        h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
          <Image src="/svg/phone.svg" alt="img" width={80} height={80} className="h-[80px] w-[80px] object-cover mb-4 transition-all duration-600 ease-in-out group-hover:brightness-0 group-hover:invert"/>
          <a href="javascript:;" className="text-black text-center text-lg font-medium transition-all duration-600 ease-in-out group-hover:text-white"> Phones </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
        h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
          <Image src="/svg/comp.svg" alt="img" width={80} height={80} className="h-[80px] w-[80px] object-cover mb-4 transition-all duration-600 ease-in-out group-hover:brightness-0 group-hover:invert"/>
          <a href="javascript:;" className="text-black text-center text-lg font-medium transition-all duration-600 ease-in-out group-hover:text-white"> Computers </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
        h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
          <Image src="/svg/watch.svg" alt="img" width={80} height={80} className="h-[80px] w-[80px] object-cover mb-4 transition-all duration-600 ease-in-out group-hover:brightness-0 group-hover:invert"/>
          <a href="javascript:;" className="text-black text-center text-lg font-medium transition-all duration-600 ease-in-out group-hover:text-white"> SmartWatch </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
        h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
          <Image src="/svg/camera.svg" alt="img" width={80} height={80} className="h-[80px] w-[80px] object-cover mb-4 transition-all duration-600 ease-in-out group-hover:brightness-0 group-hover:invert"/>
          <a href="javascript:;" className="text-black text-center text-lg font-medium transition-all duration-600 ease-in-out group-hover:text-white"> Camera </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
        h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
          <Image src="/svg/headphone.svg" alt="img" width={80} height={80} className="h-[80px] w-[80px] object-cover mb-4 transition-all duration-600 ease-in-out group-hover:brightness-0 group-hover:invert"/>
          <a href="javascript:;" className="text-black text-center text-lg font-medium transition-all duration-600 ease-in-out group-hover:text-white"> HeadPhones </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
        h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
          <Image src="/svg/gamepad.svg" alt="img" width={80} height={80} className="h-[80px] w-[80px] object-cover mb-4 transition-all duration-600 ease-in-out group-hover:brightness-0 group-hover:invert"/>
          <a href="javascript:;" className="text-black text-center text-lg font-medium transition-all duration-600 ease-in-out group-hover:text-white"> Gaming </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
        h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
          <Image src="/svg/phone.svg" alt="img" width={80} height={80} className="h-[80px] w-[80px] object-cover mb-4 transition-all duration-600 ease-in-out group-hover:brightness-0 group-hover:invert"/>
          <a href="javascript:;" className="text-black text-center text-lg font-medium transition-all duration-600 ease-in-out group-hover:text-white"> Phones </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
        h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
          <Image src="/svg/comp.svg" alt="img" width={80} height={80} className="h-[80px] w-[80px] object-cover mb-4 transition-all duration-600 ease-in-out group-hover:brightness-0 group-hover:invert"/>
          <a href="javascript:;" className="text-black text-center text-lg font-medium transition-all duration-600 ease-in-out group-hover:text-white"> Computers </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
        h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
          <Image src="/svg/watch.svg" alt="img" width={80} height={80} className="h-[80px] w-[80px] object-cover mb-4 transition-all duration-600 ease-in-out group-hover:brightness-0 group-hover:invert"/>
          <a href="javascript:;" className="text-black text-center text-lg font-medium transition-all duration-600 ease-in-out group-hover:text-white"> SmartWatch </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
        h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
          <Image src="/svg/camera.svg" alt="img" width={80} height={80} className="h-[80px] w-[80px] object-cover mb-4 transition-all duration-600 ease-in-out group-hover:brightness-0 group-hover:invert"/>
          <a href="javascript:;" className="text-black text-center text-lg font-medium transition-all duration-600 ease-in-out group-hover:text-white"> Camera </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
        h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
          <Image src="/svg/headphone.svg" alt="img" width={80} height={80} className="h-[80px] w-[80px] object-cover mb-4 transition-all duration-600 ease-in-out group-hover:brightness-0 group-hover:invert"/>
          <a href="javascript:;" className="text-black text-center text-lg font-medium transition-all duration-600 ease-in-out group-hover:text-white"> HeadPhones </a>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
        h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
          <Image src="/svg/gamepad.svg" alt="img" width={80} height={80} className="h-[80px] w-[80px] object-cover mb-4 transition-all duration-600 ease-in-out group-hover:brightness-0 group-hover:invert"/>
          <a href="javascript:;" className="text-black text-center text-lg font-medium transition-all duration-600 ease-in-out group-hover:text-white"> Gaming </a>
        </div>
      </div>
    </Slider>
  );
}
