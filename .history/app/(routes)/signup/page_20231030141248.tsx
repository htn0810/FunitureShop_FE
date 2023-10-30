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
          <div className="grid grid-cols-2 gap-x-3">
            <div>
              <input
                {...register("firstName", {
                  required: "This field is required!",
                  maxLength: { value: 20, message: "Max length is 20" },
                })}
                placeholder="First name"
                className={`w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none ${
                  errors.firstName?.message ? "border-red-500" : "text-black"
                }`}
              />
              <p
                className={`mt-2 float-left ${
                  errors.firstName?.message ? "text-red-500" : "text-black"
                }`}
              >
                {errors.firstName?.message}
              </p>
            </div>
            <div>
              <input
                {...register("lastName", {
                  required: "This field is required!",
                  maxLength: { value: 12, message: "Max length is 12" },
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "Name is not include number",
                  },
                })}
                placeholder="Last name"
                className={`w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none ${
                  errors.lastName?.message ? "border-red-500" : "text-black"
                }`}
              />
              <p
                className={`mt-2 float-left ${
                  errors.lastName?.message ? "text-red-500" : "text-black"
                }`}
              >
                {errors.lastName?.message}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <input
              {...register("email", {
                required: "This field is required!",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Invalid email!",
                },
              })}
              placeholder="Email address"
              className="w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none"
            />
            <p
              className={`mt-2 float-left ${
                errors.password?.message ? "text-red-500" : "text-black"
              }`}
            >
              {errors.password?.message}
            </p>
          </div>
          <div className="mt-6">
            <input
              {...register("password", {
                required: "This field is required!",
                minLength: { value: 6, message: "Minumum character is 6" },
                maxLength: { value: 12, message: "Maximum character is 12" },
              })}
              placeholder="Password"
              className="w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none"
            />
            <p
              className={`mt-2 float-left ${
                errors.password?.message ? "text-red-500" : "text-black"
              }`}
            >
              {errors.password?.message}
            </p>
          </div>
          <button
            type="submit"
            className="w-full mt-6 py-3 text-base font-bold text-center text-white bg-black hover:bg-darkYellow"
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
