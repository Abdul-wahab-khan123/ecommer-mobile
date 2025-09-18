import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="bg-black gap-4 w-full h-[100vh] relative overflow-hidden pt-52">
      <div className="container mx-auto grid grid-cols-2 gap-2.5 items-center">
      <div>
        <div className="flex items-center gap-2.5 mb-4">
          <Image src="/apply.webp" width={70} height={70} alt="Picture of the author"
           className="h-[70px] w-[70px] object-contain" />
          <p className="text-white text-2xl font-normal">iPhone 17 Series</p>
        </div>
        <h1 className="text-[background] font-bold text-9xl mb-16">
          Up to 10% off Voucher
        </h1>
        <a href="javascript:;" className="flex items-center gap-1.5 text-white text-2xl font-normal">
          Shop Now <IoArrowForward  className="text-2xl"/>
        </a>
      </div>
      <div>
        <Image
          src="/img1.png"
          width={900}
          height={600}
          alt="Picture of the author"
          className="h-[630px] w-full object-contain"
        />
      </div>
    </div>
  </div>
  );
};

export default Hero;
