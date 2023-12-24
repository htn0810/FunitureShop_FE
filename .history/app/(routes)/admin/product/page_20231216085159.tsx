import { CreateIcon } from "@/app/_icons";
import React from "react";
import { Fragment } from "react";

const Page = () => {
  return (
    <Fragment>
      <div className="w-full h-10 bg-gray-200 text-right">
        <CreateIcon className="w-10 h-10 bg-darkYellow text-darkYellow" />
      </div>
    </Fragment>
  );
};

export default Page;
