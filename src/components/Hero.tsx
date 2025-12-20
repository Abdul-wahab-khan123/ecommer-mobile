"use client";
import Image from "next/image";
import Slider1 from "@/components/Slider1"
import Slider2 from "@/components/Slider2"
import Slider3 from "@/components/Slider3"
import { IoArrowForward } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick.css";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
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
      <div className="gap-4 w-full relative overflow-hidden py-24">
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
            <Slider1 />
            <div className="text-center">
              <a href="javascript:;" className="text-lg font-semibold text-white bg-[var(--main-color)] mt-16 px-12 py-4 rounded-md inline-block hover:bg-black transition-all duration-600 ease-in-out"> View All Products</a>
            </div>
          </div>
        </div>
      </div>
      {/* Browse SECTION */}
      <div className="gap-4 w-full relative overflow-hidden">
        <div className="container mx-auto py-24 border-t border-b border-[#b3b3b3]">
          <div>
            <h6 className="text-base font-semibold text-[var(--main-color)] mb-6 flex items-center gap-2.5">
              <div className="inline-block w-5 h-10 bg-[var(--main-color)] mr-2 rounded-md"></div>
              Categories
            </h6>
            <div className="flex items-center gap-24">
              <h2 className="text-4xl font-semibold text-black">Browse By Category</h2>
            </div>
          </div>
          {/* SLIDER */}
          <div className="mt-15">
            <Slider2 />
          </div>
        </div>
      </div>
      {/* Best Selling Products */}
      <div className="gap-4 w-full relative overflow-hidden py-24">
        <div className="container mx-auto">
          <div>
            <h6 className="text-base font-semibold text-[var(--main-color)] mb-6 flex items-center gap-2.5">
              <div className="inline-block w-5 h-10 bg-[var(--main-color)] mr-2 rounded-md"></div>
              This Month
            </h6>
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-semibold text-black">Best Selling Products</h2>
              <div className="text-center">
                 <a href="javascript:;" className="text-lg font-semibold text-white bg-[var(--main-color)] px-12 py-4 rounded-md inline-block hover:bg-black transition-all duration-600 ease-in-out"> View All</a>
              </div>
            </div>
          </div>
          <div className="mt-15 grid grid-cols-4 gap-8">
            <div>
              <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-full 
                  relative overflow-hidden group mb-4">
                  <Image src="/img6.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                  <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                  font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                  Add To Cart
                  </a>
                  <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                  justify-center items-center"><FaRegHeart /></div>
                  <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                  justify-center items-center"><FaRegEye /></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">The north coat</h3>
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
              <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-full relative overflow-hidden group mb-4">
                <Image src="/img7.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                  Add To Cart
                </a>
                <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                  justify-center items-center"><FaRegHeart /></div>
                <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                  justify-center items-center"><FaRegEye /></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Gucci duffle bag</h3>
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
              <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-full 
              relative overflow-hidden group mb-4">
                  <Image src="/img8.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                  <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                  font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                  Add To Cart
                  </a>
                  <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                  justify-center items-center"><FaRegHeart /></div>
                  <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                  justify-center items-center"><FaRegEye /></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">RGB liquid CPU Cooler</h3>
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
              <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-full 
              relative overflow-hidden group mb-4">
                  <Image src="/img9.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                  <a href="javascript:;" className="absolute bottom-[-45px] w-full bg-black text-white text-center text-lg
                  font-medium py-2 transition-all duration-600 ease-in-out group-hover:bottom-0">
                  Add To Cart
                  </a>
                  <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex 
                  justify-center items-center"><FaRegHeart /></div>
                  <div className="text-xl absolute top-16 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                  justify-center items-center"><FaRegEye /></div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Small BookSelf</h3>
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
      {/* Enhance SECTION */}
      <div className="gap-4 w-full py-24">
        <div className="container mx-auto bg-black grid grid-cols-2 gap-2.5 items-center px-14 py-5 rounded-2xl relative overflow-hidden">
          <div>
            <h6 className="text-xl font-semibold text-[var(--main-color)] mb-10 flex items-center gap-2.5">
              Categories
            </h6>
            <h1 className="text-[background] font-bold text-7xl mb-9">
                Enhance Your Music Experience
            </h1>
            <div className="flex items-center gap-4 mb-9">
                <h3 className="text-xl font-bold text-black bg-white rounded-full w-20 h-20 flex justify-center items-center flex-col">
                  03
                  <span className="block text-sm font-semibold">Days</span>
                </h3>
                <h3 className="text-xl font-bold text-black bg-white rounded-full w-20 h-20 flex justify-center items-center flex-col">
                  23
                  <span className="block text-sm font-semibold">Hours</span>
                </h3>
                <h3 className="text-xl font-bold text-black bg-white rounded-full w-20 h-20 flex justify-center items-center flex-col">
                  19
                  <span className="block text-sm font-semibold">Minutes</span>
                </h3>
                <h3 className="text-xl font-bold text-black bg-white rounded-full w-20 h-20 flex justify-center items-center flex-col">
                  56
                  <span className="block text-sm font-semibold">Seconds</span>
                </h3>
            </div>
              <a href="javascript:;" className="text-lg font-semibold text-white bg-[var(--main-color)] px-12 py-4 rounded-md inline-block hover:bg-white hover:text-black transition-all duration-600 ease-in-out">Buy Now!</a>
          </div>
          <div className="relative overflow-hidden flex items-center justify-center">
            <div className="bg-[#D9D9D9] rounded-full blur-2xl opacity-[0.3] h-[500px] w-[500px] absolute"></div>
            <Image
              src="/img10.png"
              width={900}
              height={480}
              alt="Picture"
              className="h-[600px] w-full object-contain relative"
            />
          </div>
        </div>
      </div>
      {/* Explore Our Products */}
      <div className="gap-4 w-full relative overflow-hidden py-24">
        <div className="container mx-auto">
          <div>
            <h6 className="text-base font-semibold text-[var(--main-color)] mb-6 flex items-center gap-2.5">
              <div className="inline-block w-5 h-10 bg-[var(--main-color)] mr-2 rounded-md"></div>
              Our Products
            </h6>
            <div className="flex items-center gap-24">
              <h2 className="text-4xl font-semibold text-black">Explore Our Products</h2>
            </div>
          </div>
          {/* SLIDER */}
          <div className="mt-15">
            <Slider3 />
            <div className="text-center">
              <a href="javascript:;" className="text-lg font-semibold text-white bg-[var(--main-color)] mt-16 px-12 py-4 rounded-md inline-block hover:bg-black transition-all duration-600 ease-in-out"> View All Products</a>
            </div>
          </div>
        </div>
      </div>
      {/* New Arrival */}
      <div className="gap-4 w-full relative overflow-hidden py-24">
        <div className="container mx-auto">
          <div>
            <h6 className="text-base font-semibold text-[var(--main-color)] mb-6 flex items-center gap-2.5">
              <div className="inline-block w-5 h-10 bg-[var(--main-color)] mr-2 rounded-md"></div>
              Featured
            </h6>
            <div className="flex items-center gap-24">
              <h2 className="text-4xl font-semibold text-black">New Arrival</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 items-center mt-16">
            <div className="relative">
              <Image src="/img11.svg" width={570} height={600} alt="Picture" className="h-full w-full object-cover"/>
              <div className="absolute bottom-10 left-10">
                <h4 className="text-white text-3xl font-semibold mb-2">PlayStation 5</h4>
                <p className="text-white text-lg font-light mb-2">Black and White version of the PS5 <br></br> coming out on sale.
                </p>
                <a href="#" className="text-white text-xl font-normal underline">
                  Shop Now
                </a>
              </div>
            </div>
            <div>
              <div className="relative">
              <Image src="/img12.svg" width={570} height={300} alt="Picture" className="h-full w-full object-cover"/>
                <div className="absolute bottom-10 left-10">
                    <h4 className="text-white text-3xl font-semibold mb-2">Women’s Collections</h4>
                    <p className="text-white text-lg font-light mb-2">Featured woman collections that<br></br> give you another vibe.</p>
                    <a href="#" className="text-white text-xl font-normal underline">
                      Shop Now
                    </a>
                </div>
              </div>
              <div className="flex gap-8 mt-8">
                <div className="relative w-full">
                   <Image src="/img13.svg" width={100} height={200} alt="Picture" className="h-full w-full object-cover"/>
                   <div className="absolute bottom-10 left-10">
                      <h4 className="text-white text-3xl font-semibold mb-2">Speakers</h4>
                      <p className="text-white text-lg font-light mb-2">Amazon wireless speakers</p>
                      <a href="#" className="text-white text-xl font-normal underline">
                        Shop Now
                      </a>
                    </div>
                </div>
                <div className="relative w-full">
                   <Image src="/img14.svg" width={570} height={200} alt="Picture" className="h-full w-full object-cover"/>
                   <div className="absolute bottom-10 left-10">
                        <h4 className="text-white text-3xl font-semibold mb-2">Perfume</h4>
                        <p className="text-white text-lg font-light mb-2">GUCCI INTENSE OUD EDP</p>
                        <a href="#" className="text-white text-xl font-normal underline">
                          Shop Now
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* choose */}
      <div className="gap-4 w-full relative overflow-hidden py-24">
        <div className="container mx-auto grid grid-cols-3 gap-4 items-center">
          <div className="flex items-center justify-center flex-col">
            <div className="bg-[#c1c1c1] w-[100px] h-[100px] flex items-center justify-center rounded-full mb-6">
              <div className="bg-black w-[80px] h-[80px] flex items-center justify-center rounded-full">
                 <Image
                    src="/svg/icon1.svg"
                    width={50}
                    height={50}
                    alt="Picture"
                    className="h-[50px] w-[50px] object-cover"
                  />
              </div>
            </div>
            <h4 className="text-black text-xl font-semibold mb-1.5">FREE AND FAST DELIVERY</h4>
            <p className="text-lg">Free delivery for all orders over $140</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="bg-[#c1c1c1] w-[100px] h-[100px] flex items-center justify-center rounded-full mb-6">
              <div className="bg-black w-[80px] h-[80px] flex items-center justify-center rounded-full">
                 <Image
                    src="/svg/icon2.svg"
                    width={50}
                    height={50}
                    alt="Picture"
                    className="h-[50px] w-[50px] object-cover"
                  />
              </div>
            </div>
            <h4 className="text-black text-xl font-semibold mb-1.5">24/7 CUSTOMER SERVICE</h4>
            <p className="text-lg">Friendly 24/7 customer support</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <div className="bg-[#c1c1c1] w-[100px] h-[100px] flex items-center justify-center rounded-full mb-6">
              <div className="bg-black w-[80px] h-[80px] flex items-center justify-center rounded-full">
                 <Image
                    src="/svg/icon3.svg"
                    width={50}
                    height={50}
                    alt="Picture"
                    className="h-[50px] w-[50px] object-cover"
                  />
              </div>
            </div>
            <h4 className="text-black text-xl font-semibold mb-1.5">MONEY BACK GUARANTEE</h4>
            <p className="text-lg">We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
