import Thumbnail from "@/app/_modules/thumbnail";
import Link from "next/link";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <div className="my-[120px] bg-white text-center">
        <form
          action=""
          className="mx-auto w-[350px] md:w-[544px] px-4 md:px-14 py-[50px] shadow-md"
        >
          <h3 className="text-3xl font-bold text-black">Sign In</h3>
          <span className="block mt-2 mb-9 text-graySoftC">
            Please login using account detail bellow.
          </span>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Email address"
              className="w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Password"
              className="w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none"
            />
          </div>
          <button className="w-full py-3 text-base font-bold text-center text-white bg-black hover:bg-darkYellow">
            Login
          </button>
          <span className="block mt-7 text-graySoftC">
            Don’t have an Account?{" "}
            <Link href="/signup" className="text-pinkC underline">
              Create account
            </Link>
          </span>
        </form>
      </div>
    </Fragment>
  );
};

export default page;
