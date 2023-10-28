import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mt-8 flex gap-8 font-tertiary">
      <div className="flex border border-gray-300 w-[220px] h-[300px] bg-grayF6">
        <Link
          href={"/user"}
          className="px-6 py-4 text-base text-grayC font-medium uppercase"
        >
          Profile
        </Link>
      </div>
      <div className="flex-1 bg-grayF6"></div>
    </div>
  );
};

export default page;
