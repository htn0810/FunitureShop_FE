import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/app/_icons";
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
        <div className="columns-1 p-8 bg-grayF6">
          <div className="flex items-center gap-x-4">
            <span className="p-3 rounded-full bg-darkYellow text-white">
              <PhoneIcon />
            </span>
            <span className="text-sm md:text-base">0972022xxx</span>
          </div>
          <div className="flex items-center gap-x-4 mt-4">
            <span className="p-3 rounded-full bg-darkYellow text-white">
              <MailIcon />
            </span>
            <span className="text-sm md:text-base">htnhanxxx@gmail.com</span>
          </div>
          <div className="flex items-center gap-x-4 mt-4">
            <span className="p-3 rounded-full bg-darkYellow text-white">
              <LocationIcon />
            </span>
            <span className="text-sm md:text-base">
              quận Tân Bình, Hồ Chí Minh
            </span>
          </div>
          <h4 className="text-base md:text-lg font-semibold text-black mt-4">
            Follow Us
          </h4>
          <div className="flex items-center gap-x-3 mt-4">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YoutubeIcon />
          </div>
        </div>
        <div className="md:col-start-2 md:col-end-4 h-[400px] p-8 bg-grayF6">
          <h2 className="text-lg md:text-2xl font-tertiary font-bold text-black">
            Get In Touch
          </h2>
          <form action="" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="">Name</label>
                <input type="text" className="w-full px-3 py-2" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default page;
