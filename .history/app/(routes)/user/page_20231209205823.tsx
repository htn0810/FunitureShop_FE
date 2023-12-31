"use client";
import { LOGIN_URL, UserLinks } from "@/app/_constants/general.const";
import { useAppSelector } from "@/app/_custom_hooks/redux.hook";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

const Page = () => {
  const pathName = usePathname();
  const router = useRouter();
  const account = useAppSelector((state) => state.account);
  console.log(account);
  useEffect(() => {
    if (account.email !== "") {
      console.log("hello");
      router.push(LOGIN_URL);
    }
  }, [account]);
  return (
    <div className="mt-8 flex gap-8 font-tertiary">
      {/* <div className="flex flex-col border border-gray-300 w-[220px] bg-grayF6">
        {UserLinks.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            className={`px-6 py-4 text-base text-grayC font-medium uppercase hover:text-black ${
              pathName === item.path ? "border border-black" : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex-1 bg-grayF6"></div> */}
      There is no page
    </div>
  );
};

export default Page;
