import { Fragment } from "react";
import Banner from "./_modules/banner";
import Image from "next/image";
import { Services } from "./_constants/general.const";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      {/* {Service} */}
      <div className="grid grid-cols-4">
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
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
