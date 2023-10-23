"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@/app/_icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import Banner1 from "@/app/_assets/images/banner1.jpg";
import Banner2 from "@/app/_assets/images/banner2.jpg";

const Banner = () => {
  const [translate, setTranslate] = useState(0);
  const handleTransform = (x: number) => {
    setTranslate(x * 100);
  };
  useEffect(() => {
    console.log(translate.toString());
  }, [translate]);

  return (
    <section className="relative h-[400px] overflow-hidden md:h-[540px] lg:h-[764px] mb-40 mx-[-15px] md:mx-[-40px] xl:mx-[-90px] xl:mr-[-90px]">
      <div
        onClick={() => handleTransform(0)}
        className="absolute top-1/2 left-[15px] z-10 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#f8efec] text-[#899096] transition-all hover:scale-125 hover:text-black lg:flex"
      >
        <ArrowLeftIcon></ArrowLeftIcon>
      </div>
      <div
        className={`flex h-full w-[200vw] ${
          translate === 0 ? "translate-x-[0vw]" : "translate-x-[-100vw]"
        } duration-700`}
      >
        <div className="relative w-screen h-full">
          <Image
            src={Banner1}
            alt="Banner"
            className="object-cover w-full h-full"
          />
          <div className="absolute left-[15px] top-1/2 w-1/2 -translate-y-1/2 md:left-[40px] lg:left-[90px]">
            <span
              className={`mb-3 block text-sm font-bold ${
                translate === 0 ? "animate-fadeInUpSoon" : ""
              } text-pinkC md:text-base`}
            >
              Best Furniture For Your Castle....
            </span>
            <h1
              className={`mb-3 ${
                translate === 0 ? "animate-fadeInUpLate" : ""
              } font-primary text-[25px] font-semibold sm:text-[35px]  md:text-[53px]`}
            >
              New Furniture Collection Trends in 2020
            </h1>
            <p
              className={`mb-7 text-sm font-bold ${
                translate === 0 ? "animate-fadeInRight" : ""
              } text-subTextC md:text-base`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button
              className={`rounded-lg px-5 py-2 text-center text-sm text-white ${
                translate === 0 ? "animate-fadeInUpLate" : ""
              } bg-pinkC hover:opacity-80 md:px-10 md:py-4 md:text-base`}
            >
              Shop now
            </button>
          </div>
        </div>
        <div className="relative w-screen h-full">
          <Image
            src={Banner2}
            alt="Banner"
            className="object-cover w-full h-full"
          />
          <div className="absolute left-[15px] top-1/2 w-1/2 -translate-y-1/2 md:left-[40px] lg:left-[90px]">
            <span
              className={`mb-3 block text-sm font-bold ${
                translate === -100 ? "animate-fadeInUpSoon" : ""
              } text-pinkC md:text-base`}
            >
              Best Furniture For Your Castle....
            </span>
            <h1
              className={`mb-3 ${
                translate === -100 ? "animate-fadeInUpLate" : ""
              } font-primary text-[25px] font-semibold sm:text-[35px]  md:text-[53px]`}
            >
              Vintage Collection Trends in 2020
            </h1>
            <p
              className={`mb-7 text-sm font-bold ${
                translate === -100 ? "animate-fadeInRight" : ""
              } text-subTextC md:text-base`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button
              className={`rounded-lg px-5 py-2 text-center text-sm text-white ${
                translate === -100 ? "animate-fadeInUpLate" : ""
              } bg-pinkC hover:opacity-80 md:px-10 md:py-4 md:text-base`}
            >
              Shop now
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleTransform(-1)}
        className="absolute right-[15px] top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#f8efec] text-[#899096] transition-all hover:scale-125 hover:text-black lg:flex"
      >
        <ArrowRightIcon></ArrowRightIcon>
      </div>
      <div className="absolute bottom-[20px] left-1/2  flex h-5 -translate-x-1/2 gap-x-3">
        <span
          onClick={() => handleTransform(0)}
          className={`h5 z-10 block w-5 cursor-pointer rounded-full ${
            translate === 0 ? "bg-[#b19361]" : "bg-slate-200 "
          }`}
        ></span>
        <span
          onClick={() => handleTransform(-1)}
          className={`h5 z-10 block w-5 cursor-pointer rounded-full ${
            translate === -100 ? "bg-[#b19361]" : "bg-slate-200 "
          }`}
        ></span>
      </div>
    </section>
  );
};

export default Banner;
