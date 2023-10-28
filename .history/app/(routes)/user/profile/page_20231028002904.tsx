import React, { Fragment } from "react";
import Image from "next/image";
import Avatar from "@/app/_assets/images/banner-style-2-img-2.jpg";

const page = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-3 gap-8">
        <div className="w-[200px] h-[200px] rounded-full bg-cyan-500 overflow-hidden">
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
