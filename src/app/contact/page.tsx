"use client";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

export default function contact() {
  return (
     <div>
        {/* HERO SECTION */}
        <div className="gap-4 w-full relative overflow-hidden py-20">
            <div className="container mx-auto flex items-center gap-3 mb-20">
                <Link href="./" className="text-xl font-medium text-[#7f7f7f] transition-all duration-600 ease-in-out hover:text-black">Home</Link>
                <span className="text-xl font-medium text-[#7f7f7f]">/</span>
                <Link href="/contact" className="text-xl font-medium text-black">Contact</Link>
            </div>
            <div className="container mx-auto flex items-center gap-10">
                <div className="bg-white rounded-b-lg py-10 px-8 w-[30%] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-[var(--main-color)] text-white p-3 rounded-full text-3xl">
                            <FiPhone />
                        </div>
                        <h4 className="text-xl font-bold text-black">Call To Us</h4>
                    </div>
                    <h5 className="text-lg font-medium text-black mb-2">We are available 24/7, 7 days a week.</h5>
                    <h5 className="text-lg font-medium text-black mb-8">Phone: <Link href="">+8801611112222</Link></h5>
                    <div className="border-t-2 border-[#7777778b] pt-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-[var(--main-color)] text-white p-3 rounded-full text-3xl">
                                <MdOutlineMailOutline />
                            </div>
                        <h4 className="text-xl font-bold text-black">Write To US</h4>
                        </div>
                        <h5 className="text-lg font-medium text-black mb-2">
                            Fill out our form and we will contact you within 24 hours.
                        </h5>
                        <h5 className="text-lg font-medium text-black mb-8">
                            Emails: <Link href="">customer@exclusive.com</Link>
                        </h5>
                    </div>
                </div>
                <div className="bg-white rounded-b-lg py-10 px-8 w-[70%] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                    <form action="">
                        <div className="flex gap-4 mb-8">
                            <input type="text" name="name" placeholder="Your Name *" className="bg-[#f5f5f5] py-3 px-4 rounded-md text-lg font-medium w-full outline-none text-black"/>
                            <input type="email" name="email" placeholder="Your Email *" className="bg-[#f5f5f5] py-3 px-4 rounded-md text-lg font-medium w-full  outline-none text-black"/>
                            <input type="phone" name="phone" placeholder="Your Phone *" className="bg-[#f5f5f5] py-3 px-4 rounded-md text-lg font-medium w-full outline-none text-black"/>
                        </div>
                        <div className="mb-8">
                            <textarea name="message" placeholder="Your Message *" className="bg-[#f5f5f5] py-3 px-4 rounded-md text-lg font-medium w-full h-60 outline-none text-black"></textarea>
                        </div>
                        <div className="text-end">
                            <Link href="javascript:;" className="text-lg font-semibold text-white bg-[var(--main-color)] px-12 py-4 rounded-md inline-block hover:bg-black transition-all duration-600 ease-in-out">Send Massage</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}