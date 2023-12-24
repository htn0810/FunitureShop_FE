"use client";
import Input from "@/app/_components/input";
import ToolTip from "@/app/_components/tooltip";
import { Product } from "@/app/_constants/type.const";
import { CreateIcon } from "@/app/_icons";
import { Modal } from "antd";
import React, { useState } from "react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

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
          <Input
            id="productName"
            label="Product Name"
            errors={errors}
            {...register("productName", {})}
          ></Input>
        </form>
      </Modal>
    </Fragment>
  );
};

export default Page;
