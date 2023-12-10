"use client";
import { BE_URL, LOGIN_URL, UserLinks } from "@/app/_constants/general.const";
import Thumbnail from "@/app/_modules/thumbnail";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Fragment, useEffect } from "react";
// import axios from "axios";
import Cookies from "universal-cookie";
import axios from "@/app/_utils/axios/axiosConfig";
import { useAppSelector } from "@/app/_custom_hooks/redux.hook";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathName = usePathname();
  const cookies = new Cookies({ path: "/" });
  const account = useAppSelector((state) => state.account);

  useEffect(() => {
    if (account.email === "") {
      console.log("hello");
      router.push(LOGIN_URL);
    }
  }, [account]);

  // axios
  //   .get(`${BE_URL}/demo`)
  //   .then((res: any) => console.log(res))
  //   .catch((err: any) => console.log(err));
  return (
    <Fragment>
      <Thumbnail hasInput={false} title="Manage" desc="Manage your account" />
      <div className="mt-8 flex flex-col lg:flex-row gap-8 font-tertiary">
        <div className="flex flex-row border border-gray-300 justify-center lg:w-[220px] max-h-[168px] bg-grayF6 lg:flex-col">
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
