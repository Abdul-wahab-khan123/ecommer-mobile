"use client";
import Image from "next/image";

import { IoArrowForward } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Hero() {
  const settings = {
    dots: false,                // dots off
    infinite: true,             // infinite loop
    speed: 250,                 // animation speed
    slidesToShow: 4,            // default slides
    slidesToScroll: 1,
    navs: true,               // show arrows
    autoplay: true,             // auto slide
    autoplaySpeed: 3000,        // 3 seconds
    pauseOnHover: true,         // pause on mouse hover
    responsive: [
      {
        breakpoint: 1024,       // tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,        // mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,        // small mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-black gap-4 w-full h-[100vh] relative overflow-hidden pt-52">
        <div className="container mx-auto grid grid-cols-2 gap-2.5 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/apply.webp"
                width={70}
                height={70}
                alt="Picture"
                className="h-[70px] w-[70px] object-contain"
              />
              <p className="text-white text-2xl font-normal">iPhone 17 Series</p>
            </div>
            <h1 className="text-[background] font-bold text-9xl mb-16">
              Up to 10% off Voucher
            </h1>
            <a href="#" className="flex items-center gap-1.5 text-white text-2xl font-normal">
              Shop Now <IoArrowForward className="text-2xl" />
            </a>
          </div>
          <div>
            <Image
              src="/img1.png"
              width={900}
              height={600}
              alt="Picture"
              className="h-[630px] w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* FLASH SALES SECTION */}
      <div className="bg-white gap-4 w-full relative overflow-hidden py-24">
        <div className="container mx-auto">
          <div>
            <h6 className="text-base font-semibold text-[var(--main-color)] mb-6 flex items-center gap-2.5">
              <div className="inline-block w-5 h-10 bg-[var(--main-color)] mr-2 rounded-md"></div>
              Today’s
            </h6>
            <div className="flex items-center gap-24">
              <h2 className="text-4xl font-semibold text-black">Flash Sales</h2>
              <div className="flex items-center gap-6">
                <h3 className="text-4xl font-bold text-black">
                  <span className="block text-base font-semibold">Days</span>
                  03
                </h3>
                <p className="text-4xl font-semibold" style={{ color: "var(--main-color)" }}>
                  :
                </p>
                <h3 className="text-4xl font-bold text-black">
                  <span className="block text-base font-semibold">Hours</span>
                  23
                </h3>
                <p className="text-4xl font-semibold" style={{ color: "var(--main-color)" }}>
                  :
                </p>
                <h3 className="text-4xl font-bold text-black">
                  <span className="block text-base font-semibold">Minutes</span>
                  19
                </h3>

                <p className="text-4xl font-semibold" style={{ color: "var(--main-color)" }}>
                  :
                </p>

                <h3 className="text-4xl font-bold text-black">
                  <span className="block text-base font-semibold">Seconds</span>
                  56
                </h3>
              </div>
            </div>
          </div>

          {/* SLIDER */}
          <div className="mt-15">
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
                <h4 className="text-xl font-semibold text-black mb-2">$120 <span className="ml-3 line-through text-[var(--main-color)]">$160</span></h4>
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
                <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] 
                relative overflow-hidden group mb-4">
                  <Image src="/img3.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                  <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                   font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </a>
                  <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 35%</div>
                  <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                  justify-center items-center"><FaRegHeart /></div>
                  <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                  justify-center items-center"><FaRegEye /></div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">AK-900 Wired Keyboard</h3>
                <h4 className="text-xl font-semibold text-black mb-2">$960 <span className="ml-3 line-through text-[var(--main-color)]">$1160</span></h4>
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
                <h4 className="text-xl font-semibold text-black mb-2">$370 <span className="ml-3 line-through text-[var(--main-color)]">$400</span></h4>
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
                <h4 className="text-xl font-semibold text-black mb-2">$375 <span className="ml-3 line-through text-[var(--main-color)]">$400</span></h4>
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
                <h4 className="text-xl font-semibold text-black mb-2">$120 <span className="ml-3 line-through text-[var(--main-color)]">$160</span></h4>
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
                <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-[90%] 
                relative overflow-hidden group mb-4">
                  <Image src="/img3.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                  <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                   font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                    Add To Cart
                  </a>
                  <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 35%</div>
                  <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                  justify-center items-center"><FaRegHeart /></div>
                  <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                  justify-center items-center"><FaRegEye /></div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">AK-900 Wired Keyboard</h3>
                <h4 className="text-xl font-semibold text-black mb-2">$960 <span className="ml-3 line-through text-[var(--main-color)]">$1160</span></h4>
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
                <h4 className="text-xl font-semibold text-black mb-2">$370 <span className="ml-3 line-through text-[var(--main-color)]">$400</span></h4>
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
                <h4 className="text-xl font-semibold text-black mb-2">$375 <span className="ml-3 line-through text-[var(--main-color)]">$400</span></h4>
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
          </div>
        </div>
      </div>
    </div>
  );
}
