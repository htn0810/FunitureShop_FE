import { FindIcon } from "@/app/_icons";
import React from "react";

const page = () => {
  return (
    <div className="bg-lightYellow  px-[15px] md:px-[40px] xl:px-[90px] mb-20 mx-[-15px] md:mx-[-40px] xl:mx-[-90px]">
      <div className="flex items-center ">
        <div className="grid grid-cols-5 gap-x-8 h-[200px] place-items-center">
          <div className="flex flex-col items-start col-start-1 col-end-3 w-full h-full">
            <h1 className="text-2xl xl:text-4xl font-semibold text-shadow shadow-gray-600">
              Shop
            </h1>
            <span className="text-base md:text-lg">
              Happiness is receiving you ordered online!
            </span>
          </div>
          <div className="col-start-3 col-end-6 flex flex-1">
            <input
              type="text"
              placeholder="Search here..."
              className="h-[40px] w-full outline-none px-3"
            />
            <button className="h-[40px] px-3 bg-pinkC opacity-95">
              <FindIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
