import { HeaderLinks } from "@/app/_constants/general.const";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoWhite from "@/app/_assets/images/logo_white.png";

const MenuSidebar = () => {
  return (
    <div className="w-full h-full px-6 py-20 bg-grayDarkC">
      <ul className="flex flex-col w-full p-8 text-white uppercase gap-y-8">
        {HeaderLinks.map((headerItem) => (
          <Link href={headerItem.path} key={headerItem.title}>
            <li className="cursor-pointer hover:text-pinkC ">
              {headerItem.title}
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        <Image
          src={LogoWhite}
          alt="Logo"
          width={96}
          height={24}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default MenuSidebar;
