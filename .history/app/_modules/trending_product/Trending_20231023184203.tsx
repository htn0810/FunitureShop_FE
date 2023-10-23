import { CartShoppingIcon, HeartIcon } from "@/app/_icons";
import Image from "next/image";
import Trending1 from "@/app/_assets/images/trending1.png";

const Trending = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-center font-primary text-2xl font-bold text-primaryTextC md:text-[42px]"
      >
        <span className="capitalize">Trending Products</span>
      </h2>
      <div className="mt-12 grid grid-cols-1 justify-center gap-y-5 gap-x-8 px-[15px] sm:grid-cols-2 lg:grid-cols-4">
        <div
          data-aos="fade-up"
          data-aos-delay={0}
          data-aos-duration="1000"
          className="group flex w-[250px] flex-col bg-white p-3 shadow-lg"
        >
          <div className="relative flex  w-full items-center justify-center bg-[#F6F7FB] h-[236px]">
            <div className="relative z-10 flex h-full w-full items-center justify-center bg-[#F6F7FB]">
              <Image
                src={Trending1}
                alt="Trending Product"
                width={178}
                height={178}
                className="w-[178px] h-[178px] object-cover"
              />
            </div>
            <div className="absolute z-10 w-0 overflow-hidden bg-overlay p-0 group-hover:inset-0 group-hover:w-full group-hover:overflow-auto group-hover:p-4">
              <div className="flex gap-x-3">
                <span className="cursor-pointer">
                  <CartShoppingIcon></CartShoppingIcon>
                </span>
                <span>
                  <HeartIcon quantity={0}></HeartIcon>
                </span>
              </div>
              <div className="absolute -translate-x-1/2 bottom-3 left-1/2">
                <button className="rounded-lg bg-[#08D15F] px-3 py-2 text-center font-primary text-xs leading-[12px] text-white hover:opacity-70">
                  View details
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pt-3 duration-500 group-hover:bg-softYellow">
            <h3 className="text-lg font-bold text-pinkC ">Cantilever chair</h3>
            <span className="mt-3 mb-4 text-sm text-offBlueC">$42.00</span>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={0}
          data-aos-duration="1000"
          className="group flex w-[250px] flex-col bg-white p-3 shadow-lg"
        >
          <div className="relative flex  w-full items-center justify-center bg-[#F6F7FB] h-[236px]">
            <div className="relative z-10 flex h-full w-full items-center justify-center bg-[#F6F7FB]">
              <Image
                src={Trending1}
                alt="Trending Product"
                width={178}
                height={178}
                className="w-[178px] h-[178px] object-cover"
              />
            </div>
            <div className="absolute z-10 w-0 overflow-hidden bg-overlay p-0 group-hover:inset-0 group-hover:w-full group-hover:overflow-auto group-hover:p-4">
              <div className="flex gap-x-3">
                <span className="cursor-pointer">
                  <CartShoppingIcon></CartShoppingIcon>
                </span>
                <span>
                  <HeartIcon quantity={0}></HeartIcon>
                </span>
              </div>
              <div className="absolute -translate-x-1/2 bottom-3 left-1/2">
                <button className="rounded-lg bg-[#08D15F] px-3 py-2 text-center font-primary text-xs leading-[12px] text-white hover:opacity-70">
                  View details
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pt-3 duration-500 group-hover:bg-softYellow">
            <h3 className="text-lg font-bold text-pinkC ">Cantilever chair</h3>
            <span className="mt-3 mb-4 text-sm text-offBlueC">$42.00</span>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={0}
          data-aos-duration="1000"
          className="group flex w-[250px] flex-col bg-white p-3 shadow-lg"
        >
          <div className="relative flex  w-full items-center justify-center bg-[#F6F7FB] h-[236px]">
            <div className="relative z-10 flex h-full w-full items-center justify-center bg-[#F6F7FB]">
              <Image
                src={Trending1}
                alt="Trending Product"
                width={178}
                height={178}
                className="w-[178px] h-[178px] object-cover"
              />
            </div>
            <div className="absolute z-10 w-0 overflow-hidden bg-overlay p-0 group-hover:inset-0 group-hover:w-full group-hover:overflow-auto group-hover:p-4">
              <div className="flex gap-x-3">
                <span className="cursor-pointer">
                  <CartShoppingIcon></CartShoppingIcon>
                </span>
                <span>
                  <HeartIcon quantity={0}></HeartIcon>
                </span>
              </div>
              <div className="absolute -translate-x-1/2 bottom-3 left-1/2">
                <button className="rounded-lg bg-[#08D15F] px-3 py-2 text-center font-primary text-xs leading-[12px] text-white hover:opacity-70">
                  View details
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pt-3 duration-500 group-hover:bg-softYellow">
            <h3 className="text-lg font-bold text-pinkC ">Cantilever chair</h3>
            <span className="mt-3 mb-4 text-sm text-offBlueC">$42.00</span>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay={0}
          data-aos-duration="1000"
          className="group flex w-[250px] flex-col bg-white p-3 shadow-lg"
        >
          <div className="relative flex  w-full items-center justify-center bg-[#F6F7FB] h-[236px]">
            <div className="relative z-10 flex h-full w-full items-center justify-center bg-[#F6F7FB]">
              <Image
                src={Trending1}
                alt="Trending Product"
                width={178}
                height={178}
                className="w-[178px] h-[178px] object-cover"
              />
            </div>
            <div className="absolute z-10 w-0 overflow-hidden bg-overlay p-0 group-hover:inset-0 group-hover:w-full group-hover:overflow-auto group-hover:p-4">
              <div className="flex gap-x-3">
                <span className="cursor-pointer">
                  <CartShoppingIcon></CartShoppingIcon>
                </span>
                <span>
                  <HeartIcon quantity={0}></HeartIcon>
                </span>
              </div>
              <div className="absolute -translate-x-1/2 bottom-3 left-1/2">
                <button className="rounded-lg bg-[#08D15F] px-3 py-2 text-center font-primary text-xs leading-[12px] text-white hover:opacity-70">
                  View details
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pt-3 duration-500 group-hover:bg-softYellow">
            <h3 className="text-lg font-bold text-pinkC ">Cantilever chair</h3>
            <span className="mt-3 mb-4 text-sm text-offBlueC">$42.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
