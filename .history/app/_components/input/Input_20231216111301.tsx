import React, { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  id: string;
  label: string;
  errors: any;
  register: UseFormRegister<FieldValues>; // declare register props
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  errors,
  register,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...register(id)}
        // placeholder="First Name"
        // className={`w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none ${
        //   errors.firstName.message ? "border-red-500" : ""
        // }`}
        {...rest}
      />
      {/* {errors.firstName?.message && (
        <p className="mt-2 text-red-500 float-left">
          {errors.firstName.message}
        </p>
      )} */}
    </div>
  );
};

export default Input;
