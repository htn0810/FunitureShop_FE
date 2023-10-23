import { Fragment } from "react";
import Banner from "./_modules/banner";
import Image from "next/image";
import { Services } from "./_constants/general.const";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      <div className="grid grid-cols-4">
        {Services.map((service) => (
          <div key={service.desc} className="flex flex-col">
            <Image
              src={service.img}
              alt="Service"
              width={77}
              height={77}
              className="w-[77px] h-[77px] object-cover"
            ></Image>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
