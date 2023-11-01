"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import Avatar from "@/app/_assets/images/banner-style-2-img-1.jpg";
import { EditIcon } from "@/app/_icons";
import { useAppSelector } from "@/app/_custom_hooks/redux.hook";

const Page = () => {
  const account = useAppSelector((state) => state.account);
  console.log(account);
  const [disableAddress, setDisableAddress] = useState<boolean>(true);
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-6">
        <div className="w-full h-full  overflow-hidden flex justify-center items-center">
          <Image
            src={Avatar}
            alt="Avatar"
            className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] rounded-full object-cover align-middle"
          />
        </div>
        <div className="md:col-start-2 md:col-end-4 text-base">
          <div className="grid grid-cols-2 gap-x-8 mb-4">
            <div>
              <label
                htmlFor="firstName"
                className="text-base font-medium text-grayC"
              >
                First name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Hello"
                defaultValue={account?.firstName || "Hello"}
                className="w-full px-6 py-2 rounded-sm outline-none border border-grayC mt-2 text-black"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="text-base font-medium text-grayC"
              >
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Hello"
                defaultValue={account?.lastName || "Hello"}
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
                className="w-full px-6 py-2 rounded-sm outline-none border border-grayC mt-2 text-black relative cursor-auto focus:border-darkYellow"
                disabled={disableAddress}
                autoFocus={true}
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
