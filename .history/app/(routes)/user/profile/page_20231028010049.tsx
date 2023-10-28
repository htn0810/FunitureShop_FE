import React, { Fragment } from "react";
import Image from "next/image";
import Avatar from "@/app/_assets/images/banner-style-2-img-1.jpg";

const page = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-3 gap-8 px-8 py-6">
        <div className="w-[300px] h-[300px] rounded-full bg-grayF6 overflow-hidden">
          <Image
            src={Avatar}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-start-2 col-end-4 text-base">
          <div className="grid grid-cols-2 gap-x-8 mb-4">
            <div>
              <label
                htmlFor="name"
                className="text-base font-medium text-grayC"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Hello"
                className="w-full px-6 py-2 rounded-sm outline-none border border-grayC mt-2 text-black"
              />
            </div>
            <input
              type="text"
              placeholder="Hello"
              className="w-full px-6 py-2 rounded-sm outline-none border border-grayC"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default page;
