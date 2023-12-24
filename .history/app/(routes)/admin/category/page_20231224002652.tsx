"use client";
import ToolTip from "@/app/_components/tooltip";
import { CreateIcon } from "@/app/_icons";
import { Category } from "@/app/_models/Category";
import { Modal, Upload, UploadFile } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Category>();
  return (
    <Fragment>
      <div className="w-full h-10 flex justify-end">
        <ToolTip placement="top" title="Create new category">
          <CreateIcon
            className="w-10 h-10 text-darkYellow cursor-pointer hover:scale-105"
            onClick={() => setOpenDialog(true)}
          />
        </ToolTip>
      </div>
      <Modal
        title="Add New Category"
        open={openDialog}
        // confirmLoading={confirmLoading}
        className="bg-white rounded-lg"
        centered
        width={800}
        onCancel={() => {
          setOpenDialog(false);
          // reset();
        }}
        okButtonProps={{ style: { background: "#b19361" } }}
        okText="Add"
        // onOk={handleSubmit(onSubmit)}
      >
        <form className="w-full">
          <div className="mb-7">
            <input
              {...register("name", {
                required: "Category's name is required",
                maxLength: { value: 50, message: "Maximum character is 50" },
              })}
              placeholder="Category Name"
              className={`w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none ${
                errors.name?.message ? "border-red-500" : ""
              }`}
            />
            {errors.name?.message && (
              <p className="mt-2 text-red-500 float-left">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="mb-7">
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
              fileList={fileList}
              // onPreview={handlePreview}
              // onChange={handleChange}
            >
              {fileList.length >= 8 ? null : <UploadButton />}
            </Upload>
          </div>
          {/* <div className="mb-7">
            <textarea
              {...register("description", {
                required: "Description is required",
                maxLength: { value: 200, message: "Maximum character is 200" },
              })}
              className={`w-full px-3 py-4 border border-solid focus:border-darkYellow outline-none ${
                errors.description?.message ? "border-red-500" : ""
              }`}
              placeholder="Enter description here..."
            ></textarea>
            {errors.description?.message && (
              <p className="mt-1 text-red-500 float-left">
                {errors.description?.message}
              </p>
            )}
          </div>
          <div className="mb-7 grid grid-cols-3 gap-x-4 justify-center items-center">
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
              <label
                htmlFor="price"
                className="flex gap-x-4 font-semibold mb-2"
              >
                Price
              </label>
              <InputNumber
                id="price"
                defaultValue={0}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value: any) => value!.replace(/\$\s?|(,*)/g, "")}
                onChange={(value) => setPrice(value)}
              />
            </div>
            <div className="text-base">
              <label
                htmlFor="discount"
                className="flex gap-x-4 font-semibold mb-2"
              >
                Discount
              </label>
              <InputNumber
                id="discount"
                defaultValue={0}
                min={0}
                max={99}
                formatter={(value) => `${value}%`}
                parser={(value: any) => value!.replace("%", "")}
                onChange={(value) => setDiscountPercent(value)}
              />
            </div>
          </div>
          <div className="mb-7">
            <label
              htmlFor="category"
              className="flex gap-x-4 font-semibold mb-2"
            >
              Category
            </label>
            <AutoComplete
              id="category"
              options={options}
              style={{ width: "100%" }}
              onSelect={onSelect}
              onSearch={(text) => setOptions(getPanelValue(text))}
              placeholder="input here"
              className="hover:border-darkYellow"
            />
          </div>
          <div className="mb-7">
            <label htmlFor="brand" className="flex gap-x-4 font-semibold mb-2">
              Brand
            </label>
            <AutoComplete
              id="brand"
              options={options}
              style={{ width: "100%" }}
              onSelect={onSelect}
              onSearch={(text) => setOptions(getPanelValue(text))}
              placeholder="input here"
            />
          </div> */}
        </form>
      </Modal>
    </Fragment>
  );
};

const UploadButton = () => (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);

export default Page;
