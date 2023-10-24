"use client";
import { GridIcon, ListIcon } from "@/app/_icons";
import { Select } from "antd";
import React from "react";

const page = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    //   {/* Products */}
    <div className="">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <button className="p-2 rounded-full flex items-center justify-center hover:text-grayC bg-darkYellow">
            <GridIcon />
          </button>
          <button className="p-2 rounded-full flex items-center justify-center hover:text-grayC">
            <ListIcon className="w-6 h-6" />
          </button>
        </div>
        <div>
          <span>Sort By:</span>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
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
    </div>
  );
};

export default page;
