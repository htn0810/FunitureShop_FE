"use client";
import GridListLayout from "@/app/_components/gird_list_layout";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import Blog from "@/app/_assets/images/discount1.png";
import ArrowRightIcon from "../../_icons/ArrowRightIcon";

const Page = () => {
  const [gridLayout, setGridLayout] = useState<boolean>(true);
  return (
    <Fragment>
      <GridListLayout gridLayout={gridLayout} setGridLayout={setGridLayout} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Grid Item Blog */}
        <div className="font-tertiary ">
          <div className="bg-grayF6 h-[300px] md:h-[340px] lg:h-[360px] 2xl:h-[380px]">
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
          <h3 className="mt-2 text-xl md:text-2xl font-semibold">
            Blog Image Post
          </h3>
          <p className="mt-4 text-sm md:text-base text-grayC leading-6 md:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            unde aliquid consectetur, dicta repellat cumque harum? Quas vero ut
            distinctio. Provident ex quibusdam aliquam, pariatur enim
            repudiandae vitae doloribus tempore.
          </p>
          <button className="uppercase text-base md:text-lg font-semibold mt-6 flex items-center gap-x-2 hover:text-darkYellow">
            Read More
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Page;
