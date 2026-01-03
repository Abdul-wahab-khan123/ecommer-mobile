"use client";
import Image from "next/image";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick.css";
// @ts-ignore: Allow importing CSS from slick-carousel without type declarations
import "slick-carousel/slick/slick-theme.css";

export default function CartTable() {
    const [items, setItems] = useState([
        { id: 1, name: "LCD Monitor", price: 650, qty: 1, image: "/img4.png" },
        { id: 2, name: "H1 Gamepad", price: 550, qty: 1, image: "/img2.png" },
    ]);
    interface CartItem {
        id: number;
        name: string;
        price: number;
        qty: number;
        image: string;
    }
    const increase = (id: number): void => {
        setItems(items.map((item: CartItem) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
        ));
    };
    const decrease = (id: number): void => {
        setItems(items.map(item =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
        ));
    };

  return (
    <div>
      {/* HERO SECTION */}
      <div className="gap-4 w-full relative overflow-hidden py-24">
        <div className="container mx-auto flex items-center gap-3 mb-20">
          <a href="./" className="text-xl font-medium text-[#7f7f7f] transition-all duration-600 ease-in-out hover:text-black">
            Home
          </a>
          <span className="text-xl font-medium text-[#7f7f7f]">/</span>
          <a href="/cart" className="text-xl font-medium text-black">
            Cart
          </a>
        </div>
        <div className="container mx-auto">
          <table className="w-full table-fixed border-separate border-spacing-y-10">
            <thead>
              <tr className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <th className="text-left py-8 px-10 w-1/4">Product</th>
                <th className="text-center py-8 px-10 w-1/4">Price</th>
                <th className="text-center py-8 px-10 w-1/4">Quantity</th>
                <th className="text-end py-8 px-10 w-1/4">Subtotal</th>
              </tr>
            </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.id} className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                        <td className="py-6 px-8 w-1/4">
                            <div className="flex items-center gap-4">
                            <Image src={item.image} alt={item.name} width={50} height={50} />
                            <h3 className="font-semibold">{item.name}</h3>
                            </div>
                        </td>
                        <td className="py-6 px-8 text-center w-1/4">
                            ${item.price}
                        </td>
                        <td className="py-6 px-8 text-center w-1/4">
                            <div className="flex items-center gap-3 border-2 border-gray-500 w-fit mx-auto px-4 py-2.5 rounded-lg">
                                <span>{item.qty}</span>
                                <div className="flex flex-col items-center">
                                    <button className="text-black" onClick={() => increase(item.id)}>
                                        <FaAngleUp />
                                    </button>
                                    <button className="text-black" onClick={() => decrease(item.id)}>
                                        <FaAngleDown />
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td className="py-6 px-8 text-end w-1/4 font-semibold">
                            ${item.price * item.qty}
                        </td>
                    </tr>
                ))}
                </tbody>
          </table>
          <div className="mt-8 flex justify-between gap-4">
            <a href="/shop" className="border text-lg font-semibold text-black px-12 py-4 rounded-md inline-block hover:bg-black hover:text-white transition-all duration-600 ease-in-out">
                Return To Shop
            </a>
            <button className="border text-lg font-semibold text-black px-12 py-4 rounded-md inline-block hover:bg-black hover:text-white transition-all duration-600 ease-in-out">
                Update Cart
            </button>
          </div>
          <div className="mt-24 flex justify-between items-start gap-4">
            <div className="flex justify-start items-center gap-4 w-[50%]">
                <input type="text" placeholder="Coupon Code" className="border-2 border-[#777] py-4 px-4 rounded-md text-lg font-medium w-1/2 outline-none text-black"/>
                <button className="text-lg font-semibold text-white bg-[var(--main-color)] px-12 py-4 rounded-md inline-block hover:bg-black transition-all duration-600 ease-in-out">Apply Coupon</button>
            </div>
            <div className="border-2 border-[#777] p-8 rounded-lg w-[40%]">
                <h4 className="text-3xl font-bold text-black">Cart Total</h4>
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
                <div className="text-center">
                    <a href="javascript:;" className="text-lg font-semibold text-white bg-[var(--main-color)] mt-8 px-12 py-4 rounded-md inline-block hover:bg-black transition-all duration-600 ease-in-out"> Procees to checkout</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}