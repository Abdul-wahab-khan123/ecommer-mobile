import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="relative overflow-hidden w-full z-10 bg-white border-b border-b-gray-400">
      <div className="flex justify-center items-center py-4 w-full overflow-hidden bg-black text-center">
        <div className="flex justify-center items-center gap-5 w-[70%]">
          <p className="text-xl font-medium text-white m-0">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a className="text-xl font-bold text-white underline" href="javascript:;" >
            ShopNow
          </a>
        </div>
        <select name="selet" className="text-white text-xl">
          <option value="" className="text-black text-xl">
            Seleted
          </option>
          <option value="" className="text-black text-xl">
            English
          </option>
          <option value="" className="text-black text-xl">
            Pakistan
          </option>
          <option value="" className="text-black text-xl">
            India
          </option>
        </select>
      </div>
      <div className="container mx-auto flex justify-between items-center py-7">
        <div>
          <h1 className="text-3xl font-bold">LOGO HERE</h1>
        </div>
        <ul className="flex justify-center items-center gap-8">
          <li>
            <Link href="/" className="text-xl font-[600] border-b-2 border-(--main-color)">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-xl font-semibold border-b-2 border-transparent hover:border-(--main-color) duration-300 ease-in-out">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-xl font-semibold border-b-2 border-transparent hover:border-(--main-color) duration-300 ease-in-out">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/signup" className="text-xl font-semibold border-b-2 border-transparent hover:border-(--main-color) duration-300 ease-in-out">
              Sign Up
            </Link>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-6">
          <div className="relative w-72">
            <input type="text" placeholder="What are you looking for?"
              className="bg-[#F5F5F5] py-3 pl-4 pr-14 rounded-md text-lg font-medium w-full outline-none" />
            <FiSearch className="absolute right-3 text-2xl top-1/2 -translate-y-1/2 text-black font-semibold" />
          </div>
          <Link href="/wishlist">
             <FaRegHeart className="text-2xl text-black font-semibold" />
          </Link>
          <Link href="/cart">
            <FiShoppingCart className="text-2xl text-black font-semibold" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;