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
                <a href="javascript:;" className="text-xl font-medium text-[#7f7f7f] transition-all duration-600 ease-in-out hover:text-black">Account</a>
                <span className="text-xl font-medium text-[#7f7f7f]">/</span>
                <a href="javascript:;" className="text-xl font-medium text-[#7f7f7f] transition-all duration-600 ease-in-out 
                hover:text-black">My Account</a>
                <span className="text-xl font-medium text-[#7f7f7f]">/</span>
                <a href="javascript:;" className="text-xl font-medium text-[#7f7f7f] transition-all duration-600 ease-in-out hover:text-black">Product</a>
                <span className="text-xl font-medium text-[#7f7f7f]">/</span>
                <a href="javascript:;" className="text-xl font-medium text-[#7f7f7f] transition-all duration-600 ease-in-out hover:text-black">View Cart</a>
                <span className="text-xl font-medium text-[#7f7f7f]">/</span>
                <a href="/checkout" className="text-xl font-medium text-black">CheckOut</a>
            </div>
            <div className="container mx-auto grid grid-cols-2 items-center gap-36">
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
                            <div className="flex items-center">
                                <input className="h-6 w-6 rounded-lg mr-4" type="checkbox" name="" value="" id="flexCheckDefault"/>
                                <label className="text-xl font-medium text-black" htmlFor="flexCheckDefault">
                                    Save this information for faster check-out next time
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-8">
                            <Image src="/img2.png" alt="img" width={50} height={50} />
                            <h3 className="text-lg font-semibold text-black">LCD Monitor</h3>
                        </div>
                        <p className="text-xl font-semibold text-black">$650.00</p>
                    </div>
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-8">
                            <Image src="/img18.svg" alt="img" width={50} height={50} />
                            <h3 className="text-lg font-semibold text-black">H1 Gamepad</h3>
                        </div>
                        <p className="text-xl font-semibold text-black">$1100.00</p>
                    </div>
                    <div className="mb-10">
                        <ul className="flex justify-between mt-4 pb-4 border-b-2 border-[#7777778b]">
                            <li className="text-black text-xl font-medium">Subtotal:</li>
                            <li className="text-black text-xl font-medium">$1750</li>
                        </ul>
                        <ul className="flex justify-between mt-4 pb-4 border-b-2 border-[#7777778b]">
                            <li className="text-black text-xl font-medium">Shipping:</li>
                            <li className="text-black text-xl font-medium">Free</li>
                        </ul>
                        <ul className="flex justify-between mt-4">
                            <li className="text-black text-xl font-medium">Total:</li>
                            <li className="text-black text-xl font-medium">$1750</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <input className="h-6 w-6 rounded-lg mr-4" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label className="text-base font-medium text-black" htmlFor="inlineRadio1">Bank Transfer</label>
                            </div>
                            <Image src="/bank.svg" alt="bank" width={192} height={28} />
                        </div>
                        <div className="flex items-center">
                            <input className="h-6 w-6 rounded-lg mr-4" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label className="text-base font-medium text-black" htmlFor="inlineRadio2">Cash on delivery</label>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-4 mb-10">
                        <input type="text" placeholder="Coupon Code" className="border-2 border-[#777] py-4 px-4 rounded-md text-lg font-medium w-4/6 outline-none text-black"/>
                        <button className="text-lg font-semibold text-white bg-[var(--main-color)] px-14 py-4.5 rounded-md inline-block hover:bg-black transition-all duration-600 ease-in-out">Apply Coupon</button>
                    </div>
                    <div>
                        <button className="text-lg font-semibold text-white bg-[var(--main-color)] px-14 py-4.5 rounded-md inline-block hover:bg-black transition-all duration-600 ease-in-out">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}