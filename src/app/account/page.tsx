"use client";
import Link from "next/link";

export default function account() {
  return (
     <div>
        {/* HERO SECTION */}
        <div className="gap-4 w-full relative overflow-hidden py-20">
            <div className="container mx-auto flex items-center gap-3 mb-22">
                <Link href="./" className="text-xl font-medium text-[#7f7f7f] transition-all duration-600 ease-in-out hover:text-black">Home</Link>
                <span className="text-xl font-medium text-[#7f7f7f]">/</span>
                <Link href="/account" className="text-xl font-medium text-black">My Account</Link>
            </div>
            <div className="container mx-auto flex items-start gap-10">
                <div className="w-[30%]">
                    <h4 className="text-xl font-bold text-black">Manage My Account</h4>
                    <div className="flex flex-col mt-4 gap-2 ml-8">
                        <Link href="javascript:;" className="text-lg font-medium text-[var(--main-color)]">
                            My Profile
                        </Link>
                        <Link href="javascript:;" className="text-lg font-medium text-[#7f7f7f] hover:text-[var(--main-color)]">
                            Address Book
                        </Link>
                        <Link href="javascript:;" className="text-lg font-medium text-[#7f7f7f] hover:text-[var(--main-color)]">
                            My Payment Options
                        </Link>
                    </div>
                    <h4 className="text-xl font-bold text-black mt-8">My Orders</h4>
                    <div className="flex flex-col mt-4 gap-2 ml-8">
                        <Link href="javascript:;" className="text-lg font-medium text-[#7f7f7f] hover:text-[var(--main-color)]">
                            My Returns
                        </Link>
                        <Link href="javascript:;" className="text-lg font-medium text-[#7f7f7f] hover:text-[var(--main-color)]">
                            My Cancellations
                        </Link>
                    </div>
                    <h4 className="text-xl font-bold text-black mt-8">My WishList</h4>
                </div>
                <div className="bg-white rounded-b-lg py-10 px-12 w-[70%] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                    <form action="">
                        <h3 className="text-2xl text-[var(--main-color)] font-bold mb-8">Edit Your Profile</h3>
                        <div className="flex gap-12 mb-6">
                            <div className="w-full">
                                <label htmlFor="First Name*" className="block mb-2 text-lg font-medium text-black">
                                    First Name*
                                </label>
                                <input type="text" name="name" placeholder="First Name" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full outline-none text-black"/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="Last Name*" className="block mb-2 text-lg font-medium text-black">
                                    Last Name*
                                </label>
                                <input type="text" name="lname" placeholder="Last Name" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full outline-none text-black"/>
                            </div>
                        </div>
                        <div className="flex gap-12 mb-6">
                            <div className="w-full">
                                <label htmlFor="Email*" className="block mb-2 text-lg font-medium text-black">
                                    Email*
                                </label>
                                <input type="text" name="email" placeholder="Email" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full outline-none text-black"/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="Address*" className="block mb-2 text-lg font-medium text-black">
                                    Address*
                                </label>
                                <input type="text" name="address" placeholder="Address" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full outline-none text-black"/>
                            </div>
                        </div>
                        <div className="mb-8">
                            <div className="w-full">
                                <label htmlFor="Password Changes*" className="block mb-2 text-lg font-medium text-black">
                                    Password Changes*
                                </label>
                                <input type="Password" name="Password" placeholder="Current Password" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full outline-none text-black mb-4"/>
                                <input type="Password" name="Password" placeholder="New Password" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full outline-none text-black mb-4"/>
                                <input type="Password" name="Password" placeholder="Confirm New Password" className="bg-[#f5f5f5] py-4 px-6 rounded-md text-lg font-medium w-full outline-none text-black"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-10">
                            <Link href="javascript:;" className="text-lg font-semibold text-black">Cancel</Link>
                            <Link href="javascript:;" className="text-lg font-semibold text-white bg-[var(--main-color)] px-12 py-4 rounded-md inline-block hover:bg-black transition-all duration-600 ease-in-out">Save Changes</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}