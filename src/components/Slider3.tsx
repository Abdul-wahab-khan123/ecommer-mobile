"use client";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  type ArrowProps = { onClick?: React.MouseEventHandler<HTMLDivElement> };
  function NextArrow(props: ArrowProps) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="absolute right-[40px] top-[-15%] z-10 bg-[#F5F5F5] text-black w-[50px] h-[50px] text-xl
        flex items-center justify-center rounded-full cursor-pointer hover:bg-black hover:text-white transition">
        <FaArrowRight />
      </div>
    );
  }
  function PrevArrow(props: ArrowProps) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="absolute right-[100px] top-[-15%] z-10 bg-[#F5F5F5] text-black w-[50px] h-[50px] text-xl
       flex items-center justify-center rounded-full cursor-pointer hover:bg-black hover:text-white transition">
        <FaArrowLeft />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] 
                relative overflow-hidden group mb-4">
                <Image src="/img2.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">HAVIT HV-G92 Gamepad</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$120 <span className="ml-3 line-through text-gray-500">
                $160</span>
            </h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(88)</span>
            </div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] mt-16 
                relative overflow-hidden group mb-4">
                <Image src="/img2.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">HAVIT HV-G92 Gamepad</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$120 <span className="ml-3 line-through text-gray-500">
                $160</span>
            </h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(88)</span>
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] relative overflow-hidden group mb-4">
                <Image src="/img3.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 35%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">AK-900 Wired Keyboard</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$960 <span className="ml-3 line-through text-gray-500">
                $1160</span>
            </h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(75)</span>
            </div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] mt-16 relative overflow-hidden group mb-4">
                <Image src="/img3.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 35%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">AK-900 Wired Keyboard</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$960 <span className="ml-3 line-through text-gray-500">
                $1160</span>
            </h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(75)</span>
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] 
            relative overflow-hidden group mb-4">
                <Image src="/img4.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">IPS LCD Gaming Monitor</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$370 <span className="ml-3 line-through text-gray-500">$400</span>
            </h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(99)</span>
            </div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] mt-16
            relative overflow-hidden group mb-4">
                <Image src="/img4.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">IPS LCD Gaming Monitor</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$370 <span className="ml-3 line-through text-gray-500">$400</span>
            </h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(99)</span>
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] 
            relative overflow-hidden group mb-4">
                <Image src="/img5.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">S-Series Comfort Chair</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$375 <span className="ml-3 line-through text-gray-500">$400</span></h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(99)</span>
            </div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] mt-16
            relative overflow-hidden group mb-4">
                <Image src="/img5.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">S-Series Comfort Chair</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$375 <span className="ml-3 line-through text-gray-500">$400</span></h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(99)</span>
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] 
                relative overflow-hidden group mb-4">
                <Image src="/img2.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">HAVIT HV-G92 Gamepad</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$120 <span className="ml-3 line-through text-gray-500">
                $160</span>
            </h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(88)</span>
            </div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] mt-16
                relative overflow-hidden group mb-4">
                <Image src="/img2.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">HAVIT HV-G92 Gamepad</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$120 <span className="ml-3 line-through text-gray-500">
                $160</span>
            </h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(88)</span>
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] relative overflow-hidden group mb-4">
                <Image src="/img3.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 35%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">AK-900 Wired Keyboard</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$960 <span className="ml-3 line-through text-gray-500">
                $1160</span>
            </h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(75)</span>
            </div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] mt-16 relative overflow-hidden group mb-4">
                <Image src="/img3.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 35%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">AK-900 Wired Keyboard</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$960 <span className="ml-3 line-through text-gray-500">
                $1160</span>
            </h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(75)</span>
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] 
            relative overflow-hidden group mb-4">
                <Image src="/img4.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">IPS LCD Gaming Monitor</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$370 <span className="ml-3 line-through text-gray-500">$400</span>
            </h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(99)</span>
            </div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] mt-16 
            relative overflow-hidden group mb-4">
                <Image src="/img4.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">IPS LCD Gaming Monitor</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$370 <span className="ml-3 line-through text-gray-500">$400</span>
            </h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(99)</span>
            </div>
        </div>
        <div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] 
            relative overflow-hidden group mb-4">
                <Image src="/img5.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">S-Series Comfort Chair</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$375 <span className="ml-3 line-through text-gray-500">$400</span></h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(99)</span>
            </div>
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] mt-16 
            relative overflow-hidden group mb-4">
                <Image src="/img5.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                Add To Cart
                </a>
                <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                justify-center items-center"><FaRegEye /></div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">S-Series Comfort Chair</h3>
            <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$375 <span className="ml-3 line-through text-gray-500">$400</span></h4>
            <div className="flex items-center gap-3 ">
                <ul className="flex items-center gap-1">
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                <li className="text-xl font-medium text-[#FFAD33]"><GoStarFill /></li>
                </ul>
                <span className="text-lg font-semibold text-gray-500">(99)</span>
            </div>
        </div>
    </Slider>
  );
  
}