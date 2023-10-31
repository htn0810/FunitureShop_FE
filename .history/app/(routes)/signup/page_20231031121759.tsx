"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { BASE_NAME, BE_URL } from "@/app/_constants/general.const";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/_custom_hooks/redux.hook";
import { setAccount } from "@/app/_store/account.slice";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    axios
      .post(`${BE_URL}/auth/signup`, data)
      .then(function (response) {
        // console.log(response);
        if (response.status === 200 && response?.data?.message == null) {
          toast("Register successfully!", {
            type: "success",
            autoClose: 2000,
            pauseOnHover: false,
          });

          router.push(BASE_NAME!);
        }
        dispatch(
          setAccount({ email: "", firstName: "", lastName: "", roles: [""] })
        );
      })
      .catch(function (error) {
        // console.log(error);
        toast(error?.response?.data?.message, {
          type: "error",
          autoClose: 2000,
          pauseOnHover: false,
        });
      });
  };
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
          <div className="mb-6 grid grid-cols-2 gap-x-4">
            <div>
              <input
                {...register("firstName", {
                  required: "First name is required",
                  maxLength: { value: 20, message: "Maximum character is 20" },
                })}
                placeholder="First Name"
                className={`w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none ${
                  errors.firstName?.message ? "border-red-500" : ""
                }`}
              />
              {errors.firstName?.message && (
                <p className="mt-2 text-red-500 float-left">
                  {errors.firstName?.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("lastName", {
                  required: "Last name is required",
                  maxLength: { value: 20, message: "Maximum character is 20" },
                })}
                placeholder="Last Name"
                className={`w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none ${
                  errors.lastName?.message ? "border-red-500" : ""
                }`}
              />
              {errors.lastName?.message && (
                <p className="mt-2 text-red-500 float-left">
                  {errors.lastName?.message}
                </p>
              )}
            </div>
          </div>
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
              {...register("password", {
                required: "Email is required",
                minLength: {
                  value: 6,
                  message: "Minimum character is 6",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum character is 20",
                },
              })}
              placeholder="Password"
              className={`w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none ${
                errors.password?.message ? "border-red-500" : ""
              }`}
            />
            {errors.password?.message && (
              <p className="mt-2 text-red-500 float-left">
                {errors.password?.message}
              </p>
            )}
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
