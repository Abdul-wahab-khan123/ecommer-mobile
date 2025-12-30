import Image from "next/image";
import { LuSendHorizontal } from "react-icons/lu";
import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-black relative overflow-hidden w-full">
      <div className="container mx-auto py-12 grid grid-cols-5 gap-20">
        <div>
          <h1 className="text-4xl font-bold text-white mb-6">LOGO HERE</h1>
          <h4 className="text-xl font-bold text-white mb-8">Subscribe</h4>
          <p className="text-[16px] font-normal text-white mb-4">Get 10% off your first order</p>
          <div className="relative w-[240px] border-2 border-white rounded-md">
            <input type="text" placeholder="Enter your email..."
              className="bg-transparent py-3 pr-12 pl-4 rounded-md text-lg font-medium w-full outline-none text-white" />
            <button type="submit" className="absolute top-0 right-0 h-full pr-12 cursor-pointer">
              <LuSendHorizontal className="absolute right-3 text-3xl top-1/2 -translate-y-1/2 text-white font-semibold" />
            </button>
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-semibold text-white mb-5">Account</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="javascript:;" className="text-white text-lg">My Account</a></li>
            <li><a href="javascript:;" className="text-white text-lg">Login / Register</a></li>
            <li><a href="javascript:;" className="text-white text-lg">Cart</a></li>
            <li><a href="javascript:;" className="text-white text-lg">Wishlist</a></li>
            <li><a href="javascript:;" className="text-white text-lg">Shop</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold text-white mb-6">Quick Link</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="javascript:;" className="text-white text-lg">Privacy Policy</a></li>
            <li><a href="javascript:;" className="text-white text-lg">Terms Of Use</a></li>
            <li><a href="javascript:;" className="text-white text-lg">FAQ</a></li>
            <li><a href="javascript:;" className="text-white text-lg">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold text-white mb-6">Support</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="javascript:;" className="text-white text-lg">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a></li>
            <li><a href="javascript:;" className="text-white text-lg">exclusive@gmail.com</a></li>
            <li><a href="javascript:;" className="text-white text-lg">+88015-88888-9999</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold text-white mb-6">Download App</h4>
          <p className="text-gray-400 text-base font-bold mb-4">Save $3 with App New User Only</p>
          <div className="mx-auto grid grid-cols-2 gap-2 mb-8">
            <div>
              <Image src="/svg/Qrcode.svg"width={100} height={120} alt="Picture of the author" 
              className="h-[120px] w-full object-contain"/>
            </div>
            <div>
              <Image src="/svg/google.svg"width={100} height={100} alt="Picture of the author" 
              className="h-[100px] w-full object-contain"/>
            </div>
          </div>
          <div className="flex">
              <a href="javascript:;" className="text-2xl font-semibold text-white h-14 w-14 rounded-full flex items-center justify-center transition-all duration-600 ease-in-out hover:bg-white hover:text-black"><RiFacebookLine /></a>
              <a href="javascript:;" className="text-2xl font-semibold text-white h-14 w-14 rounded-full flex items-center justify-center transition-all duration-600 ease-in-out hover:bg-white hover:text-black"><RiTwitterXLine /></a>
              <a href="javascript:;" className="text-2xl font-semibold text-white h-14 w-14 rounded-full flex items-center justify-center transition-all duration-600 ease-in-out hover:bg-white hover:text-black"><FiInstagram /></a>
              <a href="javascript:;" className="text-2xl font-semibold text-white h-14 w-14 rounded-full flex items-center justify-center transition-all duration-600 ease-in-out hover:bg-white hover:text-black"><RiLinkedinLine /></a>
            </div>
        </div>
      </div>
      <div className="text-center py-6 border-t border-zinc-600">
        <p className="text-zinc-600 text-lg">© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;