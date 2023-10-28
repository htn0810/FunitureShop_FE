import React, { Fragment } from "react";
import ArrowLeftIcon from "../../../_icons/ArrowLeftIcon";
import Image from "next/image";

const page = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-3 gap-8">
        <div className="w-[200px] h-[200px] rounded-full bg-cyan-500">
          <Image src={} alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </Fragment>
  );
};

export default page;
