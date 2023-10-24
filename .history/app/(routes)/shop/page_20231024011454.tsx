import { GridIcon, ListIcon } from "@/app/_icons";
import React from "react";

const page = () => {
  return (
    //   {/* Products */}
    <div className="">
      <div className="flex justify-between items-center gap-x-8">
        <div className="flex items-center">
          <button className="p-2 rounded-full hover:text-darkYellow bg-darkYellow">
            <GridIcon />
          </button>
          <button className="p-2 rounded-full hover:text-darkYellow">
            <ListIcon className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
