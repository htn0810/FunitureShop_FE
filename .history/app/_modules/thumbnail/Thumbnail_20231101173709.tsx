import { FindIcon } from "@/app/_icons";
import React from "react";

interface IThumbnailProps {
  title: string;
  desc: string;
  hasInput: boolean;
}

const Thumbnail = (props: IThumbnailProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 h-[200px] mb-20 bg-lightYellow px-[15px] md:px-[40px] xl:px-[90px]  mx-[-15px] md:mx-[-40px] xl:mx-[-90px]">
      <div className="flex flex-col items-start justify-center col-start-1 col-end-3 w-full h-full">
        <h1 className="text-2xl xl:text-4xl font-semibold text-shadow shadow-gray-600">
          {props.title}
        </h1>
        <span className="text-base md:text-lg">{props.desc}</span>
      </div>
      {props.hasInput && (
        <div className="col-start-3 col-end-6 flex flex-1 items-center">
          <input
            type="text"
            placeholder="Search here..."
            className="h-[40px] w-full max-w-[600px] outline-none px-3"
          />
          <button className="h-[40px] px-3 bg-darkYellow opacity-95 hover:opacity-70">
            <FindIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;
