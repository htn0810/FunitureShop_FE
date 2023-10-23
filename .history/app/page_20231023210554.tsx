import { Fragment } from "react";
import Banner from "./_modules/banner";
import Image from "next/image";
import { Services } from "./_constants/general.const";
import Discover from "@/app/_assets/images/banner-style-1-img-1.jpg";
import Discover1 from "@/app/_assets/images/banner-style-2-img-1.jpg";
import Discover2 from "@/app/_assets/images/banner-style-2-img-2.jpg";
import Discover3 from "@/app/_assets/images/banner-style-2-img-3.jpg";
import Discover4 from "@/app/_assets/images/banner-style-2-img-4.jpg";
import Trending from "./_modules/trending_product";
import DiscountItem from "./_modules/discount_product";
import ArrowRightIcon from "./_icons/ArrowRightIcon";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      {/* {Service} */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {Services.map((service) => (
          <div
            key={service.desc}
            className="flex flex-col items-center gap-y-4"
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
      {/* Trending Product */}
      <Trending />
      {/* Discount Product */}
      <DiscountItem />
      {/* Latest Blog */}
      <div className="mb-20">
        <h2 className="font-bold text-2xl md:text-[42px] text-black text-center mb-10">
          Latest Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
          <div className="overflow-hidden">
            <Image
              src={Discover}
              alt="Blog Image"
              className="mb-5 hover:scale-105 transition-transform ease-linear"
            ></Image>
            <h3 className="text-lg md:text-2xl font-semibold mb-3">
              Blog Title
            </h3>
            <p className="text-base md:text-lg text-grayC mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, a
              laudantium animi suscipit sint dicta totam voluptatem commodi quas
              beatae, illum, est inventore. Quo aut voluptatem nesciunt numquam
              voluptatibus rerum?
            </p>
            <div className="flex justify-between">
              <button className="flex justify-center items-center gap-x-3 font-secondary font-medium text-lg hover:text-darkYellow">
                READ MORE
                <ArrowRightIcon />
              </button>
              <span className="text-grayC text-base">24 APR</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
