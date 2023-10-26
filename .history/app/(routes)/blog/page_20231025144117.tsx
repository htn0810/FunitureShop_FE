"use client";
import GridListLayout from "@/app/_components/gird_list_layout";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import Blog from "@/app/_assets/images/discount1.png";

const Page = () => {
  const [gridLayout, setGridLayout] = useState<boolean>(true);
  return (
    <Fragment>
      <GridListLayout gridLayout={gridLayout} setGridLayout={setGridLayout} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Grid Item Blog */}
        <div>
          <div className="bg-grayF6 h-[400px]">
            <Image
              src={Blog}
              alt="Blog Item"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Page;
