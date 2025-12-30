"use client";
import Image from "next/image";
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

export default function Home() {
  return (
     <div>
        {/* HERO SECTION */}
        <div className="gap-4 w-full h-[100vh] relative overflow-hidden pt-52">
        <div className="container mx-auto grid grid-cols-2 gap-2.5 items-center">
            <div>
            <h1 className="text-black font-bold text-6xl mb-10">
                Our Story
            </h1>
            <p className="text-black font-medium text-lg mb-6">
                Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
            </p>
            <p className="text-black font-medium text-lg">
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
            </p>
            </div>
            <div className="absolute right-0 top-52">
                <Image
                    src="/about-img.png"
                    width={900}
                    height={630}
                    alt="Picture"
                    className="h-[630px] w-full object-cover"
                />
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
        {/* choose */}
        <div className="gap-4 w-full relative overflow-hidden py-26">
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