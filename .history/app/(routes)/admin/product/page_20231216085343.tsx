import { CreateIcon } from "@/app/_icons";
import React from "react";
import { Fragment } from "react";

const Page = () => {
  return (
    <Fragment>
      <div className="w-full h-10 bg-gray-200 flex justify-end">
        <CreateIcon className="w-10 h-10 text-darkYellow cursor-pointer hover:scale-105" />
      </div>
    </Fragment>
  );
};

export default Page;