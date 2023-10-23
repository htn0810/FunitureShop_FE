import { Fragment } from "react";
import Banner from "./_modules/banner";
import Image from "next/image";
import { Services } from "./_constants/general.const";
import Discover from "@/app/_assets/images/banner-style-1-img-1.jpg";
import Discover1 from "@/app/_assets/images/banner-style-2-img-1.jpg";
import Discover2 from "@/app/_assets/images/banner-style-2-img-2.jpg";
import Discover3 from "@/app/_assets/images/banner-style-2-img-3.jpg";
import Discover4 from "@/app/_assets/images/banner-style-2-img-4.jpg";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      {/* {Service} */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {Services.map((service) => (
          <div
            key={service.desc}
            className="flex flex-col justify-center items-center gap-y-4"
          >
            <Image
              src={service.img}
              alt="Service"
              width={77}
              height={77}
              className="w-[77px] h-[77px] object-cover"
            />
            <h3 className="text-base font-semibold text-center">
              {service.title}
            </h3>
            <p className="text-sm font-normal text-[#777] text-center">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
      {/* {Discover} */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4 mb-20">
        {/* {Main Discover} */}
        <div className="relative">
          <Image
            src={Discover}
            alt="Discover"
            width={840}
            height={540}
            className="w-full h-full"
          />
          <div className="flex flex-col items-start absolute right-20 top-1/2 -translate-y-1/2">
            <h4 className="xl:text-3xl md:text-xl text-lg font-medium text-[#000] mb-2">
              Table Lamp - E216
            </h4>
            <span className="text-base font-medium text-grayC">
              WE DESIGN YOUR HOME
            </span>
            <button className="mt-4 px-6 py-3 border border-black hover:border-darkYellow hover:text-darkYellow">
              Discover now
            </button>
          </div>
        </div>
        {/* {Sub Discover} */}
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:gap-8">
          <div className="relative">
            <Image
              src={Discover1}
              alt="Discover"
              width={840}
              height={540}
              className="w-full h-full"
            />
            <div className="flex flex-col items-start w-2/5 absolute right-10 top-1/2 -translate-y-1/2">
              <h4 className="xl:text-xl md:text-md text-base font-medium text-[#000]">
                Kitchen utensils
              </h4>
              <button className="mt-2 font-bold text-base hover:border-darkYellow hover:text-darkYellow">
                Shop now
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={Discover2}
              alt="Discover"
              width={840}
              height={540}
              className="w-full h-full"
            />
            <div className="flex flex-col items-start w-2/5 absolute right-10 top-1/2 -translate-y-1/2">
              <h4 className="xl:text-xl md:text-md text-base font-medium text-[#000]">
                Kitchen utensils
              </h4>
              <button className="mt-2 font-bold text-base hover:border-darkYellow hover:text-darkYellow">
                Shop now
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={Discover3}
              alt="Discover"
              width={840}
              height={540}
              className="w-full h-full"
            />
            <div className="flex flex-col items-start w-2/5 absolute right-10 top-1/2 -translate-y-1/2">
              <h4 className="xl:text-xl md:text-md text-base font-medium text-[#000]">
                Kitchen utensils
              </h4>
              <button className="mt-2 font-bold text-base hover:border-darkYellow hover:text-darkYellow">
                Shop now
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={Discover4}
              alt="Discover"
              width={840}
              height={540}
              className="w-full h-full"
            />
            <div className="flex flex-col items-start w-2/5 absolute right-10 top-1/2 -translate-y-1/2">
              <h4 className="xl:text-xl md:text-md text-base font-medium text-[#000]">
                Kitchen utensils
              </h4>
              <button className="mt-2 font-bold text-base hover:border-darkYellow hover:text-darkYellow">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
