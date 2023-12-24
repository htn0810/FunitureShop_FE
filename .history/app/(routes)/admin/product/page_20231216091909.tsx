"use client";
import ToolTip from "@/app/_components/tooltip";
import { CreateIcon } from "@/app/_icons";
import React from "react";
import { Fragment } from "react";

const Page = () => {
  return (
    <Fragment>
      <div className="w-full h-10 flex justify-end">
        <ToolTip placement="top" title="Create new product">
          <CreateIcon className="w-10 h-10 text-darkYellow cursor-pointer hover:scale-105" />
        </ToolTip>
      </div>
    </Fragment>
  );
};

export default Page;
