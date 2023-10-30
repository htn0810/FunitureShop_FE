"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <Fragment>
      <div className="my-[120px] bg-white text-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto w-[350px] md:w-[544px] px-4 md:px-14 py-[50px] shadow-md"
        >
          <h3 className="text-3xl font-bold text-black">Sign Up</h3>
          <span className="block mt-2 mb-9 text-graySoftC">
            Please create user account detail bellow.
          </span>
          <div className="mb-6 grid grid-cols-2 gap-x-3">
            <input
              {...register("firstName", {
                required: "This field is required!",
                maxLength: { value: 20, message: "Max length is 20" },
              })}
              placeholder="First name"
              className="w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none"
            />
            <input
              {...register("lastName", {
                required: "This field is required!",
                maxLength: { value: 12, message: "Max length is 12" },
                pattern: /^[A-Za-z]+$/i,
              })}
              placeholder="Last name"
              className="w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              {...register("email", {
                required: "This field is required!",
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
              placeholder="Email address"
              className="w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none"
            />
          </div>
          <div className="mb-6">
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              placeholder="Password"
              className="w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-base font-bold text-center text-white bg-black hover:bg-darkYellow"
          >
            Create
          </button>
          <span className="block mt-7 text-graySoftC">
            Already have an Account?{" "}
            <Link href="/login" className="text-pinkC underline">
              Login
            </Link>
          </span>
        </form>
      </div>
    </Fragment>
  );
};

export default Page;
