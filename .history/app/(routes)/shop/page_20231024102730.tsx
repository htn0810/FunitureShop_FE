"use client";
import { GridIcon, ListIcon } from "@/app/_icons";
import { Select } from "antd";
import Image from "next/image";
import React from "react";
import Product from "@/app/_assets/images/trending1.png";

const page = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="">
      <div className="flex justify-between items-center mb-20">
        <div className="flex items-center gap-x-2">
          <button className="p-2 rounded-full flex items-center justify-center hover:text-grayC bg-darkYellow">
            <GridIcon />
          </button>
          <button className="p-2 rounded-full flex items-center justify-center hover:text-grayC">
            <ListIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="text-lg leading-none">Sort By:</span>
          <Select
            defaultValue="lucy"
            style={{ width: 150, height: 40 }}
            onChange={handleChange}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
              { value: "disabled", label: "Disabled", disabled: true },
            ]}
          />
        </div>
      </div>
      {/* List Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8">
        {/* Product Items */}
        <div className="overflow-hidden">
          <Image src={Product} alt="Product" className="" />
          <h3 className="font-secondary font-semibold text-md md:text-lg xl:text-xl text-black hover:text-darkYellow cursor-pointer">
            Epicuri Per Lobortis
          </h3>
        </div>
      </div>
    </div>
  );
};

export default page;
