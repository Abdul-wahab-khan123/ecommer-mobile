"use client";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick.css";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
     <div>
        {/* HERO SECTION */}
        <div className="gap-4 w-full relative overflow-hidden py-20">
            <div className="container mx-auto flex items-center gap-3 mb-20">
                <a href="./" className="text-xl font-medium text-[#7f7f7f] transition-all duration-600 ease-in-out hover:text-black">Home</a>
                <span className="text-xl font-medium text-[#7f7f7f]">/</span>
                <a href="/contact" className="text-xl font-medium text-black">Contact</a>
            </div>
            <div className="container mx-auto grid grid-cols-2 items-center gap-10">
                <div>
                    <h2 className="text-4xl font-bold text-black mb-10">Billing Details</h2>
                    <form action="">
                        <div className="mb-6">
                            <label htmlFor="First Name*" className="block mb-2 text-lg font-medium text-[#999999]">First Name*</label>
                            <input type="text" name="name" placeholder="" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full outline-none text-black"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Company Name*" className="block mb-2 text-lg font-medium text-[#999999]">Company Name*</label>
                            <input type="text" name="company" placeholder="" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full outline-none text-black"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Street Address*" className="block mb-2 text-lg font-medium text-[#999999]">Street Address*</label>
                            <input type="text" name="address" placeholder="" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full outline-none text-black"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Apartment, floor, etc. (optional)*" className="block mb-2 text-lg font-medium text-[#999999]">Apartment, floor, etc. (optional)*</label>
                            <input type="text" name="apartment" placeholder="" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full outline-none text-black"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Town/City*" className="block mb-2 text-lg font-medium text-[#999999]">Town/City*</label>
                            <input type="text" name="city" placeholder="" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full outline-none text-black"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Phone Number*" className="block mb-2 text-lg font-medium text-[#999999]">Phone Number*</label>
                            <input type="phone" name="phone" placeholder="" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full outline-none text-black"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Email Address*" className="block mb-2 text-lg font-medium text-[#999999]">Email Address*
                            </label>
                            <input type="email" name="email" placeholder="" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full  outline-none text-black"/>
                        </div>
                        <div className="mb-6">
                            <input type="checkbox" name="" id="" />
                        </div>
                    </form>
                </div>
                <div></div>
            </div>
        </div>
    </div>
  );
}