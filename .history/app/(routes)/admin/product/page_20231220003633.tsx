"use client";
import ToolTip from "@/app/_components/tooltip";
import { Product } from "@/app/_constants/type.const";
import { CreateIcon } from "@/app/_icons";
import { AutoComplete, InputNumber, Modal } from "antd";
import React, { useState } from "react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);

  const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
  });

  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  return (
    <Fragment>
      <div className="w-full h-10 flex justify-end">
        <ToolTip placement="top" title="Create new product">
          <CreateIcon
            className="w-10 h-10 text-darkYellow cursor-pointer hover:scale-105"
            onClick={() => setOpenDialog(true)}
          />
        </ToolTip>
      </div>

      <Modal
        title="Add New Product"
        open={openDialog}
        // confirmLoading={confirmLoading}
        className="bg-white rounded-lg"
        width={800}
        onCancel={() => setOpenDialog(false)}
      >
        <form className="w-full">
          <div className="mb-6">
            <input
              {...register("productName", {
                required: "Product name is required",
                maxLength: { value: 50, message: "Maximum character is 50" },
              })}
              placeholder="Product Name"
              className={`w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none ${
                errors.productName?.message ? "border-red-500" : ""
              }`}
            />
            {errors.productName?.message && (
              <p className="mt-2 text-red-500 float-left">
                {errors.productName?.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <textarea
              {...register("description", {
                required: "Description is required",
                maxLength: { value: 200, message: "Maximum character is 200" },
              })}
              className={`w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none ${
                errors.description?.message ? "border-red-500" : ""
              }`}
              name="comment"
              form="usrform"
              placeholder="Enter description here..."
            ></textarea>
            {errors.description?.message && (
              <p className="mt-2 text-red-500 float-left">
                {errors.description?.message}
              </p>
            )}
          </div>
          <div className="mb-6 grid grid-cols-3 gap-x-4 justify-center items-center">
            <div>
              <p className="font-semibold text-base mb-2">In stock</p>
              <div className="mr-4 inline-block">
                <label htmlFor="yes" className="flex gap-x-4">
                  <input
                    {...register("instock")}
                    type="radio"
                    value="Yes"
                    id="yes"
                  />
                  Yes
                </label>
              </div>
              <div className="mr-4 inline-block">
                <label htmlFor="no" className="flex gap-x-4">
                  <input
                    {...register("instock")}
                    type="radio"
                    value="No"
                    id="no"
                  />
                  No
                </label>
              </div>
            </div>
            <div className="text-base">
              <label htmlFor="price" className="flex gap-x-4 font-semibold">
                Price
              </label>
              <InputNumber
                id="price"
                defaultValue={1000}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value: any) => value!.replace(/\$\s?|(,*)/g, "")}
                // onChange={onChange}
              />
            </div>
            <div className="text-base">
              <label htmlFor="discount" className="flex gap-x-4 font-semibold">
                Discount
              </label>
              <InputNumber
                id="discount"
                defaultValue={0}
                min={0}
                max={99}
                formatter={(value) => `${value}%`}
                parser={(value: any) => value!.replace("%", "")}
                // onChange={onChange}
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="category" className="flex gap-x-4 font-semibold">
              Category
            </label>
            <AutoComplete
              id="category"
              options={options}
              style={{ width: 100 }}
              onSelect={onSelect}
              onSearch={(text) => setOptions(getPanelValue(text))}
              placeholder="input here"
            />
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default Page;