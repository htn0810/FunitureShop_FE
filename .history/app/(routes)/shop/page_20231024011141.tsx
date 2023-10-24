import { GridIcon, ListIcon } from "@/app/_icons";
import React from "react";

const page = () => {
  return (
    //   {/* Products */}
    <div className="">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button className="p-2 rounded-full hover:text-darkYellow">
            <GridIcon />
          </button>
          <button>
            <ListIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
