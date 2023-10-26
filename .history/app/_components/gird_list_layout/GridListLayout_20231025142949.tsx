import { GridIcon, ListIcon } from "@/app/_icons";
import React from "react";

type TLayout = {
  gridLayout: boolean;
  setGridLayout: (value: boolean) => void;
};

const GridListLayout = (props: TLayout) => {
  return (
    <div className="flex items-center gap-x-2">
      <button
        onClick={() => props.setGridLayout(true)}
        className={`p-2 rounded-full flex items-center justify-center hover:text-grayC ${
          props.gridLayout ? "bg-darkYellow" : ""
        }`}
      >
        <GridIcon />
      </button>
      <button
        onClick={() => props.setGridLayout(false)}
        className={`p-2 rounded-full flex items-center justify-center hover:text-grayC  ${
          props.gridLayout ? "" : "bg-darkYellow"
        }`}
      >
        <ListIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default GridListLayout;
