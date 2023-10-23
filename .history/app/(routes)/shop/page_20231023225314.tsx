import { FindIcon } from "@/app/_icons";
import React from "react";

const page = () => {
  return (
    <div className="bg-lightYellow h-[200px] px-[15px] md:px-[40px] xl:px-[90px] mb-20 mx-[-15px] md:mx-[-40px] xl:mx-[-90px]">
      <div className="grid grid-cols-5">
        <div className="flex flex-col items-start justify-center col-start-1 col-end-3 w-full h-full">
          <h1 className="text-2xl xl:text-4xl font-semibold text-shadow shadow-gray-600">
            Shop
          </h1>
          <span className="text-base md:text-lg">
            Happiness is receiving you ordered online!
          </span>
        </div>
        <div className="col-start-3 col-end-6">
          <input type="text" placeholder="Search here..." />
          <button>
            <FindIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
