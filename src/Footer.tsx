import Image from "next/image";
import { LuSendHorizontal } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-black py-12 relative overflow-hidden w-full">
      <div className="container mx-auto grid grid-cols-5 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-6">LOGO HERE</h1>
          <h4 className="text-3xl font-bold text-white mb-6">Subscribe</h4>
          <p className="text-[22px] font-normal text-white mb-4">Get 10% off your first order</p>
          <div className="relative w-[265px] border-2 border-white rounded-md">
            <input type="text" placeholder="Enter your email..."
              className="bg-transparent py-3 pl-4 pr-14 rounded-md text-lg font-medium w-full outline-none text-white" />
            <LuSendHorizontal className="absolute right-3 text-3xl top-1/2 -translate-y-1/2 text-white font-semibold" />
          </div>
        </div>
        <div>
          <h4 className="text-4xl font-semibold text-white mb-6">Account</h4>
          <ul>
            <li><a href="javascript:;" className="text-white">My Account</a></li>
            <li><a href="javascript:;" className="text-white">Login / Register</a></li>
            <li><a href="javascript:;" className="text-white">Cart</a></li>
            <li><a href="javascript:;" className="text-white">Wishlist</a></li>
            <li><a href="javascript:;" className="text-white">Shop</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-4xl font-semibold text-white mb-6">Quick Link</h4>
          <ul>
            <li><a href="javascript:;" className="text-white">Privacy Policy</a></li>
            <li><a href="javascript:;" className="text-white">Terms Of Use</a></li>
            <li><a href="javascript:;" className="text-white">FAQ</a></li>
            <li><a href="javascript:;" className="text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-4xl font-semibold text-white mb-6">Support</h4>
          <ul>
            <li><a href="javascript:;" className="text-white">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a></li>
            <li><a href="javascript:;" className="text-white">exclusive@gmail.com</a></li>
            <li><a href="javascript:;" className="text-white">+88015-88888-9999</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-4xl font-semibold text-white mb-6">Download App</h4>
          <p className="text-gray-400 text-xl mb-4">Save $3 with App New User Only</p>
          <div className="mx-auto grid grid-cols-2 gap-2">
            <div>
              <Image src="/Qrcode.png"width={100} height={100} alt="Picture of the author" 
              className="h-[100px] w-full object-contain"/>
            </div>
            <div>
              <Image src="/google.png"width={100} height={100} alt="Picture of the author" 
              className="h-[100px] w-full object-contain"/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;