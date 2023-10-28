"use client";
import { UserLinks } from "@/app/_constants/general.const";
import Thumbnail from "@/app/_modules/thumbnail";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Fragment } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <Fragment>
      <Thumbnail
        hasInput={false}
        title="Huynh Thanh Nhan"
        desc="Manage your account"
      />
      <div className="mt-8 flex flex-col lg:flex-row gap-8 font-tertiary">
        <div className="flex flex-row border border-gray-300 justify-center lg:w-[220px] max-h-[150px] bg-grayF6 lg:flex-col">
          {UserLinks.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className={`px-6 py-4 text-base text-grayC font-medium uppercase hover:text-black ${
                pathName === item.path ? "text-white bg-darkYellow" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex-1 bg-grayF6">{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
