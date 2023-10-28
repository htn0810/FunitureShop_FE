"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Avatar from "@/app/_assets/images/banner-style-2-img-1.jpg";
import { EditIcon } from "@/app/_icons";

const Page = () => {
  const [disableAddress, setDisableAddress] = useState<boolean>(true);
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
            <div>
              <label
                htmlFor="phone"
                className="text-base font-medium text-grayC"
              >
                Phone
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Hello"
                className="w-full px-6 py-2 rounded-sm outline-none border border-grayC mt-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-base font-medium text-grayC">
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="Hello"
              className="w-full px-6 py-2 rounded-sm outline-none border border-grayC mt-2 text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="text-base font-medium text-grayC"
            >
              Address
            </label>
            <div className="relative">
              <input
                id="address"
                type="text"
                placeholder="Hello"
                className="w-full px-6 py-2 rounded-sm outline-none border border-grayC mt-2 text-black relative"
                disabled={disableAddress}
              />
              <EditIcon
                className="absolute top-1/2 -translate-y-1/2 right-2 w-6 h-6 text-grayC cursor-pointer hover:text-black"
                onClick={() => setDisableAddress(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Page;
