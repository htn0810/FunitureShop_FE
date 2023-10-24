import { FindIcon } from "@/app/_icons";
import React, { Fragment } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      {/* Banner */}
      <div className="grid grid-cols-5 gap-x-8 h-[200px] mb-20 bg-lightYellow mx-[-15px] md:mx-[-40px] xl:mx-[-90px]">
        <div className="flex flex-col items-start justify-center col-start-1 col-end-3 w-full h-full">
          <h1 className="text-2xl xl:text-4xl font-semibold text-shadow shadow-gray-600">
            Shop
          </h1>
          <span className="text-base md:text-lg">
            Happiness is receiving you ordered online!
          </span>
        </div>
        <div className="col-start-3 col-end-6 flex flex-1 items-center">
          <input
            type="text"
            placeholder="Search here..."
            className="h-[40px] w-full max-w-[600px] outline-none px-3"
          />
          <button className="h-[40px] px-3 bg-pinkC opacity-95 hover:opacity-70">
            <FindIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      {children}
    </Fragment>
  );
};

export default layout;
