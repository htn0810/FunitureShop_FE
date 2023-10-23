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
          <div key={service.desc}>
            <Image
              src={service.img}
              alt="Service"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            ></Image>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
