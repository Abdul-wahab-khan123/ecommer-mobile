"use client";
import Image from "next/image";
import { baseUrl } from "./config";
import React from "react";
import Slider from "react-slick";
import { GoStarFill } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick.css";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick-theme.css";

export default function CustomPaging() {
  const settings = {
    customPaging: (i: number) => (
      <div className="w-40 h-36 bg-[#f5f5f5] p-5 cursor-pointer">
        <img src={`${baseUrl}/product/img${i + 1}.svg`} alt={`thumb-${i}`} className="w-full h-full object-contain"/>
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
    <div>
      <div className="py-20">
        <div className="container mx-auto flex items-center gap-3 pb-20">
            <a href="javascript:;" className="text-xl font-medium text-[#7f7f7f] transition-all duration-600 ease-in-out hover:text-black">Account</a>
            <span className="text-xl font-medium text-[#7f7f7f]">/</span>
            <a href="javascript:;" className="text-xl font-medium text-[#7f7f7f] transition-all duration-600 ease-in-out hover:text-black">Gaming</a>
            <span className="text-xl font-medium text-[#7f7f7f]">/</span>
            <a href="javascript:;" className="text-xl font-medium text-black">Havic HV G-92 Gamepad</a>
        </div>
        <div className="container mx-auto grid grid-cols-3 gap-4 items-center">
          <div className="slider-container product-slider max-w-xl col-span-2">
            <Slider {...settings}>
              <div>
                <img src={`${baseUrl}/product/img1.svg`} alt="img1" className="w-full h-[600px] object-contain p-12 bg-[#f5f5f5]" />
              </div>
              <div>
                <img src={`${baseUrl}/product/img2.svg`} alt="img2" className="w-full h-[600px] object-contain p-12 bg-[#f5f5f5]" />
              </div>
              <div>
                <img src={`${baseUrl}/product/img3.svg`} alt="img3" className="w-full h-[600px] object-contain p-12 bg-[#f5f5f5]" />
              </div>
              <div>
                <img src={`${baseUrl}/product/img4.svg`} alt="img4" className="w-full h-[600px] object-contain p-12 bg-[#f5f5f5]" />
              </div>
              <div>
                <img src={`${baseUrl}/product/img5.svg`} alt="img5" className="w-full h-[600px] object-contain p-12 bg-[#f5f5f5]" />
              </div>
            </Slider>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">Havic HV G-92 Gamepad</h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5">
                <div className="text-[#FFAD33] text-lg"><GoStarFill /></div>
                <div className="text-[#FFAD33] text-lg"><GoStarFill /></div>
                <div className="text-[#FFAD33] text-lg"><GoStarFill /></div>
                <div className="text-[#FFAD33] text-lg"><GoStarFill /></div>
                <div className="text-gray-300 text-lg"><GoStarFill /></div>
              </div>
              <p className="text-[#7f7f7f] text-base font-medium">(150 Reviews)</p>
              <p>|</p>
              <p className="text-[var(--main-color)] text-base font-bold">In Stock</p>
            </div>
            <h3 className="text-2xl font-medium text-black mb-6">$192.00</h3>
            <p className="text-black text-xl font-medium mb-6">
              PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
            </p>
            <div className="h-0.5 bg-[#7f7f7f] w-full mb-6"></div>
            <div className="flex items-center gap-4 mb-8">
              <p className="text-black text-xl font-medium">Size:</p>
              <ul className="flex items-center gap-3">
                <li className="w-12 h-12 text-lg font-bold border-2 border-[#7f7f7f] rounded-lg flex items-center justify-center cursor-pointer">XS</li>
                <li className="w-12 h-12 text-lg font-bold border-2 border-[#7f7f7f] rounded-lg flex items-center justify-center cursor-pointer">S</li>
                <li className="w-12 h-12 text-lg font-bold border-2 border-[#7f7f7f] rounded-lg flex items-center justify-center cursor-pointer">M</li>
                <li className="w-12 h-12 text-lg font-bold border-2 border-[#7f7f7f] rounded-lg flex items-center justify-center cursor-pointer">L</li>
                <li className="w-12 h-12 text-lg font-bold border-2 border-[#7f7f7f] rounded-lg flex items-center justify-center cursor-pointer">XL</li>
              </ul>
            </div>
            <div className="flex items-center gap-4 justify-between mb-8 h-14">
                <div className="flex items-center border-2 border-[#7f7f7f] h-full rounded-lg relative overflow-hidden">
                    <button className="text-black px-4 h-full text-xl border-r-2 border-[#7f7f7f] cursor-pointer 
                    transition-all duration-100 ease-in-out hover:bg-[var(--main-color)] hover:text-white">
                        <FaMinus />
                    </button>
                    <span className="text-black px-10 text-2xl font-bold cursor-pointer">1</span>
                    <button className="text-black px-4 h-full text-2xl font-extrabold border-l-2 border-[#7f7f7f] cursor-pointer  
                    transition-all duration-100 ease-in-out hover:bg-[var(--main-color)] hover:text-white">
                        <FiPlus />
                    </button>
                </div>
                <a href="javascript:;" className="text-lg font-semibold text-white bg-[var(--main-color)] px-14 h-full rounded-lg flex items-center justify-center hover:bg-black transition-all duration-600 ease-in-out">Buy Now</a>
                <a href="javascript:;" className="text-3xl font-semibold text-black px-4 h-full rounded-lg border-2 border-[#7f7f7f] flex items-center justify-center"><FaRegHeart /></a>
            </div>
            <div className="border-2 border-[#7f7f7f] rounded-lg">
              <div className="flex items-center gap-6 py-6 px-4 border-b-2 border-[#7f7f7f]">
                <Image src="/svg/icon-delivery.svg" alt="img" width={60} height={60} className="h-[60px] 
                w-[60px] object-contain"/>
                <div>
                  <h3 className="text-black text-2xl font-bold mb-2">Free Delivery</h3>
                  <p className="text-black text-lg font-bold underline">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="flex items-center gap-6 py-6 px-4">
                <Image src="/svg/Icon-return.svg" alt="img" width={60} height={60} className="h-[60px] 
                w-[60px] object-contain"/>
                <div>
                  <h3 className="text-black text-2xl font-bold mb-2">Return Delivery</h3>
                  <p className="text-black text-lg font-bold underline">Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-4 w-full relative overflow-hidden py-24">
        <div className="container mx-auto">
          <div>
            <h6 className="text-base font-semibold text-[var(--main-color)] mb-6 flex items-center gap-2.5">
              <div className="inline-block w-5 h-10 bg-[var(--main-color)] mr-2 rounded-md"></div>
              Related Item
            </h6>
          </div>
          {/* SLIDER */}
          <div className="grid grid-cols-4 gap-6 items-center mt-15">
            <div>
              <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[100%] 
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
              <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$120 
                <span className="ml-3 line-through text-gray-500"> $160</span>
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
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[100%] relative overflow-hidden group mb-4">
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
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[100%] 
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
            <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[100%] 
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
          </div>
        </div>
      </div>
    </div>
  );
}
