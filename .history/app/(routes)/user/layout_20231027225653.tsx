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
      <div className="mt-8 flex gap-8 font-tertiary">
        <div className="flex flex-col border border-gray-300 w-[220px] bg-grayF6">
          {UserLinks.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className={`px-6 py-4 text-base text-grayC font-medium uppercase hover:text-black ${
                usePathname === item.path ? "border border-black" : ""
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
