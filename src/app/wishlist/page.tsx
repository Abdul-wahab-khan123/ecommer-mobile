"use client";
import Image from "next/image";
import { GoStarFill } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick.css";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
     <div>
        {/* Best Selling Products */}
        <div className="gap-4 w-full relative overflow-hidden pt-24">
            <div className="container mx-auto">
                <div>
                    <div className="flex items-center justify-between">
                        <h6 className="text-xl font-semibold text-black flex items-center gap-2.5">
                            Wishlist (4)
                        </h6>
                        <div className="text-center">
                            <a href="javascript:;" className="text-lg font-semibold text-black bg-transparent border-2 border-[#7f7f7f] px-12 py-4 rounded-md inline-block hover:bg-black hover:text-white transition-all duration-600 ease-in-out">Move All To Bag</a>
                        </div>
                    </div>
                </div>
                <div className="mt-15 grid grid-cols-4 gap-8">
                    <div>
                        <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-full 
                            relative overflow-hidden group mb-4">
                            <Image src="/img6.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                            <a href="javascript:;" className="absolute bottom-0 w-full bg-black text-white text-center text-lg
                            font-medium py-3 flex items-center justify-center gap-3 transition-all duration-600 ease-in-out">
                            <IoCartOutline  className="text-3xl"/> Add To Cart
                            </a>
                            <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                            <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                            justify-center items-center"><RiDeleteBinLine /></div>
                        </div>
                        <h3 className="text-xl font-semibold text-black mb-2">The north coat</h3>
                        <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$120 <span className="ml-3 line-through text-gray-500"> $160</span>
                        </h4>
                    </div>
                    <div>
                        <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-full relative overflow-hidden group mb-4">
                        <Image src="/img7.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                        <a href="javascript:;" className="absolute bottom-0 w-full bg-black text-white text-center text-lg
                            font-medium py-3 flex items-center justify-center gap-3 transition-all duration-600 ease-in-out">
                            <IoCartOutline  className="text-3xl"/> Add To Cart
                        </a>
                        <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                            justify-center items-center"><RiDeleteBinLine /></div>
                        </div>
                        <h3 className="text-xl font-semibold text-black mb-2">Gucci duffle bag</h3>
                        <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$960 <span className="ml-3 line-through text-gray-500">
                            $1160</span>
                        </h4>
                    </div>
                    <div>
                        <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-full 
                        relative overflow-hidden group mb-4">
                            <Image src="/img8.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                            <a href="javascript:;" className="absolute bottom-0 w-full bg-black text-white text-center text-lg
                            font-medium py-3 flex items-center justify-center gap-3 transition-all duration-600 ease-in-out">
                            <IoCartOutline  className="text-3xl"/> Add To Cart
                            </a>
                            <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                            justify-center items-center"><RiDeleteBinLine /></div>
                        </div>
                        <h3 className="text-xl font-semibold text-black mb-2">RGB liquid CPU Cooler</h3>
                        <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$370 <span className="ml-3 line-through text-gray-500">$400</span>
                        </h4>
                    </div>
                    <div>
                        <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-full relative overflow-hidden group mb-4">
                            <Image src="/img9.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                            <a href="javascript:;" className="absolute bottom-0 w-full bg-black text-white text-center text-lg
                            font-medium py-3 flex items-center justify-center gap-3 transition-all duration-600 ease-in-out">
                            <IoCartOutline  className="text-3xl"/> Add To Cart
                            </a>
                            <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
                            justify-center items-center"><RiDeleteBinLine /></div>
                        </div>
                        <h3 className="text-xl font-semibold text-black mb-2">Small BookSelf</h3>
                        <h4 className="text-xl font-semibold text-[var(--main-color)] mb-2">$375 <span className="ml-3 line-through text-gray-500">$400</span></h4>
                    </div>
                </div>
            </div>
        </div>
        {/* Best Selling Products */}
        <div className="gap-4 w-full relative overflow-hidden py-24">
            <div className="container mx-auto">
                <div>
                    <div className="flex items-center justify-between">
                        <h6 className="text-xl font-semibold text-black mb-6 flex items-center gap-2.5">
                            <div className="inline-block w-5 h-10 bg-[var(--main-color)] mr-2 rounded-md"></div>
                            Just For You
                        </h6>
                        <div className="text-center">
                            <a href="javascript:;" className="text-lg font-semibold text-black bg-transparent border-2 border-[#7f7f7f] px-12 py-4 rounded-md inline-block hover:bg-black hover:text-white transition-all duration-600 ease-in-out">See All</a>
                        </div>
                    </div>
                </div>
                <div className="mt-15 grid grid-cols-4 gap-8">
                    <div>
                        <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-full 
                            relative overflow-hidden group mb-4">
                            <Image src="/img2.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                            <a href="javascript:;" className="absolute bottom-0 w-full bg-black text-white text-center text-lg
                            font-medium py-3 flex items-center justify-center gap-3 transition-all duration-600 ease-in-out">
                            <IoCartOutline  className="text-3xl"/> Add To Cart
                            </a>
                            <div className="text-base absolute top-4 left-4 text-white bg-[var(--main-color)] px-3 py-1 rounded"> - 40%</div>
                            <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
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
                        <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-full relative overflow-hidden group mb-4">
                        <Image src="/img3.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                        <a href="javascript:;" className="absolute bottom-0 w-full bg-black text-white text-center text-lg
                            font-medium py-3 flex items-center justify-center gap-3 transition-all duration-600 ease-in-out">
                            <IoCartOutline  className="text-3xl"/> Add To Cart
                        </a>
                        <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
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
                            <span className="text-lg font-semibold text-gray-500">(88)</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-full 
                        relative overflow-hidden group mb-4">
                            <Image src="/img4.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                            <a href="javascript:;" className="absolute bottom-0 w-full bg-black text-white text-center text-lg
                            font-medium py-3 flex items-center justify-center gap-3 transition-all duration-600 ease-in-out">
                            <IoCartOutline  className="text-3xl"/> Add To Cart
                            </a>
                            <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
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
                            <span className="text-lg font-semibold text-gray-500">(88)</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center items-center bg-[#F5F5F5] rounded-lg h-[270px] w-full relative overflow-hidden group mb-4">
                            <Image src="/img5.png" alt="img" width={170} height={150} className="h-[170px] w-[150px] object-contain"/>
                            <a href="javascript:;" className="absolute bottom-0 w-full bg-black text-white text-center text-lg
                            font-medium py-3 flex items-center justify-center gap-3 transition-all duration-600 ease-in-out">
                            <IoCartOutline  className="text-3xl"/> Add To Cart
                            </a>
                            <div className="text-xl absolute top-4 right-4 text-black bg-white h-[40px] w-[40px] rounded-full flex
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
                            <span className="text-lg font-semibold text-gray-500">(88)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}