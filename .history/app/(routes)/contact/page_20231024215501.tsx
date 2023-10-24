import { PhoneIcon } from "@/app/_icons";
import Thumbnail from "@/app/_modules/thumbnail";
import React from "react";
import { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <div className="w-full mb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.93893013299794!2d106.6449588!3d10.8095592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294390d095dd%3A0x2de3f8be1328c31a!2zQ8OgIFBow6ogMTY4!5e0!3m2!1svi!2s!4v1698155204236!5m2!1svi!2s"
          loading="lazy"
          className="w-full h-[500px]"
        ></iframe>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-tertiary text-grayC">
        <div className="columns-1 h-[300px] p-8 bg-grayF6">
          <div className="flex items-center gap-x-4">
            <span className="p-3 rounded-full bg-darkYellow text-white">
              <PhoneIcon />
            </span>
            <span className="text-sm md:text-base">0972022xxx</span>
          </div>
          <div className="flex items-center gap-x-4 mt-4">
            <span className="p-3 rounded-full bg-darkYellow text-white">
              <PhoneIcon />
            </span>
            <span className="text-sm md:text-base">0972022xxx</span>
          </div>
          <div className="flex items-center gap-x-4 mt-4">
            <span className="p-3 rounded-full bg-darkYellow text-white">
              <PhoneIcon />
            </span>
            <span className="text-sm md:text-base">0972022xxx</span>
          </div>
        </div>
        <div className="md:col-start-2 md:col-end-4 h-[400px] bg-grayF6"></div>
      </div>
    </Fragment>
  );
};

export default page;
