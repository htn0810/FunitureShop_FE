"use client";
import { GridIcon, ListIcon } from "@/app/_icons";
import React, { useState } from "react";

const Page = () => {
  const [gridLayout, setGridLayout] = useState<boolean>(true);
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <button
          onClick={() => setGridLayout(true)}
          className={`p-2 rounded-full flex items-center justify-center hover:text-grayC ${
            gridLayout ? "bg-darkYellow" : ""
          }`}
        >
          <GridIcon />
        </button>
        <button
          onClick={() => setGridLayout(false)}
          className={`p-2 rounded-full flex items-center justify-center hover:text-grayC  ${
            gridLayout ? "" : "bg-darkYellow"
          }`}
        >
          <ListIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Page;
