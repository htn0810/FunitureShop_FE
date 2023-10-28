import { UserLinks } from "@/app/_constants/general.const";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const pathName = usePathname();
  return (
    <div className="mt-8 flex gap-8 font-tertiary">
      <div className="flex flex-col border border-gray-300 w-[220px] bg-grayF6">
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
      <div className="flex-1 bg-grayF6"></div>
    </div>
  );
};

export default Page;
