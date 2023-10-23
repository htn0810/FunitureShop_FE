import { FindIcon } from "@/app/_icons";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-start justify-center bg-lightYellow h-[200px] px-[15px] md:px-[40px] xl:px-[90px] mb-20 mx-[-15px] md:mx-[-40px] xl:mx-[-90px]">
        <h1 className="text-2xl xl:text-4xl font-semibold text-shadow shadow-gray-600">
          Shop
        </h1>
        <span className="text-base md:text-lg">
          Happiness is receiving you ordered online!
        </span>
      </div>
      <div>
        <input type="text" placeholder="Search here..." />
        <button>
          <FindIcon />
        </button>
      </div>
    </div>
  );
};

export default page;
