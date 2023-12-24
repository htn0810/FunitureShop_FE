import { CreateIcon } from "@/app/_icons";
import { Tooltip } from "antd";
import React from "react";
import { Fragment } from "react";

const Page = () => {
  return (
    <Fragment>
      <div className="w-full h-10 bg-gray-200 flex justify-end">
        <Tooltip placement="top" title="Create new product" color={"volcano"}>
          <CreateIcon className="w-10 h-10 text-darkYellow cursor-pointer hover:scale-105" />
        </Tooltip>
      </div>
    </Fragment>
  );
};

export default Page;
