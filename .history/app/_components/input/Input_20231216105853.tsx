import React, { InputHTMLAttributes } from "react";
import {
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
      <input
        {...register("firstName", {
          required: "First name is required",
          maxLength: { value: 20, message: "Maximum character is 20" },
        })}
        placeholder="First Name"
        className={`w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none ${
          errors.firstName.message ? "border-red-500" : ""
        }`}
      />
      {errors.firstName?.message && (
        <p className="mt-2 text-red-500 float-left">
          {errors.firstName.message}
        </p>
      )}
    </div>
  );
};

export default Input;
