import Thumbnail from "@/app/_modules/thumbnail";
import React from "react";
import { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.93893013299794!2d106.6449588!3d10.8095592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294390d095dd%3A0x2de3f8be1328c31a!2zQ8OgIFBow6ogMTY4!5e0!3m2!1svi!2s!4v1698155204236!5m2!1svi!2s"
          //   style="border:0;"
          //   allowfullscreen={true}
          loading="lazy"
          //   referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-[500px]"
        ></iframe>
      </div>
    </Fragment>
  );
};

export default page;
