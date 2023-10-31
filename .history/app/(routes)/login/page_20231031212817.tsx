"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IInputLogin {
  email: string;
  password: string;
}

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputLogin>();

  const onSubmit: SubmitHandler<IInputLogin> = (data) => {
    console.log(data);
  };
  return (
    <Fragment>
      <div className="my-[120px] bg-white text-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto w-[350px] md:w-[544px] px-4 md:px-14 py-[50px] shadow-md"
        >
          <h3 className="text-3xl font-bold text-black">Sign In</h3>
          <span className="block mt-2 mb-9 text-graySoftC">
            Please login using account detail bellow.
          </span>
          <div className="mb-6">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Invalid email",
                },
              })}
              placeholder="Email"
              className={`w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none ${
                errors.email?.message ? "border-red-500" : ""
              }`}
            />
            {errors.email?.message && (
              <p className="mt-2 text-red-500 float-left">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Password"
              className="w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-base font-bold text-center text-white bg-black hover:bg-darkYellow"
          >
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

export default Page;