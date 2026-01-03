"use client";
import Image from "next/image";
import Team from "@/components/Team";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick.css";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
     <div>
        {/* HERO SECTION */}
        <div className="gap-4 w-full h-[100vh] relative overflow-hidden pt-20">
            <div className="container mx-auto flex items-center gap-3 mb-10">
                <a href="./" className="text-xl font-medium text-[#7f7f7f] transition-all duration-600 ease-in-out hover:text-black">Home</a>
                <span className="text-xl font-medium text-[#7f7f7f]">/</span>
                <a href="/about" className="text-xl font-medium text-black">About</a>
            </div>
            <div className="container mx-auto grid grid-cols-2 gap-2.5 items-center">
                <div>
                <h1 className="text-black font-bold text-6xl mb-10">
                    Our Story
                </h1>
                <p className="text-black font-medium text-xl leading-8 mb-6 w-[90%]">
                    Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                </p>
                <p className="text-black font-medium text-xl leading-8 w-[90%]">
                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                </p>
                </div>
                <div>
                    <Image
                        src="/about-img.png"
                        width={900}
                        height={565}
                        alt="Picture"
                        className="h-[565px] w-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
        {/* Browse SECTION */}
        <div className="gap-4 w-full relative overflow-hidden">
            <div className="container mx-auto py-24 flex items-center justify-center gap-6">
                <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
                    h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
                    <div className="flex items-center justify-center flex-col">
                        <div className="bg-[#c1c1c1] w-[100px] h-[100px] flex items-center justify-center rounded-full mb-6 transition-all duration-600 ease-in-out group-hover:bg-black">
                            <div className="bg-black w-[80px] h-[80px] flex items-center justify-center rounded-full opacity-100 transition-all duration-600 ease-in-out group-hover:bg-white">
                                <Image
                                src="/svg/icon4.svg"
                                width={50}
                                height={50}
                                alt="Picture"
                                className="h-[50px] w-[50px] object-contain transition-all duration-600 ease-in-out group-hover:invert"
                                />
                            </div>
                        </div>
                        <h4 className="text-black text-4xl font-bold mb-1.5 transition-all duration-600 ease-in-out group-hover:text-white">10.5k</h4>
                        <p className="text-xl leading-8 transition-all duration-600 ease-in-out group-hover:text-white">Sallers active our site</p>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
                    h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
                    <div className="flex items-center justify-center flex-col">
                        <div className="bg-[#c1c1c1] w-[100px] h-[100px] flex items-center justify-center rounded-full mb-6 transition-all duration-600 ease-in-out group-hover:bg-black">
                            <div className="bg-black w-[80px] h-[80px] flex items-center justify-center rounded-full opacity-100 transition-all duration-600 ease-in-out group-hover:bg-white">
                                <Image
                                src="/svg/icon7.svg"
                                width={50}
                                height={50}
                                alt="Picture"
                                className="h-[50px] w-[50px] object-contain transition-all duration-600 ease-in-out group-hover:invert"
                                />
                            </div>
                        </div>
                        <h4 className="text-black text-4xl font-bold mb-1.5 transition-all duration-600 ease-in-out group-hover:text-white">33k</h4>
                        <p className="text-xl leading-8 transition-all duration-600 ease-in-out group-hover:text-white">Mopnthly Produduct Sale</p>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
                    h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
                    <div className="flex items-center justify-center flex-col">
                        <div className="bg-[#c1c1c1] w-[100px] h-[100px] flex items-center justify-center rounded-full mb-6 transition-all duration-600 ease-in-out group-hover:bg-black">
                            <div className="bg-black w-[80px] h-[80px] flex items-center justify-center rounded-full opacity-100 transition-all duration-600 ease-in-out group-hover:bg-white">
                                <Image
                                src="/svg/icon5.svg"
                                width={50}
                                height={50}
                                alt="Picture"
                                className="h-[50px] w-[50px] object-contain transition-all duration-600 ease-in-out group-hover:invert"
                                />
                            </div>
                        </div>
                        <h4 className="text-black text-4xl font-bold mb-1.5 transition-all duration-600 ease-in-out group-hover:text-white">45.5k</h4>
                        <p className="text-xl leading-8 transition-all duration-600 ease-in-out group-hover:text-white">Customer active in our site</p>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col border border-[#b3b3b3] rounded-lg
                    h-full w-[90%] py-6 relative overflow-hidden mb-4 group transition-all duration-600 ease-in-out hover:bg-[var(--main-color)] hover:border-[var(--main-color)]">
                    <div className="flex items-center justify-center flex-col">
                        <div className="bg-[#c1c1c1] w-[100px] h-[100px] flex items-center justify-center rounded-full mb-6 transition-all duration-600 ease-in-out group-hover:bg-black">
                            <div className="bg-black w-[80px] h-[80px] flex items-center justify-center rounded-full opacity-100 transition-all duration-600 ease-in-out group-hover:bg-white">
                                <Image
                                src="/svg/icon6.svg"
                                width={50}
                                height={50}
                                alt="Picture"
                                className="h-[50px] w-[50px] object-contain transition-all duration-600 ease-in-out group-hover:invert"
                                />
                            </div>
                        </div>
                        <h4 className="text-black text-4xl font-bold mb-1.5 transition-all duration-600 ease-in-out group-hover:text-white">25k</h4>
                        <p className="text-xl leading-8 transition-all duration-600 ease-in-out group-hover:text-white">Anual gross sale in our site</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Team */}
        <div className="gap-4 w-full relative overflow-hidden">
            <div className="container mx-auto py-24">
                <div className="mt-3">
                 <Team />
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