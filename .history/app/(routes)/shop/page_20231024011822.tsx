import { GridIcon, ListIcon } from "@/app/_icons";
import React from "react";

const page = () => {
  return (
    //   {/* Products */}
    <div className="">
      <div className="flex justify-between items-center gap-x-8">
        <div className="flex items-center">
          <button className="p-2 rounded-full flex items-center justify-center hover:text-darkYellow bg-darkYellow">
            <GridIcon />
          </button>
          <button className="p-2 rounded-full flex items-center justify-center hover:text-white font-semibold bg-darkYellow">
            <ListIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
