import React from "react";

const DiscountItem = () => {
  return (
    <div className="mt-32 flex h-[579px] w-full  items-center justify-center px-4">
      <div className="flex w-[1100px] items-center md:gap-x-8 lg:gap-x-20">
        <div className="basis-1/2">
          <h2
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-xl font-bold font-primary text-primaryTextC md:text-3xl lg:text-4xl"
          >
            20% Discount Of All Products
          </h2>
          <h3 className="mt-2 text-xl font-semibold font-primary text-pinkC md:mt-4">
            Eams Sofa Compact
          </h3>
          <ol
            data-aos="fade-left"
            data-aos-duration="1000"
            className="my-3 flex flex-col gap-y-4 text-xs font-medium text-[#ACABC3] md:my-7 md:text-sm lg:text-base"
          >
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </li>
            <li>Arms, backs and seats are structurally reinforced</li>
          </ol>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex items-center gap-x-5"
          >
            <button className="rounded-lg bg-pinkC px-3 py-3 text-base leading-4 text-white hover:opacity-70 md:px-6 md:py-[14px]">
              Shop now
            </button>
          </div>
        </div>
        <div className="relative basis-1/2 ">
          <img
            data-aos="zoom-out"
            data-aos-duration="1000"
            className="relative z-10 object-cover md:h-[391px] md:w-[350px] lg:h-[550px] lg:w-[509px]"
            srcSet="images/discount/discount1.png 2x"
            alt="uniqueImage"
          />
          <div className="absolute top-0 bottom-0 right-0 -left-3 z-[1] scale-x-75 scale-y-75 rounded-unique bg-[#F5E1FC] md:scale-x-110"></div>
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
