import { Fragment } from "react";
import Banner from "./_modules/banner";
import Image from "next/image";
import { Services } from "./_constants/general.const";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      {/* {Service} */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8">
        {Services.map((service) => (
          <div
            key={service.desc}
            className="flex flex-col justify-center items-center gap-y-4"
          >
            <Image
              src={service.img}
              alt="Service"
              width={77}
              height={77}
              className="w-[77px] h-[77px] object-cover"
            />
            <h3 className="text-base font-semibold text-center">
              {service.title}
            </h3>
            <p className="text-sm font-normal text-[#777] text-center">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
      {/* {Discover} */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
    </Fragment>
  );
}
