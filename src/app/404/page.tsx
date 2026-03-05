"use client";
import Image from "next/image";
import Link from "next/link";

export default function about() {
  return (
     <div className="pt-20 pb-30">
        <div className="container mx-auto flex items-center gap-3 mb-16">
            <Link href="./" className="text-xl font-medium text-[#7f7f7f] transition-all duration-600 ease-in-out hover:text-black">Home</Link>
            <span className="text-xl font-medium text-[#7f7f7f]">/</span>
            <Link href="/404" className="text-xl font-medium text-black">404 Error</Link>
        </div>
        <div className="text-center">
            <h1 className="text-8xl text-black font-bold mb-8">404 Not Found</h1>
            <p className="text-xl text-black font-medium mb-8">Your visited page not found. You may go home page.</p>
            <Link href="./" className="text-lg font-semibold text-white bg-[var(--main-color)] mt-8 px-12 py-4 rounded-md inline-block hover:bg-black transition-all duration-600 ease-in-out">Back to home page</Link>
        </div>
     </div>
  );
}