import React, { InputHTMLAttributes } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
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
      /
    </div>
  );
};

export default Input;
