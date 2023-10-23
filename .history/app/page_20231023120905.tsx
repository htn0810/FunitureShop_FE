import { Fragment } from "react";
import Banner from "./_modules/banner";
import Image from "next/image";

export default function Home() {
  return (
    <Fragment>
      <Banner />
      <div className="grid grid-cols-4">
        <div>
          <Image
            src={""}
            alt="Service"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          ></Image>
        </div>
      </div>
    </Fragment>
  );
}
