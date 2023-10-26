import { FindIcon } from "@/app/_icons";
import Thumbnail from "@/app/_modules/thumbnail";
import React from "react";
import { Fragment } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Thumbnail title="Blog" desc="Make you a better writer" hasInput={true} />
      <div className="grid grid-cols-1 flex-row-reverse space-y-reverse lg:grid-cols-4 gap-8">
        <div className="h-[200px] order-2 lg:order-none bg-grayF6 font-tertiary">
          <h4 className="relative uppercase text-xl font-semibold text-black after:block after:absolute after:w-full after:h-[2px] after:-bottom-3 after:bg-darkYellow">
            Search
          </h4>
          <div className="relative mt-8">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-3 border border-grayC rounded-lg outline-none focus:border-darkYellow"
            />
            <FindIcon className="text-grayC absolute right-0 top-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div className="h-[200px] order-1 lg:order-none bg-grayF6 lg:col-start-2 lg:col-end-5">
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default layout;
