import React, { Fragment } from "react";
import Image from "next/image";
import Avatar from "@/app/_assets/images/banner-style-2-img-1.jpg";

const page = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-3 gap-8 px-8 py-6">
        <div className="w-[300px] h-[300px] rounded-full bg-cyan-500 overflow-hidden">
          <Image
            src={Avatar}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default page;
