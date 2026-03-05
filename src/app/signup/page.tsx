"use client";
import Image from "next/image";
import Link from "next/link";

export default function signup() {
  return (
     <div className="grid grid-cols-2 items-center gap-14 my-30">
        <div className="w-full">
          <Image src="/img19.png" width={805} height={780} alt="Picture" className="w-full object-contain"/>
        </div>
        <div className="w-full px-30">
          <h1 className="text-4xl font-bold text-black mb-4">Create an Account</h1>
          <p className="text-xl font-medium text-black mb-10">Enter your details below</p>
          <form action="">
            <input type="text" placeholder="Name" className="w-full border-b-2 border-gray-400 text-xl text-black py-2 mb-10 outline-none"/>
            <input type="email" placeholder="Email or Phone Number" className="w-full border-b-2 border-gray-400 text-xl text-black py-2 mb-10 outline-none"/>
            <input type="password" placeholder="Password" className="w-full border-b-2 border-gray-400 text-xl text-black py-2 mb-10 outline-none"/>
            <button type="submit" className="w-full text-lg font-semibold text-white bg-[var(--main-color)] px-12 py-4 rounded-md inline-block hover:bg-black transition-all duration-600 ease-in-out mb-4 cursor-pointer">Create Account</button>
            <button type="submit" className="flex items-center justify-center w-full text-lg font-semibold px-12 py-4 rounded-md border-2 border-gray-400 hover:bg-gray-100 transition-all duration-600 ease-in-out cursor-pointer">
                <Image src="/svg/google1.svg" width={24} height={24} alt="Google Icon" className="mr-2"/> Sign up with Google
            </button>
            <p className="text-xl font-medium text-gray-600 mt-8 text-center">Already have an account? 
              <Link href="/login" className="text-xl font-bold text-gray-600 underline ml-4">Log in</Link>
            </p>
          </form>
        </div>
    </div>
  );
}