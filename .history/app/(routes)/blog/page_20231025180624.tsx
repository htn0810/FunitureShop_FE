"use client";
import GridListLayout from "@/app/_components/gird_list_layout";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import Blog from "@/app/_assets/images/discount1.png";
import ArrowRightIcon from "../../_icons/ArrowRightIcon";
import { v4 as uuidv4 } from "uuid";
import { FindIcon, StarIcon } from "@/app/_icons";

const Page = () => {
  const [gridLayout, setGridLayout] = useState<boolean>(true);
  return (
    <Fragment>
      <GridListLayout gridLayout={gridLayout} setGridLayout={setGridLayout} />
      {!gridLayout ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {Array(20)
            .fill(0)
            .map(() => (
              // {/* Grid Item Blog */}
              <div key={uuidv4()} className="font-tertiary">
                <div className="bg-grayF6 h-[300px] md:h-[340px] lg:h-[360px] 2xl:h-[380px] cursor-pointer">
                  <Image
                    src={Blog}
                    alt="Blog Item"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mt-4">
                  <span className="uppercase text-sm md:text-base font-thin text-grayC">
                    Posted by: <span className="text-black">Admin</span> / On:{" "}
                    <span className="text-black"> April 24, 2018</span>
                  </span>
                </div>
                <h3 className="mt-2 md:mt-4 text-xl md:text-2xl font-semibold cursor-pointer hover:text-darkYellow">
                  Blog Image Post
                </h3>
                <p className="mt-4 text-sm md:text-base text-grayC leading-6 md:leading-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam unde aliquid consectetur, dicta repellat cumque
                  harum? Quas vero ut distinctio. Provident ex quibusdam
                  aliquam, pariatur enim repudiandae vitae doloribus tempore.
                </p>
                <button className="uppercase text-base md:text-lg font-semibold mt-6 flex items-center gap-x-2 hover:text-darkYellow">
                  Read More
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            ))}
        </div>
      ) : (
        <div className="mt-8">
          {/* List Blog Item */}
          <div className="">
            {Array(24)
              .fill(0)
              .map(() => (
                <div key={uuidv4()} className="flex gap-8 mb-8">
                  <div className="bg-grayF6 flex items-center justify-center w-[350px] h-[400px] flex-shrink-0">
                    <Image
                      src={Blog}
                      alt="Product"
                      className="w-[200px] h-[200px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="uppercase font-bold text-lg md:text-xl text-black hover:text-darkYellow mb-4 cursor-pointer">
                      Condimentum posuere
                    </h3>
                    <div className="flex items-center gap-x-1 text-base md:text-lg mb-2">
                      <span className="text-center">4.5</span>
                      <StarIcon className="w-4 h-4 text-darkYellow" />
                    </div>
                    <span className="text-base md:text-lg">$95.00</span>
                    <p className="text-base md:text-lg text-grayC mb-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, natus illum deleniti quod illo voluptas
                      voluptatum dolores! Asperiores officia eos dolorem animi,
                      quam quas laudantium doloremque, harum alias adipisci
                      dicta.
                    </p>
                    <div className="flex items-center gap-x-2">
                      <button className="uppercase font-tertiary font-semibold text-white text-base md:text-lg px-5 h-14 bg-grayDarkC rounded-md hover:bg-darkYellow">
                        Add to cart
                      </button>
                      <button className="text-white px-5 h-14 bg-grayDarkC rounded-md flex items-center justify-center hover:bg-darkYellow">
                        <FindIcon className="" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Page;
